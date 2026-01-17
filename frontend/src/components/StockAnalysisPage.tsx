import React from 'react';
import {
    AlertTriangle,
    TrendingUp,
    TrendingDown,
    Shield,
    Activity,
    Users,
    Newspaper,
    BarChart3,
    Loader2,
    Sparkles,
    ArrowUpRight,
    ArrowDownRight,
    CheckCircle,
    Package,
    LineChart,
    PieChart
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { AIEnhancedAnalysis } from '../types';

interface StockAnalysisPageProps {
    symbol: string;
    companyName: string;
    aiAnalysis?: AIEnhancedAnalysis;
    isLoading: boolean;
    error?: string;
    onBack: () => void;
}

export default function StockAnalysisPage({
    symbol,
    companyName,
    aiAnalysis,
    isLoading,
    error,
    onBack
}: StockAnalysisPageProps) {

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#f0f9f4] to-[#e8f5e9] flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-16 h-16 text-[#2d8a5e] animate-spin mx-auto mb-4" />
                    <p className="text-[#1a5e3a] text-xl font-bold">Running OnDemand AI Analysis...</p>
                    <p className="text-[#3da37a] text-sm mt-2">Analyzing {symbol} - this may take up to 2 minutes</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#f0f9f4] to-[#e8f5e9] flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border-2 border-red-400">
                    <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-red-800 mb-2">Analysis Failed</h2>
                    <p className="text-red-600 mb-6">{error}</p>
                    <button
                        onClick={onBack}
                        className="bg-[#d4f34e] hover:bg-[#c5e445] text-[#1a5e3a] px-6 py-3 rounded-lg font-bold"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    if (!aiAnalysis) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#f0f9f4] to-[#e8f5e9] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-[#3da37a]">No data available</p>
                    <button
                        onClick={onBack}
                        className="mt-4 bg-[#d4f34e] hover:bg-[#c5e445] text-[#1a5e3a] px-6 py-3 rounded-lg font-bold"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    // Extract agent signals for display
    const retailTrapAgent = aiAnalysis.agent_signals?.find(a => a.agent_type === 'retail_trap');
    const microstructureAgent = aiAnalysis.agent_signals?.find(a => a.agent_type === 'microstructure');
    const narrativeAgent = aiAnalysis.agent_signals?.find(a => a.agent_type === 'narrative_risk');

    // Technical indicators from agent data
    const technicalIndicators = [
        { name: 'Volume', status: 'Analyzed', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'Wicks', status: 'Checked', icon: <LineChart className="w-5 h-5" /> },
        { name: 'Delivery', status: 'Scanned', icon: <Package className="w-5 h-5" /> },
        { name: 'Deals', status: 'Reviewed', icon: <PieChart className="w-5 h-5" /> },
        { name: 'Patterns', status: 'AI Analyzed', icon: <Activity className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f9f4] to-[#e8f5e9]" style={{ fontFamily: "'JetBrains Sans', sans-serif" }}>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0a120f] via-[#1a2d26] to-[#2d4d46] text-white py-8 px-8">
                <div className="max-w-7xl mx-auto">
                    <button
                        onClick={onBack}
                        className="text-[#d4f34e]/80 hover:text-[#d4f34e] mb-4 flex items-center gap-2 text-sm transition-colors font-medium"
                    >
                        ← Back to Search
                    </button>
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white">{symbol}</h1>
                            <p className="text-[#d4f34e]/70 mt-1">{companyName}</p>
                        </div>

                        {/* Risk Score Badge */}
                        <div className="text-center bg-white/10 rounded-xl p-4">
                            <p className="text-xs text-[#d4f34e] font-bold uppercase mb-1">Risk Score</p>
                            <p className={`text-4xl font-bold ${aiAnalysis.final_risk_score > 75 ? 'text-red-400' :
                                aiAnalysis.final_risk_score > 50 ? 'text-orange-400' :
                                    aiAnalysis.final_risk_score > 25 ? 'text-yellow-400' :
                                        'text-[#d4f34e]'
                                }`}>
                                {aiAnalysis.final_risk_score.toFixed(0)}
                            </p>
                            <span className={`inline-block mt-1 px-3 py-1 rounded-lg text-xs font-bold ${aiAnalysis.final_risk_level === 'CRITICAL' ? 'bg-red-500 text-white' :
                                aiAnalysis.final_risk_level === 'HIGH' ? 'bg-orange-500 text-white' :
                                    aiAnalysis.final_risk_level === 'MEDIUM' ? 'bg-yellow-500 text-gray-900' :
                                        'bg-[#d4f34e] text-[#1a5e3a]'
                                }`}>
                                {aiAnalysis.final_risk_level}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-8 py-8">

                {/* OnDemand AI Explanation */}
                <div className="mb-8 bg-white rounded-2xl p-8 border-2 border-[#2d8a5e] shadow-lg">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="bg-gradient-to-br from-[#1a2d26] to-[#2d8a5e] p-3 rounded-xl">
                            <Sparkles className="w-6 h-6 text-[#d4f34e]" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#1a5e3a]" style={{ fontFamily: "'JetBrains Sans', sans-serif", fontWeight: 700 }}>OnDemand AI Analysis</h2>
                            <p className="text-[#3da37a] text-sm">Powered by OnDemand AI Agents</p>
                        </div>
                    </div>

                    <div className="bg-[#f0f9f4] rounded-xl p-6 mb-6 border border-[#2d8a5e]/30">
                        <div className="text-[#1a5e3a] leading-relaxed">
                            <ReactMarkdown
                                components={{
                                    strong: ({ node, ...props }) => <span className="font-bold text-[#0a2540]" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc pl-4 space-y-2 my-2" {...props} />,
                                    li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                }}
                            >
                                {aiAnalysis.ai_explanation}
                            </ReactMarkdown>
                        </div>
                    </div>

                    {/* Predictions */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {aiAnalysis.predicted_outcome && (
                            <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] p-6 rounded-xl border-2 border-[#f59e0b] flex flex-col">
                                <p className="text-xs text-[#92400e] font-bold uppercase tracking-wide mb-2">Predicted Outcome</p>
                                <p className="text-[#78350f] font-bold text-lg leading-tight mb-2">
                                    {aiAnalysis.predicted_outcome.replace(/_/g, ' ')}
                                </p>
                                <p className="text-sm text-[#92400e] mt-auto">
                                    {((aiAnalysis.prediction_confidence || 0) * 100).toFixed(0)}% confidence
                                </p>
                            </div>
                        )}

                        {aiAnalysis.recommended_action && (
                            <div className="bg-[#d4f34e] p-6 rounded-xl border-2 border-[#2d8a5e] flex flex-col">
                                <p className="text-xs text-[#1a5e3a] font-bold uppercase tracking-wide mb-2">Recommendation</p>
                                <p className="text-[#1a5e3a] font-bold text-lg leading-tight">
                                    {aiAnalysis.recommended_action}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* 3 Core Pillars from OnDemand */}
                <div className="space-y-6 mb-8">
                    {/* Pillar 1: Institutional Activity (from retail_trap agent) */}
                    <div className={`bg-white rounded-2xl p-8 border-2 shadow-sm ${retailTrapAgent && retailTrapAgent.risk_score > 50 ? 'border-red-500 bg-red-50/30' : retailTrapAgent && retailTrapAgent.risk_score > 25 ? 'border-yellow-500 bg-yellow-50/30' : 'border-[#2d8a5e]'}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#1a2d26] to-[#2d8a5e] rounded-xl flex items-center justify-center">
                                <Users className="w-7 h-7 text-[#d4f34e]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1a5e3a]">Institutional Activity</h3>
                                <p className="text-sm text-[#3da37a]">Analyzed by OnDemand AI Agent</p>
                            </div>
                            {retailTrapAgent && (
                                <div className="ml-auto">
                                    <span className={`px-3 py-1 rounded-lg text-sm font-bold ${retailTrapAgent.risk_score > 50 ? 'bg-red-100 text-red-700' :
                                        retailTrapAgent.risk_score > 25 ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-[#d4f34e] text-[#1a5e3a]'
                                        }`}>
                                        Score: {retailTrapAgent.risk_score.toFixed(0)}
                                    </span>
                                </div>
                            )}
                        </div>

                        {retailTrapAgent && retailTrapAgent.signals.length > 0 ? (
                            <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-bold text-red-800 mb-2">⚠️ Signals Detected</h4>
                                        <ul className="space-y-2">
                                            {retailTrapAgent.signals.map((signal, idx) => (
                                                <li key={idx} className="text-red-700 flex items-start gap-2">
                                                    <span className="text-red-500">•</span>
                                                    {signal}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-[#d4f34e]/40 border-2 border-[#2d8a5e] rounded-xl p-6 text-center">
                                <CheckCircle className="w-14 h-14 text-[#2d8a5e] mx-auto mb-3" />
                                <p className="text-xl font-bold text-[#1a5e3a]">Balanced Activity</p>
                                <p className="text-[#2d8a5e] mt-2 font-medium">No retail trap patterns detected</p>
                            </div>
                        )}
                    </div>

                    {/* Pillar 2: Technical Patterns (from microstructure agent) */}
                    <div className={`bg-white rounded-2xl p-8 border-2 shadow-sm ${microstructureAgent && microstructureAgent.risk_score > 50 ? 'border-red-500 bg-red-50/30' : microstructureAgent && microstructureAgent.risk_score > 25 ? 'border-yellow-500 bg-yellow-50/30' : 'border-[#2d8a5e]'}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#1a2d26] to-[#2d8a5e] rounded-xl flex items-center justify-center">
                                <BarChart3 className="w-7 h-7 text-[#d4f34e]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1a5e3a]">Technical Patterns</h3>
                                <p className="text-sm text-[#3da37a]">Microstructure Analysis by OnDemand</p>
                            </div>
                            {microstructureAgent && (
                                <div className="ml-auto">
                                    <span className={`px-3 py-1 rounded-lg text-sm font-bold ${microstructureAgent.risk_score > 50 ? 'bg-red-100 text-red-700' :
                                        microstructureAgent.risk_score > 25 ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-[#d4f34e] text-[#1a5e3a]'
                                        }`}>
                                        Score: {microstructureAgent.risk_score.toFixed(0)}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Technical Indicators Grid */}
                        <div className="grid grid-cols-5 gap-3 mb-6">
                            {technicalIndicators.map((indicator, idx) => (
                                <div key={idx} className="bg-[#f0f9f4] rounded-xl p-4 border-2 border-[#2d8a5e]/30 text-center">
                                    <div className="w-10 h-10 bg-[#2d8a5e] rounded-lg flex items-center justify-center mx-auto mb-2 text-[#d4f34e]">
                                        {indicator.icon}
                                    </div>
                                    <p className="text-xs text-[#3da37a] mb-1 font-medium">{indicator.name}</p>
                                    <p className="font-bold text-[#1a5e3a]">{indicator.status}</p>
                                </div>
                            ))}
                        </div>

                        {microstructureAgent && microstructureAgent.signals.length > 0 ? (
                            <div className="space-y-3">
                                {microstructureAgent.signals.map((signal, idx) => (
                                    <div key={idx} className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4">
                                        <div className="flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                            <p className="text-yellow-800 font-medium">{signal}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-[#d4f34e]/40 border-2 border-[#2d8a5e] rounded-xl p-8 text-center">
                                <CheckCircle className="w-16 h-16 text-[#2d8a5e] mx-auto mb-4" />
                                <p className="text-2xl font-bold text-[#1a5e3a] mb-2">✓ ALL CLEAR</p>
                                <p className="text-lg text-[#2d8a5e] font-medium">No Manipulation Patterns Detected</p>
                            </div>
                        )}
                    </div>

                    {/* Pillar 3: News Sentiment (from OnDemand) */}
                    <div className={`bg-white rounded-2xl p-8 border-2 shadow-sm ${narrativeAgent && narrativeAgent.risk_score > 50 ? 'border-red-500 bg-red-50/30' : narrativeAgent && narrativeAgent.risk_score > 25 ? 'border-yellow-500 bg-yellow-50/30' : 'border-[#2d8a5e]'}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#1a2d26] to-[#2d8a5e] rounded-xl flex items-center justify-center">
                                <Newspaper className="w-7 h-7 text-[#d4f34e]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1a5e3a]">News & Sentiment</h3>
                                <p className="text-sm text-[#3da37a]">OnDemand AI Sentiment Analysis ({aiAnalysis.news_sentiment?.length || 0} articles)</p>
                            </div>
                            {narrativeAgent && (
                                <div className="ml-auto">
                                    <span className={`px-3 py-1 rounded-lg text-sm font-bold ${narrativeAgent.risk_score > 50 ? 'bg-red-100 text-red-700' :
                                        narrativeAgent.risk_score > 25 ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-[#d4f34e] text-[#1a5e3a]'
                                        }`}>
                                        Score: {narrativeAgent.risk_score.toFixed(0)}
                                    </span>
                                </div>
                            )}
                        </div>

                        {aiAnalysis.news_sentiment && aiAnalysis.news_sentiment.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-5">
                                {aiAnalysis.news_sentiment.slice(0, 6).map((article, idx) => (
                                    <div
                                        key={idx}
                                        className="p-6 bg-[#f0f9f4] rounded-xl border-2 border-[#2d8a5e]/30"
                                    >
                                        <h4 className="font-bold text-[#1a5e3a] mb-3 leading-snug">
                                            {article.headline}
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <span className="inline-block bg-[#d4f34e] text-[#1a5e3a] px-3 py-1 rounded-lg text-xs font-bold">
                                                {article.source}
                                            </span>
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${article.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                                                article.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                                                    'bg-gray-100 text-gray-700'
                                                }`}>
                                                {article.sentiment}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-[#3da37a] text-center py-8">No news sentiment data available</p>
                        )}
                    </div>
                </div>

                {/* Key Red Flags */}
                {aiAnalysis.key_red_flags && aiAnalysis.key_red_flags.length > 0 && (
                    <div className="mb-8 bg-red-50 rounded-2xl p-8 border-2 border-red-400">
                        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6" />
                            Key Red Flags
                        </h3>
                        <ul className="space-y-2">
                            {aiAnalysis.key_red_flags.map((flag, idx) => (
                                <li key={idx} className="text-red-700 flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    {flag}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Footer */}
                <div className="text-center text-sm text-[#3da37a] py-6 font-medium">
                    Powered by OnDemand AI • Data sources: {aiAnalysis.data_sources_used?.join(' • ') || 'NSE, Google News'}
                </div>
            </div>
        </div>
    );
}

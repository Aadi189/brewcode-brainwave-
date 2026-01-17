import React, { useState } from 'react';
import { Search, TrendingUp, AlertTriangle, Shield, Bell, User, LogOut, BarChart3, Loader2, Sparkles } from 'lucide-react';
import StockAnalysisPage from './StockAnalysisPage';
import { getAIEnhancedAnalysis } from '../services/api';
import type { AIEnhancedAnalysis } from '../types';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [stockName, setStockName] = useState('');
  const [stockId, setStockId] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  // OnDemand AI analysis result (single endpoint for everything)
  const [aiAnalysis, setAiAnalysis] = useState<AIEnhancedAnalysis | undefined>();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stockId.trim()) {
      setAnalysisError('Please enter a stock symbol');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisError(null);
    setShowAnalysis(true);
    setAiAnalysis(undefined);

    const symbol = stockId.trim().toUpperCase();

    try {
      // Call single OnDemand AI endpoint that includes all 3 pillars
      const result = await getAIEnhancedAnalysis(symbol);
      setAiAnalysis(result);
    } catch (error) {
      console.error('Analysis error:', error);
      setAnalysisError(error instanceof Error ? error.message : 'Failed to analyze stock. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleBackToDashboard = () => {
    setShowAnalysis(false);
    setAnalysisError(null);
  };

  // Show analysis page if we're in analysis mode
  if (showAnalysis) {
    return (
      <StockAnalysisPage
        symbol={stockId.toUpperCase()}
        companyName={stockName || stockId.toUpperCase()}
        aiAnalysis={aiAnalysis}
        isLoading={isAnalyzing}
        error={analysisError || undefined}
        onBack={handleBackToDashboard}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9f4] to-[#e8f5e9]">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-[#0a120f] via-[#1a2d26] to-[#2d4d46] border-b border-[#d4f34e]/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#d4f34e] rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#1a2d26]" />
            </div>
            <span className="text-white font-semibold text-xl">MarketLens</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[#d4f34e]/70 hover:text-[#d4f34e] transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-[#d4f34e]/70 hover:text-[#d4f34e] transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={onLogout}
              className="text-[#d4f34e]/70 hover:text-[#d4f34e] transition-colors flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-[#1a5e3a] mb-4">
            Detect Market Manipulation
          </h1>
          <p className="text-xl text-[#3da37a] max-w-2xl mx-auto">
            Powered by OnDemand AI - Analyze shareholding, technical patterns, and news sentiment in one click
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#2d8a5e]">
            <form onSubmit={handleSearch} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#1a5e3a] mb-3">
                  Stock Name (Optional)
                </label>
                <div className="relative">
                  <TrendingUp className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#2d8a5e]" />
                  <input
                    type="text"
                    value={stockName}
                    onChange={(e) => setStockName(e.target.value)}
                    placeholder="e.g., Reliance Industries"
                    className="w-full pl-12 pr-4 py-4 border-2 border-[#2d8a5e]/30 rounded-xl focus:border-[#2d8a5e] focus:ring-2 focus:ring-[#d4f34e]/20 outline-none transition-all text-[#1a5e3a] placeholder:text-[#3da37a]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1a5e3a] mb-3">
                  Stock Symbol *
                </label>
                <div className="relative">
                  <BarChart3 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#2d8a5e]" />
                  <input
                    type="text"
                    value={stockId}
                    onChange={(e) => setStockId(e.target.value.toUpperCase())}
                    placeholder="e.g., RELIANCE, TCS, INFY"
                    className="w-full pl-12 pr-4 py-4 border-2 border-[#2d8a5e]/30 rounded-xl focus:border-[#2d8a5e] focus:ring-2 focus:ring-[#d4f34e]/20 outline-none transition-all text-[#1a5e3a] placeholder:text-[#3da37a]/50"
                    required
                  />
                </div>
                <p className="text-xs text-[#3da37a] mt-2">Enter NSE stock symbol (e.g., RELIANCE, TCS, INFY, WIPRO)</p>
              </div>

              {analysisError && !showAnalysis && (
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm">{analysisError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full bg-[#d4f34e] hover:bg-[#c5e445] disabled:opacity-50 disabled:cursor-not-allowed text-black py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3 border-2 border-[#1a5e3a]"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Running OnDemand AI Analysis...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-black" />
                    <span>Analyze with OnDemand AI</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-[#2d8a5e]">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a2d26] to-[#2d8a5e] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#d4f34e]" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#1a5e3a] mb-2">Institutional Activity</h3>
            <p className="text-sm text-[#3da37a] leading-relaxed">
              OnDemand AI analyzes FII, DII, and retail patterns to detect institutional exits and retail traps
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-[#2d8a5e]">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a2d26] to-[#2d8a5e] rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[#d4f34e]" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#1a5e3a] mb-2">Technical Patterns</h3>
            <p className="text-sm text-[#3da37a] leading-relaxed">
              AI-powered detection of price manipulation, volume anomalies, and suspicious candlesticks
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-[#2d8a5e]">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a2d26] to-[#2d8a5e] rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#d4f34e]" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#1a5e3a] mb-2">News Sentiment</h3>
            <p className="text-sm text-[#3da37a] leading-relaxed">
              OnDemand LLM analyzes news for hype, misinformation, and coordinated narratives
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#1a5e3a] mb-6">How it works</h2>
          <div className="bg-white rounded-xl p-8 border-2 border-[#2d8a5e]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4f34e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1a5e3a] font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-bold text-[#1a5e3a] mb-1">Enter stock symbol</p>
                  <p className="text-sm text-[#3da37a]">NSE symbol triggers full OnDemand AI analysis</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4f34e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1a5e3a] font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-bold text-[#1a5e3a] mb-1">OnDemand AI processes all data</p>
                  <p className="text-sm text-[#3da37a]">Shareholding, patterns, and news analyzed simultaneously</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4f34e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1a5e3a] font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-bold text-[#1a5e3a] mb-1">Get AI-powered insights</p>
                  <p className="text-sm text-[#3da37a]">Risk predictions, explanations, and recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
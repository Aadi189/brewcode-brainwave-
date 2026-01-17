import axios from 'axios';
import type {
    StockInfo,
    Shareholding,
    NewsArticle,
    MarketData,
    Pattern,
    RiskReport,
    CompleteAnalysis,
    MultiAgentAnalysis,
    AIEnhancedAnalysis
} from '../types';

// Backend URL from environment
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://brewcode-brainwave-production.up.railway.app';

const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: 120000, // 120 seconds for OnDemand AI analysis
    headers: {
        'Content-Type': 'application/json',
    },
});

// Stock Info
export async function getStockInfo(symbol: string): Promise<StockInfo> {
    const response = await api.get(`/api/stock/${symbol}`);
    return response.data;
}

// Shareholding Pattern (FII/DII/Retail)
export async function getShareholding(symbol: string): Promise<Shareholding> {
    const response = await api.get(`/api/shareholding/${symbol}`);
    return response.data;
}

// News Articles
export async function getNews(company: string, ticker: string): Promise<{ articles: NewsArticle[] }> {
    const response = await api.get(`/api/news/all/${encodeURIComponent(company)}/${ticker}`);
    return response.data;
}

// Google News Only (Yahoo returns empty)
export async function getGoogleNews(company: string, ticker: string): Promise<{ articles: NewsArticle[] }> {
    const response = await api.get(`/api/news/google/${encodeURIComponent(company)}/${ticker}`);
    return response.data;
}

// Market Data (OHLCV, Delivery, Deals)
export async function getMarketData(symbol: string, period = '3mo', deliveryDays = 30): Promise<MarketData> {
    const response = await api.get(`/api/market/all/${symbol}`, {
        params: { period, delivery_days: deliveryDays }
    });
    return response.data;
}

// Pattern Detection
export async function getPatterns(symbol: string, period = '3mo'): Promise<{ patterns: Pattern[] }> {
    const response = await api.get(`/api/patterns/${symbol}`, {
        params: { period }
    });
    return response.data;
}

// Risk Report
export async function getRiskReport(symbol: string): Promise<RiskReport> {
    const response = await api.get(`/api/risk/${symbol}`);
    return response.data;
}

// Complete Analysis (combines all data)
export async function getCompleteAnalysis(symbol: string, company: string): Promise<CompleteAnalysis> {
    const response = await api.get(`/api/analysis/complete/${symbol}`, {
        params: { company }
    });
    return response.data;
}

// Multi-Agent Analysis (6 agents)
export async function getMultiAgentAnalysis(symbol: string): Promise<MultiAgentAnalysis> {
    const response = await api.get(`/api/multi-agent/analyze/${symbol}`);
    return response.data;
}

// AI-Enhanced Analysis (OnDemand - use sparingly for rate limits)
export async function getAIEnhancedAnalysis(
    symbol: string,
    options?: {
        useAi?: boolean;
        aiWeight?: number;
        enablePredictions?: boolean;
        enableSentiment?: boolean;
    }
): Promise<AIEnhancedAnalysis> {
    const response = await api.get(`/api/ai-enhanced/analyze/${symbol}`, {
        params: {
            use_ai: options?.useAi ?? true,
            ai_weight: options?.aiWeight ?? 0.3,
            enable_predictions: options?.enablePredictions ?? true,
            enable_sentiment: options?.enableSentiment ?? true,
        }
    });
    return response.data;
}

// Quick AI Scan (lighter, uses only news)
export async function getQuickAIScan(symbol: string): Promise<{
    symbol: string;
    ai_manipulation_score: number;
    ai_confidence: number;
    manipulation_type?: string;
    key_red_flags: string[];
    recommended_action?: string;
    news_sentiment: Array<{
        headline: string;
        sentiment: string;
        confidence: number;
        source: string;
    }>;
    risk_level: string;
    news_count: number;
}> {
    const response = await api.get(`/api/ai-enhanced/quick-scan/${symbol}`);
    return response.data;
}

// Health check
export async function checkBackendHealth(): Promise<{ status: string }> {
    const response = await api.get('/api/ai-enhanced/health');
    return response.data;
}

export default api;

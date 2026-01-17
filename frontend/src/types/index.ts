// Types matching backend API responses

export interface StockInfo {
    ticker: string;
    current_price: number;
    previous_close: number;
    change_percent: number;
    volume: number;
    average_volume: number;
    volume_spike: boolean;
    price_change_last_2h: number;
}

export interface Shareholding {
    promoter: number;
    fii: number;
    dii: number;
    retail: number;
    mf: number;
    pledge: number;
    promoter_change?: number;
    fii_change?: number;
    dii_change?: number;
    retail_change?: number;
    mf_change?: number;
}

export interface NewsArticle {
    headline: string;
    url: string;
    source: string;
    published: string;
    summary: string;
}

export interface OHLCVData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    rsi?: number;
    macd?: number;
    macd_signal?: number;
}

export interface DeliveryData {
    date: string;
    symbol: string;
    delivery_qty: number;
    traded_qty: number;
    delivery_pct: number;
}

export interface BulkDeal {
    symbol: string;
    deal_date: string;
    client_name: string;
    deal_type: string;
    quantity: number;
    price: number;
}

export interface BlockDeal {
    symbol: string;
    deal_date: string;
    client_name: string;
    deal_type: string;
    quantity: number;
    price: number;
}

export interface MarketData {
    symbol: string;
    ohlcv?: OHLCVData[];
    delivery?: DeliveryData[];
    bulk_deals?: BulkDeal[];
    block_deals?: BlockDeal[];
}

export interface Pattern {
    pattern: string;
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    detail: string;
    score: number;
}

export interface RiskReport {
    symbol: string;
    timestamp: string;
    risk_score: number;
    risk_level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    latest_price: number;
    price_change_pct: number;
    volume: string;
    delivery_pct: string;
    patterns_detected: number;
    patterns: Pattern[];
    explanation: string;
}

export interface AgentSignal {
    agent_type: string;
    risk_score: number;
    confidence: number;
    signals: string[];
    metadata: Record<string, unknown>;
}

export interface MultiAgentAnalysis {
    symbol: string;
    timestamp: string;
    overall_risk_score: number;
    risk_level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    agent_signals: AgentSignal[];
    agent_contributions: Record<string, number>;
    co_occurrence_amplifications: Array<{
        agent1: string;
        agent2: string;
        amplification_bonus: number;
    }>;
    explanation: string;
    data_sources_used: string[];
}

export interface CompleteAnalysis {
    symbol: string;
    timestamp: string;
    stock_info?: StockInfo;
    shareholding?: Shareholding;
    news?: NewsArticle[];
    market_data?: MarketData;
    patterns?: Pattern[];
    risk_report?: RiskReport;
}

export interface AIEnhancedAnalysis {
    symbol: string;
    timestamp: string;
    base_risk_score: number;
    ai_manipulation_score: number;
    final_risk_score: number;
    base_risk_level: string;
    final_risk_level: string;
    manipulation_type?: string;
    key_red_flags: string[];
    ai_reasoning?: string;
    recommended_action?: string;
    predicted_outcome?: string;
    prediction_confidence?: number;
    timeline_days?: number;
    monitoring_points?: string[];
    ai_explanation?: string;
    agent_signals: AgentSignal[];
    agent_contributions: Record<string, number>;
    co_occurrence_amplifications: Array<{
        agent1: string;
        agent2: string;
        amplification_bonus: number;
    }>;
    news_sentiment: Array<{
        headline: string;
        sentiment: string;
        confidence: number;
        source: string;
    }>;
    ai_enhanced: boolean;
    ai_weight: number;
    ai_confidence: number;
    data_sources_used: string[];
}

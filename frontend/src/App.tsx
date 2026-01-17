import React from 'react';
import { ArrowRight, Check, Search, TrendingUp, Users, BarChart3, Newspaper } from 'lucide-react';
import FlippingWord from './components/FlippingWord';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import salesReportImg from 'figma:asset/a5390aecaf8d6a4398fe68759c5645482b00261b.png';
import forensicsImg from 'figma:asset/3dd6a99b4be5dc7084aa9bf64e651eba9e5e53ca.png';
import sentimentImg from 'figma:asset/b246f356b40ebb392da8e8fa6239b19cb260110e.png';
import sentimentColoredImg from 'figma:asset/31709e70f999eb73befa91f1d86e76c34ec19296.png';
import retailTrapImg from 'figma:asset/62dbf5c45ca8d4cb64cc6aa54bea1fd8b21c6c41.png';
import newSentimentImg from 'figma:asset/fa988208068351fc880043a77be79fd4a52ff9c4.png';
import aiIllustrationImg from 'figma:asset/d03dc3c52e7cf467a50d86ad226271d3bac34b1b.png';
import brainMazeImg from 'figma:asset/fe2e661edd0f75a8e95d3238940beaee9887ab1c.png';
import { CometCard } from './components/ui/comet-card';

export default function App() {
  const [showAuth, setShowAuth] = React.useState(false);
  const [showDashboard, setShowDashboard] = React.useState(false);

  const handleSignIn = () => {
    setShowAuth(false);
    setShowDashboard(true);
  };

  const handleLogout = () => {
    setShowDashboard(false);
    setShowAuth(false);
  };

  if (showDashboard) {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (showAuth) {
    return <AuthPage onBack={() => setShowAuth(false)} onSignIn={handleSignIn} />;
  }

  return (
    <>
    {/* Hero Section - Gradient from dark green to off-white */}
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0" 
           style={{
             background: 'linear-gradient(to bottom, #050a08 0%, #0f1b16 8%, #1a2d26 16%, #2d4d46 24%, #4a6a60 32%, #5d7d73 40%, #7a9d93 48%, #99b5ab 56%, #b8ccc4 64%, #d4d1cb 72%, #e8e6e0 80%, #f2f0ec 88%, #f7f5f2 94%, #fdfcfb 100%)'
           }}>
      </div>
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(0, 0, 0, 0.4) 6px, rgba(0, 0, 0, 0.4) 7px),
            repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0, 0, 0, 0.4) 6px, rgba(0, 0, 0, 0.4) 7px)
          `,
          backgroundSize: '7px 7px',
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
            </div>
            <span className="text-white font-semibold text-xl">MarketLens</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Contact</a>
          </div>

          <button 
            onClick={() => setShowAuth(true)}
            className="bg-[#d4f34e] hover:bg-[#dff76a] text-gray-900 px-6 py-2.5 rounded-lg transition-all shadow-lg font-medium"
          >
            Get Started
          </button>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
          <div className="max-w-3xl font-['JetBrains_Sans']">
            <h1 className="text-white mb-6 font-bold" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
              Profit from patterns, not the{' '}
              <span className="inline-block">
                <FlippingWord />
              </span>
            </h1>

            <p className="text-white/80 text-xl mb-10 max-w-2xl leading-relaxed text-[rgba(0,0,0,0.8)] font-bold">
              A multi-agent intelligence system that uncovers suspicious market behavior before you get caught in a pump-and-dump.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16 max-w-4xl">
              <div className="flex-1 min-w-[400px] bg-white rounded-full px-6 py-4 flex items-center gap-3 shadow-lg">
                <Search className="w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Enter stock name to scan for pump & dump..."
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
              
              <button className="bg-[#D4F34F] hover:bg-[#dff76a] text-black px-8 py-4 rounded-full transition-all shadow-lg font-medium">
                Scan Now
              </button>
              
              <button className="bg-[#D4F34F] hover:bg-[#dff76a] text-black px-8 py-4 rounded-full transition-all shadow-lg font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modular Solutions Section - Off-white background continues */}
    <div className="bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[#635bff] text-sm font-semibold uppercase tracking-wide mb-4">Modular solutions</p>
          <h2 className="text-[#0a2540] font-semibold mb-6 max-w-2xl leading-tight font-['JetBrains_Sans'] text-[50px]">
            A fully integrated suite of market intelligence tools
          </h2>
          <p className="text-[rgb(0,0,0)] max-w-2xl leading-relaxed font-['JetBrains_Sans'] text-[22px]">
            Detect retail traps and uncover institutional behavior more efficiently with our multi-layered detection system. Use advanced pattern recognition to identify pump-and-dump schemes before they catch unsuspecting investors.
          </p>
        </div>

        {/* Feature 1: Retail Trap Insight Engine */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#635bff] rounded-full"></div>
                <span className="text-[#0a2540] text-sm font-medium">Intelligence</span>
              </div>
              <h3 className="text-[#0a2540] font-semibold mb-6 leading-tight font-['JetBrains_Sans'] text-[40px]">
                Retail Trap Insight Engine
              </h3>
              <p className="text-[rgb(0,0,0)] mb-8 leading-relaxed font-['JetBrains_Sans'] text-[20px]">
                A unified intelligence layer that analyzes ownership shifts, market activity, and news sentiment to identify speculative setups and potential retail traps. By tracking institutional behavior, delivery conviction, and narrative-driven hype, it helps traders understand who is participating, why price is moving, and whether momentum is supported by real conviction or distribution.
              </p>
              <button className="bg-[#635bff] hover:bg-[#0a2540] text-white px-6 py-3 rounded-md transition-all font-medium shadow-sm mb-8 flex items-center gap-2"
                onClick={() => setShowAuth(true)}>
                Explore Intelligence
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="pt-6 border-t border-gray-300">
                <p className="text-[#6b7280] text-sm mb-3">See also</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Pattern Detection</a></li>
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Signal Analysis</a></li>
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Real-time Alerts</a></li>
                </ul>
              </div>
            </div>
            <CometCard>
              <div className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#e8e9eb] p-2 md:p-4">
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] object-cover"
                      alt="Retail Trap Intelligence Dashboard"
                      src={brainMazeImg}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-gray-800">
                  <div className="text-xs">Retail Trap Intelligence</div>
                  <div className="text-xs text-gray-500 opacity-70">#RTI1</div>
                </div>
              </div>
            </CometCard>
          </div>
        </div>

        {/* Feature 2: Smart Money Ownership Radar */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="font-['JetBrains_Sans']">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#00d66f] rounded-full"></div>
                <span className="text-[#0a2540] text-sm font-medium">Ownership</span>
              </div>
              <h3 className="text-[#0a2540] font-semibold mb-6 leading-tight text-[40px] font-['JetBrains_Sans']">
                Smart Money Ownership Radar
              </h3>
              <p className="text-[rgb(0,0,0)] mb-8 leading-relaxed text-[20px]">
                Monitors changes in promoter, FII, DII, mutual fund, and retail shareholding to identify accumulation and distribution trends beneath price movements. By highlighting periods of rising retail participation alongside institutional or promoter exits, it helps surface early signs of speculative risk and ownership-driven market shifts.
              </p>
              <button className="bg-[#00d66f] hover:bg-[#00a857] text-white px-6 py-3 rounded-md transition-all font-medium shadow-sm mb-8 flex items-center gap-2">
                View Ownership Data
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="pt-6 border-t border-gray-300">
                <p className="text-[#6b7280] text-sm mb-3">See also</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Promoter Holdings</a></li>
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Institutional Flow</a></li>
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Retail Patterns</a></li>
                </ul>
              </div>
            </div>
            <CometCard>
              <div className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-4"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Smart Money Ownership Dashboard"
                      src={salesReportImg}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                  <div className="text-xs">Ownership Intelligence</div>
                  <div className="text-xs text-gray-300 opacity-50">#SMR2</div>
                </div>
              </div>
            </CometCard>
          </div>
        </div>

        {/* Feature 3: Market Forensics Engine */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="font-['JetBrains_Sans']">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#9333ea] rounded-full"></div>
                <span className="text-[#0a2540] text-sm font-medium">Forensics</span>
              </div>
              <h3 className="text-[#0a2540] font-semibold mb-6 leading-tight text-[40px]">
                Market Forensics Engine
              </h3>
              <p className="text-[#425466] mb-8 leading-relaxed text-[20px]">
                Examines delivery participation alongside traded volume to assess the quality of price movements. By identifying divergences between volume and conviction, it helps highlight low-confidence advances, speculative spikes, and distribution-driven activity that price charts alone often miss.
              </p>
              <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white px-6 py-3 rounded-md transition-all font-medium shadow-sm mb-8 flex items-center gap-2">
                Run Forensics
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="pt-6 border-t border-gray-300">
                <p className="text-[#6b7280] text-sm mb-3">See also</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Delivery Analysis</a></li>
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Volume Metrics</a></li>
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Rally Detection</a></li>
                </ul>
              </div>
            </div>
            <CometCard>
              <div className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#e8e9eb] p-2 md:p-4"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] object-cover"
                      alt="Market Forensics Dashboard"
                      src={aiIllustrationImg}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-gray-800">
                  <div className="text-xs">Forensics Intelligence</div>
                  <div className="text-xs text-gray-500 opacity-70">#MFE1</div>
                </div>
              </div>
            </CometCard>
          </div>
        </div>

        {/* Feature 4: News & Sentiment Intelligence */}
        <div className="mb-0">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="font-['JetBrains_Sans']">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#ff6b6b] rounded-full"></div>
                <span className="text-[#0a2540] text-sm font-medium">Sentiment</span>
              </div>
              <h3 className="text-[#0a2540] font-semibold mb-6 leading-tight text-[40px]">
                News & Sentiment Intelligence
              </h3>
              <p className="text-[#425466] mb-8 leading-relaxed text-[20px]">
                Classifies headlines into realistic positive, warning negative, and suspicious hype-positive to filter out noise. Measures hype density and speculative language to catch coordinated positive news cycles around weak stocks. Surfaces cases where news sentiment is overly positive while ownership and fundamentals remain weak.
              </p>
              <button className="bg-[#ff6b6b] hover:bg-[#ee5a6f] text-white px-6 py-3 rounded-md transition-all font-medium shadow-sm mb-8 flex items-center gap-2"
                onClick={() => setShowAuth(true)}>
                Analyze Sentiment
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="pt-6 border-t border-gray-300">
                <p className="text-[#6b7280] text-sm mb-3">See also</p>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">News Classification</a></li>
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Hype Detection</a></li>
                  <li><a href="#" className="text-[#635bff] hover:underline text-sm">Sentiment Scoring</a></li>
                </ul>
              </div>
            </div>
            <CometCard>
              <div className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#e8e9eb] p-2 md:p-4">
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] object-cover"
                      alt="Sentiment Intelligence Dashboard"
                      src={newSentimentImg}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-gray-800">
                  <div className="text-xs">Sentiment Intelligence</div>
                  <div className="text-xs text-gray-500 opacity-70">#SI1</div>
                </div>
              </div>
            </CometCard>
          </div>
        </div>
      </div>
    </div>

    {/* Intelligence Platform Section - Matching Reference Image */}
    <div className="relative overflow-hidden" style={{
      background: 'linear-gradient(to right, #0f3d3e 0%, #1a4d4e 25%, #265e5f 50%, #316e6f 75%, #3d7f80 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-8 py-24 font-['JetBrains_Sans']">
        {/* Content */}
        <div className="max-w-2xl mb-20">
          <p className="text-[#00d4ff] text-xs font-semibold uppercase tracking-wider mb-6">
            MARKET INTELLIGENCE
          </p>
          <h2 className="text-white text-5xl font-semibold mb-8 leading-tight">
            Built to reveal what price never explains
          </h2>
          <p className="text-white/90 text-base mb-4 leading-relaxed font-medium">
            Price shows movement.
          </p>
          <p className="text-white/70 text-base mb-4 leading-relaxed">
            It doesn't show accumulation, distribution, or silent exits.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            Our platform brings together ownership data, market activity forensics, and AI-interpreted sentiment to expose the forces driving price—before narratives catch up.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <p className="text-white text-4xl font-semibold mb-2">500M+</p>
            <p className="text-white/50 text-sm">
              API requests per day
            </p>
          </div>
          <div>
            <p className="text-white text-4xl font-semibold mb-2">99.999%</p>
            <p className="text-white/50 text-sm">
              Historical uptime
            </p>
          </div>
          <div>
            <p className="text-white text-4xl font-semibold mb-2">47+</p>
            <p className="text-white/50 text-sm">
              Countries supported
            </p>
          </div>
          <div>
            <p className="text-white text-4xl font-semibold mb-2">135+</p>
            <p className="text-white/50 text-sm">
              Currencies and payment methods
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
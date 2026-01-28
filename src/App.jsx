import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, ChevronDown, Users, Target, FileText, MessageSquare, 
  GitBranch, CheckCircle2, Circle, Clock, AlertCircle, Plus, Search,
  BarChart3, Zap, Shield, Bot, Wallet, Vote, Settings, ExternalLink,
  Calendar, Tag, ArrowRight, Sparkles, Activity, TrendingUp, Layers,
  Code, BookOpen, Github, Twitter, MessageCircle, Send, ThumbsUp, Reply,
  Filter, LayoutGrid, List, ChevronLeft, Star, Eye, Lock, Unlock, Menu, X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [expandedTask, setExpandedTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewProposal, setShowNewProposal] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ treasury: 0, agents: 0, proposals: 0, contributors: 0 });

  // Animated stats on mount
  useEffect(() => {
    const targets = { treasury: 847500, agents: 12, proposals: 23, contributors: 47 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedStats({
        treasury: Math.floor(targets.treasury * eased),
        agents: Math.floor(targets.agents * eased),
        proposals: Math.floor(targets.proposals * eased),
        contributors: Math.floor(targets.contributors * eased)
      });
      
      if (step >= steps) clearInterval(timer);
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  // Roadmap data
  const phases = [
    {
      id: 0,
      name: 'Foundation',
      status: 'in-progress',
      progress: 65,
      timeline: 'Q1 2026',
      description: 'Core infrastructure, smart contracts, and development environment',
      tasks: [
        { id: 1, name: 'Smart contract architecture design', status: 'complete', assignee: 'Core Team', priority: 'high' },
        { id: 2, name: 'Development environment setup (Hardhat)', status: 'complete', assignee: 'Core Team', priority: 'high' },
        { id: 3, name: 'AEGISToken.sol implementation', status: 'complete', assignee: 'Core Team', priority: 'high' },
        { id: 4, name: 'AEGISGovernor.sol implementation', status: 'complete', assignee: 'Core Team', priority: 'high' },
        { id: 5, name: 'Mumbai testnet deployment', status: 'in-progress', assignee: 'Unassigned', priority: 'critical' },
        { id: 6, name: 'Comprehensive test suite', status: 'pending', assignee: 'Unassigned', priority: 'high' },
        { id: 7, name: 'Initial security review', status: 'pending', assignee: 'Unassigned', priority: 'high' }
      ]
    },
    {
      id: 1,
      name: 'Security & Validation',
      status: 'upcoming',
      progress: 0,
      timeline: 'Q2 2026',
      description: 'Professional audits, bug bounty, and governance testing',
      tasks: [
        { id: 8, name: 'Smart contract audit (OpenZeppelin/Trail of Bits)', status: 'pending', assignee: 'Unassigned', priority: 'critical' },
        { id: 9, name: 'Bug bounty program setup', status: 'pending', assignee: 'Unassigned', priority: 'high' },
        { id: 10, name: 'Testnet governance simulations', status: 'pending', assignee: 'Unassigned', priority: 'medium' },
        { id: 11, name: 'AI agent sandbox testing', status: 'pending', assignee: 'Unassigned', priority: 'high' }
      ]
    },
    {
      id: 2,
      name: 'Agent Infrastructure',
      status: 'upcoming',
      progress: 0,
      timeline: 'Q3 2026',
      description: 'AI treasury management and initial revenue swarms',
      tasks: [
        { id: 12, name: 'AI Treasury Management agent', status: 'pending', assignee: 'Unassigned', priority: 'critical' },
        { id: 13, name: 'Initial revenue swarm (5-10 agents)', status: 'pending', assignee: 'Unassigned', priority: 'high' },
        { id: 14, name: 'MCP/A2A protocol integration', status: 'pending', assignee: 'Unassigned', priority: 'high' },
        { id: 15, name: 'Performance monitoring dashboard', status: 'pending', assignee: 'Unassigned', priority: 'medium' }
      ]
    },
    {
      id: 3,
      name: 'Mainnet Launch',
      status: 'upcoming',
      progress: 0,
      timeline: 'Q4 2026',
      description: 'Production deployment and public launch',
      tasks: [
        { id: 16, name: 'Mainnet contract deployment', status: 'pending', assignee: 'Unassigned', priority: 'critical' },
        { id: 17, name: 'Token distribution event', status: 'pending', assignee: 'Unassigned', priority: 'critical' },
        { id: 18, name: 'Governance activation', status: 'pending', assignee: 'Unassigned', priority: 'high' },
        { id: 19, name: 'Public dApp launch', status: 'pending', assignee: 'Unassigned', priority: 'high' }
      ]
    },
    {
      id: 4,
      name: 'Scale',
      status: 'upcoming',
      progress: 0,
      timeline: '2027+',
      description: 'Ecosystem expansion and cross-chain deployment',
      tasks: [
        { id: 20, name: 'Revenue stream expansion (50+ streams)', status: 'pending', assignee: 'Unassigned', priority: 'high' },
        { id: 21, name: 'Agent swarm growth (50+ agents)', status: 'pending', assignee: 'Unassigned', priority: 'high' },
        { id: 22, name: 'Cross-chain deployment', status: 'pending', assignee: 'Unassigned', priority: 'medium' },
        { id: 23, name: 'Ecosystem partnerships', status: 'pending', assignee: 'Unassigned', priority: 'medium' }
      ]
    }
  ];

  // Proposals data
  const proposals = [
    {
      id: 'AEP-001',
      title: 'Initial Treasury Allocation Strategy',
      status: 'active',
      type: 'treasury',
      author: 'Core Team',
      created: '2026-01-20',
      votes: { for: 847, against: 123, abstain: 45 },
      quorum: 1000,
      description: 'Proposal to establish initial treasury allocation across DeFi yield strategies, with 40% allocated to stable yields, 35% to medium-risk strategies, and 25% held in reserve.',
      discussions: 23
    },
    {
      id: 'AEP-002',
      title: 'Agent Autonomy Tier Definitions',
      status: 'active',
      type: 'governance',
      author: 'Architecture WG',
      created: '2026-01-22',
      votes: { for: 654, against: 89, abstain: 112 },
      quorum: 1000,
      description: 'Define the three-tier autonomy model parameters: Tier 1 (<5% treasury), Tier 2 (5-15%), Tier 3 (>15% or novel actions).',
      discussions: 18
    },
    {
      id: 'AEP-003',
      title: 'MCP Tool Provider Revenue Model',
      status: 'discussion',
      type: 'revenue',
      author: 'Revenue WG',
      created: '2026-01-25',
      votes: { for: 0, against: 0, abstain: 0 },
      quorum: 1000,
      description: 'Establish pricing and revenue sharing model for AI tool provision via Model Context Protocol integration.',
      discussions: 31
    },
    {
      id: 'AEP-004',
      title: 'Security Audit Vendor Selection',
      status: 'passed',
      type: 'security',
      author: 'Security WG',
      created: '2026-01-15',
      votes: { for: 1245, against: 67, abstain: 88 },
      quorum: 1000,
      description: 'Selection of OpenZeppelin as primary audit vendor with Trail of Bits for secondary review.',
      discussions: 12
    }
  ];

  // Contributors data
  const workingGroups = [
    { name: 'Core Development', members: 8, lead: 'TBD', focus: 'Smart contracts, infrastructure', color: '#00D4AA' },
    { name: 'AI Architecture', members: 5, lead: 'TBD', focus: 'Agent design, MCP/A2A integration', color: '#7B61FF' },
    { name: 'Security', members: 4, lead: 'TBD', focus: 'Audits, risk management', color: '#FF6B6B' },
    { name: 'Revenue Strategy', members: 6, lead: 'TBD', focus: 'Yield optimization, market analysis', color: '#FFB800' },
    { name: 'Governance', members: 5, lead: 'TBD', focus: 'Proposal framework, voting mechanisms', color: '#00B4D8' },
    { name: 'Community', members: 7, lead: 'TBD', focus: 'Documentation, outreach, support', color: '#FF00FF' }
  ];

  const openRoles = [
    { title: 'Senior Solidity Developer', type: 'Core', urgency: 'high', skills: ['Solidity', 'OpenZeppelin', 'Security'] },
    { title: 'AI Agent Engineer', type: 'Technical', urgency: 'high', skills: ['Python', 'MCP', 'LangChain'] },
    { title: 'DeFi Strategist', type: 'Research', urgency: 'medium', skills: ['Yield Farming', 'Risk Analysis', 'Market Making'] },
    { title: 'Technical Writer', type: 'Community', urgency: 'medium', skills: ['Documentation', 'Tutorials', 'API Docs'] },
    { title: 'Frontend Developer', type: 'Technical', urgency: 'low', skills: ['React', 'Web3', 'TypeScript'] }
  ];

  // Discussions data
  const discussions = [
    { id: 1, title: 'Optimal veAEGIS lock duration for maximum voting power', author: 'defi_researcher', replies: 34, views: 289, hot: true, category: 'governance' },
    { id: 2, title: 'Agent communication protocol: MCP vs A2A comparison', author: 'ai_architect', replies: 28, views: 412, hot: true, category: 'technical' },
    { id: 3, title: 'Treasury diversification across L2s', author: 'yield_hunter', replies: 19, views: 156, hot: false, category: 'treasury' },
    { id: 4, title: 'Proposed risk parameters for Tier 2 autonomy', author: 'risk_analyst', replies: 45, views: 567, hot: true, category: 'security' },
    { id: 5, title: 'Integration roadmap for Autonolas framework', author: 'agent_dev', replies: 12, views: 198, hot: false, category: 'technical' }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'complete': return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-amber-400 animate-pulse" />;
      case 'pending': return <Circle className="w-4 h-4 text-slate-500" />;
      default: return <Circle className="w-4 h-4 text-slate-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'high': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'medium': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getProposalStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-emerald-500/20 text-emerald-400';
      case 'passed': return 'bg-blue-500/20 text-blue-400';
      case 'discussion': return 'bg-purple-500/20 text-purple-400';
      case 'rejected': return 'bg-red-500/20 text-red-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  // Navigation tabs
  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutGrid },
    { id: 'roadmap', name: 'Roadmap', icon: GitBranch },
    { id: 'proposals', name: 'Proposals', icon: Vote },
    { id: 'team', name: 'Team', icon: Users },
    { id: 'discussions', name: 'Discussions', icon: MessageSquare },
    { id: 'resources', name: 'Resources', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden font-display">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4AA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7B61FF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#00D4AA]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#7B61FF]/5 rounded-full" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,212,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/5 backdrop-blur-xl bg-[#0A0F1E]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#7B61FF] p-[2px]">
                  <div className="w-full h-full rounded-xl bg-[#0A0F1E] flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4AA]" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full border-2 border-[#0A0F1E] animate-pulse" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">AEGIS <span className="text-[#00D4AA]">Command Center</span></h1>
                <p className="text-xs text-slate-400 hidden sm:block">Autonomous Economic Generation & Integration System</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Desktop search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 lg:w-64 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#00D4AA]/50 transition-colors"
                />
              </div>
              
              <a href="https://github.com/your-org/aegis-protocol" target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors hidden sm:block">
                <Github className="w-5 h-5" />
              </a>
              
              <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-[#00D4AA] to-[#00D4AA]/80 text-[#0A0F1E] font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 text-sm">
                <Wallet className="w-4 h-4" />
                <span className="hidden sm:inline">Connect</span>
              </button>

              {/* Mobile menu button */}
              <button 
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 mt-4 -mb-px">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white/10 text-white border-b-2 border-[#00D4AA]' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-1 animate-fade-in">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'bg-[#00D4AA]/10 text-[#00D4AA]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: 'Treasury Value', value: `$${animatedStats.treasury.toLocaleString()}`, icon: Wallet, color: '#00D4AA', change: '+12.4%' },
                { label: 'Active Agents', value: animatedStats.agents, icon: Bot, color: '#7B61FF', change: '+3 this week' },
                { label: 'Open Proposals', value: animatedStats.proposals, icon: Vote, color: '#FFB800', change: '5 active' },
                { label: 'Contributors', value: animatedStats.contributors, icon: Users, color: '#00B4D8', change: '+8 this month' }
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-slate-400 text-xs sm:text-sm">{stat.label}</p>
                        <p className="text-xl sm:text-3xl font-bold mt-1 font-mono">
                          {stat.value}
                        </p>
                        <p className="text-xs mt-2" style={{ color: stat.color }}>{stat.change}</p>
                      </div>
                      <div className="p-2 sm:p-3 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
                        <stat.icon className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: stat.color }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <div className="lg:col-span-1 p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-semibold flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-[#FFB800]" />
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'Create Proposal', icon: Plus, action: () => setShowNewProposal(true) },
                    { label: 'View Roadmap', icon: GitBranch, action: () => setActiveTab('roadmap') },
                    { label: 'Join Discussion', icon: MessageSquare, action: () => setActiveTab('discussions') },
                    { label: 'Browse Resources', icon: BookOpen, action: () => setActiveTab('resources') }
                  ].map((action, i) => (
                    <button 
                      key={i}
                      onClick={action.action}
                      className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left"
                    >
                      <action.icon className="w-4 h-4 text-[#00D4AA]" />
                      <span className="text-sm">{action.label}</span>
                      <ChevronRight className="w-4 h-4 ml-auto text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="lg:col-span-2 p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-semibold flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-[#00D4AA]" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {[
                    { type: 'proposal', text: 'AEP-004 passed with 89% approval', time: '2 hours ago', icon: CheckCircle2, color: '#00D4AA' },
                    { type: 'commit', text: 'Merged: "Update AEGISGovernor to OZ 5.0"', time: '5 hours ago', icon: GitBranch, color: '#7B61FF' },
                    { type: 'discussion', text: 'New thread: "Optimal veAEGIS lock duration"', time: '8 hours ago', icon: MessageSquare, color: '#FFB800' },
                    { type: 'member', text: 'ai_architect joined AI Architecture WG', time: '1 day ago', icon: Users, color: '#00B4D8' },
                    { type: 'milestone', text: 'Phase 1 reached 65% completion', time: '2 days ago', icon: Target, color: '#FF6B6B' }
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: `${activity.color}20` }}>
                        <activity.icon className="w-4 h-4" style={{ color: activity.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{activity.text}</p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase Progress Overview */}
            <div className="p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#7B61FF]" />
                  Development Progress
                </h3>
                <button 
                  onClick={() => setActiveTab('roadmap')}
                  className="text-sm text-[#00D4AA] hover:underline flex items-center gap-1"
                >
                  View Full Roadmap <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {phases.map((phase, i) => (
                  <div 
                    key={i}
                    className={`p-3 sm:p-4 rounded-lg border transition-all cursor-pointer ${
                      phase.status === 'in-progress' 
                        ? 'border-[#00D4AA]/50 bg-[#00D4AA]/5' 
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                    onClick={() => { setSelectedPhase(i); setActiveTab('roadmap'); }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400">{phase.timeline}</span>
                      {phase.status === 'in-progress' && (
                        <span className="px-1.5 py-0.5 bg-[#00D4AA]/20 text-[#00D4AA] text-[10px] rounded-full">Active</span>
                      )}
                    </div>
                    <h4 className="font-medium text-sm mb-2">{phase.name}</h4>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#00D4AA] to-[#7B61FF] transition-all duration-1000"
                        style={{ width: `${phase.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">{phase.progress}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-fade-in">
            {/* Phase List */}
            <div className="lg:col-span-1 space-y-2">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Phases</h3>
              {phases.map((phase, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPhase(i)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedPhase === i 
                      ? 'border-[#00D4AA] bg-[#00D4AA]/10' 
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      phase.status === 'in-progress' ? 'bg-[#00D4AA]/20 text-[#00D4AA]' :
                      phase.status === 'complete' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {phase.status === 'in-progress' ? 'In Progress' : phase.status === 'complete' ? 'Complete' : 'Upcoming'}
                    </span>
                    <span className="text-xs text-slate-500">{phase.timeline}</span>
                  </div>
                  <h4 className="font-medium">{phase.name}</h4>
                  <div className="h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="h-full bg-[#00D4AA] transition-all"
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Phase Details */}
            <div className="lg:col-span-3 p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-bold">{phases[selectedPhase].name}</h2>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      phases[selectedPhase].status === 'in-progress' ? 'bg-[#00D4AA]/20 text-[#00D4AA]' :
                      phases[selectedPhase].status === 'complete' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {phases[selectedPhase].status === 'in-progress' ? 'In Progress' : 
                       phases[selectedPhase].status === 'complete' ? 'Complete' : 'Upcoming'}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{phases[selectedPhase].description}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-2xl sm:text-3xl font-bold text-[#00D4AA]">{phases[selectedPhase].progress}%</p>
                  <p className="text-sm text-slate-400">{phases[selectedPhase].timeline}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-6 sm:mb-8">
                <div 
                  className="h-full bg-gradient-to-r from-[#00D4AA] to-[#7B61FF] transition-all duration-500"
                  style={{ width: `${phases[selectedPhase].progress}%` }}
                />
              </div>

              {/* Tasks */}
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Tasks</h3>
                  <span className="text-xs text-slate-400">
                    {phases[selectedPhase].tasks.filter(t => t.status === 'complete').length} / {phases[selectedPhase].tasks.length} complete
                  </span>
                </div>
                {phases[selectedPhase].tasks.map((task) => (
                  <div 
                    key={task.id}
                    className={`p-3 sm:p-4 rounded-lg border transition-all cursor-pointer ${
                      expandedTask === task.id 
                        ? 'border-[#00D4AA]/50 bg-[#00D4AA]/5' 
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                    onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      {getStatusIcon(task.status)}
                      <span className={`flex-1 text-sm ${task.status === 'complete' ? 'line-through text-slate-500' : ''}`}>
                        {task.name}
                      </span>
                      <span className={`hidden sm:inline text-xs px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-400 hidden md:inline">{task.assignee}</span>
                      {expandedTask === task.id ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                    {expandedTask === task.id && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                          <div>
                            <p className="text-slate-400 mb-1">Status</p>
                            <p className="capitalize">{task.status.replace('-', ' ')}</p>
                          </div>
                          <div>
                            <p className="text-slate-400 mb-1">Assignee</p>
                            <p>{task.assignee}</p>
                          </div>
                          <div>
                            <p className="text-slate-400 mb-1">Priority</p>
                            <p className="capitalize">{task.priority}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 bg-[#00D4AA]/20 text-[#00D4AA] rounded-lg text-sm hover:bg-[#00D4AA]/30 transition-colors">
                            Claim Task
                          </button>
                          <button className="px-3 py-1.5 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Proposals Tab */}
        {activeTab === 'proposals' && (
          <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Governance Proposals</h2>
                <p className="text-slate-400 text-sm">Shape the future of AEGIS Protocol</p>
              </div>
              <button 
                onClick={() => setShowNewProposal(true)}
                className="px-4 py-2 bg-gradient-to-r from-[#00D4AA] to-[#7B61FF] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Plus className="w-4 h-4" />
                New Proposal
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['All', 'Active', 'Discussion', 'Passed', 'Rejected'].map(filter => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${
                    filter === 'All' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Proposals Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {proposals.map(proposal => (
                <div 
                  key={proposal.id}
                  className="p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all cursor-pointer"
                  onClick={() => setSelectedProposal(proposal)}
                >
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-mono text-[#00D4AA]">{proposal.id}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getProposalStatusColor(proposal.status)}`}>
                        {proposal.status}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 shrink-0">{proposal.created}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{proposal.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2 mb-4">{proposal.description}</p>
                  
                  {/* Voting Progress */}
                  {(proposal.status === 'active' || proposal.status === 'passed') && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-emerald-400">For: {proposal.votes.for}</span>
                        <span className="text-red-400">Against: {proposal.votes.against}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden flex">
                        <div 
                          className="h-full bg-emerald-400"
                          style={{ width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against || 1)) * 100}%` }}
                        />
                        <div 
                          className="h-full bg-red-400"
                          style={{ width: `${(proposal.votes.against / (proposal.votes.for + proposal.votes.against || 1)) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs mt-1 text-slate-500">
                        <span>Quorum: {((proposal.votes.for + proposal.votes.against) / proposal.quorum * 100).toFixed(0)}%</span>
                        <span>{proposal.discussions} discussions</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-slate-400">by {proposal.author}</span>
                    <button className="text-[#00D4AA] text-sm hover:underline flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-8 animate-fade-in">
            {/* Working Groups */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Working Groups</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {workingGroups.map((group, i) => (
                  <div 
                    key={i}
                    className="p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }} />
                      <h3 className="font-semibold">{group.name}</h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-4">{group.focus}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{group.members} members</span>
                      <span className="text-slate-500">Lead: {group.lead}</span>
                    </div>
                    <button className="w-full mt-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors">
                      View Group
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Roles */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold">Open Roles</h2>
                <span className="text-slate-400 text-sm">{openRoles.length} positions</span>
              </div>
              <div className="space-y-3">
                {openRoles.map((role, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className={`p-3 rounded-lg shrink-0 w-fit ${
                      role.urgency === 'high' ? 'bg-red-500/20' :
                      role.urgency === 'medium' ? 'bg-amber-500/20' : 'bg-slate-500/20'
                    }`}>
                      <Users className={`w-5 h-5 ${
                        role.urgency === 'high' ? 'text-red-400' :
                        role.urgency === 'medium' ? 'text-amber-400' : 'text-slate-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{role.title}</h4>
                      <p className="text-sm text-slate-400">{role.type}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, j) => (
                        <span key={j} className="px-2 py-1 bg-white/10 rounded text-xs">{skill}</span>
                      ))}
                    </div>
                    <button className="px-4 py-2 bg-[#00D4AA]/20 text-[#00D4AA] rounded-lg hover:bg-[#00D4AA]/30 transition-colors w-full sm:w-auto">
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Community Discussions</h2>
                <p className="text-slate-400 text-sm">Collaborate on technical specifications and design decisions</p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-[#00D4AA] to-[#7B61FF] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
                <Plus className="w-4 h-4" />
                New Thread
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['All', 'Technical', 'Governance', 'Treasury', 'Security'].map(cat => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${
                    cat === 'All' ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Discussion Threads */}
            <div className="space-y-3">
              {discussions.map(thread => (
                <div 
                  key={thread.id}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {thread.hot && (
                          <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded-full flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Hot
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-white/10 text-slate-400 text-xs rounded-full capitalize">
                          {thread.category}
                        </span>
                      </div>
                      <h3 className="font-semibold hover:text-[#00D4AA] transition-colors">{thread.title}</h3>
                      <p className="text-sm text-slate-400 mt-1">Started by @{thread.author}</p>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2 text-sm">
                      <span className="flex items-center gap-1 text-slate-400">
                        <MessageSquare className="w-4 h-4" /> {thread.replies}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Eye className="w-4 h-4" /> {thread.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Resources & Documentation</h2>
              <p className="text-slate-400 text-sm">Everything you need to understand and contribute to AEGIS Protocol</p>
            </div>

            {/* Resource Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Technical Documentation',
                  icon: Code,
                  color: '#00D4AA',
                  items: [
                    { name: 'Smart Contract Architecture', link: '#' },
                    { name: 'API Reference', link: '#' },
                    { name: 'Agent Integration Guide', link: '#' },
                    { name: 'Protocol Specifications', link: '#' }
                  ]
                },
                {
                  title: 'Governance',
                  icon: Vote,
                  color: '#7B61FF',
                  items: [
                    { name: 'Governance Framework', link: '#' },
                    { name: 'Proposal Guidelines', link: '#' },
                    { name: 'Voting Mechanics', link: '#' },
                    { name: 'veAEGIS Tokenomics', link: '#' }
                  ]
                },
                {
                  title: 'Research & Strategy',
                  icon: TrendingUp,
                  color: '#FFB800',
                  items: [
                    { name: 'Economic Whitepaper', link: '#' },
                    { name: 'Revenue Model Analysis', link: '#' },
                    { name: 'Risk Framework', link: '#' },
                    { name: 'Competitive Analysis', link: '#' }
                  ]
                }
              ].map((category, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${category.color}20` }}>
                      <category.icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.items.map((item, j) => (
                      <a 
                        key={j}
                        href={item.link}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
                      >
                        <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="flex-1">{item.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'GitHub Repository', icon: Github, link: 'https://github.com/your-org/aegis-protocol' },
                  { name: 'Contract Addresses', icon: Layers, link: '#' },
                  { name: 'Bug Bounty', icon: Shield, link: '#' },
                  { name: 'Brand Assets', icon: Star, link: '#' }
                ].map((link, i) => (
                  <a 
                    key={i}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-[#00D4AA] shrink-0" />
                    <span className="text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Shield className="w-4 h-4 text-[#00D4AA]" />
              <span>AEGIS Protocol © 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/your-org/aegis-protocol" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent, type ReactNode } from 'react';
import { 
  CloudDownload, 
  ArrowRight, 
  Link as LinkIcon, 
  Youtube, 
  Instagram, 
  Facebook, 
  Music, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  ChevronDown,
  Globe,
  Mail,
  Share2,
  Rocket,
  Monitor,
  CheckCircle2,
  ClipboardList,
  Settings2,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [url, setUrl] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsDownloading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsDownloading(false), 1000);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b0e14]/40 backdrop-blur-3xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter">
            <CloudDownload className="text-[#7eafff]" size={28} />
            <span className="hidden sm:inline">NETHUWA DOWNLOAD HUB</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-[#7eafff] font-bold border-b-2 border-[#7eafff] pb-1">Home</a>
            <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</a>
            <a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a>
          </div>
          
          <button className="neon-pulse px-6 py-2.5 rounded-full text-black font-bold text-sm hover:shadow-[0_0_20px_rgba(126,175,255,0.4)] transition-all active:scale-95">
            Download Now
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161a21] border border-white/5 text-[10px] font-black tracking-[0.2em] text-[#34efe7] uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34efe7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34efe7]"></span>
              </span>
              Fastest Media Downloader 2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]"
            >
              Download Any <span className="text-gradient">Video</span> Instantly.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 max-w-xl leading-relaxed"
            >
              The ultimate conduit for your digital library. Save YouTube, TikTok, and Instagram videos in pristine 4K quality directly to your device.
            </motion.p>

            {/* Input Area */}
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleDownload}
              className="relative group max-w-2xl"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7eafff] to-[#34efe7] rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
              <div className="relative flex items-center bg-[#22262f] rounded-2xl p-2 border border-white/5">
                <div className="pl-4 pr-2 text-slate-500">
                  <LinkIcon size={20} />
                </div>
                <input 
                  type="text" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full text-white placeholder:text-slate-600 py-4 text-lg"
                  placeholder="Paste your video URL here..."
                />
                <button 
                  type="submit"
                  className="neon-pulse text-black px-8 py-4 rounded-xl font-black tracking-tighter flex items-center gap-2 hover:shadow-lg transition-all group/btn whitespace-nowrap"
                >
                  DOWNLOAD
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </motion.form>

            {/* Platform Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 flex items-center gap-8 opacity-60"
            >
              <span className="text-[10px] font-black tracking-widest uppercase text-slate-500">Supported Platforms:</span>
              <div className="flex gap-6 text-slate-400">
                <Youtube size={20} className="hover:text-[#7eafff] transition-colors cursor-pointer" />
                <Instagram size={20} className="hover:text-[#7eafff] transition-colors cursor-pointer" />
                <Facebook size={20} className="hover:text-[#7eafff] transition-colors cursor-pointer" />
                <Music size={20} className="hover:text-[#7eafff] transition-colors cursor-pointer" />
              </div>
            </motion.div>
          </div>

          {/* Hero Abstract Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block relative"
          >
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden glass-card border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/tech/800/800" 
                alt="Abstract Visual" 
                className="w-full h-full object-cover mix-blend-overlay opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-6">
                <div className="w-24 h-24 rounded-full neon-pulse flex items-center justify-center shadow-[0_0_50px_rgba(126,175,255,0.3)]">
                  <Zap className="text-black" size={40} fill="currentColor" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">10Gbps Tunneling</h3>
                  <p className="text-slate-400 text-sm">Experience unthrottled download speeds with our kinetic global nodes.</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#7eafff]/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#34efe7]/10 blur-3xl rounded-full"></div>
          </motion.div>
        </section>

        {/* Download Progress Mockup */}
        <AnimatePresence>
          {isDownloading && (
            <motion.section 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-7xl mx-auto px-6 mt-12 overflow-hidden"
            >
              <div className="glass-card rounded-2xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#161a21] rounded-lg flex items-center justify-center overflow-hidden">
                      <img src="https://picsum.photos/seed/nature/100/100" alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-bold">Amazing Nature 4K Cinematic...</h4>
                      <p className="text-xs text-slate-500">mp4 • 1080p • 248MB</p>
                    </div>
                  </div>
                  <span className="text-[#34efe7] font-mono font-bold">{progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-[#22262f] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full neon-pulse rounded-full shadow-[0_0_10px_#34efe7]"
                  ></motion.div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 mt-32">
          <div className="mb-16">
            <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#34efe7] mb-4">Core Infrastructure</h2>
            <p className="text-4xl font-bold tracking-tight">Engineered for Performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 glass-card p-10 rounded-2xl border border-white/5 hover:bg-[#22262f] transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#7eafff]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Rocket className="text-[#7eafff]" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Downloads</h3>
              <p className="text-slate-400 leading-relaxed">Our proprietary multi-thread technology splits files into chunks for 5x faster acquisition compared to standard tools.</p>
            </div>
            
            <div className="glass-card p-10 rounded-2xl border border-white/5 hover:bg-[#22262f] transition-all group">
              <div className="w-12 h-12 rounded-full bg-[#34efe7]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Smartphone className="text-[#34efe7]" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Any Platform</h3>
              <p className="text-slate-400 leading-relaxed">Seamlessly extract media from over 100+ social and video platforms.</p>
            </div>
            
            <div className="glass-card p-10 rounded-2xl border border-white/5 hover:bg-[#22262f] transition-all group">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Monitor className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">4K Quality</h3>
              <p className="text-slate-400 leading-relaxed">No compression artifacts. Get the original bitstream for your offline library.</p>
            </div>
            
            <div className="md:col-span-4 glass-card p-10 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-[#161a21] to-[#0b0e14]">
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="text-blue-400" size={24} />
                </div>
                <h3 className="text-3xl font-black">Privacy First. No Accounts.</h3>
                <p className="text-slate-400 max-w-lg">We don't store your history or require intrusive signups. Your downloads are your business. Simply paste and go.</p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                <div className="px-6 py-4 rounded-xl bg-[#282c36] flex items-center gap-3">
                  <CheckCircle2 className="text-[#34efe7]" size={20} />
                  <span className="text-sm font-bold">No Signup</span>
                </div>
                <div className="px-6 py-4 rounded-xl bg-[#282c36] flex items-center gap-3">
                  <CheckCircle2 className="text-[#7eafff]" size={20} />
                  <span className="text-sm font-bold">Zero Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mt-32 bg-[#10131a] py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black tracking-tighter mb-6">The Three-Step Conduit</h2>
              <p className="text-slate-400">Simple, kinetic, and designed for efficiency.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16 relative">
              <Step 
                number="01" 
                icon={<ClipboardList className="text-[#7eafff]" size={32} />} 
                title="Paste URL" 
                description="Copy the link of the video you want from any supported website and paste it into our hub." 
              />
              <Step 
                number="02" 
                icon={<Settings2 className="text-[#34efe7]" size={32} />} 
                title="Choose Format" 
                description="Select from various quality options like MP4 4K, 1080p, or extract just the audio as High-Bitrate MP3." 
              />
              <Step 
                number="03" 
                icon={<Download className="text-purple-400" size={32} />} 
                title="Instant Download" 
                description="Click the final button and watch as our servers deliver the file to your device in seconds." 
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-4xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            <FaqItem 
              question="Is there a limit on file size?" 
              answer="No, we support files of all sizes. However, extremely large files (over 10GB) may take longer to process depending on our server load."
            />
            <FaqItem 
              question="Do you support private videos?" 
              answer="Currently, we only support publicly accessible videos. For private videos, you would need to provide authentication which we don't support for security reasons."
            />
            <FaqItem 
              question="Is the service completely free?" 
              answer="Yes, NETHUWA is 100% free to use. We rely on subtle, non-intrusive advertising to keep our high-speed servers running for the community."
              defaultOpen
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] w-full py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 text-xl font-black tracking-tighter">
              <CloudDownload className="text-[#7eafff]" size={24} />
              <span>NETHUWA DOWNLOAD HUB</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
              © 2026 NETHUWA DOWNLOAD HUB. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="hover:text-[#7eafff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#7eafff] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#7eafff] transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <SocialIcon icon={<Globe size={20} />} />
            <SocialIcon icon={<Mail size={20} />} />
            <SocialIcon icon={<Share2 size={20} />} />
          </div>
        </div>
      </footer>
    </div>
  );
}

function Step({ number, icon, title, description }: { number: string, icon: ReactNode, title: string, description: string }) {
  return (
    <div className="relative text-center space-y-6">
      <div className="text-[120px] font-black absolute -top-16 left-1/2 -translate-x-1/2 text-white/5 pointer-events-none select-none">
        {number}
      </div>
      <div className="w-20 h-20 mx-auto rounded-2xl bg-[#282c36] flex items-center justify-center shadow-xl border border-white/10 relative z-10">
        {icon}
      </div>
      <h3 className="text-xl font-bold relative z-10">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed relative z-10">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer, defaultOpen = false }: { question: string, answer: string, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <h4 className="font-bold">{question}</h4>
        <ChevronDown className={`text-[#7eafff] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-white/5 text-slate-400 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-[#161a21] flex items-center justify-center text-slate-400 hover:bg-[#7eafff]/20 hover:text-[#7eafff] transition-all">
      {icon}
    </a>
  );
}

'use client';

import { 
  Brain, 
  Calendar, 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  Apple, 
  Flame, 
  BookOpen, 
  Award, 
  UserCheck, 
  Smile, 
  Users, 
  Target, 
  ArrowRight,
  GraduationCap,
  Activity
} from 'lucide-react';
import Image from 'next/image';
import Lenis from 'lenis';
import { useEffect, useState } from 'react';
import PaymentModal, { calcCardPrice } from './PaymentModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const today = new Date();
  const earlyBirdDeadline = new Date('2026-04-10');
  const isEarlyBird = today < earlyBirdDeadline;
  const price = 729;
  const discount = isEarlyBird ? 100 : 0;
  const cashPrice = isEarlyBird ? `$${price - discount}` : `$${price}`;
  const stripeLink = 'https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=86f2b44a-5305-11f1-a8e1-12a0879a85b1';

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans selection:bg-brand-red selection:text-white overflow-hidden relative">
      
      {/* Background Decorative Faint Glowing Orbs for Depth (Light Theme) */}
      <div className="absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[25%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-red/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-indigo-100/20 blur-[110px] pointer-events-none"></div>

      <PaymentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseName="Brain Health & Memory Mastery Course"
        cashPrice={cashPrice}
        cardPrice={calcCardPrice(cashPrice)}
        stripeLink={stripeLink}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Navbar */}
        <header className="py-6 border-b border-slate-200/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/exceed-new-logo-2026.png"
              alt="Exceed Learning Center Logo"
              width={160}
              height={50}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>
          <button 
            onClick={() => setModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 bg-brand-navy hover:bg-slate-900 text-white font-gotham font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-brand-navy/10"
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </button>
        </header>

        {/* Hero Section */}
        <main className="py-12 lg:py-20">
          <section className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16 lg:mb-24">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/5 border border-brand-red/20 text-brand-red text-xs sm:text-sm font-gotham font-bold uppercase tracking-wider">
                <Brain className="w-4 h-4 shrink-0" />
                8-Week Brain Health & Memory Mastery Course
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-brand-navy leading-none tracking-tight">
                Rewire Your <span className="text-brand-red">Brain</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Improve memory, sharpen focus, reduce stress, and optimize cognitive performance naturally through science-based brain training and wellness strategies.
              </p>

              {/* Instructor Hero Badge */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] inline-flex items-center gap-3 text-left max-w-xl mx-auto lg:mx-0">
                <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0 border border-brand-navy/10">
                  <GraduationCap className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-gotham font-bold uppercase tracking-wider">Course Instructor</p>
                  <p className="text-sm sm:text-base text-slate-800 font-gotham font-bold">
                    Led by Olga Binyaminov — <span className="font-normal text-slate-600">biochemist, educator, and brain health instructor.</span>
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white font-gotham font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-brand-red/10 hover:scale-105"
                >
                  Enroll in Course
                </button>
                <a
                  href="#about"
                  className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-gotham font-bold py-4 px-8 rounded-xl text-lg transition-all"
                >
                  Explore Curriculum
                </a>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100/50 blur-3xl opacity-60 rounded-full"></div>
              <div className="relative">
                <Image
                  src="/images/brain_hero.png"
                  alt="Glowing Brain Neural Network Illustration"
                  width={460}
                  height={380}
                  className="w-full max-w-[28rem] h-auto object-contain filter drop-shadow-[0_4px_25px_rgba(2,32,73,0.08)] relative z-10"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute top-10 right-4 bg-white border border-slate-200 shadow-xl rounded-2xl p-3 z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping"></span>
                    <span className="text-xs font-gotham font-bold text-brand-navy tracking-wide">Neuroplasticity Active</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section (Professional Revamp) */}
          <section id="about" className="scroll-mt-6 py-16 border-t border-slate-200 relative bg-white rounded-3xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.02)] mb-16 lg:mb-24">
            <div className="grid gap-12 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Course Intro */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
                <div className="text-brand-red font-gotham font-bold uppercase tracking-wider text-xs sm:text-sm">
                  Inside the Science of Learning
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy leading-tight">
                  ABOUT THE COURSE
                </h2>
                
                {/* Clean, Professional Pain-Point Callout */}
                <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-brand-red shadow-sm">
                  <p className="text-lg sm:text-xl font-gotham font-bold text-brand-navy/90 italic leading-relaxed">
                    "Are you experiencing brain fog, forgetfulness, stress, lack of focus, or mental exhaustion?"
                  </p>
                </div>

                <div className="space-y-5 font-sans text-slate-600 leading-relaxed text-base sm:text-lg">
                  <p>
                    Your brain is highly adaptable. It has the distinct biological ability to adapt, heal, strengthen, and grow throughout life through a neurological process called <strong className="text-brand-navy font-semibold border-b border-brand-red/20">neuroplasticity</strong>.
                  </p>
                  <p>
                    This 8-week interactive course is designed to help adults understand how the brain works while learning practical tools to improve cognitive performance, memory retention, focus, emotional regulation, and long-term brain health.
                  </p>
                  <p>
                    Through structured lessons, targeted brain exercises, memory techniques, and science-based strategies, participants will gain practical, daily knowledge they can apply to everyday life to build a sharper, more resilient mind.
                  </p>
                </div>
              </div>

              {/* Right Column: Instructor Biography */}
              <div className="lg:col-span-6 flex">
                <div className="w-full rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-stretch">
                  
                  {/* Left sub-column: Full Author Photo */}
                  <div className="w-full md:w-2/5 min-h-[300px] md:min-h-full relative rounded-xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
                    <Image
                      src="/images/olga-profile.jpeg"
                      alt="Olga Binyaminov — Brain Health Instructor"
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Right sub-column: Bio details */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-2xl font-gotham font-bold text-brand-navy mt-1">Olga Binyaminov</h3>
                      <p className="text-brand-red text-xs sm:text-sm font-gotham font-semibold uppercase tracking-wider mt-0.5">
                        Biochemist & Educator
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
                        Brain Health Instructor & Founder of Exceed Learning Center
                      </p>
                      
                      <div className="border-t border-slate-200/80 mt-4 pt-4 font-sans text-slate-600 text-sm leading-relaxed space-y-3">
                        <p>
                          As a biochemist and educator, Olga has spent over 18 years developing advanced cognitive curricula and studying the biological foundations of learning.
                        </p>
                        <p>
                          She designed this program to translate complex neuroscience research into actionable, practical strategies, helping adults unlock cognitive longevity, manage stress, and master memory retention.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-500 text-center font-gotham font-medium shadow-sm">
                      🌿 Focus areas: Neuroscience, Cognitive Reserve, and Metabolic Brain Support.
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* What You'll Learn Section */}
          <section className="py-16 border-t border-slate-200 relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-brand-red font-gotham font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Curriculum Highlights</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy">WHAT YOU’LL LEARN</h2>
              <p className="text-slate-500 mt-2 text-sm sm:text-base font-sans">
                Science-backed subjects designed to give you concrete, actionable mastery over your cognitive capabilities.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              
              {/* Point 1 */}
              <div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-red/5 border border-brand-red/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Brain className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="text-lg font-gotham font-bold text-brand-navy mb-2">Neuroplasticity</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  How neuroplasticity rewires the brain’s pathways and structures to support new learnings.
                </p>
              </div>

              {/* Point 2 */}
              <div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-gotham font-bold text-brand-navy mb-2">Memory & Focus</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  How memory and focus work under the hood and what determines your attention span.
                </p>
              </div>

              {/* Point 3 */}
              <div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="text-lg font-gotham font-bold text-brand-navy mb-2">Recall Techniques</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  Advanced, proven cognitive techniques to improve daily concentration and recall.
                </p>
              </div>

              {/* Point 4 */}
              <div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-lg font-gotham font-bold text-brand-navy mb-2">Exercise & Cognition</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  The physiological relationship between exercise and overall cognitive performance.
                </p>
              </div>

              {/* Point 5 */}
              <div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Flame className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-lg font-gotham font-bold text-brand-navy mb-2">Stress & Cortisol</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  Understanding the effects of chronic stress and cortisol levels on your brain.
                </p>
              </div>

              {/* Point 6 */}
              <div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Apple className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-gotham font-bold text-brand-navy mb-2">Gut-Brain Axis</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  The gut-brain connection and implementing targeted brain-supporting nutrition.
                </p>
              </div>

              {/* Point 7 */}
              <div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-gotham font-bold text-brand-navy mb-2">Retention Habit</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  Memory techniques for high retention, structured studying, and learning.
                </p>
              </div>

              {/* Point 8 */}
              <div className="group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="text-lg font-gotham font-bold text-brand-navy mb-2">Cognitive Wellness</h4>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  Strategies for lifelong cognitive wellness, health habits, and brain agility.
                </p>
              </div>

            </div>
          </section>

          {/* Course Includes Section */}
          <section className="py-16 border-t border-slate-200 relative">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              
              {/* Left Column: Visual accent/Intro */}
              <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                <span className="text-brand-red font-gotham font-bold uppercase tracking-wider text-xs sm:text-sm">Interactive Curriculum Support</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy">COURSE INCLUDES</h2>
                <p className="text-slate-600 font-sans text-base sm:text-lg">
                  Every participant receives access to dynamic resources, guided interactive sessions, and materials designed to bolster practical application.
                </p>
              </div>

              {/* Right Column: Inclusions Grid */}
              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Interactive lessons",
                  "Brain exercises",
                  "Memory challenges",
                  "Guided techniques",
                  "Worksheets and activities",
                  "Real-life applications",
                  "Science-based cognitive strategies"
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                    <span className="text-slate-700 font-gotham font-bold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Who This Is For Section */}
          <section className="py-16 border-t border-slate-200 relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-brand-red font-gotham font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Audience Profile</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy">WHO THIS IS FOR</h2>
              <p className="text-slate-500 mt-2 text-sm sm:text-base font-sans">
                Our course is tailored to address the needs of adults pursuing active cognitive enhancement.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Target 1 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.01)] flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-red/5 flex items-center justify-center shrink-0 border border-brand-red/10">
                  <UserCheck className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-bold text-brand-navy mb-1">Adults 40+</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Individuals aiming to maintain brain vitality, improve memory, and prevent decline.
                  </p>
                </div>
              </div>

              {/* Target 2 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.01)] flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-bold text-brand-navy mb-1">Professionals</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Those looking to optimize focus, manage stress, and accelerate career performance metrics.
                  </p>
                </div>
              </div>

              {/* Target 3 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.01)] flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0 border border-yellow-100">
                  <Users className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-bold text-brand-navy mb-1">Parents</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Busy heads managing extensive tasks, tracking schedule, and organizing home workflows.
                  </p>
                </div>
              </div>

              {/* Target 4 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.01)] flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                  <Smile className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-bold text-brand-navy mb-1">Seniors</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Lifelong active seniors aiming to build cognitive reserve and enjoy sharp daily functions.
                  </p>
                </div>
              </div>

              {/* Target 5 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.01)] flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-bold text-brand-navy mb-1">Lifelong Learners</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Anyone interested in how the brain heals, adapts, and functions under memory frameworks.
                  </p>
                </div>
              </div>

              {/* Target 6 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.01)] flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100">
                  <Brain className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-bold text-brand-navy mb-1">Clarity Seekers</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    Anyone looking to diminish daily brain fog, improve concentration, and optimize clarity.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Pricing, Schedule & Enrollment Card */}
          <section className="py-16 border-t border-slate-200 relative">
            <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-[0_15px_50px_rgba(2,32,73,0.03)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/5 rounded-full -mr-24 -mt-24"></div>
              
              <div className="grid gap-8 md:grid-cols-2 md:items-center relative z-10">
                
                {/* Schedule Info */}
                <div className="space-y-6">
                  <div>
                    <span className="text-brand-red text-xs font-gotham font-bold uppercase tracking-wider bg-brand-red/5 border border-brand-red/20 px-3 py-1 rounded-full">
                      Enrollment Open
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-brand-navy mt-3">
                      8-WEEK COURSE
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-sans">Start Date</p>
                        <p className="text-sm sm:text-base font-gotham font-bold text-brand-navy">Starts June 20, 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-sans">Weekly Schedule</p>
                        <p className="text-sm sm:text-base font-gotham font-bold text-brand-navy">Every Tuesday 6:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-sans">Session Duration</p>
                        <p className="text-sm sm:text-base font-gotham font-bold text-brand-navy">60-75 minute interactive sessions</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Box */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="text-center md:text-left">
                    <p className="text-xs font-gotham font-bold text-slate-400 uppercase tracking-widest">Tuition Fee</p>
                    <div className="flex items-baseline justify-center md:justify-start gap-2 mt-1">
                      <span className="text-5xl font-display font-black text-brand-navy">{cashPrice}</span>
                      <span className="text-xs text-slate-500 font-gotham font-bold uppercase tracking-wider">Full Course</span>
                    </div>
                  </div>

                  {isEarlyBird ? (
                    <div className="p-3.5 rounded-xl bg-brand-red/5 border border-brand-red/20">
                      <p className="text-brand-red font-gotham font-bold text-xs uppercase tracking-wider">Early Bird Offer active</p>
                      <p className="text-brand-navy font-display font-bold text-lg mt-0.5">${discount} OFF</p>
                      <p className="text-[11px] text-slate-500 font-sans mt-0.5">When registered before April 10</p>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-center md:text-left">
                      <p className="text-xs text-slate-500 font-sans">Standard tuition fees apply. Zelle and credit card options available.</p>
                    </div>
                  )}

                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full text-center bg-brand-red hover:bg-red-700 text-white font-gotham font-bold py-3.5 px-6 rounded-xl text-base transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-red/10 uppercase tracking-wide"
                  >
                    Enroll Now — Choose Payment
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* Closing Quote Section */}
          <section className="py-16 border-t border-slate-200 text-center relative">
            <div className="max-w-3xl mx-auto space-y-8">
              
              <div className="w-16 h-16 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-brand-navy" />
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-400 tracking-tight leading-tight uppercase">
                  Your brain can grow stronger.
                </h3>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-600 tracking-tight leading-tight uppercase">
                  Your memory can improve.
                </h3>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy tracking-tight leading-tight uppercase">
                  Your focus can sharpen.
                </h3>
              </div>

              <p className="text-xl sm:text-2xl font-gotham font-black text-brand-red tracking-wide uppercase">
                It’s never too late to train your brain. 🧠✨
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-brand-navy text-white hover:bg-slate-900 font-gotham font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 shadow-xl shadow-brand-navy/10"
                >
                  Start Your Training
                </button>
              </div>
            </div>
          </section>

        </main>

        {/* Footer (Navy to Ground the Page Professionally) */}
        <footer className="border-t border-slate-200 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Phone */}
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy/5 border border-brand-navy/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <p className="font-gotham font-bold text-xs text-slate-400 uppercase tracking-widest">Phone Number</p>
                <a href="tel:+15162263114" className="font-sans text-base text-brand-navy hover:text-brand-red transition-colors font-semibold">
                  +1 (516) 226-3114
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy/5 border border-brand-navy/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <p className="font-gotham font-bold text-xs text-slate-400 uppercase tracking-widest">Our Location</p>
                <p className="font-sans text-base text-brand-navy font-semibold">
                  1360 Willis Ave., Albertson NY 11507
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy/5 border border-brand-navy/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <p className="font-gotham font-bold text-xs text-slate-400 uppercase tracking-widest">Email Address</p>
                <a
                  href="mailto:adultsprograms@exceedlearningcenterny.com"
                  className="font-sans text-base text-brand-navy underline hover:text-brand-red transition-colors font-semibold"
                >
                  Email us directly [+]
                </a>
              </div>
            </div>

          </div>
          
          <div className="mt-12 text-center text-xs text-slate-500 font-sans border-t border-slate-200/60 pt-6">
            &copy; {today.getFullYear()} Exceed Learning Center. All rights reserved. Registered biochemistry and cognitive psychology brain health frameworks.
          </div>
        </footer>

      </div>
    </div>
  );
}

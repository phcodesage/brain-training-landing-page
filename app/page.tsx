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
  Activity,
  Check
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-red selection:text-white overflow-hidden relative">
      
      {/* Background Decorative Faint Glowing Orbs */}
      <div className="absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-200/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[25%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-red/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-indigo-200/30 blur-[110px] pointer-events-none"></div>

      <PaymentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseName="Brain Health & Memory Mastery Course (Ages 20+)"
        cashPrice={cashPrice}
        cardPrice={calcCardPrice(cashPrice)}
        stripeLink={stripeLink}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Navbar */}
        <header className="py-6 border-b border-slate-300 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/exceed-new-logo-2026.png"
              alt="Exceed Learning Center Logo"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
          
          <div className="flex items-center gap-3">
            {/* Top Price Badge */}
            <div className="hidden md:inline-flex items-center gap-2 bg-white border-2 border-brand-navy/20 px-4 py-2 rounded-xl text-slate-900 font-gotham font-extrabold text-sm shadow-sm">
              <span className="text-brand-red uppercase tracking-wider text-xs">Tuition:</span>
              <span className="text-brand-navy text-lg font-black">{cashPrice}</span>
              <span className="text-[11px] text-slate-700 font-bold bg-slate-100 px-2 py-0.5 rounded">(Full Course)</span>
            </div>

            <button 
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-slate-900 text-white font-gotham font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
            >
              Enroll Now — {cashPrice} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="py-10 lg:py-16">
          <section className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16 lg:mb-20">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border-2 border-brand-red/30 text-brand-red text-xs sm:text-sm font-gotham font-extrabold uppercase tracking-wider">
                <Brain className="w-4 h-4 shrink-0 text-brand-red" />
                Ages 20 & Above • 8-Week Brain Health & Memory Mastery Course
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-brand-navy leading-none tracking-tight">
                Rewire Your <span className="text-brand-red">Brain</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-900 font-sans font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Improve memory, sharpen focus, reduce stress, and optimize cognitive performance naturally through science-based brain training and wellness strategies.
              </p>

              {/* High Contrast Prominent TOP PRICE BANNER */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-navy to-slate-950 text-white shadow-xl border-2 border-brand-navy/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center font-black text-2xl text-white shrink-0 shadow-md">
                    $
                  </div>
                  <div>
                    <p className="text-xs font-gotham font-extrabold uppercase tracking-widest text-slate-200">Full 8-Week Course Tuition</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display font-black text-white">{cashPrice}</span>
                      <span className="text-xs font-gotham font-bold uppercase text-brand-navy bg-white px-2.5 py-1 rounded-md shadow-sm">
                        Ages 20+ Program
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto bg-brand-red hover:bg-red-600 text-white font-gotham font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105 shrink-0"
                >
                  Enroll Now — {cashPrice} <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Schedule Highlights Pill */}
              <div className="p-4 rounded-2xl bg-white border-2 border-slate-300 shadow-sm flex flex-col sm:flex-row items-center justify-around gap-4 text-slate-900 max-w-2xl mx-auto lg:mx-0 font-gotham font-bold text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-red" />
                  <span>Every Tuesday</span>
                </div>
                <div className="hidden sm:block text-slate-300">•</div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-navy" />
                  <span>8 Weeks (Until Oct 20)</span>
                </div>
                <div className="hidden sm:block text-slate-300">•</div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-emerald-700" />
                  <span>Ages 20 & Above</span>
                </div>
              </div>

              {/* Instructor Hero Badge */}
              <div className="p-4 rounded-2xl bg-white border-2 border-slate-300 shadow-sm inline-flex items-center gap-3 text-left max-w-2xl mx-auto lg:mx-0">
                <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center shrink-0 border border-brand-navy/20">
                  <GraduationCap className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <p className="text-xs text-brand-navy font-gotham font-extrabold uppercase tracking-wider">Course Instructor</p>
                  <p className="text-sm sm:text-base text-slate-950 font-gotham font-bold">
                    Led by Olga Binyaminov — <span className="font-semibold text-slate-800">biochemist, educator, and brain health instructor.</span>
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white font-gotham font-extrabold py-4 px-8 rounded-xl text-lg transition-all shadow-xl shadow-brand-red/20 hover:scale-105"
                >
                  Enroll in Course — {cashPrice}
                </button>
                <a
                  href="#about"
                  className="w-full sm:w-auto text-center bg-white hover:bg-slate-100 border-2 border-slate-300 text-brand-navy font-gotham font-extrabold py-4 px-8 rounded-xl text-lg transition-all shadow-sm"
                >
                  Explore Curriculum
                </a>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-red-200/60 blur-3xl opacity-70 rounded-full"></div>
              <div className="relative">
                <Image
                  src="/images/brain_hero.png"
                  alt="Glowing Brain Neural Network Illustration"
                  width={460}
                  height={380}
                  className="w-full max-w-[28rem] h-auto object-contain filter drop-shadow-[0_6px_30px_rgba(2,32,73,0.12)] relative z-10"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute top-10 right-4 bg-white border-2 border-slate-300 shadow-2xl rounded-2xl p-3 z-20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-red animate-ping"></span>
                    <span className="text-xs font-gotham font-extrabold text-brand-navy tracking-wide">Neuroplasticity Active</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-6 py-16 border-t-2 border-slate-300 relative bg-white rounded-3xl p-8 sm:p-12 shadow-md mb-16 lg:mb-20">
            <div className="grid gap-12 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Course Intro */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
                <div className="text-brand-red font-gotham font-extrabold uppercase tracking-wider text-xs sm:text-sm">
                  Inside the Science of Learning
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy leading-tight">
                  ABOUT THE COURSE
                </h2>
                
                {/* Clean, High-Contrast Pain-Point Callout */}
                <div className="p-6 rounded-2xl bg-slate-100 border-l-4 border-brand-red shadow-sm">
                  <p className="text-lg sm:text-xl font-gotham font-extrabold text-brand-navy leading-relaxed">
                    "Are you experiencing brain fog, forgetfulness, stress, lack of focus, or mental exhaustion?"
                  </p>
                </div>

                <div className="space-y-5 font-sans text-slate-900 font-medium leading-relaxed text-base sm:text-lg">
                  <p>
                    Your brain is highly adaptable. It has the distinct biological ability to adapt, heal, strengthen, and grow throughout life through a neurological process called <strong className="text-brand-navy font-bold border-b-2 border-brand-red">neuroplasticity</strong>.
                  </p>
                  <p>
                    This 8-week interactive course for <strong className="text-brand-navy font-bold">adults ages 20 and above</strong> is designed to help you understand how your brain works while learning practical tools to improve cognitive performance, memory retention, focus, emotional regulation, and long-term brain health.
                  </p>
                  <p>
                    Through structured lessons every Tuesday, targeted brain exercises, memory techniques, and science-based strategies, participants will gain practical knowledge they can apply to everyday life to build a sharper, more resilient mind.
                  </p>
                </div>
              </div>

              {/* Right Column: Instructor Biography */}
              <div className="lg:col-span-6 flex">
                <div className="w-full rounded-2xl bg-slate-100 border-2 border-slate-300 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-stretch">
                  
                  {/* Left sub-column: Full Author Photo */}
                  <div className="w-full md:w-2/5 min-h-[300px] md:min-h-full relative rounded-xl overflow-hidden border-2 border-slate-300 shadow-sm shrink-0">
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
                      <h3 className="text-2xl font-gotham font-black text-brand-navy mt-1">Olga Binyaminov</h3>
                      <p className="text-brand-red text-xs sm:text-sm font-gotham font-extrabold uppercase tracking-wider mt-0.5">
                        Biochemist & Educator
                      </p>
                      <p className="text-xs sm:text-sm text-slate-800 font-gotham font-bold mt-1">
                        Brain Health Instructor & Founder of Exceed Learning Center
                      </p>
                      
                      <div className="border-t-2 border-slate-300 mt-4 pt-4 font-sans text-slate-900 text-sm font-medium leading-relaxed space-y-3">
                        <p>
                          As a biochemist and educator, Olga has spent over 18 years developing advanced cognitive curricula and studying the biological foundations of learning.
                        </p>
                        <p>
                          She designed this program to translate complex neuroscience research into actionable, practical strategies, helping adults unlock cognitive longevity, manage stress, and master memory retention.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-slate-300 rounded-xl p-3.5 text-xs text-brand-navy text-center font-gotham font-bold shadow-sm">
                      🌿 Focus areas: Neuroscience, Cognitive Reserve, and Metabolic Brain Support.
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* What You'll Learn Section */}
          <section className="py-16 border-t-2 border-slate-300 relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-brand-red font-gotham font-extrabold uppercase tracking-wider text-xs sm:text-sm mb-2">Curriculum Highlights</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy">WHAT YOU’LL LEARN</h2>
              <p className="text-slate-800 mt-2 text-base font-sans font-semibold">
                Science-backed subjects designed to give you concrete, actionable mastery over your cognitive capabilities.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              
              {/* Point 1 */}
              <div className="group p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm hover:border-brand-red transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Brain className="w-6 h-6 text-brand-red" />
                </div>
                <h4 className="text-lg font-gotham font-black text-brand-navy mb-2">Neuroplasticity</h4>
                <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                  How neuroplasticity rewires the brain’s pathways and structures to support new learnings.
                </p>
              </div>

              {/* Point 2 */}
              <div className="group p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm hover:border-blue-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 text-blue-700" />
                </div>
                <h4 className="text-lg font-gotham font-black text-brand-navy mb-2">Memory & Focus</h4>
                <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                  How memory and focus work under the hood and what determines your attention span.
                </p>
              </div>

              {/* Point 3 */}
              <div className="group p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm hover:border-amber-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6 text-amber-700" />
                </div>
                <h4 className="text-lg font-gotham font-black text-brand-navy mb-2">Recall Techniques</h4>
                <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                  Advanced, proven cognitive techniques to improve daily concentration and recall.
                </p>
              </div>

              {/* Point 4 */}
              <div className="group p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm hover:border-emerald-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6 text-emerald-700" />
                </div>
                <h4 className="text-lg font-gotham font-black text-brand-navy mb-2">Exercise & Cognition</h4>
                <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                  The physiological relationship between exercise and overall cognitive performance.
                </p>
              </div>

              {/* Point 5 */}
              <div className="group p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm hover:border-indigo-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Flame className="w-6 h-6 text-indigo-700" />
                </div>
                <h4 className="text-lg font-gotham font-black text-brand-navy mb-2">Stress & Cortisol</h4>
                <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                  Understanding the effects of chronic stress and cortisol levels on your brain.
                </p>
              </div>

              {/* Point 6 */}
              <div className="group p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm hover:border-orange-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Apple className="w-6 h-6 text-orange-700" />
                </div>
                <h4 className="text-lg font-gotham font-black text-brand-navy mb-2">Gut-Brain Axis</h4>
                <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                  The gut-brain connection and implementing targeted brain-supporting nutrition.
                </p>
              </div>

              {/* Point 7 */}
              <div className="group p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm hover:border-purple-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6 text-purple-700" />
                </div>
                <h4 className="text-lg font-gotham font-black text-brand-navy mb-2">Retention Habit</h4>
                <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                  Memory techniques for high retention, structured studying, and learning.
                </p>
              </div>

              {/* Point 8 */}
              <div className="group p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm hover:border-pink-600 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-100 border border-pink-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6 text-pink-700" />
                </div>
                <h4 className="text-lg font-gotham font-black text-brand-navy mb-2">Cognitive Wellness</h4>
                <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                  Strategies for lifelong cognitive wellness, health habits, and brain agility.
                </p>
              </div>

            </div>
          </section>

          {/* Course Includes Section */}
          <section className="py-16 border-t-2 border-slate-300 relative">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                <span className="text-brand-red font-gotham font-extrabold uppercase tracking-wider text-xs sm:text-sm">Interactive Curriculum Support</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy">COURSE INCLUDES</h2>
                <p className="text-slate-900 font-sans font-medium text-base sm:text-lg">
                  Every participant receives access to dynamic resources, guided interactive sessions, and materials designed to bolster practical application.
                </p>
              </div>

              {/* Right Column: Inclusions Grid */}
              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Interactive Tuesday lessons",
                  "Targeted brain exercises",
                  "Practical memory challenges",
                  "Guided cognitive techniques",
                  "Worksheets and activities",
                  "Real-life daily applications",
                  "Science-based brain strategies"
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-slate-300 shadow-sm hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                    <span className="text-slate-950 font-gotham font-bold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Who This Is For Section */}
          <section className="py-16 border-t-2 border-slate-300 relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-brand-red font-gotham font-extrabold uppercase tracking-wider text-xs sm:text-sm mb-2">Audience Profile</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-navy">WHO THIS IS FOR</h2>
              <p className="text-slate-800 mt-2 text-base font-sans font-semibold">
                Our course is tailored to address the needs of adults pursuing active cognitive enhancement.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Target 1: Ages 20+ */}
              <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0 border border-brand-red/30">
                  <UserCheck className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-black text-brand-navy mb-1">Ages 20 & Above</h4>
                  <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                    Adults aiming to maintain peak mental vitality, sharpen memory, and build cognitive resilience.
                  </p>
                </div>
              </div>

              {/* Target 2 */}
              <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 border border-blue-300">
                  <Zap className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-black text-brand-navy mb-1">Working Professionals</h4>
                  <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                    Those looking to optimize focus, manage workplace stress, and boost daily productivity.
                  </p>
                </div>
              </div>

              {/* Target 3 */}
              <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 border border-amber-300">
                  <Users className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-black text-brand-navy mb-1">Busy Parents</h4>
                  <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                    Parents managing heavy multi-tasking workflows, family organization, and complex schedules.
                  </p>
                </div>
              </div>

              {/* Target 4 */}
              <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 border border-purple-300">
                  <Smile className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-black text-brand-navy mb-1">Seniors & Retirees</h4>
                  <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                    Seniors dedicated to expanding cognitive reserve, mental agility, and active sharp recall.
                  </p>
                </div>
              </div>

              {/* Target 5 */}
              <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 border border-emerald-300">
                  <BookOpen className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-black text-brand-navy mb-1">Lifelong Learners</h4>
                  <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                    Anyone eager to explore neuroscience, brain adaptability, and science-backed memory systems.
                  </p>
                </div>
              </div>

              {/* Target 6 */}
              <div className="p-6 rounded-2xl bg-white border-2 border-slate-300 shadow-sm flex gap-4 items-start hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center shrink-0 border border-pink-300">
                  <Brain className="w-6 h-6 text-pink-700" />
                </div>
                <div>
                  <h4 className="text-lg font-gotham font-black text-brand-navy mb-1">Mental Clarity Seekers</h4>
                  <p className="text-sm text-slate-800 font-sans font-medium leading-relaxed">
                    Anyone seeking to reduce brain fog, overcome mental fatigue, and improve daily concentration.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Pricing, Schedule & Enrollment Card */}
          <section className="py-16 border-t-2 border-slate-300 relative">
            <div className="max-w-4xl mx-auto bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/10 rounded-full -mr-24 -mt-24"></div>
              
              <div className="grid gap-8 md:grid-cols-2 md:items-center relative z-10">
                
                {/* Schedule Info */}
                <div className="space-y-6">
                  <div>
                    <span className="text-brand-red text-xs font-gotham font-extrabold uppercase tracking-wider bg-brand-red/10 border border-brand-red/30 px-3 py-1 rounded-full">
                      Enrollment Open — Ages 20+
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-brand-navy mt-3">
                      8-WEEK PROGRAM
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-brand-navy">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-brand-navy font-gotham font-extrabold uppercase">Weekly Schedule</p>
                        <p className="text-base font-gotham font-bold text-slate-950">Every Tuesday (8 Weeks)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-brand-navy">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-brand-navy font-gotham font-extrabold uppercase">Program Duration</p>
                        <p className="text-base font-gotham font-bold text-slate-950">Runs through Oct 20</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-brand-navy">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-brand-navy font-gotham font-extrabold uppercase">Eligible Participants</p>
                        <p className="text-base font-gotham font-bold text-slate-950">Adults Ages 20 and Above</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Box */}
                <div className="p-6 rounded-2xl bg-slate-100 border-2 border-slate-300 space-y-4">
                  <div className="text-center md:text-left">
                    <p className="text-xs font-gotham font-extrabold text-brand-navy uppercase tracking-widest">Full Course Tuition</p>
                    <div className="flex items-baseline justify-center md:justify-start gap-2 mt-1">
                      <span className="text-5xl font-display font-black text-brand-navy">{cashPrice}</span>
                      <span className="text-xs text-slate-800 font-gotham font-bold uppercase tracking-wider bg-white px-2 py-1 rounded border border-slate-300">
                        Complete 8 Weeks
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-300 text-center md:text-left">
                    <p className="text-xs text-slate-900 font-gotham font-bold">
                      Includes all 8 Tuesday sessions, interactive materials, and brain exercise worksheets.
                    </p>
                  </div>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full text-center bg-brand-red hover:bg-red-700 text-white font-gotham font-extrabold py-4 px-6 rounded-xl text-base transition-all shadow-lg hover:scale-[1.02] uppercase tracking-wide"
                  >
                    Enroll Now — {cashPrice}
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* Closing Quote Section */}
          <section className="py-16 border-t-2 border-slate-300 text-center relative">
            <div className="max-w-3xl mx-auto space-y-8">
              
              <div className="w-16 h-16 rounded-full bg-brand-navy/10 border border-brand-navy/20 flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-brand-navy" />
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-700 tracking-tight leading-tight uppercase">
                  Your brain can grow stronger.
                </h3>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight uppercase">
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
                  className="bg-brand-navy text-white hover:bg-slate-900 font-gotham font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 shadow-xl"
                >
                  Start Your Training — {cashPrice}
                </button>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t-2 border-slate-300 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* Phone */}
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-white border-2 border-slate-300 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy/10 border border-brand-navy/20 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <p className="font-gotham font-extrabold text-xs text-brand-navy uppercase tracking-widest">Phone Number</p>
                <a href="tel:+15162263114" className="font-sans text-base text-brand-navy hover:text-brand-red transition-colors font-bold">
                  +1 (516) 226-3114
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-white border-2 border-slate-300 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy/10 border border-brand-navy/20 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <p className="font-gotham font-extrabold text-xs text-brand-navy uppercase tracking-widest">Our Location</p>
                <p className="font-sans text-base text-brand-navy font-bold">
                  1360 Willis Ave., Albertson NY 11507
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl bg-white border-2 border-slate-300 shadow-sm">
              <div className="w-12 h-12 bg-brand-navy/10 border border-brand-navy/20 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <p className="font-gotham font-extrabold text-xs text-brand-navy uppercase tracking-widest">Email Address</p>
                <a
                  href="mailto:adultsprograms@exceedlearningcenterny.com"
                  className="font-sans text-base text-brand-navy underline hover:text-brand-red transition-colors font-bold"
                >
                  Email us directly [+]
                </a>
              </div>
            </div>

          </div>
          
          <div className="mt-12 text-center text-xs text-slate-800 font-gotham font-bold border-t border-slate-300 pt-6">
            &copy; {today.getFullYear()} Exceed Learning Center. All rights reserved. Registered biochemistry and cognitive psychology brain health frameworks.
          </div>
        </footer>

      </div>
    </div>
  );
}

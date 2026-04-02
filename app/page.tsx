'use client';

import { Brain, Calendar, Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Lenis from 'lenis';
import { useEffect } from 'react';

export default function Home() {
  const today = new Date();
  const earlyBirdDeadline = new Date('2026-04-10');
  const isEarlyBird = today < earlyBirdDeadline;
  const price = 729;
  const discount = isEarlyBird ? 100 : 0;

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="relative bg-white pt-4 pb-8 lg:pt-6 lg:pb-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy opacity-5 rounded-full -ml-48 -mb-48"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">

              <div className="bg-brand-navy rounded-3xl p-6 lg:p-8 shadow-2xl mb-6">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
                  <div className="order-2 lg:order-1 lg:min-w-0">
                    <h2 className="text-3xl lg:text-6xl font-display font-black text-white mb-2 lg:mb-4 leading-tight text-center lg:text-left">
                      BRAIN TRAINING<br />COURSE
                    </h2>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 mb-4 lg:mb-0 lg:max-w-xl xl:max-w-2xl">
                      <p className="text-white font-sans text-sm lg:text-base leading-relaxed">
                        This engaging program uses evidence-based neuroscience and cognitive psychology to sharpen your memory, improve focus, and boost problem-solving skills.
                      </p>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 grid grid-cols-2 items-center gap-4 lg:gap-6 lg:max-w-[36rem] lg:justify-self-end">
                    <Image
                      src="/images/exceed-new-logo-2026.png"
                      alt="Exceed Learning Center"
                      width={400}
                      height={300}
                      className="w-full h-auto max-h-52 lg:max-h-72 object-contain"
                      priority
                    />
                    <Image
                      src="/images/brain_hero.png"
                      alt="Glowing Brain Illustration"
                      width={400}
                      height={300}
                      className="w-full h-auto max-h-52 lg:max-h-72 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse-slow"
                    />
                  </div>
                </div>

                <div className="mt-6 lg:mt-8 border-t border-white/10 pt-6">
                  <h3 className="text-lg lg:text-xl font-gotham font-bold text-white mb-3 text-center lg:text-left">Why you should join?</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 text-white font-sans text-sm lg:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red text-lg mt-0">●</span>
                      <span>Prolonging dementia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red text-lg mt-0">●</span>
                      <span>Improved memory recall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red text-lg mt-0">●</span>
                      <span>Increased mental acuity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red text-lg mt-0">●</span>
                      <span>Enhanced focus and attention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red text-lg mt-0">●</span>
                      <span>Sharpened problem-solving skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-red text-lg mt-0">●</span>
                      <span>Unlocking your brain&apos;s full potential</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                <div>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border-4 border-brand-navy">
                    <h3 className="text-3xl lg:text-4xl font-display font-black text-brand-navy mb-4">
                      8-WEEKS COURSE
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-brand-navy">
                        <Calendar className="w-5 h-5 flex-shrink-0" />
                        <p className="font-gotham font-bold text-base lg:text-lg">Starts April 28, 2026</p>
                      </div>
                      <div className="flex items-center gap-3 text-brand-navy">
                        <Clock className="w-5 h-5 flex-shrink-0" />
                        <p className="font-gotham font-bold text-base lg:text-lg">Every Tuesday 6pm</p>
                      </div>
                      <div className="flex items-center gap-3 text-brand-navy">
                        <Clock className="w-5 h-5 flex-shrink-0" />
                        <p className="font-sans text-sm lg:text-base">60-75 minute sessions</p>
                      </div>
                    </div>

                    <div className="bg-brand-navy rounded-xl p-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red opacity-20 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-brand-red text-4xl lg:text-5xl font-display font-black">${price}</span>
                          <span className="text-white font-gotham font-semibold text-lg">FULL COURSE</span>
                        </div>

                        {isEarlyBird && (
                          <div className="bg-brand-red rounded-lg px-3 py-2 inline-block">
                            <p className="text-white font-gotham font-bold text-xs">Early bird price</p>
                            <p className="text-white font-display font-black text-2xl">${discount} OFF</p>
                            <p className="text-white font-sans text-[10px]">When registered before April 10</p>
                          </div>
                        )}

                        {!isEarlyBird && (
                          <div className="text-white font-sans text-sm opacity-75">
                            <p>Regular pricing applies</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      href="https://buy.stripe.com/3cI5kw5u48oa3tL2SfdfG0d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-brand-red hover:bg-red-700 text-white font-gotham font-bold py-3 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg mt-4"
                    >
                      ENROLL NOW
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-2xl p-8 shadow-xl text-white">
                    <Brain className="w-16 h-16 mb-4 text-brand-red" />
                    <h4 className="text-2xl font-gotham font-bold mb-3">What You&apos;ll Learn</h4>
                    <p className="font-sans text-base leading-relaxed opacity-90">
                      Discover cutting-edge techniques backed by neuroscience research. Learn practical strategies to enhance cognitive function, build mental resilience, and maintain brain health throughout your life.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                    <h4 className="text-2xl font-gotham font-bold text-brand-navy mb-4">Course Highlights</h4>
                    <ul className="space-y-3 font-sans text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-brand-red text-xl mt-1">✓</span>
                        <span>Interactive sessions with expert instructors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-red text-xl mt-1">✓</span>
                        <span>Evidence-based cognitive exercises</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-red text-xl mt-1">✓</span>
                        <span>Personalized brain training strategies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-red text-xl mt-1">✓</span>
                        <span>Weekly progress tracking and support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-red text-xl mt-1">✓</span>
                        <span>Lifetime access to course materials</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-brand-red rounded-2xl p-6 shadow-xl text-white text-center">
                    <p className="font-gotham font-bold text-lg mb-2">Limited Spots Available!</p>
                    <p className="font-sans text-sm opacity-90">Join a community committed to cognitive excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d1b2e] text-white py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-gotham font-bold text-sm uppercase tracking-wide">Phone Number:</p>
                <a href="tel:+15162263114" className="font-sans text-base hover:text-brand-red transition-colors">
                  +1 (516) 226-3114
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-gotham font-bold text-sm uppercase tracking-wide">Our Location:</p>
                <p className="font-sans text-base">1360 Willis Ave., Albertson NY 11507</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-gotham font-bold text-sm uppercase tracking-wide">Email Address:</p>
                <a
                  href="mailto:Adultclasses@exceedlearningcenterny.com"
                  className="font-sans text-base underline hover:text-brand-red transition-colors"
                >
                  Email us directly [+]
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

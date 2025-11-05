'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Trophy, Medal } from "lucide-react"
import { Hero } from "@/components/hero"
import { events } from "@/data/events"
import { EventCard } from "@/components/event-card"
import EventCarousel from "@/components/event-carousel"
import { useEffect, useRef } from 'react'

export default function HomePage() {
  const sponsorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sponsorContainer = document.querySelector('.sponsor-container') as HTMLElement;
    if (!sponsorContainer) return;

    // Optimize for mobile performance
    const isMobile = window.innerWidth < 768;
    
    // Force hardware acceleration and optimize for mobile
    sponsorContainer.style.willChange = 'transform';
    sponsorContainer.style.backfaceVisibility = 'hidden';
    
    const sponsorItems = document.querySelectorAll('.sponsor-item');
    if (sponsorItems.length === 0) return;

    // Clone sponsor items for seamless looping (only once)
    if (sponsorContainer.children.length <= sponsorItems.length) {
      const items = Array.from(sponsorItems);
      items.forEach(item => {
        const clone = item.cloneNode(true);
        sponsorContainer.appendChild(clone);
      });
    }

    let animationId: number;
    let position = 0;
    const baseSpeed = isMobile ? 0.5 : 0.8; // Slower speed on mobile
    let speed = baseSpeed;
    let lastTime = 0;
    
    // Use a single item's width for calculation
    const firstItem = sponsorItems[0] as HTMLElement;
    if (!firstItem) return;
    
    const itemStyle = window.getComputedStyle(firstItem);
    const itemWidth = firstItem.offsetWidth + 
                     parseFloat(itemStyle.marginLeft) + 
                     parseFloat(itemStyle.marginRight);
    
    // Simplified animation function for better mobile performance
    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      
      // Throttle updates for mobile
      if (isMobile && timestamp - lastTime < 16) { // ~60fps
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      position -= speed;
      
      // Reset position when we've scrolled one full set of items
      if (Math.abs(position) >= itemWidth * sponsorItems.length) {
        position = 0;
      }
      
      // Use transform with will-change for optimal performance
      sponsorContainer.style.transform = `translateX(${position}px)`;
      
      lastTime = timestamp;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation with a small delay to allow for initial render
    const startAnimation = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 100);

    // Handle device orientation changes
    const handleResize = () => {
      // Adjust speed based on orientation
      speed = window.innerWidth < 768 ? 0.5 : 0.8;
    };
    
    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        lastTime = 0;
        animationId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function
    return () => {
      clearTimeout(startAnimation);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      sponsorContainer.style.willChange = 'auto';
      sponsorContainer.style.backfaceVisibility = '';
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <section id="featured" className="mx-auto max-w-7xl px-4 md:px-6 mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Featured Events</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </section>

      <section id="project-expo-standings" className="mx-auto max-w-4xl px-4 md:px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            PROJECT EXPO STANDINGS
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-medium">Celebrating Excellence in Innovation</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hardware Category */}
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hardware
              </h3>
            </div>
            
            {[1, 2].map((rank) => {
              const winner = {
                rank,
                teamName: rank === 1 ? 'Team Titans' : 'Cambridge Scavengers',
                college: rank === 1 ? 'HKBK College of Engineering' : 'Cambridge Institute of Technology',
                participants: rank === 1 ? 
                  ['Ankita K', 'Chandana L', 'Chethan N', 'Likitha M'] : 
                  ['Dikshitha Ramesh', 'G Akshaya', 'A Mohith', 'Nagarjun Reddy'],
                colors: {
                  bg: 'bg-muted/50 dark:bg-muted/20',
                  border: 'border-muted-foreground/10 dark:border-muted-foreground/20',
                  text: 'text-foreground/90',
                  badge: 'bg-muted-foreground/10 text-foreground/80 border border-muted-foreground/10',
                  shadow: 'shadow-foreground/5',
                  medalColor: rank === 1 ? 'text-amber-500 dark:text-amber-400' : 'text-slate-500 dark:text-slate-400'
                },
                medal: rank === 1 ? <Trophy className="w-12 h-12 text-white" /> : <Medal className="w-12 h-12 text-white" />,
                position: rank === 1 ? '1st Place' : '2nd Place'
              };
              
              return (
                <div 
                  key={`hardware-${rank}`}
                  className={`p-5 rounded-lg border ${winner.colors.bg} ${winner.colors.border} 
                  transition-all duration-300 hover:shadow-md ${winner.colors.shadow} hover:border-primary/40 min-h-[280px]`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{winner.position}</h3>
                    <span className={`text-3xl ${winner.colors.medalColor} transition-transform duration-300 group-hover:scale-110`}>
                      {winner.medal}
                    </span>
                  </div>
                  <div className="mb-2">
                    <h4 className="font-medium text-green-500 hover:text-green-400 transition-colors">{winner.teamName}</h4>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <svg className="w-3.5 h-3.5 mr-1.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {winner.college}
                    </p>
                  </div>
                  {winner.participants && winner.participants.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Team Members:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {winner.participants.map((participant, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2"></span>
                            {participant}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Software Category */}
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Software
              </h3>
            </div>
            
            {[1, 2].map((rank) => {
              const winner = {
                rank,
                teamName: rank === 1 ? 'Security Squads' : 'Team 5 CSDS',
                college: rank === 1 ? 'GEC Ramangara' : 'Atria Institute of Technology',
                participants: rank === 1 ? 
                  ['Nagashree M', 'Mounika S C', 'Manoj N', 'Mahesh'] : 
                  ['Sumanth', 'Siddharth', 'Umesh'],
                colors: {
                  bg: 'bg-muted/50 dark:bg-muted/20',
                  border: 'border-muted-foreground/10 dark:border-muted-foreground/20',
                  text: 'text-foreground/90',
                  badge: 'bg-muted-foreground/10 text-foreground/80 border border-muted-foreground/10',
                  shadow: 'shadow-foreground/5',
                  medalColor: rank === 1 ? 'text-amber-500 dark:text-amber-400' : 'text-slate-500 dark:text-slate-400'
                },
                medal: rank === 1 ? <Trophy className="w-12 h-12 text-white" /> : <Medal className="w-12 h-12 text-white" />,
                position: rank === 1 ? '1st Place' : '2nd Place'
              };
              
              return (
                <div 
                  key={`software-${rank}`}
                  className={`p-5 rounded-lg border ${winner.colors.bg} ${winner.colors.border} 
                  transition-all duration-300 hover:shadow-md ${winner.colors.shadow} hover:border-primary/40 min-h-[280px]`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{winner.position}</h3>
                    <span className={`text-3xl ${winner.colors.medalColor} transition-transform duration-300 group-hover:scale-110`}>
                      {winner.medal}
                    </span>
                  </div>
                  <div className="mb-2">
                    <h4 className="font-medium text-green-500 hover:text-green-400 transition-colors">{winner.teamName}</h4>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <svg className="w-3.5 h-3.5 mr-1.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {winner.college}
                    </p>
                  </div>
                  {winner.participants && winner.participants.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Team Members:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {winner.participants.map((participant, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mr-2"></span>
                            {participant}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 mt-24 mb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">Event Gallery</h2>
        <div className="relative mb-16">
          <EventCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 mb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Proud Partners</h2>
        <div className="relative overflow-hidden py-8">
          <div className="relative overflow-hidden w-full">
          <div className="flex gap-16 items-center sponsor-container" ref={sponsorRef}>
            {[...Array(2)].map((_, index) => (
              <div key={`sponsor-group-${index}`} className="flex gap-16 items-center flex-shrink-0">
                <div className="sponsor-item flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760802401/hd-white-monster-energy-logo-png-701751694778506qte0bhllt8-removebg-preview-removebg-preview_slhyah.png"
                    alt="Monster Energy"
                    className="w-70 h-35 object-contain"
                  />
                </div>
                <div className="sponsor-item flex-shrink-0 mx-2">
                  <img
                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760348280/images__5_-removebg-preview_fjabqd.png"
                    alt="Red Bull"
                    className="w-60 h-30 object-contain"
                  />
                </div>
                <div className="sponsor-item flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760803111/WhatsApp_Image_2025-10-16_at_18.17.03_e329bb39-removebg-preview_3_sa6q3n-removebg-preview_fcwkkq.png"
                    alt="ScriptVerse"
                    className="w-90 h-45 object-contain"
                  />
                </div>
                <div className="sponsor-item flex-shrink-0 mr-12">
                  <img
                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1761825817/white_Atria_Foundation_1_1_kajka6.avif"
                    alt="Atria Foundation"
                    className="w-78 h-48 object-contain"
                  />
                </div>
                <div className="sponsor-item flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1761826422/Bangalore-Section-Logo-white-1-01-1-1024x244_c1k3mb.png"
                    alt="Bangalore Section"
                    className="w-64 h-35 object-contain brightness-75 hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 md:px-6 mt-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl p-6 bg-accent text-accent-foreground">
            <h3 className="text-xl md:text-2xl font-semibold text-green-400">About CICADA</h3>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              CICADA 2025 is AIT’s flagship tech fest three days of hands‑on workshops, competitions, talks, and creative
              showcases led by student clubs. It’s where ideas turn into prototypes and teams into communities.
            </p>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              Whether you’re building your first bot, shipping an AI app, or solving CTF challenges, CICADA is designed
              for makers at every level.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl p-5 bg-card border border-border">
              <h4 className="font-semibold">Hands‑on First</h4>
              <p className="mt-1 text-sm text-muted-foreground">Learn by building with mentors and peers.</p>
            </div>
            <div className="rounded-xl p-5 bg-card border border-border">
              <h4 className="font-semibold">Multi‑Club</h4>
              <p className="mt-1 text-sm text-muted-foreground">AI, Robotics, Cybersecurity, Design, Dev & more.</p>
            </div>
            <div className="rounded-xl p-5 bg-card border border-border">
              <h4 className="font-semibold">Showcase</h4>
              <p className="mt-1 text-sm text-muted-foreground">Demos, prize tracks, and campus‑wide recognition.</p>
            </div>
            <div className="rounded-xl p-5 bg-card border border-border">
              <h4 className="font-semibold">Open to All</h4>
              <p className="mt-1 text-sm text-muted-foreground">Solo or teams—beginners welcome.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 md:px-6 mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-8">Venue</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Get location by clicking on the map below
        </p>
        <div className="flex justify-center">
          <a
            href="https://maps.google.com/maps?q=Atria+Institute+of+Technology+Hebbal+Bengaluru"
            target="_blank"
            rel="noreferrer"
            className="block max-w-lg"
          >
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760723487/Screenshot_2025-10-17_232023_sctcqr.png"
              alt="Atria Institute of Technology Location Map"
              className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 md:px-6 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-8 text-center">Frequently Asked Questions</h2>

          {/* FAQ Item 1 */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <button
              className="w-full text-left p-6 cursor-pointer"
              onClick={() => {
                // Close all FAQ items first
                const allFaqItems = ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5'];
                allFaqItems.forEach(id => {
                  const element = document.getElementById(id);
                  if (element && element.id !== 'faq-1') {
                    element.classList.add('hidden');
                  }
                });

                // Toggle the clicked FAQ item
                const answer = document.getElementById('faq-1');
                answer?.classList.toggle('hidden');
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">What is CICADA 2025?</h3>
                <span className="text-foreground text-xl font-bold cursor-pointer">+</span>
              </div>
            </button>
            <div id="faq-1" className="hidden">
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  CICADA 2025 is Atria Institute of Technology's premier annual technology festival featuring workshops,Hackathons,
                  competitions, tech talks, and showcases across AI, Robotics, Cybersecurity, Design, and Development.
                  It's a 3 daylong celebration of innovation and learning by building.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <button
              className="w-full text-left p-6 cursor-pointer"
              onClick={() => {
                // Close all FAQ items first
                const allFaqItems = ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5'];
                allFaqItems.forEach(id => {
                  const element = document.getElementById(id);
                  if (element && element.id !== 'faq-2') {
                    element.classList.add('hidden');
                  }
                });

                // Toggle the clicked FAQ item
                const answer = document.getElementById('faq-2');
                answer?.classList.toggle('hidden');
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Who can participate?</h3>
                <span className="text-foreground text-xl font-bold cursor-pointer">+</span>
              </div>
            </button>
            <div id="faq-2" className="hidden">
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Open to all Atrians and Non Atrians
                  
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <button
              className="w-full text-left p-6 cursor-pointer"
              onClick={() => {
                // Close all FAQ items first
                const allFaqItems = ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5'];
                allFaqItems.forEach(id => {
                  const element = document.getElementById(id);
                  if (element && element.id !== 'faq-3') {
                    element.classList.add('hidden');
                  }
                });

                // Toggle the clicked FAQ item
                const answer = document.getElementById('faq-3');
                answer?.classList.toggle('hidden');
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">How do I register for events?</h3>
                <span className="text-foreground text-xl font-bold cursor-pointer">+</span>
              </div>
            </button>
            <div id="faq-3" className="hidden">
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Visit the Events page, browse available events, and click the Register button on any event you're
                  interested in. Teams can register together
                  or add members later according to event rules.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <button
              className="w-full text-left p-6 cursor-pointer"
              onClick={() => {
                // Close all FAQ items first
                const allFaqItems = ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5'];
                allFaqItems.forEach(id => {
                  const element = document.getElementById(id);
                  if (element && element.id !== 'faq-4') {
                    element.classList.add('hidden');
                  }
                });

                // Toggle the clicked FAQ item
                const answer = document.getElementById('faq-4');
                answer?.classList.toggle('hidden');
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Are there prizes and mentorship?</h3>
                <span className="text-foreground text-xl font-bold cursor-pointer">+</span>
              </div>
            </button>
            <div id="faq-4" className="hidden">
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  Yes! Most events offer exciting prizes, mentorship opportunities, and recognition. We have prize tracks
                  across different categories, cash prizes, and certificates.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <button
              className="w-full text-left p-6 cursor-pointer"
              onClick={() => {
                // Close all FAQ items first
                const allFaqItems = ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5', 'faq-6'];
                allFaqItems.forEach(id => {
                  const element = document.getElementById(id);
                  if (element && element.id !== 'faq-5') {
                    element.classList.add('hidden');
                  }
                });

                // Toggle the clicked FAQ item
                const answer = document.getElementById('faq-5');
                answer?.classList.toggle('hidden');
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">When and where is CICADA 2025?</h3>
                <span className="text-foreground text-xl font-bold cursor-pointer">+</span>
              </div>
            </button>
            <div id="faq-5" className="hidden">
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  CICADA 2025 takes place at Atria Institute of Technology in Hebbal, Bengaluru from 5th Nov to 7th Nov.
                  Stay tuned to our website and social media for the latest updates on scheduling.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Item 6 - Accommodation */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <button
              className="w-full text-left p-6 cursor-pointer"
              onClick={() => {
                // Close all FAQ items first
                const allFaqItems = ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5', 'faq-6'];
                allFaqItems.forEach(id => {
                  const element = document.getElementById(id);
                  if (element && element.id !== 'faq-6') {
                    element.classList.add('hidden');
                  }
                });

                // Toggle the clicked FAQ item
                const answer = document.getElementById('faq-6');
                answer?.classList.toggle('hidden');
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Is accommodation provided for participants?</h3>
                <span className="text-foreground text-xl font-bold cursor-pointer">+</span>
              </div>
            </button>
            <div id="faq-6" className="hidden">
              <div className="px-6 pb-6">
                <p className="text-muted-foreground">
                  No, accommodation will not be provided for participants. We recommend arranging your own accommodation in advance. 
                  The event venue is well-connected to various parts of Bengaluru via public transport and cabs.
                </p>
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </main>
  )}

'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { events } from "@/data/events"
import { EventCard } from "@/components/event-card"
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

      

      <section className="mx-auto max-w-7xl px-4 md:px-6 mt-16">
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
                <div className="sponsor-item flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760348280/images__5_-removebg-preview_fjabqd.png"
                    alt="Red Bull"
                    className="w-60 h-30 object-contain"
                  />
                </div>
                <div className="sponsor-item flex-shrink-0">
                  <img
                    src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760801395/Unstop.png_hvcrwe.webp"
                    alt="Unstop"
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
                const allFaqItems = ['faq-1', 'faq-2', 'faq-3', 'faq-4', 'faq-5'];
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
                  CICADA 2025 takes place at Atria Institute of Technology in Hebbal, Bengaluru from 5th Nov to 7th Nov
                  Stay tuned to our website and social media for the latest updates on scheduling.
                </p>
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </main>
  )}

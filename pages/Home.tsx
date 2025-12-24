import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Target, Search, Globe, BookOpen } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import StatsSection from '../components/StatsSection';
import { SERVICES, COURSES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-punchline-light pt-16 pb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full text-punchline-blue fill-current">
            <circle cx="400" cy="0" r="400" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-punchline-blue px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase">
                  <Star size={16} fill="currentColor" />
                  <span>Nigeria's Elite Marketing Hub</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight text-punchline-black">
                  Empowering <span className="text-punchline-blue">African Marketing</span> Excellence
                </h1>
                <p className="text-xl text-punchline-gray leading-relaxed max-w-xl">
                  Transformative training, strategic consultancy, and data-driven market research designed for the unique Nigerian business landscape.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/contact" className="bg-punchline-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg hover:shadow-xl">
                    Get a Free Audit <ArrowRight className="ml-2" />
                  </Link>
                  <Link to="/courses" className="bg-white text-punchline-black border-2 border-punchline-black px-8 py-4 rounded-full font-bold text-lg hover:bg-punchline-black hover:text-white transition-all text-center">
                    Explore Courses
                  </Link>
                </div>
                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="client" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-punchline-black">150+ Brands Trusted Us</p>
                    <p className="text-sm text-punchline-gray">Measured Growth Across Africa</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="hidden lg:block relative">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/marketing/800/1000" 
                  alt="Marketing Strategy" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      <TrendingUp />
                    </div>
                    <span className="font-bold text-punchline-black">Performance Boost</span>
                  </div>
                  <p className="text-sm text-punchline-gray">Successfully increased client revenue by 120% through targeted performance marketing.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Trusted by Leaders in Nigeria</p>
        </div>
        <div className="flex space-x-20 animate-marquee whitespace-nowrap">
           {[1,2,3,4,5,6,7,8].map(i => (
             <div key={i} className="flex items-center justify-center space-x-2 text-gray-400 font-bold text-2xl grayscale hover:grayscale-0 transition-all">
               <Globe className="w-8 h-8" />
               <span>BRAND_{i}</span>
             </div>
           ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: 200%;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black font-heading text-punchline-black">Expert Solutions for Your Growth</h2>
            <div className="h-1.5 w-24 bg-punchline-blue mx-auto rounded-full"></div>
            <p className="text-xl text-punchline-gray">From strategic blueprints to ground-level execution, we offer end-to-end marketing support.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <div className="bg-punchline-light p-10 rounded-3xl h-full border border-transparent hover:border-punchline-blue/20 hover:shadow-2xl transition-all group">
                  <div className="bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm mb-8 group-hover:bg-punchline-blue group-hover:text-white transition-all">
                    {service.icon === 'Target' && <Target size={32} />}
                    {service.icon === 'Users' && <Users size={32} />}
                    {service.icon === 'Search' && <Search size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-punchline-black">{service.title}</h3>
                  <p className="text-punchline-gray leading-relaxed mb-6">{service.description}</p>
                  <Link to="/services" className="text-punchline-blue font-bold flex items-center group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Featured Courses Section (Replaced Case Studies) */}
      <section className="py-24 bg-punchline-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight text-white">Scale Your Knowledge</h2>
              <p className="text-gray-400 text-lg">Practical courses designed for African entrepreneurs and marketing professionals.</p>
            </div>
            <Link to="/courses" className="text-white border-b-2 border-punchline-blue font-bold text-lg pb-1 hover:text-punchline-blue transition-colors">
              View All Courses
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course, idx) => (
              <FadeIn key={course.id} delay={idx * 0.1}>
                <div className="group cursor-pointer overflow-hidden rounded-[2.5rem] bg-gray-900 border border-gray-800 hover:border-punchline-blue/50 transition-all">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute top-6 left-6 bg-punchline-blue text-white px-4 py-2 rounded-full font-bold text-xs">
                      {course.type === 'free' ? 'FREE' : `₦${course.price.toLocaleString()}`}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-3">
                        <BookOpen size={14} className="text-punchline-blue" />
                        <span className="text-punchline-blue font-bold uppercase tracking-widest text-[10px]">{course.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-4">{course.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-6">{course.description}</p>
                    <Link to="/courses" className="inline-flex items-center text-white font-bold group-hover:text-punchline-blue transition-colors">
                        Enroll Now <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex justify-center space-x-1 mb-8">
                {[1,2,3,4,5].map(i => <Star key={i} fill="#0B56C6" color="#0B56C6" size={24} />)}
              </div>
              <blockquote className="text-3xl md:text-4xl font-heading font-bold text-punchline-black leading-tight mb-12">
                "Punchline Marketing Hub transformed our sales approach. Their understanding of the local market combined with global strategy is truly unique in Nigeria."
              </blockquote>
              <div>
                <img src="https://picsum.photos/seed/ceo/100/100" className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100" alt="CEO" />
                <p className="font-black text-xl text-punchline-black">Segun Arinze</p>
                <p className="text-punchline-gray font-medium">CEO, Arinze Retail Solutions</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-punchline-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-punchline-blue rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
                <path d="M0 100 C 20 0 50 0 100 100 Z" />
              </svg>
            </div>
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight">Ready to Punch Through the Noise?</h2>
              <p className="text-xl text-blue-100 opacity-90">Book your strategic marketing audit today and discover your brand's true potential.</p>
              <div className="pt-4">
                <Link to="/contact" className="bg-white text-punchline-blue px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all inline-flex items-center shadow-xl">
                  Get My Free Audit <ChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

export default Home;
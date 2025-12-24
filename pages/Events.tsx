
import React from 'react';
import FadeIn from '../components/FadeIn';
import { Calendar, MapPin, Users, Award, Camera } from 'lucide-react';

const Events: React.FC = () => {
  const masterclasses = [
    { title: 'Q4 Sales Strategy Intensive', date: 'October 15, 2023', location: 'Victoria Island, Lagos', type: 'Physical Masterclass' },
    { title: 'Consumer Psychology & Branding', date: 'September 28, 2023', location: 'Abuja / Virtual', type: 'Hybrid Workshop' },
    { title: 'The Art of High-Ticket Closing', date: 'August 10, 2023', location: 'Virtual (Zoom)', type: 'Masterclass' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-punchline-black text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-punchline-blue/20 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-black font-heading mb-6">Our Impact <span className="text-punchline-blue">in Action</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              From elite masterclasses to corporate transformations, witness how we're reshaping the African marketing landscape.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Masterclasses */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-black font-heading text-punchline-black">Recent Masterclasses</h2>
            <div className="h-1.5 w-24 bg-punchline-blue mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {masterclasses.map((event, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-punchline-light p-8 rounded-[2rem] border border-gray-100 h-full hover:shadow-xl transition-all flex flex-col">
                  <div className="text-punchline-blue font-black uppercase text-xs tracking-widest mb-4 flex items-center">
                    <Award size={16} className="mr-2" /> {event.type}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-punchline-black mb-6 leading-tight flex-grow">
                    {event.title}
                  </h3>
                  <div className="space-y-3 text-punchline-gray">
                    <div className="flex items-center text-sm font-medium">
                      <Calendar size={18} className="mr-3 text-punchline-blue" /> {event.date}
                    </div>
                    <div className="flex items-center text-sm font-medium">
                      <MapPin size={18} className="mr-3 text-punchline-blue" /> {event.location}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Programs */}
      <section className="py-24 bg-punchline-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="space-y-8">
                <h2 className="text-4xl font-black font-heading text-punchline-black">Corporate Training & Programs</h2>
                <p className="text-lg text-punchline-gray leading-relaxed">
                  We partner with top-tier organizations across Nigeria to upskill their sales and marketing teams. Our bespoke corporate programs are designed around specific business KPIs.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-punchline-blue font-black text-3xl mb-2">50+</div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Companies Trained</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-punchline-blue font-black text-3xl mb-2">200+</div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Private Sessions</p>
                  </div>
                </div>
                <button className="bg-punchline-blue text-white px-10 py-4 rounded-full font-black text-lg shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                  Request For Your Team <Users size={20} />
                </button>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <img src="https://picsum.photos/seed/corp/1000/1000" className="rounded-[3rem] shadow-2xl" alt="Corporate training" />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl flex items-center gap-4">
                  <div className="bg-blue-100 p-4 rounded-2xl text-punchline-blue">
                    <Award size={32} />
                  </div>
                  <div>
                    <p className="font-black text-punchline-black">Accredited</p>
                    <p className="text-sm text-punchline-gray">Certified Training Modules</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Recent Activity Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black font-heading text-punchline-black">Moments on the Field</h2>
              <p className="text-punchline-gray mt-4">Highlights from our recent activities across Africa.</p>
            </div>
            <div className="hidden md:flex items-center text-punchline-blue font-bold gap-2">
              <Camera size={20} /> @punchlinehub
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <FadeIn key={i} delay={i * 0.05} className={`${i === 2 || i === 7 ? 'row-span-2' : ''}`}>
                <div className="relative group overflow-hidden rounded-3xl aspect-[3/4] md:aspect-auto h-full">
                  <img 
                    src={`https://picsum.photos/seed/activity${i}/600/800`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" 
                    alt={`Activity ${i}`} 
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-punchline-blue">
        <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">Host Your Next Program With PMH Expertise</h2>
          <p className="text-xl text-blue-100">Need expert facilitators or event organization? We bring the punchline to your business events.</p>
          <button className="bg-white text-punchline-blue px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
            Inquire About Facilitation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;

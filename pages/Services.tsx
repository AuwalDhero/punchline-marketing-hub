
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Users, Search, BarChart3, TrendingUp, Lightbulb } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-punchline-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-black font-heading mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized sales and marketing solutions designed to drive transformative growth in African markets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => (
              <div key={service.id} id={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                <FadeIn direction={idx % 2 === 1 ? 'right' : 'left'} className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={`https://picsum.photos/seed/service-${service.id}/1000/800`} 
                      alt={service.title} 
                      className="rounded-3xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-punchline-blue p-8 rounded-2xl shadow-xl text-white">
                      <div className="text-4xl font-black font-heading mb-1">0{idx + 1}</div>
                      <div className="font-bold uppercase tracking-widest text-xs opacity-70">Focus Area</div>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn direction={idx % 2 === 1 ? 'left' : 'right'} delay={0.2} className="lg:w-1/2 space-y-8">
                  <div className="inline-block p-4 bg-blue-50 text-punchline-blue rounded-2xl">
                    {service.icon === 'Target' && <Target size={32} />}
                    {service.icon === 'Users' && <Users size={32} />}
                    {service.icon === 'Search' && <Search size={32} />}
                  </div>
                  <h2 className="text-4xl font-black font-heading text-punchline-black">{service.title}</h2>
                  <p className="text-xl text-punchline-gray leading-relaxed">
                    {service.longDescription}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Tailored Strategy', 'Expert Implementation', 'Measurable ROI', 'Continuous Support'].map(item => (
                      <li key={item} className="flex items-center space-x-2 font-bold text-punchline-black">
                        <CheckCircle2 className="text-punchline-blue" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link to="/contact" className="bg-punchline-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all inline-block">
                      Discuss this Solution
                    </Link>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-punchline-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-heading text-punchline-black">The PMH Methodology</h2>
            <p className="text-punchline-gray mt-4 max-w-xl mx-auto">Our proven 4-step framework for business excellence.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', desc: 'Deep dive into your business model and market challenges.', icon: <Search /> },
              { title: 'Strategy', desc: 'Crafting a bespoke roadmap using data-driven insights.', icon: <Lightbulb /> },
              { title: 'Execution', desc: 'Flawless implementation of the strategic plan.', icon: <Target /> },
              { title: 'Optimization', desc: 'Continuous scaling and refining for peak performance.', icon: <TrendingUp /> }
            ].map((step, idx) => (
              <FadeIn key={step.title} delay={idx * 0.1} className="relative">
                <div className="bg-white p-10 rounded-3xl text-center h-full shadow-sm hover:shadow-xl transition-all relative z-10">
                  <div className="w-16 h-16 bg-punchline-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-punchline-black">{step.title}</h3>
                  <p className="text-punchline-gray">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 z-0 text-punchline-blue/20">
                    <ArrowRight size={48} strokeWidth={3} />
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({ className, size = 24, strokeWidth = 2 }: { className?: string, size?: number, strokeWidth?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7"/>
  </svg>
);

export default Services;

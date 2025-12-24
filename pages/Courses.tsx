
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Clock, BookOpen, Star, Filter } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  type: 'free' | 'paid';
  category: string;
  image: string;
}

const COURSES: Course[] = [
  { id: 1, title: 'Sales Mastery Accelerator', description: 'Advanced techniques to close high-ticket deals in the Nigerian market.', duration: '6 Weeks', price: 15000, type: 'paid', category: 'Sales', image: 'https://picsum.photos/seed/course1/800/600' },
  { id: 2, title: 'Foundations of Growth Marketing', description: 'Understand the basics of data-driven marketing for early startups.', duration: 'Self-paced', price: 0, type: 'free', category: 'Marketing', image: 'https://picsum.photos/seed/course2/800/600' },
  { id: 3, title: 'Strategic Leadership for Executives', description: 'Build high-performance teams and navigate business complexity.', duration: '4 Weeks', price: 20000, type: 'paid', category: 'Leadership', image: 'https://picsum.photos/seed/course3/800/600' },
  { id: 4, title: 'Customer Experience Protocol', description: 'The blueprint for world-class service that builds loyal fans.', duration: '3 Weeks', price: 12500, type: 'paid', category: 'Support', image: 'https://picsum.photos/seed/course4/800/600' },
  { id: 5, title: 'The Modern Entrepreneur', description: 'Fundamental tools every African business owner needs to survive.', duration: '2 Weeks', price: 0, type: 'free', category: 'Business', image: 'https://picsum.photos/seed/course5/800/600' },
  { id: 6, title: 'Digital Ad Strategy (Lagos Context)', description: 'Master Meta & Google ads specifically for the Nigerian consumer.', duration: '5 Weeks', price: 18000, type: 'paid', category: 'Ads', image: 'https://picsum.photos/seed/course6/800/600' },
];

const Courses: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'free' | 'paid'>('all');

  const filteredCourses = COURSES.filter(course => 
    filter === 'all' || course.type === filter
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-punchline-blue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-black font-heading mb-6">Master Your Craft</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Practical education from industry veterans designed to accelerate your career and business growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-2xl font-bold font-heading text-punchline-black flex items-center gap-2">
              <Filter className="text-punchline-blue" /> Browse Our Catalog
            </h2>
            <div className="flex bg-punchline-light p-1 rounded-full border border-gray-200">
              {['all', 'free', 'paid'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as any)}
                  className={`px-8 py-2 rounded-full font-bold text-sm capitalize transition-all ${
                    filter === type 
                      ? 'bg-punchline-blue text-white shadow-md' 
                      : 'text-punchline-gray hover:text-punchline-blue'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <FadeIn key={course.id} delay={idx * 0.1}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-punchline-blue uppercase tracking-widest shadow-sm">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center text-punchline-blue text-sm font-bold">
                        <Clock size={16} className="mr-1" /> {course.duration}
                      </div>
                      <div className={`px-3 py-1 rounded-lg font-black text-sm ${course.type === 'free' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-punchline-blue'}`}>
                        {course.price === 0 ? 'FREE' : `₦${course.price.toLocaleString()}`}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-punchline-black mb-3 leading-tight group-hover:text-punchline-blue transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-punchline-gray text-sm leading-relaxed mb-6 flex-grow">
                      {course.description}
                    </p>
                    <button className={`w-full py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 ${
                      course.type === 'free' 
                        ? 'bg-punchline-light text-punchline-black hover:bg-gray-200' 
                        : 'bg-punchline-blue text-white hover:bg-blue-700 shadow-lg'
                    }`}>
                      {course.type === 'free' ? 'Start Learning' : 'Enroll Now'} <BookOpen size={18} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-punchline-gray">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-punchline-light">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center space-x-1 text-yellow-400">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h2 className="text-4xl font-black font-heading text-punchline-black leading-tight">Join 5,000+ Professionals Leveling Up With PMH</h2>
          <p className="text-xl text-punchline-gray italic">"The Sales Mastery course payed for itself in the first week. The practical local insights are gold."</p>
          <div className="pt-4">
            <p className="font-bold text-punchline-black">— Chidi O., Growth Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

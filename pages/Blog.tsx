
import React from 'react';
import FadeIn from '../components/FadeIn';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    { id: 1, title: 'Navigating the 2024 Consumer Landscape in Lagos', excerpt: 'Deep dive into emerging buying patterns and economic shifts in Nigeria\'s commercial capital.', category: 'Market Research', date: 'Oct 12, 2023' },
    { id: 2, title: '5 Sales Techniques That Actually Work in Nigeria', excerpt: 'Bridging the gap between aggressive sales tactics and relationship-based marketing.', category: 'Sales Strategy', date: 'Oct 08, 2023' },
    { id: 3, title: 'The Future of Digital Advertising in West Africa', excerpt: 'Why mobile-first content is the only path to conversion in the current digital economy.', category: 'Marketing', date: 'Sep 28, 2023' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-punchline-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black font-heading text-punchline-black mb-6">Insights & <span className="text-punchline-blue">Knowledge</span></h1>
            <p className="text-xl text-punchline-gray leading-relaxed">
              Expert commentary on the sales and marketing trends shaping the future of African business.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <FadeIn key={post.id} delay={idx * 0.1}>
                <article className="group cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden mb-6">
                    <img src={`https://picsum.photos/seed/blog${post.id}/800/600`} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-xs font-black uppercase tracking-widest text-punchline-blue">
                      <span>{post.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-punchline-black group-hover:text-punchline-blue transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-punchline-gray leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-2">
                      <button className="flex items-center space-x-2 font-bold text-punchline-black group-hover:translate-x-2 transition-transform">
                        <span>Read Article</span>
                        <ArrowRight size={18} className="text-punchline-blue" />
                      </button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-24 bg-punchline-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-punchline-blue/10 rounded-[3rem] p-12 border border-punchline-blue/20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <img src="https://picsum.photos/seed/insight/1000/600" className="rounded-3xl shadow-2xl" alt="Featured insight" />
              </FadeIn>
              <FadeIn direction="left" className="space-y-6">
                <p className="text-punchline-blue font-black uppercase tracking-widest">Whitepaper</p>
                <h2 className="text-4xl font-black font-heading leading-tight">2024 Nigeria Sales Index: Performance & Resilience</h2>
                <p className="text-gray-400 text-lg">Download our comprehensive report on how organizations are adapting to inflationary pressures and changing consumer sentiment.</p>
                <button className="bg-white text-punchline-black px-10 py-4 rounded-full font-bold text-lg hover:bg-punchline-blue hover:text-white transition-all">
                  Download Free Report
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

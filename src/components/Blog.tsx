import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Corporate Law',
      title: 'Understanding Business Contract Essentials',
      excerpt: 'Learn the key elements every business contract should include to protect your interests and ensure enforceability.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      featured: true,
    },
    {
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Employment Law',
      title: 'Employee Rights in the Digital Age',
      excerpt: 'Exploring how modern technology impacts workplace rights and what employees need to know about digital privacy.',
      date: 'March 10, 2024',
      readTime: '7 min read',
      featured: false,
    },
    {
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Estate Planning',
      title: 'Estate Planning 101: Protecting Your Legacy',
      excerpt: 'A comprehensive guide to creating an estate plan that ensures your assets are distributed according to your wishes.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      featured: false,
    },
    {
      image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Family Law',
      title: 'Navigating Child Custody Agreements',
      excerpt: 'Important considerations and best practices for creating child custody arrangements that prioritize children\'s wellbeing.',
      date: 'February 28, 2024',
      readTime: '8 min read',
      featured: false,
    },
    {
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Real Estate',
      title: 'Real Estate Transaction Tips for Buyers',
      excerpt: 'Essential legal considerations when purchasing property to avoid common pitfalls and protect your investment.',
      date: 'February 20, 2024',
      readTime: '6 min read',
      featured: false,
    },
    {
      image: 'https://images.pexels.com/photos/7876721/pexels-photo-7876721.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Litigation',
      title: 'When to Consider Alternative Dispute Resolution',
      excerpt: 'Understanding mediation and arbitration as cost-effective alternatives to traditional litigation.',
      date: 'February 15, 2024',
      readTime: '5 min read',
      featured: false,
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Legal Insights & News
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay informed with the latest legal news, updates, and expert insights from our team
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {posts[0] && (
            <div className="mb-12 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/10 dark:to-slate-800/50 rounded-2xl overflow-hidden shadow-xl border border-blue-100 dark:border-blue-900/30">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Tag className="w-4 h-4" />
                  {posts[0].category}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {posts[0].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <div
                key={index}
                className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <button className="group/btn text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

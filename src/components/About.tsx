import { Scale, Award, Users, Target } from 'lucide-react';
import BroImg from '../assest/img.jpg';

const About = () => {
  const values = [
    {
      icon: Scale,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in every case we handle.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior legal services and outstanding results.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your needs and goals are at the center of everything we do.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Strategic approach focused on achieving the best possible outcomes.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Our Firm
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Built on a foundation of trust, expertise, and unwavering dedication to our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Your Legal Advocates Since 1985
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Legal Partners has been a cornerstone of legal excellence for over three decades. Founded with a vision to provide accessible, high-quality legal services, we have grown into one of the region's most respected law firms.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Our team of experienced attorneys specializes in a wide range of practice areas, from corporate law and litigation to family law and estate planning. We combine deep legal knowledge with practical business acumen to deliver solutions that protect your interests and advance your goals.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                What sets us apart is our commitment to personalized service. We take the time to understand your unique situation, provide clear guidance, and stand by your side every step of the way.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100 dark:from-blue-900/20 dark:to-slate-800/20 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                <img src={BroImg} alt="About - Narayana Law Firm" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-2xl">
                <div className="text-3xl font-bold mb-1">12+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              To provide exceptional legal representation that empowers our clients to navigate complex legal challenges with confidence, while maintaining the highest standards of professionalism, ethics, and client service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

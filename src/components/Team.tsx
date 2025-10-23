import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Senior Partner',
      expertise: 'Corporate Law & M&A',
      image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 20 years of experience, Sarah specializes in complex corporate transactions and mergers & acquisitions.',
      education: 'Harvard Law School, J.D.',
    },
    {
      name: 'Michael Chen',
      role: 'Managing Partner',
      expertise: 'Litigation & Dispute Resolution',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Michael has successfully represented clients in high-stakes litigation across multiple jurisdictions for 18 years.',
      education: 'Yale Law School, J.D.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Partner',
      expertise: 'Family Law & Estate Planning',
      image: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emily provides compassionate counsel in family law matters and comprehensive estate planning services.',
      education: 'Stanford Law School, J.D.',
    },
    {
      name: 'David Thompson',
      role: 'Partner',
      expertise: 'Real Estate & Property Law',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David brings 15 years of experience in commercial and residential real estate transactions and development.',
      education: 'Columbia Law School, J.D.',
    },
    {
      name: 'Jessica Williams',
      role: 'Senior Associate',
      expertise: 'Employment & Labor Law',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Jessica advises employers and employees on workplace disputes, contracts, and compliance matters.',
      education: 'NYU School of Law, J.D.',
    },
    {
      name: 'Robert Anderson',
      role: 'Senior Associate',
      expertise: 'Intellectual Property',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Robert specializes in patent, trademark, and copyright protection for innovative businesses and creators.',
      education: 'UC Berkeley School of Law, J.D.',
    },
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Experienced attorneys dedicated to achieving the best outcomes for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {member.role}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <Award className="w-4 h-4" />
                  {member.expertise}
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {member.bio}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                  {member.education}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              Interested in joining our team?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
              View Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

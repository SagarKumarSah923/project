import { Briefcase, ShieldCheck, Globe, Shield, Gavel, Heart } from "lucide-react";

// 🖼️ Import your local assets or use online images
import BankingLaw from '../assest/Banking Law.jpeg';
import CorporateLaw from '../assest/Corporate law.webp';
 import CompanyLaw from '../assest/Company Law.jpg';
 import CyberLaw from '../assest/Cyber-Laws.webp';
import BailMatters from '../assest/bail-lawyers.webp';
import DivorceLaw from '../assest/divorce-law.jpg';

export default function Services(): JSX.Element {
  const services = [
    {
      title: "Company Law",
      desc:
        "Navigating the complexities of company law requires a thorough understanding of the legal framework. We advise on incorporation, governance, compliance and shareholder agreements.",
      img: CompanyLaw,
      icon: Briefcase,
    },
    {
      title: "Corporate Law",
      desc:
        "In today's fast-paced and competitive business environment, having a robust legal framework is essential. We support transactions, contracts and corporate governance.",
      img: CorporateLaw,
      icon: ShieldCheck,
    },
    {
      title: "Cyber Law",
      desc:
        "In the digital era, safeguarding your digital assets and ensuring data protection is crucial. We handle data breaches, compliance (GDPR/IT Act) and cybercrime defence.",
      img: CyberLaw,
      icon: Globe,
     },
    {
      title: "Banking Law",
      desc:
        "Barrister Union Legal Firm specializes in providing expert legal counsel and representation for a wide range of banking and finance matters, including regulatory compliance, loan documentation, recovery and dispute resolution.",
      img: BankingLaw,
      icon: Gavel,
     },
    {
      title: "Bail Matters",
      desc:
        "When bail is at stake you need fast, pragmatic representation. We prepare applications, negotiate terms and represent you in courts to secure release where possible.",
      img: BailMatters,
      icon: Shield,
    },
    {
      title: "Divorce Lawyer",
      desc:
        "Compassionate, strategic family law representation covering divorce, child custody, maintenance and settlement negotiations to protect your rights.",
      img: DivorceLaw,
      icon: Heart,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Legal Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Practical, expert legal support across key practice areas to help you move forward with confidence.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={i}
                className="overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800 shadow hover:shadow-2xl transition-all border border-slate-200 dark:border-slate-700"
              >
                <div className="w-full h-44 sm:h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={`${s.title} image`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-full mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{s.desc}</p>

                  <a
                    href="#contact"
                    className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    aria-label={`Read more about ${s.title}`}
                  >
                    Read More
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

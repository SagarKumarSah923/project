import { Briefcase, ShieldCheck, Users, Zap } from "lucide-react";

export default function Services(): JSX.Element {
  const sharedImg = "https://thumbs.dreamstime.com/b/legal-services-concept-gavel-word-legal-services-sound-block-legal-services-101424374.jpg";

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

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {["Corporate Law", "Estate Planning", "Employment Law", "Litigation & ADR"].map((s, i) => {
            const Icon = i === 0 ? Briefcase : i === 1 ? ShieldCheck : i === 2 ? Users : Zap;
            const imgUrl = sharedImg;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800 shadow hover:shadow-2xl transition-all border border-slate-200 dark:border-slate-700"
              >
                {/* Image for the service card */}
                <div className="w-full h-44 sm:h-36 lg:h-40 overflow-hidden">
                  <img
                    src={imgUrl}
                    alt={`${s} image`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-full mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{s}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                    {i === 0
                      ? "Business formation, contracts, compliance and corporate governance to protect your company."
                      : i === 1
                      ? "Wills, trusts and succession planning to secure your legacy and protect beneficiaries."
                      : i === 2
                      ? "Employee relations, contracts, and workplace policies to reduce risk and disputes."
                      : "Representation in disputes and alternatives like mediation and arbitration for efficient resolution."}
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-2">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
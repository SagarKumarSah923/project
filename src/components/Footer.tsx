import { Scale, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' }, // changed: Gallery -> Services
      { label: 'Blog', href: '#blog' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ],
    practiceAreas: [
      'Corporate Law',
      'Litigation',
      'Family Law',
      'Real Estate',
      'Employment Law',
      'Intellectual Property',
    ],
    resources: [
      'Legal Resources',
      'Case Studies',
      'Privacy Policy',
      'Terms of Service',
      'FAQ',
      'Careers',
    ],
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Narayana Law Firm</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Providing expert legal counsel with integrity, dedication, and proven results since 1985.
            </p>
            <div className="flex gap-4">
              <button className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {footerLinks.practiceAreas.map((area, index) => (
                <li key={index}>
                  <button className="text-slate-400 hover:text-blue-400 transition-colors">
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <p className="font-semibold text-white mb-1">Address</p>
                <p className="text-sm">
                  Narayana Law Firm<br />
                  Chamber No - 264, Civil Wing<br />
                  Tis Hazari Court Complex, North Delhi<br />
                  Pin Code - 110054
                </p>
              </li>
              <li>
                <p className="font-semibold text-white mb-1">Email</p>
                <p className="text-sm">
                  <a href="mailto:gyanendra@lawer.com" className="text-slate-300 hover:text-blue-400">
                    gyanendra@lawer.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Legal Partners. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-slate-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

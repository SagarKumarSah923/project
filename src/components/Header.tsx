import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Scale } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className={`w-8 h-8 ${isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'}`}>
              Narayana Law Firm
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? isScrolled
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-white font-semibold'
                    : isScrolled
                    ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white'
                  : 'bg-white/20 text-white'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-4 py-3 transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

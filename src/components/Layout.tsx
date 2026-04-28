import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

interface LayoutAreaProps {
  children: React.ReactNode;
}

export function LayoutArea({ children }: LayoutAreaProps) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-rose/30">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Style Guide', path: '/style-guide' },
    { name: 'Book In', path: '/book-in' },
    { name: 'T&Cs', path: '/terms' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-4 md:px-8",
      isScrolled ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="group flex flex-col leading-tight">
          <span className="text-xl md:text-2xl font-serif font-bold text-stone-900 tracking-tight group-hover:text-rose transition-colors duration-300">
            The Picnic Project
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400 group-hover:text-rose/60 transition-colors duration-300">
            Newcastle
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-rose relative group",
                location.pathname === link.path ? "text-rose" : "text-stone-600"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-rose transition-transform duration-300 origin-left scale-x-0 ",
                location.pathname === link.path ? "scale-x-100" : "group-hover:scale-x-100"
              )} />
            </Link>
          ))}
          <Link
            to="/book-in"
            className="bg-sage text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sage/90 transition-all hover:shadow-lg active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile simple trigger - would usually need a menu but keeping it sparse for aesthetic */}
        <div className="md:hidden">
          <Link to="/book-in" className="bg-rose/10 text-rose px-4 py-2 rounded-full text-sm font-bold">
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-serif font-bold text-cream mb-6">The Picnic Project</h3>
          <p className="text-stone-400 mb-6 leading-relaxed max-w-xs">
            A boutique, warm-hearted picnic experience service in Newcastle, dedicated to community, connection, and inclusivity.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-rose transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-rose transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-cream transition-colors">Home</Link></li>
            <li><Link to="/style-guide" className="hover:text-cream transition-colors">Style Guide</Link></li>
            <li><Link to="/book-in" className="hover:text-cream transition-colors">Book Your Experience</Link></li>
            <li><Link to="/terms" className="hover:text-cream transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-6">Locations</h4>
          <ul className="space-y-3">
            <li>Redhead Beach</li>
            <li>King Edward Park</li>
            <li>Nobbys Beach</li>
            <li>Lake Macquarie</li>
            <li className="text-rose italic font-serif text-lg mt-4">“Bringing people together, one picnic at a time.”</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500">
        <p>&copy; {new Date().getFullYear()} The Picnic Project Newcastle. Supporting Inclusion.</p>
        <p>Made with love in Newcastle</p>
      </div>
    </footer>
  );
}

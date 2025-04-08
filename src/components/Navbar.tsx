import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Feather, History, Candy as Candle, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-3">
  <img src="/assets/watermelon.png" alt="Light for Gaza" className="h-10 w-10" />
  <Link to="/" className="text-2xl font-serif text-gray-800 hover:text-gray-600 transition-colors">
    Light for Gaza
  </Link>
</div>

          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Heart className="w-4 h-4" />} text="Home" isActive={isActive('/')} />
            <NavLink to="/prayer" icon={<Feather className="w-4 h-4" />} text="Prayer" isActive={isActive('/prayer')} />
            <NavLink to="/history" icon={<History className="w-4 h-4" />} text="History" isActive={isActive('/history')} />
            <NavLink to="/action" icon={<Globe2 className="w-4 h-4" />} text="Take Action" isActive={isActive('/action')} />
            <NavLink to="/wall-of-light" icon={<Candle className="w-4 h-4" />} text="Wall of Light" isActive={isActive('/wall-of-light')} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, icon, text, isActive }: { to: string; icon: React.ReactNode; text: string; isActive: boolean }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      className={`nav-link flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {icon}
      <span className="font-body">{text}</span>
    </Link>
  </motion.div>
);

export default Navbar;
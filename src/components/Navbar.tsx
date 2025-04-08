import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Feather, History, Globe2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link to="/" className='text-3xl font-light italic tracking-wide text-[#3b3a30] hover:text-[#55534d] transition-colors font-["Amiri",serif]'>
  Light for Gaza
</Link>

          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Heart className="w-4 h-4" />} text="Home" isActive={isActive('/')} />
            <NavLink to="/prayer" icon={<Feather className="w-4 h-4" />} text="Prayer" isActive={isActive('/prayer')} />
            <NavLink to="/history" icon={<History className="w-4 h-4" />} text="History" isActive={isActive('/history')} />
            <NavLink to="/action" icon={<Globe2 className="w-4 h-4" />} text="Take Action" isActive={isActive('/action')} />
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 space-y-2 pb-4"
            >
              <NavLink to="/" icon={<Heart className="w-4 h-4" />} text="Home" isActive={isActive('/')} />
              <NavLink to="/prayer" icon={<Feather className="w-4 h-4" />} text="Prayer" isActive={isActive('/prayer')} />
              <NavLink to="/history" icon={<History className="w-4 h-4" />} text="History" isActive={isActive('/history')} />
              <NavLink to="/action" icon={<Globe2 className="w-4 h-4" />} text="Take Action" isActive={isActive('/action')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, icon, text, isActive }: { to: string; icon: React.ReactNode; text: string; isActive: boolean }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
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

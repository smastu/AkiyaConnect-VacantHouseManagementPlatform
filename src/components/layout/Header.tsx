import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Book, AlertCircle, LayoutDashboard, Users, Menu as MenuIcon } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'ホーム', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: '物件一覧', path: '/properties', icon: <Building className="w-5 h-5" /> },
    { name: '所有者ダッシュボード', path: '/owner-dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: '管理者ダッシュボード', path: '/admin-dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'リノベーション', path: '/renovation-collaboration', icon: <Users className="w-5 h-5" /> },
    { name: '資料・ガイド', path: '/resources', icon: <Book className="w-5 h-5" /> },
    { name: '空き家を報告', path: '/report', icon: <AlertCircle className="w-5 h-5" /> },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Building className="w-8 h-8 text-indigo-700" />
          <span className="text-xl font-bold text-indigo-800">空き家コネクト</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-1 py-2 border-b-2 transition-colors hover:text-indigo-700 ${
                location.pathname === link.path
                  ? 'border-indigo-700 text-indigo-700'
                  : 'border-transparent text-gray-600'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-gray-600 hover:text-indigo-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 top-16 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                location.pathname === link.path
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={closeMenu}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
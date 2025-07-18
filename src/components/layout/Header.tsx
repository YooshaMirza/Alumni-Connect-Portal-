import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  LogOut, 
  Settings, 
  User,
  Users,
  MessageSquare,
  Home
} from 'lucide-react';

export function Header() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenus();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={closeMenus}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#1E40AF" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2"
            >
              <path d="m4 6 8-4 8 4"/>
              <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/>
              <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/>
              <path d="M18 5v17"/>
              <path d="M6 5v17"/>
              <circle cx="12" cy="9" r="2"/>
            </svg>
            <span className="text-xl font-bold text-primary-600">
              AlumniConnect
            </span>
          </Link>
        </div>

        {isAuthenticated ? (
          <nav className="hidden md:flex md:items-center md:space-x-1">
            <NavLink
              to="/feed"
              className={({ isActive }) =>
                cn(
                  'group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-gray-100',
                  isActive ? 'text-primary-600' : 'text-gray-600'
                )
              }
            >
              <MessageSquare size={18} className="mr-2" />
              Feed
            </NavLink>
            
            <NavLink
              to="/directory"
              className={({ isActive }) =>
                cn(
                  'group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-gray-100',
                  isActive ? 'text-primary-600' : 'text-gray-600'
                )
              }
            >
              <Users size={18} className="mr-2" />
              Directory
            </NavLink>
          </nav>
        ) : (
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/login'}
              className="mr-2"
            >
              Log In
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => window.location.href = '/signup'}
            >
              Join Now
            </Button>
          </div>
        )}

        <div className="flex items-center md:ml-6">
          {isAuthenticated ? (
            <>
              <button 
                className="mr-2 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 md:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              <div className="relative ml-4">
                <button
                  type="button"
                  className="flex items-center space-x-2 rounded-full transition-all hover:bg-gray-100"
                  onClick={toggleProfileMenu}
                >
                  <Avatar 
                    src={user?.avatar} 
                    name={user?.name} 
                    size="sm" 
                  />
                  <span className="hidden text-sm font-medium text-gray-700 md:block">
                    {user?.name}
                  </span>
                  <ChevronDown size={16} className="hidden text-gray-500 md:block" />
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                      <Link
                        to="/profile"
                        className="flex items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeMenus}
                      >
                        <User size={16} className="mr-2" />
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeMenus}
                      >
                        <Settings size={16} className="mr-2" />
                        Settings
                      </Link>
                      <button
                        className="flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="md:hidden">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/login'}
                className="mr-2"
              >
                Log In
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => window.location.href = '/signup'}
              >
                Join Now
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && isAuthenticated && (
        <div className="border-b border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/feed"
              className={({ isActive }) =>
                cn(
                  'flex items-center rounded-md px-3 py-2 text-base font-medium',
                  isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'
                )
              }
              onClick={closeMenus}
            >
              <MessageSquare size={18} className="mr-2" />
              Feed
            </NavLink>
            
            <NavLink
              to="/directory"
              className={({ isActive }) =>
                cn(
                  'flex items-center rounded-md px-3 py-2 text-base font-medium',
                  isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'
                )
              }
              onClick={closeMenus}
            >
              <Users size={18} className="mr-2" />
              Directory
            </NavLink>
            
            <div className="my-2 border-t border-gray-200"></div>
            
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                cn(
                  'flex items-center rounded-md px-3 py-2 text-base font-medium',
                  isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'
                )
              }
              onClick={closeMenus}
            >
              <User size={18} className="mr-2" />
              Profile
            </NavLink>
            
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                cn(
                  'flex items-center rounded-md px-3 py-2 text-base font-medium',
                  isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'
                )
              }
              onClick={closeMenus}
            >
              <Settings size={18} className="mr-2" />
              Settings
            </NavLink>
            
            <button
              className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
              onClick={handleLogout}
            >
              <LogOut size={18} className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// Helper function for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
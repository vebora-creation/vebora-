import React, { useState, useEffect, createContext, useContext } from 'react';
import { Menu, X, Infinity } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';

// --- Custom Router Implementation ---
// Replacing react-router-dom due to environment issues

const RouterContext = createContext({ path: '/', navigate: (path: string) => {} });

export const Router: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [path, setPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newPath: string) => {
    window.location.hash = newPath;
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Routes: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { path } = useContext(RouterContext);
  let match = null;
  React.Children.forEach(children, (child) => {
    if (match) return;
    if (React.isValidElement(child)) {
        if (child.props.path === path) {
            match = child.props.element;
        }
    }
  });
  return <>{match}</>;
};

export const Route: React.FC<{path: string, element: React.ReactNode}> = () => null;

export const Link: React.FC<{to: string, className?: string, children: React.ReactNode}> = ({ to, className, children }) => {
  return <a href={`#${to}`} className={className}>{children}</a>;
};

export const NavLink: React.FC<{to: string, className: (props: {isActive: boolean}) => string, children: React.ReactNode, onClick?: () => void}> = ({ to, className, children, onClick }) => {
  const { path } = useContext(RouterContext);
  const isActive = path === to;
  return (
    <a href={`#${to}`} className={className({ isActive })} onClick={onClick}>
      {children}
    </a>
  );
};

export const useNavigate = () => {
  const { navigate } = useContext(RouterContext);
  return navigate;
};

export const useLocation = () => {
    const { path } = useContext(RouterContext);
    return { pathname: path };
};

// --- Navbar Component ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleNav('/')}>
            <div className="relative">
               <Infinity className="h-8 w-8 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
               <div className="absolute inset-0 bg-brand-primary/40 blur-lg rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-brand-primary transition-all duration-300">
              {COMPANY_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-primary'
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link 
                to="/pricing" 
                className="bg-brand-primary hover:bg-teal-500 text-brand-dark px-5 py-2 rounded-full font-bold transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-accent border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-gray-900 text-brand-primary'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import { UseTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

function Header() {
  const { theme, toggleTheme, themeClasses } = UseTheme();
  const [scrolled, setScrolled] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
     
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900/90 backdrop-blur-md' 
            : 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-xl font-bold ${themeClasses[theme].text} hover:opacity-80 transition-opacity`}
          >
            Portfolio
          </button>

        
          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'skills', 'projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium ${themeClasses[theme].text} hover:text-fuchsia-600 transition-colors capitalize`}
              >
                {item}
              </button>
            ))}
            
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'dark' ? 'text-yellow-300 bg-gray-700' : 'text-gray-700 bg-gray-200'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                theme === 'dark' 
                  ? 'bg-fuchsia-600 text-white hover:bg-fuchsia-700' 
                  : 'bg-fuchsia-600 text-white hover:bg-fuchsia-700'
              } transition-colors`}
            >
              Contact
            </button>
          </nav>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 ${theme === 'dark' ? 'text-yellow-300' : 'text-gray-700'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          
          </div>
        </div>
      </div>

     

    </header>
  );
}

export default Header;
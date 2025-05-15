import { useTheme } from './ThemeProvider';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

function HomePage() {
  const { theme, toggleTheme, themeClasses } = useTheme();
  const { isAuth, user, logout } = useAuth();


  const currentTheme = themeClasses?.[theme] || themeClasses?.dark || {
    bg: 'bg-gray-900',
    text: 'text-gray-100',
    button: 'bg-blue-600 hover:bg-blue-700 text-white'
  };

  return (
    <div className={`${currentTheme.bg} ${currentTheme.text} min-h-screen p-8 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to AI Chat</h1>
        
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-md'} mb-8`}>
          <h2 className="text-2xl font-semibold mb-4">About This App</h2>
          <p className="mb-4">
            {user ? `Hello, ${user.name || 'User'}! ` : ''}
            This is a modern React application featuring:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Dark/Light theme switching</li>
            <li>Authentication system</li>
            <li>Responsive design</li>
            <li>Client-side routing</li>
          </ul>
          
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg ${currentTheme.button} transition-colors`}
          >
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          {isAuth ? (
            <div className="space-y-4">
              <p className="mb-4">
                You're logged in! Visit your <Link to="/dashboard" className="text-blue-400 hover:text-blue-300">Dashboard</Link>.
              </p>
              <button
                onClick={logout}
                className={`px-6 py-3 rounded-lg ${currentTheme.button} transition-colors w-full`}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <p className="mb-4">
                Please <Link to="/login" className="text-blue-400 hover:text-blue-300">login</Link> to access all features.
              </p>
              <div className="space-y-4">
                <Link
                  to="/login"
                  className={`px-6 py-3 rounded-lg ${currentTheme.button} transition-colors inline-block w-full text-center`}
                >
                  Go to Login Page
                </Link>
                <Link
                  to="/register"
                  className={`px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'} transition-colors inline-block w-full text-center`}
                >
                  Create New Account
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
import { useAuth } from './AuthContext';
import { useTheme } from './ThemeProvider';
import { useNavigate } from 'react-router-dom';
function Header() {
  const { isAuth, login, logout } = useAuth();
  const { theme, toggleTheme,  } = useTheme();
  const navigate = useNavigate()
 

  return (
    <header className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-500 shadow-md'} `}>
      <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-300 '}`}>AI Chat</h1>
      <div className="flex gap-4">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-200' : 'bg-gray-700 '} ${theme === 'dark' ? 'text-gray-700' : 'text-gray-200 '} transition-colors duration-200`}
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        
        {isAuth ? (
          
          <button
            onClick={logout}
            className={`px-4 py-2 rounded-lg ${
              theme === 'dark'
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-red-500 hover:bg-red-600 text-white'
            } transition-colors duration-200`}
          >
            Выйти
            
          </button>
        ) : (
          <div>
          <button
            onClick={()=>{
              setTimeout(() => {
                navigate("/register")
              }, 150);
              
            }}
            className={`px-4 py-2 rounded-lg ${
              theme === 'dark'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            } transition-colors duration-200`} 
          >
            Войти
          </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

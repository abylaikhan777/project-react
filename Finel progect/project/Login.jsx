import { useReducer, useEffect, useState, } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Date from "./Register"


const initialState = {
  email: '',
  password: '',
  error: '',
  isLoading: false
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.prompt]: action.value };
    case 'SET_ERROR':
      return { ...state, error: action.error };
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading };
    case 'LOAD_FROM_STORAGE':
      return { ...state, email: action.payload.email || '', password: action.payload.password || '' };
    default:
      return state;
  }
};

function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const {savedDatareg} = Datereg();

  useEffect(() => {
    const savedData = localStorage.getItem('loginFormData');
    if (savedDatareg == savedData) {
        dispatch({type: 'SET_ERROR', error: "you had logged in" })
    } else if (savedData) {
      dispatch({
        type: 'LOAD_FROM_STORAGE',
        payload: JSON.parse(savedData)
      });
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('loginFormData', JSON.stringify({
      email: state.email,
      password: state.password
    }));
  }, [state.email, state.password]);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_LOADING', isLoading: true });
    dispatch({ type: 'SET_ERROR', error: '' });

   
    if (state.email && state.password) {
      console.log('Вход выполнен:', { email: state.email, password: state.password });
      navigate('/dashboard');

    } else {
      dispatch({ type: 'SET_ERROR', error: 'Введите email и пароль' });
    }
    dispatch({ type: 'SET_LOADING', isLoading: false });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Вход</h2>

        {state.error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {state.error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={state.email}
              onChange={(e) => dispatch({ type: 'UPDATE_FIELD', prompt: 'email', value: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              value={state.password}
              onChange={(e) => dispatch({ type: 'UPDATE_FIELD', prompt: 'password', value: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={state.isLoading}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {state.isLoading ? 'Вход...' : 'Войти'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
           уже есть аккаунт? <Link to="/Login" className="text-blue-500 hover:underline">Войти</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;


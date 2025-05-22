import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './Home';
import { ThemeProvider } from './ThemeProvider';


function App() {
  return (

    <BrowserRouter>
    <ThemeProvider>
  
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
       
      </Routes> 
  
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
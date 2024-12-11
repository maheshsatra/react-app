import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router';
import Header from './components/pages/Header.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <App />
      </BrowserRouter>
  </StrictMode>,
)

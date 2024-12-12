import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router';
import Header from './pages/Header.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

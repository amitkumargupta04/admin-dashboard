import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // ← Yeh add karo
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import './i18n.js'
import { store } from './store/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster position="top-right" />
  </Provider>
)
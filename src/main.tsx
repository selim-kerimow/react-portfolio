import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import eng from './languages/english/global.json'
import rus from './languages/russian/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  lng: 'eng',
  resources: {
    eng: {global: eng},
    rus: { global: rus }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
  </BrowserRouter>,
)

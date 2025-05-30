
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'
import { GlobalStyles } from './Styles/globalStyles.ts'
import { BrowserRouter } from 'react-router'



createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>


)

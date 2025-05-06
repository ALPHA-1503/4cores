import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import Not_found from "./pages/Not_found/Not_found.jsx";
import "./Styles.scss";
import Contact from "./pages/Contact/Contact.jsx";
import Soon from "./pages/Soon/Soon.jsx";
import About from "./pages/About/About.jsx";
import {CookieProvider} from "./pages/scripts/CookieContext.jsx";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import i18n from "i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr }
        },
        fallbackLng: "fr",
        interpolation: {
           escapeValue: false
        }
    });

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '/', element: <Navigate to="/Home" />},
                { path: 'Home', element: <Home /> },
                { path: 'Contact', element: <Contact /> },
                { path: 'Soon', element: <Soon /> },
                { path: 'About', element: <About /> },
                { path: '*', element: <Not_found /> },
            ],
        },
    ]);

    return (
        <CookieProvider>
            <RouterProvider router={router}/>
        </CookieProvider>
    );
}

export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import Not_found from "./pages/Not_found/Not_found.jsx";
import "./Styles.scss";
import Contact from "./pages/Contact/Contact.jsx";
import Soon from "./pages/Soon/Soon.jsx";
import About from "./pages/About/About.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { path: 'Home', element: <Home /> },
                { path: 'Contact', element: <Contact /> },
                { path: 'Soon', element: <Soon /> },
                { path: 'About', element: <About /> },
                { path: '*', element: <Not_found /> },
            ],
        },
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import Not_found from "./pages/Not_found/Not_found.jsx";
import "./Styles.scss";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                { path: 'Home', element: <Home /> },
            ],
        },
        {
            path: '*',
            element: <Not_found />
        }
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
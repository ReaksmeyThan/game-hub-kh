import { createBrowserRouter } from "react-router-dom";
import { GameDetailPage } from "./pages/GameDetailPage";
import { HomePage } from "./pages/HomePage";
import { layout as Layout } from "./pages/layout";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
        {
            element: <HomePage />,
            index: true,
        },
        {
            path: "games/:id", 
            element: <GameDetailPage />,
            
        }
    ],
    }])

    export default router;
import { createBrowserRouter } from "react-router-dom";
import Layout from "@layout/Layout"
import Trending from "@pages/Trending";
import Recent from "@pages/Recent";
import Feed from "@pages/Feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Trending /> },
      { path: "trending/week", element: <Trending /> },
      { path: "recent", element: <Recent /> },
      { path: "feed", element: <Feed /> },
    ]
  },
]);

export default router;

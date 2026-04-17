import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element:<Homepage></Homepage>,
      },
      {
        path:"/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path:"/:id",
        element:<FriendDetails></FriendDetails>
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
]);
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Foods from "../pages/Foods/Foods";
import FoodCategories from "../pages/FoodCategories/FoodCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://taste-trackers-server.vercel.app/bestChefs"),
        children: [
          {
            path: "/",
            element: <Foods></Foods>,
            loader: () =>
              fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
            children: [
              {
                path: "/",
                element: <FoodCategories></FoodCategories>,
                loader: () =>
                  fetch(
                    "https://taste-trackers-server.vercel.app/foodCategories"
                  ),
              },
            ],
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
]);

export default router;

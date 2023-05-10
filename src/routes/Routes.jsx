import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Meals from "../pages/Meals/Meals";
import MealCategories from "../pages/MealCategories/MealCategories";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Upcoming from "../pages/Shared/Upcoming/Upcoming";
import BestChef from "../pages/BestChef/BestChef";
import Recipes from "../pages/Recipes/Recipes";
import Blog from "../pages/Blog/Blog";

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
            element: <Meals></Meals>,
            loader: () =>
              fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
            children: [
              {
                path: "/",
                element: <MealCategories></MealCategories>,
                loader: () =>
                  fetch(
                    "https://taste-trackers-server.vercel.app/mealCategories"
                  ),
              },
            ],
          },
        ],
      },
      { path: "/about", element: <Upcoming></Upcoming> },
      { path: "/contact", element: <Upcoming></Upcoming> },
      { path: "/services", element: <Upcoming></Upcoming> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/bestChef/:id",
        element: (
          <PrivateRoutes>
            <BestChef></BestChef>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://taste-trackers-server.vercel.app/bestChef/${params.id}`
          ),
        children: [
          {
            path: "/bestChef/:id",
            element: <Recipes></Recipes>,
            loader: () =>
              fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="),
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;

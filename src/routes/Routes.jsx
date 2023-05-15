import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/HomePage/HomePage";
import Meals from "../pages/HomePage/Meals/Meals";
import MealCategories from "../pages/HomePage/MealCategories/MealCategories";
import Upcoming from "../pages/SharedPage/Upcoming/Upcoming";
import Blog from "../pages/Blog/Blog";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import BestChef from "../pages/HomePage/ProfilesCard/BestChef/BestChef";
import Recipes from "../pages/HomePage/ProfilesCard/BestChef/Recipes/Recipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://taste-trackers.vercel.app/bestChefs"),
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
                  fetch("https://taste-trackers.vercel.app/mealCategories"),
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
          fetch(`https://taste-trackers.vercel.app/bestChef/${params.id}`, {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                "taste-trackers-access-token"
              )}`,
            },
          }),
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

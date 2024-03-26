import Recipe from "../Recipes/Recipe";

export const pageRoutes = [
  {
    path: "/recipes",
    children: <Recipe />,
  },
];

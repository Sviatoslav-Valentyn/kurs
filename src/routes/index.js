

import NotFound from "../components/NotFound";
import PostsList from "../components/PostsList";
import Main from "../pages/Main";
import PostArticle from "../pages/PostArticle";

export const routes = [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/results",
                element: <PostsList />
            },
            {
                path: "question/:id",
                element: <PostArticle />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]
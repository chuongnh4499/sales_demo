import { RouteObject } from "react-router-dom";
import ListProducts from "../components/user/list_products";
import SalePost from "../components/sale/sale_post";
import Admin from "../pages/admin/admin";
import Login from "../pages/login";
import NotFound from "../pages/not_found";
import Sale from "../pages/sale/sale_home";
import SignUp from "../pages/signup";
import EditProfile from "../pages/user/edit_profile";
import User from "../pages/user/user_home";
import ManageUsers from "../components/admin/manage_users";


export const route: RouteObject[] = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "",
                element: <ManageUsers />
            }
        ]
    },
    {
        path: "/sale",
        element: <Sale />,
        children: [
            {
                path: "",
                element: <SalePost />
            }
        ]
    },
    {
        path: "/register",
        element: <SignUp />
    },
    {
        path: "/user",
        element: <User />,
        children: [
            {
                path: "",
                element: <ListProducts />
            },
            {
                path: "profile/:id",
                element: <EditProfile />
            },
        ]
    },
    {
        path: "/*",
        element: <NotFound />
    }
]

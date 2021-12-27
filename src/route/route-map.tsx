import { RouteObject } from "react-router-dom";
import { ListProducts } from "../components/user/list-products";
import { SellerPost } from "../components/sale/seller-post";
import { Admin } from "../pages/admin/admin";
import { Login } from "../pages/login";
import { NotFound } from "../pages/not-found";
import { SellerHomePage } from "../pages/sale/seller-home";
import { SignUp } from "../pages/signup";
import { EditProfile } from "../pages/user/edit-profile";
import { UserHomePage } from "../pages/user/user-home";
import { ManageUsers } from "../components/admin/manage-users";
import { SignUpForm } from "../components/signup-form";
import { SalesRegistration } from "../pages/user/sales-registration";


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
                index: true,
                element: <ManageUsers />
            }
        ]
    },
    {
        path: "/seller",
        element: <SellerHomePage />,
        children: [
            {
                index: true,
                element: <SellerPost />
            }
        ]
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/user",
        element: <UserHomePage />,
        children: [
            {
                index: true,
                element: <ListProducts />
            },
            {
                path: "profile/:id",
                element: <EditProfile />
            },
            {
                path: "sales-registration",
                element: <SalesRegistration />
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound />
    }
]

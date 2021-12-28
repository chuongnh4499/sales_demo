import { RouteObject } from "react-router-dom";
import { ListProducts } from "../components/user/list-products";
import { SellerPost } from "../components/seller/seller-post";
import { Admin } from "../pages/admin/admin";
import { Login } from "../pages/login";
import { NotFound } from "../pages/not-found";
import { SellerHomePage } from "../pages/seller/seller-home";
import { SignUp } from "../pages/signup";
import { EditProfile } from "../pages/user/edit-profile";
import { UserHomePage } from "../pages/user/user-home";
import { ManageUsers } from "../components/admin/manage-users";
import { SalesRegistration } from "../pages/user/sales-registration";
import { UserFormRegistration } from "../pages/user/form-registration";
import { ListFormRegistration } from "../components/admin/list-form-registration";
import { ListProductsOfSeller } from "../components/seller/list-products";
import { Cart } from "../components/user/cart";
import { HistoryOrder } from "../components/user/history-order";


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
            },
            {
                path: "user-form-register",
                element: <ListFormRegistration />
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
            }, 
            {
                path: "view-my-product",
                element: <ListProductsOfSeller />
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
            },
            {
                path: "form-registration",
                element: <UserFormRegistration />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "history-order",
                element: <HistoryOrder />
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound />
    }
]

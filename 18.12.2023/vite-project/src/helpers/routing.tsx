import React from 'react';
import Homepage from '../pages/homepage';
import About from '../pages/about';


interface RouteItem{
    path: string,
    element: React.JSX.Element, 
    label?: string,
    exact?: boolean
}

export const routes: RouteItem[] = [
    {
        path : "/",
        element : <Homepage/>,
        exact:true,
        label: "Homepage"
    },
    {
        path: "/about",
        element: <About/>,
        label: "about"
    }
]
export default RouteItem
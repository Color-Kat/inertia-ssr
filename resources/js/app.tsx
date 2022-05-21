import React from "react";
import { createRoot } from 'react-dom/client';
import {App as InertiaApp, createInertiaApp} from "@inertiajs/inertia-react";
import {InertiaProgress} from '@inertiajs/progress';

import axios from "axios";
import AppLayout from "@/Layouts/AppLayout";


import Layout from "@/Layouts/Layout";
import {IPage} from "@/types/iPage";

import {Ziggy} from "@/ziggy";
const routeZiggy = require( "ziggy-js" );

// declare global{
//     namespace NodeJS {
//         interface Global {
//             // document: Document;
//             // window: Window;
//             // navigator: Navigator;
//             route: (name?: string, params?: any, absolute?: any, config?: any) => any;
//         }
//     }
// }

// window.axios = axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
    resolve: (name: string) => {
        const page = require(`./Pages/${name}`).default;

        // Add default layout for all components
        (page as IPage).layout = page.layout || ((page) => <Layout children={page}/>) ;

        return page;
    },
    setup({ el, App, props }) {
        // Set global function route
        // global.route = (name: string, params: any, absolute: any, config = Ziggy) => routeZiggy(name, params, absolute, config);

        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});


// resolve: name => {
//     const page = require(`./Pages/${name}`).default;
//     page.layout = AppLayout;
//     return page;
// },

InertiaProgress.init({color: '#4B5563', showSpinner: true, delay: 10000});

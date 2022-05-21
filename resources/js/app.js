import React from "react";
import { createRoot } from 'react-dom/client';
import {App as InertiaApp, createInertiaApp} from "@inertiajs/inertia-react";
import {InertiaProgress} from '@inertiajs/progress';

import axios from "axios";
import AppLayout from "@/Layouts/AppLayout";

import {Ziggy} from "@/ziggy";
import route from "ziggy-js";

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        // Set global function route
        global.route = (name, params, absolute, config = Ziggy) => route(name, params, absolute, config);

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

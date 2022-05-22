import React from "react";
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from "@inertiajs/inertia-react";
import {InertiaProgress} from '@inertiajs/progress';

import Layout from "@/Layouts/Layout";
import {IPage} from "@/types/iPage";

// import axios from "axios";
// window.axios = axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
    resolve: (name: string) => {
        const page = require(`./Pages/${name}`).default;

        // Add default layout for all components
        (page as IPage).layout =
            page.layout || ((page) => <Layout children={page}/>);

        return page;
    },
    setup({el, App, props}) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },

});

// Init progress bar for loadings
InertiaProgress.init({color: '#4B5563', showSpinner: true, delay: 10000});

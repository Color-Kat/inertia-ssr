import React from "react";
import {App as InertiaApp} from "@inertiajs/inertia-react";
import {InertiaProgress} from '@inertiajs/progress';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <InertiaApp
        initialPage={JSON.parse(container.dataset.page)}
        resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
    />
);

InertiaProgress.init({color: '#4B5563'});

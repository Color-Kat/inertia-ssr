import React, {useEffect, useState} from "react";
import {Inertia} from "@inertiajs/inertia";


const Layout: React.FC<any> = (props) => {

    useEffect(()=>{
        console.log('app layout')
    }, []);

    return (
        <div>
            <header>It's my header</header>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout

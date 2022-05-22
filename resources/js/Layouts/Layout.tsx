import React, {useEffect, useState} from "react";
import {Inertia} from "@inertiajs/inertia";
import {Link, InertiaLink} from "@inertiajs/inertia-react";
import useRoute from "@/hooks/useRoute";


const Layout: React.FC<any> = (props) => {
    const route = useRoute();


    return (
        <div>
            <header>
                <nav>

                    <ul className='flex w-1/3 justify-between'>
                        <li>
                            <InertiaLink href={route('home')}>Home</InertiaLink>
                        </li>
                        <li>
                            <InertiaLink href={route('dashboard')}>Dashboard</InertiaLink>
                        </li>
                        <li>
                            <InertiaLink href={route('myPage')}>My page</InertiaLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout

import React, {useEffect, useState} from "react";
import {Inertia} from "@inertiajs/inertia";
import {Link, InertiaLink} from "@inertiajs/inertia-react";
import useRoute from "@/hooks/useRoute";


const Layout: React.FC<any> = (props) => {
    const route = useRoute();


    return (
        <div>
            <header className='flex justify-center bg-gray-200 py-3 px-2 mb-2'>
                <nav className='container'>
                    <ul className='flex w-full justify-between'>
                        <li className="mx-1">
                            <InertiaLink href={route('home')}>Home</InertiaLink>
                        </li>
                        <li className="mx-1">
                            <InertiaLink href={route('dashboard')}>Dashboard</InertiaLink>
                        </li>
                        <li className="mx-1">
                            <InertiaLink href={route('myPage')}>My page</InertiaLink>
                        </li>
                        <li className="mx-1">
                            <InertiaLink href={route('goods.index')}>Goods</InertiaLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex justify-center w-full  px-2">
                <div className='container'>
                    {props.children}
                </div>
            </main>
        </div>
    )
}

export default Layout

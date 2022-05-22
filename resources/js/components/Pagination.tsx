import React, {useEffect} from 'react';
import {IPaginator} from "@/types/IPaginator";
import {Link} from "@inertiajs/inertia-react";

const Pagination: React.FC<{paginator: IPaginator<any>}> = ({paginator}) => {
    useEffect(() => {
        console.log(paginator)

    });

    if(paginator.links.length <= 3) return null;

    return (
        <nav className="relative my-5 flex justify-center">
            <ul className="inline-flex -space-x-px">
                {paginator.links.map((link, i) => (
                    <li key={i}>
                        <Link
                            href={link.url}
                            className={`py-2 px-3 leading-tight ${link.active ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            dangerouslySetInnerHTML={{__html: link.label}} // because laravel has html code symbols
                        />
                    </li>
                ))}

                {/*<li>*/}
                {/*    <a href="#"*/}
                {/*       className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#"*/}
                {/*       className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#"*/}
                {/*       className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#" aria-current="page"*/}
                {/*       className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">33</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#"*/}
                {/*       className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#"*/}
                {/*       className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#"*/}
                {/*       className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export default Pagination;

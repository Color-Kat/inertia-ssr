import React from 'react';
import {usePage} from "@inertiajs/inertia-react";
import {Page} from "@inertiajs/inertia";
import {IPaginator} from "@/types/IPaginator";
import Pagination from "@components/Pagination";

// interface IPaginator {
//     total: number;
//     data: {
//         id: number;
//         name: string;
//         price: number;
//     }[];
// }

const Index: React.FC = () => {
    const goods = usePage<Page<{
        goods: IPaginator<{
            id: number,
            name: string,
            price: number
        }>
    }>>().props.goods;

    return (
        <div className="h-screen relative w-full">
            {goods.total > 0
                ? <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Control</th>
                        </tr>
                        </thead>
                        <tbody>
                        {goods.data.map(good => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={good.id}>
                                    <td className="px-6 py-4">{good.id}</td>
                                    <td scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{good.name}</td>
                                    <td className="px-6 py-4">{good.price}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-green-600 text-white p-2 px-3 rounded-md">Create</button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>

                    <Pagination paginator={goods} />
                </div>
                : <div>
                    Товаров нема
                </div>
            }
        </div>
    );
};

export default Index;

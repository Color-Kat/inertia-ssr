import React from 'react';
import {usePage} from "@inertiajs/inertia-react";
import {Page} from "@inertiajs/inertia";

interface IPaginator {
    total: number;
    data: {
        id: number;
        name: string;
        price: number;
    }[];
}

const Index: React.FC = () => {
    const goods = usePage<Page<{ goods: IPaginator }>>().props.goods;
    console.log(goods)

    return (
        <div>
            {goods.total > 0
                ? <div>
                    <table className="table-auto">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Control</th>
                        </tr>
                        </thead>
                        <tbody>
                        {goods.data.map(good => {
                            return (
                                <tr>
                                    <td>{good.id}</td>
                                    <td>{good.name}</td>
                                    <td>{good.price}</td>
                                    <td>
                                        <button className="bg-green-600">Create</button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                : <div>
                    Товаров нема
                </div>
            }
        </div>
    );
};

export default Index;

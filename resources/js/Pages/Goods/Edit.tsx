import React, {useEffect, useState} from 'react';
import {Link, useForm, usePage} from "@inertiajs/inertia-react";
import {Page, Inertia} from "@inertiajs/inertia";
import useRoute from "@/hooks/useRoute";

const Edit: React.FC = () => {
    const route = useRoute();

    const good = usePage<Page<{good: {id: number, name: string, price: number}}>>().props.good;

    const {data, setData, patch, processing, errors } = useForm({
        name: good.name,
        price: good.price
    });

    function handleChange(e: any) {
        const key = e.target.id;
        const value = e.target.value;
        setData(values => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        patch(route('goods.update', good.id));
    }

    function getFirstError(): string {
        const keys = Object.keys(errors);
        return (errors as any)[keys[0]];
    }

    return (
        <div className="h-screen relative w-full">
            <div className="mt-10">
                <div className="flex justify-center">
                    <div className="mt-5 w-96">
                        <form onSubmit={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">

                                        <div className="mb-1">
                                            <Link className="text-sm font-medium text-gray-700"
                                                  href={route('goods.index')}>&lt;&lt;<span
                                                className="ml-1">Назад</span></Link>
                                        </div>

                                        <div className="col-span-6 ">
                                            <label htmlFor="name"
                                                   className="block text-sm font-medium text-gray-700"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text" name="name" id="name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={handleChange}
                                                value={data.name}
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="price"
                                                   className="block text-sm font-medium text-gray-700">Price</label>
                                            <input
                                                type="number" name="price" id="price"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={handleChange}
                                                value={data.price}
                                            />

                                        </div>
                                    </div>
                                </div>

                                <div className="my-2 bg-gray-100">
                                    {processing && <span>Загрузка</span>}
                                    {errors && <span className="text-red-500">{getFirstError()}</span>}
                                </div>

                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;

import React, {useEffect} from 'react';
import AppLayout from "@/Layouts/AppLayout";
import Test from "@components/Test";
import JetstreamDefault from "@/Jetstream/JetstreamDefault";
import {IPage} from "@/types/iPage";

const Dashboard: IPage = () => {
    const a: string = 'string';

    useEffect(()=>{
        console.log('render')
    }, []);

    return (
        // <AppLayout header={
        //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        //         Главная <Test/>
        //     </h2>
        // }>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        {/*<JetstreamDefault/>*/}
                    </div>
                </div>
            </div>

    );
}

Dashboard.layout = page => (
    <AppLayout header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Главная <Test/>
        </h2>
    }>
        {page}
    </AppLayout>
)

export default Dashboard;

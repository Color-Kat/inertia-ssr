import React from 'react';
import AppLayout from "@/Layouts/AppLayout";
import Test from "@components/Test";
import JetstreamDefault from "@/Jetstream/JetstreamDefault";

const Dashboard: React.FC = () => {
    const a: string = 'string';
    return (
        <AppLayout header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Главная {<Test></Test>}
            </h2>
        }>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <JetstreamDefault/>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;

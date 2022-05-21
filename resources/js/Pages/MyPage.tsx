import React from "react";
import {InertiaHead, InertiaLink, Link, Head} from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";
import AppLayout from "@/Layouts/AppLayout";

import {IPage} from "@/types/IPage";
// import route from "ziggy-js";



const MyPage: IPage = () => {
    return (
        // <Layout>
            <div>
                <Link href="/">Main page</Link>
            </div>
        // </Layout>
    );
}

// (MyPage as any).layout = (page: any) => {
//     <AppLayout children={page} title="myPage"/>
// }

MyPage.layout = page => <AppLayout children={page} />;

export default MyPage;

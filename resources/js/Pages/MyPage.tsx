import React from "react";
import {InertiaHead, InertiaLink, Link, Head} from "@inertiajs/inertia-react";
import AppLayout from "@/Layouts/AppLayout";
// import route from "ziggy-js";



const MyPage: React.FC = () => {
    return (
        <>
            <div>
                fsda
                <Link href="/">Main page</Link>
            </div>
        </>
    );
}

// (MyPage as any).layout = (page: any) => {
//     <AppLayout children={page} title="myPage"/>
// }

export default MyPage;

import React from "react";
import {Link, Head, InertiaHead} from "@inertiajs/inertia-react";

import {IPage} from "@/types/IPage";
import AppLayout from "@/Layouts/AppLayout";
import useRoute from "@/hooks/useRoute";

const MyPage: IPage = () => {
    const route = useRoute();

    return (
        <div>
            {/*<Head>*/}
            {/*    /!* This error is inertia bug because it's unsupport react 18 *!/*/}
            {/*    <title>My page</title>*/}
            {/*</Head>*/}
            <Link href={route('dashboard')}>Main page</Link>
        </div>
    );
}

// Change default layout
// MyPage.layout = page => <AppLayout children={page} />;

export default MyPage;

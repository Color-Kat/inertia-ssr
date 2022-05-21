import React from "react";
import {Link, Head} from "@inertiajs/inertia-react";

import {IPage} from "@/types/IPage";
import AppLayout from "@/Layouts/AppLayout";
import useRoute from "@/hooks/useRoute";


const MyPage: IPage = () => {
    const route = useRoute();

    return (
        <div>
            <Link href={route('dashboard')}>Main page</Link>
        </div>
    );
}

// Change default layout
MyPage.layout = page => <AppLayout children={page} />;

export default MyPage;

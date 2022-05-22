import route, {RouteParam, RouteParamsWithQueryOverload} from "ziggy-js";
import {Ziggy} from "@/ziggy";

const useRoute = () => {
    return (
        name?: string,
        params?: RouteParamsWithQueryOverload | RouteParam,
        absolute?: boolean,
        config: any = Ziggy
    ) => route(name, params, absolute, config);
}

export default useRoute;

import {RouteParamsRaw} from "vue-router";

export type SubmenuItem = {
    id: number,
    itemName: string,
    linkedRouteParams: {
        name: string,
        params: RouteParamsRaw,
    }
}

export type MenuItem = {
    id: number,
    name: string,
    children: SubmenuItem[],
}

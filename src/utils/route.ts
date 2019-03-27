import React from "react"
import { RouteProps, RouteComponentProps, StaticContext } from "react-router";

interface ExtendedRouterProp {
    allowedRoles?: Array<string>
}

export default class RouteClass {
    path: string;
    exact?: boolean;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render: () => React.ReactNode;
    allowedRoles?: Array<string>

    constructor(props: RouteProps & ExtendedRouterProp) {
        this.path = props.path as string;
        this.allowedRoles = props.allowedRoles;
        this.exact = props.exact || false;
        this.render = props.render as () => React.ReactNode;
        this.component = props.component;
    }
}
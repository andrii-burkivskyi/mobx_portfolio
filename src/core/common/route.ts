import { observable } from "mobx";

class Route {
    constructor(props: Route) {
        this.path = props.path;
        this.exact = props.exact;
        this.history = props.history;
    }

    @observable path: string;
    @observable exact?: boolean;
    @observable history?: History;
}
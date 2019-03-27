interface CommonMapWithId {
    id: string | number,
    [key: string]: any
}

interface CommonMap {
    [key: string]: any
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module "*.json" {
    const value: any;
    export default value;
}


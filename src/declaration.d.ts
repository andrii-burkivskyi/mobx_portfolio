declare type KeyWithValue<T, U> = {
    [P in keyof T]-?: U;
};

interface CommonMapWithId {
    id: string | number;
    [key: string]: any;
}

interface CommonMap {
    [key: string]: any;
}

interface ViewOf<T> {
    model: T;
}

interface HasClassName {
    className?: string;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module "*.json" {
    const value: any;
    export default value;
}


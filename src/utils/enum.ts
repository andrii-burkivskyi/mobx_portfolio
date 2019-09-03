export class EnumObject {
    static getKeys = <T extends Object>(enumObject: T): Array<string> => 
        Object.keys(enumObject).filter((key) => isNaN(+key));

    static getValues = <T extends Object>(enumObject: T): Array<T[keyof T]> => 
        EnumObject.getKeys(enumObject).map((key) => enumObject[key]);
}


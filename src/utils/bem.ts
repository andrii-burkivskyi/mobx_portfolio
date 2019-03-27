import snakeCase from 'lodash.snakecase';

const addClass = (className: string) => className ? ` ${className}` : "";

interface ModOptions {
  [key: string]: string | boolean | undefined
}
const bem = (elementClassName: string, options: ModOptions, addedClassName: string = "") => 
  Object.entries(options).reduce((acc, [key, value]) => {
    const modifier = typeof value !== 'boolean'
      ? `${snakeCase(key)}-${value}`
      : snakeCase(key);

    return value
      ? `${acc} ${elementClassName}--${modifier}`
      : acc;
  }, elementClassName) + addClass(addedClassName);

export default bem;

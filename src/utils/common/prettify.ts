/**
 * Wraps a type in an object to allow for type inference to be shown in the editor.
 */
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export interface ILinkedListNode<T> {
    value: T | null
    prev: ILinkedListNode<T> | null
    next: ILinkedListNode<T> | null
}

export interface ISingleLinkedListNode<T> {
    value: T | null
    next: ISingleLinkedListNode<T> | null
}

export type ILinkedListNodeType<T> = ILinkedListNode<T> | null
export type ISingleLinkedListNodeType<T> = ISingleLinkedListNode<T> | null

export interface ILinkedList<T> {
    size: number

    findByIndex(index: number): ILinkedListNodeType<T> | ISingleLinkedListNodeType<T>

    findByValue(value: T): ILinkedListNodeType<T> | ISingleLinkedListNodeType<T>

    insertTo(value: T, index: number): void

    prepend(value: T): void

    append(value: T): void

    removeByIndex(index: number): boolean

    removeByValue(value: T): boolean

    toString(): string
}

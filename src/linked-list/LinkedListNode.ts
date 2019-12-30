import { ILinkedListNode, ILinkedListNodeType } from '@/linked-list/index'

export class LinkedListNode<T> implements ILinkedListNode<T>{
    value: T | null = null
    next: ILinkedListNodeType<T> = null
    prev: ILinkedListNodeType<T> = null

    constructor(
        value: T,
        next: ILinkedListNodeType<T> = null,
        prev: ILinkedListNodeType<T> = null,
    ) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

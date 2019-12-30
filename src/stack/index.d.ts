import { ISingleLinkedListNodeType } from '@/linked-list'

export interface Stack<T> {
    pop(item: T | ISingleLinkedListNodeType<T>): T | ISingleLinkedListNodeType<T>

    push(item: T | ISingleLinkedListNodeType<T>): boolean
}

import { Stack } from '@/stack/index'
import { ILinkedList } from '@/linked-list'
import { SingleLinkedList } from '@/linked-list/SingleLinkedList'

export default class LinkedListStack<T> implements Stack<T> {
    private list: ILinkedList<T>

    constructor() {
        this.list = new SingleLinkedList()
    }

    pop(value: T): T {
        this.list.removeByValue(value)
        return value
    }

    push(value: T): boolean {
        this.list.append(value)
        return true
    }
}

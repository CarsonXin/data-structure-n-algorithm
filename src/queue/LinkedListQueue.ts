import { IQueue } from '@/queue/index'
import { ISingleLinkedListNodeType } from '@/linked-list'
import { SingleLinkedListNode } from '@/linked-list/SingleLinkedList'

export default class LinkedListQueue<T> implements IQueue<T> {
    private tail: ISingleLinkedListNodeType<T> = null
    private head: ISingleLinkedListNodeType<T> = null

    dequeue(): T | null {
        if (this.head) {
            let value = this.head.value
            this.head = this.head.next
            return value
        } else {
            return null
        }
    }

    enqueue(value: T): boolean {
        let newNode = new SingleLinkedListNode(value)

        if (!this.tail) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        return true
    }
}

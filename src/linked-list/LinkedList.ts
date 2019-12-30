import { LinkedListNode } from '@/linked-list/LinkedListNode'
import {
    ILinkedList,
    ILinkedListNode,
    ILinkedListNodeType,
} from '@/linked-list/index'

export class LinkedList<T> implements ILinkedList<T> {
    // 哨兵头结点
    private head: ILinkedListNodeType<T> = null
    // 哨兵尾结点
    private tail: ILinkedListNodeType<T> = null
    public size: number = 0

    findByIndex(index: number): ILinkedListNodeType<T> {
        let node = this.head
        let position = 0
        while (node && position !== index) {
            node = node.next
            position++
        }
        return node
    }

    findByValue(value: T): ILinkedListNodeType<T> {
        let node = this.head
        while (node && node.value !== value) {
            node = node.next
        }
        return node
    }

    insertTo(value: T, index: number) {
        let newNode = new LinkedListNode(value)
        let position = 0
        let prevNode = this.head
        while (prevNode && position !== index) {
            prevNode = prevNode.next
            position++
        }
        if (!prevNode) {
            return
        }
        newNode.next = prevNode.next
        prevNode.next = newNode
        newNode.prev = prevNode
        this.size++
    }

    prepend(value: T): void {
        let newNode = new LinkedListNode(value)
        let head = this.head
        if (!head) {
            this.head = this.tail = newNode
        } else {
            head.prev = newNode
            newNode.next = head
            this.head = newNode
        }
        this.size++
    }

    append(value: T): void {
        let tailNode = this.tail
        let newNode = new LinkedListNode(value)
        if (!tailNode) {
            this.head = this.tail = newNode
        } else {
            tailNode.next = newNode
            newNode.prev = tailNode
            this.tail = newNode
        }
        this.size++
    }

    private removeNode(node: ILinkedListNode<T>) {
        if (node.prev) {
            node.prev.next = node.next
        } else {
            this.head = node.next
        }

        if (node.next) {
            node.next.prev = node.prev
        } else {
            this.tail = node.prev
        }
        this.size--
    }

    removeByIndex(index: number): boolean {
        let position = 0
        let prevNode = this.head
        while (prevNode && position !== index) {
            prevNode = prevNode.next
            position++
        }
        if (!prevNode) {
            return false
        }
        this.removeNode(prevNode)
        return true
    }

    removeByValue(value: T): boolean {
        let node = this.head
        while (node && node.value !== value) {
            node = node.next
        }
        if (!node) {
            return false
        }
        this.removeNode(node)
        return true
    }

    toString(splitter: string = ' '): string {
        let result: string = ''
        let node = this.head
        while (node) {
            result = `${result}${splitter}${node.value}`
            node = node.next
        }
        return result
    }
}

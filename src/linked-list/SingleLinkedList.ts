import {
    ILinkedList,
    ISingleLinkedListNode,
    ISingleLinkedListNodeType,
} from '@/linked-list/index'
// todo 完成代码逻辑 1230
export class SingleLinkedListNode<T> implements ISingleLinkedListNode<T> {
    value: T | null = null
    next: ISingleLinkedListNodeType<T> = null

    constructor(value: T, next: ISingleLinkedListNodeType<T> = null) {
        this.value = value
        this.next = next
    }
}

export class SingleLinkedList<T> implements ILinkedList<T> {
    size: number = 0
    private head: ISingleLinkedListNodeType<T>
    private tail: ISingleLinkedListNodeType<T>

    constructor() {
        this.head = null
        this.tail = null
    }

    findByIndex(index: number): ISingleLinkedListNodeType<T> {
        let node = this.head
        let position = 0
        while (node && position !== index) {
            node = node.next
            position++
        }
        return node
    }

    findByValue(value: T): ISingleLinkedListNodeType<T> {
        let node = this.head
        while (node && node.value !== value) {
            node = node.next
        }
        return node
    }

    insertTo(value: T, index: number) {}

    prepend(value: T): void {
        let newNode = new SingleLinkedListNode(value)
        if (!this.tail) {
            this.tail = this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    append(value: T): void {
        let newNode = new SingleLinkedListNode(value)
        if (!this.tail) {
            this.tail = this.head = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    private removeNode(node: ISingleLinkedListNode<T>) {
        let prevNode = this.head
        if (prevNode) {
            while (prevNode.next && prevNode.next.value !== node.value) {
                if (!prevNode.next.next) {
                    prevNode.next = null
                } else {
                    prevNode = prevNode.next
                }
            }
            prevNode.next = node.next
        }
        return prevNode
    }

    removeHead() {
        if (this.head) {
            this.removeNode(this.head)
        }
    }

    removeTail(): void {
        if (this.tail) {
            this.removeNode(this.tail)
        }
    }

    removeByIndex(index: number): boolean {
        let node = this.findByIndex(index)
        if (node === null) {
            return false
        }
        this.removeNode(node)
        return true
    }

    removeByValue(value: T): boolean {
        let node = this.findByValue(value)
        if (node === null) {
            return false
        }
        this.removeNode(node)
        return true
    }

    toString(splitter: string = ' '): string {
        let start = this.head
        let result = ''
        while (start) {
            result = `${result}${splitter}${start.value}`
        }
        return result
    }
}

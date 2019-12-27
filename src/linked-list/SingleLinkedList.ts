import {
    ILinkedList,
    ILinkedListNode,
    ISingleLinkedListNode,
    ISingleLinkedListNodeType,
} from '@/linked-list/linked-list'

class SingleLinkedListNode<T> implements ISingleLinkedListNode<T> {
    value: T | null = null
    next: ISingleLinkedListNodeType<T> = null

    constructor(value: T, next: ISingleLinkedListNodeType<T> = null) {
        this.value = value
        this.next = next
    }
}

export class SingleLinkedList<T> implements ILinkedList<T> {
    size: number = 0
    private readonly head: ISingleLinkedListNodeType<T>

    constructor() {
        this.head = new SingleLinkedListNode<any>(null)
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

    prepend(value: T): void {}

    append(value: T): void {}

    private removeNode(node: ILinkedListNode<T>) {}

    removeByIndex(index: number): boolean {
        return  false
    }

    removeByValue(value: T): boolean {
        return  false
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

import { IQueue } from '@/queue/index'

export default class ArrayQueue<T> implements IQueue<T> {
    private readonly size: number = 0
    private head: number = 0
    private tail: number = 0
    private readonly list: T[]

    constructor(size: number) {
        this.size = size
        this.head = 0
        this.list = new Array(size)
    }

    enqueue(item: T): boolean {
        if (this.tail === this.size) {
            // 当队列的储存空间不足时
            if (this.head === 0) {
                // 队列已满，无法储存新数据
                return false
            }
            // 数据搬移
            for (let i = this.head; i < this.tail; i++) {
                this.list[i - this.head] = this.list[i]
            }

            this.tail -= this.head
            this.head = 0
        }
        this.list[this.tail] = item
        this.tail++
        return true
    }

    dequeue(): T | null {
        if (this.head === this.size) {
            return null
        }
        let result = this.list[this.head]
        this.head++
        return result
    }
}

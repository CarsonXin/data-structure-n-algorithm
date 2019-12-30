import { Stack } from '@/stack/index'

export default class ArrayStack<T> implements Stack<T> {
    private readonly size: number
    private readonly list: T[]
    private total: number

    constructor(size: number) {
        this.list = new Array(size)
        this.size = size
        this.total = 0
    }

    pop(item: T): T| null {
        if (this.total === 0) {
            return null
        }
        let tempItem = this.list[this.total - 1]
        --this.total
        return tempItem
    }

    push(item: T): boolean {
        if (this.total === this.size) {
            return false
        }
        this.list[this.total] = item
        this.total++
        return true
    }
}

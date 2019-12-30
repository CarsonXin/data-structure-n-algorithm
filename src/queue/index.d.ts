export interface IQueue<T> {
    enqueue(item: T): boolean

    dequeue(): T | null
}

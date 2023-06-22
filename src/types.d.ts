export type Status = "done" | "pending" 


export interface Task {
    id: number
    name: string
    description: string
    status: Status
}
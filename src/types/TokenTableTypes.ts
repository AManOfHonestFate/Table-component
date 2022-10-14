// item's statuses
export type Statuses = 'green' | 'red' | 'yellow';
// select statuses
export type SelectStatus = Statuses & 'all';
// filter obj
export interface Filter {
    status: SelectStatus,
    type: string
}
// table's row
export interface TableRowItem {
    id: number,
    name: string,
    status: Statuses,
    type: string,
    conditions: string,
    volume: number,
    roi: number,
    free: number,
    hedge: number,
}
// keys of table's row obj
export type ItemKeys = keyof TableRowItem;
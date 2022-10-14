import TokenTableRow from "../TokenTableRow/TokenTableRow";
import styles from './TokenTable.module.css';
import {Filter, TableRowItem} from "../../types/TokenTableTypes";
import TokenTableHeaders from "../TokenTableHeaders";

interface TokenTableProps{
    items: TableRowItem[],
    sortColumn: string,
    filters: Filter,
    onSort: (field: string) => void,
    onFilter: (filter: Filter) => void,
    onBuy: (id: number) => void
}
// main table component
function TokenTable(props: TokenTableProps) {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <TokenTableHeaders
                    sortColumn={props.sortColumn}
                    filters={props.filters}
                    onSort={props.onSort}
                    onFilter={props.onFilter}
                ></TokenTableHeaders>
            </thead>
            <tbody>
                {props.items.map(item =>
                    <TokenTableRow
                        {...item}
                        onBuy={props.onBuy}
                        key={item.id}
                    ></TokenTableRow>
                )}
            </tbody>
        </table>
    );
}

export default TokenTable;
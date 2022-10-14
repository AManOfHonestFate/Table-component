import Select from "./Select/Select";
import {Filter, SelectStatus} from "../types/TokenTableTypes";

interface TokenTableHeadersProps {
    sortColumn: string,
    filters: Filter,
    onSort: (field: string) => void,
    onFilter: (filter: Filter) => void,
}

const tableHeaders = {
    name: 'project',
    type: 'token type',
    conditions: 'conditions',
    volume: 'volume',
    roi: 'ROI',
    free: 'free float',
    hedge: 'insurance hedge'
}

function TokenTableHeaders(props: TokenTableHeadersProps) {
    // status selector
    const statusOptions = ['all', 'green', 'yellow', 'red'];
    const selectStatus = (
        <Select
            defaultValue={props.filters.status}
            onClick={event => event.stopPropagation()}
            onChange={event => {
                props.filters.status = (event.target as HTMLSelectElement).value as SelectStatus;
                props.onFilter(props.filters);
            }}
            options={statusOptions}
        ></Select>
    )
    // token selector
    const tokenOptions = ['all', 'TR', 'TH'];
    const selectToken = (
        <Select
            defaultValue={props.filters.type}
            onClick={event => event.stopPropagation()}
            onChange={event => {
                props.filters.type = (event.target as HTMLSelectElement).value;
                props.onFilter(props.filters);
            }}
            options={tokenOptions}
        ></Select>
    )

    return (
        <tr>
            {Object.keys(tableHeaders).map((field, idx, th) =>
                <th
                    onClick={() => props.onSort(
                        props.sortColumn === field ? '- ' + field : field
                    )}
                    key={idx}
                >
                    { idx === 0 ? selectStatus : '' }
                    { idx === 1 ? selectToken : '' }
                    { th[idx] }
                </th>)
            }
        </tr>
    );
}

export default TokenTableHeaders;
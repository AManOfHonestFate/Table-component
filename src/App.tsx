import './App.css'
import TokenTable from "./components/TokenTable/TokenTable";
import {Filter, ItemKeys, TableRowItem} from "./types/TokenTableTypes";
import {useState} from "react";

const tableItems =[
    {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 3, name: 'Tokenhund.hub', status: 'green', type: 'THc', conditions: 'x2,1 years', volume: 120000, roi: 23, free: 2, hedge: 20},
    {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
] as TableRowItem[];

function App() {
    const [items, setItems] = useState(tableItems);
    const [sort, setSort] = useState('project');
    const [filters, setFilters] = useState({status: 'all', type: 'all'} as Filter);
    // sort function
    function onSort(sort: string) {
        // if there is minus, splits it
        const parsedSort = sort.split(' ');
        // checks for minus
        let field = parsedSort[0] as ItemKeys;
        let minus = false;
        if (parsedSort.length === 2) {
            field = parsedSort[1] as ItemKeys;
            minus = true;
        }

        items.sort((el1, el2) => {
            let res: number;
            const a = el1[field];
            const b = el2[field];
            // sort for numbers
            if (typeof a === 'number' && typeof b === 'number') {
                res = a - b;
            }
            // sort for string
            res = a.toString().toLowerCase().localeCompare(b.toString().toLowerCase())
            // return negative if minus
            return minus ? -res : res;
        })
        // updates values
        setSort(sort);
        setItems([...items]);
    }
    // filters for both fields
    function onFilter(filter: Filter) {
        // updates filter
        setFilters({...filter});
        // updates items
        setItems(tableItems.filter(item =>
            (filter.status === 'all' || item.status === filter.status)
            && (filter.type === 'all' || item.type.includes(filter.type))
        ))
    }
    // alerts id
    function onBuy(id: number) {
        alert('Buy ' + id)
    }

    return (
        <div>
            <TokenTable
              items={items}
              sortColumn={sort}
              filters={filters}
              onSort={onSort}
              onFilter={onFilter}
              onBuy={onBuy}
            ></TokenTable>
        </div>
    )
}

export default App

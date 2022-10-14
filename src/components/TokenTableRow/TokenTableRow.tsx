import {TableRowItem} from "../../types/TokenTableTypes";
import styles from './TokenTableRow.module.css'
import Button from "../Button/Button";

interface TokenTableRowProps extends TableRowItem{
    onBuy: Function,
}
// statuses of the row
const bgColor = new Map([
    ['green', styles.green],
    ['yellow', styles.yellow],
    ['red', styles.red]
])
// renders table's row
function TokenTableRow({onBuy,...row}: TokenTableRowProps) {
    // destructures row object...
    //... and formats volume, roi and hedge
    const {id, status, ...formattedRow} = {
        ...row,
        volume: `$ ${new Intl.NumberFormat('ru-RU').format(row.volume)}`,
        roi: `${row.roi} %`,
        hedge: `${row.hedge} %`
    }

    return (
        <tr
            className={styles.row + ' ' + bgColor.get(status)}
        >
            {Object.values(formattedRow).map((slot, idx) =>
                <td key={idx}>{slot}</td>
            )}
            <td>
                <Button
                    onClick={() => onBuy(id)}
                >
                    Buy
                </Button>
            </td>
        </tr>
    );
}

export default TokenTableRow;
import {HTMLAttributes} from "react";
import styles from './Select.module.css'

interface SelectProps {
    options: string[]
}
// renders custom select
function Select(props: SelectProps & HTMLAttributes<HTMLSelectElement>) {
    return (
        <select
            className={styles.select}
            {...props}
        >
            {props.options.map((opt, idx) =>
                <option key={idx}>{ opt }</option>
            )}
        </select>
    );
}

export default Select;
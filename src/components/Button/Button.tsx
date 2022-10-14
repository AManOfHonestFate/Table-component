import React, {HTMLAttributes} from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    children: string
}
// renders custom button
function Button(props: ButtonProps & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={styles.button}
        >
            {props.children}
        </button>
    );
}

export default Button;
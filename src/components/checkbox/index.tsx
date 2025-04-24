import { type ChangeEventHandler, type FC, type RefObject, useRef } from 'react';
import styles from './styles.module.css';
import { CheckboxIcon } from '../icons';

type TProps = {
    name: string,
    label: string,
    value: string,
    changeHandler: ChangeEventHandler<HTMLInputElement>,
    type?: 'checkbox' | 'radio',
    checked?: boolean,
    iconFill?: string,
    iconSize?: number,
}

export const Checkbox: FC<TProps> = ({name, label, value, type='checkbox', changeHandler, checked=false, iconFill='#000', iconSize=30}) => {

    return (
        <label className={`${styles.wrap} ${checked ? styles.wrapActive : ''}`}>
            <input 
                className={styles.input} 
                name={name} 
                type={type} 
                value={value}
                checked={checked} 
                onChange={changeHandler} 
            />
            <CheckboxIcon fill={iconFill} size={iconSize} checked={checked} />
            <div className={styles.label}>{label}</div>
        </label>
    )
}

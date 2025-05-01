import { type FC } from 'react';
import styles from './success.module.css';
import { type TIconProps } from '../../core/type';

export const SuccessIcon: FC<TIconProps> = ({size=26, fill='#000', strokeWidth=2}) => (
    <svg width={size} height={size} className={styles.checkmark} stroke={fill} strokeWidth={strokeWidth} strokeMiterlimit={10} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className={styles.checkmarkCircle} stroke={fill} strokeWidth={strokeWidth} cx="26" cy="26" r="25" fill="none" strokeDasharray={166} strokeDashoffset={166} strokeMiterlimit={10} />
        <path className={styles.checkmarkCheck} transform-origin={'50% 50%'} strokeDasharray={48} strokeDashoffset={48} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
)

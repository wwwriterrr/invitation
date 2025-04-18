import { FC } from 'react';
import styles from './Dates.module.css';

export const DatesBlock: FC = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>
                Дата проведения
            </h2>
            <div className={styles.date}>
                <div className={`${styles.side} ${styles.left}`}>
                    <span>июнь</span>
                </div>
                <div className={styles.center}>
                    <span>четверг</span>
                    <span className={styles.centerBig}>12</span>
                    <span>2025</span>
                </div>
                <div className={`${styles.side} ${styles.right}`}>
                    <span>в 15:00</span>
                </div>
            </div>
        </div>
    )
}

import { FC } from 'react';
import styles from './Dates.module.css';
import {motion} from 'framer-motion';

export const DatesBlock: FC = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>
                Дата проведения
            </h2>
            <motion.div 
                className={styles.date}
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: .4,
                    ease: 'easeOut',
                }}
                viewport={{
                    once: true,
                }}
            >
                <div className={`${styles.side} ${styles.left}`}>
                    <span>июнь</span>
                </div>
                <div className={styles.center}>
                    <span>четверг</span>
                    <span className={styles.centerBig}>12</span>
                    <span>2025</span>
                </div>
                <div className={`${styles.side} ${styles.right}`}>
                    <span>16:00</span>
                </div>
            </motion.div>
        </div>
    )
}

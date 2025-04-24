import styles from './styles.module.css';
/* import { useLocation } from 'react-router-dom';
import data from '../../modal/friends.json';
import { useEffect, useState } from 'react';
import { TUser } from '../../../core/type'; */
import flower2 from '../../../assets/flower2.svg';
import flower3 from '../../../assets/flower3.svg';
import flower4 from '../../../assets/flower4.svg';
import flower5 from '../../../assets/flower5.svg';
import {motion} from 'framer-motion';
import { useAppSelector } from '../../../services/store';
import { getUser } from '../../../services/auth/slice';

export const Screen1 = () => {
    const user = useAppSelector(getUser);

    return (
        <div className={styles.wrap}>
            <div className={styles.friends}>
                <span>{user ? `${user.name.includes(' и ') ? 'Дорогие' : ''} ${user.name}!` : `Дорогой гость!`}</span>
                <span style={{marginTop: -14}}>Рады пригласить Вас на нашу свадьбу!</span>
            </div>
            <div className={styles.newlyweds}>
                <span className={styles.he}>Дмитрий</span>
                <span className={styles.and}>&</span>
                <span className={styles.she}>Мария</span>
            </div>
            <div className={styles.date}>
                <span>12 июня 2025 г.</span>
            </div>
            {/* <motion.img 
                className={`${styles.flower} ${styles.flower3}`} 
                src={flower3} 
                alt={'flower3'}
                animate={{
                    rotate: [40, 36, 44, 38, 42, 40],
                    transition: {
                        duration: 50,
                        ease: 'easeInOut',
                        repeat: Infinity,

                    }
                }}
            /> */}
            <img 
                className={`${styles.flower} ${styles.flower3}`} 
                src={flower3} 
                alt={'flower3'}
            />
            <img 
                className={`${styles.flower} ${styles.flower2}`} 
                src={flower2} 
                alt={'flower2'}
            />
            <motion.img 
                className={`${styles.flower} ${styles.flower4}`} 
                src={flower4} 
                alt={'flower4'}
                animate={{
                    rotate: [58, 54, 62, 56, 60, 58],
                    transition: {
                        duration: 50,
                        ease: 'easeInOut',
                        repeat: Infinity,

                    }
                }}
            />
            <motion.img 
                className={`${styles.flower} ${styles.flower5}`} 
                src={flower5} 
                alt={'flower5'}
                animate={{
                    rotate: [222, 218, 226, 220, 224, 222],
                    transition: {
                        duration: 50,
                        ease: 'easeInOut',
                        repeat: Infinity,

                    }
                }}
            />
        </div>
    )
}

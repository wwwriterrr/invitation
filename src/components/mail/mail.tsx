import { FC } from 'react';
import styles from './styles.module.css';
import { MailStatuses } from '.';
import { motion } from 'framer-motion';
import { MailOrnament } from './ornament';

export const MailList: FC<{status: MailStatuses}> = ({status}) => {
    return (
        <motion.div 
            className={styles.mail}
            animate={status}
            variants={{
                closed: {
                    translateY: 0,
                    scale: 1,
                    zIndex: 2,
                    backgroundColor: '#d9d9d9',
                    transition: {
                        duration: .2,
                        ease: 'easeIn',
                    }
                },
                open: {
                    translateY: '-170%',
                    scale: 1.3,
                    zIndex: 7,
                    backgroundColor: '#fff',
                    transition: {
                        duration: .3,
                        delay: .7,
                        ease: 'backOut',
                    }
                },
            }}
        >
            <MailOrnament size={50} fill={'#f9f2dd'} />
            <div className={styles.text}>Приглашение</div>
        </motion.div>
    )
}

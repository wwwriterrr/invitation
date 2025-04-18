import { Dispatch, FC, SetStateAction } from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import { MailStatuses } from '../mail';

export const ModalOverlay: FC<{delay?: number, setStatus: Dispatch<SetStateAction<MailStatuses>>}> = ({setStatus, delay=1.4}) => {
    const overlayClickHandler = () => {
        setStatus(MailStatuses.closed);
    }

    return (
        <motion.div 
            className={styles.overlay}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay,
                    duration: .5,
                    ease: 'easeOut',
                }
            }}
            onClick={overlayClickHandler}
        ></motion.div>
    )
}

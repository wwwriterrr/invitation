import { Dispatch, type FC, SetStateAction } from 'react';
import styles from './styles.module.css';
import { MailStatuses } from '../mail';
import { motion } from 'framer-motion';
import { Invitation } from './invitation';

type TProps = {
    status: MailStatuses,
    setStatus: Dispatch<SetStateAction<MailStatuses>>,
}

export const MailModal: FC<TProps> = ({status, setStatus}) => {
    const overlayClickHandler = () => {
        setStatus(MailStatuses.closed);
    }

    const delay: number = 1.4;

    return (
        <>
            {status === MailStatuses.open ? (
                <div className={styles.wrap}>
                    <motion.div 
                        className={styles.overlay}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay,
                                duration: 1,
                                ease: 'easeOut',
                            }
                        }}
                        onClick={overlayClickHandler}
                    ></motion.div>
                    <motion.div 
                        className={styles.window}
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                            transition: {
                                delay: delay + .3,
                                duration: .4,
                                ease: 'backInOut',
                            }
                        }}
                    >
                        <Invitation />
                    </motion.div>
                </div>
            ) : null}
        </>
    )
}

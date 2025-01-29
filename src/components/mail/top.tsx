import { FC } from 'react';
import styles from './styles.module.css';
import { MailStatuses } from '.';
import { motion } from 'framer-motion';

export const MailTop: FC<{status: MailStatuses}> = ({status}) => {
    return (
        <motion.div 
            className={styles.top}
            animate={status === MailStatuses.open ? 'open' : 'closed'}
            variants={{
                closed: {
                    rotateX: 0, 
                    zIndex: 6,
                    transition: {
                        default: {
                            duration: .3,
                            delay: .3,
                            ease: 'easeOut',
                        },
                        zIndex: {
                            delay: .3,
                            duration: 0
                        }
                    }
                },
                open: {
                    rotateX: 180, 
                    zIndex: 1,
                    transition: {
                        default: {
                            duration: .5,
                            ease: 'backIn',
                        },
                        zIndex: {
                            delay: .5,
                            duration: 0
                        }
                    }
                }
            }}
        ></motion.div>
    )
}

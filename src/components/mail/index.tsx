import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import { MailTop } from './top';
import { MailList } from './mail';

export enum MailStatuses {
    open = 'open',
    closed = 'closed',
}

type TProps = {
    status: MailStatuses,
    setStatus: Dispatch<SetStateAction<MailStatuses>>,
}

export const Mail: FC<TProps> = ({status, setStatus}) => {
    const [vibe, setVibe] = useState<boolean>(true);

    const clickHandler = () => {
        if(status === MailStatuses.open) setStatus(MailStatuses.closed);
        else setStatus(MailStatuses.open);
    }

    return (
        <motion.div 
            className={styles.wrap}
            whileHover={{scale: 1.04}}
            whileTap={{scale: 0.98}}
            onClick={clickHandler}
            animate={(status === MailStatuses.closed) && vibe ? ['closed', 'vibe'] : (status === MailStatuses.closed) && !vibe ? 'closed' : 'open'}
            variants={{
                closed: {
                    translateY: 0,
                    transition: {
                        duration: .2,
                        ease: 'easeIn',
                    }
                },
                open: {
                    translateY: '52%',
                    transition: {
                        delay: .7,
                        duration: .3,
                        ease: 'backOut',
                    }
                },
                vibe: {
                    x: [0, -4, 6, -6, 4, 0],
                    y: [0, 4, -6, -6, 4, 0],
                    transition: {
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: 1,
                        repeatDelay: 1,
                    }
                }
            }}
            onHoverStart={() => setVibe(false)}
            onHoverEnd={() => setVibe(true)}
        >
            <div className={styles.background}></div>
            <MailTop status={status} />
            <MailList status={status} />
            <div className={styles.right}></div>
            <div className={styles.left}></div>
        </motion.div>
    )
}
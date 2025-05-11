import photo from '../../../assets/photo2.jpeg';
import styles from './styles.module.css';
import flower4 from '../../../assets/flower4.svg';
import flower5 from '../../../assets/flower5.svg';
import {motion} from 'framer-motion';
import { DatesBlock } from './Dates';

export const Screen2 = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.photo}>
                <motion.div 
                    initial={{
                        opacity: 0,
                        scale: .4,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 1,
                            ease: 'easeOut',
                        }
                    }}
                    viewport={{ 
                        once: true, 
                    }}
                    className={styles.container}
                >
                    <img className={styles.image} src={photo} alt="" />
                    <motion.img 
                        className={`${styles.flower} ${styles.flower4}`} 
                        src={flower4} 
                        alt={'flower4'}
                        animate={{
                            x: [-102, -160, -102],
                            y: [-105, -131, -105],
                            scale: [.6, 1, .6],
                            rotate: [-58, -58, -58],
                            transition: {
                                duration: 30,
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
                            x: [200, 236, 200],
                            y: [41, 64, 41],
                            scale: [.6, 1, .6],
                            rotate: [131, 131, 131],
                            transition: {
                                duration: 30,
                                ease: 'easeInOut',
                                repeat: Infinity,

                            }
                        }}
                    />
                </motion.div>
            </div>
            <div className={styles.textWrap}>
                <h2 className={styles.textTitle}>Дорогие гости!</h2>
                <div className={styles.textContent}>
                    Совсем скоро в нашей жизни произойдет очень важное событие – наша свадьба! Мы верим и надеемся, что этот день станет красивым началом долгой и счастливой жизни.<br/><br/>
                    Позвольте пригласить вас разделить с нами радость этого дня. Подарите свою поддержку и добрые пожелания, а мы, в свою очередь, поделимся частичкой нашего счастья.
                </div>
            </div>
            <DatesBlock />
        </div>
    )
}

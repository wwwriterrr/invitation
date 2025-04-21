import { type FC } from 'react';
import styles from './styles.module.css';
import altrimoImg from '../../../assets/altrimo.jpg';
import {motion} from 'framer-motion';
import { GooMapsIcon, VkIcon, YaMapsIcon } from '../../icons';

export const Screen3: FC = () => {
    return (
        <div className={styles.wrap}>
            <motion.div 
                className={styles.backgr}
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    delay: .5,
                    duration: 1.5,
                    ease: 'easeOut',
                }}
            >
                <motion.h2 
                    className={styles.title}
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: .5,
                        duration: 1.5,
                        ease: 'easeOut',
                    }}
                >Место проведения</motion.h2>
            </motion.div>
            <div className={styles.left}>
                <div className={styles.content}>
                    Отель-ресторан <b>Альтримо</b>
                    <br/><br/>
                    Располагается в п. Рыбачий - самом сердце Национального парка «Куршская коса», занимая территорию старой немецкой гостиницы «Дюненблик». 
                </div>
                <ul className={styles.links}>
                    <li>
                        <a href={'https://yandex.ru/maps/?ll=20.750465%2C55.096851&mode=search&sll=20.750465%2C55.096695&source=serp_navig&text=%D0%B0%D0%BB%D1%8C%D1%82%D1%80%D0%B8%D0%BC%D0%BE&z=11'} target={'_blank'}>
                            <YaMapsIcon size={32} />
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.google.com/maps/place/%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+%D0%90%D0%BB%D1%8C%D1%82%D1%80%D0%B8%D0%BC%D0%BE/@55.1584305,20.8422589,14z/data=!4m6!3m5!1s0x46e49f87ff348429:0x9ecf9d9dc19b3652!8m2!3d55.1581809!4d20.8492856!16s%2Fg%2F11c2pg6d6k?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D'} target={'_blank'}>
                            <GooMapsIcon size={32} />
                        </a>
                    </li>
                    <li>
                        <a href={'https://vk.com/altrimokosa'} target={'_blank'}>
                            <VkIcon size={32} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                <img className={styles.photo} src={altrimoImg} alt={'Altrimo'} />
            </div>
        </div>
    )
}

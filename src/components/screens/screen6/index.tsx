import styles from './styles.module.css';
import flower from '../../../assets/flower1.svg';
import {motion} from 'framer-motion';

export const Screen6 = () => {
    const colors: string[] = [
        '#fff',
        '#555',
        '#666',
        '#777',
        '#000',
    ]

    return (
        <div className={styles.wrap}>
            <motion.img 
                className={styles.flower} 
                src={flower} 
                alt='' 
                animate={{
                    x: [-210, -60, -210],
                    y: [100, 8, 100],
                    scale: [.7, 1, .7],
                    rotate: [170, 170, 170],
                    transition: {
                        duration: 50,
                        ease: 'easeInOut',
                        repeat: Infinity,

                    }
                }}
            />
            <h2 className={styles.title}>
                Дресс-код
            </h2>
            <div className={styles.beforeText}>
                Представляем вашему вниманию<br/>цветовую палитру нашего мероприятия:
            </div>
            <div className={styles.colors}>
                {colors.map((item, i) => (
                    <div className={styles.color} key={`color-${i}`} style={{backgroundColor: item}}></div>
                ))}
            </div>
            <div className={styles.afterText}>
                Нам будет приятно, если вы поддержите стилистику нашей свадьбы. Строго придерживаться дресс-коду <b>не обязательно!</b>
            </div>
        </div>
    )
}

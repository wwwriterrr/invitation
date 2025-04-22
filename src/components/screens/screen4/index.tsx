import styles from './styles.module.css';
import {motion} from 'framer-motion';

type TItem = {
    time: string,
    title: string,
    content: string,
}

export const Screen4 = () => {
    const items: TItem[] = [
        {
            time: '15:00',
            title: 'Сбор гостей и фуршет',
            content: 'Время пролетит незаметно за общением с другими гостями. Кроме того, ожидание скрасит приветственный фуршет.',
        },
        {
            time: '16:00',
            title: 'Торжественная церемония',
            content: 'Пожалуй, самый трогательный момент этого дня. Нас ожидает торжественная и незабываемая церемония росписи, полная любви и искренности.',
        },
        {
            time: '17:00',
            title: 'Свадебный ужин',
            content: 'С официальной частью покончено, да начнется веселье! Готовьте удобные туфли и хорошее настроение, обещаем, что скучно не будет.',
        },
        {
            time: '21:00',
            title: 'Торт',
            content: 'Этот момент будет вкусным как никогда. Молодожены вместе разрежут свадебный торт, как символ их будущей сладкой жизни.',
        },
        {
            time: '21:30',
            title: 'Танцы',
            content: 'Это время для всех гостей, чтобы разогреться на танцполе. Под мелодии любимых песен молодые и гости будут весело проводить время.',
        },
        {
            time: '23:00',
            title: 'Завершение вечера',
            content: 'Время прощания, но никакого грустного настроения! Спасибо вам, дорогие гости, за ваше тепло, пожелания и счастье, которое вы приносите с собой.',
        },
    ]

    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Расписание дня</h2>
            <div className={styles.time}>
                {items.map((item, i) => (
                    <div className={`${styles.item} ${i === 0 ? styles.firstItem : ''}${i === items.length-1 ? styles.lastItem : ''}`} key={`item-${i}`}>
                        <div className={styles.dt}>{item.time}</div>
                        <div className={styles.line}>
                            <motion.div 
                                className={styles.dot}
                            ></motion.div>
                            <motion.div 
                                className={styles.hr}
                            ></motion.div>
                        </div>
                        <div className={styles.itemTitle}>{item.title}</div>
                        <div className={styles.itemContent}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

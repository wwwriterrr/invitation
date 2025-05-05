import { useEffect, useState } from 'react';
import styles from './styles.module.css';
// @ts-ignore
import pluralize from 'pluralize-ru';

export const PageTimer = () => {
    const [num, setNum] = useState<[number, number, number, number]>([14, 20, 20, 14]);
    const [labels, setLabels] = useState<[string, string, string, string]>(['дни', 'часы', 'минуты', 'секунды']);

    const getTimeRemaining = () => {
        const now = new Date();
        const d = new Date("2025/06/12 15:00:00");
        const total = Number(d) - Number(now);
        const days = Math.floor(total / (3600*24) / 1000);
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const setNums = () => {
        const {days, hours, minutes, seconds} = getTimeRemaining();

        setNum([days, hours, minutes, seconds]);
        setLabels([
            pluralize(days, 'дней', 'день', 'дня', 'дней'),
            pluralize(hours, 'часов', 'час', 'часа', 'часов'),
            pluralize(minutes, 'минут', 'минута', 'минуты', 'минут'),
            pluralize(seconds, 'секунд', 'секунда', 'секунды', 'секунд')
        ])
    }

    useEffect(() => {
        const i = setInterval(() => setNums(), 1000);

        return () => {
            clearInterval(i);
        }
    }, [])

    return (
        <div className={styles.wrap}>
            <div className={styles.title}>Обратный отсчет</div>
            <div className={styles.nums}>
                {num.map((item, i) => (
                    <div className={styles.item} data-value={item} data-label={labels[i]} key={`timer-${i}`}></div>
                ))}
            </div>
        </div>
    )
}

import styles from './styles.module.css';
import imgSrc from '../../../assets/love.jpg';

export const Screen5 = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Несколько пожеланий</h2>
            <div className={styles.content}>
                <div className={styles.row}>
                    <div className={styles.marker}>1</div>
                    <div className={styles.item}>От всего сердца просим вас воздержаться от криков "Горько!" и сохранить атмосферу уютного семейного таинства.</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.marker}>2</div>
                    <div className={styles.item}>Пожалуйста, не дарите нам живые цветы. Мы не успеем насладиться их красотой до отъезда в свадебное путешествие.</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.marker}>3</div>
                    <div className={styles.item}>Если хотите подарить ценный и нужный нам подарок - поместите его в конверт.</div>
                </div>
            </div>
            <div className={styles.imgWrap}>
                <img className={styles.img} src={imgSrc} alt='' />
            </div>
        </div>
    )
}

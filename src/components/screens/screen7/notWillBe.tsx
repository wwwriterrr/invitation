import styles from './notWillBe.module.css';

export const NotWillBe = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.text}>
                Нам очень жаль, что вы не сможете приехать.<br/>Если Вам не сложно, то мы будем рады видеопоздравлению (<a className={styles.link} href={'https://t.me/master_cat'}>Сюда</a>)!
            </div>
        </div>
    )
}

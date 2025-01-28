import styles from './App.module.css';
import { Mail } from './components';

export const App = () => {
    return (
        <div className={styles.page}>
            <Mail />
        </div>
    )
}

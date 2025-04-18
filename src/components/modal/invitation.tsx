import { Screen1 } from '../screens/screen1';
import { Screen2 } from '../screens/screen2';
import { Screen3 } from '../screens/screen3';
import styles from './invitation.module.css';

export const Invitation = () => {
    return (
        <div className={styles.wrap}>
            <Screen1 />
            <Screen2 />
            <Screen3 />
        </div>
    )
}

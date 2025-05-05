import { Screen0 } from '../screens/screen0';
import { Screen1 } from '../screens/screen1';
import { Screen2 } from '../screens/screen2';
import { Screen3 } from '../screens/screen3';
import { Screen4 } from '../screens/screen4';
import { Screen5 } from '../screens/screen5';
// import { Screen6 } from '../screens/screen6';
import { Screen7 } from '../screens/screen7';
import { Screen8 } from '../screens/screen8';
import styles from './invitation.module.css';

export const Invitation = () => {
    return (
        <div className={styles.wrap}>
            <Screen0 />
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen4 />
            <Screen5 />
            {/* <Screen6 /> */}
            <Screen7 />
            <Screen8 />
        </div>
    )
}

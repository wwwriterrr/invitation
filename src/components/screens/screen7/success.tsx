import { Dispatch, FC, SetStateAction } from 'react';
import styles from './success.module.css';
import { TFormData } from '.';
import { SuccessIcon } from '../../icons';

export const FormSuccess: FC<{data: TFormData, dataSetter: Dispatch<SetStateAction<TFormData>>}> = ({data, dataSetter}) => {
    const btnClickHandler = () => {
        dataSetter({...data, formSend: false});
    }

    return (
        <div className={styles.wrap}>
            <SuccessIcon size={140} fill={'#e6d5a1'} />
            <h2 className={styles.title}>Анкета отправлена!</h2>
            <div className={styles.text}>Благодарим Вас за предоставленную информацию!<br/>Вы можете повторно заполнить анкету, если у Вас что-то поменяется.</div>
            <button className={styles.repeatBtn} onClick={btnClickHandler}>Заполнить повторно</button>
        </div>
    )
}

import { useState } from 'react';
import { Mail, MailStatuses } from '../mail'
import { MailModal } from '../modal'
import styles from './styles.module.css'

export const Page = () => {
    const [status, setStatus] = useState<MailStatuses>(MailStatuses.closed);

    return (
        <div className={styles.page}>
            <Mail status={status} setStatus={setStatus} />
            <MailModal status={status} setStatus={setStatus} />
        </div>
    )
}

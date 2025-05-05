import { useEffect, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { useLocation } from 'react-router-dom';
import { fetchUser } from '../../services/auth/actions';
import { getUser, getUserLoading } from '../../services/auth/slice';
import styles from './styles.module.css';
import { LoaderIcon } from '../../components/icons';

export const AuthHOC: FC<{children: JSX.Element}> = ({children}) => {
    const dispatch = useAppDispatch();

    const user = useAppSelector(getUser);
    const loading = useAppSelector(getUserLoading);

    const location = useLocation();

    const search = new URLSearchParams(location.search);

    useEffect(() => {
        const token = search.get('token');

        if(token){
            dispatch(fetchUser({token}));
        }
    }, [])

    return (
        <>{loading ? (
            <div className={styles.loader}><LoaderIcon fill={'#fff'} size={42} /></div>
        ) : (
            <>
                {user ? children : (
                    <div className={styles.notFound}><span>404</span></div>
                )}
            </>
        )}</>
    )
}

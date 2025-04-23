import { useEffect, type FC } from 'react';
import { useAppDispatch } from '../../services/store';
import { useLocation } from 'react-router-dom';
import { fetchUser } from '../../services/auth/actions';

export const AuthHOC: FC<{children: JSX.Element}> = ({children}) => {
    const dispatch = useAppDispatch();

    const location = useLocation();

    const search = new URLSearchParams(location.search);

    useEffect(() => {
        const token = search.get('token');

        if(token){
            dispatch(fetchUser({token}));
        }
    }, [])

    return (
        <>{children}</>
    )
}

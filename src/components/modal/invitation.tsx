import { useLocation } from 'react-router-dom';
import data from './friends.json';

const Friends = new Map();

Object.keys(data).map(key => {
    const user: {name: string} = data[key];
    Friends.set(key, user);
})

export const Invitation = () => {
    const location = useLocation();
    const {hash} = location;

    const user = Friends.get(hash) || null;

    return (
        <div>{user ? user.name : 'empty'}</div>
    )
}

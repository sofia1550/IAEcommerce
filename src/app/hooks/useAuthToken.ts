// hooks/useAuthToken.ts
import { useEffect } from 'react';
import { checkAuthentication, logoutUser } from '../../redux/features/user/userSlice';
import { useAppDispatch } from '../../redux/hooks';

export const useAuthToken = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            localStorage.setItem('token', token);
            // Opcional: Limpia la URL después de establecer el token
            window.history.pushState({}, document.title, window.location.pathname);
            dispatch(checkAuthentication());
        }
    }, [dispatch]);

    const logout = () => {
        dispatch(logoutUser());
    };

    return { logout };
};

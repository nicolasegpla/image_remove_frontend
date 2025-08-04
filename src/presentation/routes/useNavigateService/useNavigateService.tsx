import { useNavigate } from 'react-router-dom';

export const useNavigateService = () => {
    const navigate = useNavigate();

    const navigateToModuloAdmin = () => {
        navigate('/modulo-admin');
    };
    const navigateToTransform = () => {
        navigate('/transform');
    };
    const navigateToLogin = () => {
        navigate('/login');
    };

    return { navigateToModuloAdmin, navigateToTransform, navigateToLogin };
};

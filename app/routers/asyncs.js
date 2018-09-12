import Loadable from 'react-loadable';
import Loading from '@components/Loading';

export const LoadableLoginPage = Loadable({
    loader: () => import('@containers/LoginPage'),
    loading: Loading,
});

export const LoadableWelcome = Loadable({
    loader: () => import('@containers/Welcome'),
    loading: Loading,
});

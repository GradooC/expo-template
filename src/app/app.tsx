import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from '~/shared/providers';

import { useAuth } from './lib';
import { Navigation } from './providers';
import { ReactQueryProvider } from './providers/react-query';

export default function Root() {
    const { user } = useAuth();

    return (
        <>
            <StatusBar style="dark" />
            <AuthProvider user={user}>
                <ReactQueryProvider>
                    <Navigation user={user} />
                </ReactQueryProvider>
            </AuthProvider>
        </>
    );
}

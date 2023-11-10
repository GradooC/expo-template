import { StatusBar } from 'expo-status-bar';

import { useAuth } from './lib';
import { Navigation } from './providers';
import { ReactQueryProvider } from './providers/react-query';

export default function Root() {
    const { isSignedIn } = useAuth();

    return (
        <>
            <StatusBar style="dark" />
            <ReactQueryProvider>
                <Navigation isSignedIn={isSignedIn} />
            </ReactQueryProvider>
        </>
    );
}

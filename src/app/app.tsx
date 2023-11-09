import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { router, Stack } from '~/pages';
import { firebaseAuth } from '~/shared/config';

export default function Root() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setIsSignedIn(Boolean(user));
        });

        return unsubscribe;
    });

    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator>{router(isSignedIn)}</Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

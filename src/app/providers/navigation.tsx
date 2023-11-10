import { NavigationContainer } from '@react-navigation/native';

import { Stack, router } from '~/pages';

type NavigationProps = {
    isSignedIn: boolean;
};

export function Navigation({ isSignedIn }: NavigationProps) {
    return (
        <NavigationContainer>
            <Stack.Navigator>{router(isSignedIn)}</Stack.Navigator>
        </NavigationContainer>
    );
}

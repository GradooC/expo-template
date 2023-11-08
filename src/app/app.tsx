import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { router, Stack } from '~/pages';

export default function Root() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator>{router()}</Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

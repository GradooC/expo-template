import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from './details';
import { Home } from './home';
import { SignIn } from './sign-in';
import { SignUp } from './sign-up/sign-up';
import { RootStackParamList } from './types';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export function router(isSignedIn: boolean) {
    return isSignedIn ? (
        <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </>
    ) : (
        <>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
        </>
    );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from './details';
import { Home } from './home';
import { Login } from './login';
import { RootStackParamList } from './types';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export function router(isSignedIn: boolean) {
    return isSignedIn ? (
        <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="Details"
                component={Details}
                initialParams={{ paramOne: 'initial', paramTwo: 3 }}
            />
        </>
    ) : (
        <>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
        </>
    );
}

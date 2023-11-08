import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from './details';
import { Home } from './home';
import { Login } from './login';
import { RootStackParamList } from './types';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export function router() {
    return (
        <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </>
    );
}

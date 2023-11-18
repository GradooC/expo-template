import { NavigationContainer } from '@react-navigation/native';
import { User } from 'firebase/auth';

import { Stack, router } from '~/pages';

type NavigationProps = {
    user: User | null;
};

export function Navigation({ user }: NavigationProps) {
    const isSigned = Boolean(user);

    return (
        <NavigationContainer>
            <Stack.Navigator>{router(isSigned)}</Stack.Navigator>
        </NavigationContainer>
    );
}

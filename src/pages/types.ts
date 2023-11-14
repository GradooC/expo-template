import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Friend } from '~/shared/models';

export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
    Details: Friend;
};

export type RootNativeStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

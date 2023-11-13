import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FriendList } from '~/shared/api';

export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
    Details: FriendList[number];
};

export type RootNativeStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

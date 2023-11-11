import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type DetailsParams = {
    paramOne: string;
    paramTwo: number;
};

export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
    Details: DetailsParams;
};

export type RootNativeStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

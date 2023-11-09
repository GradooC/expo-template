// TODO Remove after getReactNativePersistence's type declaration is added
declare module 'firebase/auth' {
    import { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
    import { Persistence } from '@firebase/auth';

    export * from '@firebase/auth';

    export declare function getReactNativePersistence(
        storage: AsyncStorageStatic,
    ): Persistence;
}

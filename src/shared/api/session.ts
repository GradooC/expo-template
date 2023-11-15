import { useMutation } from '@tanstack/react-query';
import {
    AuthError,
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { Alert } from 'react-native';

import { firebaseAuth } from '~/shared/config/firebase';

export function useSignInWithEmailAndPassword(email: string, password: string) {
    return useMutation<UserCredential, AuthError>({
        mutationFn: () =>
            signInWithEmailAndPassword(firebaseAuth, email, password),
        onError: (error) => Alert.alert('Something went wrong', error.message),
    });
}

export function useSignOut() {
    return useMutation<void, AuthError>({
        mutationFn: () => signOut(firebaseAuth),
        onError: (error) => Alert.alert('Something went wrong', error.message),
    });
}

export function useCreateUserWithEmailAndPassword(
    email: string,
    password: string,
) {
    return useMutation<UserCredential, AuthError>({
        mutationFn: () =>
            createUserWithEmailAndPassword(firebaseAuth, email, password),
        onError: (error) => Alert.alert('Something went wrong', error.message),
    });
}

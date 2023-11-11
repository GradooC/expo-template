import { useMutation } from '@tanstack/react-query';
import {
    AuthError,
    UserCredential,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { Alert } from 'react-native';

import { firebaseAuth } from '~/shared/config';

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

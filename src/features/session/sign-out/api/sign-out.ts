import { useMutation } from '@tanstack/react-query';
import { AuthError, signOut } from 'firebase/auth';
import { Alert } from 'react-native';

import { firebaseAuth } from '~/shared/config';

export function useSignOut() {
    return useMutation<void, AuthError>({
        mutationFn: () => signOut(firebaseAuth),
        onError: (error) => Alert.alert('Something went wrong', error.message),
    });
}

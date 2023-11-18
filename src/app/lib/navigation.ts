import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { firebaseAuth } from '~/shared/config';

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    });

    return { user };
}

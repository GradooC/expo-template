import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { firebaseAuth } from '~/shared/config';

export function useAuth() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setIsSignedIn(Boolean(user));
        });

        return unsubscribe;
    });

    return { isSignedIn };
}

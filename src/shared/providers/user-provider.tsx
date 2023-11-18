import { User } from 'firebase/auth';
import { PropsWithChildren, createContext, useContext } from 'react';

const AuthContext = createContext<User | null>(null);

export function AuthProvider({
    children,
    user,
}: PropsWithChildren<{ user: User | null }>) {
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    const user = useContext(AuthContext);

    if (!user) {
        throw new Error(
            'The useAuthContext hook should be used inside the AuthContext provider and only on signed in pages',
        );
    }

    return user;
}

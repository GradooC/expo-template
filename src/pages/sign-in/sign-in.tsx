import { useState } from 'react';
import {
    ActivityIndicator,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { useSignInWithEmailAndPassword } from '~/feature/session/sign-in';
import { useCreateUserWithEmailAndPassword } from '~/feature/session/sign-up';

export function SignIn() {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('111111');

    const { isPending: isLoginLoading, mutate: signIn } =
        useSignInWithEmailAndPassword(email, password);

    const { isPending: isSignUpLoading, mutate: signUp } =
        useCreateUserWithEmailAndPassword(email, password);

    function handleSignUp() {
        signUp();
    }

    function handleLogin() {
        signIn();
    }

    function handleEmailChange(text: string) {
        setEmail(text);
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
    }

    const signInButton = isLoginLoading ? (
        <ActivityIndicator size="large" />
    ) : (
        <Button title="Login" onPress={handleLogin} />
    );

    const signUpButton = isSignUpLoading ? (
        <ActivityIndicator size="large" />
    ) : (
        <Button title="Sign up" color="black" onPress={handleSignUp} />
    );

    return (
        <View style={styles.root}>
            <Text>Login Page</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleEmailChange}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={handlePasswordChange}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
            />
            {signInButton}
            {signUpButton}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        width: '80%',
    },
});

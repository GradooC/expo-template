import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { firebaseAuth } from '~/shared/config';

export function SignIn() {
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [isSignUpLoading, setIsSignUpLoading] = useState(false);
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('111111');

    async function handleLogin() {
        setIsLoginLoading(true);
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            Alert.alert('Something went wrong', (error as any).message);
        } finally {
            setIsLoginLoading(false);
        }
    }

    async function handleSignUp() {
        setIsSignUpLoading(true);
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            Alert.alert('Something went wrong', (error as any).message);
        } finally {
            setIsSignUpLoading(false);
        }
    }

    function handleEmailChange(text: string) {
        setEmail(text);
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
    }

    const login = isLoginLoading ? (
        <ActivityIndicator size="large" />
    ) : (
        <Button title="Login" onPress={handleLogin} />
    );

    const signUp = isSignUpLoading ? (
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
            {login}
            {signUp}
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

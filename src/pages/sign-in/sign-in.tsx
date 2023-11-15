import { Link } from '@react-navigation/native';
import { useState } from 'react';
import {
    ActivityIndicator,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { useSignInWithEmailAndPassword } from '~/shared/api';

export function SignIn() {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('111111');

    const { isPending, mutate } = useSignInWithEmailAndPassword(
        email,
        password,
    );

    function handleLogin() {
        mutate();
    }

    function handleEmailChange(text: string) {
        setEmail(text);
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
    }

    const signInButton = isPending ? (
        <ActivityIndicator size="large" />
    ) : (
        <Button title="Sign In" onPress={handleLogin} />
    );

    return (
        <View style={styles.root}>
            <Text>Sign In Page</Text>
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
            <Text>
                Don't have an account?&nbsp;
                <Link to="/SignUp" style={styles.link}>
                    Sign Up
                </Link>
            </Text>
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
    link: {
        color: 'orange',
        fontWeight: 'bold',
    },
});

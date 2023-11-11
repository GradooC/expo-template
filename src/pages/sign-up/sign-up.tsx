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

import { useCreateUserWithEmailAndPassword } from '~/features/session';

export function SignUp() {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('111111');

    const { isPending, mutate } = useCreateUserWithEmailAndPassword(
        email,
        password,
    );

    function handleSignUp() {
        mutate();
    }

    function handleEmailChange(text: string) {
        setEmail(text);
    }

    function handlePasswordChange(text: string) {
        setPassword(text);
    }

    const signUpButton = isPending ? (
        <ActivityIndicator size="large" />
    ) : (
        <Button title="Sign up" color="orange" onPress={handleSignUp} />
    );

    return (
        <View style={styles.root}>
            <Text>Sign Up Page</Text>
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
            {signUpButton}
            <Text>
                Already have an account?&nbsp;
                <Link to="/SignIn" style={styles.link}>
                    Sign In
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
        color: 'cornflowerblue',
        fontWeight: 'bold',
    },
});

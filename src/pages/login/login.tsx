import { Button, StyleSheet, Text, View } from 'react-native';

import { RootNativeStackScreenProps } from '../types';

export function Login({ navigation }: RootNativeStackScreenProps<'Login'>) {
    function handlePress() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.root}>
            <Text>Login Page</Text>
            <Button title="Login" onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

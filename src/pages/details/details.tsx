import { Button, StyleSheet, Text, View } from 'react-native';

import { RootNativeStackScreenProps } from '../types';

import { useSignOut } from '~/features/session';

export function Details({ route }: RootNativeStackScreenProps<'Details'>) {
    const { paramOne, paramTwo } = route.params;
    const { mutate } = useSignOut();

    function handleLogOut() {
        mutate();
    }

    return (
        <View style={styles.root}>
            <Text>Details Page</Text>
            <Text>First param: {paramOne}</Text>
            <Text>Second param: {paramTwo}</Text>
            <Button title="Log out" onPress={handleLogOut} />
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
});

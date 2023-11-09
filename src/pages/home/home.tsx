import { Button, StyleSheet, Text, View } from 'react-native';

import { RootNativeStackScreenProps } from '../types';

export function Home({ navigation }: RootNativeStackScreenProps<'Home'>) {
    function handlePress() {
        navigation.navigate('Details', { paramOne: 'one', paramTwo: 2 });
    }

    return (
        <View style={styles.root}>
            <Text>Home Page</Text>
            <Button title="Go To Details" onPress={handlePress} />
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

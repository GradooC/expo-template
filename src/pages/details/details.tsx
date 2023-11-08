import { StyleSheet, Text, View } from 'react-native';

import { RootNativeStackScreenProps } from '../types';

export function Details({
    navigation,
    route,
}: RootNativeStackScreenProps<'Details'>) {
    const { paramOne, paramTwo } = route.params;

    return (
        <View style={styles.root}>
            <Text>Details Page</Text>
            <Text>First param: {paramOne}</Text>
            <Text>Second param: {paramTwo}</Text>
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

import { Image, StyleSheet, Text, View } from 'react-native';

import { EditFriend } from '~/features/edit-friend';

import { RootNativeStackScreenProps } from '../types';

export function Details({ route }: RootNativeStackScreenProps<'Details'>) {
    const { firstName, lastName, photo } = route.params;

    return (
        <View style={styles.root}>
            <View style={styles.photoBlock}>
                <View style={styles.photoWrapper}>
                    <Image style={styles.photo} source={{ uri: photo }} />
                </View>
            </View>
            <View style={styles.bioBlock}>
                <Text style={styles.firstName}>{firstName}</Text>
                <Text style={styles.lastName}>{lastName}</Text>
                <EditFriend item={route.params} />
            </View>
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
    photoBlock: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
    },
    photoWrapper: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        borderRadius: 9999,
    },
    photo: {
        width: 200,
        height: 200,
    },
    bioBlock: {
        flex: 3,
        alignItems: 'center',
    },
    firstName: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'gray',
    },
    lastName: {
        fontSize: 38,
        color: 'gray',
    },
});

import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Friend } from '~/shared/models';

type FriendCardProps = {
    item: Friend;
};

export function FriendCard({ item }: FriendCardProps) {
    const { id, firstName, lastName, photo } = item;

    const navigation = useNavigation();

    function handlePickFriend(item: Friend) {
        navigation.navigate('Details', item);
    }

    return (
        <Pressable
            key={id}
            style={styles.friend}
            onPress={() => handlePickFriend(item)}
        >
            <View style={styles.avatarWrapper}>
                <Image source={{ uri: photo }} style={styles.avatar} />
            </View>
            <View style={styles.bio}>
                <Text style={styles.firstName}>{firstName}</Text>
                <Text>{lastName}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    friend: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'cornflowerblue',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    avatar: {
        width: 50,
        height: 50,
    },
    avatarWrapper: {
        padding: 10,
        backgroundColor: 'white',
        marginRight: 15,
        borderRadius: 9999,
    },
    bio: {
        display: 'flex',
        gap: 5,
    },
    firstName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

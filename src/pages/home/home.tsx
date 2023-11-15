import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { FriendCard } from '~/entities/friend';
import { AddFriend } from '~/features/add-friend';
import { useFriendList, useSignOut } from '~/shared/api';

import { RootNativeStackScreenProps } from '../types';

export function Home({ navigation }: RootNativeStackScreenProps<'Home'>) {
    const { data } = useFriendList();
    const { mutate } = useSignOut();

    function handleLogOut() {
        mutate();
    }

    return (
        <View style={styles.root}>
            <AddFriend />
            <FlatList
                contentContainerStyle={styles.container}
                style={styles.list}
                data={data}
                renderItem={({ item }) => <FriendCard item={item} />}
            />
            <Button title="Sign Out" onPress={handleLogOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        gap: 15,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    container: {
        gap: 20,
    },
});

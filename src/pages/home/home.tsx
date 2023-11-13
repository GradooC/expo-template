import {
    Button,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useSignOut } from '~/features/session';
import { FriendList, useFriendList } from '~/shared/api';

import { RootNativeStackScreenProps } from '../types';

export function Home({ navigation }: RootNativeStackScreenProps<'Home'>) {
    const { data } = useFriendList();
    const { mutate } = useSignOut();

    function handleLogOut() {
        mutate();
    }

    function handlePickFriend(item: FriendList[number]) {
        navigation.navigate('Details', item);
    }

    return (
        <View style={styles.root}>
            <Text>Home Page</Text>
            <FlatList
                contentContainerStyle={styles.container}
                style={styles.list}
                data={data}
                renderItem={({ item }) => (
                    <Pressable
                        key={item.id}
                        style={styles.friend}
                        onPress={() => handlePickFriend(item)}
                    >
                        <View style={styles.avatarWrapper}>
                            <Image
                                source={{ uri: item.photo }}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={styles.bio}>
                            <Text style={styles.firstName}>
                                {item.firstName}
                            </Text>
                            <Text>{item.lastName}</Text>
                        </View>
                    </Pressable>
                )}
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

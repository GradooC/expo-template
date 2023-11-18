import {
    ActivityIndicator,
    Alert,
    Button,
    FlatList,
    StyleSheet,
    View,
} from 'react-native';

// import { useAuthContext } from '~/app/app';
import { FriendCard } from '~/entities/friend';
import { AddFriend } from '~/features/add-friend';
import { useFriendList, useSignOut } from '~/shared/api';

import { RootNativeStackScreenProps } from '../types';

function FullPageLoader({ children, isVisible }: any) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            {isVisible ? <ActivityIndicator size="large" /> : <>{children}</>}
        </View>
    );
}

export function Home({ navigation }: RootNativeStackScreenProps<'Home'>) {
    const { data, error, isError, isLoading } = useFriendList();
    // const user = useAuthContext();
    const { mutate } = useSignOut();
    // console.log('\x1b[44m Home isPending \x1b[0m', isPending);
    // console.log('\x1b[45m Home user \x1b[0m', user);

    function handleLogOut() {
        mutate();
    }

    if (isError) {
        Alert.alert('Error', error.message);
    }

    return (
        <View style={styles.root}>
            <AddFriend />
            <FullPageLoader isVisible={isLoading}>
                <FlatList
                    contentContainerStyle={styles.container}
                    style={styles.list}
                    data={data}
                    renderItem={({ item }) => <FriendCard item={item} />}
                />
            </FullPageLoader>
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

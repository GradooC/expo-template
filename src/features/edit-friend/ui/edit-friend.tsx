import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
    ActivityIndicator,
    Button,
    Modal,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

import { FriendList, useUpdateFriend } from '~/shared/api';

type EditFriendProps = { item: FriendList[number] };

export function EditFriend({ item }: EditFriendProps) {
    const { firstName, lastName, photo, id } = item;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentFirstName, setCurrentFirstName] = useState(firstName);
    const [currentLastName, setCurrentLastName] = useState(lastName);

    const { mutate, isPending } = useUpdateFriend();
    const navigation = useNavigation();

    function handleCloseModal() {
        setIsModalVisible(false);
    }

    function handleOpenModal() {
        setIsModalVisible(true);
    }

    function handleFirstNameChange(text: string) {
        setCurrentFirstName(text);
    }

    function handleLastNameChange(text: string) {
        setCurrentLastName(text);
    }

    function handleUpdate() {
        const newData = {
            firstName: currentFirstName,
            lastName: currentLastName,
            photo,
            id,
        };

        mutate(newData, {
            onSuccess: () => {
                setIsModalVisible(false);
                navigation.setParams(newData);
            },
        });
    }

    const doneButton = isPending ? (
        <ActivityIndicator size="large" />
    ) : (
        <Button title="Done" color="yellowgreen" onPress={handleUpdate} />
    );

    return (
        <>
            <Button title="Edit" color="skyblue" onPress={handleOpenModal} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
            >
                <View style={styles.modalContent}>
                    <TextInput
                        value={currentFirstName}
                        onChangeText={handleFirstNameChange}
                        style={styles.input}
                    />
                    <TextInput
                        value={currentLastName}
                        onChangeText={handleLastNameChange}
                        style={styles.input}
                    />
                    {doneButton}
                    <Button
                        title="Close"
                        color="salmon"
                        onPress={handleCloseModal}
                    />
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modal: {},
    modalContent: {
        width: '100%',
        height: '45%',
        position: 'absolute',
        bottom: 0,
        gap: 15,
        padding: 20,
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    input: {
        borderColor: 'skyblue',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
    },
});

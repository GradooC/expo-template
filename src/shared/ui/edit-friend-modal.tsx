import { useState } from 'react';
import {
    ActivityIndicator,
    Button,
    Modal,
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

export type EditFriendModalProps = {
    firstName?: string;
    lastName?: string;
    isPending: boolean;
    isVisible: boolean;
    onDone: (arg: { editedFirstName: string; editedLastName: string }) => void;
    onClose: () => void;
};

export function EditFriendModal({
    isPending,
    isVisible,
    onDone,
    onClose,
    firstName,
    lastName,
}: EditFriendModalProps) {
    const [currentFirstName, setCurrentFirstName] = useState(firstName || '');
    const [currentLastName, setCurrentLastName] = useState(lastName || '');

    function handleClose() {
        onClose();
    }

    function handleDone() {
        onDone({
            editedFirstName: currentFirstName,
            editedLastName: currentLastName,
        });
    }

    function handleFirstNameChange(text: string) {
        setCurrentFirstName(text);
    }

    function handleLastNameChange(text: string) {
        setCurrentLastName(text);
    }

    const doneButton = isPending ? (
        <ActivityIndicator size="large" />
    ) : (
        <Button title="Done" color="yellowgreen" onPress={handleDone} />
    );

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
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
                <Button title="Close" color="salmon" onPress={handleClose} />
            </View>
        </Modal>
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

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button } from 'react-native';

import { useUpdateFriend } from '~/shared/api';
import { Friend } from '~/shared/models';
import {
    EditFriendModal,
    EditFriendModalProps,
} from '~/shared/ui/edit-friend-modal';

type EditFriendProps = { item: Friend };

export function EditFriend({ item }: EditFriendProps) {
    const { firstName, lastName, photo, id } = item;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const { mutate, isPending } = useUpdateFriend();
    const navigation = useNavigation();

    function handleCloseModal() {
        setIsModalVisible(false);
    }

    function handleOpenModal() {
        setIsModalVisible(true);
    }

    const handleUpdate: EditFriendModalProps['onDone'] = ({
        editedFirstName,
        editedLastName,
    }) => {
        const newData = {
            firstName: editedFirstName,
            lastName: editedLastName,
            photo,
            id,
        };

        mutate(newData, {
            onSuccess: () => {
                setIsModalVisible(false);
                navigation.setParams(newData);
            },
        });
    };

    return (
        <>
            <Button title="Edit" color="skyblue" onPress={handleOpenModal} />
            <EditFriendModal
                firstName={firstName}
                lastName={lastName}
                isPending={isPending}
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                onDone={handleUpdate}
            />
        </>
    );
}

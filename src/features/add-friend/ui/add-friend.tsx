import { useState } from 'react';
import { Button } from 'react-native';

import { useAddFriend } from '~/shared/api';
import { getAvatar } from '~/shared/lib';
import {
    EditFriendModal,
    EditFriendModalProps,
} from '~/shared/ui/edit-friend-modal';

export function AddFriend() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { mutate, isPending } = useAddFriend();

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
        const friendInfo = {
            firstName: editedFirstName,
            lastName: editedLastName,
            photo: getAvatar(editedFirstName),
        };
        mutate(friendInfo, {
            onSuccess: () => {
                setIsModalVisible(false);
            },
        });
    };

    return (
        <>
            <Button title="Add" color="yellowgreen" onPress={handleOpenModal} />
            <EditFriendModal
                isPending={isPending}
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                onDone={handleUpdate}
            />
        </>
    );
}

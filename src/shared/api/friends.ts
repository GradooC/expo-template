import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getDocs, FirestoreError, setDoc, getDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

import { friendsCollection, getFriendDoc } from '../config/firestore';

export type FriendList = Awaited<ReturnType<typeof getFriends>>;

async function getFriends() {
    const friendSnapshot = await getDocs(friendsCollection);
    return friendSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export function useFriendList() {
    return useQuery<FriendList, FirestoreError>({
        queryKey: ['friends'],
        queryFn: () => getFriends(),
    });
}

export function useGetFriendById(id: string) {
    return useQuery({
        queryKey: ['friends', id],
        queryFn: () => {
            const docRef = getFriendDoc(id);
            return getDoc(docRef);
        },
    });
}

export function useUpdateFriend() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            id,
            firstName,
            lastName,
            photo,
        }: FriendList[number]) => {
            const docRef = getFriendDoc(id);
            return setDoc(
                docRef,
                { firstName, lastName, photo },
                { merge: true },
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['friends'] });
        },
        onError: (error) => Alert.alert('Something went wrong', error.message),
    });
}

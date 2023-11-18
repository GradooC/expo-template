import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    getDocs,
    setDoc,
    deleteDoc,
    addDoc,
    doc,
    collection,
    CollectionReference,
} from 'firebase/firestore';
import { Alert } from 'react-native';

import { db } from '../config';
import { Friend } from '../models';
import { useAuthContext } from '../providers';

type FriendsColRef = CollectionReference<Omit<Friend, 'id'>>;

export function useFriendList() {
    const user = useAuthContext();

    return useQuery({
        queryKey: ['friends'],
        queryFn: async () => {
            const friendsColRef = collection(
                db,
                'users',
                user.uid,
                'friends',
            ) as FriendsColRef;
            const friendsSnap = await getDocs(friendsColRef);
            return friendsSnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        },
    });
}

export function useDeleteFriend() {
    const queryClient = useQueryClient();
    const user = useAuthContext();

    return useMutation({
        mutationFn: async (id: string) => {
            const friendDocRef = doc(db, 'users', user.uid, 'friends', id);
            return await deleteDoc(friendDocRef);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['friends'] });
        },
    });
}

export function useAddFriend() {
    const queryClient = useQueryClient();
    const user = useAuthContext();

    return useMutation({
        mutationFn: async (friendInfo: Omit<Friend, 'id'>) => {
            const friendsColRef = collection(db, 'users', user.uid, 'friends');
            return await addDoc(friendsColRef, friendInfo);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['friends'] });
        },
        onError: (error) => Alert.alert('Something went wrong', error.message),
    });
}

export function useUpdateFriend() {
    const queryClient = useQueryClient();
    const user = useAuthContext();

    return useMutation({
        mutationFn: async ({ id, firstName, lastName, photo }: Friend) => {
            const friendDocRef = doc(db, 'users', user.uid, 'friends', id);
            return setDoc(friendDocRef, { firstName, lastName, photo });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['friends'] });
        },
        onError: (error) => Alert.alert('Something went wrong', error.message),
    });
}

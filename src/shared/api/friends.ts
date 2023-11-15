import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getDocs, setDoc, getDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

import { Friend, friendsCollection, getFriendDoc } from '../models';

export function useFriendList() {
    return useQuery({
        queryKey: ['friends'],
        queryFn: async () => {
            const friendSnapshot = await getDocs(friendsCollection);
            return friendSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        },
    });
}

export function useGetFriendById(id: string) {
    return useQuery({
        queryKey: ['friends', id],
        queryFn: async () => {
            const docRef = getFriendDoc(id);
            const docSnap = await getDoc(docRef);
            return { id: docSnap.id, ...docSnap.data() };
        },
    });
}

export function useDeleteFriend() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            const docRef = getFriendDoc(id);
            return await deleteDoc(docRef);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['friends'] });
        },
    });
}

export function useAddFriend() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (friendInfo: Omit<Friend, 'id'>) => {
            return await addDoc(friendsCollection, friendInfo);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['friends'] });
        },
    });
}

export function useUpdateFriend() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, firstName, lastName, photo }: Friend) => {
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

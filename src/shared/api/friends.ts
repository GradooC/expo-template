import { useQuery } from '@tanstack/react-query';
import { getDocs, FirestoreError } from 'firebase/firestore';

import { friendsCollection } from '../config/firestore';

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

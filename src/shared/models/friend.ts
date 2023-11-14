import { db } from '../config';
import {
    CollectionName,
    createCollection,
    createDocument,
} from '../config/firestore';

export type Friend = {
    id: string;
    firstName: string;
    lastName: string;
    photo: string;
};

export const friendsCollection = createCollection<Omit<Friend, 'id'>>(
    db,
    CollectionName.FRIENDS,
);

export function getFriendDoc(id: string) {
    return createDocument<Omit<Friend, 'id'>>(db, CollectionName.FRIENDS, id);
}

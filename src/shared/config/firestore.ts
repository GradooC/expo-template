import {
    CollectionReference,
    DocumentData,
    DocumentReference,
    DocumentSnapshot,
    Firestore,
    collection,
    doc,
} from 'firebase/firestore';

import { db } from './firebase';

type Friend = {
    firstName: string;
    lastName: string;
    photo: string;
};

enum CollectionName {
    FRIENDS = 'friends',
}

const createCollection = <T extends DocumentData = DocumentData>(
    db: Firestore,
    collectionName: string,
) => {
    return collection(db, collectionName) as CollectionReference<T>;
};

const createDocument = <T extends DocumentData = DocumentData>(
    db: Firestore,
    collectionName: string,
    id: string,
) => {
    return doc(db, collectionName, id) as DocumentReference<T>;
};

export type FriendDocSnap = DocumentSnapshot<Friend, DocumentData>;

export const friendsCollection = createCollection<Friend>(
    db,
    CollectionName.FRIENDS,
);

export function getFriendDoc(id: string) {
    return createDocument<Friend>(db, CollectionName.FRIENDS, id);
}

import {
    CollectionReference,
    DocumentData,
    Firestore,
    collection,
} from 'firebase/firestore';

import { db } from './firebase';

const createCollection = <T extends DocumentData = DocumentData>(
    db: Firestore,
    collectionName: string,
) => {
    return collection(db, collectionName) as CollectionReference<T>;
};

type Friend = {
    firstName: string;
    lastName: string;
    photo: string;
};

export const friendsCollection = createCollection<Friend>(db, 'friends');

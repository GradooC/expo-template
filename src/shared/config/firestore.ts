import {
    CollectionReference,
    DocumentData,
    DocumentReference,
    Firestore,
    collection,
    doc,
} from 'firebase/firestore';

export enum CollectionName {
    FRIENDS = 'friends',
}

export const createCollection = <T extends DocumentData = DocumentData>(
    db: Firestore,
    collectionName: string,
) => {
    return collection(db, collectionName) as CollectionReference<T>;
};

export const createDocument = <T extends DocumentData = DocumentData>(
    db: Firestore,
    collectionName: string,
    id: string,
) => {
    return doc(db, collectionName, id) as DocumentReference<T>;
};

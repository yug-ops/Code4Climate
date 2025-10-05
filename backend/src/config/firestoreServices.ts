import { db } from './firebase';
import {
  DocumentData,
  QuerySnapshot,
  WriteResult,
  Firestore,
} from 'firebase-admin/firestore';

type CollectionName = string;
type DocumentID = string;
type DataPayload = Record<string, any>;

const getCollection = (collection: CollectionName) => db.collection(collection);

/**
 * Create a new document in the specified collection.
 */
export const createDocument = async (
  collection: CollectionName,
  data: DataPayload
): Promise<DocumentID> => {
  const docRef = await getCollection(collection).add(data);
  return docRef.id;
};

/**
 * Read a document by ID from the specified collection.
 */
export const readDocument = async (
  collection: CollectionName,
  docId: DocumentID
): Promise<DocumentData | null> => {
  const doc = await getCollection(collection).doc(docId).get();
  return doc.exists ? (doc.data() as DocumentData) : null;
};

/**
 * Update a document by ID in the specified collection.
 */
export const updateDocument = async (
  collection: CollectionName,
  docId: DocumentID,
  data: Partial<DataPayload>
): Promise<WriteResult> => {
  return await getCollection(collection).doc(docId).update(data);
};

/**
 * Delete a document by ID from the specified collection.
 */
export const deleteDocument = async (
  collection: CollectionName,
  docId: DocumentID
): Promise<WriteResult> => {
  return await getCollection(collection).doc(docId).delete();
};

/**
 * List all documents in the specified collection.
 */
export const listDocuments = async (
  collection: CollectionName
): Promise<QuerySnapshot<DocumentData>> => {
  return await getCollection(collection).get();
};
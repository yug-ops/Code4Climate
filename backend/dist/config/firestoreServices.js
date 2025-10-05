import { db } from './firebase';
const getCollection = (collection) => db.collection(collection);
/**
 * Create a new document in the specified collection.
 */
export const createDocument = async (collection, data) => {
    const docRef = await getCollection(collection).add(data);
    return docRef.id;
};
/**
 * Read a document by ID from the specified collection.
 */
export const readDocument = async (collection, docId) => {
    const doc = await getCollection(collection).doc(docId).get();
    return doc.exists ? doc.data() : null;
};
/**
 * Update a document by ID in the specified collection.
 */
export const updateDocument = async (collection, docId, data) => {
    return await getCollection(collection).doc(docId).update(data);
};
/**
 * Delete a document by ID from the specified collection.
 */
export const deleteDocument = async (collection, docId) => {
    return await getCollection(collection).doc(docId).delete();
};
/**
 * List all documents in the specified collection.
 */
export const listDocuments = async (collection) => {
    return await getCollection(collection).get();
};
//# sourceMappingURL=firestoreServices.js.map
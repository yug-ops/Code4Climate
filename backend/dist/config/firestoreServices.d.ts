import { DocumentData, QuerySnapshot, WriteResult } from 'firebase-admin/firestore';
type CollectionName = string;
type DocumentID = string;
type DataPayload = Record<string, any>;
/**
 * Create a new document in the specified collection.
 */
export declare const createDocument: (collection: CollectionName, data: DataPayload) => Promise<DocumentID>;
/**
 * Read a document by ID from the specified collection.
 */
export declare const readDocument: (collection: CollectionName, docId: DocumentID) => Promise<DocumentData | null>;
/**
 * Update a document by ID in the specified collection.
 */
export declare const updateDocument: (collection: CollectionName, docId: DocumentID, data: Partial<DataPayload>) => Promise<WriteResult>;
/**
 * Delete a document by ID from the specified collection.
 */
export declare const deleteDocument: (collection: CollectionName, docId: DocumentID) => Promise<WriteResult>;
/**
 * List all documents in the specified collection.
 */
export declare const listDocuments: (collection: CollectionName) => Promise<QuerySnapshot<DocumentData>>;
export {};
//# sourceMappingURL=firestoreServices.d.ts.map
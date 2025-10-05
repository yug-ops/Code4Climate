import { createDocument, readDocument, updateDocument, deleteDocument, listDocuments, } from '../config/firestoreServices';
const SITE = 'project04'; // 🔒 constant identifier for site context
/**
 * Create a new user document scoped to SITE.
 */
export const createUser = async (user) => {
    const userWithSite = { ...user, site: SITE };
    return await createDocument('users', userWithSite);
};
/**
 * Read a user document by ID, filtered by SITE.
 */
export const getUser = async (userId) => {
    const user = await readDocument('users', userId);
    return user?.site === SITE ? { id: userId, ...user } : null;
};
/**
 * Update a user document by ID, scoped to SITE.
 */
export const updateUser = async (userId, updates) => {
    await updateDocument('users', userId, { ...updates, site: SITE });
};
/**
 * Delete a user document by ID.
 */
export const deleteUser = async (userId) => {
    await deleteDocument('users', userId);
};
/**
 * List all users scoped to SITE.
 */
export const listUsers = async () => {
    const snapshot = await listDocuments('users');
    return snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(user => user.site === SITE);
};
//# sourceMappingURL=Userservices.js.map
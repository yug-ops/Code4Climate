import {
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
  listDocuments,
} from '../config/firestoreServices';

const SITE = 'project04'; // 🔒 constant identifier for site context

export interface User {
  id?: string;
  name: string;
  role: string;
  password: string;
  site: string;
}

/**
 * Create a new user document scoped to SITE.
 */
export const createUser = async (
  user: Omit<User, 'id' | 'site'>
): Promise<string> => {
  const userWithSite: User = { ...user, site: SITE };
  return await createDocument('users', userWithSite);
};

/**
 * Read a user document by ID, filtered by SITE.
 */
export const getUser = async (userId: string): Promise<User | null> => {
  const user = await readDocument('users', userId);
  return user?.site === SITE ? { id: userId, ...user } as User : null;
};

/**
 * Update a user document by ID, scoped to SITE.
 */
export const updateUser = async (
  userId: string,
  updates: Partial<Omit<User, 'id' | 'site'>>
): Promise<void> => {
  await updateDocument('users', userId, { ...updates, site: SITE });
};

/**
 * Delete a user document by ID.
 */
export const deleteUser = async (userId: string): Promise<void> => {
  await deleteDocument('users', userId);
};

/**
 * List all users scoped to SITE.
 */
export const listUsers = async (): Promise<User[]> => {
  const snapshot = await listDocuments('users');
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() } as User))
    .filter(user => user.site === SITE);
};
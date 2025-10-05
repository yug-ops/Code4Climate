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
export declare const createUser: (user: Omit<User, "id" | "site">) => Promise<string>;
/**
 * Read a user document by ID, filtered by SITE.
 */
export declare const getUser: (userId: string) => Promise<User | null>;
/**
 * Update a user document by ID, scoped to SITE.
 */
export declare const updateUser: (userId: string, updates: Partial<Omit<User, "id" | "site">>) => Promise<void>;
/**
 * Delete a user document by ID.
 */
export declare const deleteUser: (userId: string) => Promise<void>;
/**
 * List all users scoped to SITE.
 */
export declare const listUsers: () => Promise<User[]>;
//# sourceMappingURL=Userservices.d.ts.map
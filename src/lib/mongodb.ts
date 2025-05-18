
// This is a browser-compatible mock of MongoDB functionality
// For production, this would be replaced with actual API calls to a backend service

// Collection types for type safety
export const COLLECTIONS = {
  CLOTHING_ITEMS: "clothing_items",
  OUTFITS: "outfits",
  USER_PROFILES: "user_profiles"
};

// Get current user email to use as part of storage key
const getCurrentUserEmail = (): string => {
  try {
    const currentUserData = localStorage.getItem("chromatique-user");
    if (currentUserData) {
      const userData = JSON.parse(currentUserData);
      return userData.email || "";
    }
  } catch (error) {
    console.error("Error getting current user:", error);
  }
  return "";
};

// Generate collection key with user context
const getCollectionKey = (collection: string): string => {
  const userEmail = getCurrentUserEmail();
  return userEmail ? `chromatique_${collection}_${userEmail}` : `chromatique_${collection}`;
};

// Mock database using localStorage with per-user isolation
const getCollection = (collection: string): any[] => {
  try {
    const collectionKey = getCollectionKey(collection);
    const data = localStorage.getItem(collectionKey);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error retrieving ${collection} from localStorage:`, error);
    return [];
  }
};

const saveCollection = (collection: string, data: any[]): void => {
  try {
    const collectionKey = getCollectionKey(collection);
    localStorage.setItem(collectionKey, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${collection} to localStorage:`, error);
  }
};

// Mock MongoDB functions with localStorage implementation
export async function findAll(collection: string) {
  return getCollection(collection);
}

export async function findById(collection: string, id: string) {
  const items = getCollection(collection);
  return items.find(item => item.id === id) || null;
}

export async function insert(collection: string, document: any) {
  const items = getCollection(collection);
  items.push(document);
  saveCollection(collection, items);
  return { acknowledged: true, insertedId: document.id };
}

export async function insertMany(collection: string, documents: any[]) {
  const items = getCollection(collection);
  const updatedItems = [...items, ...documents];
  saveCollection(collection, updatedItems);
  return { acknowledged: true, insertedCount: documents.length };
}

export async function updateOne(collection: string, id: string, update: any) {
  const items = getCollection(collection);
  const index = items.findIndex(item => item.id === id);
  
  if (index !== -1) {
    items[index] = { ...items[index], ...update };
    saveCollection(collection, items);
    return { acknowledged: true, modifiedCount: 1 };
  }
  
  return { acknowledged: true, modifiedCount: 0 };
}

export async function deleteOne(collection: string, id: string) {
  const items = getCollection(collection);
  const filteredItems = items.filter(item => item.id !== id);
  
  if (filteredItems.length < items.length) {
    saveCollection(collection, filteredItems);
    return { acknowledged: true, deletedCount: 1 };
  }
  
  return { acknowledged: true, deletedCount: 0 };
}

// No-op functions that would be relevant in a real MongoDB setup
export async function connectToMongoDB() {
  console.log("Using browser localStorage storage (MongoDB mock)");
  return null;
}

export async function getDB() {
  return null;
}

export async function closeConnection() {
  return null;
}

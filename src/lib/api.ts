
import { SkinTone, Undertone, EyeColor, Season, HairColor } from "./types";
import { categories, clothingItems, seasons, subscriptionPlans } from "./data";

// This is a mock API service that simulates backend calls
// In a real app, you would replace these functions with actual API calls

export const getCategories = () => {
  return Promise.resolve(categories);
};

export const getClothingItemsByCategory = (categoryId: string, season?: Season) => {
  const filteredItems = clothingItems.filter(
    (item) => 
      item.styleCategories.includes(categoryId) && 
      (!season || item.seasons.includes(season))
  );
  return Promise.resolve(filteredItems);
};

export const getClothingItemById = (id: string) => {
  const item = clothingItems.find((item) => item.id === id);
  return Promise.resolve(item || null);
};

export const getSavedItems = (userProvidedItems?: string[]) => {
  // In a real app, this would fetch from user's saved items
  // For now, just return a subset of clothing items
  const savedItemIds = userProvidedItems || ["item-1", "item-3", "item-6", "item-9"];
  return Promise.resolve(
    clothingItems.filter((item) => savedItemIds.includes(item.id))
  );
};

export const getSeasonInfo = (seasonId: Season) => {
  return Promise.resolve(seasons[seasonId]);
};

export const determineColorSeason = (
  skinTone: SkinTone,
  undertone: Undertone,
  eyeColor: EyeColor,
  hairColor?: HairColor
): Promise<Season> => {
  // This is a simplified algorithm for determining color season
  // A real implementation would be more nuanced
  
  if (undertone === "warm") {
    if (["dark", "medium-dark", "very-dark"].includes(skinTone)) {
      return Promise.resolve("deep-autumn");
    } else if (["fair", "very-fair"].includes(skinTone)) {
      return Promise.resolve("light-spring");
    } else if (["medium", "medium-light"].includes(skinTone)) {
      return Promise.resolve("warm-autumn");
    } else {
      return Promise.resolve("warm-spring");
    }
  } else if (undertone === "cool") {
    if (["dark", "medium-dark", "very-dark"].includes(skinTone)) {
      return Promise.resolve("deep-winter");
    } else if (["fair", "very-fair"].includes(skinTone)) {
      return Promise.resolve("light-summer");
    } else if (["medium", "medium-light"].includes(skinTone)) {
      return Promise.resolve("cool-summer");
    } else {
      return Promise.resolve("cool-winter");
    }
  } else if (undertone === "neutral") {
    if (["dark", "medium-dark", "very-dark"].includes(skinTone)) {
      return Promise.resolve("deep-winter");
    } else if (["fair", "very-fair"].includes(skinTone)) {
      return Promise.resolve("light-spring");
    } else {
      return Promise.resolve("soft-summer");
    }
  } else {
    // Olive undertone
    if (["dark", "medium-dark", "very-dark"].includes(skinTone)) {
      return Promise.resolve("deep-autumn");
    } else if (["fair", "very-fair"].includes(skinTone)) {
      return Promise.resolve("soft-autumn");
    } else {
      return Promise.resolve("soft-autumn");
    }
  }
};

export const getSubscriptionPlans = () => {
  return Promise.resolve(subscriptionPlans);
};

export const getCurrentSubscription = () => {
  // In a real app, this would get the user's current subscription from the backend
  return Promise.resolve({
    planId: "free",
    status: "active",
    expiresAt: new Date().setMonth(new Date().getMonth() + 1),
  });
};

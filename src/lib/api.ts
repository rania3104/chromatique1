import {
  SkinTone,
  Undertone,
  EyeColor,
  Season,
  HairColor,
} from "./types";
import {
  categories,
  clothingItems,
  seasons,
  subscriptionPlans,
} from "./data";

// === CATEGORY API ===
export const getCategories = () => {
  return Promise.resolve(categories);
};

// === CLOTHING ITEM API ===
export const getClothingItemsByCategory = (
  categoryId: string,
  season?: Season
) => {
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
  const savedItemIds = userProvidedItems || [
    "item-1",
    "item-3",
    "item-6",
    "item-9",
  ];
  return Promise.resolve(
    clothingItems.filter((item) => savedItemIds.includes(item.id))
  );
};

// === SEASON API ===
export const getSeasonInfo = (seasonId: Season) => {
  const season = seasons[seasonId];
  if (!season) {
    console.warn(`No season data found for ID: ${seasonId}`);
    return Promise.resolve(null);
  }
  return Promise.resolve(season);
};

// === COLOR ANALYSIS ===
export const determineColorSeason = (
  skinTone: SkinTone,
  undertone: Undertone,
  eyeColor: EyeColor,
  hairColor?: HairColor
): Promise<Season> => {
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

// === SUBSCRIPTION API ===
export const getSubscriptionPlans = () => {
  return Promise.resolve(subscriptionPlans);
};

export const getCurrentSubscription = () => {
  return Promise.resolve({
    planId: "free",
    status: "active",
    expiresAt: new Date().setMonth(new Date().getMonth() + 1),
  });
};
export type { SkinTone, Undertone, EyeColor };
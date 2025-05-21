
export type SkinTone = 
  | "very-fair"
  | "fair"
  | "medium-light"
  | "medium"
  | "medium-dark"
  | "dark"
  | "very-dark";

export type Undertone = "warm" | "cool" | "neutral" | "olive";

export type EyeColor = 
  | "blue"
  | "green"
  | "hazel"
  | "light-brown"
  | "medium-brown"
  | "dark-brown"
  | "gray"
  | "amber";

export type HairColor = 
  | "black"
  | "dark-brown"
  | "medium-brown"
  | "light-brown"
  | "dark-blonde"
  | "medium-blonde"
  | "light-blonde"
  | "red"
  | "auburn"
  | "gray"
  | "white";

export type Season = 
  | "warm-autumn"
  | "deep-autumn"
  | "soft-autumn"
  | "warm-spring"
  | "light-spring"
  | "clear-spring"
  | "cool-summer"
  | "light-summer"
  | "soft-summer"
  | "cool-winter"
  | "deep-winter"
  | "clear-winter";

export type UserProfile = {
  id: string;
  skinTone: SkinTone;
  undertone: Undertone;
  eyeColor: EyeColor;
  hairColor?: HairColor;
  season?: Season;
};

export type Category = {
  id: string;
  name: string;
  image: string;
  styles: string[];
};

export type ClothingItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  colors: string[];
  keywords: string[];
  category: string;
  styleCategories: string[];
  seasons: Season[];
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: {
    name: string;
    included: boolean;
  }[];
  isPopular?: boolean;
};

export type ClothingItemType = 
  | "tops" 
  | "bottoms" 
  | "dresses" 
  | "accessories" 
  | "outerwear" 
  | "jewelry";

export type UserClothingItem = {
  id: string;
  name: string;
  description: string;
  type: ClothingItemType;
  tags: string[];
  image_url: string; // not `image`
  user_id: string;
  created_at: string;
};


export type Outfit = {
  id: string;
  name: string;
  items: UserClothingItem[];
  created_at: string;
  userId?: string;
};

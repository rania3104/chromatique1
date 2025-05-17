
import { Category, ClothingItem, Season, SubscriptionPlan } from "./types";

export const skinTones = [
  { value: "very-fair", label: "Very Fair", color: "#F8E8D4" },
  { value: "fair", label: "Fair", color: "#F4D2BE" },
  { value: "medium-light", label: "Medium Light", color: "#E8C2A9" },
  { value: "medium", label: "Medium", color: "#D7A47F" },
  { value: "medium-dark", label: "Medium Dark", color: "#B67B65" },
  { value: "dark", label: "Dark", color: "#86543C" },
  { value: "very-dark", label: "Very Dark", color: "#5D321E" },
];

export const undertones = [
  { value: "warm", label: "Warm", description: "Yellow or golden undertones" },
  { value: "cool", label: "Cool", description: "Pink, red or bluish undertones" },
  { value: "neutral", label: "Neutral", description: "Balanced undertones" },
  { value: "olive", label: "Olive", description: "Greenish or grayish undertones" },
];

export const eyeColors = [
  { value: "blue", label: "Blue", color: "#5B92E5" },
  { value: "green", label: "Green", color: "#50B86C" },
  { value: "hazel", label: "Hazel", color: "#C19A6B" },
  { value: "light-brown", label: "Light Brown", color: "#A87D5F" },
  { value: "medium-brown", label: "Medium Brown", color: "#8E5E3A" },
  { value: "dark-brown", label: "Dark Brown", color: "#634832" },
  { value: "gray", label: "Gray", color: "#A5A9B0" },
  { value: "amber", label: "Amber", color: "#D8A760" },
];

export const hairColors = [
  { value: "black", label: "Black", color: "#252525" },
  { value: "dark-brown", label: "Dark Brown", color: "#4D3530" },
  { value: "medium-brown", label: "Medium Brown", color: "#7D5C46" },
  { value: "light-brown", label: "Light Brown", color: "#A88A6C" },
  { value: "dark-blonde", label: "Dark Blonde", color: "#B59E7B" },
  { value: "medium-blonde", label: "Medium Blonde", color: "#D4B387" },
  { value: "light-blonde", label: "Light Blonde", color: "#E9D1A8" },
  { value: "red", label: "Red", color: "#A53A24" },
  { value: "auburn", label: "Auburn", color: "#8D482B" },
  { value: "gray", label: "Gray", color: "#A4A4A4" },
  { value: "white", label: "White", color: "#E8E8E8" },
];

export const seasons: Record<Season, {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  characteristics: string[];
  bestColors: { color: string; name: string; hexCode: string }[];
  avoidColors: { color: string; name: string; hexCode: string }[];
}> = {
  "warm-autumn": {
    name: "Warm Autumn",
    description: "Rich, warm, and earthy colors that reflect the golden hues of autumn leaves.",
    colors: {
      primary: "#A85C32",
      secondary: "#D8A760",
      accent: "#5B7F42",
    },
    characteristics: ["Warm", "Muted", "Deep", "Earthy", "Golden"],
    bestColors: [
      { color: "#A85C32", name: "Terracotta", hexCode: "#A85C32" },
      { color: "#D8A760", name: "Gold", hexCode: "#D8A760" },
      { color: "#5B7F42", name: "Olive", hexCode: "#5B7F42" },
      { color: "#8F3C2A", name: "Rust", hexCode: "#8F3C2A" },
      { color: "#BB6C3E", name: "Amber", hexCode: "#BB6C3E" },
      { color: "#AE7848", name: "Camel", hexCode: "#AE7848" },
    ],
    avoidColors: [
      { color: "#FF80AB", name: "Hot Pink", hexCode: "#FF80AB" },
      { color: "#42A5F5", name: "Sky Blue", hexCode: "#42A5F5" },
      { color: "#E040FB", name: "Magenta", hexCode: "#E040FB" },
      { color: "#212121", name: "Black", hexCode: "#212121" },
      { color: "#BDBDBD", name: "Gray", hexCode: "#BDBDBD" },
      { color: "#F5F5F5", name: "White", hexCode: "#F5F5F5" },
    ],
  },
  "deep-autumn": {
    name: "Deep Autumn",
    description: "Rich, deep, and warm colors with a touch of contrast for dramatic effect.",
    colors: {
      primary: "#6D3324",
      secondary: "#B26836",
      accent: "#274C2B",
    },
    characteristics: ["Deep", "Warm", "Rich", "Contrasting", "Intense"],
    bestColors: [
      { color: "#6D3324", name: "Burgundy", hexCode: "#6D3324" },
      { color: "#B26836", name: "Copper", hexCode: "#B26836" },
      { color: "#274C2B", name: "Forest Green", hexCode: "#274C2B" },
      { color: "#753F2D", name: "Mahogany", hexCode: "#753F2D" },
      { color: "#513530", name: "Coffee", hexCode: "#513530" },
      { color: "#914100", name: "Cinnamon", hexCode: "#914100" },
    ],
    avoidColors: [
      { color: "#FFECB3", name: "Pastel Yellow", hexCode: "#FFECB3" },
      { color: "#B3E5FC", name: "Pastel Blue", hexCode: "#B3E5FC" },
      { color: "#F8BBD0", name: "Pastel Pink", hexCode: "#F8BBD0" },
      { color: "#FFE0B2", name: "Pastel Orange", hexCode: "#FFE0B2" },
      { color: "#F5F5F5", name: "White", hexCode: "#F5F5F5" },
      { color: "#E0E0E0", name: "Light Gray", hexCode: "#E0E0E0" },
    ],
  },
  "soft-autumn": {
    name: "Soft Autumn",
    description: "Muted, soft, and warm colors that create a gentle, understated look.",
    colors: {
      primary: "#A17E56",
      secondary: "#8D9F78",
      accent: "#96706A",
    },
    characteristics: ["Soft", "Muted", "Warm", "Gentle", "Understated"],
    bestColors: [
      { color: "#A17E56", name: "Soft Gold", hexCode: "#A17E56" },
      { color: "#8D9F78", name: "Sage", hexCode: "#8D9F78" },
      { color: "#96706A", name: "Rosewood", hexCode: "#96706A" },
      { color: "#B7986A", name: "Camel", hexCode: "#B7986A" },
      { color: "#B5A996", name: "Taupe", hexCode: "#B5A996" },
      { color: "#A88A6C", name: "Warm Beige", hexCode: "#A88A6C" },
    ],
    avoidColors: [
      { color: "#F44336", name: "Bright Red", hexCode: "#F44336" },
      { color: "#2196F3", name: "Bright Blue", hexCode: "#2196F3" },
      { color: "#F48FB1", name: "Bright Pink", hexCode: "#F48FB1" },
      { color: "#212121", name: "Black", hexCode: "#212121" },
      { color: "#FFFFFF", name: "Pure White", hexCode: "#FFFFFF" },
      { color: "#673AB7", name: "Bright Purple", hexCode: "#673AB7" },
    ],
  },
  "warm-spring": {
    name: "Warm Spring",
    description: "Warm, bright, and clear colors that reflect the golden sunshine of spring.",
    colors: {
      primary: "#FF9E2C",
      secondary: "#FFD54F",
      accent: "#7CB342",
    },
    characteristics: ["Warm", "Bright", "Golden", "Fresh", "Vibrant"],
    bestColors: [
      { color: "#FF9E2C", name: "Golden Orange", hexCode: "#FF9E2C" },
      { color: "#FFD54F", name: "Warm Yellow", hexCode: "#FFD54F" },
      { color: "#7CB342", name: "Apple Green", hexCode: "#7CB342" },
      { color: "#FFA726", name: "Warm Peach", hexCode: "#FFA726" },
      { color: "#FFB74D", name: "Golden Yellow", hexCode: "#FFB74D" },
      { color: "#FF8A65", name: "Coral", hexCode: "#FF8A65" },
    ],
    avoidColors: [
      { color: "#9C27B0", name: "Purple", hexCode: "#9C27B0" },
      { color: "#0D47A1", name: "Navy Blue", hexCode: "#0D47A1" },
      { color: "#212121", name: "Black", hexCode: "#212121" },
      { color: "#607D8B", name: "Cool Gray", hexCode: "#607D8B" },
      { color: "#F06292", name: "Cool Pink", hexCode: "#F06292" },
      { color: "#4DD0E1", name: "Turquoise", hexCode: "#4DD0E1" },
    ],
  },
  "light-spring": {
    name: "Light Spring",
    description: "Light, warm, and clear colors that create a fresh and delicate look.",
    colors: {
      primary: "#FFD54F",
      secondary: "#AED581",
      accent: "#FFB74D",
    },
    characteristics: ["Light", "Fresh", "Warm", "Delicate", "Clear"],
    bestColors: [
      { color: "#FFD54F", name: "Buttercup", hexCode: "#FFD54F" },
      { color: "#AED581", name: "Light Green", hexCode: "#AED581" },
      { color: "#FFB74D", name: "Peach", hexCode: "#FFB74D" },
      { color: "#F8BBD0", name: "Light Pink", hexCode: "#F8BBD0" },
      { color: "#FFF9C4", name: "Light Yellow", hexCode: "#FFF9C4" },
      { color: "#B3E5FC", name: "Light Blue", hexCode: "#B3E5FC" },
    ],
    avoidColors: [
      { color: "#212121", name: "Black", hexCode: "#212121" },
      { color: "#3F51B5", name: "Indigo", hexCode: "#3F51B5" },
      { color: "#7B1FA2", name: "Purple", hexCode: "#7B1FA2" },
      { color: "#5D4037", name: "Dark Brown", hexCode: "#5D4037" },
      { color: "#37474F", name: "Charcoal", hexCode: "#37474F" },
      { color: "#C2185B", name: "Magenta", hexCode: "#C2185B" },
    ],
  },
  "clear-spring": {
    name: "Clear Spring",
    description: "Clear, bright, and warm colors with a touch of contrast for vibrancy.",
    colors: {
      primary: "#FF5722",
      secondary: "#FFEB3B",
      accent: "#4CAF50",
    },
    characteristics: ["Clear", "Bright", "Warm", "Contrasting", "Vibrant"],
    bestColors: [
      { color: "#FF5722", name: "Coral", hexCode: "#FF5722" },
      { color: "#FFEB3B", name: "Lemon", hexCode: "#FFEB3B" },
      { color: "#4CAF50", name: "Kelly Green", hexCode: "#4CAF50" },
      { color: "#FF3D00", name: "Bright Red", hexCode: "#FF3D00" },
      { color: "#FFEA00", name: "Bright Yellow", hexCode: "#FFEA00" },
      { color: "#00B8D4", name: "Turquoise", hexCode: "#00B8D4" },
    ],
    avoidColors: [
      { color: "#795548", name: "Brown", hexCode: "#795548" },
      { color: "#607D8B", name: "Gray", hexCode: "#607D8B" },
      { color: "#5D4037", name: "Dark Brown", hexCode: "#5D4037" },
      { color: "#B0BEC5", name: "Muted Blue", hexCode: "#B0BEC5" },
      { color: "#A1887F", name: "Muted Brown", hexCode: "#A1887F" },
      { color: "#90A4AE", name: "Muted Teal", hexCode: "#90A4AE" },
    ],
  },
  "cool-summer": {
    name: "Cool Summer",
    description: "Cool, soft, and muted colors that create a gentle, understated look.",
    colors: {
      primary: "#7986CB",
      secondary: "#B39DDB",
      accent: "#80DEEA",
    },
    characteristics: ["Cool", "Soft", "Muted", "Gentle", "Understated"],
    bestColors: [
      { color: "#7986CB", name: "Periwinkle", hexCode: "#7986CB" },
      { color: "#B39DDB", name: "Lavender", hexCode: "#B39DDB" },
      { color: "#80DEEA", name: "Powder Blue", hexCode: "#80DEEA" },
      { color: "#9FA8DA", name: "Soft Blue", hexCode: "#9FA8DA" },
      { color: "#F48FB1", name: "Soft Pink", hexCode: "#F48FB1" },
      { color: "#A5D6A7", name: "Soft Green", hexCode: "#A5D6A7" },
    ],
    avoidColors: [
      { color: "#FF5722", name: "Orange", hexCode: "#FF5722" },
      { color: "#FFC107", name: "Amber", hexCode: "#FFC107" },
      { color: "#FF3D00", name: "Bright Red", hexCode: "#FF3D00" },
      { color: "#212121", name: "Black", hexCode: "#212121" },
      { color: "#3E2723", name: "Dark Brown", hexCode: "#3E2723" },
      { color: "#827717", name: "Olive", hexCode: "#827717" },
    ],
  },
  "light-summer": {
    name: "Light Summer",
    description: "Light, cool, and soft colors that create an airy and delicate appearance.",
    colors: {
      primary: "#B3E5FC",
      secondary: "#F8BBD0",
      accent: "#C5E1A5",
    },
    characteristics: ["Light", "Cool", "Soft", "Delicate", "Airy"],
    bestColors: [
      { color: "#B3E5FC", name: "Light Blue", hexCode: "#B3E5FC" },
      { color: "#F8BBD0", name: "Light Pink", hexCode: "#F8BBD0" },
      { color: "#C5E1A5", name: "Light Green", hexCode: "#C5E1A5" },
      { color: "#CFD8DC", name: "Light Gray", hexCode: "#CFD8DC" },
      { color: "#D1C4E9", name: "Light Lavender", hexCode: "#D1C4E9" },
      { color: "#BBDEFB", name: "Sky Blue", hexCode: "#BBDEFB" },
    ],
    avoidColors: [
      { color: "#FF5722", name: "Orange", hexCode: "#FF5722" },
      { color: "#F57F17", name: "Dark Yellow", hexCode: "#F57F17" },
      { color: "#212121", name: "Black", hexCode: "#212121" },
      { color: "#5D4037", name: "Dark Brown", hexCode: "#5D4037" },
      { color: "#880E4F", name: "Dark Pink", hexCode: "#880E4F" },
      { color: "#4A148C", name: "Dark Purple", hexCode: "#4A148C" },
    ],
  },
  "soft-summer": {
    name: "Soft Summer",
    description: "Soft, muted, and cool colors that create a gentle and sophisticated look.",
    colors: {
      primary: "#90A4AE",
      secondary: "#B0BEC5",
      accent: "#A1887F",
    },
    characteristics: ["Soft", "Muted", "Cool", "Subtle", "Sophisticated"],
    bestColors: [
      { color: "#90A4AE", name: "Blue Gray", hexCode: "#90A4AE" },
      { color: "#B0BEC5", name: "Silver Gray", hexCode: "#B0BEC5" },
      { color: "#A1887F", name: "Taupe", hexCode: "#A1887F" },
      { color: "#80CBC4", name: "Dusty Teal", hexCode: "#80CBC4" },
      { color: "#BCAAA4", name: "Dusty Rose", hexCode: "#BCAAA4" },
      { color: "#9E9E9E", name: "Medium Gray", hexCode: "#9E9E9E" },
    ],
    avoidColors: [
      { color: "#FF5722", name: "Orange", hexCode: "#FF5722" },
      { color: "#FFC107", name: "Yellow", hexCode: "#FFC107" },
      { color: "#FF3D00", name: "Bright Red", hexCode: "#FF3D00" },
      { color: "#E65100", name: "Burnt Orange", hexCode: "#E65100" },
      { color: "#FFEB3B", name: "Bright Yellow", hexCode: "#FFEB3B" },
      { color: "#FF6F00", name: "Amber", hexCode: "#FF6F00" },
    ],
  },
  "cool-winter": {
    name: "Cool Winter",
    description: "Cool, clear, and bright colors with blue undertones for a striking look.",
    colors: {
      primary: "#1976D2",
      secondary: "#EC407A",
      accent: "#4DD0E1",
    },
    characteristics: ["Cool", "Clear", "Bright", "Contrasting", "Icy"],
    bestColors: [
      { color: "#1976D2", name: "Royal Blue", hexCode: "#1976D2" },
      { color: "#EC407A", name: "Pink", hexCode: "#EC407A" },
      { color: "#4DD0E1", name: "Turquoise", hexCode: "#4DD0E1" },
      { color: "#2196F3", name: "Blue", hexCode: "#2196F3" },
      { color: "#F06292", name: "Hot Pink", hexCode: "#F06292" },
      { color: "#F5F5F5", name: "White", hexCode: "#F5F5F5" },
    ],
    avoidColors: [
      { color: "#FF9800", name: "Orange", hexCode: "#FF9800" },
      { color: "#FFC107", name: "Yellow", hexCode: "#FFC107" },
      { color: "#FF5722", name: "Coral", hexCode: "#FF5722" },
      { color: "#A1887F", name: "Taupe", hexCode: "#A1887F" },
      { color: "#8D6E63", name: "Medium Brown", hexCode: "#8D6E63" },
      { color: "#FFB74D", name: "Peach", hexCode: "#FFB74D" },
    ],
  },
  "deep-winter": {
    name: "Deep Winter",
    description: "Deep, cool, and clear colors with high contrast for a dramatic effect.",
    colors: {
      primary: "#0D47A1",
      secondary: "#880E4F",
      accent: "#006064",
    },
    characteristics: ["Deep", "Cool", "Clear", "Contrasting", "Dramatic"],
    bestColors: [
      { color: "#0D47A1", name: "Navy", hexCode: "#0D47A1" },
      { color: "#880E4F", name: "Burgundy", hexCode: "#880E4F" },
      { color: "#006064", name: "Teal", hexCode: "#006064" },
      { color: "#212121", name: "Black", hexCode: "#212121" },
      { color: "#4A148C", name: "Purple", hexCode: "#4A148C" },
      { color: "#1B5E20", name: "Forest Green", hexCode: "#1B5E20" },
    ],
    avoidColors: [
      { color: "#FFF9C4", name: "Light Yellow", hexCode: "#FFF9C4" },
      { color: "#FFE0B2", name: "Peach", hexCode: "#FFE0B2" },
      { color: "#F8BBD0", name: "Light Pink", hexCode: "#F8BBD0" },
      { color: "#D7CCC8", name: "Light Taupe", hexCode: "#D7CCC8" },
      { color: "#CFD8DC", name: "Light Gray", hexCode: "#CFD8DC" },
      { color: "#FFD54F", name: "Light Gold", hexCode: "#FFD54F" },
    ],
  },
  "clear-winter": {
    name: "Clear Winter",
    description: "Clear, bright, and cool colors with high contrast for a vibrant look.",
    colors: {
      primary: "#E91E63",
      secondary: "#2196F3",
      accent: "#00BCD4",
    },
    characteristics: ["Clear", "Bright", "Cool", "Contrasting", "Vibrant"],
    bestColors: [
      { color: "#E91E63", name: "Magenta", hexCode: "#E91E63" },
      { color: "#2196F3", name: "Bright Blue", hexCode: "#2196F3" },
      { color: "#00BCD4", name: "Cyan", hexCode: "#00BCD4" },
      { color: "#F44336", name: "Red", hexCode: "#F44336" },
      { color: "#9C27B0", name: "Purple", hexCode: "#9C27B0" },
      { color: "#3F51B5", name: "Indigo", hexCode: "#3F51B5" },
    ],
    avoidColors: [
      { color: "#A1887F", name: "Taupe", hexCode: "#A1887F" },
      { color: "#8D6E63", name: "Medium Brown", hexCode: "#8D6E63" },
      { color: "#795548", name: "Brown", hexCode: "#795548" },
      { color: "#9E9E9E", name: "Gray", hexCode: "#9E9E9E" },
      { color: "#FF9800", name: "Orange", hexCode: "#FF9800" },
      { color: "#FFC107", name: "Yellow", hexCode: "#FFC107" },
    ],
  },
};

export const categories: Category[] = [
  {
    id: "modest",
    name: "Modest",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    styles: ["modest"]
  },
  {
    id: "formal",
    name: "Formal",
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    styles: ["formal"]
  },
  {
    id: "casual",
    name: "Casual",
    image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    styles: ["casual"]
  },
  {
    id: "party",
    name: "Party",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    styles: ["party"]
  },
  {
    id: "ethnic",
    name: "Ethnic",
    image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    styles: ["ethnic"]
  },
  {
    id: "activewear",
    name: "Activewear",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    styles: ["activewear"]
  },
  {
    id: "streetwear",
    name: "Streetwear",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    styles: ["streetwear"]
  }
];

// We'll populate this array with sample clothing items in a real app
export const clothingItems: ClothingItem[] = [
  {
    id: "item-1",
    name: "Classic White Button-Down",
    description: "A timeless white button-down shirt made from crisp cotton with a relaxed fit.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#FFFFFF"],
    keywords: ["button-down", "white shirt", "classic", "cotton", "professional"],
    category: "tops",
    styleCategories: ["formal", "modest", "casual"],
    seasons: ["cool-winter", "clear-winter", "light-summer", "cool-summer"]
  },
  {
    id: "item-2",
    name: "Navy Blazer",
    description: "A structured navy blazer that adds polish to any outfit.",
    image: "https://images.unsplash.com/photo-1592878904946-b3f8f4d41d63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#0D47A1"],
    keywords: ["blazer", "navy", "formal", "structured", "professional"],
    category: "outerwear",
    styleCategories: ["formal", "modest"],
    seasons: ["cool-winter", "deep-winter", "clear-winter"]
  },
  {
    id: "item-3",
    name: "Burgundy Sweater",
    description: "A soft burgundy sweater perfect for layering.",
    image: "https://images.unsplash.com/photo-1516762689871-a05f6d7630c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#880E4F"],
    keywords: ["sweater", "burgundy", "knitwear", "layering", "winter"],
    category: "tops",
    styleCategories: ["casual", "modest"],
    seasons: ["deep-winter", "deep-autumn"]
  },
  {
    id: "item-4",
    name: "Sage Green Midi Dress",
    description: "A flowing sage green midi dress with delicate details.",
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#8D9F78"],
    keywords: ["dress", "midi", "sage", "green", "flowing", "feminine"],
    category: "dresses",
    styleCategories: ["casual", "modest", "formal"],
    seasons: ["soft-autumn", "soft-summer"]
  },
  {
    id: "item-5",
    name: "Coral Blouse",
    description: "A vibrant coral blouse that brightens your complexion.",
    image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#FF5722"],
    keywords: ["blouse", "coral", "vibrant", "summer", "lightweight"],
    category: "tops",
    styleCategories: ["casual", "party"],
    seasons: ["clear-spring", "warm-spring"]
  },
  {
    id: "item-6",
    name: "Gold Statement Earrings",
    description: "Bold, sculptural gold earrings that add drama to any look.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94c8e8ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#FFD54F"],
    keywords: ["earrings", "gold", "statement", "jewelry", "accessories"],
    category: "accessories",
    styleCategories: ["party", "formal", "ethnic"],
    seasons: ["warm-autumn", "warm-spring", "light-spring"]
  },
  {
    id: "item-7",
    name: "Black Slim-Fit Trousers",
    description: "Classic black slim-fit trousers suitable for formal occasions.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#212121"],
    keywords: ["trousers", "pants", "black", "slim-fit", "formal"],
    category: "bottoms",
    styleCategories: ["formal", "modest"],
    seasons: ["cool-winter", "deep-winter", "clear-winter"]
  },
  {
    id: "item-8",
    name: "Light Blue Denim Jacket",
    description: "A versatile light blue denim jacket for casual layering.",
    image: "https://images.unsplash.com/photo-1527628173875-3c7daf3ae812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#B3E5FC"],
    keywords: ["denim", "jacket", "light blue", "casual", "layering"],
    category: "outerwear",
    styleCategories: ["casual", "streetwear"],
    seasons: ["light-summer", "light-spring"]
  },
  {
    id: "item-9",
    name: "Emerald Green Evening Gown",
    description: "A stunning emerald green evening gown with subtle shimmer.",
    image: "https://images.unsplash.com/photo-1591916692290-5eb5482883f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#004D40"],
    keywords: ["gown", "evening", "emerald", "green", "formal", "elegant"],
    category: "dresses",
    styleCategories: ["formal", "party"],
    seasons: ["deep-winter", "cool-winter", "deep-autumn"]
  },
  {
    id: "item-10",
    name: "Camel Coat",
    description: "A luxurious camel coat that adds sophistication to winter outfits.",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#AE7848"],
    keywords: ["coat", "camel", "winter", "outerwear", "classic"],
    category: "outerwear",
    styleCategories: ["formal", "modest", "casual"],
    seasons: ["soft-autumn", "warm-autumn"]
  },
  {
    id: "item-11",
    name: "Embroidered Ethnic Kurta",
    description: "A beautifully embroidered traditional kurta in deep colors.",
    image: "https://images.unsplash.com/photo-1616530333149-3e3c62c2bb0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#880E4F", "#B71C1C", "#FFD54F"],
    keywords: ["kurta", "ethnic", "embroidered", "traditional", "formal"],
    category: "tops",
    styleCategories: ["ethnic", "formal", "modest"],
    seasons: ["deep-winter", "deep-autumn"]
  },
  {
    id: "item-12",
    name: "Performance Leggings",
    description: "High-performance leggings with moisture-wicking technology.",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#212121"],
    keywords: ["leggings", "activewear", "fitness", "workout", "performance"],
    category: "bottoms",
    styleCategories: ["activewear"],
    seasons: ["cool-winter", "deep-winter", "cool-summer"]
  },
  {
    id: "item-13",
    name: "Graphic Streetwear Hoodie",
    description: "An oversized hoodie with modern graphic print.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#F5F5F5", "#212121"],
    keywords: ["hoodie", "streetwear", "graphic", "oversized", "casual"],
    category: "tops",
    styleCategories: ["streetwear", "casual"],
    seasons: ["cool-winter", "clear-winter", "clear-spring"]
  },
  {
    id: "item-14",
    name: "Pastel Pink Modest Maxi Dress",
    description: "A flowing modest maxi dress in soft pastel pink.",
    image: "https://images.unsplash.com/photo-1619516388835-2b60ac2f8d9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#F8BBD0"],
    keywords: ["maxi", "dress", "modest", "pink", "flowing", "covered"],
    category: "dresses",
    styleCategories: ["modest", "casual", "formal"],
    seasons: ["light-summer", "light-spring"]
  },
  {
    id: "item-15",
    name: "Formal Black Tuxedo",
    description: "A classic black tuxedo for formal occasions.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    colors: ["#212121"],
    keywords: ["tuxedo", "formal", "black tie", "elegant", "classic"],
    category: "outfits",
    styleCategories: ["formal"],
    seasons: ["cool-winter", "deep-winter", "clear-winter"]
  },
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "Basic",
    price: 0,
    description: "Get your color palette and basic recommendations",
    features: [
      { name: "Color analysis quiz", included: true },
      { name: "Seasonal color palette", included: true },
      { name: "Basic clothing recommendations", included: true },
      { name: "Makeup recommendations", included: false },
      { name: "Hair color suggestions", included: false },
      { name: "Jewelry recommendations", included: false },
      { name: "Style consultation", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 9.99,
    description: "Complete style recommendations tailored to you",
    features: [
      { name: "Color analysis quiz", included: true },
      { name: "Seasonal color palette", included: true },
      { name: "Basic clothing recommendations", included: true },
      { name: "Makeup recommendations", included: true },
      { name: "Hair color suggestions", included: true },
      { name: "Jewelry recommendations", included: true },
      { name: "Style consultation", included: false },
    ],
    isPopular: true,
  },
  {
    id: "vip",
    name: "VIP",
    price: 24.99,
    description: "Premium features plus personalized consultation",
    features: [
      { name: "Color analysis quiz", included: true },
      { name: "Seasonal color palette", included: true },
      { name: "Basic clothing recommendations", included: true },
      { name: "Makeup recommendations", included: true },
      { name: "Hair color suggestions", included: true },
      { name: "Jewelry recommendations", included: true },
      { name: "Style consultation", included: true },
    ],
  }
];

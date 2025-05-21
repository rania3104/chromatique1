
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
    image: "https://images.unsplash.com/photo-1683356476027-d81df5ccc048?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    styles: ["modest"]
  },
  {
    id: "formal",
    name: "Formal",
    image: "https://images.unsplash.com/photo-1616325629936-99a9013c29c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    styles: ["formal"]
  },
  {
    id: "casual",
    name: "Casual",
    image: "https://images.unsplash.com/photo-1581796547229-4b7a4a1d1d27?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    styles: ["casual"]
  },
  {
    id: "party",
    name: "Party",
    image: "https://images.unsplash.com/photo-1699729589505-d1791e32d925?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    styles: ["party"]
  },
  {
    id: "ethnic",
    name: "Ethnic",
    image: "https://images.unsplash.com/photo-1705920824583-0e783235394d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    styles: ["ethnic"]
  },
  // {
  //   id: "activewear",
  //   name: "Activewear",
  //   image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //   styles: ["activewear"]
  // },
  {
    id: "streetwear",
    name: "Streetwear",
    image: "https://images.unsplash.com/photo-1574889455435-7dc7e14ccf60?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    styles: ["streetwear"]
  }
];

// We'll populate this array with sample clothing items in a real app
export const clothingItems: ClothingItem[] = [
    {
    "id": "item-301",
    "name": "Mint Floral Dress",
    "description": "A mint floral dress with gold jewellery, white purse, and white highheels.",
    "image": "/Light Spring/Modest/4.jpeg",
    "colors": [
      "#edeeeb",
      "#cacebc",
      "#a7b794",
      "#81956d",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest", "mint", "floral", "white", "purse", "highheels", "jewellery"
    ],
    "category": "Dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-302",
    "name": "Tropical Rose Print Chiffon Silk Dress",
    "description": "A tropical rose print chiffon silk dress with pearl earrings, pink purse, and emerald highheels.",
    "image": "/Light Spring/Modest/5.jpeg",
    "colors": [
      "#e5e5e5",
      "#babeb8",
      "#82897f",
      "#4f5b4d",
      "#c0938e",
      "#ffffff"
    ],
    "keywords": [
      "modest", "tropical", "rose print", "chiffon", "silk", "dress", "pearl"
    ],
    "category": "Dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-303",
    "name": "Cotton Candy Maxi Dress",
    "description": "A cotton candy maxi dress in cream with old copper purse, pearl earrings, gold necklace and watch, and silver highheels.",
    "image": "/Light Spring/Modest/6.jpeg",
    "colors": [
      "#f1f0ed",
      "#d7cdc3",
      "#b3a393",
      "#814a39",
      "#a08168",
      "#ffffff"
    ],
    "keywords": [
      "modest", "maxi dress", "maxi", "cotton candy", "cream", "old copper", "purse", "pearl", "gold", "silver", "earrings", "watch"
    ],
    "category": "Maxi Dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-304",
    "name": "Romantic Floral Ruffle Midi Dress",
    "description": "A romantic ruffle midi dress with sleeves layered in floral designs as well as gold jewellery, light pink shoulder bag, pale pink ballet flats designed with a bow, and pink skincare products",
    "image": "/Light Spring/Modest/7.jpeg",
    "colors": [
      "#f2e0dc",
      "#e77b88",
      "#dfc6b5",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest", "pink", "romantic", "ruffle", "midi dress", "midi", "floral", "jewellery", "shoulder bag"
    ],
    "category": "Ruffle Midi Dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-305",
    "name": "Charcoal Grey Contemporary Modestwear",
    "description": "A charcoal grey poncho-style top with a long pleated ombré and black chiffon hijab. Accessories in this set include a woven beige bag, crocheted cream ballet flats, pearl necklace, slim gold watch, and perfume.",
    "image": "/Light Spring/Modest/8.jpg",
    "colors": [
      "#ababab",
      "#444446",
      "#e5e4e5",
      "#282526",
      "#837d87",
      "#d9cca9"
    ],
    "keywords": [
      "modest", "charcoal", "poncho-style", "hijab", "chiffon", "jewellery", "woven", "crocheted", "ballet flats", "flats", "perfume", "pearl", "cream"
    ],
    "category": "Contemporary Modestwear",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-306",
    "name": "White Embroidered Floral Midi Dress",
    "description": "A white embroidered midi dress designed in floral patterns with gold-accented earrings, baby blue handbag, and baby blue pointed-toe stiletto highheels.",
    "image": "/Light Spring/Modest/9.jpg",
    "colors": [
      "#eeedeb",
      "#c1bbad",
      "#c5d0db",
      "#c0a172",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest", "embroidered", "midi", "floral", "earrings", "babyblue", "handbag"
    ],
    "category": "Embroidered Midi Dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-307",
    "name": "Light Pink Anarkili Suit",
    "description": "A floor-length, heavily flared traditional dress with fitted bodice and long sleeves, paired with a dupatta. Accessories include jhumkas with chandbali elements, stone-studded bangles, embellished juttis, and mehndi hanna design.",
    "image": "/Light Spring/Party/1.jpg",
    "colors": [
      "#efcfd2",
      "#b2a996",
      "#2b2e37",
      "#595d61",
      "#ae7b7d",
      "#e0a8ae"
    ],
    "keywords": [
      "party", "anarkili", "traditional", "dupatta", "hanna"
    ],
    "category": "Anarkili Suit",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-308",
    "name": "Bright Pink Cropped Blouse",
    "description": "A bright pink cropped blouse with a Peter Pan collar paired with a cream tiered ruffle maxi skirt. Accessories include a light pink satin bow hair clip, gold pendant necklace, bow pearl drop earrings, white mini shoulder bag, bright pink block heel ankle strap sandals, and pink lip gloss.",
    "image": "/Light Spring/Party/10.jpeg",
    "colors": [
      "#f3f2eb",
      "#c54967",
      "#dea7ad",
      "#e27897",
      "#e1d6c1",
      "#ffffff"
    ],
    "keywords": [
      "party", "cropped", "blouse", "cream", "maxi", "skirt", "gold", "pearl", "sandals"
    ],
    "category": "Cropped Blouse",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-309",
    "name": "Soft Pink Salwar Kameez",
    "description": "A soft pink salwar kameez with a mint green dupatta. Accessories include pink and green jhumkas, white crossbody bag, light beige ankle strapped heels, gold bangles, and soft pink lipstick.",
    "image": "/Light Spring/Party/2.jpg",
    "colors": [
      "#eeeeeb",
      "#825049",
      "#b17874",
      "#64461e",
      "#bbb4a8",
      "#8bb799"
    ],
    "keywords": [
      "party", "salwar kameez", "traditional", "pink", "green"
    ],
    "category": "Salwar Kameez",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-310",
    "name": "White Long Sleeve Crop Top",
    "description": "A white long sleeved crop top with a round neck paired with a pink floral print midi dress. Accessories include a white leather shoulder bag, gold pendant necklace, pearl drop earrings, white ankle strapped highheels, and daisy latch buckle.",
    "image": "/Light Spring/Party/3.jpeg",
    "colors": [
      "#f1ebeb",
      "#95b0d1",
      "#c9c9c9",
      "#afa0a9",
      "#be8282",
      "#e3a1a8"
    ],
    "keywords": [
      "party", "floral", "pink", "white", "midi"
    ],
    "category": "Long Sleeve Crop Top",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-311",
    "name": "Soft Pink Floral Bustier Midi Dress",
    "description": "A soft pink bustier midi dress with a floral design, ruffle hem, and puffed sleeves. Accessories include a lilac shoulder bag, gold shell pendant necklace, gold earrings, and white high top sneakers.",
    "image": "/Light Spring/Party/4.jpeg",
    "colors": [
      "#f8f6ed",
      "#d7c2c6",
      "#c2a1a4",
      "#a27b7e",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "party", "bustier", "floral", "midi", "white", "sneakers"
    ],
    "category": "Bustier Midi Dress",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-312",
    "name": "White Ribbed Cropped Camisole",
    "description": "A white ribbed cropped camisole paired with a brown crochet cardigan and light-washed baggy jeans. Accessories include a silver beaded necklace, pearl drop earrings, silver mesh strapped watch, brown leather crossbody bag, white sneakers, lip gloss, and makeup lotion",
    "image": "/Light Spring/Party/5.jpg",
    "colors": [
      "#a6a6a6",
      "#7e635e",
      "#5e3e36",
      "#eeeeee",
      "#c5c5c5",
      "#ab8777"
    ],
    "keywords": [
      "party", "white", "cardigan", "jeans", "camisole"
    ],
    "category": "Ribbed Cropped Camisole",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-313",
    "name": "Beige Long Satin Maxi Dress",
    "description": "A beige long satin maxi dress with a v-neckline and puffed long sleeves. Accessories include a gold pendant necklace, gold hoop earrings, red leather handbag, white pointed-toe slingback heels, and beige primer or foundation.",
    "image": "/Light Spring/Party/6.jpeg",
    "colors": [
      "#d6dbdf",
      "#c9ab9b",
      "#6b7178",
      "#8393a3",
      "#832318",
      "#a24443"
    ],
    "keywords": [
      "party", "maxi dress", "maxi", "satin", "beige"
    ],
    "category": "Long Satin Maxi Dress",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-314",
    "name": "White Wrap Dress",
    "description": "A white wrap dress with a v-neckline, long puffed sleeves, and a white waist tie. Accessories include gold pearl drop hoop earrings, gold pendant necklace, gold mesh strapped watch, gold link bracelet, brown leather shoulder bag, and brown pointed-toe highheels.",
    "image": "/Light Spring/Party/7.jpeg",
    "colors": [
      "#f0f0ed",
      "#ddcdae",
      "#693a28",
      "#b4956f",
      "#e0ad80",
      "#ffffff"
    ],
    "keywords": [
      "party", "wrap dress", "midi", "white", "gold", "brown", "elegant"
    ],
    "category": "Wrap Dress",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-315",
    "name": "Brown Wrap Blouse",
    "description": "A brown wrap blouse with long puffed sleeves and a collar paired with cream high-waisted, button-front maxi skirt. Accessories include a rectangular gold-tone wristwatch, gold metallic clutch, gold buckled brown belt, brown pointed-toe highheels, and brown makeup products.",
    "image": "/Light Spring/Party/8.jpg",
    "colors": [
      "#e9e9e9",
      "#532e1b",
      "#d2bb90",
      "#d5cdc2",
      "#8c704a",
      "#aa996c"
    ],
    "keywords": [
      "party", "brown", "wrap blouse", "maxi skirt", "cream", "gold", "elegant"
    ],
    "category": "Wrap Blouse",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-316",
    "name": "Pink Embroidered Maxi Dress",
    "description": "A pink embroidered maxi dress with floral patterns, long sleeves, and a keyhole neckline. Accessories include a gold Om symbol pendant necklace, pink and gold bangles with floral patterns, pink and gold watch, gold floral patterned rings, pink small chain shoulder bag, pink highheeled pumps, and pink lipstick.",
    "image": "/Light Spring/Party/9.jpg",
    "colors": [
      "#f8f6ee",
      "#e4d2c9",
      "#cc866e",
      "#e5c58f",
      "#b9b3ac",
      "#b65952"
    ],
    "keywords": [
      "party", "floral", "pink", "gold", "maxi dress", "elegant"
    ],
    "category": "Embroidered Maxi Dress",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-317",
    "name": "White Embroidered Pleasant Blouse",
    "description": "A white embroidered peasant blouse with long puffed sleeves and intricate embroidery in a khaki green color paired with light-washed flare jeans with a high waist. Accessories include a pearl necklace with a gold pendant and beige woven platform heels.",
    "image": "/Light Spring/Streetwear/1.jpg",
    "colors": [
      "#cab8a2",
      "#f1f1ed",
      "#dcd6c8",
      "#948b73",
      "#9cadb8",
      "#55799e"
    ],
    "keywords": [
      "streetwear", "white", "blouse", "khaki green", "casual"
    ],
    "category": "Embroidered Pleasant Blouse",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-318",
    "name": "White Floral Print Peplum Top",
    "description": "A white sleeveless peplum top with a blue floral print paired with a white long sleeve mesh top and light-washed wide-leg jeans. Accessories include a white handbag, gold hoop earrings, gold chain necklace with a pendant, and white high-top sneakers.",
    "image": "/Light Spring/Streetwear/10.jpeg",
    "colors": [
      "#e5e5e5",
      "#c2c2c0",
      "#8f9fa4",
      "#57768b",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "streetwear", "peplum top", "floral print", "white", "mesh top", "jeans"
    ],
    "category": "Sleeveless Peplum Top",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-319",
    "name": "Light Beige Satin Blouse",
    "description": "A light beige satin blouse with a collar, front pockets, and curved hem paired with light blue jeans and floral silk scarf. Accessories include a gold chain necklace, green velvet clutch, pinkish nude lipstick, and floral perfume.",
    "image": "/Light Spring/Streetwear/11.jpg",
    "colors": [
      "#dfdfdf",
      "#bbbaaf",
      "#bf978b",
      "#7f876e",
      "#fce4b3",
      "#8e9fb5"
    ],
    "keywords": [
      "streetwear", "satin", "blouse", "floral", "beige", "pink", "pastel"
    ],
    "category": "Satin Blouse",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-320",
    "name": "Pink Embroidered Kurta",
    "description": "A pink embroidered kurta or tunic with floral and intricate embroidery paired with blue jeans. Accessories include silver floral jhumka earrings, silver mesh bracelet, and brown embroidered juttis.",
    "image": "/Light Spring/Streetwear/12.jpg",
    "colors": [
      "#ffdfb8",
      "#c7bcba",
      "#aca594",
      "#ece8ea",
      "#888780",
      "#2c3c12"
    ],
    "keywords": [
      "streetwear", "kurta", "tunic", "floral", "pink"
    ],
    "category": "Embroidered Kurta",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-321",
    "name": "Beige Long Floral Shirt Dress",
    "description": "A long, cream or beige shirt dress with red floral print paired with black wide-leg palazzo pants. Accessories include colorful beaded earrings, silver jewellery, cream textured clutch, and light green highheeled sandals.",
    "image": "/Light Spring/Streetwear/13.jpg",
    "colors": [
      "#cecece",
      "#5d5754",
      "#402a1e",
      "#8c7469",
      "#b6ab9d",
      "#f3f2ee"
    ],
    "keywords": [
      "streetwear", "floral", "shirt dress", "silver", "beige", "red"
    ],
    "category": "Long Shirt Dress",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-322",
    "name": "Light Green Cropped T-shirt and Olive Green Oversized Sweater",
    "description": "A light green cropped T-shirt and an olive green oversized sweater paired with light-washed and high-waisted jeans. Accessories include gold hoop earrings, white rectangular hair clip, white shoulder bag, white crew socks, and white and light green sneakers.",
    "image": "/Light Spring/Streetwear/14.jpg",
    "colors": [
      "#d3d6cf",
      "#4e5836",
      "#7c7d69",
      "#b3b9a8",
      "#9ba87b",
      "#809dba"
    ],
    "keywords": [
      "streetwear", "light green", "olive green", "green", "white", "sweater", "cozy"
    ],
    "category": "Cropped T-shirt",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-323",
    "name": "Mustard Yellow Oversized Jacket",
    "description": "A mustard yellow oversized jacket with a white T-shirt underneath paired with light-washed, high-waisted, and leg-wide jeans. Accessories include a gold necklace with a pink floral pendant, floral designed gold bracelet, brown floral hair clip, black textured tote bag, and gray and white sneakers. ",
    "image": "/Light Spring/Streetwear/15.jpg",
    "colors": [
      "#e5e5e5",
      "#aa722b",
      "#fbbc51",
      "#de9a36",
      "#6a524b",
      "#857874"
    ],
    "keywords": [
      "streetwear", "mustard yellow", "floral", "gold", "vintage"
    ],
    "category": "Oversized Jacket",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-324",
    "name": "White and Gray Embroidered Long-sleeved Kurta",
    "description": "An embroidered, long-sleeve kurta or tunic in white with grey floral and geometric patterns paired with light blue, high-waisted, wide-leg jeans. Accessories include silver earrings, rose smart watch, black and white shoulder bag, and classic white sneakers.",
    "image": "/Light Spring/Streetwear/16.jpg",
    "colors": [
      "#dfdfdf",
      "#616161",
      "#bdb8b2",
      "#8c8c8c",
      "#537591",
      "#222222"
    ],
    "keywords": [
      "streetwear", "white", "grey", "gray", "kurta", "black", "modern"
    ],
    "category": "Long-sleeved Kurta",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-325",
    "name": "Cream Embroidered Cream Blouse",
    "description": "A cream embroidered blouse with khaki green patterns with loose balloon sleeves paired with light-washed, high-waisted, flared jeans. Accessories include a pearl pendant necklace and beige woven platform sandals.",
    "image": "/Light Spring/Streetwear/2.jpg",
    "colors": [
      "#cab8a2",
      "#f1f1ed",
      "#dcd6c8",
      "#948b73",
      "#9cadb8",
      "#55799e"
    ],
    "keywords": [
      "streetwear", "cream", "beige", "khaki green", "blouse"
    ],
    "category": "Loose Sleeved Blouse",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-326",
    "name": "Pink Floral Embroidered Tunic",
    "description": "A pink floral embroidered tunic paired with light-washed, high-waisted, wide-leg jeans. Accessories include large silver jhumka earrings and black gold embellished juttis.",
    "image": "/Light Spring/Streetwear/3.jpg",
    "colors": [
      "#dcc5bf",
      "#35221a",
      "#7a5836",
      "#cfa684",
      "#bd7c64",
      "#9a9a96"
    ],
    "keywords": [
      "streetwear", "tunic", "floral", "silver", "gold", "traditional", "pink"
    ],
    "category": "Embroidered Tunic",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-327",
    "name": "Classic Beige Trench Coat",
    "description": "A classic beige trench coat worn over a white button-up shirt which is fitted over a white T-shirt paired with light blue, high-waisted, wide-leg jeans. Accessories include a white headscarf, cream satin bow handbag, and white sneakers with beige accents.",
    "image": "/Light Spring/Streetwear/4.jpg",
    "colors": [
      "#fef3d5",
      "#dfc4a6",
      "#b89877",
      "#8a6f52",
      "#a7c8e0",
      "#8398aa"
    ],
    "keywords": [
      "streetwear", "white", "beige", "classic"
    ],
    "category": "Trench Coat",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-328",
    "name": "Pink Floral Embroidered Tunic",
    "description": "A pink floral embroidered tunic paired with white embroidered palazzo pants. Accessories include pink teardrop-shaped earrings, cream floral ring, silver bangles, cream floral print tote bag, and pink embroidered juttis.",
    "image": "/Light Spring/Streetwear/5.jpg",
    "colors": [
      "#e5e5e5",
      "#c2cdba",
      "#b39381",
      "#eb8ba1",
      "#88605f",
      "#932a39"
    ],
    "keywords": [
      "streetwear", "pink", "white", "cream", "floral"
    ],
    "category": "Embroidered Tunic",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-329",
    "name": "Pink and White Floral Embroidered Tunic",
    "description": "A pink and white floral embroidered tunic paired with blue high-waisted, wide-leg jeans. Accessories include oxidized silver bangles, oxidized silver jhumka earrings, and embroidered mojari.",
    "image": "/Light Spring/Streetwear/6.jpg",
    "colors": [
      "#dad9d7",
      "#b28992",
      "#6e7275",
      "#d1a7af",
      "#484648",
      "#7c94ad"
    ],
    "keywords": [
      "streetwear", "floral", "white", "silver", "traditional"
    ],
    "category": "Embroidered Tunic",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-330",
    "name": "Beige and Forest Green Boho Embroidered Top",
    "description": "A beige and forest green boho embroidered top with floral designs paired with light-washed, high-waisted flared jeans. Accessories include oxidized silver jewellery, faux leather braided sandals, and beige nail polish and makeup.",
    "image": "/Light Spring/Streetwear/7.jpg",
    "colors": [
      "#e5e5e5",
      "#a9ab97",
      "#ccc6b3",
      "#556d64",
      "#8d8b79",
      "#364b45"
    ],
    "keywords": [
      "streetwear", "beige", "forest green", "green", "floral", "silver"
    ],
    "category": "Boho Top",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-331",
    "name": "White Embroidered Kurta",
    "description": "A traditional white embroidered kurta paired with light-washed, wide-leg jeans. Accessories include oxidized silver earrings, silver bangles, and classic white sneakers/embroidered juttis.",
    "image": "/Light Spring/Streetwear/8.jpg",
    "colors": [
      "#e9e9e9",
      "#d1c7c1",
      "#557576",
      "#8b8070",
      "#7b999a",
      "#aca7a1"
    ],
    "keywords": [
      "streetwear", "white", "silver", "traditional"
    ],
    "category": "Embroidered Kurta",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-332",
    "name": "White Long Embroidered Kurta",
    "description": "A white, knee-length kurta with embroidered patterns with silver-toned jhumka earrings, gold-toned bangles, beige embroidered juttis, and floral perfume.",
    "image": "/Light Spring/Streetwear/9.jpg",
    "colors": [
      "#a9a9ab",
      "#807c77",
      "#655e59",
      "#cbcbcc",
      "#ebebea",
      "#15161a"
    ],
    "keywords": [
      "streetwear", "kurta", "white", "beige", "silver", "gold", "traditional", "floral"
    ],
    "category": "Embroidered Kurta",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-333",
    "name": "White Floral Midi Dress",
    "description": "A white floral midi dress with silver necklaces, purple and white gingham bow, lavender crossbody bag, lavender high-heeled sandals, and a metallic lavender phone case.",
    "image": "/Light Summer/Casual/1.jpeg",
    "colors": [
      "#eeeeee",
      "#d3cecb",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual", "white", "lavender", "silver", "purple", "midi dress", "midi", "floral"
    ],
    "category": "Midi Dress",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-334",
    "name": "Cream Oversized Cardigan",
    "description": "A cream oversized cardigan paired with light-washed, high-waisted, wide-leg jeans. Accessories include gold knot stud earrings, gold chain necklace, cream crotchet tote bag, blue flower hair clip, pink lip gloss, red nail polish, and sunscreen.",
    "image": "/Light Summer/Casual/10.jpeg",
    "colors": [
      "#e8ebec",
      "#e7d7bc",
      "#9ab4d6",
      "#d1c088",
      "#fa919b",
      "#768491"
    ],
    "keywords": [
      "casual", "cream", "beige", "cardigan", "gold", "tote bag"
    ],
    "category": "Oversized Cardigan",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-335",
    "name": "Light Blue Oversized Button-Up Shirt",
    "description": "A white, long-sleeved cropped fitted shirt underneath a light blue oversized button-up shirt paired with dark-washed, high-waisted denim maxi skirt. Accessories include gold hoop earrings, gold layered necklace, white shoulder bag, and white high-top sneakers.",
    "image": "/Light Summer/Casual/11.jpeg",
    "colors": [
      "#e5e5e5",
      "#abc4e3",
      "#6d86a4",
      "#20273a",
      "#435977",
      "#b1b1b5"
    ],
    "keywords": [
      "casual", "white", "light blue", "gold", "maxi skirt", "button-up shirt"
    ],
    "category": "Oversized Button-Up Shirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-336",
    "name": "Pink and White Vertical Striped Button-Down Shirt",
    "description": "A white, long-sleeved cropped fitted shirt underneath a pink and white vertical striped button-down shirt paired with light-washed, high-waisted, wide-leg jeans. Accessories include gold jewellery, blue flower hair clip, white textured shoulder bag, and gray and white sneakers.",
    "image": "/Light Summer/Casual/12.jpeg",
    "colors": [
      "#e1e1e1",
      "#a4bad9",
      "#8c9fb1",
      "#547487",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual", "white", "pink", "button-down shirt", "gold", "gray"
    ],
    "category": "Button-Down Shirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-337",
    "name": "Cream Chunky Knit Sweater",
    "description": "A cream chunky knit sweater paired with a blue high-waisted denim maxi skirt. Accessories include black cat-eyed sunglasses, gold hoop earrings, gold layered pendant necklace, beige structured shoulder bag, and black-accented white sneakers.",
    "image": "/Light Summer/Casual/13.jpeg",
    "colors": [
      "#e3e5e6",
      "#718494",
      "#526273",
      "#bbb19e",
      "#bb9967",
      "#314255"
    ],
    "keywords": [
      "casual", "white", "cream", "beige", "sweater", "maxi skirt", "gold", "black", "denim"
    ],
    "category": "Chunky Knit Sweater",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-338",
    "name": "Light Blue Wrap-Style Blouse",
    "description": "A light blue wrap-style blouse paired with navy blue wide-leg pinstripe trousers. Accessories include black oval sunglasses, black structured handbag, silver hoop earrings, and light blue slingback heels.",
    "image": "/Light Summer/Casual/2.jpeg",
    "colors": [
      "#edf0f4",
      "#abb6ce",
      "#8691a3",
      "#c4d4ee",
      "#6d6e7a",
      "#26252d"
    ],
    "keywords": [
      "casual", "light blue", "blouse", "wrap-style", "navy blue", "black", "silver"
    ],
    "category": "Wrap-Style Blouse",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-339",
    "name": "Cream Chunky Knit Cardigan",
    "description": "A cream chunky knit cardigan paired with light blue high-waisted, wide-leg jeans. Accessories include gold jewellery, cream open-knit tote bag, blue flower hair clip, white high-top sneakers, pink lip gloss, red nail polish, and sunscreen.",
    "image": "/Light Summer/Casual/3.jpeg",
    "colors": [
      "#e8ebec",
      "#e7d7bc",
      "#9ab4d6",
      "#d1c088",
      "#f8919b",
      "#758492"
    ],
    "keywords": [
      "casual", "cardigan", "cream", "light blue", "gold", "blue", "pink"
    ],
    "category": "Chunky Knit Cardigan",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-340",
    "name": "Light Blue Textured Open-Front Cardigan",
    "description": "A white long-sleeved fitted crop top underneath a light blue textured open-front cardigan paired with a green A-line floral maxi skirt. Accessories include gold jewellery, white tote bag, white satin scarf, and white-striped gray sneakers.",
    "image": "/Light Summer/Casual/4.jpeg",
    "colors": [
      "#e5e5e5",
      "#aebed5",
      "#9eaa9d",
      "#cdc088",
      "#767d71",
      "#ffffff"
    ],
    "keywords": [
      "casual", "white", "cardigan", "light blue", "green", "gold", "floral", "maxi skirt"
    ],
    "category": "Open-Front Cardigan",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-341",
    "name": "Mint Green Oversized Sweatshirt",
    "description": "A mint green oversized sweatshirt paired with black cargo wide-leg pants. Accessories include gold hoop earrings, gold chain necklace, gold watch, black woven tote bag, pink claw clip, pink lip gloss, beauty products, and white and black sneakers.",
    "image": "/Light Summer/Casual/5.jpeg",
    "colors": [
      "#e6e6e6",
      "#adbeb3",
      "#929e94",
      "#38373c",
      "#d5486b",
      "#1c1c1c"
    ],
    "keywords": [
      "casual", "sweatshirt", "mint green", "white", "black", "gold"
    ],
    "category": "Oversized Sweatshirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-342",
    "name": "Brown Oversized Hoodie",
    "description": "A brown oversized hoodie paired with blue high-waisted, wide-leg jeans. Accessories include a small white shoulder bag, brown hair clip, and white and gray sneakers.",
    "image": "/Light Summer/Casual/6.jpg",
    "colors": [
      "#e5e5e5",
      "#766356",
      "#959197",
      "#4c627e",
      "#243b5b",
      "#bebcbd"
    ],
    "keywords": [
      "casual", "brown", "hoodie", "white", "gray"
    ],
    "category": "Oversized Hoodie",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-343",
    "name": "Light Gray Oversized Ribbed Knit Cardigan",
    "description": "A navy blue V-neck knit sweater underneath a light gray oversized ribbed knit cardigan paired with medium-washed, high-waisted, wide-leg jeans. Accessories include a brown leather tote, and beige and green sneakers.",
    "image": "/Light Summer/Casual/7.jpg",
    "colors": [
      "#dfdfdd",
      "#141821",
      "#54575b",
      "#b2b1af",
      "#797f89",
      "#a46f5b"
    ],
    "keywords": [
      "casual", "navy blue", "cardigan", "sweater", "light gray", "brown"
    ],
    "category": "Oversized Cardigan",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-344",
    "name": "Cream Striped Sleeveless Top",
    "description": "A cream striped sleeveless top underneath a white oversized shirt paired with light blue wide-leg trousers. Accessories include white sneakers, silver necklace, and small black bag.",
    "image": "/Light Summer/Casual/8.jpg",
    "colors": [
      "#e3e8ee",
      "#b5ab99",
      "#cdc9cc",
      "#5a5a5a",
      "#9c8f77",
      "#707c8e"
    ],
    "keywords": [
      "casual", "sleeveless top", "cream", "white", "light blue", "black"
    ],
    "category": "Sleeveless Top",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-345",
    "name": "White Puff-Sleeved Peasant-Styled Blouse",
    "description": "A white puff-sleeved peasant-styled blouse paired with blue high-waisted, wide-leg jeans. Accessories include a slim stone-embedded silver bracelet, small beige crossbody bag, and beige ballet flats.",
    "image": "/Light Summer/Casual/9.jpg",
    "colors": [
      "#f6f5ee",
      "#daccc0",
      "#57687b",
      "#917462",
      "#394661",
      "#7a562f"
    ],
    "keywords": [
      "casual", "white", "peasant-styled blouse", "blouse", "beige", "silver"
    ],
    "category": "Peasant-styled Blouse",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "light-summer"
    ]
  },
  {
    "id": "item-101",
    "name": "Blue Striped Button Down",
    "description": "Sky blue striped button down shirt with a white tank top underneath it. A pair of light blue denim jeans to go with it and a neutral tone backpack.",
    "image": "/Cool Summer/Streetwear/4.jpeg",
    "colors": [
      "#f0f0f0",
      "#7580a0",
      "#8a99c6",
      "#b1b9cb",
      "#4b6884",
      "#1b333d"
    ],
    "keywords": [
      "streetwear", "buttondown", "blue", "white", "denim", "jeans", 'tanktop', 'sneakers'
    ],
    "category": "Button Down Shirt",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "cool-summer"
    ]
  },
  {
    "id": "item-102",
    "name": "White Jumper",
    "description": "A white and pink jumper with denim jeans and a baby pink handbag. White accessories to top it up.",
    "image": "/Cool Winter/Casual/1.jpeg",
    "colors": [
      "#e5e5e5",
      "#f1a5c3",
      "#6381a2",
      "#4c647d",
      "#8f8084",
      "#bc9e95"
    ],
    "keywords": [
      "casual", "jumper", 'jeans', 'handbag', 'lightpink', 'bow'
    ],
    "category": "Jumper",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-103",
    "name": "Blue Button Down Shirt",
    "description": "Oversized blue button down shirt paired with a black bag and acid-wash jeans",
    "image": "/Cool Winter/Casual/10.jpg",
    "colors": [
      "#e1e9f1",
      "#afc3db",
      "#a9a9a8",
      "#424240",
      "#636361",
      "#6f7f8d"
    ],
    "keywords": [
      "casual", "shirt", 'black','sunglasses'
    ],
    "category": "Button Down Shirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-104",
    "name": "Baby Pink Puulover",
    "description": "Baby pink pullover paired with deep red accesories and flare jeans.",
    "image": "/Cool Winter/Casual/11.jpeg",
    "colors": [
      "#dbdee2",
      "#ecbfbe",
      "#768a9e",
      "#95a7b9",
      "#5b6a7b",
      "#6f0f12"
    ],
    "keywords": [
      "casual", 'pullover','flarejeans', 'handbag', 'heels'
    ],
    "category": "Pullover",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-105",
    "name": "Oversized Baby Pink Jumper",
    "description": "An oversized baby pink jumper with straight white trousers. Styles with pink plats, creme tote bag and gold accessories.",
    "image": "/Cool Winter/Casual/12.jpeg",
    "colors": [
      "#e2d9d6",
      "#d6c4a5",
      "#f7939c",
      "#c2958a",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual", 'totebag', 'jumper','flats','trousers','gold'
    ],
    "category": "Jumper",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-106",
    "name": "Baby Blue Jumper",
    "description": "A baby blue jumper paired with a crochet tote bag, straight boot cut dark jeans and gold accessories.",
    "image": "/Cool Winter/Casual/13.jpeg",
    "colors": [
      "#e7eef3",
      "#a6c4dc",
      "#c6c1ac",
      "#53647a",
      "#6081a3",
      "#283d55"
    ],
    "keywords": [
      "casual", 'totebag', 'crochet', 'jumper', 'babyblue', 'darkjeans', 'gold'
    ],
    "category": "Jumper",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-107",
    "name": "Blue Striped Button Down Shirt",
    "description": "Blue and white striped button down shirt with denim jeans and white accessories.",
    "image": "/Cool Winter/Casual/14.jpeg",
    "colors": [
      "#eff1f6",
      "#c7cde1",
      "#91afd5",
      "#decdaf",
      "#3f638b",
      "#ffffff"
    ],
    "keywords": [
      "casual", 'buttondown', 'shoulderbag', 'jeans'
    ],
    "category": "Button Down Shirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-108",
    "name": "Baby Blue Cropped Knitted Sweater",
    "description": "Baby blue knitted cropped sweater paired with a straight cut jeans and light blue accessories.",
    "image": "/Cool Winter/Casual/15.jpg",
    "colors": [
      "#ebeae9",
      "#705d47",
      "#907c5e",
      "#c1ced2",
      "#9eafbe",
      "#748eab"
    ],
    "keywords": [
      "casual", 'cropped', 'knitted', 'sweater', 'sneakers', 'straightjeans', 'totebag'
    ],
    "category": "Sweater",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-109",
    "name": "Pink Knitted Pullover",
    "description": "Pink oversized knitted pullover styles with denim long skirt, white accessories and gold jewelry.",
    "image": "/Cool Winter/Casual/2.jpeg",
    "colors": [
      "#e7d6d6",
      "#e3d79c",
      "#b8b9bb",
      "#5a6c7c",
      "#7f94a3",
      "#3d4e5e"
    ],
    "keywords": [
      "casual", 'pullover','knitted','denim','longskirt','white','gold'
    ],
    "category": "Pullover",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-110",
    "name": "Light Blue Button Down Shirt",
    "description": "Light blue button down shirt with dark blue bell bottom trousers.",
    "image": "/Cool Winter/Casual/3.jpeg",
    "colors": [
      "#ebecec",
      "#b4c7e5",
      "#181f31",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual",'bellbottom','buttondown','handbag','blue'
    ],
    "category": "Button Down Shirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-111",
    "name": "Blue Button Down Shirt",
    "description": "Blue button down shirt with straight denim jeans and deep red handbag.",
    "image": "/Cool Winter/Casual/4.jpeg",
    "colors": [
      "#eff4f8",
      "#b6cfee",
      "#dfd6c6",
      "#94b1c6",
      "#8a1a0e",
      "#a43e3c"
    ],
    "keywords": [
      "casual", 'deepred','straightcut','buttondown','handbag'
    ],
    "category": "Button Down Shirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-112",
    "name": "Light Pink Pullover",
    "description": "Light pink pullover with straight jeans and white handbag.",
    "image": "/Cool Winter/Casual/5.jpeg",
    "colors": [
      "#bcbcbd",
      "#ebe2e1",
      "#717a88",
      "#f59ca8",
      "#406087",
      "#293e57"
    ],
    "keywords": [
      "casual"
    ],
    "category": "Pullover",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-113",
    "name": "Baby Blue Button Down Shirt",
    "description": "Baby blue button down shirt with acidwash jeans and totebag.",
    "image": "/Cool Winter/Casual/6.jpg",
    "colors": [
      "#e8f0fb",
      "#9ab9de",
      "#9593a2",
      "#bad6f9",
      "#c8c8c8",
      "#6e798a"
    ],
    "keywords": [
      "casual", 'blue','totebag','acidwash jeans'
    ],
    "category": "",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-114",
    "name": "Pink Knitted Cardigan",
    "description": "Pink knitted cardigan with straight cut jeans.",
    "image": "/Cool Winter/Casual/7.jpg",
    "colors": [
      "#f9f0f2",
      "#ecb9c5",
      "#d18794",
      "#c9d4df",
      "#51575b",
      "#a0b2ca"
    ],
    "keywords": [
      "casual", 'straight-cut jeans','pink','knitted','cardigan'
    ],
    "category": "Cardigan",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-115",
    "name": "Light Blue Oversized Button Down Shirt",
    "description": "Light blue oversized button down shirt with burnt orange totebag and black bellbottom jeans.",
    "image": "/Cool Winter/Casual/8.jpg",
    "colors": [
      "#dedfe0",
      "#707370",
      "#97a9b8",
      "#504c4e",
      "#8c4d30",
      "#2d2c34"
    ],
    "keywords": [
      "casual",'burnt orange','totebag','button down shirt','oversized','bell bottom jeans'
    ],
    "category": "Button Down Shirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-116",
    "name": "Crumped White Button Down Shirt",
    "description": "Crumped white button down shirt with straight cut jeans and brown handbag.",
    "image": "/Cool Winter/Casual/9.jpeg",
    "colors": [
      "#efeeea",
      "#5f7e9e",
      "#3f5f84",
      "#7f5b4d",
      "#a0867c",
      "#663725"
    ],
    "keywords": [
      "casual",'button down shirt','straight cut','jeans','handbag'
    ],
    "category": "Button Downt Shirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-117",
    "name": "White Floral Anarkali Suit",
    "description": "White floral anarkali kameez with white floral dupatta paired with golden khussa and accessories.",
    "image": "/Cool Winter/Ethnic/1.jpg",
    "colors": [
      "#b58a6a",
      "#d0dae0",
      "#bab5a7",
      "#857e73",
      "#e7caad",
      "#705a4d"
    ],
    "keywords": [
      "ethnic",'anarkali dress','khussa','gold','floral','white','dupatta'
    ],
    "category": "Anarkali Suit",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-118",
    "name": "Blue Half Shirt Co-ord Set",
    "description": "Blue half shirt co-ord set with silver churiyaan and jhumkes and white handbag and shoes.",
    "image": "/Cool Winter/Ethnic/2.jpg",
    "colors": [
      "#e5e5e5",
      "#b29b81",
      "#767c79",
      "#cfbb9b",
      "#879da7",
      "#a9bfca"
    ],
    "keywords": [
      "ethnic",'co-ord','blue','churiyan','bangles','jhumke','white','silver'
    ],
    "category": "Co-ord Set",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-119",
    "name": "Green Long Kameez Shalwar Suit",
    "description": "Dark green long kameez shalwar suit with green beaded jhumkas and green handbag. Paired with golden strapped heels.",
    "image": "/Cool Winter/Ethnic/3.jpg",
    "colors": [
      "#e5e5e5",
      "#c9b5a0",
      "#4a503a",
      "#9e7e6b",
      "#184546",
      "#286a72"
    ],
    "keywords": [
      "ethnic",'shalwar suit','beaded','jhumkas','green','heels','strapped'
    ],
    "category": "Long Kameez Shalwar Suit",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-120",
    "name": "Baby Pink Gharara Dress",
    "description": "Baby pink gharara dress with embroidered dupatta, pink khussa, pink jhumkas, pink clutch and pink churiyan.",
    "image": "/Cool Winter/Ethnic/4.jpg",
    "colors": [
      "#eccfc5",
      "#a19a96",
      "#857b72",
      "#1a100d",
      "#bebcb5",
      "#f4f2ec"
    ],
    "keywords": [
      "ethnic",'gharara','churiyan','bangles','jhumkas','clutch','pink','embroidered'
    ],
    "category": "Gharara Dress",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-121",
    "name": "Soft Blue Long Kameez Shalwar Suit",
    "description": "Soft blue long embroidered shalwar kameez suit with blue jewelry and accessories.",
    "image": "/Cool Winter/Ethnic/5.jpg",
    "colors": [
      "#e7e6e2",
      "#928a79",
      "#3b696f",
      "#afaeb1",
      "#764e43",
      "#3a373d"
    ],
    "keywords": [
      "ethnic",'blue','pastel','icy','embroidered','jhumkas','heels'
    ],
    "category": "Long Kameez Shalwar Suit",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-122",
    "name": "Pink and White Floral Kurti",
    "description": "Pink and white floral kurti paired with denim jeans and silver jewelry and khussa.",
    "image": "/Cool Winter/Ethnic/6.jpg",
    "colors": [
      "#dad9d7",
      "#b28992",
      "#6e7275",
      "#d1a7af",
      "#484648",
      "#7c94ad"
    ],
    "keywords": [
      "ethnic",'kurti','floral','denim','jeans','silver','churiyan','bangles','jhumke','khussa'
    ],
    "category": "Kurti",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-123",
    "name": "Pink and Gold Embroidered Lehenga",
    "description": "Pink and gold embroidered lehenga with pink and gold accessories.",
    "image": "/Cool Winter/Ethnic/7.jpg",
    "colors": [
      "#f8dde4",
      "#d59898",
      "#876d65",
      "#41373b",
      "#a29587",
      "#dec1bb"
    ],
    "keywords": [
      "ethnic",'lehenga','pink','gold','khussa','jhumka'
    ],
    "category": "Lehenga",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-124",
    "name": "Beige Knitted Cardigan",
    "description": "Beige knitted cardigan with a simple white t-shirt and trousers.",
    "image": "/Cool Winter/Formal/1.jpeg",
    "colors": [
      "#fbf6ef",
      "#cac2b5",
      "#968f7c",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal",'cardigan','beige','knitted','white','tshirt'
    ],
    "category": "Cardigan",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-125",
    "name": "Pink Floor Length Dress and Green Blazer",
    "description": "Pink floor length dress paired with a sage green blazer on top, a pink handbag, white shoes and minimal gold accessories.",
    "image": "/Cool Winter/Formal/2.jpeg",
    "colors": [
      "#e0e0dd",
      "#e8beb9",
      "#aab2a3",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal",'floorlength','dress','sagegreen','blazer','minimal','gold'
    ],
    "category": "Floor Length Dress",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-126",
    "name": "Grey Caped Blazer",
    "description": "Grey caped blazer with a white long skirt and deep red accessories.",
    "image": "/Cool Winter/Formal/3.jpg",
    "colors": [
      "#cecccb",
      "#6e6864",
      "#be8d63",
      "#f0efed",
      "#51241d",
      "#a2a4b0"
    ],
    "keywords": [
      "formal",'blazer','office','business','grey','long skirt'
    ],
    "category": "Blazer",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-127",
    "name": "Pink Blazer",
    "description": "Pink blazer with white trousers and baby pink accessories.",
    "image": "/Cool Winter/Formal/4.jpeg",
    "colors": [
      "#eeeeed",
      "#ceaba8",
      "#e7c9c9",
      "#b2807f",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal",'blazer','trousers','flats','pink'
    ],
    "category": "Blazer",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-128",
    "name": "Navy Blue Trench Coat",
    "description": "Navy blue trench coat with denim jeans and a white t-shirt.",
    "image": "/Cool Winter/Formal/5.jpg",
    "colors": [
      "#edeeef",
      "#131b2e",
      "#72757e",
      "#7f91a7",
      "#ced2d1",
      "#a8a7be"
    ],
    "keywords": [
      "formal",'trench coat','navy blue','denim'
    ],
    "category": "Trench Coat",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-129",
    "name": "Hot Pink Blazer",
    "description": "Hot pink blazer with denim jeans paired with a brown t-shirt and brown heels. A baby blue bag to go along with it.",
    "image": "/Cool Winter/Formal/6.jpeg",
    "colors": [
      "#e8ecee",
      "#f47aa8",
      "#6d524e",
      "#99aab9",
      "#6e8ea3",
      "#b4d2e1"
    ],
    "keywords": [
      "formal",'blazer','heels','babyblue','hot pink','brown','jeans'
    ],
    "category": "Blazer",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-130",
    "name": "Pink Long Dress",
    "description": "A baby pink trench coat over a dark pink long dress with black scarf and handbag.",
    "image": "/Cool Winter/Modest/1.jpg",
    "colors": [
      "#f4efe9",
      "#e5b7b2",
      "#cb9592",
      "#a75d6f",
      "#7c3e4e",
      "#0f1113"
    ],
    "keywords": [
      "modest",'pink','handbag','scarf','trench coat'
    ],
    "category": "Long Dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-131",
    "name": "Navy Open Abaya and Denim Set",
    "description": "Navy open abaya, white fitted top, light blue wide-leg jeans, white sneakers, designer shoulder bag, and gold accessories",
    "image": "/Cool Winter/Modest/2.jpg",
    "colors": [
      "#e6e6e6",
      "#c5af7f",
      "#24242c",
      "#445c74",
      "#90a0b6",
      "#b7c8d4"
    ],
    "keywords": [
      "modest","abaya", "denim", "wide-leg-jeans", "sneakers", "shoulder bag", "gold"
    ],
    "category": "Abayah",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-132",
    "name": "Powder Blue Abaya Set",
    "description": "Powder blue abaya with matching scarf, mint loafers, embellished mini bag, and delicate gold jewelry.",
    "image": "/Cool Winter/Modest/3.jpg",
    "colors": [
      "#e9f1f5",
      "#67788c",
      "#abc8e7",
      "#41566b",
      "#9ea39c",
      "#d1c5b2"
    ],
    "keywords": [
      "modest", "abaya", "scarf", "loafers", "mini bag", "gold"
    ],
    "category": "Abayah",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-133",
    "name": "Blush Floral Dress Set",
    "description": "Floral maxi dress, matching chiffon scarf, quilted crossbody bag, and block heel sandals.",
    "image": "/Cool Winter/Modest/4.jpg",
    "colors": [
      "#f1d0cb",
      "#caaf9a",
      "#fcf3f0",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest","dress", "scarf", "crossbody bag", "block heel sandals"
    ],
    "category": "Long Dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-134",
    "name": "Blue Floral Dress and Wide-Leg Pants Set",
    "description": "ight blue floral dress over white wide-leg pants, matching mini bag, block heel sandals and  accessories.",
    "image": "/Cool Winter/Modest/5.jpeg",
    "colors": [
      "#d1ddea",
      "#97b2d3",
      "#d1a4a7",
      "#8f623e",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest", "dress", "wide-leg pants", "mini bag", "block heel sandals"
    ],
    "category": "",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-135",
    "name": "Powder Blue Button-Down Midi Dress ",
    "description": "Elegant blue dress with pink heels ,white handbag and pearl accessories.",
    "image": "/Cool Winter/Modest/6.jpeg",
    "colors": [
      "#eaeeef",
      "#b7c1d0",
      "#82a0b5",
      "#f0c12b",
      "#f0e1ba",
      "#dfb39a"
    ],
    "keywords": [
      "modest", "dress", "pink heels", "handbag", "pearl accessories"
    ],
    "category": "midi dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-136",
    "name": "Embroidered Tunic with Wide-Leg Jeans",
    "description": "Floral embroidered tunic with jeans, sneakers, and gold accessories.",
    "image": "/Cool Winter/Modest/7.jpg",
    "colors": [
      "#ecf1f2",
      "#e4d9c4",
      "#9fb3c2",
      "#799da0",
      "#a6a37f",
      "#ffffff"
    ],
    "keywords": [
      "modest"," tunic", "jeans", "sneakers", "gold accessories"
    ],
    "category": "Kurti-jeans",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-137",
    "name": "Pink Floral Gown",
    "description": " Pink floral gown styled with bow heels, a pearl set, a pastel bag, and a satin hair bow.",
    "image": "/Cool Winter/Party/1.jpeg",
    "colors": [
      "#edeae8",
      "#e2c7c5",
      "#b99c88",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "party","gown", "bow heels", "pearl set", "pastel bag", "satin hair bow"
    ],
    "category": "Gown",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-138",
    "name": "Navy Satin & Embroidered Gown",
    "description": "Elegant navy satin dress paired with a beige embroidered duster",
    "image": "/Cool Winter/Party/2.jpg",
    "colors": [
      "#e5e2de",
      "#948e81",
      "#c6b9a9",
      "#2d344f",
      "#65533c",
      "#716d6d"
    ],
    "keywords": [
      "party","gown", "satin", "embroidered duster", "beige"
    ],
    "category": "",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-139",
    "name": "Blue Floral Skirt Outfit",
    "description": " Soft outfit featuring a white puff-sleeve blouse, blue floral skirt, and pastel accessories for a fresh, feminine look.",
    "image": "/Cool Winter/Party/3.jpg",
    "colors": [
      "#e5e5e5",
      "#a9b3bd",
      "#7697b8",
      "#dccab4",
      "#6a7c8d",
      "#ffffff"
    ],
    "keywords": [
      "party", "skirt", "puff-sleeve blouse", "pastel accessories"
    ],
    "category": "skirt-set",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-140",
    "name": "Cream & Navy Winter Chic",
    "description": "A chic winter look featuring a cream turtleneck and pleated skirt, styled with navy accessories and cream loafers for a polished, cozy vibe",
    "image": "/Cool Winter/Party/4.jpg",
    "colors": [
      "#e9e1ce",
      "#3e4566",
      "#ab866e",
      "#6f5a43",
      "#5a6785",
      "#172a4f"
    ],
    "keywords": [
      "party", "turtleneck", "pleated skirt", "navy accessories", "cream loafers"
    ],
    "category": "smart casual",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-141",
    "name": "Navy & Ivory Elegant Ensemble",
    "description": "An elegant and refined outfit combining a silky ivory blouse with voluminous sleeves and a flowing navy A-line skirt. Accented with gold and blue jewelry,",
    "image": "/Cool Winter/Party/5.jpg",
    "colors": [
      "#cccccc",
      "#f8f4ee",
      "#292f44",
      "#4b526a",
      "#aeafae",
      "#918779"
    ],
    "keywords": [
      "party","elegant", "ivory blouse", "voluminous sleeves", "navy A-line skirt", "gold and blue jewelry"
    ],
    "category": "maxi dress",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-142",
    "name": "Dusty Rose Satin Wrap Dress Look",
    "description": "A sophisticated and romantic outfit featuring a dusty rose satin wrap dress with asymmetrical hemline and gathered details. Paired with sleek black stiletto heels and a structured black handbag",
    "image": "/Cool Winter/Party/6.jpeg",
    "colors": [
      "#dedede",
      "#97626c",
      "#c58b91",
      "#d6c296",
      "#693b3f",
      "#2f2f2f"
    ],
    "keywords": [
      "party","wrap dress", "gown", "black stiletto heels", "structured black handbag"
    ],
    "category": "wrap dress",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-143",
    "name": "Modern Desi Fusion Look",
    "description": "A bold Desi fusion look combining traditional jewelry and prints with contemporary layering and accessories—perfect for the modern cultural muse.",
    "image": "/Cool Winter/Streetwear/1.jpg",
    "colors": [
      "#162635",
      "#6b5136",
      "#3f4950",
      "#637074",
      "#959487",
      "#f1f0f5"
    ],
    "keywords": [
      "streetwear","fusion", "traditional jewelry", "contemporary layering", "accessories"
    ],
    "category": "fusion-dress",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-144",
    "name": "Casual Chic Daywear",
    "description": "A light and airy casual outfit blending boho embroidery with modern staples—ideal for an easygoing, stylish day out",
    "image": "/Cool Winter/Streetwear/2.jpg",
    "colors": [
      "#cdcfd0",
      "#ebeced",
      "#162a3f",
      "#a4a8b3",
      "#616479",
      "#768799"
    ],
    "keywords": [
      "streetwear","boho", "embroidery", "modern staples", "stylish day out"
    ],
    "category": "casual",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-145",
    "name": "Effortless Street Chic",
    "description": "A crisp and trendy street style outfit featuring layering, light denim, and sleek white accessories for a clean, polished everyday look.",
    "image": "/Cool Winter/Streetwear/3.jpg",
    "colors": [
      "#eceff3",
      "#b6ccec",
      "#444b52",
      "#a6a7ae",
      "#797a81",
      "#ffffff"
    ],
    "keywords": [
      "streetwear","trendy", "street style", "layering", "light denim", "white accessories"
    ],
    "category": "casual top",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-146",
    "name": "Sporty Casual Cool",
    "description": "A sporty yet chic casual look with cool blue hues, perfect for relaxed everyday wear.",
    "image": "/Cool Winter/Streetwear/4.jpg",
    "colors": [
      "#cccac8",
      "#efefee",
      "#7a777e",
      "#8694a6",
      "#f7d995",
      "#1a1818"
    ],
    "keywords": [
      "streetwear","sporty", "casual", "blue hues", "relaxed everyday wear"
    ],
    "category": "causal",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-147",
    "name": " Urban Street Style",
    "description": "A breezy boho look with a paisley peplum top, perfect for relaxed, artsy summer days.",
    "image": "/Cool Winter/Streetwear/5.jpg",
    "colors": [
      "#f7f5f0",
      "#b3b3a4",
      "#64574b",
      "#acbcd5",
      "#829b99",
      "#d4dbce"
    ],
    "keywords": [
      "streetwear","boho", "paisley", "peplum top", "relaxed", "artsy summer days"
    ],
    "category": "casual kurti jaeans",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "cool-winter"
    ]
  },
  {
    "id": "item-148",
    "name": "Cottagecore Cozy",
    "description": "Cozy cottagecore look with mushroom details and soft flannel, perfect for fall days",
    "image": "/Deep Autumn/Casual/1.jpg",
    "colors": [
      "#ebe8e3",
      "#2f1d10",
      "#5c544b",
      "#c7b2a2",
      "#7c7368",
      "#ffffff"
    ],
    "keywords": [
      "casual"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-149",
    "name": "Emerald Street Chic",
    "description": "A smart-casual city look with a forest green palette, gold accessories, and wide-leg denim.",
    "image": "/Deep Autumn/Casual/2.jpg",
    "colors": [
      "#ddd0c6",
      "#87643a",
      "#eef1f0",
      "#17332c",
      "#a9b0ae",
      "#8e7e7e"
    ],
    "keywords": [
      "casual","street chic"
    ],
    "category": "smart-casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-150",
    "name": "Cozy Street Minimal",
    "description": "Effortless cozy casual with a burnt orange top, light denim, and sporty sneakers.",
    "image": "/Deep Autumn/Casual/3.jpeg",
    "colors": [
      "#d6d6d6",
      "#f7f6f0",
      "#1c1b20",
      "#c26038",
      "#97877a",
      "#6c4c3b"
    ],
    "keywords": [
      "casual","street chic"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-151",
    "name": "Smart Retro Casua",
    "description": "Retro meets polish with flared corduroys, a striped shirt, and sporty sneakers.",
    "image": "/Deep Autumn/Casual/4.jpg",
    "colors": [
      "#efeded",
      "#c5c7cf",
      "#989697",
      "#493328",
      "#8c4d30",
      "#1e1713"
    ],
    "keywords": [
      "casual","street chic"
    ],
    "category": "smart-casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-152",
    "name": "Elegant Ethnic Fusion",
    "description": "Gold brocade jumpsuit with traditional accessories for a rich, festive ethnic fusion look.",
    "image": "/Deep Autumn/Ethnic/1.jpg",
    "colors": [
      "#f3f1ef",
      "#bfae9b",
      "#e9dabd",
      "#9f785e",
      "#566d56",
      "#295624"
    ],
    "keywords": [
      "ethnic","jumpsuit","brocade","gold","traditional","festive"
    ],
    "category": "festive jumpsuit",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-153",
    "name": "Maroon sharara set",
    "description": "Crimson sharara with luxe accessories for a bold and elegant festive statement.",
    "image": "/Deep Autumn/Ethnic/2.jpg",
    "colors": [
      "#ebe6e7",
      "#545454",
      "#9a886f",
      "#b1a49f",
      "#dfc1a2",
      "#912133"
    ],
    "keywords": [
      "ethnic","sharara","crimson","luxe","bold","elegant","festive"
    ],
    "category": "sharara-set",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-154",
    "name": "Emerald Saree",
    "description": "Lustrous emerald saree look with elegant accessories for refined evening charm.",
    "image": "/Deep Autumn/Ethnic/3.jpg",
    "colors": [
      "#d0d0d0",
      "#ecb178",
      "#f4f0e9",
      "#9f5933",
      "#574d44",
      "#352e2c"
    ],
    "keywords": [
      "ethnic","emerald","saree","elegant","refined","evening"
    ],
    "category": "",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-155",
    "name": "Red sharara set",
    "description": "Crimson sharara with luxe accessories for a bold and elegant festive statement.",
    "image": "/Deep Autumn/Ethnic/4.jpg",
    "colors": [
      "#e3d5d7",
      "#8e1b2f",
      "#ccbea3",
      "#6f5d46",
      "#a59581",
      "#443a3d"
    ],
    "keywords": [
      "ethnic","sharara","crimson","luxe","bold","elegant","festive"
    ],
    "category": "",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-156",
    "name": "Rust Charm Kurta Set",
    "description": "Rust-toned kurta set paired with silver jhumkas and gajra-accented hair for a graceful ethnic vibe.",
    "image": "/Deep Autumn/Ethnic/5.jpg",
    "colors": [
      "#ecdbc7",
      "#a14f43",
      "#c56e60",
      "#8c8981",
      "#7f3028",
      "#67655f"
    ],
    "keywords": [
      "ethnic","kurta","rust","silver","jhumkas","gajra"
    ],
    "category": "kurta-set",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-158",
    "name": "deep green sharara set",
    "description": "Elegant emerald green sharara with statement kundan earrings and earthy-toned makeup for festive flair.",
    "image": "/Deep Autumn/Formal/1.jpeg",
    "colors": [
      "#e5e5e5",
      "#4f403a",
      "#c8c3c3",
      "#211916",
      "#baa079",
      "#535c68"
    ],
    "keywords": [
      "formal","sharara","emerald","kundan","earrings","earthy","festive"
    ],
    "category": "sharara-set",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-159",
    "name": "brown and grey layered look",
    "description": "Layered brown and grey casual look with sneakers and minimal accessories for chic cold-weather style.",
    "image": "/Deep Autumn/Formal/2.jpeg",
    "colors": [
      "#f1eeeb",
      "#3c3332",
      "#67605e",
      "#959287",
      "#b6b1ad",
      "#2d0c14"
    ],
    "keywords": [
      "formal"
    ],
    "category": "",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-160",
    "name": "taupe trenched coat",
    "description": "Neutral-toned, luxe loungewear look with taupe outerwear and cozy accessories for elegant everyday comfort.",
    "image": "/Deep Autumn/Formal/3.jpeg",
    "colors": [
      "#a8a3a5",
      "#96867a",
      "#6d6259",
      "#473f3d",
      "#9b7848",
      "#e8c688"
    ],
    "keywords": [
      "formal","loungewear","taupe","outerwear","cozy","elegant"
    ],
    "category": "formal-wear",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-161",
    "name": "chocolate brown  blazer power set",
    "description": "Chocolate brown power set with a strapless top and nude heels, perfect for elegant evenings or stylish formal events.",
    "image": "/Deep Autumn/Formal/4.jpeg",
    "colors": [
      "#f3f1ee",
      "#4a352b",
      "#b3b1b5",
      "#6c5243",
      "#998577",
      "#e2d6c6"
    ],
    "keywords": [
      "formal","blazer","power set","strapless top","nude heels","elegant"
    ],
    "category": "formal-wear",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-162",
    "name": "Cream & Cocoa Elegance Set",
    "description": "Elegant cream and cocoa outfit with a belted blazer and pencil skirt, perfect for formal occasions and polished daywear.",
    "image": "/Deep Autumn/Formal/5.jpeg",
    "colors": [
      "#f3f3ec",
      "#d5cfbf",
      "#42281c",
      "#c1a381",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal","blazer","pencil skirt","elegant"
    ],
    "category": "formal-wear",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-163",
    "name": " Trench Coat Ensemble",
    "description": "Timeless trench coat and navy top ensemble with gold accents and ballet flats—perfect for elegant city wear.",
    "image": "/Deep Autumn/Formal/6.jpg",
    "colors": [
      "#ededee",
      "#c1ab8c",
      "#605d57",
      "#968267",
      "#633d2e",
      "#212026"
    ],
    "keywords": [
      "formal","trench coat","ensemble","navy top","gold accents","ballet flats"
    ],
    "category": "",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-164",
    "name": "Burgundy Power Chic Set",
    "description": "grey power suit with a burgundy halter top and luxe accessories for an elevated business-to-evening look.",
    "image": "/Deep Autumn/Formal/7.jpeg",
    "colors": [
      "#dbdbdb",
      "#706f74",
      "#554f44",
      "#252528",
      "#aaa3a1",
      "#5c1019"
    ],
    "keywords": [
      "formal","power suit","burgundy","halter top","luxe accessories"
    ],
    "category": "blazer",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-165",
    "name": "chocloate blazer and trousers",
    "description": "Elegant houndstooth jumpsuit with a mocha blazer and chic accessories for sophisticated professional flair.",
    "image": "/Deep Autumn/Formal/8.jpg",
    "colors": [
      "#e8e8e8",
      "#523e35",
      "#857a76",
      "#b39882",
      "#afafb3",
      "#261f21"
    ],
    "keywords": [
      "formal","houndstooth","jumpsuit","mocha","blazer","chic accessories"
    ],
    "category": "jumpsuit",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-166",
    "name": " Modest Autumn Chic",
    "description": "Chic boho outfit with a crochet vest, tiered brown skirt, and vintage accessories for a cozy and stylish everyday look.",
    "image": "/Deep Autumn/Modest/1.jpg",
    "colors": [
      "#ecebea",
      "#47322b",
      "#cabbaa",
      "#604e4d",
      "#a99d90",
      "#211816"
    ],
    "keywords": [
      "modest","boho","crochet","vest","tiered skirt","vintage accessories"
    ],
    "category": "western",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-167",
    "name": "Black midi dress",
    "description": "Elegant black midi dress with gold jewelry, block heels, and a structured brown bag for a timeless and polished look.",
    "image": "/Deep Autumn/Modest/2.jpeg",
    "colors": [
      "#ececec",
      "#232124",
      "#767072",
      "#ddca9d",
      "#4e4746",
      "#54301a"
    ],
    "keywords": [
      "modest","midi dress","gold jewelry","block heels","structured brown bag"
    ],
    "category": "",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-168",
    "name": " modest skirt set",
    "description": "A refined and modest outfit combining a soft cream button-up blouse with a flowing cocoa brown maxi skirt.",
    "image": "/Deep Autumn/Modest/3.jpg",
    "colors": [
      "#efefe8",
      "#b6ac9e",
      "#624c40",
      "#d9d2c2",
      "#392921",
      "#80756a"
    ],
    "keywords": [
      "modest","skirt set","refined","cream blouse","cocoa brown maxi skirt"
    ],
    "category": "skirt set",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-169",
    "name": "Denim skirt and top",
    "description": "Chunky knit sweater and denim skirt with gold accessories and sneakers for a cozy, modest everyday look.",
    "image": "/Deep Autumn/Modest/4.jpeg",
    "colors": [
      "#f0f0f0",
      "#45322c",
      "#655047",
      "#918680",
      "#5c6b7b",
      "#181819"
    ],
    "keywords": [
      "modest","chunky knit","sweater","denim skirt","gold accessories","sneakers"
    ],
    "category": "modest",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-170",
    "name": "denim skirt and top",
    "description": "Chunky knit sweater and denim skirt with gold accessories and sneakers for a cozy, modest everyday look.",
    "image": "/Deep Autumn/Modest/5.jpg",
    "colors": [
      "#f0f0f0",
      "#47332c",
      "#8f8780",
      "#665147",
      "#231714",
      "#5c697b"
    ],
    "keywords": [
      "modest"
    ],
    "category": "modest",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-171",
    "name": "Olive green maxi dress",
    "description": "live maxi dress with brown accessories and gold details for an elegant modest evening look.",
    "image": "/Deep Autumn/Modest/6.jpg",
    "colors": [
      "#e5e5e5",
      "#c4bdaa",
      "#aca484",
      "#716b47",
      "#4b4938",
      "#81817b"
    ],
    "keywords": [
      "modest","maxi dress","brown accessories","gold details"
    ],
    "category": "maxi dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-172",
    "name": "beige and brown abaya set",
    "description": "Taupe jumpsuit with ivory abaya and neutral accessories for an effortlessly chic modest daytime look.",
    "image": "/Deep Autumn/Modest/7.jpg",
    "colors": [
      "#d4c4b5",
      "#f1efed",
      "#a18577",
      "#806452",
      "#b7a996",
      "#4f2f1a"
    ],
    "keywords": [
      "modest","abaya","taupe","jumpsuit","ivory","neutral accessories"
    ],
    "category": "modest",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-173",
    "name": "black abaya set",
    "description": "A minimalist black abaya with a black scarf and gold accessories for a chic and elegant modest look.",
    "image": "/Deep Autumn/Modest/8.jpg",
    "colors": [
      "#e9e9e9",
      "#1b1b1b",
      "#6e6c67",
      "#53443c",
      "#e8d296",
      "#85523d"
    ],
    "keywords": [
      "modest","abaya","black","scarf","gold accessories"
    ],
    "category": "abayas",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-174",
    "name": " brown skirt set",
    "description": "  A chic and modest outfit featuring a soft brown skirt set with a matching scarf, perfect for elegant autumn days.",
    "image": "/Deep Autumn/Modest/9.jpg",
    "colors": [
      "#f8f5f0",
      "#795d52",
      "#443024",
      "#9d806b",
      "#c8b790",
      "#e9d6a9"
    ],
    "keywords": [
      "modest","skirt set","matching scarf","elegant autumn days"
    ],
    "category": "skirt set",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-175",
    "name": "brown midi dress",
    "description": "Vintage-inspired brown dress styled with black heels, a black bag, and gold jewelry for a refined, elegant look.",
    "image": "/Deep Autumn/Party/1.jpeg",
    "colors": [
      "#e5e5e5",
      "#654430",
      "#efe8ae",
      "#696260",
      "#39241a",
      "#9d9e9c"
    ],
    "keywords": [
      "party","midi dress","vintage-inspired","black heels","black bag","gold jewelry"
    ],
    "category": "midi dress",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-176",
    "name": "Boho Floral Dress",
    "description": "Floral boho dress paired with luxe gold accessories and block heels for an effortlessly elegant warm-weather look",
    "image": "/Deep Autumn/Party/2.jpg",
    "colors": [
      "#e0e2e1",
      "#bfb8a3",
      "#958567",
      "#69614e",
      "#c9a169",
      "#292723"
    ],
    "keywords": [
      "party","boho","floral dress","luxe gold accessories","block heels"
    ],
    "category": "causal",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-177",
    "name": "Retro-Chic Brown Set ",
    "description": "A vintage-inspired brown ensemble with bold accessories and platform boots for a chic and confident retro look.",
    "image": "/Deep Autumn/Party/3.jpeg",
    "colors": [
      "#f2f0ee",
      "#bdbdb2",
      "#a18a6e",
      "#826658",
      "#5a312b",
      "#f6c987"
    ],
    "keywords": [
      "party","retro","chic","brown ensemble","bold accessories","platform boots"
    ],
    "category": "retro-look",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-178",
    "name": "Elegant Emerald Peplum & Black Skirt",
    "description": "  A sophisticated emerald peplum top paired with a black skirt and chic accessories for a polished evening look.",
    "image": "/Deep Autumn/Party/4.jpg",
    "colors": [
      "#e9e9e9",
      "#0b302f",
      "#d5bfa2",
      "#6f8887",
      "#a09875",
      "#3a4847"
    ],
    "keywords": [
      "party","elegant","emerald peplum","black skirt","chic accessories"
    ],
    "category": "formal",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-179",
    "name": "Bold Print Midi Skirt & Black Wrap Top",
    "description": "  A chic outfit featuring a bold print midi skirt paired with a black wrap top and statement accessories for a stylish evening look.",
    "image": "/Deep Autumn/Party/5.jpg",
    "colors": [
      "#e0e0df",
      "#181816",
      "#ccc4b3",
      "#7e7e7e",
      "#4a4137",
      "#8d654d"
    ],
    "keywords": [
      "party","bold print","midi skirt","black wrap top"
    ],
    "category": "skirt set",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-180",
    "name": "Green top and white flared pants",
    "description": "Boho-inspired green celestial top and flared white pants combo with chic accessories for a laid-back daytime look.",
    "image": "/Deep Autumn/Streetwear/1.jpg",
    "colors": [
      "#dedfda",
      "#7c8261",
      "#919991",
      "#334e35",
      "#bcbebb",
      "#4c6e54"
    ],
    "keywords": [
      "streetwear"
    ],
    "category": "boho",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-181",
    "name": "Green top and white flared pants",
    "description": "Boho-inspired green celestial top and flared white pants combo with chic accessories for a laid-back daytime look.",
    "image": "/Deep Autumn/Streetwear/2.jpg",
    "colors": [
      "#dedfda",
      "#7c8261",
      "#919991",
      "#334e35",
      "#bcbebb",
      "#4c6e54"
    ],
    "keywords": [
      "streetwear","boho"
    ],
    "category": "boho",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-182",
    "name": "Leopard Print Wide-Leg Pants & Tan Wrap Top Look",
    "description": "Leopard wide-leg pants and a tan wrap top paired with gold accessories and a woven handbag for luxe summer chic.",
    "image": "/Deep Autumn/Streetwear/3.jpg",
    "colors": [
      "#dbcbbe",
      "#b99980",
      "#373b3d",
      "#ebd186",
      "#605b3f",
      "#98755d"
    ],
    "keywords": [
      "streetwear","leopard print","wide-leg pants","tan wrap top","gold accessories"
    ],
    "category": "casual",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-183",
    "name": "desi denim fusion look",
    "description": "Light-wash wide-leg jeans styled with a mustard paisley top and ethnic accessories for a desi-denim fusion look.",
    "image": "/Deep Autumn/Streetwear/4.jpg",
    "colors": [
      "#e2e8e9",
      "#b8c2cb",
      "#8b7458",
      "#86572e",
      "#93a8b2",
      "#a38885"
    ],
    "keywords": [
      "streetwear","desi","denim","fusion look"
    ],
    "category": "desi denim",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-184",
    "name": "green kurti with denim",
    "description": "Teal floral smock kurta with straight jeans and silver accessories for a relaxed Indo-western day look.",
    "image": "/Deep Autumn/Streetwear/5.jpg",
    "colors": [
      "#f2f1f0",
      "#937761",
      "#c77967",
      "#739d94",
      "#7a4c31",
      "#e4a57b"
    ],
    "keywords": [
      "streetwear","kurti","denim","smock kurta","straight jeans","silver accessories"
    ],
    "category": "indowestern",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "deep-autumn"
    ]
  },
  {
    "id": "item-185",
    "name": "Black leather jacket and high-waisted jeans",
    "description": "Edgy-chic black leather blazer with flared jeans and burgundy accents—perfect for a stylish night out.",
    "image": "/Deep Winter/Casual/1.jpeg",
    "colors": [
      "#e5e5e5",
      "#2c2c2c",
      "#828282",
      "#4e4e4e",
      "#ba8f75",
      "#ffffff"
    ],
    "keywords": [
      "casual","streetwear"
    ],
    "category": "streetwear",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-186",
    "name": "navy blue sweatshirt and jeans",
    "description": " Casual navy blue sweatshirt paired with light jeans and white sneakers for a relaxed everyday look.",
    "image": "/Deep Winter/Casual/10.jpeg",
    "colors": [
      "#dfdfdf",
      "#3e445f",
      "#f4e8a8",
      "#5f6480",
      "#a6bbc8",
      "#939393"
    ],
    "keywords": [
      "casual","streetwear"
    ],
    "category": "sweatshirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-187",
    "name": " black swaeater and jeans",
    "description": "  Casual black sweater paired with light jeans , white sneakers and burgundy bag for a relaxed everyday look.",
    "image": "/Deep Winter/Casual/11.jpeg",
    "colors": [
      "#d8d8d8",
      "#161618",
      "#334152",
      "#44668c",
      "#ae7d5e",
      "#5a0918"
    ],
    "keywords": [
      "casual","streetwear","jeans"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-188",
    "name": "Navy blue floral skirt set",
    "description": "Elegant casual ensemble featuring a fitted navy blue long-sleeve crop top paired with a  white maxi skirt with navy floral print ",
    "image": "/Deep Winter/Casual/12.jpeg",
    "colors": [
      "#f0f0f0",
      "#2c3d53",
      "#646d76",
      "#101c2c",
      "#d7d5c8",
      "#a4a5a8"
    ],
    "keywords": [
      "casual","maxi skirt","floral print"
    ],
    "category": "maxi skirt",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-189",
    "name": "burgundy and beige outfit",
    "description": " A burgundy shirt paired with a beige tank top and matching trousers accessorized with baseball-cap and sneakers for a chic casual look.",
    "image": "/Deep Winter/Casual/13.jpeg",
    "colors": [
      "#e1e1e1",
      "#3b1a1b",
      "#7f6f68",
      "#bdb0a7",
      "#7e3543",
      "#a19083"
    ],
    "keywords": [
      "casual","casual outfit","burgundy shirt","beige tank top","matching trousers"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-190",
    "name": "navy blue and white outfit",
    "description": "A navy blue sweater and white wide-leg trousers paired with black sneakers and a bag",
    "image": "/Deep Winter/Casual/14.jpeg",
    "colors": [
      "#eceee9",
      "#54556b",
      "#202334",
      "#d4d1c8",
      "#47423e",
      "#a19b95"
    ],
    "keywords": [
      "casual","casual outfit","navy blue sweater","white wide-leg trousers"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-191",
    "name": "Retro stipe outfit a casual outfit with a sweaterand a wide leg denim jeans paired with red handbag ,golden hoops earings, watch and black sneakers",
    "description": "",
    "image": "/Deep Winter/Casual/15.jpeg",
    "colors": [
      "#f0c6c4",
      "#f5f3ed",
      "#d85256",
      "#f57283",
      "#4f7a9b",
      "#2e5475"
    ],
    "keywords": [
      "casual","retro"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-192",
    "name": "navy blue trouser shirt set",
    "description": "Sophisticated casual outfit featuring a ribbed navy blue cardigan paired with wide-leg dark denim jeans. Complemented by rich brown leather ankle boots with block heels and bag",
    "image": "/Deep Winter/Casual/16.jpeg",
    "colors": [
      "#bcc0c5",
      "#364151",
      "#626874",
      "#a5927c",
      "#1c2232",
      "#593726"
    ],
    "keywords": [
      "casual","trouser shirt set"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-193",
    "name": "Cream skirt set",
    "description": "an elegant cream skirt set with a brown scarf,bag ,boots along with golden jwelery perfect for chic and sophisticated autumn days.",
    "image": "/Deep Winter/Casual/17.jpg",
    "colors": [
      "#e7e6e4",
      "#bcb9b4",
      "#644f41",
      "#918265",
      "#301c0d",
      "#ffffff"
    ],
    "keywords": [
      "casual","skirt set","cream","brown scarf","bag","boots","golden jewelry"
    ],
    "category": "midi dress",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-194",
    "name": "navy blue crop and balck trouser set",
    "description": "a navy blue long sleve crop and high waisted black trouser paired with black heels, burgundy bag and golden accessories for a chic and sophisticated look.",
    "image": "/Deep Winter/Casual/18.jpeg",
    "colors": [
      "#e6e6e6",
      "#29324d",
      "#9ea2b0",
      "#76262d",
      "#1e1e1e",
      "#58595e"
    ],
    "keywords": [
      "casual","trouser set","navy blue","crop top","black trouser","black heels"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-195",
    "name": "vlack treanch coat and denim set",
    "description": "black trench coat and deinm pants paired with black leather boots with matching leather bag along with a perfume.",
    "image": "/Deep Winter/Casual/2.jpg",
    "colors": [
      "#c6c6c7",
      "#17161a",
      "#77818b",
      "#373739",
      "#f0f0f0",
      "#859eb6"
    ],
    "keywords": [
      "casual","csual outfit","black trench coat","denim pants","black leather boots"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-196",
    "name": "Black knit sweater with wide-leg jeans outfit",
    "description": "Casual chic outfit featuring a black chunky knit sweater paired with light wash wide-leg jeans. Accessorized with white New Balance sneakers, a black shoulder bag, gold jewelry and a black sunglasses",
    "image": "/Deep Winter/Casual/3.jpeg",
    "colors": [
      "#bbbbba",
      "#767676",
      "#f5f5f0",
      "#212120",
      "#e7dec4",
      "#91a1a6"
    ],
    "keywords": [
      "casual","casual outfit","black knit sweater","wide-leg jeans","white sneakers"
    ],
    "category": "causal",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-197",
    "name": "cream top and wide-leg jeans",
    "description": "Preppy cream varsity cardigan, wide-leg jeans, black sneakers and tote with gold accessories.",
    "image": "/Deep Winter/Casual/4.jpeg",
    "colors": [
      "#f3eee0",
      "#a19f96",
      "#827f76",
      "#4a6383",
      "#333134",
      "#ffffff"
    ],
    "keywords": [
      "casual","casual outfit","cream top","wide-leg jeans","black sneakers"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-198",
    "name": "cream cardigan and black trousers",
    "description": "Cream varsity cardigan, black wide-leg trousers, pointed heels, structured clutch and gold jewelry.",
    "image": "/Deep Winter/Casual/5.jpeg",
    "colors": [
      "#f0efe2",
      "#c6c4b9",
      "#242021",
      "#87847c",
      "#655435",
      "#a0a0a0"
    ],
    "keywords": [
      "casual","casual outfit","cream cardigan","black trousers","pointed heels"
    ],
    "category": "",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-199",
    "name": "pink leather jacket and jeans",
    "description": "Pink leather jacket paired with white top, wide-leg jeans, burgundy heels and black tote",
    "image": "/Deep Winter/Casual/6.jpg",
    "colors": [
      "#e9e9e9",
      "#c98c91",
      "#6f5a5e",
      "#39383c",
      "#a96f75",
      "#8590a1"
    ],
    "keywords": [
      "casual","casual outfit","pink leather jacket","white top","wide-leg jeans"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-200",
    "name": "Navy blue sweater and cream pants",
    "description": "Navy striped sweater paired with cream wide-leg pants, gray sneakers, white handbag and gold accessories.",
    "image": "/Deep Winter/Casual/7.jpeg",
    "colors": [
      "#e0ddd6",
      "#1a1f29",
      "#374051",
      "#61656c",
      "#93979b",
      "#c4bdae"
    ],
    "keywords": [
      "casual","casual outfit","navy blue sweater","cream pants","gray sneakers"
    ],
    "category": "casual",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-416",
    "name": "Chunky Knit Cropped Cardigan",
    "description": "A cozy, oversized beige cropped cardigan featuring chunky knit texture and large buttons. Perfect for layering in cool weather.",
    "image": "/Soft Summer/Casual/14.jpeg",
    "colors": [
      "#e5e5e5",
      "#d4bca4",
      "#bc9b84",
      "#8597a7",
      "#a4b9c9",
      "#626d79"
    ],
    "keywords": [
      "casual","cropped cardigan", "beige", "chunky knit", "casual", "cozy", "button-up"
    ],
    "category": "casualwear",
    "styleCategories": [
      "casual", "modest", "trendy"
    ],
    "seasons": [
      "soft-summer","cool-winter", "cool-summer",  
    ]
  },
  {
    "id": "item-417",
    "name": "Ribbed Mock Neck Green Sweater",
    "description": "A relaxed-fit, ribbed knit sweater in a vibrant green shade, featuring a mock neck and dropped shoulders for a cozy, stylish look",
    "image": "/Soft Summer/Casual/15.jpeg",
    "colors": [
      "#e1e2e3",
      "#5f906d",
      "#d6c5aa",
      "#7aad8c",
      "#3e694a",
      "#5f0c0c"
    ],
    "keywords": [
      "casual", "knitwear", "relaxed fit", "cozy"
    ],
    "category": "tops",
    "styleCategories": [
      "casual","modest", "chic"
    ],
    "seasons": [
      "soft-summer", , "light-spring"
    ]
  },
  {
    "id": "item-418",
    "name": "White Long-Sleeve Cropped Top",
    "description": "A sleek and minimalistic long-sleeve crop top in white, made from a stretch-fit fabric, perfect for layering or wearing on its own for a clean, sporty-chic look",
    "image": "/Soft Summer/Casual/16.jpeg",
    "colors": [
      "#c9c5b9",
      "#e6e8e5",
      "#a8939c",
      "#9b7e6c",
      "#64464b",
      "#ffffff"
    ],
    "keywords": [
      "casual","cropped top", "white", "long sleeve"
    ],
    "category": "casualwear",
    "styleCategories": [
      "casual","athleisure", "minimalist", "modern"
    ],
    "seasons": [
      "soft-summer","clear-spring", "light-summer",  
    ]
  },
  {
    "id": "item-419",
    "name": "Olive Green Streetwear Set",
    "description": "A casual olive and black outfit with a cropped top, wide-leg jeans, and matching sneakers.",
    "image": "/Soft Summer/Casual/17.jpg",
    "colors": [
      "#f2e9dd",
      "#c7c9ba",
      "#555f46",
      "#828977",
      "#353d31",
      "#a4a395"
    ],
    "keywords": [
      "casual","streetwear", "olive green", "wide-leg jeans", "cropped top"
    ],
    "category": "casualwear",
    "styleCategories": [
      "casual","urban", "minimalist"
    ],
    "seasons": [
      "soft-summer", , "clear-spring"
    ]
  },
  {
    "id": "item-420",
    "name": "Soft Floral Spring Set",
    "description": "A light green floral skirt with a chunky white sweater and soft-toned accessories.",
    "image": "/Soft Summer/Casual/18.jpg",
    "colors": [
      "#f1f2ec",
      "#c6cbaf",
      "#afac8b",
      "#979a62",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual", "feminine", "soft style", "floral"
    ],
    "category": "casualwear",
    "styleCategories": [
      "casual","soft"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring"
    ]
  },
  {
    "id": "item-421",
    "name": "Cozy Burgundy Casual Set",
    "description": "A comfy burgundy sweater paired with wide-leg denim and fresh white sneakers.",
    "image": "/Soft Summer/Casual/2.jpg",
    "colors": [
      "#e5e5e5",
      "#48151d",
      "#a19392",
      "#d4cab4",
      "#4d5862",
      "#63788e"
    ],
    "keywords": [
      "casual","burgundy sweater", "wide-leg jeans", "white sneakers", "cozy"
    ],
    "category": "modestwear",
    "styleCategories": [
      "casual","comfortable"
    ],
    "seasons": [
      "soft-summer", "soft-autumn", "light-spring"
    ]
  },
  {
    "id": "item-422",
    "name": "Blue Chic Crop Top",
    "description": "A stylish blue crop top with a sleeveless design, featuring a round neckline and a fitted silhouette. Perfect for casual wear",
    "image": "/Soft Summer/Casual/3.jpg",
    "colors": [
      "#e5e5e5",
      "#6a879e",
      "#a7b7c0",
      "#414c5f",
      "#b18d75",
      "#d6cabc"
    ],
    "keywords": [
      "casual"
    ],
    "category": "tops",
    "styleCategories": [
      "casual","summer", "trendy"
    ],
    "seasons": [
      "soft-summer","light-summer", "cool-summer"
    ]
  },
  {
    "id": "item-423",
    "name": "Striped Knit Poncho & Burgundy-Chic Ensemble",
    "description": "A chic layered outfit with a striped poncho, burgundy halter top, wide-leg cream trousers, and matching burgundy accessories.",
    "image": "/Soft Summer/Casual/4.jpg",
    "colors": [
      "#eeeaeb",
      "#917d6c",
      "#4d1a26",
      "#aa9c93",
      "#d7c6b3",
      "#675b4b"
    ],
    "keywords": [
      "casual","layered outfit","modern elegant","statement sweater"
    ],
    "category": "outfits",
    "styleCategories": [
      "casual","modern elegant"
    ],
    "seasons": [
      "soft-summer", "soft-autumn", "light-spring"
    ]
  },
  {
    "id": "item-424",
    "name": "Burgundy & Cream Winter Streetwear Look",
    "description": "A cozy and modern outfit with a burgundy zip-up jacket, matching sweater, cream maxi skirt, and black combat boots, accessorized with gold jewelry, a scarf, and a puffy cream tote.",
    "image": "/Soft Summer/Casual/5.jpg",
    "colors": [
      "#eeeeee",
      "#673143",
      "#10120f",
      "#431c27",
      "#e3d9c0",
      "#bcaf9e"
    ],
    "keywords": [
      "casual","streetwear", "burgundy jacket", "cream maxi skirt", "combat boots"
    ],
    "category": "casualwear",
    "styleCategories": [
      "casual","streetwear", "modern elegant"
    ],
    "seasons": [
      "soft-summer","soft-autumn", "light-spring"
    ]
  },
  {
    "id": "item-425",
    "name": "Taupe & Cream Casual Knit Look",
    "description": "A relaxed outfit featuring a taupe mock-neck knit sweater, cream straight-leg pants, taupe Adidas sneakers, and gold drop earrings, completed with a taupe crossbody bag",
    "image": "/Soft Summer/Casual/6.jpeg",
    "colors": [
      "#eeeae3",
      "#a39080",
      "#ffe599",
      "#c9c6bf",
      "#645043",
      "#847265"
    ],
    "keywords": [
      "casual","knitwear", "mock-neck sweater", "straight-leg pants", "sneakers"
    ],
    "category": " casualwear",
    "styleCategories": [
      "casual","comfortable", "modern elegant"
    ],
    "seasons": [
      "soft-summer","soft-autumn", "light-spring"
    ]
  },
  {
    "id": "item-426",
    "name": " Soft Summer Casual Look",
    "description": " A light and airy outfit featuring a soft pink oversized sweater, white wide-leg jeans, and beige sandals, accessorized with a matching handbag and gold jewelry.",
    "image": "/Soft Summer/Casual/7.jpeg",
    "colors": [
      "#e5e5e5",
      "#cfc6b8",
      "#d8bc87",
      "#b4897b",
      "#5a4f3e",
      "#7f725d"
    ],
    "keywords": [
      "casual", "oversized sweater", "wide-leg jeans", "beige sandals"
    ],
    "category": "casualwear",
    "styleCategories": [
      "casual","comfortable", "modern elegant"
    ],
    "seasons": [
      "soft-summer","soft-autumn", "light-spring",  
    ]
  },
  {
    "id": "item-427",
    "name": " Lemon & Satin Feminine Mix",
    "description": "A soft, feminine look with a lemon yellow sweater, black satin midi skirt, white heels, and red patent bag, finished with layered gold jewelry and chic sunglasses.",
    "image": "/Soft Summer/Casual/8.jpeg",
    "colors": [
      "#ececec",
      "#f0e6b7",
      "#ddce8d",
      "#3b3c3c",
      "#c0878d",
      "#5b090b"
    ],
    "keywords": [
      "casual","chic look","elegant casual","spring outfit"
    ],
    "category": "tops",
    "styleCategories": [
      "casual","feminine", "modern elegant"
    ],
    "seasons": [
      "soft-summer","light-spring","warm-spring","clear-spring"
    ]
  },
  {
    "id": "item-428",
    "name": "Light Blue Oversized Shirt Outfit",
    "description": "A relaxed and stylish ensemble featuring a light blue oversized shirt paired with wide-leg dark denim jeans, white sneakers, a white mini shoulder bag, and gold accessories for a polished yet casual look.",
    "image": "/Soft Summer/Casual/9.jpeg",
    "colors": [
      "#ebecec",
      "#b4c7e5",
      "#181f31",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual","oversized shirt", "blue shirt", "wide-leg jeans", "casual outfit"
    ],
    "category": "outfits",
    "styleCategories": [
      "casual","smart-casual", "modest"
    ],
    "seasons": [
      "soft-summer","cool-summer", "clear-spring"
    ]
  },
  {
    "id": "item-429",
    "name": "Maroon Traditional Anarkali Set",
    "description": "AA rich maroon Anarkali suit adorned with golden embroidery and borders, paired with traditional juttis, a matching embroidered potli bag, red and gold bangles, chandbali earrings, and a detailed maang tikka. Ideal for festive or ceremonial occasions.",
    "image": "/Soft Summer/Ethnic/1.jpg",
    "colors": [
      "#f3edee",
      "#9b6a53",
      "#bea285",
      "#85393b",
      "#ba914c",
      "#5b1a22"
    ],
    "keywords": [
      "ethnic","Anarkali", "traditional wear", "Indian outfit" 
    ],
    "category": "outfits",
    "styleCategories": [
      "ethnic","traditional" 
    ],
    "seasons": [
      "soft-summer","deep-autumn", "deep-winter", "cool-winter"
    ]
  },
  {
    "id": "item-430",
    "name": "Red Sharara Suit Set",
    "description": "A vibrant red sharara suit with intricate embroidery and floral dupatta, paired with oxidized silver bangles, antique finish jhumkas, black block heels, and soft wavy half-up hair. Ideal for weddings, festive events, or cultural functions.",
    "image": "/Soft Summer/Ethnic/2.jpg",
    "colors": [
      "#e5e5e5",
      "#5c5350",
      "#2a2421",
      "#b84947",
      "#95212e",
      "#9d9b83"
    ],
    "keywords": [
      "ethnic","sharara", "traditional wear", "Indian outfit", "red suit"
    ],
    "category": " outfits",
    "styleCategories": [
      "ethnic","traditional" , "indo-western"
    ],
    "seasons": [
      "soft-summer","deep-autumn", "deep-winter", "cool-winter"
    ]
  },
  {
    "id": "item-431",
    "name": "Navy & White Elegant Ensemble",
    "description": "A classy outfit featuring a white bow-tie blouse with voluminous sleeves, high-waisted white wide-leg trousers, a navy blue embroidered long coat, paired with white slingback heels, a structured navy Jacquemus handbag, a silver wristwatch, and a floral statement ring. Perfect for formal events, business dinners, or stylish gatherings.",
    "image": "/Soft Summer/Formal/1.jpg",
    "colors": [
      "#ebeced",
      "#303f5e",
      "#656c7b",
      "#cbc8c5",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal","elegant outfit", "business chic", "white trousers", "navy coat"
    ],
    "category": "Formal outfits",
    "styleCategories": [
      "formal","elegant", "business chic"
    ],
    "seasons": [
      "soft-summer","cool-summer", "clear-spring", "light-spring"
    ]
  },
  {
    "id": "item-432",
    "name": "Monochrome Chic Winter Look",
    "description": "A refined outfit featuring a black strapless ruched top paired with high-waisted white wide-leg trousers. Completed with a light grey oversized Zara wool coat, white pointed-toe slingback heels with gold details, a structured white handbag, pearl-drop earrings, a gold choker, and a soft white fragrance. Ideal for winter events, formal gatherings, or stylish city outings.",
    "image": "/Soft Summer/Formal/10.jpeg",
    "colors": [
      "#f0f0f0",
      "#b0afa9",
      "#908b8c",
      "#130e11",
      "#6a6867",
      "#cfcdc5"
    ],
    "keywords": [
      "formal","monochrome", "chic outfit", "strapless top", "wide-leg trousers"
    ],
    "category": "formal outfits",
    "styleCategories": [
      "formal","elegant", "business chic"
    ],
    "seasons": [
      "soft-summer","cool-winter", "cool-summer"
    ]
  },
  {
    "id": "item-433",
    "name": "Elegant Burgundy & Camel Winter Ensemble",
    "description": "A sophisticated outfit perfect for winter elegance. It includes a sleeveless burgundy A-line midi dress paired with a soft camel waterfall coat. Accessories include a matching beige scarf, a structured taupe Hermès-style handbag, burgundy pointed-toe heels, and a gold watch. Ideal for formal dinners, winter parties, or a refined day event.",
    "image": "/Soft Summer/Formal/2.jpg",
    "colors": [
      "#e7e5e0",
      "#b29f8a",
      "#c1bcb3",
      "#340e15",
      "#8a765d",
      "#5e3437"
    ],
    "keywords": [
      "formal","elegant outfit", "winter chic", "A-line dress", "waterfall coat"
    ],
    "category": " formal outfits",
    "styleCategories": [
      "formal","elegant", "business chic"
    ],
    "seasons": [
      "soft-summer","cool-winter", "deep-autumn"
    ]
  },
  {
    "id": "item-434",
    "name": "Sporty-Chic Charcoal & Burgundy Look",
    "description": "A smart-casual outfit combining a structured gray blazer with a flowing black satin midi skirt. The look is made youthful and edgy with burgundy-and-white Nike sneakers. Accessories include a patterned burgundy Dior scarf, a textured burgundy mini handbag, a classic gold-and-leather watch, and a sleek bangle. Perfect for stylish daytime events, casual office settings, or creative industry meetings.",
    "image": "/Soft Summer/Formal/3.jpg",
    "colors": [
      "#e8e8e8",
      "#666769",
      "#9e6d6a",
      "#b99892",
      "#eacfba",
      "#643437"
    ],
    "keywords": [
      "formal","gray blazer", "satin skirt", "Nike sneakers", "Dior scarf", "sporty chic", "smart casual"
    ],
    "category": "outfits",
    "styleCategories": [
      "formal","smart casual", "business chic"
    ],
    "seasons": [
      "soft-summer","cool-winter", "deep-autumn", "soft-autumn"
    ]
  },
  {
    "id": "item-435",
    "name": "Soft Pastel Casual Look",
    "description": "This look blends casual and smart elements with a light blue double-breasted blazer over a classic white tee and wide-leg faded jeans. A yellow ruched handbag and printed silk scarf introduce cheerful accents, while white sneakers and oversized black sunglasses complete the effortlessly chic ensemble. Great for spring outings, travel days, or casual creative meetings.",
    "image": "/Soft Summer/Formal/4.jpg",
    "colors": [
      "#e5e5e5",
      "#a3b3ca",
      "#b1c78a",
      "#4e4d4c",
      "#636d7c",
      "#8594ae"
    ],
    "keywords": [
      "formal","pastel blazer", "white tee", "wide-leg jeans", "yellow handbag"
    ],
    "category": " outfits",
    "styleCategories": [
      "formal","smart casual", "business chic",
    ],
    "seasons": [
      "soft-summer","light-spring", "light-summer"
    ]
  },
  {
    "id": "item-436",
    "name": "Chic Neutral Monochrome Look",
    "description": "An effortlessly refined look featuring wide-leg beige trousers paired with a white fitted square-neck top and an ivory oversized blazer. Accessories include a structured white handbag, beige slingback heels, and minimal gold jewelry, creating a monochrome palette that’s clean, elegant, and versatile. Perfect for brunches, creative offices, or elegant daytime events.",
    "image": "/Soft Summer/Formal/5.jpeg",
    "colors": [
      "#e5e5e5",
      "#dbccb8",
      "#baa99b",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal","neutral outfit", "ivory blazer", "wide-leg pants", "square neck top"
    ],
    "category": " formal outfits",
    "styleCategories": [
      "formal","legant", "minimalist", "business chic"
    ],
    "seasons": [
      "soft-summer","light-spring", "light-summer"
    ]
  },
  {
    "id": "item-437",
    "name": "Burgundy & Grey Winter Elegance",
    "description": "A refined cold-weather outfit featuring a fitted burgundy turtleneck paired with a high-waisted A-line grey skirt and a structured grey wool cropped coat. Styled with matching burgundy knee-high boots and a burgundy tote bag. Gold hoop earrings and a luxury gold watch add a polished finish. Ideal for office settings, winter city strolls, or elegant meet-ups.",
    "image": "/Soft Summer/Formal/6.jpg",
    "colors": [
      "#ece9e0",
      "#d7cda3",
      "#9a9997",
      "#7a7877",
      "#50514d",
      "#53262f"
    ],
    "keywords": [
      "formal","winter outfit", "burgundy turtleneck"
    ],
    "category": "outfits",
    "styleCategories": [
      "formal", "elegant", "business chic"
    ],
    "seasons": [
      "soft-summer","cool-winter",  
    ]
  },
  {
    "id": "item-438",
    "name": "Desk to Street Blazer Combo",
    "description": "A versatile blazer-centered outfit with two style options. The left half is a formal look featuring wide-leg black trousers, black heeled mules, and a structured black leather handbag—perfect for office or business settings. The right half transforms the look into a casual ensemble with light-wash wide-leg jeans, white Nike sneakers, and a soft brown leather tote—ideal for off-duty errands or a relaxed brunch.",
    "image": "/Soft Summer/Formal/7.jpg",
    "colors": [
      "#e3e3e3",
      "#535355",
      "#7f8082",
      "#302e31",
      "#97a0a7",
      "#c6c6c5"
    ],
    "keywords": [
      "formal","blazer outfit", "Zara blazer", "business casual", "jeans and blazer"
    ],
    "category": "outfits",
    "styleCategories": [
      "formal","versatile", "smart casual", "business"
    ],
    "seasons": [
      "soft-summer"
    ]
  },
  {
    "id": "item-439",
    "name": "Burgundy Elegance Ensemble",
    "description": "This stunning outfit combines rich burgundy tailored trousers with a matching wrap coat, paired with a cropped ivory turtleneck sweater for contrast. Accessorized with ivory pointed-toe heels, a structured white handbag with gold hardware, and a minimalist gold watch, this look is perfect for refined occasions or professional settings with a chic edge.",
    "image": "/Soft Summer/Formal/8.jpg",
    "colors": [
      "#f3f0eb",
      "#5a0c1e",
      "#6a4b48",
      "#ddd3c0",
      "#b2927e",
      "#ffffff"
    ],
    "keywords": [
      "formal","burgundy outfit", "elegant winter look", "white and wine outfit"
    ],
    "category": "Outfits",
    "styleCategories": [
      "formal","elegant", "business", "smart casual"
    ],
    "seasons": [
      "soft-summer",  "cool-winter", "deep-autumn", "soft-autumn"
    ]
  },
  {
    "id": "item-440",
    "name": "Monochrome Street Armor",
    "description": "This outfit is a powerful blend of sharp tailoring and streetwear edge. A light gray oversized blazer is paired with wide-leg trousers and a fitted black high-neck crop top. The look is grounded with chunky black Prada combat boots and a matching black crossbody bag with silver chain detailing. Accessories include sleek black sunglasses, a silver watch, and stacked rings, creating a look that's confident, urban, and undeniably cool.s",
    "image": "/Soft Summer/Formal/9.jpeg",
    "colors": [
      "#ececec",
      "#7e7e7e",
      "#191919",
      "#575654",
      "#c1c1c0",
      "#383637"
    ],
    "keywords": [
      "formal", "streetwear", "monochrome outfit", "gray blazer", "combat boots"
    ],
    "category": "outfits",
    "styleCategories": [
      "formal","streetwear", "urban chic"
    ],
    "seasons": [
      "soft-summer",  "cool-winter", "deep-autumn", "soft-autumn"
    ]
  },
  {
    "id": "item-441",
    "name": "Elegant Modest Harmony",
    "description": "This graceful ensemble pairs a rich burgundy button-up shirt with a flowing cream maxi skirt, creating a soft, refined contrast. Accessories include a patterned headscarf, round sunglasses, and a structured burgundy handbag that enhances the chic coordination. The look is completed with woven cream flats, a delicate pearl necklace, a gold rectangular watch, and a finishing touch of Tom Ford's Lost Cherry perfume—evoking understated elegance with a touch of luxury.",
    "image": "/Soft Summer/Modest/1.jpg",
    "colors": [
      "#eeeded",
      "#7c474e",
      "#938778",
      "#d5d0cc",
      "#6b1f2f",
      "#ffffff"
    ],
    "keywords": [
      "modest","modest fashion", "elegant outfit", "burgundy and cream"
    ],
    "category": " outfits",
    "styleCategories": [
      "modest","modest", "elegant", "feminine"
    ],
    "seasons": [
      "soft-summer", "warm-autumn"
    ]
  },
  {
    "id": "item-442",
    "name": "Elegant Satin Evening Gown",
    "description": "A flowing satin gown in a warm rose tone featuring puffed long sleeves and a gathered waist that accentuates the silhouette. Paired with sleek black patent leather pointed-toe heels and a structured black handbag for a polished, timeless look. Simple gold hoop earrings and a layered gold necklace add subtle sophistication, perfect for formal events or elegant evenings.",
    "image": "/Soft Summer/Modest/10.jpeg",
    "colors": [
      "#d1968e",
      "#f2eee5",
      "#fdb197",
      "#9a5b56",
      "#d2c1bc",
      "#7b3e33"
    ],
    "keywords": [
      "modest","rose color dress", "formal wear", "puffed sleeves"
    ],
    "category": "outfits",
    "styleCategories": [
      "modest","elegant", "formal", "classic"
    ],
    "seasons": [
      "soft-summer","cool-winter", "deep-autumn", "soft-autumn"
    ]
  },
  {
    "id": "item-443",
    "name": "Soft Pastel Spring Ensemble",
    "description": "A breezy pastel green blouse with voluminous, gathered sleeves paired with a high-waisted cream button-front skirt, creating a soft and feminine silhouette. Accented with delicate gold earrings and rings, and complemented by a matching pastel green handbag with gold chain detail. The look is completed with charming pastel green block heels featuring pearl embellishments and butterfly accents, along with a lightweight white scarf for an elegant finishing touch. Perfect for spring outings or garden parties.",
    "image": "/Soft Summer/Modest/2.jpg",
    "colors": [
      "#cfcabe",
      "#eceee6",
      "#aab494",
      "#79865e",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest","pastel outfit", "green blouse", "button front skirt"
    ],
    "category": "outfits",
    "styleCategories": [
      "modest","feminine", "casual chic", "spring"
    ],
    "seasons": [
      "soft-summer","light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-444",
    "name": "Elegant Ruby Red Evening Gown Ensemble",
    "description": "A striking pleated ruby red evening gown featuring dramatic flowing sleeves and a cinched waist with a matching belt. Paired with sophisticated red strappy high heels for a sleek finish. Accented by a classic burgundy leather handbag and complemented with gold jewelry including floral stud earrings, a delicate clover bracelet, and a luxurious gold watch with a diamond bezel. Perfect for formal events, gala dinners, or elegant celebrations.",
    "image": "/Soft Summer/Modest/3.jpg",
    "colors": [
      "#bea6a6",
      "#801222",
      "#f7f3e8",
      "#9a6c70",
      "#d4d1cd",
      "#96474d"
    ],
    "keywords": [
      "modest","evening gown", "ruby red", "pleated dress"
    ],
    "category": "outfits",
    "styleCategories": [
      "modest","formal", "luxury", "evening wear"
    ],
    "seasons": [
      "soft-summer",  "deep-autumn", "cool-winter"
    ]
  },
  {
    "id": "item-445",
    "name": "Casual Chic Burgundy Wrap Top Ensemble",
    "description": "This outfit features a rich burgundy wrap top with wide sleeves paired with a classic denim midi skirt. Accessorized with a stylish burgundy crocodile-textured shoulder bag and complemented by a multicolor scarf with burgundy, cream, and blue tones for added flair. The look is finished with comfy beige suede slip-on shoes and retro-inspired oval sunglasses, perfect for an effortlessly cool day out or casual gatherings",
    "image": "/Soft Summer/Modest/4.jpg",
    "colors": [
      "#eadfe1",
      "#571d25",
      "#936f5f",
      "#958b93",
      "#586885",
      "#3a4963"
    ],
    "keywords": [
      "modest","burgundy wrap top", "denim skirt", "casual chic"
    ],
    "category": " outfits",
    "styleCategories": [
      "modest","casual chic", "feminine"
    ],
    "seasons": [
      "soft-summer","light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-446",
    "name": "Elegant Neutral Kimono Set",
    "description": "A sophisticated ensemble featuring wide-leg white trousers paired with a fitted white long-sleeve bodysuit. Layered with a flowing, sheer ombré kimono in shades of brown and beige for a soft yet dramatic effect. Accessories include pointed white slingback heels, gold shell-themed earrings, a matching shell pendant necklace, and a classic gold watch for a polished finish.",
    "image": "/Soft Summer/Modest/5.jpg",
    "colors": [
      "#f7f4e9",
      "#83706f",
      "#644c4f",
      "#ebaf95",
      "#b98574",
      "#3a2e2f"
    ],
    "keywords": [
      "modest","white trousers", "white bodysuit", "sheer ombré kimono"
    ],
    "category": "outfits",
    "styleCategories": [
      "modest","elegant", "feminine", "luxury"
    ],
    "seasons": [
      "soft-summer","light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-447",
    "name": "Sunny Yellow Floral Dress Ensemble",
    "description": "A bright and cheerful yellow and white floral midi dress with puff sleeves and a matching fabric belt that ties at the waist. Accessories include elegant pearl-drop bow earrings, a delicate gold pendant necklace, black cat-eye sunglasses for a chic touch, a brown leather shoulder bag with a gold clasp, and matching brown pointed-toe high heels.",
    "image": "/Soft Summer/Modest/6.jpeg",
    "colors": [
      "#f1f2ec",
      "#c6cbaf",
      "#afac8b",
      "#979a62",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest","yellow floral dress", "puff sleeves", "belted waist"
    ],
    "category": "outfits",
    "styleCategories": [
      "modest","feminine", "casual chic"
    ],
    "seasons": [
      "soft-summer","light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-448",
    "name": "White Puff Sleeve Dress with Blue Floral Embroidery",
    "description": "A charming white midi dress featuring puff sleeves, blue floral embroidery, and a square neckline. Paired with blue suede pointed heels, a blue leather handbag, and gold jewelry for a delicate and elegant look.",
    "image": "/Soft Summer/Modest/7.jpg",
    "colors": [
      "#eae4e5",
      "#642b32",
      "#d1c4af",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest","puff sleeve", "white dress", "floral embroidery", "blue accents", "midi dress"
    ],
    "category": " dresses",
    "styleCategories": [
      "modest","feminine", "casual chic"
    ],
    "seasons": [
      "soft-summer","light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-449",
    "name": "Elegant Sage Green Ruched Gown",
    "description": "A sophisticated sage green gown featuring long puff sleeves, high neckline, and ruched detailing along the skirt. Paired with gold accessories including a statement handbag, minimalist strappy heels, and subtle gold earrings, complemented by a beige satin scarf.",
    "image": "/Soft Summer/Modest/8.jpg",
    "colors": [
      "#efede8",
      "#e2cbab",
      "#586a5f",
      "#7a917f",
      "#c1af8e",
      "#3a493e"
    ],
    "keywords": [
      "modest","green gown", "ruched dress", "long sleeves"
    ],
    "category": " outfits",
    "styleCategories": [
      "modest","elegant", "formal", "luxury"
    ],
    "seasons": [
      "soft-summer","light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-450",
    "name": "Casual Chic Grey & White Ensemble",
    "description": "A comfortable and stylish outfit featuring a long grey cardigan, a white cropped top, and high-waisted wide-leg white trousers. Paired with a grey hijab, grey and white sneakers, and a patterned tote bag for a relaxed yet polished look.",
    "image": "/Soft Summer/Modest/9.jpg",
    "colors": [
      "#eae9e7",
      "#cbc6bc",
      "#9ba0a1",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest","grey cardigan", "white cropped top"
    ],
    "category": "casualwear",
    "styleCategories": [
      "modest","comfortable", "casual chic"
    ],
    "seasons": [
      "soft-summer","light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-451",
    "name": "Cultural Boho Fusion Look",
    "description": "A unique ensemble combining cultural elegance with modern casuals. Features a cream embroidered jacket, wide-leg blue jeans, and deep burgundy accessories including triple-strap Mary Jane shoes and a handbag. Styled with gold-toned 'Habibi' earrings, mehndi-adorned hands, and a traditional updo for a fusion of East and West.",
    "image": "/Soft Summer/Party/1.jpg",
    "colors": [
      "#efefef",
      "#ab9159",
      "#d4bd7c",
      "#e8dfbf",
      "#897680",
      "#545957"
    ],
    "keywords": [
      "party","embroidered jacket", "wide-leg jeans", "boho", "fusion"
    ],
    "category": "casualwear",
    "styleCategories": [
      "party","bohemian", "ethnic fusion", "modest"
    ],
    "seasons": [
      "soft-summer","soft-autumn", "light-spring", "clear-spring"
    ]
  },
  {
    "id": "item-452",
    "name": "Elegant Burgundy Couple's Ensemble",
    "description": "A coordinated couple's look in deep burgundy and classic neutrals. The women's outfit features a sleek burgundy gown paired with matching pointed-toe heels, a croc-textured clutch, drop earrings, and a Y-shaped necklace. The men's outfit includes a burgundy linen shirt, light grey trousers, and grey loafers, accessorized with a silver wristwatch. Ideal for formal events, date nights, or special celebrations.",
    "image": "/Soft Summer/Party/2.jpg",
    "colors": [
      "#ddded9",
      "#5a2532",
      "#6e595b",
      "#aca19f",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "party"
    ],
    "category": "formal wear",
    "styleCategories": [
      "party","elegant", "couple's outfit", "formal"
    ],
    "seasons": [
      "soft-summer", , "deep-autumn", "soft-autumn"
    ]
  },
  {
    "id": "item-453",
    "name": "Chic Burgundy & Cream Ensemble",
    "description": "A sophisticated and minimalist outfit featuring a burgundy high-neck asymmetric poncho-style sweater paired with wide-leg cream trousers. Accessories include pointed white heels, a structured cream handbag, gold drop earrings, a sleek gold wristwatch, and a delicate gold ring. Perfect for stylish fall outings, business lunches, or elegant casual settings.",
    "image": "/Soft Summer/Party/3.jpg",
    "colors": [
      "#e3dcd1",
      "#471717",
      "#cfbb95",
      "#988278",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "party"
    ],
    "category": "smart casual",
    "styleCategories": [
      "party","modern elegant", "minimalist", "chic"
    ],
    "seasons": [
      "soft-summer"
    ]
  },
  {
    "id": "item-454",
    "name": "Elegant Monochrome Grey Ensemble",
    "description": "A graceful and polished look featuring a long-sleeved grey fitted turtleneck paired with a matching high-waisted A-line maxi skirt. The outfit is completed with a structured short grey coat, a slim black belt with a gold clasp, and a chic black crossbody bag with a bold gold 'H' logo. A perfect ensemble for business settings, fall/winter events, or classy daywear.",
    "image": "/Soft Summer/Party/4.jpg",
    "colors": [
      "#e7e7e7",
      "#565455",
      "#e4cc9e",
      "#7b7b7c",
      "#9a9a9b",
      "#272527"
    ],
    "keywords": [
      "party","grey turtleneck", "monochrome outfit", "grey maxi skirt"
    ],
    "category": "formal wear",
    "styleCategories": [
      "party","elegant", "minimalist"
    ],
    "seasons": [
      "soft-summer",  "deep-autumn"
    ]
  },
  {
    "id": "item-455",
    "name": "Burgundy & Cream Street Chic Look",
    "description": "A refined and modern ensemble featuring a cropped burgundy turtleneck sweater paired with high-waisted wide-leg cream trousers. Layered with a classic cream belted trench coat and accessorized with a structured burgundy handbag and round sunglasses. Completed with chunky cream Chelsea boots featuring burgundy elastic side panels, this outfit balances elegance with contemporary street style.",
    "image": "/Soft Summer/Party/5.jpg",
    "colors": [
      "#e1d8c6",
      "#927c7c",
      "#451619",
      "#f4f2ed",
      "#62373d",
      "#c2986c"
    ],
    "keywords": [
      "party","trench coat", "burgundy sweater", "cream trousers"
    ],
    "category": "smart casual",
    "styleCategories": [
      "party","street chic", "modern elegant", "minimalist"
    ],
    "seasons": [
      "soft-summer", , "deep-autumn", "soft-autumn"
    ]
  },
  {
    "id": "item-456",
    "name": "Yellow Floral Midi Dress Look",
    "description": "A charming and elegant daytime look featuring a yellow and white floral midi dress with puff sleeves and a tie waist. Styled with pointed-toe brown heels and a classic brown leather shoulder bag. Accessories include gold bow-shaped pearl earrings, a coin pendant necklace, and black oval sunglasses—perfect for a sunny brunch or a garden party.",
    "image": "/Soft Summer/Party/6.jpeg",
    "colors": [
      "#e5bb76",
      "#faf7ea",
      "#ded5ce",
      "#f7e9a4",
      "#b5a49d",
      "#757d88"
    ],
    "keywords": [
      "party","floral dress", "yellow midi dress"
    ],
    "category": "casualwear",
    "styleCategories": [
      "party","feminine", "casual chic"
    ],
    "seasons": [
      "soft-summer","light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-457",
    "name": "Blue & White Embroidered Cottagecore Look",
    "description": "A delicate and feminine ensemble featuring a white midi dress with soft blue floral embroidery and puff sleeves. Styled with powder blue bow-embellished heels and a shiny cobalt blue handbag. The look is accessorized with gold hoop earrings, a dainty gold necklace, and a pastel blue flower hair clip. Perfect for spring outings or afternoon tea.",
    "image": "/Soft Summer/Party/7.jpeg",
    "colors": [
      "#deeefe",
      "#b2c4d9",
      "#4c658e",
      "#ddd5c3",
      "#af9d82",
      "#204974"
    ],
    "keywords": [
      "party","cottagecore", "embroidered dress", "blue and white outfit"
    ],
    "category": "causalwear",
    "styleCategories": [
      "party", "feminine", "cottagecore"
    ],
    "seasons": [
      "soft-summer",  "light-spring", "clear-spring", "soft-autumn"

    ]
  },
  {
    "id": "item-458",
    "name": "Soft Floral & Satin Garden Party Look",
    "description": "A graceful and romantic ensemble featuring a silky ivory wrap blouse paired with a cream A-line skirt adorned with soft floral prints. Styled with white ankle-strap block heels with a bow detail and a pearlescent clutch. Accessories include gold layered necklaces and bow-shaped pearl earrings. Ideal for spring garden parties, bridal showers, or elegant brunches.",
    "image": "/Soft Summer/Party/8.jpeg",
    "colors": [
      "#e6e1e0",
      "#d9c0ac",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "party","garden party", "floral outfit", 
    ],
    "category": "elegant springwear",
    "styleCategories": [
      "party","romantic", "feminine"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-459",
    "name": "Casual Printed Kurti & Denim Everyday Look",
    "description": "A comfy and stylish outfit featuring a mint green kurti with traditional red floral motifs, paired with classic blue skinny jeans. Styled with a rose gold smartwatch and a blue-and-brown ethnic patterned backpack. Perfect for casual outings, college, or a laid-back office day.",
    "image": "/Soft Summer/Streetwear/1.jpg",
    "colors": [
      "#d2d7c9",
      "#a8bba1",
      "#a19778",
      "#b26c59",
      "#525252",
      "#f45d2f"
    ],
    "keywords": [
      "streetwear","kurti and jeans", "casual Indian wear", "ethnic fusion"
    ],
    "category": "indowestern",
    "styleCategories": [
      "streetwear", "casual chic",
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-460",
    "name": "Boho Kurti & Flared Jeans Casual Look",
    "description": "A fun and eclectic Indo-western outfit featuring a printed kurti with tribal motifs, paired with flared denim jeans. Accessories include oxidized jhumkas, a maroon shoulder bag, black ballet flats, and silver bangles. Completed with hair clips, light makeup essentials, and a printed phone case for added personality.",
    "image": "/Soft Summer/Streetwear/10.jpg",
    "colors": [
      "#e2dad9",
      "#999798",
      "#c1b7b6",
      "#693236",
      "#92606c",
      "#4c6485"
    ],
    "keywords": [
      "streetwear","kurti and jeans", "Indo-western style"
    ],
    "category": " indowestern",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-461",
    "name": "Blue & White Boho Chic Set",
    "description": "A bright and breezy outfit featuring a white blouse with rich blue floral embroidery, paired with wide-leg denim jeans and colorful embroidered flats. Accessorized with oxidized silver jewelry and a bold cobalt blue handbag with a pearl handle for a stylish ethnic fusion look.",
    "image": "/Soft Summer/Streetwear/11.jpg",
    "colors": [
      "#eae9e6",
      "#cdcbc9",
      "#8e919e",
      "#585650",
      "#837b6b",
      "#2f3e61"
    ],
    "keywords": [
      "streetwear","blue embroidered blouse", "wide-leg jeans", "boho outfit"
    ],
    "category": "casualwear",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-462",
    "name": "Neutral Cozy Casual Set",
    "description": "A cozy and effortless everyday look featuring a loose beige knit sweater paired with wide-leg denim jeans and classic white sneakers. Accented with warm-toned accessories including a tortoiseshell headband, gold jewelry, and a navy tote bag for a polished touch.",
    "image": "/Soft Summer/Streetwear/12.jpeg",
    "colors": [
      "#e5e5e5",
      "#cfc1af",
      "#ebcb77",
      "#71492e",
      "#3e464c",
      "#626e7a"
    ],
    "keywords": [
      "streetwear","beige sweater", "wide-leg jeans", "white sneakers", "neutral outfit", "casual fashion"
    ],
    "category": "casualwear",
    "styleCategories": [
      "streetwear", "casual chic", "comfortable"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-463",
    "name": "Lemon Fresh Casual Set",
    "description": "A cheerful and feminine look featuring a soft yellow bow-tie blouse paired with high-waisted wide-leg jeans and creamy white Adidas sneakers. The outfit is accessorized with a pearl-accented watch, a cream structured handbag, and floral details for a soft and sunny vibe.",
    "image": "/Soft Summer/Streetwear/13.jpg",
    "colors": [
      "#fbfbed",
      "#ded19e",
      "#e9b325",
      "#5c7085",
      "#d8d7d5",
      "#405166"
    ],
    "keywords": [
      "streetwear","yellow blouse", "bow-tie top", "wide-leg jeans"
    ],
    "category": "springwear",
    "styleCategories": [
      "streetwear", "feminine", "casual chic"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-464",
    "name": "Desi Fusion Denim Set",
    "description": "A rich cultural fusion look featuring a traditional white chikankari kurti paired with light-wash wide-leg jeans. Styled with red embellished juttis, red glass bangles, ornate jhumka earrings, and a floral tooled leather shoulder bag. Henna and bold sunglasses add a festive Indo-Western charm.",
    "image": "/Soft Summer/Streetwear/14.jpg",
    "colors": [
      "#9e8b7c",
      "#bca99b",
      "#dbd4c9",
      "#75594f",
      "#5e272f",
      "#879bab"
    ],
    "keywords": [
      "streetwear","kurti and jeans", "Indo-western style", "desi fusion"
    ],
    "category": "denimwear",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-465",
    "name": "Lost in Space Street Style",
    "description": "A playful and relaxed casual look featuring a graphic tee, light wide-leg jeans, and sporty sneakers. Paired with a black canvas tote, gold hoops, and simple accessories for an effortlessly cool vibe perfect for errands or campus.",
    "image": "/Soft Summer/Streetwear/2.jpeg",
    "colors": [
      "#efefef",
      "#aca096",
      "#d2c9b6",
      "#837e79",
      "#9fb6c3",
      "#1a181a"
    ],
    "keywords": [
      "streetwear","graphic tee", "streetwear", "casual outfit", "denim jeans"
    ],
    "category": "steetwear-casual",
    "styleCategories": [
      "streetwear", "casual chic", "comfortable"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-466",
    "name": "",
    "description": "",
    "image": "/Soft Summer/Streetwear/3.jpg",
    "colors": [
      "#dfdcdb",
      "#361015",
      "#5b3432",
      "#b8aea5",
      "#7a5357",
      "#667992"
    ],
    "keywords": [
      "streetwear"
    ],
    "category": "",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "soft-summer"
    ]
  },
  {
    "id": "item-467",
    "name": "Burgundy Bloom Modest Look",
    "description": "A feminine and modest everyday outfit featuring a burgundy floral peplum blouse and wide-leg denim. Accessorized with a classic black shoulder bag, a sleek Cartier watch, velvet Chanel ballet flats, and pastel hijabs for an elegant and comfortable style ideal for casual outings or café dates.",
    "image": "/Soft Summer/Streetwear/4.jpg",
    "colors": [
      "#f5f4f0",
      "#ded2c3",
      "#c4a9a1",
      "#253752",
      "#b07e7a",
      "#67686c"
    ],
    "keywords": [
      "streetwear","modest fashion", "floral top", "hijabi style"
    ],
    "category": "everydaywear",
    "styleCategories": [
      "streetwear", "modest", "feminine"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-468",
    "name": "Edgy Soft Girl Glam",
    "description": "A confident and trendy outfit combining edgy and feminine vibes. Features a ruffled sky-blue crop top paired with distressed wide-leg jeans. The look is elevated with black platform heels, gold jewelry, a structured brown shoulder bag, and chic claw clips—perfect for a day-to-night summer vibe.",
    "image": "/Soft Summer/Streetwear/5.jpg",
    "colors": [
      "#cccccc",
      "#604e40",
      "#3b2d20",
      "#7c7265",
      "#90a7c7",
      "#f5efe2"
    ],
    "keywords": [
      "streetwear","trendy outfit", "ruffled top", "platform heels"
    ],
    "category": "casualwear",
    "styleCategories": [
      "streetwear", "edgy", "feminine"
    ],
    "seasons": [
      "soft-summer",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-469",
    "name": "Soft Garden Bloom",
    "description": "A sweet and airy outfit perfect for spring or summer strolls. Features a sheer floral puff-sleeve top with a bow detail, paired with high-waisted wide-leg jeans. The look is completed with classic white sneakers and a braided half-up hairstyle, blending comfort and charm effortlessly.",
    "image": "/Soft Summer/Streetwear/6.jpg",
    "colors": [
      "#d7d4d2",
      "#6c5a4b",
      "#937659",
      "#a8988a",
      "#c4b6ad",
      "#6a8095"
    ],
    "keywords": [
      "streetwear","romantic style", "floral blouse", "white sneakers"
    ],
    "category": "casualwear",
    "styleCategories": [
      "streetwear", "feminine", "romantic"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-470",
    "name": "",
    "description": "",
    "image": "/Soft Summer/Streetwear/7.jpg",
    "colors": [
      "#a5a5a5",
      "#d1d6d9",
      "#6484a0",
      "#d3bfa7",
      "#999264",
      "#f4f5f0"
    ],
    "keywords": [
      "streetwear"
    ],
    "category": "",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "soft-summer"
    ]
  },
  {
    "id": "item-471",
    "name": "Graceful Day Kurti Look",
    "description": "A graceful and airy outfit combining traditional and contemporary styles. Features a cream-colored embroidered kurti with delicate floral details and yellow checkered trim, paired with light-wash denim jeans. Finished with white strappy block heels, a ruched white shoulder bag, and a floral hair accessory, creating a look that’s ideal for casual cultural outings or serene reading days.",
    "image": "/Soft Summer/Streetwear/8.jpg",
    "colors": [
      "#e4e6e7",
      "#bd7695",
      "#522241",
      "#9f436d",
      "#e1b6cd",
      "#8e1248"
    ],
    "keywords": [
      "streetwear","kurti with jeans", "ethnic fusion", "light academia"
    ],
    "category": "modestwear",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-472",
    "name": "Indie Chic Casual Look",
    "description": "A stylish and culturally rooted casual outfit featuring a white printed kurti with red and navy patterns, paired with flared blue jeans. Complemented by classic black ballet flats, a wine red shoulder bag, and oxidized jhumka earrings. Finished with red hair clips, a soft white ribbon, silver bangles, and neutral-toned makeup for a polished and expressive daytime look.",
    "image": "/Soft Summer/Streetwear/9.jpg",
    "colors": [
      "#e2dad9",
      "#999798",
      "#c1b7b6",
      "#693236",
      "#92606c",
      "#4c6485"
    ],
    "keywords": [
      "streetwear","kurti with jeans", "ethnic casual", "boho"
    ],
    "category": "outfits",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "soft-summer", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-473",
    "name": "Elegant Office Layered Look",
    "description": "A polished and structured ensemble perfect for business or formal settings. It features a crisp white puff-sleeve shirt layered under a sleeveless, double-breasted brown midi dress. Paired with sleek brown high-heeled pumps and a luxe Coach shoulder bag in tan and ivory tones with gold hardware. A balanced mix of classic tailoring and modern femininity.",
    "image": "/Warm Spring/Casual/1.jpg",
    "colors": [
      "#dddddd",
      "#c7b39c",
      "#693d30",
      "#7a635a",
      "#ac906f",
      "#241711"
    ],
    "keywords": [
      "casual","elegant outfit", "layered dress"
    ],
    "category": "outfits",
    "styleCategories": [
      "casual", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-474",
    "name": "Casual Modest Chic",
    "description": "A refined modest look blending casual and sophisticated elements. Features a black button-down shirt paired with a high-waisted A-line denim maxi skirt. Styled with black heeled ankle boots and a brown leather shoulder bag. Accessorized with gold-toned bangles and a matching brown hijab for a cohesive and elegant finish. Perfect for a smart-casual day out or modest officewear.",
    "image": "/Warm Spring/Casual/2.jpg",
    "colors": [
      "#e1dddc",
      "#1f1f1f",
      "#6c6c6b",
      "#614842",
      "#a1a9a9",
      "#7e8d8f"
    ],
    "keywords": [
      "casual","modest fashion", "denim skirt", "black shirt"
    ],
    "category": "modestwear",
    "styleCategories": [
      "casual", "modest", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-475",
    "name": "Boho Cozy Streetwear",
    "description": "A playful blend of bohemian and street style. This look features a colorful, crocheted crop sweater paired with wide-leg cream trousers. Completed with white high-top sneakers for casual comfort. Accessories include bold gold lightning bolt earrings, a beige Timex watch, white over-ear headphones, voluminous lashes, and a soft red lip for a touch of glam. Ideal for creative hangouts, music lovers, or relaxed city strolls.",
    "image": "/Warm Spring/Casual/3.jpg",
    "colors": [
      "#efefef",
      "#cecece",
      "#c0b2a2",
      "#767676",
      "#9f423c",
      "#c26764"
    ],
    "keywords": [
      "casual","crochet top", "wide-leg pants"
    ],
    "category": "outfits",
    "styleCategories": [
      "casual", "bohemian", "streetwear"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-476",
    "name": "Cream Monochrome Elegance",
    "description": "A sophisticated and modest outfit featuring a long, cream-colored wrap dress with subtle pleating and a soft drape. Paired with a quilted cream shoulder bag from Cavalli Class, detailed with a bold western-style buckle and thick logo strap. This look is ideal for elegant luncheons, formal meetings, or daytime events that call for a polished yet feminine presence.",
    "image": "/Warm Spring/Casual/4.jpg",
    "colors": [
      "#f5f4ee",
      "#dacdc2",
      "#b3a9a0",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual","cream dress", "wrap dress", "elegant"
    ],
    "category": "elegant springwear",
    "styleCategories": [
      "casual", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-477",
    "name": " Chic Earth-Tone Ensemble",
    "description": " A refined yet cozy outfit perfect for transitional seasons. It features a brown satin midi skirt paired with a layered top look: a white ribbed knit base and a beige crochet tie-front cardigan. Accessories include white pointed-toe slingback heels, a structured brown shoulder bag with a large gold clasp, gold hoop earrings, and layered necklaces. This look exudes effortless elegance with a vintage flair—ideal for brunch, art gallery visits, or stylish daytime gatherings.",
    "image": "/Warm Spring/Casual/5.jpeg",
    "colors": [
      "#f3efed",
      "#bba083",
      "#40312e",
      "#765c51",
      "#1b1612",
      "#ffffff"
    ],
    "keywords": [
      "casual","crochet cardigan", "satin skirt"
    ],
    "category": "semi-florals",
    "styleCategories": [
      "casual", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-478",
    "name": "Chic Earth-Tone Ensemble",
    "description": "A refined yet cozy outfit perfect for transitional seasons. It features a brown satin midi skirt paired with a layered top look: a white ribbed knit base and a beige crochet tie-front cardigan. Accessories include white pointed-toe slingback heels, a structured brown shoulder bag with a large gold clasp, gold hoop earrings, and layered necklaces. This look exudes effortless elegance with a vintage flair—ideal for brunch, art gallery visits, or stylish daytime gatherings.",
    "image": "/Warm Spring/Casual/6.jpeg",
    "colors": [
      "#eeeae7",
      "#bba083",
      "#443530",
      "#765c51",
      "#1b1612",
      "#ffffff"
    ],
    "keywords": [
      "casual","crochet cardigan", "satin skirt"
    ],
    "category": "semi-florals",
    "styleCategories": [
      "casual", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-479",
    "name": "Regal Ethnic Gold Jumpsuit Ensemble",
    "description": "A luxurious and culturally rich outfit featuring a gold brocade jumpsuit with intricate traditional motifs and a fitted waistline. Paired with statement green and gold chandelier earrings, a green dial gold watch, and a green embellished potli bag. The look is completed with traditional embroidered juttis, a sleek low bun hairstyle, stacked bangles, red lipstick, and a classic fragrance. Ideal for festive occasions, weddings, or cultural events where elegance is essential.",
    "image": "/Warm Spring/Ethnic/1.jpg",
    "colors": [
      "#f3f1ef",
      "#bfae9b",
      "#e9dabd",
      "#9f785e",
      "#566d56",
      "#295624"
    ],
    "keywords": [
      "ethnic","ethnic wear", "brocade jumpsuit"
    ],
    "category":  "traditional",
    "styleCategories": [
      "ethnic","regal", "ornate",
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-480",
    "name": "Ivory & Black Embroidered Lehenga Look",
    "description": "An elegant ethnic outfit featuring a heavily embroidered black and maroon blouse with a matching dupatta, paired with a richly textured ivory lehenga skirt. Accessories include floral pearl studs, a pearl choker necklace, oxidized bangles, nude gold-detailed nails, and intricately embellished golden juttis. The soft, wavy half-up hairstyle with a delicate hair chain adds to the regal and romantic charm. Perfect for weddings, receptions, or traditional ceremonies.",
    "image": "/Warm Spring/Ethnic/2.jpg",
    "colors": [
      "#eadac3",
      "#b19f94",
      "#84786e",
      "#805345",
      "#583b33",
      "#1f1917"
    ],
    "keywords": [
      "ethnic","lehenga", "traditional outfit", "ethnic wear"
    ],
    "category":  "festive",
    "styleCategories": [
      "ethnic","regal", "ornate",
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-481",
    "name": "Pastel Green Embroidered Sharara Set",
    "description": "A delicate pastel green ethnic outfit featuring a heavily embroidered long kurta with bell sleeves paired with matching sharara pants. The ensemble is complemented by intricately designed traditional juttis, matching green bangles, and elegant gold and pearl earrings. Accessories include a mint green gemstone ring, a soft green eye makeup look, a vibrant pink lipstick for contrast, and a multicolored embellished potli bag. The hairstyle is a half-up style adorned with floral hair accessories. Perfect for festive occasions, weddings, or cultural celebrations.",
    "image": "/Warm Spring/Ethnic/3.jpg",
    "colors": [
      "#d6e7f7",
      "#afaeac",
      "#7f8d7e",
      "#d6ceb3",
      "#897d4c",
      "#c02b6d"
    ],
    "keywords": [
      "ethnic","sharara", "traditional outfit", "festive wear"
    ],
    "category": "festive",
    "styleCategories": [
      "ethnic","regal", "ornate",
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-482",
    "name": "ink & Orange Embroidered Sharara Set",
    "description": "A vibrant ethnic outfit featuring a richly embroidered pink kurta paired with a dual-tone pink and orange sharara, complemented by a matching pink dupatta with golden accents. Accessories include a sparkling gold and white stone necklace set with earrings, a floral ring, golden bangles, a traditional embroidered potli bag, and embellished pink juttis. The look is completed with a delicate floral hair bun and bright pink lip color. Ideal for festive occasions, weddings, and traditional celebrations.",
    "image": "/Warm Spring/Ethnic/4.jpg",
    "colors": [
      "#f9f4e9",
      "#d3366c",
      "#b25f67",
      "#bd9d8b",
      "#d6ccac",
      "#983549"
    ],
    "keywords": [
      "ethnic","sharara", "traditional outfit", "ethnic wear"
    ],
    "category": "traditional",
    "styleCategories": [
      "ethnic","regal", "ornate",
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-483",
    "name": "Brown Embroidered Ethnic Dress",
    "description": "A traditional brown ethnic outfit featuring intricate gold embroidery on the kameez and sharara pants, paired with a heavily embroidered dupatta. The ensemble is accessorized with gold and brown bangles, statement earrings, a maang tikka, and elegant brown heels. Perfect for festive or formal occasions.",
    "image": "/Warm Spring/Ethnic/5.jpg",
    "colors": [
      "#e7e6e1",
      "#2e2620",
      "#4c4440",
      "#815c49",
      "#cf9476",
      "#998168"
    ],
    "keywords": [
      "ethnic","embroidered dress", "traditional outfit"
    ],
    "category": "ethnicwear",
    "styleCategories": [
      "ethnic","regal", "ornate",
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-484",
    "name": "Yellow Ribbed Midi Dress with Black Layering",
    "description": "A stylish yellow ribbed midi dress with spaghetti straps layered over a fitted black long-sleeve top. The outfit is complemented by a sleek black coat, black high-heeled sandals, a light yellow shoulder bag, and delicate gold jewelry including hoop earrings, a necklace, and a watch. Perfect for a chic daytime or evening look.",
    "image": "/Warm Spring/Formal/1.jpeg",
    "colors": [
      "#e5e5e5",
      "#222325",
      "#898757",
      "#dccfb8",
      "#fcf3a4",
      "#989898"
    ],
    "keywords": [
      "formal","yellow dress", "layered outfit", "chic"
    ],
    "category": "casualwear",
    "styleCategories": [
      "formal", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-485",
    "name": "Elegant Business Winter Ensemble",
    "description": "A sophisticated and polished outfit perfect for a winter office setting. It features a creamy draped blouse paired with tailored brown wide-leg trousers. A deep chocolate wrap coat adds warmth and structure, complemented by high-heeled grey boots and a woven leather handbag. Silver jewelry and a pearl pendant necklace finish the look with understated elegance.",
    "image": "/Warm Spring/Formal/2.jpg",
    "colors": [
      "#e8e7e6",
      "#382a29",
      "#c7c4c0",
      "#665853",
      "#908887",
      "#ffffff"
    ],
    "keywords": [
      "formal","elegant office wear", "wide-leg trousers"
    ],
    "category": "professional-wear",
    "styleCategories": [
      "formal", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-486",
    "name": "Monochrome Minimalist Power Look",
    "description": "A sleek and stylish outfit ideal for high-impact appearances or sophisticated daywear. It features a sleeveless ivory top tucked into high-waisted wide-leg cream trousers, cinched with a light tan belt. A flowing, oversized black coat adds drama and structure, while a statement Louis Vuitton bag in classic brown monogram print injects iconic luxury into the ensemble.",
    "image": "/Warm Spring/Formal/3.jpg",
    "colors": [
      "#f0ede8",
      "#231d18",
      "#d9d3c4",
      "#533c26",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal","monochrome outfit", "minimalist style", "power dressing"
    ],
    "category": "professional-wear",
    "styleCategories": [
      "formal", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-487",
    "name": "Elegant Sage Draped Dress Look",
    "description": "A graceful and refined outfit centered around a sage green kaftan-style draped dress, perfect for formal occasions or elevated daytime events. The ensemble is complemented by gold statement fan-shaped earrings, a gold bracelet watch, and strappy heeled sandals with gold embellishments. A quilted white Dior handbag adds a luxurious touch, creating a harmonious balance of soft tones and metallic accents.",
    "image": "/Warm Spring/Modest/1.jpg",
    "colors": [
      "#e5e5e5",
      "#d7c095",
      "#9c9a85",
      "#807d5e",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest","draped dress", "sage green outfit", "kaftan chic"
    ],
    "category": "eveningwear",
    "styleCategories": [
      "modest", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-488",
    "name": "Coral Maxi Dress with Green Accents",
    "description": "A chic and cheerful outfit built around a coral pink maxi dress with long sleeves and a modest neckline. Styled with a green handbag featuring a floral embroidery, off-white block heel sandals, and delicate gold jewelry including a pendant necklace and pearl drop earrings. This look combines softness and playfulness, making it ideal for brunches, garden parties, or daytime events.",
    "image": "/Warm Spring/Modest/2.jpeg",
    "colors": [
      "#ecebdb",
      "#fb8885",
      "#dfaea7",
      "#c98a87",
      "#e0575b",
      "#23403b"
    ],
    "keywords": [
      "modest","coral dress", "spring fashion", "feminine outfit"
    ],
    "category": "casual chic",
    "styleCategories": [
      "modest","feminine", "elegant"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-489",
    "name": "Satin White Dress with Brown Duster",
    "description": "An elegant and graceful ensemble featuring a satin white belted dress layered with a flowy brown duster. Accessories include pearl-accented bag, white pointed-toe slingback heels with black details, bold floral-shaped gold earrings, and a sheer abstract-patterned headscarf. A bottle of Chanel No.5 perfume adds a classic touch. Perfect for a refined evening event or a sophisticated formal gathering.",
    "image": "/Warm Spring/Modest/3.jpg",
    "colors": [
      "#e9e9e9",
      "#d8cbba",
      "#b19e8b",
      "#8e6d5a",
      "#5d4a41",
      "#ffffff"
    ],
    "keywords": [
      "modest","white satin dress", "brown duster", "modest fashion"
    ],
    "category": "formalwear",
    "styleCategories": [
      "modest", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring",  "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-490",
    "name": "Cream Monochrome Elegance",
    "description": "A graceful and timeless outfit built around a cream high-neck maxi dress with gathered waist detailing. Paired with a matching cream scarf, classic nude pointed-toe Louboutin pumps, and a delicately embroidered Dior handbag. The look is accessorized with a gold bangle, a statement gold Serpenti-style watch, and exudes polished sophistication. Ideal for formal gatherings, evening events, or elegant occasions.",
    "image": "/Warm Spring/Modest/4.jpg",
    "colors": [
      "#f6f4f0",
      "#d0bcad",
      "#b39161",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest","cream dress", "monochrome look"
    ],
    "category": "formal-elegance",
    "styleCategories": [
      "modest", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-491",
    "name": "",
    "description": "",
    "image": "/Warm Spring/Modest/5.jpg",
    "colors": [
      "#a59595",
      "#401d17",
      "#eff2f6",
      "#c7d3de",
      "#c1b7b2",
      "#574035"
    ],
    "keywords": [
      "modest"
    ],
    "category": "",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "warm-spring"
    ]
  },
  {
    "id": "item-492",
    "name": "Powder Blue & Chocolate Contrast",
    "description": "A smart and modest ensemble built around a powder blue belted shirt dress with puff sleeves. This look is elevated with chocolate brown accents including a matching hijab, pointed slingback heels, a Saint Laurent velvet handbag, and a minimalist leather strap watch. Finished with delicate floral stud earrings, the outfit exudes effortless elegance with a contemporary twist—ideal for brunches, work events, or polished daytime outings.",
    "image": "/Warm Spring/Modest/6.jpg",
    "colors": [
      "#e2dfdb",
      "#5a341e",
      "#bba68d",
      "#6c4f45",
      "#35170b",
      "#ffffff"
    ],
    "keywords": [
      "modest","powder blue dress", "chocolate brown accessories"
    ],
    "category": "chic-daytime",
    "styleCategories": [
      "modest", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-493",
    "name": "Earthy Neutral Elegance",
    "description": "A refined, modest winter outfit featuring a dark chocolate wool coat from Zara, paired with a draped bell-sleeve blouse in a matching tone. The flowing asymmetrical beige skirt adds softness and fluidity, while the taupe hijab ties the earthy palette together. Finished with brown leather ankle boots and a unique warped-face watch for a subtle artistic flair. Ideal for formal gatherings, stylish workwear, or a chic winter day out.",
    "image": "/Warm Spring/Modest/7.jpg",
    "colors": [
      "#e9e9e9",
      "#d5b7a0",
      "#b3937e",
      "#382b23",
      "#584f4b",
      "#ffffff"
    ],
    "keywords": [
      "modest","neutral outfit", "brown and beige"
    ],
    "category": "winter chic",
    "styleCategories": [
      "modest", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-494",
    "name": "Soft Beige Casual Layers",
    "description": "A light, layered everyday outfit with a romantic boho vibe. The soft cream peasant-style blouse pairs effortlessly with a flowy beige asymmetrical skirt. Complemented by a muted brown hijab, structured nude handbag, and chunky off-white platform sneakers, this look blends femininity with comfort. Accessorized with a minimalist brown leather watch and dainty gold jewelry, it’s ideal for casual days, brunches, or spring strolls.",
    "image": "/Warm Spring/Modest/8.jpg",
    "colors": [
      "#efe5e1",
      "#bf9181",
      "#cec8c4",
      "#805a45",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest","neutral tones", "beige outfit", "modest casual"
    ],
    "category": "casual chic",
    "styleCategories": [
      "modest", "elegant", "feminine"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-495",
    "name": "Yellow Festive Anarkali Ensemble",
    "description": "A radiant yellow layered Anarkali dress paired with rich traditional accessories. This outfit is perfect for festive occasions, weddings, or sangeet nights. Styled with red embellished juttis, bold red lipstick, golden bangles, kundan earrings, and a floral hair bun accessory, it celebrates vibrant Indian culture. The makeup emphasizes warm tones, while the small gold heart-shaped clutch adds a playful touch.",
    "image": "/Warm Spring/Party/1.jpg",
    "colors": [
      "#32d2b6",
      "#ad9985",
      "#8b5c28",
      "#bd8e4a",
      "#79b6a2",
      "#8ee3ce"
    ],
    "keywords": [
      "party","festive wear", "Anarkali", "Indian ethnic"
    ],
    "category": "traditional",
    "styleCategories": [
      "party","ethnic" 
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-496",
    "name": "Sage Green Floral Sharara Set",
    "description": "Sage green embroidered kurta with matching pleated sharara pants, paired with a sheer floral dupatta featuring pink roses and silver embellishments. Accessorized with ornate silver jhumka earrings, gold and pink enamel bangles, pearl-adorned potli bag, and embroidered silver juttis",
    "image": "/Warm Spring/Party/2.jpg",
    "colors": [
      "#f0dfdf",
      "#d4bebd",
      "#ad9a90",
      "#ac7a66",
      "#6f6b53",
      "#535132"
    ],
    "keywords": [
      "party","sharara suit", "sage green"
    ],
    "category": "outfits",
    "styleCategories": [
      "party", "traditional"
    ],
    "seasons": [
      "warm-spring"
    ]
  },
  {
    "id": "item-497",
    "name": "Floral Garden Romance Ensemble",
    "description": "Dreamy floral chiffon maxi dress paired with cream knit cardigan featuring embroidered flowers, styled with nude strappy heels, straw boater hat, and pearl-beaded wicker handbag. Accessorized with pearl earrings, delicate gold necklace, neutral eyeshadow palette, and accompanied by a cheerful sunflower bouquet",
    "image": "/Warm Spring/Party/3.jpg",
    "colors": [
      "#eeeeee",
      "#ead1b6",
      "#f0d719",
      "#827643",
      "#bea927",
      "#a2a17a"
    ],
    "keywords": [
      "party","floral maxi dress", "garden party", "romantic"
    ],
    "category": "outfits",
    "styleCategories": [
      "party", "romantic", "feminine"
    ],
    "seasons": [
      "warm-spring"
    ]
  },
  {
    "id": "item-498",
    "name": "Turquoise Boho Casual",
    "description": "Turquoise embroidered tunic with gold pattern, paired with light wash denim wide-leg jeans. Accessorized with multicolored patterned jutti flats, vintage jhumka earrings with pink and mint details, pink checkered Coach shoulder bag, and coordinating mint floral scrunchie.",
    "image": "/Warm Spring/Streetwear/1.jpg",
    "colors": [
      "#f0f0f0",
      "#89a19b",
      "#777e77",
      "#665b4f",
      "#ceaa91",
      "#aec8dc"
    ],
    "keywords": [
      "streetwear","boho casual", "embroidered tunic", "denim"
    ],
    "category": "casual",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-499",
    "name": "Teal Floral Boho Casual",
    "description": "Teal floral babydoll blouse with ruffled bell sleeves paired with light wash flared jeans. Accessorized with black canvas sneakers, gold dome stud earrings, delicate gold chain anklet, cream canvas tote bag with strawberry embroidery, and plumeria flower hair accent.",
    "image": "/Warm Spring/Streetwear/2.jpg",
    "colors": [
      "#eef6eb",
      "#98958b",
      "#c0b19b",
      "#637777",
      "#f5c95c",
      "#f1e2b4"
    ],
    "keywords": [
      "streetwear","floral blouse"
    ],
    "category": "outfit",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "warm-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-500",
    "name": "Mustard Paisley Boho Casual",
    "description": "Mustard paisley print babydoll blouse with voluminous sleeves paired with high-waisted light wash wide-leg jeans. Accessorized with oxidized silver jhumka earrings and matching bangles, creating a fusion of traditional and bohemian street style.",
    "image": "/Warm Spring/Streetwear/3.jpg",
    "colors": [
      "#e5e5e5",
      "#94613a",
      "#ad8b6c",
      "#cfbfb0",
      "#6d6e6a",
      "#92afc0"
    ],
    "keywords": [
      "streetwear","boho casual", "paisley print", "denim"
    ],
    "category": "outfit",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-501",
    "name": "Festive Indo-Western Glam",
    "description": "Fuchsia and orange brocade crop top with side ties paired with high-waisted dark blue wide-leg jeans. Styled with gold jhumka hoop earrings, traditional Indian armlet, and a quirky gold watch. Finished with a metallic gold clutch, strappy gold stilettos, and a bold deep red lipstick for a glamorous Indo-Western fusion look.",
    "image": "/Warm Spring/Streetwear/4.jpg",
    "colors": [
      "#e5e5e5",
      "#8a7c55",
      "#b6a67d",
      "#bebfa8",
      "#e5b366",
      "#6f4e35"
    ],
    "keywords": [
      "streetwear", "indo-western", "festive wear"
    ],
    "category": "outfit",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-502",
    "name": "Boho Indie Street Casual",
    "description": "Flowy red-printed boho kurta top paired with light-wash cargo jeans for a laid-back Indo-Western vibe. Completed with white sneakers, oxidized silver jhumka earrings, a minimal silver bracelet, square-dial watch, and a cherry red shoulder bag. Makeup includes nude lip gloss and soft peach blush. Finished with elegant henna art on the hands for a touch of tradition.",
    "image": "/Warm Spring/Streetwear/5.jpg",
    "colors": [
      "#e7e7e7",
      "#a45654",
      "#c47b74",
      "#949193",
      "#c5c2bc",
      "#555b4e"
    ],
    "keywords": [
      "streetwear","indo-western", "boho kurta"
    ],
    "category": "outfit",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-503",
    "name": "Spring Daisy Casual Set",
    "description": "A cozy light blue cardigan with daisy patterns paired with wide-leg light wash denim jeans, complemented by a cream crochet tote bag and gold jewelry.",
    "image": "/Warm Spring/Streetwear/6.jpeg",
    "colors": [
      "#e7ebf1",
      "#a5b2cc",
      "#938378",
      "#7195aa",
      "#e0d7c2",
      "#ffffff"
    ],
    "keywords": [
      "streetwear","light blue cardigan", "daisy patterns"
    ],
    "category": "casual",
    "styleCategories": [
      "streetwear","bohemian", "casual chic"
    ],
    "seasons": [
      "warm-spring", "light-spring", "clear-spring", "soft-autumn"
    ]
  },
  {
    "id": "item-504",
    "name": "Autumn Elegance Set",
    "description": "A cozy beige oversized sweater with a high neck and ribbed cuffs, paired with a sophisticated brown midi skirt for an effortlessly chic look. A classic brown beret adds a vintage Parisian touch, while black loafers with gold detailing complement the ensemble with refined charm. White frilled socks peek out for a playful contrast, and lace earrings bring a delicate, feminine flair. The cream-toned tote bag is a practical yet stylish addition, perfect for carrying essentials.",
    "image": "/Warm Autumn/Casual/1.jpg",
    "colors": [
      "#e5e5e5",
      "#c6b4a3",
      "#312118",
      "#8b796a",
      "#b79367",
      "#715d47"
    ],
    "keywords": [
      "casual","beige sweater", "high neck"
    ],
    "category": "vintage",
    "styleCategories": [
      "casual", "vintage", "feminine"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-505",
    "name": "Camel & Black Sleek Ensemble",
    "description": "Camel oversized V-neck blouse with cuffed short sleeves paired with tailored black dress pants. Accessorized with patent black pointed stiletto pumps, structured black shoulder bag with gold hardware, layered gold pendant necklace, gold hoop earrings, and delicate gold hair pin.",
    "image": "/Warm Autumn/Casual/2.jpeg",
    "colors": [
      "#f0f0f0",
      "#d9ab89",
      "#bb8d6c",
      "#9a6949",
      "#212121",
      "#474747"
    ],
    "keywords": [
      "casual","camel blouse", "black dress pants"
    ],
    "category": "outfit",
    "styleCategories": [
      "casual", "elegant", "feminine"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-506",
    "name": "Toile & Red Boho Ethnic Ensemble",
    "description": "White cropped blouse with forest green toile print paired with vibrant red tiered maxi skirt featuring white floral embroidery and tassel tie details. Accessorized with ornate silver jhumka earrings, stacked silver bangles, embroidered cream mojari slippers, colorful tribal embroidered bag with cowrie shells, and Chanel Coco Mademoiselle perfume.",
    "image": "/Warm Autumn/Ethnic/1.jpg",
    "colors": [
      "#5e4b3d",
      "#9b8c7e",
      "#baafa4",
      "#7e6d5f",
      "#bf3439",
      "#8d3837"
    ],
    "keywords": [
      "ethnic","boho", "toile print", "red skirt"
    ],
    "category": "festive",
    "styleCategories": [
      "ethnic", "bohemian" 
    ],
    "seasons": [
      "warm-autumn",     
    ]
  },
  {
    "id": "item-507",
    "name": "Marigold Floral Lehenga Set",
    "description": "Vibrant yellow floral lehenga featuring red and pink floral embroidery with gold border trim, matching kurta top, and sheer yellow dupatta with delicate embellishments. Accessorized with gold and ruby jhumka earrings, gold bangles with dangling charms, maroon embroidered clutch, gold strappy heels, and bold red lipstick.",
    "image": "/Warm Autumn/Ethnic/2.jpg",
    "colors": [
      "#efba4a",
      "#e9e3da",
      "#d49d77",
      "#c69222",
      "#8d7b20",
      "#cb7552"
    ],
    "keywords": [
      "ethnic","lehenga", "traditional outfit", "festive wear"
    ],
    "category": "traditional",
    "styleCategories": [
      "ethnic", "regal", "ornate"
    ],
    "seasons": [
      "warm-autumn"
    ]
  },
  {
    "id": "item-508",
    "name": "Vibrant Green Ethnic Set",
    "description": "A vibrant green kurta with puff sleeves, woven hem detail, and straight pants, paired with red and pearl chandbali earrings, matching red bangles, and embellished green juttis.",
    "image": "/Warm Autumn/Ethnic/3.jpg",
    "colors": [
      "#f0f1ee",
      "#71452b",
      "#bb8e6d",
      "#a76c40",
      "#dcbd9b",
      "#6e8714"
    ],
    "keywords": [
      "ethnic","green kurta", "traditional outfit", "festive wear"
    ],
    "category": "traditional",
    "styleCategories": [
      "ethnic", "regal", "ornate"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-509",
    "name": "Pastel Green Embellished Lehenga Set",
    "description": "A pastel green lehenga set featuring a heavily embellished peplum blouse with intricate sequin work and a flowy net skirt. Paired with statement pearl and pastel earrings, a matching embellished clutch, studded block heels, and a floral hair accessory. Finished with a deep red lipstick for a bold touch.",
    "image": "/Warm Autumn/Ethnic/4.jpg",
    "colors": [
      "#e8e7df",
      "#2b232d",
      "#62504a",
      "#d0b19a",
      "#a6a075",
      "#79101c"
    ],
    "keywords": [
      "ethnic","pastel green lehenga", "peplum blouse", "embellished skirt"
    ],
    "category": "traditional",
    "styleCategories": [
      "ethnic", "regal", "ornate"
    ],
    "seasons": [
      "warm-autumn" 
    ]
  },
  {
    "id": "item-510",
    "name": "Casual Desi Fusion Set",
    "description": "A relaxed, off-white embroidered kurta paired with classic high-waisted denim, chunky oxidized silver bangles, statement jhumkas, and a black hair claw clip. Completed with crisp white sneakers for a trendy, Indo-Western vibe.",
    "image": "/Warm Autumn/Ethnic/5.jpg",
    "colors": [
      "#f0f0f0",
      "#db8d72",
      "#33312f",
      "#c4bfaf",
      "#8f8a80",
      "#a7664c"
    ],
    "keywords": [
      "ethnic","casual", "Indo-Western", "denim"
    ],
    "category": "outfit",
    "styleCategories": [
      "ethnic", "bohemian", "casual chic"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-511",
    "name": "Deep Red Embroidered Sharara Set",
    "description": "A striking deep red sharara set featuring a heavily embroidered sleeveless kurti with intricate lace detailing, paired with wide-legged sharara pants. Styled with oxidized silver hoop earrings, embellished stone-studded bangles, statement silver choker, and golden block heels for a bold, traditional look.",
    "image": "/Warm Autumn/Ethnic/6.jpg",
    "colors": [
      "#ececec",
      "#751c28",
      "#c3bfbc",
      "#514c4a",
      "#74706b",
      "#844b38"
    ],
    "keywords": [
      "ethnic","red sharara set", "embroidered kurti", "lace detailing"
    ],
    "category": "traditional",
    "styleCategories": [
      "ethnic","regal", "ornate"
    ],
    "seasons": [
      "warm-autumn"
    ]
  },
  {
    "id": "item-512",
    "name": "Olive Green Elegant Ensemble",
    "description": "A graceful olive green embroidered kurta with matching straight pants and a delicate dupatta, paired with statement kundan earrings, a sparkling gemstone ring, and a satin clutch. Completed with ruffled block heels and a romantic half-up, half-down hairstyle adorned with baby's breath for a refined, feminine touch.",
    "image": "/Warm Autumn/Ethnic/7.jpg",
    "colors": [
      "#dce3d4",
      "#b99f7e",
      "#cbbfa9",
      "#928d52",
      "#6b682f",
      "#37512e"
    ],
    "keywords": [
      "ethnic","olive green kurta", "embroidered outfit", "elegant ensemble"
    ],
    "category": "traditional",
    "styleCategories": [
      "ethnic", "regal", "ornate"
    ],
    "seasons": [
      "warm-autumn"
    ]
  },
  {
    "id": "item-513",
    "name": "Refined Neutrals Workwear Look",
    "description": "An effortlessly elegant business casual look featuring a light camel double-breasted blazer paired with a fitted deep brown scoop-neck top and high-waisted black wide-leg trousers. The look is complemented with a sleek brown Jacquemus shoulder bag, crisp white slingback block heels, and minimal yet polished gold jewelry including hoop earrings, a layered pendant necklace, and a gold wristwatch. Perfect for a confident and professional appearance with a contemporary edge.",
    "image": "/Warm Autumn/Formal/1.jpeg",
    "colors": [
      "#ececec",
      "#be9b7d",
      "#957d66",
      "#6d514a",
      "#e9c6ab",
      "#1e1e1e"
    ],
    "keywords": [
      "formal", "neutral workwear", "camel blazer", "wide-leg trousers", "office chic"
    ],
    "category": "formalwear",
    "styleCategories": [
      "formal","professional", "minimalist"
    ],
    "seasons": [
      "warm-autumn"
    ]
  },
  {
    "id": "item-514",
    "name": "Vintage-Inspired Neutral Luxe Look",
    "description": "A refined and vintage-inspired outfit featuring a tailored checkered jacket with gold buttons and warm brown trim, paired with high-waisted beige wide-leg trousers. The ensemble is accessorized with a beige Louis Vuitton monogram scarf, a structured brown leather handbag, a delicate clover motif gold bracelet, and beige-and-black cap-toe slingback heels from Chanel. Ideal for a polished fall outing or a heritage-style day look.",
    "image": "/Warm Autumn/Formal/2.jpg",
    "colors": [
      "#f3f2f0",
      "#b39b76",
      "#cfc0aa",
      "#786051",
      "#56412f",
      "#21211f"
    ],
    "keywords": [
      "formal","vintage style", "checkered jacket", "neutral outfit"
    ],
    "category": "formalwear",
    "styleCategories": [
      "formal", "vintage", "elegant"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-515",
    "name": "Chic Cozy Neutrals with Street Style Twist",
    "description": "A balanced fusion of cozy elegance and streetwear featuring a dark brown oversized ribbed sweater paired with high-waisted beige wide-leg trousers. The outfit includes beige-and-brown Nike Dunk sneakers for a casual edge, a minimalist beige Jacquemus handbag, and a camel Gucci monogram scarf. Accessories include gold floral and chain jewelry, and a warm, sophisticated perfume, evoking an effortless fall city vibe.",
    "image": "/Warm Autumn/Formal/3.jpg",
    "colors": [
      "#e1e0df",
      "#6b523d",
      "#99744e",
      "#b99266",
      "#3d322b",
      "#c9ae92"
    ],
    "keywords": [
      "formal", "cozy neutrals", "oversized sweater", "street style"
    ],
    "category": "casual",
    "styleCategories": [
      "formal", "streetwear", "casual chic"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-516",
    "name": "Polished Green & Cream Elegance",
    "description": "This look exudes graceful sophistication with a fitted olive green coat layered over a matching olive turtleneck. A cream tailored vest adds structure, while cream wide-leg trousers keep the silhouette refined. Accessories include a textured green shoulder bag, elegant drop earrings, and a choice between olive green flats or two-tone pumps for versatility. Perfect for elevated office wear or smart casual outings in cooler months.",
    "image": "/Warm Autumn/Formal/4.jpg",
    "colors": [
      "#e1cfb7",
      "#f5f3ee",
      "#474a38",
      "#a99b81",
      "#2b2d17",
      "#64645a"
    ],
    "keywords": [
      "formal", "green coat", "cream trousers", "elegant outfit"
    ],
    "category": "smart-casual",
    "styleCategories": [
      "formal", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-517",
    "name": "Refined Neutrals in Taupe & Chocolate",
    "description": "This ensemble is a masterclass in understated luxury, pairing a taupe Zara double-breasted blazer with a matching midi pencil skirt. Accessories are rich in chocolate brown tones, from sleek ankle boots to a structured handbag and a silk scarf. Gold jewelry and a leather-strap watch add sophistication, while Tom Ford’s Ébène Fumé perfume enhances the aura of refined elegance. Ideal for high-end business meetings or polished autumn outings.",
    "image": "/Warm Autumn/Formal/5.jpg",
    "colors": [
      "#f0eeed",
      "#b29f8f",
      "#887769",
      "#5f4541",
      "#f2aa54",
      "#421c0e"
    ],
    "keywords": [
      "formal", "taupe blazer", "chocolate brown", "elegant outfit"
    ],
    "category": "formalwear",
    "styleCategories": [
      "formal", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-518",
    "name": "Soft Neutrals with a Feminine Touch",
    "description": "This graceful outfit pairs an elegant taupe wrap blouse with high-waisted cream wide-leg trousers for a clean, polished silhouette. Accents like the sparkly pointed-toe slingback heels, structured two-tone handbag, and gold wristwatch add sophistication and warmth. The finishing touch is Yves Saint Laurent Libre perfume, complementing the refined and subtly romantic look. Perfect for brunch meetings, day events, or office elegance.",
    "image": "/Warm Autumn/Formal/6.jpg",
    "colors": [
      "#e9e9e9",
      "#8e7960",
      "#b49c83",
      "#c5c1ac",
      "#5e4c3d",
      "#ffffff"
    ],
    "keywords": [
      "formal","soft neutrals", "taupe wrap blouse", "elegant outfit"
    ],
    "category": "formalwear",
    "styleCategories": [
      "formal", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-519",
    "name": "Modern Parisian Minimalist",
    "description": "This outfit channels understated French chic with a cream cropped jacket and matching tailored trousers. The set features clean lines and button details, paired with classic quilted black Chanel ballet flats and a matching crossbody bag. The soft contrast of light neutrals with sleek black accessories delivers effortless sophistication. Ideal for a polished daytime look or casual business settings.",
    "image": "/Warm Autumn/Formal/7.jpg",
    "colors": [
      "#f2f1ec",
      "#e0d7c5",
      "#b6a581",
      "#60615f",
      "#363638",
      "#ffffff"
    ],
    "keywords": [
      "formal","modern chic", "cream jacket", "minimalist outfit"
    ],
    "category": "smart-formal",
    "styleCategories": [
      "formal", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-520",
    "name": "Cozy Autumn Modest Look",
    "description": "This fall-inspired modest outfit features a relaxed cream knit sweater paired with a chocolate brown midi skirt. Complemented by a matching brown hijab and adorable pumpkin-themed tote bag, the look leans into seasonal charm. Beige slip-on clogs and a maple leaf pendant necklace finish the outfit, offering both comfort and a whimsical autumnal touch. Ideal for casual outings or cozy seasonal gatherings.",
    "image": "/Warm Autumn/Modest/1.jpg",
    "colors": [
      "#f3f1ef",
      "#d9c9b9",
      "#3a2424",
      "#614c4b",
      "#e69d54",
      "#bc7433"
    ],
    "keywords": [
      "modest", "autumn outfit", "pumpkin tote bag", "cozy sweater"
    ],
    "category": "casual",
    "styleCategories": [
      "modest","casual", "feminine"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-521",
    "name": "Elegant Autumn Layered Outfit",
    "description": "This outfit features a warm brown turtleneck top paired with a dark chocolate brown tiered maxi skirt, creating an elegant silhouette. Layered with a cozy white cardigan adorned with floral embroidery, it adds a touch of softness and charm. Accessories include a matching brown scarf, a white and brown handbag, cream socks, and classic brown loafers, perfect for a stylish and comfortable autumn look",
    "image": "/Warm Autumn/Modest/2.jpg",
    "colors": [
      "#969291",
      "#4b352e",
      "#dad7cd",
      "#bdb1a4",
      "#736a67",
      "#0f0e0c"
    ],
    "keywords": [
      "modest", "layered outfit", "brown turtleneck", "elegant look"
    ],
    "category": "casual",
    "styleCategories": [
      "modest", "elegant", "feminine"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-522",
    "name": "Olive & Cream Vintage Elegant",
    "description": "Cream cropped cardigan with patch pockets paired with olive green pleated midi skirt. Accessorized with cherry-print silk neck scarf, cream rectangular sunglasses, burgundy leather Mary Jane flats, matching burgundy shoulder bag, delicate pearl necklace, gold rectangular watch, and light feminine perfume.",
    "image": "/Warm Autumn/Modest/3.jpg",
    "colors": [
      "#f1f1f0",
      "#d9d3c2",
      "#b0ae9b",
      "#6b6157",
      "#474d33",
      "#ffffff"
    ],
    "keywords": [
      "modest", "vintage outfit", "olive green skirt", "cream cardigan"
    ],
    "category": "outfit",
    "styleCategories": [
      "modest", "vintage", "elegant"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-523",
    "name": "Chocolate Brown Modest Ensemble",
    "description": "An elegant chocolate brown maxi dress with a V-neck, gathered waist, and long balloon sleeves. This sophisticated outfit is paired with matching brown accessories including a structured crossbody bag with gold hardware, comfortable low-heel ankle-strap shoes, and a coordinating brown scarf. The monochromatic styling creates a refined, modest look perfect for professional settings, religious gatherings, or elegant casual events.",
    "image": "/Warm Autumn/Modest/4.jpg",
    "colors": [
      "#e8e7e7",
      "#32201c",
      "#a89696",
      "#835f56",
      "#573d35",
      "#c9c5c1"
    ],
    "keywords": [
      "modest","chocolate brown", "modest dress"
    ],
    "category": "professional",
    "styleCategories": [
      "modest", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn"   
    ]
  },
  {
    "id": "item-524",
    "name": "Sage Green Modest Luxury Ensemble",
    "description": "An elegant sage green flowing abaya-style coat with cascade draping and ribbed sleeve details, layered over a soft beige ribbed maxi dress. This sophisticated outfit is accessorized with a matching sage green Dior Saddle bag featuring gold hardware, coordinating sage green block heel pumps with ankle straps, oversized gradient sunglasses with green frames, and a delicate green beaded bracelet. The monochromatic green styling with neutral undertones creates a refined, modest look that perfectly balances luxury and elegance.",
    "image": "/Warm Autumn/Modest/5.jpg",
    "colors": [
      "#e5e5e5",
      "#95a278",
      "#b6c39a",
      "#73815c",
      "#c5c4ca",
      "#5b4929"
    ],
    "keywords": [
      "modest","sage green", "modest fashion", "luxury"
    ],
    "category": "modest-wear",
    "styleCategories": [
      "modest", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-525",
    "name": "Champagne Satin Wrap Dress Ensemble",
    "description": "An elegant champagne satin wrap dress with billowy long sleeves, a flattering V-neckline, and a flowing asymmetrical hem. This sophisticated outfit is styled with bold red accents including a luxurious red silk hair bow and a structured vintage-inspired red leather shoulder bag. The look is completed with minimalist white block heel sandals and delicate gold accessories including layered pendant necklaces, bow drop earrings, and a classic gold watch. The combination creates a refined feminine aesthetic perfect for special occasions, dinner dates, or upscale events.",
    "image": "/Warm Autumn/Modest/6.jpeg",
    "colors": [
      "#f4f2f0",
      "#d7cfc4",
      "#c5ad94",
      "#d6243e",
      "#aa5f69",
      "#801422"
    ],
    "keywords": [
      "modest", "champagne satin", "wrap dress", "elegant outfit"
    ],
    "category": "casual",
    "styleCategories": [
      "modest", "elegant", "feminine"
    ],
    "seasons": [
      "warm-autumn"
    ]
  },
  {
    "id": "item-526",
    "name": "Olive and White Modest Elegance Ensemble",
    "description": "A sophisticated modest outfit featuring a crisp white oversized collar blouse paired with a flowing olive green maxi skirt. This refined look is accessorized with an olive green patterned silk head scarf, matching olive green oversized sunglasses, white strappy kitten heel sandals, and a quilted white Tory Burch crossbody bag with gold hardware. The outfit is completed with delicate pearl and gold accessories including a bracelet and a gold watch",
    "image": "/Warm Autumn/Modest/7.jpg",
    "colors": [
      "#f1f1f0",
      "#adab99",
      "#838070",
      "#5b5d47",
      "#cbc9bf",
      "#373924"
    ],
    "keywords": [
      "modest", "olive green", "white blouse", "elegant outfit"
    ],
    "category": "modest-luxury",
    "styleCategories": [
      "modest", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",    
    ]
  },
  {
    "id": "item-527",
    "name": "Brown and White Luxury Professional Ensemble",
    "description": "Sophisticated chocolate brown wrap blouse with billowy sleeves paired with crisp white wide-leg trousers. Accessorized with a structured brown leather bag, matching stiletto pumps, and elegant gold jewelry including a sculptural pendant, hoop earrings, and a classic watch. A perfect blend of professional polish and luxury style.",
    "image": "/Warm Autumn/Party/1.jpg",
    "colors": [
      "#f4f2ef",
      "#846748",
      "#413d42",
      "#a28669",
      "#6f412a",
      "#e1d29b"
    ],
    "keywords": [
      "party","professional attire", "luxury workwear"
    ],
    "category": "luxury",
    "styleCategories": [
      "party", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",     
    ]
  },
  {
    "id": "item-528",
    "name": "Sage and Cream Minimalist Luxury Ensemble",
    "description": "Elegant sage green linen wrap jacket paired with a cream wrap midi skirt and blush silk scarf. Accessorized with a matching sage woven handbag, pointed cream mules, and delicate gold jewelry including clover motif necklace and bracelet. This refined outfit combines soft neutral tones with luxurious textures for an effortlessly sophisticated look.",
    "image": "/Warm Autumn/Party/2.jpg",
    "colors": [
      "#edeeed",
      "#a09b85",
      "#d5b8ab",
      "#ffffff",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "party","sage green", "neutral tones"
    ],
    "category": "elegant casual",
    "styleCategories": [
      "party", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",     
    ]
  },
  {
    "id": "item-529",
    "name": "Bold Red Luxury Evening Ensemble",
    "description": "Dramatic red pleated chiffon maxi dress with billowy sleeves and high neckline, paired with matching red accessories. Features red patent stiletto mules and a luxurious red crocodile-embossed Kelly-style handbag with gold hardware. Complemented by statement gold and red heart earrings. This monochromatic red outfit creates a powerful, sophisticated look for formal events or luxury occasion",
    "image": "/Warm Autumn/Party/3.jpg",
    "colors": [
      "#e5e5e5",
      "#b33f3a",
      "#e0ceab",
      "#7c1518",
      "#ac9c80",
      "#986468"
    ],
    "keywords": [
      "party","red dress", "evening wear", "monochromatic"
    ],
    "category": "formal",
    "styleCategories": [
      "party", "elegant", "professional"
    ],
    "seasons": [
      "warm-autumn",
    ]
  },
  {
    "id": "item-530",
    "name": "Botanical-Inspired Green Boho Outfit",
    "description": "A coordinated green outfit featuring a floral-embroidered cropped jacket and wide-leg high-waisted pants. Accessorized with botanical-themed jewelry, cozy socks, green high-top sneakers with floral detail, and a matching green corduroy tote. Accents include a plant hair clip, sunglasses, and earthy-toned lifestyle items, evoking a grounded, nature-loving aesthetic ideal for casual outings, garden strolls, or a creative day out.",
    "image": "/Warm Autumn/Streetwear/1.jpg",
    "colors": [
      "#eee8d2",
      "#99a492",
      "#66775f",
      "#34462e",
      "#c6bda8",
      "#909563"
    ],
    "keywords": [
      "streetwear","boho style", "green outfit", "nature inspired"
    ],
    "category": "casual",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "warm-autumn",
    ]
  },
  {
    "id": "item-531",
    "name": "Boho-Casual Embroidered Top with Wide-Leg Denim",
    "description": "This relaxed outfit pairs an olive green boho-style embroidered blouse with high-waisted, wide-leg cuffed jeans. Complemented by black Adidas sneakers and a sleek black leather tote, this look blends comfort and polish—perfect for casual outings, travel, or a day of errands. The folk-inspired detailing on the blouse adds a soft, earthy charm to the sporty foundation.",
    "image": "/Warm Autumn/Streetwear/2.jpg",
    "colors": [
      "#e5e5e5",
      "#a49b6f",
      "#897b4f",
      "#574625",
      "#bab7a4",
      "#8ea8bb"
    ],
    "keywords": [
      "streetwear","casual outfit", "boho chic", "embroidered blouse"
    ],
    "category": "casual",
    "styleCategories": [
      "streetwear", "bohemian", "casual chic"
    ],
    "seasons": [
      "warm-autumn",
    ]
  },
    {
    "id": "item-1",
    "name": "Casual Knit Henley Outfit",
    "description": "A laid-back outfit featuring a sage green knit henley top, high-waisted straight-leg blue jeans, white sneakers, a black leather tote bag, and gold accessories including a heart pendant necklace and a watch.",
    "image": "/Clear Spring/Casual/1.jpeg",
    "colors": [
      "#e5e5e5",
      "#a2afaf",
      "#4b6c95",
      "#615c57",
      "#373536",
      "#181619"
    ],
    "keywords": [
      "casual",
      "henley", 
      "casual", 
      "blue jeans", 
      "tote bag", 
      "gold jewelry", 
      "comfortable"
    ],
    "category": "sweater",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-2",
    "name": "Chic Neutral Cargo Look",
    "description": "A cozy and stylish outfit featuring a cream oversized knit sweater, wide-leg black cargo pants, white New Balance sneakers, a black Saint Laurent tote, and accessorized with gold hoop earrings, a gold watch, a delicate gold necklace, and black rectangular sunglasses.",
    "image": "/Clear Spring/Casual/2.jpeg",
    "colors": [
      "#e2e2e2",
      "#17161b",
      "#b8b6ae",
      "#3c3b40",
      "#78674f",
      "#ffffff"
    ],
    "keywords": [
      "casual",
      "knit sweater",
      "cargo pants",
      "New Balance", 
      "neutral tones", 
      "casual chic", 
      "gold jewelry", 
      "Saint Laurent"
    ],
    "category": "cargo",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-3",
    "name": "Soft Blue Casual Denim Look",
    "description": "A feminine and relaxed look featuring a light blue oversized sweater, high-waisted blue jeans, Converse sneakers, a mini shoulder bag and gold jewelry",
    "image": "/Clear Spring/Casual/3.jpeg",
    "colors": [
      "#ebecee",
      "#8197af",
      "#57799c",
      "#31353a",
      "#65656a",
      "#314e73"
    ],
    "keywords": [
      "casual",
      "denim",
      "sweater",
      'high-waisted jeans'
    ],
    "category": "denim",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-4",
    "name": "Soft Pink Casual Denim Look",
    "description": "A feminine and relaxed look featuring a light pink oversized sweater, high-waisted blue jeans, white sneakers, and pastel pink accessories including a mini shoulder bag, round glasses, and luxury makeup items.",
    "image": "/Clear Spring/Casual/4.jpg",
    "colors": [
      "#e9e9e9",
      "#d8b7b8",
      "#a5acb7",
      "#76899c",
      "#485970",
      "#a2857f"
    ],
    "keywords": [
      "casual",
      "pink sweater",
      "denim",
      "casual",
      "feminine",
      "pastel",
      "soft style",
      "white sneakers", 
      "accessories"
    ],
    "category": "sweater",
    "styleCategories": [
      "casual",

    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-5",
    "name": "Elegant Ethnic Pink Sharara Look",
    "description": "A traditional Indian sharara outfit pairs a cream embroidered kurti with a bright pink sharara and dupatta, accessorized with jhumka earrings, pink bangles, silver nail extensions, a pink embroidered clutch, and matching khusas.",
    "image": "/Clear Spring/Ethnic/1.jpg",
    "colors": [
      "#f9e4ed",
      "#4e5251",
      "#907d66",
      "#aea089",
      "#a22752",
      "#c9417a"
    ],
    "keywords": [
      "ethnic",
      "sharara", 
      "ethnic wear", 
      "traditional", 
      "wedding", 
      "juttis", 
      "bangles", 
      "clutch"
    ],
    "category": "fancy",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-6",
    "name": " Boho Chic Yellow Ethnic Co-ord Set",
    "description": "A bohemian-inspired yellow ethnic co-ord set with flared sleeves and pants is styled with gold bangles, ethnic earrings, delicate rings, nude heels, a pastel yellow bag, and nude makeup.",
    "image": "/Clear Spring/Ethnic/10.jpg",
    "colors": [
      "#f0ebdf",
      "#d2d19b",
      "#af9c6c",
      "#966f28",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "ethnic",
      "yellow co-ord", 
      "boho", 
      "flared pants", 
      "gold jewelry", 
      "pastel bag", 
      "festive", 
      "light makeup"
    ],
    "category": "co-ord set",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-7",
    "name": "Fusion Indo-Western Casual Look",
    "description": "A comfortable Indo-Western look blending tradition and modernity, featuring a white kurta with denim cargo pants, pink embroidered sliders, oxidized silver jewelry, a designer tote bag, and a pastel pink embroidered dupatta.",
    "image": "/Clear Spring/Ethnic/11.jpg",
    "colors": [
      "#ededeb",
      "#da858a",
      "#8f6a64",
      "#e6aeb0",
      "#b8c5c1",
      "#a29b8f"
    ],
    "keywords": [
      "ethnic",
      "kurta", 
      "cargo jeans", 
      "fusion", 
      "silver jewelry", 
      "pink dupatta", 
      "comfortable", 
      "everyday ethnic"
    ],
    "category": "kurti",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-8",
    "name": "Boho Neutral Ensemble",
    "description": "Earth-toned embroidered blouse with off-white jogger pants and white platform sneakers. Paired with a beige tote featuring gold chain detailing and a floral scarf for a touch of bohemian elegance.",
    "image": "/Clear Spring/Ethnic/2.jpg",
    "colors": [
      "#e5e5e5",
      "#755642",
      "#8d786b",
      "#b8b19d",
      "#cc8b6a",
      "#eaaa86"
    ],
    "keywords": [
      "ethnic",
      "embroidered blouse", 
      "joggers", 
      "boho", 
      "neutral", 
      "comfortable", 
      "travel"
    ],
    "category": "blouse",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-9",
    "name": "Ivory and Navy Blue Ethnic Gown",
    "description": "A luxurious ivory and Navy Blue ethnic gown embellished with sequins and lace, perfect for formal wedding functions or receptions.",
    "image": "/Clear Spring/Ethnic/3.jpg",
    "colors": [
      "#ebebeb",
      "#827b7b",
      "#a18451",
      "#363366",
      "#dbc0a3",
      "#934248"
    ],
    "keywords": [
      "ethnic",
      "ivory gown", 
      "gold embellishment", 
      "wedding wear", 
      "traditional", 
      "elegant"
    ],
    "category": "weddings",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-10",
    "name": "Dark Blue Lehenga Set",
    "description": "A delicate dull gold and dark blue lehenga set paired with elegant embroidery and organza dupatta, perfect for elegant wedding festivities.",
    "image": "/Clear Spring/Ethnic/4.jpg",
    "colors": [
      "#edf6fb",
      "#dad5d1",
      "#ccbfa5",
      "#a59990",
      "#845f3d",
      "#988464"
    ],
    "keywords": [
      "ethnic",
      "lehenga",
      "embroidery", 
      "night function",

    ],
    "category": "reception",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-11",
    "name": "Lavendar Bridal Look",
    "description": "A refined and feminine bridal outfit with champagne gold and soft purple hues, adorned with detailed embroidery and delicate draping.",
    "image": "/Clear Spring/Ethnic/5.jpg",
    "colors": [
      "#cdcdcd",
      "#9d968d",
      "#d19a85",
      "#b49bba",
      "#816871",
      "#d36271"
    ],
    "keywords": [
      "ethnic",
      "pastel purple", 
      "embroidered suit", 
      "wedding attire", 
      "festive wear",
    ],
    "category": "festive",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-12",
    "name": "Blush Pink Lehenga Set",
    "description": "A festive outfit in soft pastel pink, featuring elegant embroidery and traditional design suitable for weddings and celebrations.",
    "image": "/Clear Spring/Ethnic/6.jpg",
    "colors": [
      "#efefed",
      "#979780",
      "#c2aea9",
      "#806866",
      "#644a41",
      "#372422"
    ],
    "keywords": [
      "ethnic",
      "pastel pink", 
      "embroidered suit", 
      "wedding attire", 
      "festive wear",
    ],
    "category": "embroidery",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-13",
    "name": "Blush Pink Lehenga Set",
    "description": "A festive outfit in soft pastel pink, featuring elegant embroidery and traditional design suitable for weddings and celebrations.",
    "image": "/Clear Spring/Ethnic/7.jpg",
    "colors": [
      "#efefed",
      "#979780",
      "#c2aea9",
      "#806866",
      "#644a41",
      "#372422"
    ],
    "keywords": [
      "ethnic",
      "pastel pink", 
      "embroidered suit", 
      "wedding attire", 
      "festive wear",
    ],
    "category": "embroidery",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-14",
    "name": "Boho Floral Kurti with Denim",
    "description": "A stylish Indo-Western look featuring a light pink embroidered kurti with floral sleeves, paired with flared blue jeans. Accessories include traditional juttis, a ruched brown handbag, pearl and gold jewelry, and soft pastel hair scrunchies.",
    "image": "/Clear Spring/Ethnic/8.jpg",
    "colors": [
      "#f3eeeb",
      "#cfb09c",
      "#ba8673",
      "#7e5f48",
      "#504235",
      "#dfd0c4"
    ],
    "keywords": [
      "ethnic",
      "kurti", 
      "denim", 
      "juttis", 
      "boho", 
      "pastel", 
      "Indian fusion", 
      "floral embroidery", 
      "scrunchie"
    ],
    "category": "denim",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-15",
    "name": "Printed Sleeveless Tunic with Denim",
    "description": "A comfortable and earthy ensemble combining a mustard printed sleeveless tunic with blue high-waisted jeans. Styled with oxidized jhumka earrings, traditional multicolor juttis, a black claw clip, and a minimal black shoulder bag.",
    "image": "/Clear Spring/Ethnic/9.jpg",
    "colors": [
      "#eae9e6",
      "#cbc1b2",
      "#a59382",
      "#587493",
      "#8293a6",
      "#ab8650"
    ],
    "keywords": [
      "ethnic",
      "tunic", 
      "ethnic", 
      "denim",  
      "boho", 
      "comfortable",
      "casual Indian wear", 
    ],
    "category": "khusas",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-16",
    "name": "Ivory Power Suit with Navy Accents",
    "description": "A long tailored ivory coat layered over a silk button-front blouse and ivory wide-leg trousers. Accented with a navy Hermès Birkin, matching navy pumps, a navy silk scarf, and a gold-detailed watch.",
    "image": "/Clear Spring/Formal/1.jpg",
    "colors": [
      "#e0ded2",
      "#99969c",
      "#484959",
      "#827979",
      "#211f2f",
      "#c0b8b6"
    ],
    "keywords": [
      "formal",
      "long coat", 
      "silk blouse", 
      "wide-leg pants", 
      "Birkin bag", 
      "executive style"
    ],
    "category": "blouse",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-17",
    "name": "Blush Wool Coat Casual-Luxe",
    "description": "An elegant pastel outfit pairing a belted blush-pink bouclé coat with cream wide-leg trousers. Styled with a tonal patterned head-scarf, pink-tweed Chanel bag, and white sneakers with blush detailing.",
    "image": "/Clear Spring/Formal/2.jpg",
    "colors": [
      "#e1cbcd",
      "#231f1c",
      "#705048",
      "#f0f0f4",
      "#b99f90",
      "#947c70"
    ],
    "keywords": [
      "formal",
      "pink coat",
      "pastel", 
      "tweed bag", 
      "sneakers", 
      "soft glamour"
    ],
    "category": "coat",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-18",
    "name": "Monochrome Ivory Cape Jumpsuit",
    "description": "A minimalist ivory jumpsuit with cape-style sleeves, paired with a tonal cashmere scarf, cap-toe slingback flats, black Celine Triomphe shoulder bag, and classic tortoiseshell sunglasses.",
    "image": "/Clear Spring/Formal/3.jpg",
    "colors": [
      "#efe8e3",
      "#ddcbbd",
      "#aa9483",
      "#46474d",
      "#1b1c21",
      "#ffffff"
    ],
    "keywords": [
      "formal",
      "cape jumpsuit",
      "ivory", 
      "monochrome", 
      "slingback flats", 
      "minimalist elegance"
    ],
    "category": "jumpsuit",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-19",
    "name": "Navy & Ivory Layered Sophisticate",
    "description": "Layered navy belted coat over an ivory tee and cropped faux-fur cape, teamed with navy wrap-front culotte trousers. Accessories include a white top-handle mini bag, silver jewellery, a sleek watch, and white slingback heels.",
    "image": "/Clear Spring/Formal/4.jpg",
    "colors": [
      "#a5a5a5",
      "#dfe0db",
      "#343849",
      "#191c23",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal",
      "navy coat",
      "wrap trousers", 
      "capelet", 
      "white heels", 
      "modern classic"
    ],
    "category": "cape",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-20",
    "name": "Navy Wide-Leg Winter Ensemble",
    "description": "A polished winter look built around a plaid navy overcoat, cropped light-grey rib-knit turtleneck, and high-waisted navy wide-leg trousers. Finished with matching navy pumps and a structured top-handle bag",
    "image": "/Clear Spring/Formal/5.jpg",
    "colors": [
      "#eaeaea",
      "#1f1f3c",
      "#a4acae",
      "#4f505b",
      "#c5c6cb",
      "#ffffff"
    ],
    "keywords": [
      "formal",
      "winter coat", 
      "cropped turtleneck", 
      "wide-leg trousers", 
      "monochrome navy", 
      "business chic"
    ],
    "category": "chic",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-21",
    "name": "Spring Garden Party Look",
    "description": "A dreamy, floral chiffon maxi dress in soft white and pastel green is paired with white block-heel slingbacks. Accessories include a light green baguette bag, dainty gold jewelry, and soft pink makeup for a fresh, feminine touch.",
    "image": "/Clear Spring/Modest/1.jpeg",
    "colors": [
      "#f4f5ee",
      "#d7dcbf",
      "#bfc699",
      "#e77f90",
      "#abb55f",
      "#ffffff"
    ],
    "keywords": [
      "modest",
      "floral dress",
      "garden party", 
      "feminine", 
      "spring outfit",
      "green accessories"
    ],
    "category": "dress",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-22",
    "name": "Sky Blue Modest Ensemble",
    "description": "A modest and elegant outfit with a long sky blue abaya featuring patterned sleeve ends, worn over a simple white inner dress. It's styled with a white purse, a blue and white patterned hijab, and white strap heels for a graceful finish.",
    "image": "/Clear Spring/Modest/2.jpg",
    "colors": [
      "#eaeaea",
      "#bec3cb",
      "#9b917c",
      "#9aa6ad",
      "#6c8081",
      "#ffffff"
    ],
    "keywords": [
      "modest",
      "abaya", 
      "modest fashion", 
      "sky blue", 
      "strap heels", 
      "elegant"
    ],
    "category": "abaya",
    "styleCategories": [
      "modest"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-23",
    "name": "Elegant White Dress for Party",
    "description": "A dreamy long white net dress perfect for parties, featuring sheer sleeves with green floral designs in a contrasting fabric. Styled with a fancy clutch, Tissimum orchid heels, and a Van Cleef necklace for a refined, luxurious touch.",
    "image": "/Clear Spring/Party/1.jpg",
    "colors": [
      "#f0f0f1",
      "#d6d1ce",
      "#aeb39d",
      "#90957d",
      "#71765f",
      "#4f543d"
    ],
    "keywords": [
      "party",
      "white net dress", 
      "floral sleeves", 
      "green embroidery",
      "party wear", 
      "fancy clutch", 
      "orchid heels", 
      "Van Cleef necklace", 
    ],
    "category": "dress",
    "styleCategories": [
      "party","formal"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-24",
    "name": "Sky Blue Pashmina Outfit",
    "description": "A chic party outfit featuring a sky blue button-up top with subtle designs, styled with off-white wide-leg pants and a cream pashmina scarf. It’s finished with white sneakers and a brown tote bag for a comfortable yet elegant look.",
    "image": "/Clear Spring/Party/2.jpg",
    "colors": [
      "#f0f5fa",
      "#d3c2b3",
      "#b69c8a",
      "#b0ccea",
      "#7e624b",
      "#ffffff"
    ],
    "keywords": [
      "party",
      "sky blue shirt", 
      "button-up", 
      "pashmina scarf", 
      "wide-leg pants", 
      "white sneakers", 
      "brown tote", 
      "party outfit", 
      "modest style"
    ],
    "category": "chic",
    "styleCategories": [
      "party","formal"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-25",
    "name": "Casual Blue Streetwear",
    "description": "A relaxed street-style look with a light blue button-up shirt and loose-fitting blue jeans. Finished with pink and white New Balance sneakers, a floral fabric tote bag, and a casual thread bracelet for a laid-back vibe.",
    "image": "/Clear Spring/Streetwear/1.jpg",
    "colors": [
      "#e5e5e5",
      "#a1afb7",
      "#768991",
      "#4d5d64",
      "#b76e81",
      "#de9aaa"
    ],
    "keywords": [
      "streetwear",
      "blue button-up", 
      "loose jeans", 
      "new balance sneakers", 
      "floral tote", 
      "streetwear"
    ],
    "category": "button up",
    "styleCategories": [
      "streetwear","casual"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-26",
    "name": "Boho Blue Flared",
    "description": "A trendy streetwear look with flared blue jeans, boho blouse and layered necklaces, gold jewelry, and chic sunglasses. Finished with velvet-textured shoes, a leather tote bag, and beauty essentials for an effortless vibe.",
    "image": "/Clear Spring/Streetwear/2.jpg",
    "colors": [
      "#e5e5e5",
      "#ab8059",
      "#747a76",
      "#717d3f",
      "#a29d98",
      "#465247"
    ],
    "keywords": [
      "streetwear",
      "flared jeans", 
      "boho necklaces", 
      "gold jewelry", 
      "sunglasses", 
      "velvet shoes"
    ],
    "category": "blouse",
    "styleCategories": [
      "streetwear","modest","casual"
    ],
    "seasons": [
      "clear-spring"
    ]
  },
  {
    "id": "item-27",
    "name": "Denim Duo Samba Chic",
    "description": "A cool, sporty-chic outfit with a blue button-up, denim skirt, Adidas Sambas, gold jewelry, AirPods Max, and a clutch purse.",
    "image": "/Clear Winter/Casual/1.jpeg",
    "colors": [
      "#f6eee6",
      "#bad1f2",
      "#bbbcbe",
      "#9c9d9f",
      "#607181",
      "#425363"
    ],
    "keywords": [
      "casual",
      "button-up shirt", 
      "denim skirt",
      "clutch purse",
      "gold jewelry", 
      "casual chic"
    ],
    "category": "skirt",
    "styleCategories": [
      "casual","modest","streetwear"
    ],
    "seasons": [
      "clear-winter"
    ]
  },
  {
    "id": "item-28",
    "name": "Coffee Date Denim Look",
    "description": "A cozy and cute casual outfit perfect for coffee dates, featuring a cozy sweatshirt, light-wash denim, and addidas sneakers. Styled with gold accessories and a tote bag.",
    "image": "/Clear Winter/Casual/10.jpeg",
    "colors": [
      "#e7eef3",
      "#a6c4dc",
      "#c6c1ac",
      "#53647a",
      "#6081a3",
      "#283d55"
    ],
    "keywords": [
      "casual",
      "denim",
      "sweatshirt",
      "cozy"

    ],
    "category": "sweatshirt",
    "styleCategories": [
      "casual","streetwear"
    ],
    "seasons": [
      "clear-winter"
    ]
  },
  {
    "id": "item-29",
    "name": "Red Swirl Elegance",
    "description": "A cream knit sweater and red swirl satin skirt create a warm, bold look. Finished with red heels, a brown bag, and gold jewelry.",
    "image": "/Clear Winter/Casual/11.jpeg",
    "colors": [
      "#cdcbca",
      "#f6f5ed",
      "#efaab6",
      "#a43c4b",
      "#a91c24",
      "#de8091"
    ],
    "keywords": [
      "casual",
      "cream knit sweater", 
      "red satin skirt", 
      "red heels", 
      "brown shoulder bag", 
      "gold jewelry", 
      "bold look"
    ],
    "category": "satin skirt",
    "styleCategories": [
      "casual","streetwear","party"
    ],
    "seasons": [
      "clear-winter"
    ]
  },
  {
    "id": "item-30",
    "name": "Layered Neutrals Tote Look",
    "description": "A crisp white button-up under a beige jacket, with black pants, white sneakers, and a classic tote bag for effortless streetwear style.",
    "image": "/Clear Winter/Casual/12.jpg",
    "colors": [
      "#e5e5e5",
      "#d0c6bc",
      "#353537",
      "#c0a591",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual",
      "white sneakers", 
      "tote bag",
      "comfy"
    ],
    "category": "tote",
    "styleCategories": [
      "casual","streetwear"
    ],
    "seasons": [
      "clear-winter"
    ]
  },
  {
    "id": "item-31",
    "name": "Navy Sweater & Wide-Leg Look",
    "description": "A chic casual look with a navy knit pullover and wide-leg cream trousers, styled with retro Adidas sneakers, a navy bag, and luxe accessories.",
    "image": "/Clear Winter/Casual/13.jpg",
    "colors": [
      "#eeedea",
      "#6b5249",
      "#4f3124",
      "#a8897d",
      "#b4b1cf",
      "#6b6d79"
    ],
    "keywords": [
      "casual",
      "navy sweater", 
      "wide-leg pants", 
      "Adidas sneakers", 
      "navy accessories",
    ],
    "category": "Navy sweater",
    "styleCategories": [
      "casual",
      "formal","streetwear"

    ],
    "seasons": [
      "clear-winter"
    ]
  },
  {
    "id": "item-32",
    "name": "Sweatshirt Comfort",
    "description": "A cute cream sweater adorned with text print, styled effortlessly with denim skirts. Finished with gold jewelry, this playful look brings a lighthearted and trendy energy.",
    "image": "/Clear Winter/Casual/2.jpeg",
    "colors": [
      "#ebe9e1",
      "#dfbab9",
      "#4c5e6b",
      "#6e8498",
      "#3b3b3b",
      "#837159"
    ],
    "keywords": [
      "casual",
      "sweatshirt",
      "denim skirt",
      "gold jewelry"

    ],
    "category": "sweatshirt",
    "styleCategories": [
      "casual",
      "streetwear"
    ],
    "seasons": [
      "clear-winter"
    ]
  },
  {
    "id": "item-33",
    "name": "Classic Layers & Denim Look",
    "description": "A crisp white button-up layered under a soft sweater with flared jeans, vintage watch, leather bag, and Adidas sneakers for a polished casual look.",
    "image": "/Clear Winter/Casual/3.jpg",
    "colors": [
      "#c9cacb",
      "#f4f3ef",
      "#44465a",
      "#dd8e80",
      "#1f2038",
      "#bfaaa2"
    ],
    "keywords": [
      "casual",
      "white button-up", 
      "soft sweater", 
      "dark blue jeans", 
      "flared jeans", 
      "vintage watch", 
      "leather bag", 
    ],
    "category": "blue jeans",
    "styleCategories": [
      "casual",
      "formal"
    ],
    "seasons": [
      "clear-winter"
    ]
  },
    {
    "id": "item-201",
    "name": "Classy Outfit, with Jwellery",
    "description": "Fitted Jersey High-neck with classy pants.",
    "image": "/Deep Winter/Casual/8.jpeg",
    "colors": [
      "#e8e8e8",
      "#1b191a",
      "#d9c59f",
      "#505050",
      "#aaaaaa",
      "#a1946d"
    ],
    "keywords": [
      "casual","Formal","Aesthetic","Business"
    ],
    "category": "High-neck",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter","clear-winter"
    ]
  },
  {
    "id": "item-202",
    "name": "Winter Clothing",
    "description": "Maroon highneck sweater and grey pants. Maroon bag with accessories",
    "image": "/Deep Winter/Casual/9.jpeg",
    "colors": [
      "#e5e5e5",
      "#491211",
      "#3f4045",
      "#6f6f77",
      "#adafaf",
      "#71323c"
    ],
    "keywords": [
      "casual","stylish","Maroon pallette","Hangout with friends"
    ],
    "category": "Sweater",
    "styleCategories": [
      "casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-203",
    "name": "Perfect dress for party or a get together",
    "description": "Black Sharara with gold jwellery.",
    "image": "/Deep Winter/Ethnic/1.jpg",
    "colors": [
      "#e5e5e5",
      "#ac9979",
      "#424140",
      "#1d1e22",
      "#89463c",
      "#686257"
    ],
    "keywords": [
      "ethnic","party"
    ],
    "category": "Sharara",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-204",
    "name": "Long Kameez with Garara",
    "description": "Garara with Long shirt, with gold jwellery and bangles",
    "image": "/Deep Winter/Ethnic/2.jpg",
    "colors": [
      "#e8cfd2",
      "#996b53",
      "#bc896c",
      "#86363c",
      "#d4a1ac",
      "#591a24"
    ],
    "keywords": [
      "ethnic","Garara","Long Kameez"
    ],
    "category": "Garara",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-205",
    "name": "Classy Dress",
    "description": "Emerald Green Dress with Gold Jwellery",
    "image": "/Deep Winter/Ethnic/3.jpg",
    "colors": [
      "#ececec",
      "#666c65",
      "#a7a7a7",
      "#0c6b60",
      "#fc8966",
      "#aa8073"
    ],
    "keywords": [
      "ethnic","party","Emerald Green","Classy"
    ],
    "category": "Dress",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-206",
    "name": "Sleeveless Kameez with Garara",
    "description": "Maroon Garara with Sleeveless Kameez made of cotton",
    "image": "/Deep Winter/Ethnic/4.jpg",
    "colors": [
      "#dcd0d1",
      "#adadad",
      "#f3f3ef",
      "#8c2538",
      "#8b8b8b",
      "#5d141c"
    ],
    "keywords": [
      "ethnic","Garara","Sleeveless Kameez","red"
    ],
    "category": "Garara",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-207",
    "name": "Saari with Blouse",
    "description": "Casual Saari with Blouse made of silk",
    "image": "/Deep Winter/Ethnic/5.jpg",
    "colors": [
      "#f3f1f0",
      "#cdb4b0",
      "#b48c87",
      "#9c6348",
      "#4b0317",
      "#f0d2c7"
    ],
    "keywords": [
      "ethnic","Events","Blouse","Silk","Casual"
    ],
    "category": "Saari",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-208",
    "name": "Emerald Green Dress",
    "description": "Sharara with Emerald Green Kameez",
    "image": "/Deep Winter/Ethnic/6.jpg",
    "colors": [
      "#ebece9",
      "#2e393a",
      "#6c6d5a",
      "#888284",
      "#cfa692",
      "#694937"
    ],
    "keywords": [
      "ethnic","Emerald Green","Sharara"
    ],
    "category": "Sharara",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-209",
    "name": "Embroided Dress for Eid",
    "description": "Embroided Black Kameez with gold jwellery",
    "image": "/Deep Winter/Ethnic/7.jpg",
    "colors": [
      "#ccc1af",
      "#e1dfd3",
      "#ccac62",
      "#2a2a27",
      "#8a7e6a",
      "#504b46"
    ],
    "keywords": [
      "ethnic","embroided","Eid"
    ],
    "category": "Kameez",
    "styleCategories": [
      "ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-210",
    "name": "Classy Shalwar & Kameez",
    "description": "Shalwar with Kameez made of silk with red dupatta, with gold jwellery including jhumke and bracelettes",
    "image": "/Deep Winter/Ethnic/8.jpg",
    "colors": [
      "#e5e5e5",
      "#301f1a",
      "#a42431",
      "#641824",
      "#be4b4f",
      "#e37a79"
    ],
    "keywords": [
      "ethnic", "Shalwar","Kameez","Silk","Red"
    ],
    "category": "Shalwar Kameez",
    "styleCategories": [
      "ethnic","formal"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-211",
    "name": "Sweater with Skirt",
    "description": "White knitted sweater with flower printted skirt. A bow to complete the look wiht a bag and accessories.",
    "image": "/Deep Winter/Formal/1.jpeg",
    "colors": [
      "#dcd1c2",
      "#f6f3e8",
      "#575656",
      "#a29b8e",
      "#797772",
      "#b59360"
    ],
    "keywords": [
      "formal","casual","stylish","Aesthetic"
    ],
    "category": "Sweater",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-212",
    "name": "Leather Combo",
    "description": "Newsboy cap with leather jacket and pants with a black fitted shirt paired with a bag and leather shoes.",
    "image": "/Deep Winter/Formal/10.jpeg",
    "colors": [
      "#e1e1e1",
      "#19191b",
      "#616566",
      "#393d3e",
      "#858384",
      "#ffffff"
    ],
    "keywords": [
      "formal","stylish","Aesthetic"
    ],
    "category": "Leather",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-213",
    "name": "Classic Black",
    "description": "All black outfit with a cotton shirt and pants with a black bag and shoes.",
    "image": "/Deep Winter/Formal/11.jpeg",
    "colors": [
      "#dcdcdc",
      "#2a272b",
      "#959397",
      "#c5bfa9",
      "#50504e",
      "#965855"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-214",
    "name": "Blazerred",
    "description": "A combination of a grey blazer and black fitted shirt with a black bag and shoes.",
    "image": "/Deep Winter/Formal/12.jpeg",
    "colors": [
      "#cecece",
      "#a4a3a9",
      "#474648",
      "#191b17",
      "#f5f5ef",
      "#75747a"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-215",
    "name": "Emerald Fashion",
    "description": "Emerald green pants paired with white blouse with a black bag and shoes.",
    "image": "/Deep Winter/Formal/13.jpg",
    "colors": [
      "#f3f2f0",
      "#878062",
      "#406e63",
      "#04363d",
      "#d9d2ca",
      "#ffffff"
    ],
    "keywords": [
      "formal"
    ],
    "category": "Emerald",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-216",
    "name": "Modest Formal",
    "description": "Modest formal outfit with a black Blazer with underneath shirt and skirt with accessories, black bag and shoes.",
    "image": "/Deep Winter/Formal/14.jpeg",
    "colors": [
      "#e5e5e5",
      "#1d1d1d",
      "#78787a",
      "#3c3c3c",
      "#a3a3a6",
      "#5b5b5b"
    ],
    "keywords": [
      "formal","modest","stylish","Aesthetic"
    ],
    "category": "Blazer",
    "styleCategories": [
      "formal","modest"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-217",
    "name": "Leather Trench",
    "description": "Leather trench coat and skirt with a fitted shirt with a black bag, shoes and accessories.",
    "image": "/Deep Winter/Formal/2.jpeg",
    "colors": [
      "#e6e6e6",
      "#201e23",
      "#706e6d",
      "#424147",
      "#aca9a7",
      "#ffffff"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business","modest"
    ],
    "category": "Skirt",
    "styleCategories": [
      "formal","modest"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-218",
    "name": "Highneck Sweater",
    "description": "Black highneck sweater with a black skirt and a black bag with accessories.",
    "image": "/Deep Winter/Formal/3.jpeg",
    "colors": [
      "#e1e1e1",
      "#131313",
      "#303030",
      "#717171",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "Highneck",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-219",
    "name": "White Formal",
    "description": "White Button up shirt with a black pant and a black bag with accessories.",
    "image": "/Deep Winter/Formal/4.jpeg",
    "colors": [
      "#e0e0e0",
      "#c1c3c0",
      "#2a2a2a",
      "#6f6d6a",
      "#4a4942",
      "#ffffff"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "Button up shirt",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-220",
    "name": "Dress Coat",
    "description": "Grey dress coat with a white fitted shirt and pants with a black bag and shoes.",
    "image": "/Deep Winter/Formal/5.jpeg",
    "colors": [
      "#f2f4f0",
      "#444139",
      "#918e7f",
      "#d9d9cd",
      "#6c6c67",
      "#b8b8b0"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "Dress coat",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-221",
    "name": "bellbottom pants pair",
    "description": "Black bellbottom pants with a white button up and a black bag and heels.",
    "image": "/Deep Winter/Formal/6.jpeg",
    "colors": [
      "#eaeaea",
      "#6f7072",
      "#1d1d1f",
      "#b1b1b2",
      "#44403d",
      "#000000"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "bellbottom",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-222",
    "name": "Grey Pallette",
    "description": "Grey Blazer with black fitted shirt, darker grey pants with a black bag and shoes.",
    "image": "/Deep Winter/Formal/7.jpeg",
    "colors": [
      "#cecece",
      "#a4a3a9",
      "#474648",
      "#191b17",
      "#f5f5ef",
      "#75747a"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "Blazer",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-223",
    "name": "Winter Coat",
    "description": "grey winter coat paired with grey skirt, maroon undershirt and bag styled with long coat heels.",
    "image": "/Deep Winter/Formal/8.jpg",
    "colors": [
      "#ece9e0",
      "#d7cda3",
      "#9a9997",
      "#7a7877",
      "#50514d",
      "#53262f"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "Winter coat",
    "styleCategories": [
      "formal","casual","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-224",
    "name": "Classy Formal",
    "description": "Long trench coat with a fitted printed shirt and pants with a black bag and shoes.",
    "image": "/Deep Winter/Formal/9.jpeg",
    "colors": [
      "#e6e6e6",
      "#ebe09d",
      "#746e6c",
      "#2d2c32",
      "#7a8f96",
      "#c5c7c5"
    ],
    "keywords": [
      "formal","stylish","Aesthetic","Business"
    ],
    "category": "Long trench coat",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-225",
    "name": "Desi Modest",
    "description": "White cotton shirt with a black embroided waist coat and dark green skirt paired with hijab, black bag with accessories.",
    "image": "/Deep Winter/Modest/1.jpg",
    "colors": [
      "#f0f0f0",
      "#cbcdc4",
      "#4a4044",
      "#adabac",
      "#dba56e",
      "#231f22"
    ],
    "keywords": [
      "modest","desi","stylish","Aesthetic"
    ],
    "category": "White cotton shirt",
    "styleCategories": [
      "modest","ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-226",
    "name": "Modest Street Style",
    "description": "Cream sweatshirt with a blue skirt and hijab styles with white/cream bag.",
    "image": "/Deep Winter/Modest/10.jpg",
    "colors": [
      "#faf7ee",
      "#757a77",
      "#b6bbc1",
      "#deddcc",
      "#635e4e",
      "#3d382d"
    ],
    "keywords": [
      "modest","streetwear","stylish","Aesthetic"
    ],
    "category": "Street style",
    "styleCategories": [
      "modest","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-227",
    "name": "Maroon Modest",
    "description": "Maroon highneck sweater and bag with a black skirt and shoes with hijab.",
    "image": "/Deep Winter/Modest/11.jpg",
    "colors": [
      "#dcdcdc",
      "#43171a",
      "#aaaaaa",
      "#0e0e0e",
      "#784c46",
      "#7e7e7a"
    ],
    "keywords": [
      "modest","stylish","Aesthetic"
    ],
    "category": "Highneck sweater",
    "styleCategories": [
      "modest","casual","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-228",
    "name": "Classy Modest",
    "description": "Blue maxi styled with accessories and a black bag.",
    "image": "/Deep Winter/Modest/12.jpeg",
    "colors": [
      "#e5e4e7",
      "#464454",
      "#b1a691",
      "#878390",
      "#c3c3c3",
      "#65656b"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category":"Maxi",
    "styleCategories": [
      "modest","party"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-229",
    "name": "Abaya Style",
    "description": "White maxi styled with navy blue hijab, open abaya and accessories",
    "image": "/Deep Winter/Modest/13.jpg",
    "colors": [
      "#e8e8e8",
      "#2e536c",
      "#1e2e3c",
      "#4a718f",
      "#c09454",
      "#b4a08c"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category": "Navy blue hijab",
    "styleCategories": [
      "modest","party"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-230",
    "name": "Cotton Modest",
    "description": "Cotton maxi styled with accessories and a black bag.",
    "image": "/Deep Winter/Modest/2.jpg",
    "colors": [
      "#ececec",
      "#c5c4c3",
      "#161614",
      "#847768",
      "#c2ad91",
      "#3a3a3a"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category": "Maxi",
    "styleCategories": [
      "modest","party"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-231",
    "name": "Grace",
    "description": "White maxi with open sleeves styled with accessories and a red bag.",
    "image": "/Deep Winter/Modest/3.jpg",
    "colors": [
      "#f7f3ee",
      "#f2d1b6",
      "#b7aead",
      "#6a212e",
      "#7f5255",
      "#ffffff"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category": "Maxi",
    "styleCategories": [
      "modest","party"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-232",
    "name": "Blue Sleek Dress",
    "description": "Blue sleek sleveless dress styled open abaya and accessories.",
    "image": "/Deep Winter/Modest/4.jpg",
    "colors": [
      "#d7dad3",
      "#1d448f",
      "#c7bd9e",
      "#636e98",
      "#0e2166",
      "#ffffff"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category": "Blue",
    "styleCategories": [
      "modest","party"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-233",
    "name": "Full coverage",
    "description": "Black button-up cotton shirt with jeans skirt styled with accessories and a black bag.",
    "image": "/Deep Winter/Modest/5.jpg",
    "colors": [
      "#e1dddc",
      "#1f1f1f",
      "#6c6c6b",
      "#614842",
      "#a1a9a9",
      "#7e8d8f"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category": "Button-up shirt",
    "styleCategories": [
      "modest","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-234",
    "name": "Modern Skirt style",
    "description": "Black button-up cotton shirt styled with white skirt, accessories and a black bag.",
    "image": "/Deep Winter/Modest/6.jpg",
    "colors": [
      "#e9e9e9",
      "#2f3038",
      "#b3b5b8",
      "#a99b86",
      "#6d726e",
      "#000000"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category": "White skirt",
    "styleCategories": [
      "modest","streetwear","casual","party","formal"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-235",
    "name": "Cold weather styling",
    "description": "Long trench coat with a fitted shirt and pants with a black bag and shoes.",
    "image": "/Deep Winter/Modest/7.jpeg",
    "colors": [
      "#ebebeb",
      "#303032",
      "#cacaca",
      "#7a7377",
      "#5e5758",
      "#a8795e"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category": "Long trench coat",
    "styleCategories": [
      "modest","casual","streetwear","formal"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-236",
    "name": "Light maxi",
    "description": "Light blue maxi styled with red accessories.",
    "image": "/Deep Winter/Modest/8.jpeg",
    "colors": [
      "#eaebe2",
      "#a9b4b7",
      "#ab182d",
      "#5e0f1b",
      "#934f58",
      "#e2cda6"
    ],
    "keywords": [
      "modest","stylish","Aesthetic","Business"
    ],
    "category": "Light blue Maxi",
    "styleCategories": [
      "modest","party"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-238",
    "name": "Beach Look",
    "description": "Blue button up with royal blue skirt styled with accessories and a white bag.",
    "image": "/Deep Winter/Party/1.jpeg",
    "colors": [
      "#ecc1d2",
      "#b5cff2",
      "#2075cf",
      "#eff4f8",
      "#1e397e",
      "#031a60"
    ],
    "keywords": [
      "party","stylish","Aesthetic","Business"
    ],
    "category": "Royal blue skirt",
    "styleCategories": [
      "party","casual","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
    {
    "id": "item-239",
    "name": "Crop top",
    "description": "Cotton crop top with jeans pant designed with flower. It can be styled with accessories.",
    "image": "/Deep Winter/Party/10.jpeg",
    "colors": [
      "#e5e5e5",
      "#bc4965",
      "#da6989",
      "#913b4e",
      "#8eaacd",
      "#cdb2ba"
    ],
    "keywords": [
      "party","cute","Hangout"
    ],
    "category": "Crop top",
    "styleCategories": [
      "party","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-240",
    "name": "Long baby pink Dress",
    "description": "Long baby pink dress styled with heels, bag and accessories.",
    "image": "/Deep Winter/Party/11.jpeg",
    "colors": [
      "#f5f2ef",
      "#f38998",
      "#e7bfc7",
      "#bfa193",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "party","long dress","frock","aesthetic"
    ],
    "category": "Long dress",
    "styleCategories": [
      "party"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-241",
    "name": "Cotton shirt styling",
    "description": "Cotton slim-fit button up shirt paired with bue jeans and colored hijab/scarf. Outfit can be styled with bag adn accessories.",
    "image": "/Deep Winter/Party/2.jpg",
    "colors": [
      "#f4f1ee",
      "#354e57",
      "#6f5a3b",
      "#c2b699",
      "#5c7068",
      "#dad1c6"
    ],
    "keywords": [
      "party","Classy","cotton","slim"
    ],
    "category": "slim-fit button-up",
    "styleCategories": [
      "party","casual","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-242",
    "name": "Black crop top",
    "description": "Black crop top paired with jeans skirt and styled with black bag and shoes. Accessories can also be worn.",
    "image": "/Deep Winter/Party/3.jpeg",
    "colors": [
      "#e7e7e7",
      "#1f1f1f",
      "#403f38",
      "#6d6b5a",
      "#a5a4a5",
      "#758791"
    ],
    "keywords": [
      "party","casual","aesthetic","skin showing"
    ],
    "category": "Jeans skirt",
    "styleCategories": [
      "party","casual","Streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-243",
    "name": "Leather jacket and Pants",
    "description": "Leather blazer and pants, paired with blacck fitted undershirt and styled with accessories.",
    "image": "/Deep Winter/Party/4.jpeg",
    "colors": [
      "#dedede",
      "#1f1f1f",
      "#3b3a41",
      "#616362",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "party","aeshtetic","emo"
    ],
    "category": "Leather Blazer",
    "styleCategories": [
      "party","casual","streetwear","formal"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-244",
    "name": "White v neck shirt",
    "description": "White v neck shirt paired with Blue bell bottom jeans and styled with bag and shoes.",
    "image": "/Deep Winter/Party/5.jpg",
    "colors": [
      "#f1ece8",
      "#566979",
      "#5981ac",
      "#693937",
      "#a18e87",
      "#865c55"
    ],
    "keywords": [
      "party","aesthetic","fitted"
    ],
    "category": "V neck",
    "styleCategories": [
      "party","casual","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-245",
    "name": "White sweater with pink bows.",
    "description": "White sweater with pink bows paired with jeans and styled with different accessories.",
    "image": "/Deep Winter/Party/6.jpg",
    "colors": [
      "#e5e5e5",
      "#acadb5",
      "#a1828b",
      "#d4b485",
      "#111016",
      "#e5bec5"
    ],
    "keywords": [
      "party","cute","bows","pretty","winter"
    ],
    "category": "Sweater with bows.",
    "styleCategories": [
      "party","casual","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-246",
    "name": "Sweater with embroided collar",
    "description": "Sweater with embroided collar and red design paired with red skirt and styled with bag and accessories.",
    "image": "/Deep Winter/Party/7.jpg",
    "colors": [
      "#a98c90",
      "#f1ece3",
      "#5a0d16",
      "#eac4a8",
      "#6f3039",
      "#ffffff"
    ],
    "keywords": [
      "party","Winter outfit","Sweater"
    ],
    "category": "Sweater",
    "styleCategories": [
      "party","casual","streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-249",
    "name": "Button-up with oversized sleeves.",
    "description": "Button with oversized sleeves paired with straight pants and styled with bag and hijab.",
    "image": "/Deep Winter/Streetwear/1.jpg",
    "colors": [
      "#e5e5e5",
      "#2e2d32",
      "#dfd1b7",
      "#53514b",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "streetwear","Oversized sleeves","aesthetic"
    ],
    "category": "Oversized sleeves",
    "styleCategories": [
      "streetwear","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-250",
    "name": "Printed Blouse",
    "description": "BLue printed blouse with jeans and hijab, styled with tote bag, shoes and accessoried",
    "image": "/Deep Winter/Streetwear/10.jpg",
    "colors": [
      "#e5e5e5",
      "#485a6a",
      "#6a7f8b",
      "#2e3949",
      "#c6bfb7",
      "#a99c8a"
    ],
    "keywords": [
      "streetwear","printed"
    ],
    "category": "Printed shirt",
    "styleCategories": [
      "streetwear","casual","ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-251",
    "name": "Black kameez with white print",
    "description": "Black kameez with white prominent print paired with jeans and styled with accessories.",
    "image": "/Deep Winter/Streetwear/11.jpg",
    "colors": [
      "#efefef",
      "#828282",
      "#5b5a59",
      "#debec2",
      "#1c2020",
      "#afaba9"
    ],
    "keywords": [
      "streetwear","college","comfortable"
    ],
    "category": "Kameez",
    "styleCategories": [
      "streetwear","ethnic","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-252",
    "name": "All black outfit",
    "description": "",
    "image": "/Deep Winter/Streetwear/12.jpg",
    "colors": [
      "#e5e5e5",
      "#434343",
      "#636362",
      "#202020",
      "#7d0a1e",
      "#aa9698"
    ],
    "keywords": [
      "streetwear","casual"
    ],
    "category": "Black",
    "styleCategories": [
      "streetwear","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-253",
    "name": "Prink and white",
    "description": "Pink and white kameez styled with accessories.",
    "image": "/Deep Winter/Streetwear/13.jpg",
    "colors": [
      "#e5e5e5",
      "#c2cdba",
      "#b39381",
      "#eb8ba1",
      "#88605f",
      "#932a39"
    ],
    "keywords": [
      "streetwear","college"
    ],
    "category": "kameez",
    "styleCategories": [
      "streetwear","casual","ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-254",
    "name": "Light pink kameez embroided with shocking pink",
    "description": "",
    "image": "/Deep Winter/Streetwear/14.jpg",
    "colors": [
      "#f3eeeb",
      "#cfb09c",
      "#ba8673",
      "#7e5f48",
      "#504235",
      "#dfd0c4"
    ],
    "keywords": [
      "streetwear","Kameez"
    ],
    "category": "Kameez",
    "styleCategories": [
      "streetwear","ethnic"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-258",
    "name": "Red printed Kameez",
    "description": "Red printed Kameez paired with jeans and styled with accessories.",
    "image": "/Deep Winter/Streetwear/18.jpg",
    "colors": [
      "#f7e8e3",
      "#af6161",
      "#dec99f",
      "#939494",
      "#b3b0af",
      "#aa3c39"
    ],
    "keywords": [
      "streetwear","ethnic","casual"
    ],
    "category": "Kameez",
    "styleCategories": [
      "streetwear","ethnic","casual"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-259",
    "name": "",
    "description": "",
    "image": "/Deep Winter/Streetwear/2.jpg",
    "colors": [
      "#f3eddf",
      "#9c867e",
      "#806555",
      "#4e4a4f",
      "#deadb9",
      "#2a3029"
    ],
    "keywords": [
      "streetwear"
    ],
    "category": "",
    "styleCategories": [
      "streetwear"
    ],
    "seasons": [
      "deep-winter"
    ]
  },
  {
    "id": "item-267",
    "name": "White sweatshirt with green printed skirt",
    "description": "White sweatshirt with green printed skirt styled with tote bag and shoes.",
    "image": "/Light Spring/Casual/1.jpeg",
    "colors": [
      "#f0f0f0",
      "#d3cfc9",
      "#e3c28c",
      "#a2ae80",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual","winter"
    ],
    "category": "Skirt",
    "styleCategories": [
      "casual","streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-268",
    "name": "Brown leather styled",
    "description": "Brown leather jacket paired with white fitted shirt and bell-bottom jeans.",
    "image": "/Light Spring/Casual/10.jpg",
    "colors": [
      "#f5f0e8",
      "#dbccb2",
      "#aa7e64",
      "#61412f",
      "#b3a6a0",
      "#819eb9"
    ],
    "keywords": [
      "casual","streetwear","Winter"
    ],
    "category": "Leather",
    "styleCategories": [
      "casual","streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-269",
    "name": "Long button up shirt styled",
    "description": "Long skin-colored button up shirt paired with fitted shirt and jeans, stlyed with bag hijab and accessories",
    "image": "/Light Spring/Casual/11.jpg",
    "colors": [
      "#f0efe9",
      "#7f89a3",
      "#5a6684",
      "#313b51",
      "#bbb4a1",
      "#9d9376"
    ],
    "keywords": [
      "casual","modest","aesthetic","hijab"
    ],
    "category": "long shirt",
    "styleCategories": [
      "casual","modest","streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-270",
    "name": "White formal blazer coat",
    "description": "White formal blazer coat paired with jeans and accessories.",
    "image": "/Light Spring/Casual/12.jpg",
    "colors": [
      "#f0f0f0",
      "#d4cdc7",
      "#9da7b2",
      "#2e2d32",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "casual","blazer"
    ],
    "category": "blazer",
    "styleCategories": [
      "casual","streetwear","formal"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-271",
    "name": "Long coat",
    "description": "Long coat styled with white t-shirt or button-up and jeans, styled with bags, shoes and scarf",
    "image": "/Light Spring/Casual/13.jpg",
    "colors": [
      "#fef3d5",
      "#dfc4a6",
      "#b89877",
      "#8a6f52",
      "#a7c8e0",
      "#8398aa"
    ],
    "keywords": [
      "casual","winter"
    ],
    "category": "Long coat",
    "styleCategories": [
      "casual","streetwear","formal"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-273",
    "name": "Pink sweater",
    "description": "Pink sweater styled with jeans and accessories.",
    "image": "/Light Spring/Casual/15.jpeg",
    "colors": [
      "#f0f0f0",
      "#757e88",
      "#c9c8c2",
      "#f59ca8",
      "#406087",
      "#293e57"
    ],
    "keywords": [
      "casual","streetwear","modest"
    ],
    "category": "sweater",
    "styleCategories": [
      "casual","streetwear","modest"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-274",
    "name": "V-neck Sweater",
    "description": "Sweater vest over white button-up shirt and skirt. styled with bag, heels and accessories.",
    "image": "/Light Spring/Casual/16.jpeg",
    "colors": [
      "#e7e7e5",
      "#b99f81",
      "#987c65",
      "#d5c9b7",
      "#483936",
      "#1c1513"
    ],
    "keywords": [
      "casual","winter"
    ],
    "category": "V-neck sweater",
    "styleCategories": [
      "casual","streetwear"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-276",
    "name": "White blouse styled",
    "description": "White blouse paired with jeans skirt and styled with bag, shoes and accessories.",
    "image": "/Light Spring/Casual/18.jpeg",
    "colors": [
      "#e4e4e4",
      "#757172",
      "#404c5c",
      "#949599",
      "#2b3036",
      "#77252b"
    ],
    "keywords": [
      "casual"
    ],
    "category": "Blouse",
    "styleCategories": [
      "casual","streetwear","Formal"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-288",
    "name": "White frock with light print",
    "description": "White long frock with light pink print styled with bag, heels and accessories.",
    "image": "/Light Spring/Ethnic/1.jpg",
    "colors": [
      "#ece7e4",
      "#a095bf",
      "#d2b2d4",
      "#b47f67",
      "#d5ab9a",
      "#954c42"
    ],
    "keywords": [
      "ethnic","party","aesthetic"
    ],
    "category": "Long Frock",
    "styleCategories": [
      "ethnic","party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-289",
    "name": "Saari for wedding or event",
    "description": "Saari styled with jhumke, heels, bag/clutch and other accessories.",
    "image": "/Light Spring/Ethnic/2.jpg",
    "colors": [
      "#e8e8e8",
      "#d8a193",
      "#9c7b67",
      "#a9e1c1",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "ethnic","party"
    ],
    "category": "Saari",
    "styleCategories": [
      "ethnic","party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-290",
    "name": "Classy Saari",
    "description": "Light SKin colored elegant saari styled with accessories, perfect for events.",
    "image": "/Light Spring/Ethnic/3.jpg",
    "colors": [
      "#efe9e4",
      "#b7ab93",
      "#d1cbbc",
      "#8f8471",
      "#705d4c",
      "#e9b98f"
    ],
    "keywords": [
      "ethnic","event","aesthetic","heavy"
    ],
    "category": "Saari",
    "styleCategories": [
      "ethnic","party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-291",
    "name": "Long dress",
    "description": "Long embroided Kameez with 3quarter sleeves styled with bag, heels and accessoried.",
    "image": "/Light Spring/Ethnic/4.jpg",
    "colors": [
      "#f5f1e8",
      "#b68d7d",
      "#d7c5ae",
      "#39383c",
      "#8e4846",
      "#1c1c1c"
    ],
    "keywords": [
      "ethnic","Aesthetic","event"
    ],
    "category": "Long Kameez",
    "styleCategories": [
      "ethnic","party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-292",
    "name": "Full length Frock",
    "description": "Full-leght light pink dress/frock styled with dupatta and other accessories.",
    "image": "/Light Spring/Ethnic/5.jpg",
    "colors": [
      "#efcfd2",
      "#b2a996",
      "#2b2e37",
      "#595d61",
      "#ae7b7d",
      "#e0a8ae"
    ],
    "keywords": [
      "ethnic","aesthetic","pretty"
    ],
    "category": "Long frock",
    "styleCategories": [
      "ethnic","party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-293",
    "name": "Long Dress",
    "description": "Long pink embroided dress styled with dupatta, clutch, heels and other accessories.",
    "image": "/Light Spring/Ethnic/6.jpg",
    "colors": [
      "#e9e9e9",
      "#675f52",
      "#3e372e",
      "#dcd4bc",
      "#b4a396",
      "#a16f5d"
    ],
    "keywords": [
      "ethnic"
    ],
    "category": "Long Dress",
    "styleCategories": [
      "ethnic","party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-294",
    "name": "Long white frock and Green heavy dupatta",
    "description": "Long white frock and Green heavy dupatta styled with accessories.",
    "image": "/Light Spring/Ethnic/7.jpg",
    "colors": [
      "#f1eeec",
      "#c38e68",
      "#deb593",
      "#866d52",
      "#644f2d",
      "#dfcec0"
    ],
    "keywords": [
      "ethnic"
    ],
    "category": "Long Dress",
    "styleCategories": [
      "ethnic","party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-295",
    "name": "Long coat",
    "description": "Long coat paired with white fitted shirt and jaans. Styled with bag, shoes and accessories.",
    "image": "/Light Spring/Formal/1.jpeg",
    "colors": [
      "#f3f0ee",
      "#cda89a",
      "#cfd0d1",
      "#b78779",
      "#7d8a95",
      "#4c6074"
    ],
    "keywords": [
      "formal","casual","aesthetic"
    ],
    "category": "Long coat",
    "styleCategories": [
      "formal","casual"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-296",
    "name": "Dress coat",
    "description": "Dress coat paired with fitted shirt and pants. Perfect for business meeting",
    "image": "/Light Spring/Formal/2.jpeg",
    "colors": [
      "#e4e4e4",
      "#be9b7d",
      "#957d66",
      "#6d514a",
      "#1e1e1e",
      "#ffffff"
    ],
    "keywords": [
      "formal","casual"
    ],
    "category": "Dress Coat",
    "styleCategories": [
      "formal"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-297",
    "name": "Long printed dress",
    "description": "Long printed dress styled with bag, heels and accessories.",
    "image": "/Light Spring/Modest/1.jpeg",
    "colors": [
      "#f5eee9",
      "#ae847d",
      "#cfa8ab",
      "#e5d0c0",
      "#847164",
      "#ffffff"
    ],
    "keywords": [
      "modest","formal","party"
    ],
    "category": "Long Dress",
    "styleCategories": [
      "modest","formal","party"
    ],
    "seasons": [
      "light-spring"
    ]
  },
  {
    "id": "item-298",
    "name": "Long white Dress",
    "description": "Long white dress styled with bag and accessories.",
    "image": "/Light Spring/Modest/10.jpeg",
    "colors": [
      "#f7f6f0",
      "#d3cbb7",
      "#9ebec3",
      "#999e81",
      "#ffffff",
      "#ffffff"
    ],
    "keywords": [
      "modest"
    ],
    "category": "Long",
    "styleCategories": [
      "modest","formal","party"
    ],
    "seasons": [
      "light-spring"
    ]
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

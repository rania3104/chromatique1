
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
      "soft-summer","cool-winter", "cool-summer"
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
      "soft-summer", "light-spring"
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
      "soft-summer","clear-spring", "light-summer"
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
      "soft-summer" , "clear-spring"
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
      "soft-summer" , "soft-autumn", "light-spring"
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
      "soft-summer" , "soft-autumn", "light-spring"
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
      "soft-summer" , "soft-autumn", "light-spring"
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
      "soft-summer","soft-autumn", "light-spring" 
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
      "soft-summer","cool-winter" 
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
      "soft-summer", 
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
      "warm-spring","light-spring", "clear-spring", "soft-autumn"
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
      "warm-autumn",   
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
      "warm-autumn" ,    
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
      "warm-autumn",     
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
      "warm-autumn",   
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
      "warm-autumn",
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
      "warm-autumn"
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
      "warm-autumn"
    ]
  },
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
    keywords: ["sweater", "burgundy", "knitwear", "layering",  ],
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

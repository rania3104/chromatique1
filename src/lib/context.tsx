
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { UserProfile, Season, ClothingItem } from "./types";
import { determineColorSeason } from "@/lib/api";

interface ChromatiqueContextProps {
  user: UserProfile | null;
  setUserQuizData: (data: Partial<UserProfile>) => void;
  isLoading: boolean;
  isQuizComplete: boolean;
  savedItems: ClothingItem[];
  addToSavedItems: (item: ClothingItem) => void;
  removeFromSavedItems: (itemId: string) => void;
  isPremiumUser: boolean;
  setIsPremiumUser: (value: boolean) => void;
  refreshUserData: () => void;
}

const ChromatiqueContext = createContext<ChromatiqueContextProps | undefined>(undefined);

export function ChromatiqueProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [savedItems, setSavedItems] = useState<ClothingItem[]>([]);
  const [isPremiumUser, setIsPremiumUser] = useState(false);
  
  const loadUserData = () => {
    // Get currently logged in user email
    const currentUserData = localStorage.getItem("chromatique-user");
    let currentUserEmail = "";
    
    if (currentUserData) {
      try {
        const userData = JSON.parse(currentUserData);
        currentUserEmail = userData.email || "";
      } catch (error) {
        console.error("Error parsing user data", error);
      }
    }
    
    // Use email as part of the storage key to keep separate profiles per user
    const userProfileKey = currentUserEmail 
      ? `chromatique-user-profile-${currentUserEmail}` 
      : "chromatique-user-profile";
      
    const savedItemsKey = currentUserEmail
      ? `chromatique-saved-items-${currentUserEmail}`
      : "chromatique-saved-items";
    
    // Check if user has already completed the quiz
    const storedUserData = localStorage.getItem(userProfileKey);
    const storedSavedItems = localStorage.getItem(savedItemsKey);
    
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    } else {
      setUser(null); // Ensure user is null if no data found
    }
    
    if (storedSavedItems) {
      setSavedItems(JSON.parse(storedSavedItems));
    } else {
      setSavedItems([]); // Reset saved items if none found
    }
    
    // Subscription check - now uses user-specific key
    const subscriptionKey = currentUserEmail
      ? `chromatique-subscription-${currentUserEmail}`
      : "chromatique-subscription";
      
    const storedSubscription = localStorage.getItem(subscriptionKey);
    if (storedSubscription) {
      const subscription = JSON.parse(storedSubscription);
      setIsPremiumUser(subscription?.planId !== "free");
    } else {
      setIsPremiumUser(false); // Reset premium status if no subscription found
    }
    
    setIsLoading(false);
  };
  
  // Initial data loading
  useEffect(() => {
    loadUserData();
  }, []);
  
  // Function to refresh user data on demand
  const refreshUserData = () => {
    setIsLoading(true);
    loadUserData();
  };
  
  // Update local storage when user data changes
  useEffect(() => {
    if (user) {
      // Get current user email
      const currentUserData = localStorage.getItem("chromatique-user");
      let currentUserEmail = "";
      
      if (currentUserData) {
        try {
          const userData = JSON.parse(currentUserData);
          currentUserEmail = userData.email || "";
        } catch (error) {
          console.error("Error parsing user data", error);
        }
      }
      
      const userProfileKey = currentUserEmail 
        ? `chromatique-user-profile-${currentUserEmail}` 
        : "chromatique-user-profile";
        
      localStorage.setItem(userProfileKey, JSON.stringify(user));
    }
  }, [user]);
  
  // Update local storage when saved items change
  useEffect(() => {
    // Get current user email
    const currentUserData = localStorage.getItem("chromatique-user");
    let currentUserEmail = "";
    
    if (currentUserData) {
      try {
        const userData = JSON.parse(currentUserData);
        currentUserEmail = userData.email || "";
      } catch (error) {
        console.error("Error parsing user data", error);
      }
    }
    
    const savedItemsKey = currentUserEmail
      ? `chromatique-saved-items-${currentUserEmail}`
      : "chromatique-saved-items";
      
    localStorage.setItem(savedItemsKey, JSON.stringify(savedItems));
  }, [savedItems]);
  
  const setUserQuizData = async (data: Partial<UserProfile>) => {
    setIsLoading(true);
    
    let updatedUser: UserProfile;
    
    if (user) {
      updatedUser = { ...user, ...data };
    } else {
      updatedUser = {
        id: "user-" + new Date().getTime(), // Generate a unique ID
        skinTone: data.skinTone || "medium",
        undertone: data.undertone || "neutral",
        eyeColor: data.eyeColor || "light-brown",
        hairColor: data.hairColor,
      };
    }
    
    // If we have all required data, determine the season
    if (updatedUser.skinTone && updatedUser.undertone && updatedUser.eyeColor) {
      try {
        const season = await determineColorSeason(
          updatedUser.skinTone,
          updatedUser.undertone,
          updatedUser.eyeColor,
          updatedUser.hairColor
        );
        updatedUser.season = season;
      } catch (error) {
        console.error("Error determining color season:", error);
      }
    }
    
    setUser(updatedUser);
    setIsLoading(false);
  };
  
  const addToSavedItems = (item: ClothingItem) => {
    setSavedItems((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };
  
  const removeFromSavedItems = (itemId: string) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== itemId));
  };
  
  const isQuizComplete = !!(user?.skinTone && user?.undertone && user?.eyeColor);
  
  return (
    <ChromatiqueContext.Provider
      value={{
        user,
        setUserQuizData,
        isLoading,
        isQuizComplete,
        savedItems,
        addToSavedItems,
        removeFromSavedItems,
        isPremiumUser,
        setIsPremiumUser,
        refreshUserData,
      }}
    >
      {children}
    </ChromatiqueContext.Provider>
  );
}

export function useChromatique() {
  const context = useContext(ChromatiqueContext);
  if (context === undefined) {
    throw new Error("useChromatique must be used within a ChromatiqueProvider");
  }
  return context;
}

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { UserProfile, Season, ClothingItem } from "./types";
import { determineColorSeason } from "@/lib/api";
import { supabase } from "@/lib/supabaseClient";

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
  quizData: {
    skinTone: UserProfile["skinTone"];
    undertone: UserProfile["undertone"];
    eyeColor: UserProfile["eyeColor"];
    hairColor?: UserProfile["hairColor"];
  };
  contextReady: boolean;
}

const ChromatiqueContext = createContext<ChromatiqueContextProps | undefined>(undefined);


export function ChromatiqueProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [savedItems, setSavedItems] = useState<ClothingItem[]>([]);
  const [isPremiumUser, setIsPremiumUser] = useState(false);
  const [contextReady, setContextReady] = useState(false);
  const syncSupabaseUser = async () => {
    setIsLoading(true);
    const { data: { user: supabaseUser } } = await supabase.auth.getUser();
    if (supabaseUser) {
      // Here you can load additional user profile info from your DB if needed
      // For now, create a minimal UserProfile from supabaseUser
      setUser((prev) => {
        if (prev && prev.id === supabaseUser.id) return prev; // no change
        return {
          id: supabaseUser.id,
          email: supabaseUser.email || "",
          skinTone: prev?.skinTone || "medium",
          undertone: prev?.undertone || "neutral",
          eyeColor: prev?.eyeColor || "light-brown",
          hairColor: prev?.hairColor,
          season: prev?.season,
           };
      });
       } else {
      setUser(null);
      setIsPremiumUser(false);
    }
    setIsLoading(false);
  };


  const loadUserData = () => {
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

    const savedItemsKey = currentUserEmail
      ? `chromatique-saved-items-${currentUserEmail}`
      : "chromatique-saved-items";

    const subscriptionKey = currentUserEmail
      ? `chromatique-subscription-${currentUserEmail}`
      : "chromatique-subscription";

    const storedUserData = localStorage.getItem(userProfileKey);
    const storedSavedItems = localStorage.getItem(savedItemsKey);
    const storedSubscription = localStorage.getItem(subscriptionKey);

    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    } else {
      setUser(null);
    }

    if (storedSavedItems) {
      setSavedItems(JSON.parse(storedSavedItems));
    } else {
      setSavedItems([]);
    }

    if (storedSubscription) {
      const subscription = JSON.parse(storedSubscription);
      setIsPremiumUser(subscription?.planId !== "free");
    } else {
      setIsPremiumUser(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    // On mount, sync user session from Supabase
    syncSupabaseUser();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        syncSupabaseUser();
      } else {
        setUser(null);
        setIsPremiumUser(false);
      }
    });

    setContextReady(true);

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  
  useEffect(() => {
    loadUserData();
    setContextReady(true);
  }, []);

  const refreshUserData = () => {
    setIsLoading(true);
    loadUserData();
    setContextReady(true);
  };

  useEffect(() => {
    if (user) {
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

  useEffect(() => {
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
        id: "user-" + new Date().getTime(),
        skinTone: data.skinTone || "medium",
        undertone: data.undertone || "neutral",
        eyeColor: data.eyeColor || "light-brown",
        hairColor: data.hairColor,
      };
    }

    if (
      updatedUser.skinTone &&
      updatedUser.undertone &&
      updatedUser.eyeColor
    ) {
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

  const isQuizComplete = !!(
    user?.skinTone &&
    user?.undertone &&
    user?.eyeColor
  );

  const quizData = {
    skinTone: user?.skinTone ?? "medium",
    undertone: user?.undertone ?? "neutral",
    eyeColor: user?.eyeColor ?? "light-brown",
    hairColor: user?.hairColor,
  };

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
        quizData,
        contextReady,
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

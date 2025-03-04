import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      routeLogin: false,
      setRouteLogin: (routeLogin: boolean) => set({ routeLogin }),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

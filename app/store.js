import { create } from "zustand";

const useStore = create((set) => ({
  selectedClaim: null,
  setSelectedClaim: (clickClaim) => set(() => ({ selectedClaim: clickClaim })),
}));

export default useStore;

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useMainSlider = create(immer((set) => ({
    isMobile: false,
    setIsMobile: (value) => set((state) => {
        state.isMobile = value
    })
})));

export default useMainSlider;

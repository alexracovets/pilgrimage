import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useMainSlider = create(immer((set) => ({
    currentSlide: 1,
    prevSlider: 0,
    lengthSlider: 0,
    setCurrentSlide: (value) => set((state) => {
        state.currentSlide = value;
        if (value === 0) {
            state.prevSlider = state.lengthSlider - 1;
        } else {
            state.prevSlider = value - 1;
        }
    }),
    setLengthSlider: (value) => set((state) => {
        state.lengthSlider = value;
    })
})));

export default useMainSlider;

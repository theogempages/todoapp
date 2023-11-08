import { create } from 'zustand'

type Config = {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}

const useStore = create<Config>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export function BearCounter() {
    const bears = useStore((state) => state.bears)
    return <h1>{bears} around here...</h1>
}
  
export function Controls() {
const increasePopulation = useStore((state) => state.increasePopulation)
return <button onClick={increasePopulation}>one up</button>
}
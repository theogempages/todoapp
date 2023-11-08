import { create } from 'zustand'

type Config = {
    bears: number;
    increasePopulation(): void;
    removeAllBears(): void;
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

type State = {
    firstName: string
    lastName: string
  }
  
  type Action = {
    updateFirstName: (firstName: State['firstName']) => void
    updateLastName: (lastName: State['lastName']) => void
  }
  
  // Create your store, which includes both state and (optionally) actions
  const usePersonStore = create<State & Action>((set) => ({
    firstName: '',
    lastName: '',
    updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
    updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  }))
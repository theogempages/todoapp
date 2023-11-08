import { create } from 'zustand'
import { useFetcher, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

const useStore = create((set) => ({
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

export const loader = async () => {
  return json({ ok: true });
};

export default function Myapp() {
  const data = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  
  return (
    <div className="py-8 px-5">
      <h2 className="text-4xl text-center">Test zustand</h2>
      <BearCounter />
      <Controls />
    </div>
  );
}

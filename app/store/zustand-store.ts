import { create } from 'zustand'
import { immer } from "zustand/middleware/immer";
import { uuid } from "uuidv4";
/* 
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
  })) */

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

type State = {
  todos: Record<string, Todo>;
};

type Actions = {
  addTodo: (title: string) => void;
  toggleTodo: (todoId: string) => void;
};

  
export const useTodoStore = create(
  immer<State & Actions>((set) => ({
    todos: {
      "82471c5f-4207-4b1d-abcb-b98547e01a3e": {
        id: "82471c5f-4207-4b1d-abcb-b98547e01a3e",
        title: "Learn Zustand",
        done: false
      },
      "354ee16c-bfdd-44d3-afa9-e93679bda367": {
        id: "354ee16c-bfdd-44d3-afa9-e93679bda367",
        title: "Learn Jotai",
        done: false
      },
      "771c85c5-46ea-4a11-8fed-36cc2c7be344": {
        id: "771c85c5-46ea-4a11-8fed-36cc2c7be344",
        title: "Learn Valtio",
        done: false
      },
      "363a4bac-083f-47f7-a0a2-aeeee153a99c": {
        id: "363a4bac-083f-47f7-a0a2-aeeee153a99c",
        title: "Learn Signals",
        done: false
      }
    },
    addTodo: (title: string) => {
      set((state) => ({
        todos: {
        ...state.todos
        }
      }));
    },
    toggleTodo: (todoId: string) =>
      set((state) => {
        state.todos[todoId].done = !state.todos[todoId].done;
      })
  }))
);
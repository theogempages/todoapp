
import { createContext, useCallback, useReducer } from 'react';
 
export const BooksData = createContext();

const initBookList = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1'
    },{
        id: 2,
        title: 'Book 2',
        author: 'Author 2'
    },
]

const reducer = (state: string, action: object) => {
    switch (action.type) {
        case 'UPDATE_BOOK':
            return state.map(book =>{
                return (book.id === action.payload.id) ? {...book, title: action.payload.title} : {...book}
            });
        default:
            return state;
    }
}

export const BookProvider = ({children: any}) =>{
    const [bookList, dispatch] = useReducer(reducer, initBookList)

    // const updateBook = useCallback(action => {
    //     dispatch({
    //         type: action.type,
    //         payload: action.payload
    //       });
    // })

    const value = {bookList}

    return <BooksData.Provider value={value}>{children}</BooksData.Provider>
}


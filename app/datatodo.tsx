const defaultData = [
    {
        title: 'Task 1',
        enddate: 1699344746663
    },
    {
        title: 'Task 2',
        enddate: 1699344746663
    }
]

export const allTodos = defaultData.map(todo => {
    return {
        id: Math.random(),
        title: todo.title,
        enddate: todo.enddate,
        status: false
    }
})
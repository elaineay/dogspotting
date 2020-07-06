let nextItemId = 3

export const addItem = (size, text) => ({
    type: 'ADD_ITEM',
    id: nextItemId++,
    size,
    text
})

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    id
})
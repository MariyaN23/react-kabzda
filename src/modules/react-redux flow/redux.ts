import {api} from './api';

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'status-changed':
            return {...state, status: action.status}
        case 'error-changed':
            return {...state, status: action.error}
        case 'items-loaded':
            return {...state, items: action.items}
        case 'items - loaded':
            return {...state, items: action.items}
        case 'item-deleted':
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.id)
            }
        case 'item-updated': {
            return {
                ...state,
                items: state.items.map(i => i.id !== action.id
                    ? i
                    : {...i, ...action.data })
            }
        }
        default:
            return state
    }
}

export const itemsLoadedAC = (items) => ({type: 'items-loaded', items})
export const itemDeletedAC = (itemId) => ({type: 'item-deleted', itemId})
export const changeStatusAC = (status) => ({type: 'status-changed', status})
export const setErrorAC = (error) => ({type: 'error-changed', error})

export const loadItemsTC = (categoryId) => (dispatch) => {
    dispatch(changeStatusAC('loading'))
    dispatch(setErrorAC(null))
    api.loadItems(categoryId)
        .then((res) => dispatch(itemsLoadedAC(res.data)))
        .catch(err => dispatch(setErrorAC(err)))
        .finally(() => dispatch(changeStatusAC('idle')))
}

export const deleteItemTC = (id) => (dispatch) => {
    dispatch(changeStatusAC('loading'))
    dispatch(setErrorAC(null))
    api.deleteItem(id)
        .then((res) => dispatch(itemDeletedAC(res.id)))
        .catch(err => dispatch(setErrorAC(err)))
        .finally(() => dispatch(changeStatusAC('idle')))
}
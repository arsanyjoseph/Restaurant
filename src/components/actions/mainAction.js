export const ADD_DATA = 'ADD_DATA'

export function receiveData (data) {
    return { type: ADD_DATA, data }
}

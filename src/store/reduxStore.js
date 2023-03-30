import {legacy_createStore} from 'redux'
import authReducer from '../reducers/authReducer'

function saveToLocalStorage(store) {
    try {
        window.localStorage.setItem('store', JSON.stringify(store));
    } catch(e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if(!serializedStore) return undefined;
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store
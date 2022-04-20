import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducerFn from './reducer/reducer'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['todos']
}

const persistedReducer = persistReducer(persistConfig,reducerFn);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
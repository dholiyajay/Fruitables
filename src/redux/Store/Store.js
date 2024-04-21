
import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from '..';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const configStore = () => {

    const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['addFacilities','Cart']
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(persistedReducer, applyMiddleware(thunk));

    let persistor = persistStore(store)
    return { store, persistor }
}

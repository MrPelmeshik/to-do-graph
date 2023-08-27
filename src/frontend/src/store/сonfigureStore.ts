import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import themesReducer from "./theme/reducer";
import pagesReducer from "./page/reducer";


const rootReducer =  combineReducers({
    theme: themesReducer,
    page: pagesReducer,
})

function setupStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => {
            const customizedMiddleware = getDefaultMiddleware({
                /// По хорошему надо от этого избавиться, но тогда не сможем использовать Map в store
                serializableCheck: false,
            })
            return customizedMiddleware
        },
    })
}

export const store = setupStore();


export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
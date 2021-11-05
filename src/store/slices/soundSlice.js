import { createSlice } from '@reduxjs/toolkit'
import { localSoundDatabase } from './localSoundDatabase'

const initialState = {
    sounds: localSoundDatabase,
    savedSounds: []
}

export const slice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        save: (state, action) => {
            state.savedSounds = [
                ...state.savedSounds,
               action.payload
            ]
        },
        unsave: (state, action) => {
            state.savedSounds = state.savedSounds.filter((id) => id !== action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { save, unsave } = slice.actions
import { SetCurrentExercice } from '../actions';
import { StoreState } from '../types/index';
import { SET_CURRENT_EXERCICE } from '../constants/index';

export function structure(state: StoreState, action: SetCurrentExercice): StoreState {
    switch (action.type) {
        case SET_CURRENT_EXERCICE:
            return {
                ...state, structure: {
                    currentExerciceComponent: action.component
                }
            };
    }
    return state;
}
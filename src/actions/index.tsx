import * as constants from '../constants'
import { ExerciceComponent } from "../types/index";

export interface SetCurrentExercice {
    type: constants.SET_CURRENT_EXERCICE;
    component: ExerciceComponent;
}

export function setCurrentExercice(component: ExerciceComponent): SetCurrentExercice {
    return {
        type: constants.SET_CURRENT_EXERCICE,
        component
    }
}
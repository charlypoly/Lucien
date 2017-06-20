export type ExerciceComponent = 'ChordConstruction' | 'IntervalQuizz';

export interface StoreStructureState {
    currentExerciceComponent: ExerciceComponent;
}

export interface StoreState {
    structure: StoreStructureState;
}
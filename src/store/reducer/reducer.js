import * as actionTypes from '../action';

const initialState = {
    persons: []
};
const reducer = (state = initialState, action) => {
    const { ADD_PERSON, DELETE_PERSON } = actionTypes;
    switch(action.type) {        
        case ADD_PERSON: 
        const person = {
            id: Math.random(), // not really unique but good enough here!
            name: action.personData.name,
            age: action.personData.age
        };      
            return {
                ...state,
                persons: state.persons.concat(person)
            }
        
        case DELETE_PERSON:
            const updatedArray = state.persons.filter(person => person.id !== action.personId)        
            return {
                ...state,
                persons: updatedArray
            }
    }

    return state;
}

export default reducer;

const initialState = {
    list: [],
    activeId: false,
}

const addReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            };
        }
        case 'SET_ACTIVE_HOBBY': {
            return {
                ...state,
                activeId: !activeId
            }
        }
        case 'DELETE_HOBBY': {
            const newList = [...state.list];
            const index = newList.indexOf(action.payload);
            newList.splice(index,1);
            return {
                ...state,
                list: newList
            }
        }
        default:
            return state;
    }

}

export default addReducer;
import axios from "axios"


export const addNewWork = (Work) => {
    return {
        type: 'ADD_WORK',
        payload: Work
    }
}

export const setActiveWork = (Work) => {
    return {
        type: 'SET_ACTIVE_WORK',
        payload: Work
    }
}

export const deleteWork = (Work) => {
    return {
        type: 'DELETE_WORK',
        payload: Work
    }
}

export const allWork = (Work) => {
    return {
        type: 'ALL_WORK',
        payload: Work
    }
}

export const activeWork = (Work) => {
    return {
        type: 'ACTIVE_WORK',
        payload: Work
    }
}

export const completeWork = (Work) => {
    return {
        type: 'COMPLETE_WORK',
        payload: Work
    }
}

export const allCompleteWork = () => {
    return {
        type: 'ALL_COMPLETE_WORK',
    }
}



export const fetchToDo = async (dispatch) => {
    const res = await axios.get('https://60508dbf5346090017670030.mockapi.io/api/v1/Item');
    console.log(res.data);
    return {
        type: 'SET_STATE',
        payload: res.data
    }
}
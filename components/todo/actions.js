export const ADD_TODO = 'ADD_TODO';
export const TOGGER_TODO = 'TOGGER_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const COMPLETE_TODO = 'COMPLETE_TODO';

/**
 * 其他的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTVIVE: 'SHOW_ACTVIVE',
};


/**
 * action 创建函数
 */

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
    };
}

// export function toggleTodo(index) {
//     return {
//         type: TOGGLE_TODO,
//         index,
//     };
// }

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index };
}


export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    };
}

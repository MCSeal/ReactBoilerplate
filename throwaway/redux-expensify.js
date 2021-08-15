import { createStore, combineReducers } from 'redux';
import  uuid  from 'uuid';

//add expense

const addExpense = (
    { 
        description = '',
         note = '',
          amount = 0,
          createdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt: 0
    }

})


const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});



//edit exp



const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates

});

const setTextFilter = (text = '') => ({
    type:'SET_FILTER_TEXT',
    text
});


const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'

})


const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate

})



//sory by date
//soryt by amount
//set start date
//set end date


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type){
        case 'ADD_EXPENSE':
            //concat doesnt change state
            return [...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id); 
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });   
        default: 
            return state;
    }


};



const filterReducerDefaultState = {
        text: '',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {

    switch (action.type){
        case 'SET_FILTER_TEXT':
        return {
            ...state,
            text: action.text
        }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default: 
        return state;
    }


};



//store creation!

//combine reducers let you change default of create store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer

    }) 
    
);

store.subscribe(() =>{
    console.log(store.getState());
})





// const e1 = store.dispatch(addExpense({
//     description:'RENT', 
//     amount: 100
// }));

// const e2 = store.dispatch(addExpense({
//     description:'coffee', 
//     amount: 300
// }));

// store.dispatch(removeExpense({ id: e1.expense.id }))


// store.dispatch(editExpense(e2.expense.id,
//     {
//         amount: 500
    
// }))



// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());


store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1505));
store.dispatch(setEndDate());



const demoState = {
    expenses: [{
        id: 'sdfgaa',
        description: 'rent',
        note: 'this was the note daddy',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};



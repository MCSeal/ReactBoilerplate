import { createStore, combineReducers } from 'redux';
import  uuid  from 'uuid';

//add expense

const addRsvp = ({amount=1, createdAt=0, guest:{name = '', coming = true, child = false, dietary = ''}, guest}) => ({
    type: 'ADD_RSVP',
    rsvp: {
        id: uuid(),
        amount: amount,
        createdAt: createdAt,
        guest: [{
            name: guest.name,
            coming: guest.coming,
            child: guest.child,
            dietary: guest.dietary
        }]
    }

})


const addGuest = (id, guest) => ({
    type:'ADD_GUEST',
    id,
    guest

});


const removeRsvp = ({ id } = {}) => ({
    type: 'REMOVE_RSVP',
    id

});



const setTextFilter = (text = '') => ({
    type:'SET_FILTER_TEXT',
    text
});




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

const rsvpReducerDefaultState = [];

const rsvpReducer = (state = rsvpReducerDefaultState, action) => {

    switch (action.type){
        case 'ADD_RSVP':
            //concat doesnt change state
            return [...state,
                action.rsvp
            ];
        case 'ADD_GUEST':
            return state.map((rsvp) => {
                if (rsvp.id === action.id) {

                    return {
                        ...rsvp,
                        guest:[...rsvp.guest.concat(action.guest)]
                        // copyRsvp.guest.push(action.guest)
                    };
                } else {
                    return rsvp;
                };
            });
            
        case 'REMOVE_RSVP':
            return state.filter(({ id }) => id !== action.id);     
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




const visibleR = (rsvps, {text, sortBy, startDate, endDate}) => {
    return rsvps.filter((rsvp) => {
        const startDateMatch = typeof startDate !== 'number' || rsvp.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || rsvp.createdAt <= endDate;

        return startDateMatch && endDateMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
            
        }
    });
};








//store creation!

//combine reducers let you change default of create store

const store = createStore(
    combineReducers({
        rsvp: rsvpReducer,
        filters: filterReducer

    }) 
    
);

store.subscribe(() =>{
    const state = store.getState();
    const visibleRe = visibleR(state.rsvp, state.filters);
    console.log(visibleRe);
  
})




const e1 = store.dispatch(addRsvp({
    amount: 3,
    createdAt: 1000,
    guest: {
        name: 'john smith',
        coming: true,
        child: false,
        dietary: 'beef'
    }
}));



const e2 = store.dispatch(addRsvp({
    amount: 3,
    createdAt: 0,
    guest: {
        name: 'john smith',
        coming: true,
        child: false,
        dietary: 'beef'
    }
}));



const e3 = store.dispatch(addRsvp({
    amount: 3,
    createdAt: 2000,
    guest: {
        name: 'john smith',
        coming: true,
        child: false,
        dietary: 'beef'
    }
}));


// store.dispatch(setTextFilter());
store.dispatch(sortByDate());













// const demoState = {
//     expenses: [{
//         id: 'sdfgaa',
//         description: 'rent',
//         note: 'this was the note daddy',
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };


// const newDemoState = {
//     rsvp: [{
//         id: 'sdfgaa',
//         amunt: 0,
//         guest:{
//             name: 'john smith',
//             coming: true,
//             child: false,
//             dietary: ''
//         },
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //name, child, dietary,
//         startDate: undefined,
//         endDate: undefined
//     }
// };



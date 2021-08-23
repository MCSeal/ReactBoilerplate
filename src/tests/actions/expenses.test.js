import { addExpense, editExpense, removeExpense } from "../../actions/expenses";



test ('remove expense ', () => {

    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'

    });

});


test ('edit expense ', () => {

    const action = editExpense( '123abc', { note:'new note slut'} );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note:'new note slut'
        }
        

    });

});

test ('add expense test ', () => {

    const expenseData = {

        description: 'desc',
        note: 'last month rent',
        amount: 109500,
        createdAt: 1000
        
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });

});




test ('add expense test default ', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount : 0,
            createdAt : 0,
            id: expect.any(String)
        }
    });

});

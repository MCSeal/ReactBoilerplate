import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter  } from '../../actions/filters';

import moment from'moment';


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
        
    });
    
    
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    
    expect(action).toEqual({
       type: 'SET_END_DATE',
       endDate: moment(0)
    });
    
    
});


test('sort by date', () => {
    const action = sortByDate();
    
    expect(action).toEqual({
       type: 'SORT_BY_DATE'
       
        
    });
    
    
    
});

test('sort by amount', () => {
    const action = sortByAmount();
    
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
        
    })
    
    
    
});
test('sort by filter default', () => {
    const action = setTextFilter()
    
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: ''
    })
    
    
    
});
test('sort by filter not default value', () => {
    const action =  setTextFilter('big butts')
    
        expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text: 'big butts'
    })
});
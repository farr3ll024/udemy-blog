export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        case 'NULL':
            return [];
        default:
            return state;
    }
};

//RULES OF REDUCERS:
    // - Must return any value besides 'undefined'
    // - Produces 'state', or data to be used inside of your app using only previous state and the action
        // -> only thing that changes each time the reducer is called is the action object (type/payload)
    // - Must not return reach 'out of itself' to decide what value to return (reducers are pure)
        // -> reducer must not look outside of it's own function to determine values or make a request, etc.
        // -> only ever return values that use the input arguments
        // - Must not mutate its input 'state' argument
        // -> never mutate state using equals: 'state = something'
        // -> Misleading: You actually can mutate state. it's easier to tell beginners 'don't mutate state EVER than to tell
            // them when they can and cant
        // -> corner case: (github.com/reduxjs/redux/) if you accidentally return the same value that is pumped into
            // reducer, if we eventually return the same state, redux will recognize it as the same and will not re-render

    //NOTE: we are not going to mutate state ever. Best practice is still to avoid mutating state

//SAFE STATE UPDATES IN REDUCERS:
    // 1. Removing and element from an array => state.filter(element => element !== 'hi')
    // 2. Adding an element to an array => [...state, 'hi']
    // 3. Replacing an element in an array => state.map(el => el === 'hi' ? 'bye' : el)
    // 4. Updating a property in an object => {...state, name: 'Sam'}
    // 5. Adding a property to an object => {...state, age: 30}
    // 6. Removing a property from an object => _.omit(state, 'age' OR {...state, age: undefined}
        // note that setting it to undefined doesn't truly remove the property. Instead utilize the lodash library '_'

//GENERAL DATA LOADING WITH REDUX:
    // 1. Component gets rendered onto the screen
    // 2. Component's 'componentDidMount' lifecycle method gets called
    // 3. We call action creator from 'componentDidMount'
    // 4. Action creator runs code to make an API request
    // 5. API responds with data
    // 6. Action creator returns an 'action' with the fetched data on the 'payload' property
    // 7. Some reducer sees the action, returns the data off the 'payload'
    // 8. Because we generated some new state object, redux/react-redux cause our React app to be re-rendered
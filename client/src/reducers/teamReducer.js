const testState = [
    {
        id: 0,
        name: 'team A',
        users: [ 0, 1, 2 ]
    },
    {
        id: 1,
        name: 'team B',
        users: [ 0, 1 ]
    },
    {
        id: 2,
        name: 'team C',
        users: [0]
    }
]

export default(state = testState, action) => {

    switch(action.type) {
        default:
            return state;
    }
    
}
import  {State, createAction, createReducer, on} from '@ngrx/store'

interface CounterRI {
    count: number
}

const initialState: CounterRI = {
    count: 0
}

export const counterReducer = createReducer(
    initialState,
    on(createAction('Increment'), (State)=>{
        return{
            ...State,
            count: State.count + 1
        }
    }),
    on(createAction('Decrement'), (State)=>{
    return{
            ...State,
            count: State.count - 1
        }
        
    })
)
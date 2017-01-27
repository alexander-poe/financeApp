import { 
	createStore, 
	applyMiddleware
} from 'redux'
import ReduxThunk from 'redux-thunk' 
import reducers from './reducers/reducers'

const store = createStore(reducers, {initState}, applyMiddleware(ReduxThunk))

export default store;
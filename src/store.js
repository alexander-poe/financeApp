import { 
	createStore, 
	applyMiddleware,
	compose
} from 'redux'
import thunk from 'redux-thunk' 
import reducer from './reducers/reducers'

export default compose(applyMiddleware(thunk))(createStore)(reducer);
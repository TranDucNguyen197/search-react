import { combineReducers} from "redux";
import { titleReducer} from './titleReducers'
import { imageReducer} from './imageReducer'
import { termReducer} from './termReducer'

export default combineReducers({
    title: titleReducer,
    images: imageReducer,
    term: termReducer
});

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import demo from './demo'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    demo
  })
  
  export default todoApp
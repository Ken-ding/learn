import React from 'react'
import { Consumer } from './context'

class Switch extends React.Component {
  render () {
    return (
      <Consumer>
        {
          (state) => {
            for (let i = 0; i < this.props.children.length; i++) {
              const path = (this.props.children[i].props && this.props.children[i].props.path) || '/'
              const reg = new RegExp('^' + path+'$')
              if (reg.test(state.location.pathname)) {
                return this.props.children[i]
              }else if(this.props.children[i].props.to){
                return this.props.children[i]
              }
            }
          }
        }
      </Consumer>
    )
  }
}

export default Switch
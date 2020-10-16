import React from 'react'

class Demo extends React.Component{
    render(){
        return(
            <div>
                <div>个人信息：{this.props.demo.info} <button onClick={()=>{this.props.setInfo()}}>修改</button></div>
                <div>上线状态：{String(this.props.demo.online)}</div>
            </div>
        )
    }
}

export default Demo;
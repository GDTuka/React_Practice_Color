import React from "react";


export default class Color extends React.Component{
  render(){
    let hex1 = this.props.hex1
    let hex2 = this.props.hex2
    let hex3 = this.props.hex3
    let st = {
      backgroundColor: `rgb(${hex1},${hex2},${hex3})`,
      height:100,
      width:200,

    }

    return <div className='TriadicMain' style={st}></div>
  }
}

// создать компонент который принимает букву внутри каждого нашего компонента 
// задача научиться создават компоненты
// 

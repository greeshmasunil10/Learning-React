import React from 'react'

// function HelloWorld(props){
//     return(
//         <h1>Hello {props.name}</h1>
//     )
// }
class HelloWorld extends React.Component{
    render(){
        return(
            <div>
            {/* <span  className="font-bold bg-blue-100"> */}
                Hello {this.props.name}
            {/* </span> */}
            </div>
        )
    }
}


export default HelloWorld
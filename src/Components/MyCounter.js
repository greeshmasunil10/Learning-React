import React, { useState} from 'react';

function MyCounter(props){
    const [count, SetCount ] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick = {()=> SetCount(count+1)}>
                Up
            </h1>
            <h1 onClick = {()=> SetCount(count-1)}>
                Down
            </h1>

        </div>
    )
}
export default MyCounter
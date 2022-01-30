import React, { useState } from 'react';

function Fibonacci(){
    const [result, setResult] = useState(0);
    const [k, setK] = useState(0);


    function getKFibonnaci(number) {
        let fibbonacci = [0, 1];
        for(let i = 2; i <= number ; i++)
            fibbonacci[i] = fibbonacci[i-2] + fibbonacci[i-1];
        return fibbonacci[fibbonacci.length-1];
    }

    const getResult = (value) => {
        setK(value);
        setResult(getKFibonnaci(value))
        if(value != null && value != "" && value != undefined)
            sendResultToBackend(value, getKFibonnaci(value))
    }

    function sendResultToBackend(kValue, result){
        fetch(`http://localhost:4000/api/history?k=${kValue}&result=${result}`, {method: 'POST'})
    }

    return (
        <div>
            <p>Insert expected part of Fibonacci: <input type="number" min="0" onChange={e=>{if(e.target.value>20)e.target.value = 20; getResult(e.target.value)}}/></p>
            <p>Result: {result}</p>
        </div>
    )
}

export default Fibonacci;
import {useState, useEffect, useRef } from 'react';


function Timer(){
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    // useEffect pour gerer les effets secondaire d'une action à chaque fois que sa dependance est vérifiée
    // composé d'une (fonction, [dependance])

    useEffect( () => {
        console.log("Je suis dans useEffect")
        setCalculation(() => count * 2 )
    }, [count] );

    return (
        <>
            <p>
                Count : {count}
            </p>
            <button type='button' onClick = { () => setCount((c) => c + 1) }>+</button>
            <div>
                Calculation:{calculation}
            </div>
        </>
    );
}
 export default Timer;

//  export default function Apps (){
//      const [inputValue, setInputValue] = useState("");
//      const count = useRef(0);

//      useEffect(() => {
//          count.current += 1;
//      });

//      return (
//          <>
//             <input type="text" 
//             value={inputValue} 
//             onChange = {(e) => setInputValue(e.target.value) } />
//             <h3>
//                 {/* pour acceder au décompte, il faut .current */}
//                 Le nombre d'actions : {count.current}
//             </h3>
//          </>
//      );
//  }
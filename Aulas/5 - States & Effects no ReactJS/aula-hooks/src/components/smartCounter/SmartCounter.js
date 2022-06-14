import {useState} from 'react';

function SmartCounter(){
    //retorna um vetor
    //1. Variável statefull
    //2. Função amarrada a essa variável que atualiza o valor
    
    const [quantity, upQuantity] = useState(1);
    
    return(
        <>
            <h1></h1>
            <button noClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
        </>

    )
};

export default SmartCounter;
import React, {useState} from 'react'
import '../ifoodCounter/ifoodCounter.css'

export default function ifoodCounter() {
    const [value, setValue] = useState(1)
    const [buttonStyle], setButtonStyle = useState("counter-button-minus-active")

    function down(){

        if (value <= 1){
            setButtonStyle("counter-button-minus-desactive")
            //mudar o css

        }

        if(value > 0){
            setValue(value-1)
        }
    }

    function up(){
        setValue(value+1)
        setButtonStyle("counte-button-minus-active")
    }

    return (
        <div className='countex-wrapper'>
            <button
                className="counter-button-minus-active"
                onClick = {down}
            >
            -
            </button>
            <p>{value}</p>
            <button 
                className="counter-button-plus-active"
                onClick = {up}
            >
                +
            </button>

    </div>
  )
}

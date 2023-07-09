import React from 'react';


type IProps = {
    setSumElement: React.Dispatch<React.SetStateAction<number>>,
    sumElement: number
}
const CalkulatorBue = ({setSumElement, sumElement}:IProps) => {
    const decrement = (num: number)=>{
        if(num > 1){
            return num - 1
        }
        return num
    }
    const increase = (num: number)=>{
        return num + 1
    }
    return (
        <div className='calculator-item'>
        <button
            className='calculator-item__btn'
            onClick={()=> setSumElement(increase(sumElement))}
        >
            +
        </button>
        <h6 className='calculator-item__input'>{sumElement}</h6>
        <button
            className='calculator-item__btn'
            onClick={()=> setSumElement(decrement(sumElement))}
        >
            -
        </button>
    </div>
    );
};

export default CalkulatorBue;
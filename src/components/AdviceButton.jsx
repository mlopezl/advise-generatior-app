import iconDice from '../../public/images/icon-dice.svg';

function AdviceButton(){
    return(
        <button className='inline-block w-13 h-13 rounded-full bg-Green-300 absolute -bottom-6 left-1/2 -translate-x-1/2 p-4'>
            <img className="w-5 h-5" src={iconDice} alt="Icon Dice" />
        </button>
    )
}

export default AdviceButton;
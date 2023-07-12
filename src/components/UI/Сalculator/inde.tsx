import './Calculator.scss'

type IProps = {
	amount: number
	setAmount: React.Dispatch<React.SetStateAction<number>>
}
const Calculator = ({ amount, setAmount }: IProps) => {
	const decrement = () => {
		if (amount - 1) {
			setAmount(amount - 1)
		}
	}
	const increment = () => {
		setAmount(amount + 1)
	}
	return (
		<div className='calculator'>
			<button onClick={increment} className='calculator__btn'>
				+
			</button>
			<h6 className='calculator__input'>{amount}</h6>
			<button onClick={decrement} className='calculator__btn'>
				-
			</button>
		</div>
	)
}

export default Calculator

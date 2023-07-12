import './Cashback.scss'
type INum = { num?: number }
const Cashback = ({ num }: INum) => {
	return (
		<div className='cashback'>
			<svg
				width='21'
				height='21'
				viewBox='0 0 21 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M16.3337 3.83334H4.66699C4.00395 3.83334 3.36807 4.09674 2.89923 4.56558C2.43038 5.03442 2.16699 5.6703 2.16699 6.33334V14.6667C2.16699 15.3297 2.43038 15.9656 2.89923 16.4344C3.36807 16.9033 4.00395 17.1667 4.66699 17.1667H16.3337C16.9967 17.1667 17.6326 16.9033 18.1014 16.4344C18.5703 15.9656 18.8337 15.3297 18.8337 14.6667V6.33334C18.8337 5.6703 18.5703 5.03442 18.1014 4.56558C17.6326 4.09674 16.9967 3.83334 16.3337 3.83334V3.83334ZM4.66699 5.50001H16.3337C16.5547 5.50001 16.7666 5.58781 16.9229 5.74409C17.0792 5.90037 17.167 6.11233 17.167 6.33334V7.16668H3.83366V6.33334C3.83366 6.11233 3.92146 5.90037 4.07774 5.74409C4.23402 5.58781 4.44598 5.50001 4.66699 5.50001V5.50001ZM17.167 14.6667C17.167 14.8877 17.0792 15.0997 16.9229 15.2559C16.7666 15.4122 16.5547 15.5 16.3337 15.5H4.66699C4.44598 15.5 4.23402 15.4122 4.07774 15.2559C3.92146 15.0997 3.83366 14.8877 3.83366 14.6667V8.83334H17.167V14.6667ZM5.50033 13C5.50033 12.779 5.58812 12.567 5.7444 12.4108C5.90068 12.2545 6.11265 12.1667 6.33366 12.1667H11.3337C11.5547 12.1667 11.7666 12.2545 11.9229 12.4108C12.0792 12.567 12.167 12.779 12.167 13C12.167 13.221 12.0792 13.433 11.9229 13.5893C11.7666 13.7455 11.5547 13.8333 11.3337 13.8333H6.33366C6.11265 13.8333 5.90068 13.7455 5.7444 13.5893C5.58812 13.433 5.50033 13.221 5.50033 13Z'
					fill='black'
				/>
			</svg>
			{num ? num + ' кешбек' : '10 кешбек'}
		</div>
	)
}

export default Cashback

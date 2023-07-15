import { headerButtons } from '../const'
import BtnHeader from '../../UI/Buttons/BtnHeader'
import { AppSelector } from '../../../hooks'

const HeaderButtons = () => {
	const basketSum = AppSelector(state => state.basketSlice.basketItems)
	const favoriteSum = AppSelector(state => state.favoriteSlice.favoriteItems)
	const getNumbers = (patch: string): number => {
		if (patch == '/basket') {
			return basketSum.length
		}
		if (patch == '/favorites') {
			return favoriteSum.length
		}
		return 0
	}
	return (
		<div className='header-buttons'>
			{headerButtons.map(e => (
				<BtnHeader key={e.name} {...e} sum={getNumbers(e.path)} />
			))}
		</div>
	)
}

export default HeaderButtons

import React, { useState } from 'react'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import BueBoxContent from '../../components/BueBox/bueBoxContent'
import BueBoxImage from '../../components/BueBox/bueBoxImage'
import BueCompatible from '../../components/BueCompatible'
import BueDelivery from '../../components/BueDelivery'
import BueDesc from '../../components/BueDesc'
import BueReviews from '../../components/BueReviews'
import BestReviews from '../../components/BueReviews/bestReviews'
import BuePagination from '../../components/UI/Pagination/BuePagination'
import PopupBue from '../../components/UI/Popups/popupBue'
import './bue.Module.scss'
const PageBue = () => {
	const [popupSwitch, setPopupSwitch] = useState<boolean>(false)
	const breadcrumbs = [
		'Головна',
		'Електронні сигарети',
		'Стартові набори',
		'Стартовий набор OVNS W01 POD KIT (ORIGINAL)',
	]
	const pagination: JSX.Element[] = [
		<BueDesc />,
		<BueCompatible />,
		<BueReviews />,
		<BestReviews />,
		<BueDelivery />,
	]
	const [num, setNum] = useState<number>(0)
	return (
		<main className='bue'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h2 className='bue__title'>
				Cтартовий набiр OVNS W01 POD KIT (original)
			</h2>
			<section className='bue-box'>
				<BueBoxImage />
				<BueBoxContent setPopupSwitch={setPopupSwitch} />
			</section>
			<BuePagination setNumber={setNum} />
			{popupSwitch ? <PopupBue setPopupSwitch={setPopupSwitch} /> : ''}
			{pagination[num]}
		</main>
	)
}

export default PageBue

import React, { useState } from 'react'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import BueCompatible from '../../components/BueCompatible'
import BueDelivery from '../../components/BueDelivery'
import BueDesc from '../../components/BueDesc'
import BueReviews from '../../components/BueReviews'
import BestReviews from '../../components/BueReviews/bestReviews'
import BuePagination from '../../components/UI/Pagination/BuePagination'

import './PageProduct.scss'
import OpenProduct from '../../components/OpenProduct'
const PageProduct = () => {
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
			<OpenProduct />
			<BuePagination setNumber={setNum} />

			{pagination[num]}
		</main>
	)
}

export default PageProduct

import Breadcrumbs from '../../components/UI/Breadcrumbs'
import FilterCatalog from '../../components/Filter/filterCatalog'
import './catalog.Module.scss'
import cartItemsDB from '../../services/cartItemsDB.json'
import ListHeader from '../../components/Header/ListHeader'
import CatalogCarts from '../../components/Products/CatalogCarts'
import { useState } from 'react'
const PageCatalog = () => {
	const [opinionFilter, setOpinionFilter] = useState('1')
	const [sumCarts, setSumCarts] = useState<string>('25')
	const [rowActivity, setRowActivity] = useState<boolean>(true)
	const breadcrumbs = ['Головна', 'Електронні сигарети']
	const [inputRange, setInputRange] = useState<string>('0')
	return (
		<main className='catalog'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h2 className='catalog__title'>Популярні товари</h2>
			<div className='catalog__content'>
				<div className='catalog__filter'>
					<FilterCatalog
						inputRange={inputRange}
						setInputRange={setInputRange}
					/>
				</div>
				<div className='catalog__list'>
					<ListHeader
						getOpinion={setOpinionFilter}
						setSumCarts={setSumCarts}
						rowCheck={rowActivity}
						setRowColumn={setRowActivity}
					/>
					<CatalogCarts
						inputRange={inputRange}
						filterItems={opinionFilter}
						sumCarts={sumCarts}
						rowActivity={rowActivity}
						items={cartItemsDB}
					/>
				</div>
			</div>
			<section className='catalog-desc'>
				<h3 className='catalog-desc__title'>Заголовок опису категорії</h3>
				<p className='catalog-desc__text'>
					Электронные сигареты изобретенные вначале 2003 года помогли уже
					миллионам людей отказаться от аналогового курения. Сейчас вейпинг не
					просто отказ от курения, а целая культура, имеющая в своем арсенале
					десятки миллионов поклонников во всем мире. {'\n'}
					{'\n'} Людей с электронками можно встретить везде как рядом с метро
					так и в дорогом загородном клубе. {'\n'}
					{'\n'} Главное преимущество электронного парения - менее вредный пар,
					как для людей, которые используют вейп так и для окружающих. {'\n'}
					{'\n'} Также, он привлекает своим изобилием вкусов и удобством перед
					кальяном. Если Вы курите сигареты, и хотите избавиться от этой
					привычки, обязательно советуем Вам посетить наш вейп шоп в Киеве. Ведь
					процесс парения не только более здоровый, но и очень приятный. {'\n'}
					{'\n'}Заботясь о здоровье своих граждан, большая часть Евросоюза
					выступили в поддержку перехода с аналоговых сигарет на электронные.
					Также, эта привычка экономит Ваш бюджет. {'\n'}
					{'\n'}Один раз скупиться в вейп-шопе выходит намного выгоднее чем
					ежедневные покупки в ларьках с сигаретами. В нашем вейп шопе вы
					сможете ознакомится с любой интересной для Вас продукцией, потрогать
					ее. Наши консультанты максимально эффективно подберут устройство под
					Ваш запрос, и Вы точно останетесь довольными.
					{'\n'}
					{'\n'}Клиентская база нашего вейпшопа в Киеве насчитывает уже тысячи
					клиентов, к нам приезжают со всей области. Вейп шоп ЮВЕЙП славится
					своим гостеприимством и постоянными подарками для своих посетителей.
					{'\n'}
					{'\n'} Если не знаете, что подарить своему другу, у нас сможете
					подобрать максимально эффективный и вкусный подарок. Например под
					систему.
					{'\n'}
					{'\n'}
					Магазин электронных сигарет UVAPE – сотрудничает с самыми передовыми
					производителями как : JUUL Pax Lab, Logic, Eleaf, Smok, Smoant,
					GeekVape, Zenith, Bad Drip, HMBL, Voopoo, Lost Vape, Aspire и много
					других. Если не желаете выходить с дома, то у нас работает очень
					удобный интернет-магазин вейпов.
				</p>
			</section>
		</main>
	)
}

export default PageCatalog

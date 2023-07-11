import React, { useState } from 'react'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import './faq.Module.scss'
import { faqText } from './faqText'
const PageFaq = () => {
	const breadcrumbs = [
		'Головна',
		'Електронні сигарети',
		'Стартові набори',
		'Стартовий набор OVNS W01 POD KIT (ORIGINAL)',
	]
	const [openAccordion, setOpenAccordion] = useState<boolean[]>([
		true,
		true,
		true,
		true,
	])
	const accordionOpen = (i: number) => {
		setOpenAccordion(openAccordion.map((e, index) => (i === index ? !e : e)))
	}
	return (
		<main className='faq'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h2 className='faq__title'>FAQ</h2>
			<ul className='faq__items'>
				{faqText.map((e, i) => (
					<li key={i} className='faq-item'>
						<div className='faq-item__head' onClick={() => accordionOpen(i)}>
							<h2 className='faq-item__title'>{e.name}</h2>
							<img
								src='/img/arrow.svg'
								alt='arrow'
								className={`faq-item__svg ${
									openAccordion[i] ? 'svg-open' : ''
								}`}
							/>
						</div>
						<p
							className={`faq-item__text ${
								openAccordion[i] ? 'text-open' : ''
							}`}
						>
							<span>{e.text}</span>{' '}
						</p>
					</li>
				))}
			</ul>
		</main>
	)
}

export default PageFaq

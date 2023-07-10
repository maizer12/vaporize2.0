import './MainPopup.scss'
import { MouseEvent, ReactNode } from 'react'

type IProps = {
	children: ReactNode
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function MainPopup({ children, open, setOpen }: IProps) {
	const close = (e: MouseEvent<HTMLElement>) => {
		const elem = e.target as HTMLElement
		if (elem.classList.contains('popup')) {
			setOpen(false)
		}
	}
	return (
		<section onClick={close} className={`popup ${open ? 'popup-active' : ''}`}>
			<div className='popup__inner'>{children}</div>
		</section>
	)
}

export default MainPopup

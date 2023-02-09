import { useState } from 'react';
import { INFO } from '../../constants/info.js';
import Description from '../description/Description.jsx';
import Title from '../title/Title.jsx';
import style from './slider.module.scss';

const Slider = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className={style.slider}>
				<div>
					<button
						className={style.slider__button}
						onClick={() => printPrevious(count, setCount)}
					>
						previous
					</button>
					<button
						className={style.slider__button}
						onClick={() => printNext(count, setCount)}
					>
						next
					</button>
				</div>
				<Title text={INFO[count].title} />
				<Description description={INFO[count].description} />
			</div>
		</>
	);
};

const printNext = (count, setCount) => {
	if (count >= INFO.length - 1) {
		setCount(0);
	} else {
		setCount(count + 1);
	}
};

const printPrevious = (count, setCount) => {
	if (count === 0) {
		setCount(INFO.length - 1);
	} else {
		setCount(count - 1);
	}
};
export default Slider;

import styles from './checkbox.module.css';

import classNames from 'classnames';

const Checkbox = (props) => {

	const { isChecked } = props;

	const checkBoxClassName = classNames(styles['notChacked'], {
		[styles['checked']] : isChecked === true
	})

	return (
		<div className={checkBoxClassName}></div>
	)

}

export default Checkbox;
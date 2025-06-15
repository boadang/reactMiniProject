import clsx from 'clsx';
import styles from './Button.module.scss';
function Button(props) {
    console.log(props)

    const {primary, outline, large, ...otherFeature} = props;

    return (
        <div className='Button'>
            <button
                className = {styles.btn}
            >Click</button>

            <button
                className = {clsx(styles.btn, {
                    [styles.primary]: primary,
                    [styles.outline]: outline,
                    [styles.large]: large
                })}
            >Click</button>
        </div>
    )
}

export default Button;
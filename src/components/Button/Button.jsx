import styles from './ContactButton.module.css'

const Button = ({isOutline,icon,text,...rest}) => {
  const viaCalll=()=>{
    console.log('pok')
  }
  return (
    <button className={isOutline? styles.outline_btn : styles.primary_btn } {...rest}>
      {icon}
      {text}
    </button>
  )
}

export default Button;

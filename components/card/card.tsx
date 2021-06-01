import styles from "./card.module.scss"

const Card: React.FC = ({children}) => {
    return(
        <div className={styles.cardBox}>
            {children}
        </div>

    )
}

export default Card;
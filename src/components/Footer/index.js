import styles from "./footer.module.css"

const Footer = () => {
  return (
    <>
    <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
            <p>© {new Date().getFullYear()} Jabal Nur. All Rights Reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer 

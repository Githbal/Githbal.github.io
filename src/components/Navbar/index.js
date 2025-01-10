import Link from "next/link"
import styles from './navbar.module.css';
import HamburgerMenu from "../hamburgerMenu";

const index = () => {
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.wrapper} flex justify-between p-5 `}> 
            <div className="md:text-xl">
                <button className={`${styles.btn}`}><Link className={`${styles.logo}`} href="/" >PORTFOLIO</Link></button>
            </div>
            <div className={`${styles.link}  space-x-5 hidden md:inline`}>
                  <button className={`${styles.btn1}`}><Link className={`${styles.linknya}`} href="/about" >About</Link></button>
                  <button className={`${styles.btn2}`}><Link className={`${styles.linknya}`} href="/skill">Skill</Link></button>
                  <button className={`${styles.btn3}`}><Link className={`${styles.linknya}`} href="/portfolio">Projek</Link></button>
                  <button className={`${styles.btn4}`}><Link className={`${styles.linknya}`} href="/kontak">Contact</Link></button>
            </div>        
        </div>
        <HamburgerMenu />
    </div>
  )
}

export default index

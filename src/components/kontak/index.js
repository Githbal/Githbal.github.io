import styles from './kontak.module.css';
import { FaWhatsapp, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import Link from 'next/link';

const index = () => {
  return (
    
    <div className={`${styles.pabungkus} mt-7 md:mt-0 `}>
        <div className={`${styles.about}  flex justify-center text-center w-5/6 text-base md:text-2xl md:w-3/12 `}> 
            
              <div className="flex justify-between  ">
                <Link  href="https://wa.me/6282346653438"><FaWhatsapp className=" mr-2 size-5 md:size-9"  /></Link>
                <Link href="https://github.com/githbal"><FaGithub className=" mr-2 md:size-9 md:"  style={{ fontSize: "20px",}} /></Link>
                <Link href="https://instagram.com/codemi.id"><FaInstagram className=" mr-2 md:size-9 md: " style={{ fontSize: "20px",}}/> </Link>
                <Link href="https://t.me/codemi.id"><FaTelegram className={`${styles.teleg} md:size-9 `} style={{ fontSize: "20px",}}/> </Link>
              </div>
            
        </div>
    </div>


    
  )
}

export default index

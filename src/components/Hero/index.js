import { FaWhatsapp, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import Link from 'next/link';
import styles from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
      <div className={`${styles.container}`}>
        <div className={`${styles.container1}`}>
          <div className={`${styles.wrapper} `}> 
            <div className=" w-28 h-28 md:w-40 md:h-40 mr-2 rounded-full overflow-hidden  ">
                <Image  width={1000} height={1000} src="/images/img1.webp" alt="Foto Profil" className=" image w-full h-full object-cover" />
            </div>
            < div className="w-48 md:w-auto">
              <h1  className={`${styles.nama} text-xl md:text-4xl md:mb-5 `} >Jabal Nur</h1>
              <div className="flex justify-between  ">
                <Link  href="https://wa.me/6282346653438"><FaWhatsapp className=" size-5 md:size-9"  /></Link>
                <Link href="https://github.com/githbal"><FaGithub className=" mr-32 md:size-9 md:-ml-32"  style={{ fontSize: "20px",}} /></Link>
                <Link href="https://instagram.com/codemi.id"><FaInstagram className=" -ml-32 md:size-9 md:-ml-64 " style={{ fontSize: "20px",}}/> </Link>
                <Link href="https://t.me/codemi.id"><FaTelegram className={`${styles.teleg} md:size-9 `} style={{ fontSize: "20px",}}/> </Link>
              </div>
              <p className={`${styles.teks } md:text-2xl md:mt-5`}>Terima kasih telah mengunjungi halaman ini🙏 😊  </p>
            </div>
          </div>
          <div className={`${styles.wrap} mt-3 flex justify-center`}>
            <div className={`${styles.teks1}`}>
            
              <h1 >Halo!, saya Jabal nur </h1>
              <p>Saya seorang developer web yang suka ngoding, ngopi, dan nge-eksplor teknologi baru. Saya terbiasa membuat frontend yang keren pakai React dan backend yang solid dengan Node.js. Bagi saya, tantangan adalah hal seru, dan saya senang mengubah ide menjadi aplikasi nyata yang bermanfaat.</p>
            </div>
          </div>
          <div className={`${styles.btnb} mt-4 `}>
            <button className={`${styles.btn} p-3  md:p-5 `}> <Link href='/about'>selengkapnya</Link></button>
          </div>
        </div>

    </div>
  )
}

export default Hero

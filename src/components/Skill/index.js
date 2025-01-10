import styles from './about.module.css';

const index = () => {
  return (
    <>
    <div className={`${styles.pabungkus2}`}>
      <h1 className={`${styles.judul}`}>
        Sebagai seorang Full Stack Web Developer, saya memiliki keahlian dalam membangun aplikasi web modern dari sisi frontend hingga backend. Berikut adalah keahlian yang saya kuasai:
      </h1>
    </div>
    
  <div className=' block md:flex md:justify-between'>
    
    <div className={`${styles.pabungkus} -mt-28 md:mt-0  `}>
        <div className={`${styles.about}  w-5/6 text-base md:text-2xl md:w-5/6 `}> 
            <h1 className={`flex justify-center text-center font-bold`} >
              Di sisi Frontend
            </h1>
            <h1>
              <li>
                HTML, CSS, dan JavaScript:
                Dasar-dasar untuk menciptakan antarmuka pengguna yang responsif dan menarik.
              </li>
              <li>
                  Framework JavaScript Modern:
              </li>
                  <ul className='text-sm flex text-center'>
                  React.js: Membuat komponen UI yang dinamis dan interaktif.
                  </ul>
                  <ul className='text-sm flex text-center'>
                  Next.js: Mengembangkan aplikasi web performa tinggi dengan server-side rendering dan static site generation.
                  </ul>
              <li>
                Desain Responsif: Pengalaman dalam menggunakan CSS Framework seperti Tailwind CSS dan Bootstrap untuk memastikan tampilan optimal di berbagai perangkat.
              </li>
            </h1>
        </div>
    </div>
    <div className={`${styles.pabungkus} -mt-72  md:mt-0 md:ml-28 md:w `}>
        <div className={`${styles.about}  w-5/6 text-base md:text-2xl md:w-11/12  `}> 
        <h1 className={`flex justify-center text-center font-bold`} >
              Di sisi Backend
            </h1>
            <h1>
              <li>
                Node.js: Mengembangkan API yang cepat dan scalable.
              </li>
              <li>
                Express.js: Membangun RESTful API dengan struktur yang efisien.
              </li>
              <li >
                  Database:
              </li>
              <ul className='text-sm flex text-left'>
                  MySql: Pengelolaan data relasional untuk kebutuhan yang kompleks.
              </ul>
            </h1>
        </div>
    </div>
    <div className={`${styles.pabungkus} -mt-80 md:mt-2  `}>
        <div className={`${styles.about}  w-5/6 text-base md:text-2xl md:w-5/12 `}> 
        <h1 className={`flex justify-center text-center font-bold`} >
              Desain Photoshop
        </h1>
            <h1>
              <p>Sebagai seorang Full Stack, Skill desain juga harus di miliki. untuk membuat website yang menarik, tidak sepenuhnya mengunakan code tapi juga membutuhkan skill desain. </p>
              <li>
                Membuat logo 
              </li>
              <li>
                Membuat Poster
              </li>
              <li >
                Desain grafis
              </li>
            </h1>
        </div>
    </div>
  </div>
    </>


    
  )
}

export default index

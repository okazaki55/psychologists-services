import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import heroImg from "../../assets/hero-image.png";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Sol Taraf: Yazılar ve Buton */}
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          The road to the <span className={styles.titleSpan}>depths</span> of
          the human soul
        </h1>
        <p className={styles.description}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>

        {/* Buton ve içindeki ok ikonu */}
        <Link to="/psychologists" className={styles.getStartedBtn}>
          Get started
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bu path tam olarak sağ yukarı çapraz oku ($\nearrow$) çizer */}
            <path
              d="M3 12L12 3M12 3H6M12 3V9"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Sağ Taraf: Görsel ve Yüzen Kutu (Badges) */}
      <div className={styles.imageWrapper}>
        {/* Ana Resim */}
        <img
          src={heroImg}
          alt="Psychologist session"
          className={styles.heroImage}
        />

        {/* Yeşil Soru İşareti Kutusu */}
        <div className={styles.greenBadge}>
          <svg
            width="12"
            height="17"
            viewBox="0 0 12 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.68525 12.3929C4.68525 11.8906 4.90846 11.4194 5.38531 10.9859C5.83786 10.5898 6.55476 10.1585 7.42621 9.42054C8.44149 8.56304 9 7.61862 9 6.45268C9 4.39866 7.40871 2.92321 5.0683 2.92321C2.97364 2.92321 1.58304 4.14866 1.45179 5.86295H3.6192C3.71429 4.98125 4.36406 4.36518 5.12734 4.36518C6.01205 4.36518 6.77321 4.9125 6.77321 5.99286C6.77321 6.70268 6.36306 7.33125 5.56908 8.0125C4.58471 8.86607 3.84321 9.77143 3.84321 10.9321V11.5429H5.97545V12.3929H4.68525ZM4.94777 16.5C4.2423 16.5 3.66484 15.9187 3.66484 15.2045C3.66484 14.4902 4.2423 13.9089 4.94777 13.9089C5.65324 13.9089 6.23069 14.4902 6.23069 15.2045C6.23069 15.9187 5.65324 16.5 4.94777 16.5Z"
              fill="#FBFBFB"
            />
          </svg>
        </div>

        {/* Sarı Kullanıcılar Kutusu */}
        <div className={styles.yellowBadge}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C14.4214 16.9217 1 17.9391 1 19V21M16 3.13C16.96 3.44781 17.7853 4.09062 18.3582 4.96695C18.9312 5.84328 19.2227 6.90858 19.2227 8C19.2227 9.09142 18.9312 10.1567 18.3582 11.0331C17.7853 11.9094 16.96 12.5522 16 12.87M23 21V19C22.9966 17.9152 22.548 16.8778 21.7588 16.1364C20.9696 15.3951 19.9079 15.0094 18.82 15H18M12 7C12 9.20914 10.2091 11 8 11C5.79086 11 4 9.20914 4 7C4 4.79086 5.79086 3 8 3C10.2091 3 12 4.79086 12 7Z"
              stroke="#FBFBFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Mavi İstatistik Kutusu */}
        <div className={styles.blueBadge}>
          <div className={styles.checkIconWrapper}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6666 5.83333L7.49992 15L3.33325 10.8333"
                stroke="#3470FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.badgeText}>
            <span className={styles.badgeLabel}>Experienced psychologists</span>
            <span className={styles.badgeNumber}>15,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

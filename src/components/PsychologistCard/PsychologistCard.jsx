import styles from "./PsychologistCard.module.css";

// 'data' propsu ile gelen tek bir psikoloğun bilgilerini alıyoruz
const PsychologistCard = ({ data }) => {
  return (
    <div className={styles.card}>
      {/* Sol Taraf: Avatar */}
      <div className={styles.avatarWrapper}>
        <img src={data.avatar_url} alt={data.name} className={styles.avatar} />
      </div>

      {/* Sağ Taraf: Bilgiler */}
      <div className={styles.info}>
        <div className={styles.header}>
          <div>
            <div className={styles.title}>Psychologist</div>
            <div className={styles.name}>{data.name}</div>
          </div>

          <div className={styles.stats}>
            <span>⭐ Rating: {data.rating}</span>
            <span>|</span>
            <span>
              Price / 1 hour:{" "}
              <span className={styles.price}>{data.price_per_hour}$</span>
            </span>
            {/* Şimdilik sadece boş kalp emojisi koyduk, favori mantığını sonra bağlayacağız */}
            <button className={styles.heartBtn}>🤍</button>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.tag}>
            Experience: <span>{data.experience}</span>
          </div>
          <div className={styles.tag}>
            License: <span>{data.license}</span>
          </div>
          <div className={styles.tag}>
            Specialization: <span>{data.specialization}</span>
          </div>
          <div className={styles.tag}>
            Initial consultation: <span>{data.initial_consultation}</span>
          </div>
        </div>

        <p className={styles.about}>{data.about}</p>

        {/* Read More ve Randevu butonu mantıklarını daha sonra bağlayacağız */}
        <button className={styles.readMoreBtn}>Read more</button>
        <br />
        <button className={styles.appointmentBtn}>Make an appointment</button>
      </div>
    </div>
  );
};

export default PsychologistCard;

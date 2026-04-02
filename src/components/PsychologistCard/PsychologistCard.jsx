import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./PsychologistCard.module.css";

const PsychologistCard = ({ data }) => {
  const { currentUser } = useAuth();
  const [isFavorite, setIsFavorite] = useState(() => {
    if (!currentUser) return false;
    const userFavsKey = `favorites_${currentUser.uid}`;
    const savedFavs = JSON.parse(localStorage.getItem(userFavsKey)) || [];
    return savedFavs.some((fav) => fav.name === data.name);
  });

  const handleFavoriteClick = () => {
    if (!currentUser) {
      alert("Favorilere eklemek için lütfen giriş yapın veya kayıt olun.");
      return;
    }

    const userFavsKey = `favorites_${currentUser.uid}`;
    let savedFavs = JSON.parse(localStorage.getItem(userFavsKey)) || [];

    if (isFavorite) {
      savedFavs = savedFavs.filter((fav) => fav.name !== data.name);
      setIsFavorite(false);
    } else {
      savedFavs.push(data);
      setIsFavorite(true);
    }

    localStorage.setItem(userFavsKey, JSON.stringify(savedFavs));
  };

  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <img src={data.avatar_url} alt={data.name} className={styles.avatar} />
      </div>

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

            <button className={styles.heartBtn} onClick={handleFavoriteClick}>
              {isFavorite ? "💙" : "🤍"}
            </button>
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

        <button className={styles.readMoreBtn}>Read more</button>
        <br />
        <button className={styles.appointmentBtn}>Make an appointment</button>
      </div>
    </div>
  );
};

export default PsychologistCard;

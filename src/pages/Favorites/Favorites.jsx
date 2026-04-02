import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import PsychologistCard from "../../components/PsychologistCard/PsychologistCard.jsx";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { currentUser } = useAuth();
  const [favorites] = useState(() => {
    if (!currentUser) return [];
    const userFavsKey = `favorites_${currentUser.uid}`;
    return JSON.parse(localStorage.getItem(userFavsKey)) || [];
  });

  if (!currentUser) {
    return (
      <div className={`${styles.messageWrapper} ${styles.notLoggedInText}`}>
        <h2>Bu sayfayı görüntülemek için lütfen giriş yapın.</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {favorites.length > 0 ? (
        favorites.map((psy, index) => (
          <PsychologistCard key={`${index}-${currentUser.uid}`} data={psy} />
        ))
      ) : (
        <div className={`${styles.messageWrapper} ${styles.emptyText}`}>
          <h2>Henüz favorilerinize hiçbir psikoloğu eklemediniz. 🤍</h2>
        </div>
      )}
    </div>
  );
};

export default Favorites;

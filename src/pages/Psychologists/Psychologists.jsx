import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../services/firebase.js";
import PsychologistCard from "../../components/PsychologistCard/PsychologistCard.jsx";

const Psychologists = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchPsychologists = async () => {
      try {
        const dbRef = ref(db, "/");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const data = snapshot.val();

          const dataArray = Object.values(data);

          setPsychologists(dataArray.flat());
        } else {
          console.log("Veritabanında veri bulunamadı.");
        }
      } catch (error) {
        console.error("Veri çekerken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPsychologists();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  if (loading) {
    return <h2>Veriler yükleniyor...</h2>;
  }

  return (
    <div style={{ maxWidth: "1184px", margin: "0 auto", padding: "32px 0" }}>
      {psychologists.slice(0, visibleCount).map((psy, index) => (
        <PsychologistCard key={index} data={psy} />
      ))}

      {visibleCount < psychologists.length && (
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button
            onClick={handleLoadMore}
            style={{
              padding: "14px 48px",
              backgroundColor: "#3470ff",
              color: "white",
              border: "none",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Psychologists;

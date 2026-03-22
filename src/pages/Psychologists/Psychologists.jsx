import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../services/firebase.js";

const Psychologists = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <h2>Veriler yükleniyor...</h2>;
  }

  return (
    <div>
      <h2>Psikologlar</h2>
      <ul>
        {psychologists.map((psy, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{psy.name}</strong> - Saatlik Ücret: ${psy.price_per_hour}{" "}
            <br />
            Uzmanlık: {psy.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Psychologists;

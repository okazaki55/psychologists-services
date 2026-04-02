import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../services/firebase.js";
import { useAuth } from "../../context/AuthContext.jsx";
import PsychologistCard from "../../components/PsychologistCard/PsychologistCard.jsx";
import styles from "./Psychologists.module.css";

// Filtre seçeneklerimizi bir diziye alıyoruz
const filterOptions = [
  { value: "name_asc", label: "A to Z" },
  { value: "name_desc", label: "Z to A" },
  { value: "price_asc", label: "Less than 10$ (Low to High)" },
  { value: "price_desc", label: "Greater than 10$ (High to Low)" },
  { value: "rating_desc", label: "Popular" },
  { value: "rating_asc", label: "Not Popular (Low Rating)" },
  { value: "all", label: "Show all" },
];

const Psychologists = () => {
  const { currentUser } = useAuth();
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  // Custom Dropdown stateleri
  const [filterType, setFilterType] = useState("name_asc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchPsychologists = async () => {
      try {
        const dbRef = ref(db, "/");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.values(data);
          setPsychologists(dataArray.flat());
        }
      } catch (error) {
        console.error("Veri çekerken hata:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPsychologists();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Seçenek tıklama fonksiyonu
  const handleOptionClick = (value) => {
    setFilterType(value);
    setIsDropdownOpen(false); // Menüyü kapat
    setVisibleCount(3); // Listeyi başa sar
  };

  // Aktif filtrenin metnini bulma (Butonda göstermek için)
  const activeFilterLabel = filterOptions.find(
    (opt) => opt.value === filterType,
  )?.label;

  // Sıralama Mantığı
  let sortedPsychologists = [...psychologists];
  if (filterType !== "all") {
    sortedPsychologists.sort((a, b) => {
      switch (filterType) {
        case "name_asc":
          return a.name.localeCompare(b.name);
        case "name_desc":
          return b.name.localeCompare(a.name);
        case "price_asc":
          return a.price_per_hour - b.price_per_hour;
        case "price_desc":
          return b.price_per_hour - a.price_per_hour;
        case "rating_asc":
          return a.rating - b.rating;
        case "rating_desc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }

  if (loading) return <h2>Veriler yükleniyor...</h2>;

  return (
    <div className={styles.container}>
      {/* Özel Figma Tarzı Filtreleme Alanı */}
      <div className={styles.filterWrapper}>
        <label className={styles.filterLabel}>Filters</label>

        {/* Seçili olanı gösteren ve tıklanınca menüyü açan kutu */}
        <div
          className={styles.customSelect}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {activeFilterLabel}
          <span
            style={{
              transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)",
            }}
          >
            ▼
          </span>
        </div>

        {/* Açılır Liste */}
        {isDropdownOpen && (
          <div className={styles.dropdownList}>
            {filterOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`${styles.dropdownItem} ${filterType === option.value ? styles.dropdownItemActive : ""}`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {sortedPsychologists.slice(0, visibleCount).map((psy, index) => (
        <PsychologistCard
          key={`${index}-${currentUser ? currentUser.uid : "guest"}`}
          data={psy}
        />
      ))}

      {visibleCount < sortedPsychologists.length && (
        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Psychologists;

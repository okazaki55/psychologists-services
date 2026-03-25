import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  // Esc tuşuna basılınca modalı kapatma mantığı
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Modal açıldığında arkadaki sayfanın kaymasını (scroll) engelleyelim
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Eğer modal kapalıysa hiçbir şey render etme
  if (!isOpen) return null;

  // Backdrop (arka plan) tıklanma mantığı
  const handleBackdropClick = (e) => {
    // Sadece backdrop div'ine tıklandıysa kapat (içindeki forma tıklanınca kapanmasın)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        {/* Hangi formu verirsek (Log In veya Register) burada görünecek */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

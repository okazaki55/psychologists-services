import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";

// Context'i oluşturuyoruz
const AuthContext = createContext();

// Diğer dosyalardan kolayca çağırmak için custom hook yazıyoruz
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase'in oturum durumunu dinleyen fonksiyonu
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Kullanıcı durumu belli olunca yükleme ekranını kaldır
    });

    // Bileşen ekrandan kalkarsa dinlemeyi durdur
    return unsubscribe;
  }, []);

  // Çıkış yapma fonksiyonu
  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Oturum durumu netleşene kadar uygulamanın titremesini önlüyoruz */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

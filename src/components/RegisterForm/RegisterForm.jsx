import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebase.js";
import styles from "./RegisterForm.module.css";

// 1. Yup ile doğrulama kurallarını (şemasını) oluşturuyoruz
const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

// onClose propsu, işlem bitince modalı kapatmamızı sağlayacak
const RegisterForm = ({ onClose }) => {
  // 2. react-hook-form ayarları
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // 3. Form gönderildiğinde çalışacak Firebase Auth fonksiyonu
  const onSubmit = async (data) => {
    try {
      // Firebase'de email ve şifre ile kullanıcı oluşturma
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      // Oluşan kullanıcının profiline 'name' bilgisini ekleme
      await updateProfile(userCredential.user, { displayName: data.name });

      console.log(
        "Kayıt başarılı! Hoş geldin:",
        userCredential.user.displayName,
      );
      reset(); // Formu temizle
      onClose(); // Modalı kapat
    } catch (error) {
      console.error("Kayıt sırasında hata oluştu:", error.code, error.message);
      alert("Kayıt başarısız: " + error.message); // Geçici hata gösterimi
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className={styles.input}
        />
        {errors.name && (
          <span className={styles.errorText}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={styles.input}
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className={styles.input}
        />
        {errors.password && (
          <span className={styles.errorText}>{errors.password.message}</span>
        )}
      </div>

      <button type="submit" className={styles.submitBtn}>
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;

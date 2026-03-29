import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import styles from "./LoginForm.module.css";

// Giriş için sadece email ve şifre yeterli, isim alanını çıkardık
const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const LoginForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Firebase ile giriş yapma işlemi
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      console.log("Giriş başarılı! Hoş geldin:", userCredential.user.email);
      reset(); // Formu temizle
      onClose(); // Modalı kapat
    } catch (error) {
      console.error("Giriş sırasında hata:", error);
      alert("Giriş başarısız: Bilgilerinizi kontrol edin.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
        Log In
      </button>
    </form>
  );
};

export default LoginForm;

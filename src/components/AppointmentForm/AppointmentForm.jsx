import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./AppointmentForm.module.css";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    phone: yup.string().required("Phone number is required"),
    time: yup.string().required("Time is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    comment: yup.string().required("Comment is required"),
  })
  .required();

const AppointmentForm = ({ psychologist, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Randevu Talebi Gönderildi:", data);
    console.log("Seçilen Psikolog:", psychologist.name);
    alert(
      `Randevu talebiniz başarıyla alındı! \nPsikolog: ${psychologist.name}`,
    );
    reset();
    onClose();
  };

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Make an appointment</h2>
        <p className={styles.desc}>
          You are on the right track of finding your psychologist. By revealing
          your inner world, you are taking the first step towards a better self.
        </p>
      </div>

      <div className={styles.psychologistInfo}>
        <img
          src={psychologist.avatar_url}
          alt="avatar"
          className={styles.avatar}
        />
        <div>
          <div className={styles.psyLabel}>Your psychologist</div>
          <div className={styles.psyName}>{psychologist.name}</div>
        </div>
      </div>

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

        <div style={{ display: "flex", gap: "16px" }}>
          <div className={styles.inputWrapper} style={{ flex: 1 }}>
            <input
              type="tel"
              placeholder="+380"
              {...register("phone")}
              className={styles.input}
            />
            {errors.phone && (
              <span className={styles.errorText}>{errors.phone.message}</span>
            )}
          </div>
          <div className={styles.inputWrapper} style={{ flex: 1 }}>
            <input type="time" {...register("time")} className={styles.input} />
            {errors.time && (
              <span className={styles.errorText}>{errors.time.message}</span>
            )}
          </div>
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
          <textarea
            placeholder="Comment"
            {...register("comment")}
            className={`${styles.input} ${styles.textarea}`}
          />
          {errors.comment && (
            <span className={styles.errorText}>{errors.comment.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;

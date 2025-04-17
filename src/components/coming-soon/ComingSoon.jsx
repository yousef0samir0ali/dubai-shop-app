export default function ComingSoon({ message }) {
  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.title}>قيد الإنشاء من قبل فريق التطوير</h2>
        <p style={styles.message}>
          قسم <b style={boldStyle}>{message}</b> غير جاهز بعد.
          <br />
          الرجاء العودة لاحقاً
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "calc(100vh - 250px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    color: "var(--primary-color)",
  },
  message: {
    color: "var(--info-color)",
  },
};
const boldStyle = {
  color: "var(--light-red-color)",
};

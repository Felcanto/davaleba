export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        color: "#333",
        fontSize: "14px",
      }}
    >
      <p>© All Rights Reserved | {new Date().getFullYear()}</p>
    </footer>
  );
}

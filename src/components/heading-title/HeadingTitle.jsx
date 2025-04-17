export default function HeadingTitle({ title }) {
  return (
    <div style={wrapperStyles}>
      <h2 style={titleStyle}>{title}</h2>
    </div>
  );
}
const wrapperStyles = {
  marginRight: "20px",
  marginTop: "40px",
};
const titleStyle = {
  color: "var(--primary-color)",
};

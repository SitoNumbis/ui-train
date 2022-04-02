// emotion
import { css } from "@emotion/css";

const containerCss = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 15px 15px 15px",
  margin: "auto auto -10px auto",
  width: "85%",
});

const buttonCss = css({
  border: "none",
  color: "#9d9999",
  padding: 10,
  fontSize: 18,
  background: "none",
  cursor: "pointer",
  height: 37,
});

const activeButton = css({
  background: "#dddbdb !important",
});

export { containerCss, buttonCss, activeButton };

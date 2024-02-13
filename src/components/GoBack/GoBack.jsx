import { Link } from "react-router-dom";

export const GoBack = ({ to, children }) => {
  return (
    <Link to={to}>
      <button type="button">{children || "Go Back"}</button>
      {children}
    </Link>
  );
};

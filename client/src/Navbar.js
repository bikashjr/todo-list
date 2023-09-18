import { Form } from "react-bootstrap";
import { useThemeContext } from "./contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div>
      My current Theme is {theme}
      <br />
      <Form.Check type="switch" onClick={toggleTheme} label="Toggle Theme" />
    </div>
  );
}

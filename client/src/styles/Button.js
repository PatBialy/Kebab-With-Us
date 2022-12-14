import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "red",
    "--accent": "white",
  },
  secondary: {
    "--main": "red",
    "--accent": "white",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: var(--main);
    color: var(--accent);
    border: 2px solid var(--accent);
  }
`;

export default Button;
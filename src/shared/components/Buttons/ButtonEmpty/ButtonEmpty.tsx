import { ButtonEmptyStyled } from "./styles";
import { ButtonEmptyProps } from "./interface";

export default function ButtonEmpty({
  name,
  additionalClass,
  disabled = false,
  clickAction,
}: ButtonEmptyProps) {
  return (
    <ButtonEmptyStyled
      disabled={disabled}
      onClick={clickAction}
      className={additionalClass ? additionalClass : ""}
    >
      {name}
    </ButtonEmptyStyled>
  );
}

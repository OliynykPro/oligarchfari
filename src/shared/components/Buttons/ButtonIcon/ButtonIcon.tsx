import renderIcon from "src/shared/common/helpers/renderIcon";
import { ButtonIconStyled } from "./styles";
import { ButtonIconProps } from "./interface";

export default function ButtonIcon({ icon, clickAction }: ButtonIconProps) {
  const Icon = icon ? renderIcon(icon) : <></>;

  return (
    <ButtonIconStyled
      onClick={clickAction && clickAction}
      className="button-icon"
    >
      {Icon}
    </ButtonIconStyled>
  );
}

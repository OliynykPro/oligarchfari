import renderIcon from "src/shared/common/helpers/renderIcon";
import { ButtonFulfilledStyled } from "./styles";
import { ButtonFulfilledProps } from "./interface";

export default function ButtonFulfilled({
  name,
  iconLeft,
  iconRight,
  additionalClass,
  disabled = false,
  clickAction,
}: ButtonFulfilledProps) {
  const IconLeft = iconLeft ? renderIcon(iconLeft) : <></>;
  const IconRight = iconRight ? renderIcon(iconRight) : <></>;

  return (
    <ButtonFulfilledStyled
      disabled={disabled}
      onClick={clickAction}
      className={`${additionalClass ? additionalClass : ""} ${
        iconLeft || iconRight ? "with-icon" : ""
      } ${iconLeft ? "icon-left" : ""} ${iconRight ? "icon-right" : ""}`}
    >
      {iconLeft && IconLeft}
      <span>{name}</span>
      {iconRight && IconRight}
    </ButtonFulfilledStyled>
  );
}

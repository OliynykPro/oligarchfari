import { IconsEnum } from "src/shared/common/enums/IconsEnum";
const WalletIcon = require("src/shared/assets/icons/wallet.svg") as string;

export default function renderIcon(icon: string) {
  switch (icon) {
    case IconsEnum.WALLET:
      return <WalletIcon />;
    default:
      return <></>;
  }
}

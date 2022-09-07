import { cropString } from "src/shared/common/helpers/cropString";
import { useWalletServiceContext } from "src/contexts/WalletProvider/WalletProvider";
import ButtonFulfilled from "../Buttons/ButtonFulfilled/ButtonFulfilled";
import { HeaderStyled } from "./styles";

export default function Header() {
  const { account, connectWallet } = useWalletServiceContext();
  const buttonName = account ? cropString(account, 4) : "Connect Wallet";

  return (
    <HeaderStyled>
      <div>Oligarchfari</div>
      <ButtonFulfilled name={buttonName} clickAction={connectWallet} />
    </HeaderStyled>
  );
}

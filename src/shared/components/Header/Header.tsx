import { EModals } from "src/contexts/ModalProvider/interface";
import { cropString } from "src/shared/common/helpers/cropString";
import { ModalProvider } from "src/contexts/ModalProvider/ModalProvider";
import { useWalletServiceContext } from "src/contexts/WalletProvider/WalletProvider";
import ButtonFulfilled from "../Buttons/ButtonFulfilled/ButtonFulfilled";
import { HeaderStyled } from "./styles";

export default function Header() {
  const { showModal } = ModalProvider();
  const { account, connectWallet } = useWalletServiceContext();
  const buttonName = account ? cropString(account, 4) : "Connect Wallet";

  function openAddCaseModal() {
    showModal(EModals.ADD_CASE_MODAL, {});
  }

  return (
    <HeaderStyled>
      <div>sap</div>
      <div>
        {account && (
          <ButtonFulfilled
            name={"Add New Case"}
            clickAction={openAddCaseModal}
          />
        )}
        <ButtonFulfilled
          name={buttonName}
          clickAction={connectWallet}
          additionalClass={account ? "logged-in" : ""}
        />
      </div>
    </HeaderStyled>
  );
}

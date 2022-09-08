import { useState } from "react";
import { useOligarchfariServiceContext } from "src/contexts/OligarchfariProvider/OligarchfariProvider";
import ModalWrapper from "../ModalWrapper";
import ButtonFulfilled from "../../Buttons/ButtonFulfilled/ButtonFulfilled";
// import { AddCaseModalProps } from "./interface";
import { ApproveReportModalStyled } from "./styles";
import { ApproveReportModalProps } from "./interface";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";

export default function ApproveReportModal({
  closeModal,
}: ApproveReportModalProps) {
  const { approveReport } = useOligarchfariServiceContext();

  const [rewardAmount, rewardAmountInput] = useInput({ type: "text" });

  function useInput({ type }: any) {
    const [value, setValue] = useState("");
    const input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  }

  return (
    <ModalWrapper closeModal={closeModal} isCentered>
      <ApproveReportModalStyled>
        <div className="form-title">Set Reward</div>
        <div>
          <label>Reward Amount</label>
          {rewardAmountInput}
        </div>
        <div className="buttons">
          <ButtonFulfilled name="Cancel" clickAction={closeModal} />
          <ButtonFulfilled name="Confirm the Reward" clickAction={closeModal} />
        </div>
      </ApproveReportModalStyled>
    </ModalWrapper>
  );
}

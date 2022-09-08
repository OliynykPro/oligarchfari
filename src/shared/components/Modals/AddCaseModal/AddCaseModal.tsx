import { useState } from "react";
import { useOligarchfariServiceContext } from "src/contexts/OligarchfariProvider/OligarchfariProvider";
import ModalWrapper from "../ModalWrapper";
import ButtonFulfilled from "../../Buttons/ButtonFulfilled/ButtonFulfilled";
import { AddCaseModalProps } from "./interface";
import { AddCaseModalStyled } from "./styles";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";

export default function AddCaseModal({ closeModal }: AddCaseModalProps) {
  const { addCase } = useOligarchfariServiceContext();

  const [caseName, caseNameInput] = useInput({ type: "text" });
  const [caseDescription, caseDescriptionInput] = useInput({ type: "text" });
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
      <AddCaseModalStyled>
        <div className="form-title">New Case</div>
        <div>
          <label>Case Name</label>
          {caseNameInput}
        </div>
        <div>
          <label>Description</label>
          {caseDescriptionInput}
        </div>
        <div>
          <label>Reward Amount (ETH)</label>
          {rewardAmountInput}
        </div>
        <div className="buttons">
          <ButtonFulfilled name="Cancel" clickAction={closeModal} />
          <ButtonFulfilled
            name="Save Case"
            clickAction={() => {
              addCase(
                caseName as string,
                caseDescription as string,
                parseEther(rewardAmount as string),
                BigNumber.from(Math.floor(Date.now() / 1000) + 39586684)
              );
              closeModal();
            }}
          />
        </div>
      </AddCaseModalStyled>
    </ModalWrapper>
  );
}

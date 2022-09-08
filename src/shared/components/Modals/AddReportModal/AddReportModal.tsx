import { useState } from "react";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { useOligarchfariServiceContext } from "src/contexts/OligarchfariProvider/OligarchfariProvider";
import ModalWrapper from "../ModalWrapper";
import ButtonFulfilled from "../../Buttons/ButtonFulfilled/ButtonFulfilled";
import { AddReportModalProps } from "./interface";
import { AddCaseModalStyled } from "./styles";

export default function AddReportModal({
  id,
  closeModal,
}: AddReportModalProps) {
  const { addReport } = useOligarchfariServiceContext();

  const [reportDescription, reportDescriptionInput] = useInput({
    type: "text",
  });
  const [linkForProofs, linkForProofsInput] = useInput({ type: "text" });

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
        <div className="form-title">New Report</div>
        <div>
          <label>Description</label>
          {reportDescriptionInput}
        </div>
        <div>
          <label>Link for Proofs</label>
          {linkForProofsInput}
        </div>
        <div className="buttons">
          <ButtonFulfilled name="Cancel" clickAction={closeModal} />
          <ButtonFulfilled
            name="Save Report"
            clickAction={() => {
              addReport(
                BigNumber.from(id),
                reportDescription as string,
                linkForProofs as string
              );
              closeModal();
            }}
          />
        </div>
      </AddCaseModalStyled>
    </ModalWrapper>
  );
}

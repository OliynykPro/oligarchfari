import { Case } from "src/shared/components/Case/Case";
import { useOligarchfariServiceContext } from "src/contexts/OligarchfariProvider/OligarchfariProvider";
import { CasePageStyled } from "./styles";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CasePage() {
  const { id } = useParams();
  const { casesList } = useOligarchfariServiceContext();
  const [currentCase, setCurrentCase] = useState(
    id && casesList ? casesList[+id] : []
  );

  return (
    currentCase &&
    currentCase.length && (
      <CasePageStyled>
        <Case
          name={currentCase.name}
          description={currentCase.description}
          endDate={currentCase.endDate}
          status={currentCase.status}
          totalReward={currentCase.deposit}
          reports={currentCase.reports}
          id={id ? +id : 0}
          hideReportButton={true}
          showReports={true}
        />
      </CasePageStyled>
    )
  );
}

import { Case } from "src/shared/components/Case/Case";
import { useOligarchfariServiceContext } from "src/contexts/OligarchfariProvider/OligarchfariProvider";
import { HomeStyled } from "./styles";

export default function Home() {
  const { casesList } = useOligarchfariServiceContext();

  return (
    <HomeStyled>
      {casesList &&
        casesList.map((caseItem: any, index: number) => (
          <Case
            key={index}
            name={caseItem.name}
            description={caseItem.description}
            endDate={caseItem.endDate}
            status={caseItem.status}
            totalReward={caseItem.deposit}
            reports={caseItem.reports}
            id={index}
          />
        ))}
    </HomeStyled>
  );
}

import { BigNumber } from "ethers";

export interface CaseProps {
  name: string;
  description: string;
  endDate: number;
  status: number;
  totalReward: BigNumber;
  reports: any;
  id: number;
  hideReportButton?: boolean;
  showReports?: boolean;
}

import { formatEther } from "ethers/lib/utils";
import { useNavigate } from "react-router-dom";
import { EModals } from "src/contexts/ModalProvider/interface";
import { ModalProvider } from "src/contexts/ModalProvider/ModalProvider";
import { useWalletServiceContext } from "src/contexts/WalletProvider/WalletProvider";
import ButtonFulfilled from "../Buttons/ButtonFulfilled/ButtonFulfilled";
import { CaseProps } from "./interface";
import { CaseStyled } from "./styles";

export function Case({
  name,
  description,
  endDate,
  status,
  totalReward,
  reports,
  id,
  hideReportButton,
  showReports,
}: CaseProps) {
  const navigate = useNavigate();
  const { showModal } = ModalProvider();
  const { account } = useWalletServiceContext();

  function openAddReportModal() {
    showModal(EModals.ADD_REPORT_MODAL, { id: id });
  }

  function openApproveReportModal() {
    showModal(EModals.APPROVE_REPORT_MODAL, {});
  }

  return (
    <CaseStyled>
      <div className="name" onClick={() => navigate(`/${id}`)}>
        {name}
      </div>
      <div className="description">{description}</div>
      <div className="chips">
        <span className={`status ${status === 0 ? "closed" : "open"}`}>
          {status === 0 ? "Closed" : "Open"}
        </span>
        <span>{reports.length} reports</span>
        <span className={`reward ${status === 0 ? "closed" : "open"}`}>
          {formatEther(totalReward)} ETH
        </span>
        {account && !hideReportButton && (
          <ButtonFulfilled
            name={"Add report"}
            clickAction={() => openAddReportModal()}
          />
        )}
      </div>
      {showReports && reports && (
        <div className="report-list">
          {reports.map((report: any, index: number) => {
            return (
              <div className="list-item" key={index}>
                <div className="name">{report.reporter}</div>
                <div className="descr">{report.description}</div>
                <div className="link">
                  <a href={report.urlProofs} target="_blank" rel="noreferrer">
                    {report.urlProofs}
                  </a>
                  <ButtonFulfilled
                    name="Approve"
                    clickAction={() => openApproveReportModal()}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </CaseStyled>
  );
}

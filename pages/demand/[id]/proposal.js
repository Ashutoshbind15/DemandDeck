import React from "react";
import ProposalPage from "../../../components/ProposalPage";
import { useRouter } from "next/router";

const Proposal = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ProposalPage id={id} />
    </div>
  );
};

export default Proposal;

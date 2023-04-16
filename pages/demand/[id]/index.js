import { useRouter } from "next/router";
import React from "react";
import { usePoll } from "../../../hooks/queries";
import { usePollMutations } from "../../../hooks/mutations";
import Proposal from "../../../components/Demand/Proposal";
import { DemandPageComponent } from "../../../components/Demand/DemandPage";
import { useSession } from "next-auth/react";

const DemandPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { demand, isError, isLoading, error } = usePoll(id);
  const { acceptProposal } = usePollMutations(id);

  const proposalAcceptHandler = (ownerId) => {
    acceptProposal.mutate({ id, owner: JSON.parse(JSON.stringify(ownerId)) });
  };

  const { data: session } = useSession();

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <DemandPageComponent
        description={demand.description}
        location={demand.location}
        title={demand.title}
        id={demand._id}
        numprop={demand.proposals.length}
        numresp={demand.responses.length}
        key={demand._id}
        tags={[]}
        proposals={demand.proposals}
        active={demand.active}
      />

      {session &&
        session.user &&
        session.user.role === "admin" &&
        demand?.proposals?.map(
          (prop) =>
            prop.status === "req" && (
              <Proposal
                proposal={prop}
                demandId={id}
                proposalAcceptHandler={proposalAcceptHandler}
                key={Math.random.toString()}
              />
            )
        )}

      {demand?.active && (
        <div
          className="btn btn-primary"
          onClick={() =>
            router.push(
              `/business/${JSON.parse(JSON.stringify(demand.active._id))}`
            )
          }
        >
          Go to Business
        </div>
      )}
    </div>
  );
};

export default DemandPage;

// import axios from "axios";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import { pusherClient } from "../../../utils/pusher";
// import { useUser } from "../../../hooks/queries";

// const DemandPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [msgList, setMsgList] = useState([]);
//   const [msg, setMsg] = useState("");

//   const { user, isError, isLoading, error } = useUser();
//   const sendMsgHandler = async () => {
//     await axios.post(`/api/demand/${id}/msg`, { msg, id: user._id });
//   };

//   useEffect(() => {
//     if (router.isReady) {
//       pusherClient.subscribe(id);

//       pusherClient.bind("msg", (payload) => {
//         setMsgList((prev) => [...prev, payload]);
//       });
//     }

//     return () => pusherClient.unsubscribe(id);
//   }, [router.isReady]);

//   return (
//     <div className="">
//       <div>{JSON.stringify(msgList)}</div>
//       <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
//       <button onClick={sendMsgHandler}>Send</button>
//       {msgList.map((el) => (
//         <div
//           className={`chat ${el.id === user?._id ? "chat-start" : "chat-end"}`}
//         >
//           <div className="chat-bubble chat-bubble-primary">
//             {el.msg} - {el._id}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DemandPage;

import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { pusherClient } from "../../../utils/pusher";
import { useUser } from "../../../hooks/queries";

const DemandPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [msgList, setMsgList] = useState([]);
  const [msg, setMsg] = useState("");

  const { user, isError, isLoading, error } = useUser();
  const sendMsgHandler = async () => {
    await axios.post(`/api/demand/${id}/msg`, { msg, id: user._id });
  };

  useEffect(() => {
    if (router.isReady) {
      pusherClient.subscribe(id);

      pusherClient.bind("msg", (payload) => {
        setMsgList((prev) => [...prev, payload]);
      });
    }

    return () => pusherClient.unsubscribe(id);
  }, [router.isReady]);

  return (
    <div className="">
      <div>{JSON.stringify(msgList)}</div>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={sendMsgHandler}>Send</button>
      {msgList.map((el) => (
        <div
          className={`chat ${el.id === user?._id ? "chat-start" : "chat-end"}`}
        >
          <div className="chat-bubble chat-bubble-primary">
            {el.msg} - {el._id}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemandPage;

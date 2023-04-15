import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { pusherClient } from "../../../utils/pusher";

const DemandPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [msgList, setMsgList] = useState([]);
  const [msg, setMsg] = useState("");

  const sendMsgHandler = async () => {
    await axios.post(`/api/demand/${id}/msg`, { msg });
  };

  useEffect(() => {
    if (router.isReady) {
      pusherClient.subscribe(id);

      pusherClient.bind("msg", (payload) => {
        setMsgList((prev) => [...prev, payload.msg]);
      });
    }

    return () => pusherClient.unsubscribe(id);
  }, [router.isReady]);

  return (
    <div className="">
      <div>{JSON.stringify(msgList)}</div>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={sendMsgHandler}>Send</button>
    </div>
  );
};

export default DemandPage;

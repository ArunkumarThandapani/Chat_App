import Axios from "../Api/axios_api";
import { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats, setchats] = useState([]);

  let ready = false;

  useEffect(() => {
    if (ready) {
      fetchdata();
      console.log("Inside use Effect");
    }

    ready = true;
  }, []);
  const fetchdata = async () => {
    console.log("Inside FetchData");
    const { data } = await Axios.get("/api/chat");
    setchats(data);
    console.log(data);
  };

  return (
    <div>
      {chats.map((cht, index) => {
        return <div key={`chat ${index}`}> {cht.chatName} </div>;
      })}
    </div>
  );
};

export default ChatPage;

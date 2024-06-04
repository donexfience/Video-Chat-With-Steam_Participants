import React, { useEffect, useState } from "react";
import {
  User,
  StreamVideoClient,
  StreamCall,
  useCallStateHooks,
  StreamTheme,
  CallingState,
} from "@stream-io/video-react-sdk";
import { MyParticipantList } from "./components/MyParticipantList";
import { MyFloatingLocalParticipant } from "./components/MyFloatingLocalParticipant";
import { MyUILayout } from "./components/MyUILayout";

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUHJpbmNlX1hpem9yIiwiaXNzIjoiaHR0cHM6Ly9wcm9udG8uZ2V0c3RyZWFtLmlvIiwic3ViIjoidXNlci9QcmluY2VfWGl6b3IiLCJpYXQiOjE3MTc0NzkxNjcsImV4cCI6MTcxODA4Mzk3Mn0.YBoCMjweX-dMwv69Dwz6hWcBnIae-iwbjnrizJLX1CA";
const userId = "Prince_Xizor";
const callId = "zUSPGlyOiHFZ";

const user: User = {
  id: userId,
  name: "Oliver",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

const App = () => {
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<any>(null);
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const initializeClient = async () => {
      const client = new StreamVideoClient({ apiKey, user, token });
      const call = client.call("default", callId);

      try {
        await call.join({ create: true });
        setClient(client);
        setCall(call);
        setIsJoined(true);
      } catch (error) {
        console.error("Error joining the call:", error);
      }
    };

    initializeClient();
  }, []);

  if (!isJoined) {
    return <div>Loading...</div>;
  }

  return (
    <StreamCall call={call}>
      <MyUILayout />
    </StreamCall>
  );
};

export default App;

import React from 'react';
import {
  useCallStateHooks,
  StreamTheme,
  CallingState,
} from '@stream-io/video-react-sdk';
import { MyFloatingLocalParticipant } from './MyFloatingLocalParticipant';
import { MyParticipantList } from './MyParticipantList';
;

export const MyUILayout = () => {
  const { useCallCallingState, useLocalParticipant, useRemoteParticipants } = useCallStateHooks();

  const callingState = useCallCallingState();
  const localParticipant = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <StreamTheme>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MyFloatingLocalParticipant participant={localParticipant} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <MyParticipantList participants={remoteParticipants} />
        </div>
      </div>
    </StreamTheme>
  );
};

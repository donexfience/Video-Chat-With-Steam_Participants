import React from 'react';
import { ParticipantView, StreamVideoParticipant } from '@stream-io/video-react-sdk';

export const MyFloatingLocalParticipant = (props: { participant?: StreamVideoParticipant }) => {
  const { participant } = props;
  if (!participant) {
    return null;
  }
  return (
    <div
      style={{
        position: 'absolute',
        top: '15px',
        left: '15px',
        width: '240px',
        height: '135px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 3px',
        borderRadius: '12px',
      }}
    >
      <ParticipantView participant={participant} />
    </div>
  );
};

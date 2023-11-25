import React from 'react';

interface IProps {
  children?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
  className?: string;
}

export default function Card(props: IProps) {
  return (
    <div className={`card-style ${props.className}`}>
      {props.children}
    </div>
  );
}

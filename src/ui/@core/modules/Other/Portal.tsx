import React, { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  id: string;
  children: React.ReactNode;
}

const PortalContainer: React.FC<Props> = ({ id, children }) => {
  const [portal, setPortal] = useState<React.ReactPortal | null>(null);

  useEffect(() => {
    const portal = createPortal(children, document.getElementById(id) as any);
    setPortal(portal);
  }, [children, id]);

  return portal;
};

export const Portal = memo(PortalContainer);

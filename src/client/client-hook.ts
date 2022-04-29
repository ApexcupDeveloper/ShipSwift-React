import { CourierClient, GrpcClient, OrderClient, ProductClient, EbayClient, StatusClient, UserClient } from './client';
import React from 'react';
import { useAuth0 } from '../business/auth/hooks';
import jwt_decode from "jwt-decode";

const hasPermission = (token: string) => {
  var decoded: any = jwt_decode(token);
  if (decoded.permissions.length > 0) {
    return true;
  } else {
    return false;
  }
}

export const useGrpcClient = (): (() => Promise<GrpcClient>) => {
  const { accessToken, refreshToken } = useAuth0();
  const client = React.useRef(new GrpcClient());

  return () => {
    return new Promise<GrpcClient>(async (resolve, reject) => {
      if (hasPermission(accessToken || '')) {
        client.current.setMeta('Authorization', `Bearer ${accessToken}`);
        resolve(client.current);
      } else {
        refreshToken()
          .then((token) => {
            client.current.setMeta('Authorization', `Bearer ${token}`);
            resolve(client.current);
          })
          .catch((err) => {
            reject(err);
          })
      }
    });
  };
};

export const useOrderClient = (): (() => Promise<OrderClient>) => {
  const { accessToken, refreshToken } = useAuth0();
  const client = React.useRef(new OrderClient());
  return () => {
    return new Promise<OrderClient>(async (resolve, reject) => {
      if (hasPermission(accessToken || '')) {
        client.current.setMeta('Authorization', `Bearer ${accessToken}`);
        resolve(client.current);
      } else {
        refreshToken()
          .then((token) => {
            client.current.setMeta('Authorization', `Bearer ${token}`);
            resolve(client.current);
          })
          .catch((err) => {
            reject(err);
          })
      }
    });
  };
};

export const useCourierClient = (): (() => Promise<CourierClient>) => {
  const { accessToken, refreshToken } = useAuth0();
  const client = React.useRef(new CourierClient());
  return () => {
    return new Promise<CourierClient>(async (resolve, reject) => {
      if (hasPermission(accessToken || '')) {
        client.current.setMeta('Authorization', `Bearer ${accessToken}`);
        resolve(client.current);
      } else {
        refreshToken()
          .then((token) => {
            client.current.setMeta('Authorization', `Bearer ${token}`);
            resolve(client.current);
          })
          .catch((err) => {
            reject(err);
          })
      }
    });
  };
};

export const useProductClient = (): (() => Promise<ProductClient>) => {
  const { accessToken, refreshToken } = useAuth0();
  const client = React.useRef(new ProductClient());
  return () => {
    return new Promise<ProductClient>(async (resolve, reject) => {
      if (hasPermission(accessToken || '')) {
        client.current.setMeta('Authorization', `Bearer ${accessToken}`);
        resolve(client.current);
      } else {
        refreshToken()
          .then((token) => {
            client.current.setMeta('Authorization', `Bearer ${token}`);
            resolve(client.current);
          })
          .catch((err) => {
            reject(err);
          })
      }
    });
  };
};

export const useEbayClient = (): (() => Promise<EbayClient>) => {
  const { accessToken, refreshToken } = useAuth0();
  const client = React.useRef(new EbayClient());
  return () => {
    return new Promise<EbayClient>(async (resolve, reject) => {
      if (hasPermission(accessToken || '')) {
        client.current.setMeta('Authorization', `Bearer ${accessToken}`);
        resolve(client.current);
      } else {
        refreshToken()
          .then((token) => {
            client.current.setMeta('Authorization', `Bearer ${token}`);
            resolve(client.current);
          })
          .catch((err) => {
            reject(err);
          })
      }
    });
  };
};

export const useStatusClient = (): (() => Promise<StatusClient>) => {
  const { accessToken, refreshToken } = useAuth0();
  const client = React.useRef(new StatusClient());
  return () => {
    return new Promise<StatusClient>(async (resolve, reject) => {
      if (hasPermission(accessToken || '')) {
        client.current.setMeta('Authorization', `Bearer ${accessToken}`);
        resolve(client.current);
      } else {
        refreshToken()
          .then((token) => {
            client.current.setMeta('Authorization', `Bearer ${token}`);
            resolve(client.current);
          })
          .catch((err) => {
            reject(err);
          })
      }
    });
  };
};

export const useUserClient = (): (() => Promise<UserClient>) => {
  const { accessToken, refreshToken } = useAuth0();
  const client = React.useRef(new UserClient());
  return () => {
    return new Promise<UserClient>(async (resolve, reject) => {
      if (hasPermission(accessToken || '')) {
        client.current.setMeta('Authorization', `Bearer ${accessToken}`);
        resolve(client.current);
      } else {
        refreshToken()
          .then((token) => {
            client.current.setMeta('Authorization', `Bearer ${token}`);
            resolve(client.current);
          })
          .catch((err) => {
            reject(err);
          })
      }
    });
  };
};
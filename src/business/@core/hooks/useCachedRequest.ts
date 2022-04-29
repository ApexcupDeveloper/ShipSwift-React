import { Query, QueryFunction, useQuery } from 'react-query';

type RequestFunc<Data, Value> = (input: Data) => Promise<Value>;

export const useCachedRequest = <Data, Value>(
  hash: string,
  request: RequestFunc<Data, Value>,
  input?: Data,
  queryConfig?: Query<Value, unknown>
) => {
  const queryWrapper: QueryFunction = ({ pageParam }): Promise<Value> => {
    return request(pageParam);
  };

  const queryInfo = useQuery([hash, input], queryWrapper, queryConfig);

  return queryInfo;
};

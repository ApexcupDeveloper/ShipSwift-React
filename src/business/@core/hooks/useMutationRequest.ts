import { MutationOptions, useMutation } from 'react-query';

type RequestFunc<TData, TValue> = (input: TData) => Promise<TValue>;

export const useMutationRequest = <TData, TValue>(
  request: RequestFunc<TData, TValue>,
  config?: MutationOptions<TValue, unknown, TData>
) => {
  const mutationResult = useMutation(request, config);
  return mutationResult;
};

import useGet from './useGet';

const useUserKeyData = (currentUserId) => {
  const { data, ...rest } = useGet(
    '/user/:id',
    { id: currentUserId },
    { isEnabled: !!currentUserId }
  );

  return { data: data?.keyData || null, ...rest };
};

export default useUserKeyData;

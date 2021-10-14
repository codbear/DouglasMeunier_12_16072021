import useGet from './useGet';

const useUserScore = (currentUserId) => {
  const { data, ...rest } = useGet(
    '/user/:id',
    { id: currentUserId },
    { isEnabled: !!currentUserId }
  );

  return { data: data?.todayScore || data?.score || null, ...rest };
};

export default useUserScore;

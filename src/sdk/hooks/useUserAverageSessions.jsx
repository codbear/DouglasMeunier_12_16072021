import useGet from './useGet';

const useUserAverageSessions = (currentUserId) => {
  return useGet(
    '/user/:id/average-sessions',
    { id: currentUserId },
    { isEnabled: !!currentUserId }
  );
};

export default useUserAverageSessions;

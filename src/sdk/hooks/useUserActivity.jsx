import useGet from './useGet';

const useUserActivity = (currentUserId) => {
  return useGet('/user/:id/activity', { id: currentUserId }, { isEnabled: !!currentUserId });
};

export default useUserActivity;

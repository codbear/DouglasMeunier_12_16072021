import useGet from './useGet';

const useUserPerformance = (currentUserId) => {
  return useGet('/user/:id/performance', { id: currentUserId }, { isEnabled: !!currentUserId });
};

export default useUserPerformance;

import useQuery from './useQuery';
import useGet from './useGet';

const useCurrentUser = () => {
  const query = useQuery();
  const currentUserId = query.get('userId');

  const { isLoading, data: currentUser, error } = useGet('/user/:id', { id: currentUserId });

  return { isLoading, currentUser, error };
};

export default useCurrentUser;

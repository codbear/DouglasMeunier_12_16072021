import useSearchParams from './useSearchParams';
import useGet from './useGet';

/**
 * @description Fetch connected user's info
 * @return {{
 *  isLoading: boolean,
 *  currentUser: {
 *    id: number,
 *    userInfos: {
 *      firstName: string,
 *      lastName: string
 *    }
 *  },
 *  error: Error
 * }}
 */
const useCurrentUser = () => {
  const query = useSearchParams();
  const currentUserId = query.get('userId');

  const { isLoading, data: currentUser, error } = useGet('/user/:id', { id: currentUserId });

  return { isLoading, currentUser, error };
};

export default useCurrentUser;

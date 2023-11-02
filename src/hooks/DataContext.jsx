import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUserStore } from '../store/useUserStore';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [searchParams] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    { total: 0, total_pages: 0, page: 1, per_page: 6 }
  );
  const getUsers = useUserStore((state) => state.getUsers);
  const searchQuery = searchParams.get('search') || '';

  const getFilteredUsers = (query, data) => {
    const lowercaseSearchValue = query?.toLowerCase();
    const filteredUsers = data?.filter((user) => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      const email = user.email.toLowerCase();

      return (
        fullName.includes(lowercaseSearchValue) ||
        email.includes(lowercaseSearchValue)
      );
    });

    return filteredUsers;
  };

  const filteredUsers = getFilteredUsers(searchQuery, users);

  const fetchData = ({ params, onSuccess }) => {
    getUsers({
      params,
      onSuccess,
    });
  };

  const loadMoreHandler = () => {
    const newPage = page.page < page.total_pages ? page.page + 1 : page.page;
    fetchData({
      params: {
        page: newPage,
      },
      onSuccess: (data) => {
        setTimeout(() => {
          setUsers((prev) => {
            const existingUsers = new Set(prev.map((user) => user.id));
            const newData = data?.data.filter(
              (user) => !existingUsers.has(user.id)
            );
            return [...prev, ...newData];
          });

          setPage({
            total: data?.total,
            total_pages: data?.total_pages,
            page: newPage,
            per_page: data?.per_page,
          });
        }, 500);
      },
    });
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchData({
        onSuccess: (data) => {
          setTimeout(() => {
            setUsers(data?.data);
            setPage({
              total: data?.total,
              total_pages: data?.total_pages,
              page: data?.page,
              per_page: data?.per_page,
            });
          }, 600);
        },
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const contextValue = useMemo(() => {
    return {
      page,
      users,
      setUsers,
      filteredUsers,
      loadMoreHandler,
    };
  }, [page, users, setUsers, filteredUsers, loadMoreHandler]);

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: React.ReactNode,
};

DataProvider.defaultProps = {
  children: null,
};

export const useData = () => useContext(DataContext);

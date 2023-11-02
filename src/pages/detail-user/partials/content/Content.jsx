import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'antd';
import { useUserStore } from '../../../../store/useUserStore';

function Content() {
  const { id } = useParams();
  const [getUser, user, setUser] = useUserStore((state) => [
    state.getUser,
    state.user,
    state.setUser,
  ]);

  useEffect(() => {
    document.title = `${user?.first_name} - ContactU`;
  }, [user]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getUser({
        id,
        onSuccess: (data) => setUser(data?.data),
      });
    }
    return () => (isMounted = false);
  }, []);

  return (
    <>
      <div className="DetailUser_frame">
        <Image
          src={user?.avatar}
          alt={user?.first_name}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="DetailUser_content">
        <h2>
          {user?.first_name} {user?.last_name}
        </h2>
        <p>{user?.email}</p>
      </div>
    </>
  );
}

export default Content;

import React from 'react';
import { Button } from 'antd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../../store/useUserStore';
import { useData } from '../../../../hooks/DataContext';
import { useModalStore } from '../modal-container/ModalContainer';

const MySwal = withReactContent(Swal);

function Action() {
  const [toggleModal] = useModalStore((state) => [state.toggleModal]);
  const { setUsers } = useData();
  const navigate = useNavigate();
  const [deleteUser, user] = useUserStore((state) => [
    state.deleteUser,
    state.user,
  ]);

  const deleteHandler = () => {
    MySwal.fire({
      title: 'Delete',
      text: 'Are you sure to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'lightgrey',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser({
          id: user?.id,
          onSuccess: () => {
            setUsers((prev) => {
              return prev.filter((item) => item.id !== user?.id);
            });
            toast.success('User deleted successfully');
            navigate(-1);
          },
        });
      }
    });
  };
  return (
    <div className="DetailUser_action">
      <Button onClick={toggleModal}>Edit</Button>
      <Button danger onClick={deleteHandler}>
        Delete
      </Button>
    </div>
  );
}

export default Action;

import React, { useEffect } from 'react';
import { Button, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';
import Input from '../../../../components/input';
import { formSchema } from './schema/formSchema';
import './styles/modal_container.scss';
import { useUserStore } from '../../../../store/useUserStore';
import { useData } from '../../../../hooks/DataContext';

export const useModalStore = create((set) => ({
  modal: {
    isOpen: false,
  },
  toggleModal: () =>
    set((state) => ({
      modal: {
        ...state.modal,
        isOpen: !state.modal.isOpen,
      },
    })),
}));

function ModalContainer() {
  const [isOpen, toggleModal] = useModalStore((state) => [
    state.modal.isOpen,
    state.toggleModal,
  ]);

  const navigate = useNavigate();
  const { setUsers } = useData();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ resolver: zodResolver(formSchema) });

  const [updateUser, user] = useUserStore((state) => [
    state.updateUser,
    state.user,
  ]);

  const onSubmit = (formData) => {
    updateUser({
      id: user?.id,
      body: formData,
      onSuccess: () => {
        setUsers((prev) => {
          return prev.map((item) => {
            if (item?.id === user?.id) {
              return { ...item, ...formData };
            }
            return item;
          });
        });
        navigate(-1);
      },
    });
  };

  useEffect(() => {
    if (!user) return;
    setValue('first_name', user?.first_name);
    setValue('last_name', user?.last_name);
    setValue('email', user?.email);
  }, [user]);

  return (
    <Modal
      title="Update Data"
      open={isOpen}
      onCancel={toggleModal}
      footer={null}
    >
      <form className="Modal_cntr" onSubmit={handleSubmit(onSubmit)}>
        <div className="Modal_form_cntr">
          <Input
            name="first_name"
            control={control}
            label="First Name"
            placeholder="Input first name"
            message={errors.firstname?.message}
          />
          <Input
            name="last_name"
            control={control}
            label="Last Name"
            placeholder="Input last name"
            message={errors.lastname?.message}
          />
          <Input
            name="email"
            control={control}
            label="Email"
            placeholder="Input email"
            message={errors.email?.message}
          />
        </div>
        <div className="Modal_footer">
          <Button onClick={toggleModal} type="default" block>
            Cancel
          </Button>
          <Button htmlType="submit" type="primary" block>
            Update
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalContainer;

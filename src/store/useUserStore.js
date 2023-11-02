import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { notification } from 'antd';
import toast from 'react-hot-toast';
import {
  deleteUserApi,
  getUserApi,
  getUsersApi,
  loginApi,
  updateUserApi,
} from './userApi';
import { calculateToastDuration } from '../lib/helpers';

export const useUserStore = create(
  persist(
    (set) => ({
      user: {},
      myProfile: {},
      token: '',
      setUser: (data) => set({ user: data }),
      signOut: ({ onSuccess }) => {
        set({ token: '', myProfile: {} });
        onSuccess?.();
      },
      login: async ({ body, silent, onSuccess, onError, currentFilePath }) => {
        try {
          set({ isLoadingRequest: true });
          const response = await loginApi(body);

          const data = response?.data;
          if (!response.status || response.status >= 400) {
            if (silent) return;
            onError?.(data.message);
            notification.error({
              message: 'Failed to Login',
              description: `${data.message}. ${
                currentFilePath && `Current File Path: ${currentFilePath}`
              }`,
              placement: 'bottomRight',
            });
            return;
          }

          if (!silent) {
            const toastMessage = `Successfully Login`;
            toast.success(toastMessage, {
              duration: calculateToastDuration(toastMessage),
              position: 'top-center',
              className: 'font-regular text-16',
            });
          }

          set({ token: data?.token, myProfile: body });

          onSuccess?.(data);
        } catch (error) {
          if (silent) return;
          onError?.(error?.data);
          notification.error({
            message: 'Failed to Login',
            description: `${error.data}. ${
              currentFilePath && `Current File Path: ${currentFilePath}`
            }`,
            placement: 'bottomRight',
          });
        }
      },
      getUsers: async ({
        params,
        silent,
        onSuccess,
        onError,
        currentFilePath,
      }) => {
        try {
          set({ isLoadingRequest: true });
          const response = await getUsersApi(params);

          const data = response?.data;
          if (!response.status || response.status >= 400) {
            if (silent) return;
            onError?.(data.message);
            notification.error({
              message: 'Failed to Get Users',
              description: `${data.message}. ${
                currentFilePath && `Current File Path: ${currentFilePath}`
              }`,
              placement: 'bottomRight',
            });
            return;
          }
          onSuccess?.(data);
        } catch (error) {
          if (silent) return;
          onError?.(error?.data);
          notification.error({
            message: 'Failed to Get Users',
            description: `${error.data}. ${
              currentFilePath && `Current File Path: ${currentFilePath}`
            }`,
            placement: 'bottomRight',
          });
        }
      },
      getUser: async ({ id, silent, onSuccess, onError, currentFilePath }) => {
        try {
          const response = await getUserApi(id);

          const data = response?.data;
          if (!response.status || response.status >= 400) {
            if (silent) return;
            onError?.(data.message);
            notification.error({
              message: 'Failed to Get User',
              description: `${data.message}. ${
                currentFilePath && `Current File Path: ${currentFilePath}`
              }`,
              placement: 'bottomRight',
            });
          }
          onSuccess?.(data);
        } catch (error) {
          if (silent) return;
          onError?.(error?.data);
          notification.error({
            message: 'Failed to Get User',
            description: `${error.data}. ${
              currentFilePath && `Current File Path: ${currentFilePath}`
            }`,
            placement: 'bottomRight',
          });
        }
      },
      deleteUser: async ({
        id,
        silent,
        onSuccess,
        onError,
        currentFilePath,
      }) => {
        try {
          const response = await deleteUserApi(id);

          const data = response?.data;
          if (!response.status || response.status >= 400) {
            if (silent) return;
            onError?.(data.message);
            notification.error({
              message: 'Failed to Delete User',
              description: `${data.message}. ${
                currentFilePath && `Current File Path: ${currentFilePath}`
              }`,
              placement: 'bottomRight',
            });
          }
          onSuccess?.(data);
        } catch (error) {
          if (silent) return;
          onError?.(error?.data);
          notification.error({
            message: 'Failed to Delete User',
            description: `${error.data}. ${
              currentFilePath && `Current File Path: ${currentFilePath}`
            }`,
            placement: 'bottomRight',
          });
        }
      },
      updateUser: async ({
        id,
        body,
        silent,
        onSuccess,
        onError,
        currentFilePath,
      }) => {
        try {
          const response = await updateUserApi(id, body);

          const data = response?.data;
          if (!response.status || response.status >= 400) {
            if (silent) return;
            onError?.(data.message);
            notification.error({
              message: 'Failed to Update User',
              description: `${data.message}. ${
                currentFilePath && `Current File Path: ${currentFilePath}`
              }`,
              placement: 'bottomRight',
            });
          }

          if (!silent) {
            const toastMessage = `Successfully Update User`;
            toast.success(toastMessage, {
              duration: calculateToastDuration(toastMessage),
              position: 'top-center',
              className: 'font-regular text-16',
            });
          }

          onSuccess?.(data);
        } catch (error) {
          if (silent) return;
          onError?.(error?.data);
          notification.error({
            message: 'Failed to Update User',
            description: `${error.data}. ${
              currentFilePath && `Current File Path: ${currentFilePath}`
            }`,
            placement: 'bottomRight',
          });
        }
      },
    }),
    {
      name: 'user-storage',
    }
  )
);

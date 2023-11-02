import React, { useEffect } from 'react';
import './styles/login.scss';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/input';
import { useUserStore } from '../../../store/useUserStore';
import { formSchema } from './schema/formSchema';

function Login() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(formSchema) });
  const [login, token] = useUserStore((state) => [state.login, state.token]);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/users', { replace: true });
    }
  }, [token]);

  useEffect(() => {
    document.title = 'ContactU - Join';
  }, []);

  const onSubmit = (formData) => {
    login({
      body: formData,
      onSuccess: () => navigate('/users'),
    });
  };

  return (
    <div className="Login_cntr">
      <form className="Login_box_cntr" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="Login_title">Login ConnectU</h1>
        <div className="Login_form_cntr">
          <Input
            name="email"
            control={control}
            label="Email"
            placeholder="Input email address"
            message={errors.email?.message}
          />
          <Input
            name="password"
            control={control}
            label="Password"
            placeholder="Input password"
            message={errors.password?.message}
            password
          />
        </div>
        <Button htmlType="submit" type="primary" block>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          {...register('name', { required: 'Введите Имя!' })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Заполните Email!',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный email',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Введите Пароль!',
            minLength: {
              value: 6,
              message: 'Пароль должен быть не менее 6 символов',
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Готово</button>
    </form>
  );
};

export default RegistrationForm;
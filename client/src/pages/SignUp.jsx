import { useForm, Controller } from "react-hook-form";
import style from "./style.module.scss";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./validtionSchemas";
import Select from "../components/Select/Select";
import Field from "../components/Field/Field";
import Button from "../components/Button/Button";

const defaultValues = {
  userName: "",
  password: "",
};

const genderList = [
  {
    id: 1,
    title: "Мужчина",
  },
  {
    id: 2,
    title: "Женщина",
  },
  {
    id: 3,
    title: "Не указан",
  },
];

export default function SignUp() {
  const { handleSignUp } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(signUpSchema),
  });

  return (
    <form className={style.wrapper} onSubmit={handleSubmit(handleSignUp)}>
      <h2>Создать аккаунт</h2>
      <Field
        name="userName"
        register={register}
        autoComplete="off"
        placeholder="Логин"
        error={Boolean(errors.userName)}
        helperText={errors.userName?.message}
      />
      <Field
        name="password"
        register={register}
        autoComplete="off"
        placeholder="Пароль"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <Field
        name="email"
        register={register}
        autoComplete="off"
        placeholder="Электронная почта"
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
      <Field
        name="phone"
        register={register}
        autoComplete="off"
        placeholder="Телефон"
        error={Boolean(errors.phone)}
        helperText={errors.phone?.message}
      />
      <Field
        name="date"
        register={register}
        autoComplete="off"
        placeholder="Дата рождения"
        error={Boolean(errors.date)}
        helperText={errors.date?.message}
      />
      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value} options={genderList} />
        )}
      />
      
      <Button disabled={isSubmitting} type="submit">
        Зарегистрироваться
      </Button>
    </form>
  );
}

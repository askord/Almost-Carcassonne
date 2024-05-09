import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./validtionSchemas";
import Field from "../components/Field/Field";
import Button from "../components/Button/Button";
import { useState } from "react";

const defaultValues = {
  userName: "",
  password: "",
};

export default function SignIn() {
  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

// This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  const { handleSignIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(signInSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className={style.wrapper} type='post'>
      <h2>Войти в аккаунт</h2>
      <Field
        name="userName"
        register={register}
        autoComplete="off"
        placeholder="Имя пользователя"
        error={Boolean(errors.userName)}
        helperText={errors.userName?.message}
      />
      <Field
        name="password"
        type={isShown ? "text" : "password"}
        register={register}
        autoComplete="off"
        placeholder="Пароль"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <Field
        checked={isShown}
        onChange={togglePassword}
        name="checkpass"
        register={register}
        />
      <Button disabled={isSubmitting} type="submit">
        Войти
      </Button>
    </form>
  );
}

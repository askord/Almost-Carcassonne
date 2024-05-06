import { useContext, useEffect } from "react";
import style from "./style.module.scss";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button/Button";

export default function Demo() {
  const { data, handleFetchProtected, handleLogOut } = useContext(AuthContext);

  useEffect(() => {
    // Вы можете выполнить запрос на получение данных сразу после монтирования компонента
    handleFetchProtected();
  }, [handleFetchProtected]); // Обновление данных при изменении функции обработчика

  return (
    <div className={style.wrapper}>
        <p>Вы вошли как: {data}</p>
      <Button onClick={handleLogOut}>Выйти</Button>
    </div>
  );
}
import { memo } from "react";
import cn from "classnames";
import style from "./field.module.scss";



export default memo(
  ({ register, name, error = false, helperText = "", ...rest }) => {
    if(name=="userName" | name=="email" | name=="phone" | name=="date"){
      return (
        <div className={cn(style.inputField, error && style.inputField__error)}>
          <input {...register(name)} {...rest} />
          {error && <p className={style.error}>{helperText}</p>}
        </div>
      );
    }
    if(name=="password"){
      return (
        <div className={cn(style.inputField, error && style.inputField__error)}>
          <input {...register(name)} {...rest} />
          {error && <p className={style.error}>{helperText}</p>}
        </div>
      )
    }
    if(name=="checkpass"){
      return (
        <div className={style.checkbox}>
          <label>Отобразить пароль:</label>
          <input type="checkbox" {...register(name)} {...rest} />
        </div>
      )
    }
  }
);

import React, { ChangeEvent, useState } from "react";
import { setCurrentUser, setToken } from "../../helpers/auth-helper";
import "./login.scss";

export const Login = () => {
  const [data, setData] = useState({
    user: "",
    password: "",
  });

  const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    setToken("asd15s34faa5s3d1as35d54sad1");
    setCurrentUser(data.user);
    window.location.href = "./register-form";
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <span>Usuario</span>
        <input
          value={data.user}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="user"
          type="text"
        />
        <span>Contraseña</span>
        <input
          value={data.password}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="password"
          type="password"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

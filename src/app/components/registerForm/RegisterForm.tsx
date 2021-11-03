import React, { ChangeEvent, useState } from "react";
import "./registerForm.scss";

export const RegisterForm = () => {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    lenguage: "",
    pizza: false,
    burritos: false,
    tamales: false,
    estadoCivil: 0,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  return (
    <div className="contenedor">
      <form>
        <input
          type="text"
          name="nombre"
          onChange={handleInput}
          placeholder="Nombre"
        />
        <div>
          <div>
            <input
              id="radio1"
              name="lenguage"
              type="radio"
              value="Java"
              onChange={handleInput}
              checked={dataForm.lenguage == "Java" ? true : false}
            />
            <label htmlFor="radio1">Java</label>
          </div>
          <div>
            <input
              id="radio2"
              name="lenguage"
              type="radio"
              value="C#"
              onChange={handleInput}
              checked={dataForm.lenguage == "C#" ? true : false}
            />
            <label htmlFor="radio2">C#</label>
          </div>
        </div>
        <div>
          <div>
            <div>
              <input
                id="check1"
                name="pizza"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDataForm({
                    ...dataForm,
                    [e.target.name]: e.target.checked,
                  })
                }
                type="checkbox"
              />
              <label htmlFor="check1">Pizza</label>
            </div>
            <div>
              <input
                id="check2"
                name="burritos"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDataForm({
                    ...dataForm,
                    [e.target.name]: e.target.checked,
                  })
                }
                type="checkbox"
              />
              <label htmlFor="check2">Burritos</label>
            </div>
            <div>
              <input
                id="check3"
                name="tamales"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDataForm({
                    ...dataForm,
                    [e.target.name]: e.target.checked,
                  })
                }
                type="checkbox"
              />
              <label htmlFor="check3">Tamales</label>
            </div>
          </div>
        </div>
        <div>
          <select
            name="estadoCivil"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setDataForm({ ...dataForm, [e.target.name]: e.target.value })
            }
          >
            <option value="0">--Selecciona--</option>
            <option value="1">Casado</option>
            <option value="2">Soltero</option>
          </select>
        </div>
      </form>
      <hr />
      <pre>{JSON.stringify(dataForm, null, 3)}</pre>
    </div>
  );
};

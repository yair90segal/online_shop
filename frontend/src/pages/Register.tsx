import { useForm } from "react-hook-form";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const userData = (await api.auth().register(data.name, data.password)).data;

    localStorage.setItem("token", userData.accessToken);
    navigate("/", { replace: true });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-100">
      <div>
        <h2 className="d-flex justify-content-center">Register</h2>

        <form
          className="d-flex flex-column mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Username"
            style={{ margin: "5px" }}
          />
          {errors.name && (
            <span style={{ color: "red" }}>*Username* is mandatory</span>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            style={{ margin: "5px" }}
          />
          {errors.password && (
            <span style={{ color: "red" }}>*Password* is mandatory</span>
          )}

          <input
            type="submit"
            style={{ backgroundColor: "#a1eafb", margin: "3px" }}
          />
        </form>

        <div className="text-center mt-3">
          Already have an account? Sign in{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            here
          </span>
          !
        </div>
      </div>
    </div>
  );
};

export default Register;

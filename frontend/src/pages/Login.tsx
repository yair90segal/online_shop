import { useForm } from "react-hook-form";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const navigate = useNavigate();
    
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const onSubmit = async (data: any) => {
        const userData = (await api.auth().login(data.name, data.password)).data;
    
        localStorage.setItem("token", userData.accessToken);
        navigate("/", { replace: true });
      };
    
      return (
        <>
          <h2>Login</h2>
    
          <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Username"
            />
            {errors.name && (
              <span style={{ color: "red" }}>*Username* is mandatory</span>
            )}
    
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && (
              <span style={{ color: "red" }}>*Password* is mandatory</span>
            )}
    
            <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
          </form>
        </>
      );
};

export default Login;
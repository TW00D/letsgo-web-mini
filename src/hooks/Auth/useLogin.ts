import toast from "react-hot-toast";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../utils/api/Auth/login";
import { setToken } from "../../utils/functions/TokenManagers";

export function useLogin() {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const login = useUserLogin();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.mutate(credentials, {
      onSuccess: (e) => {
        setToken(e.data.accessToken, e.data.refreshToken);
        toast.success("로그인을 성공했습니다.");
        navigate("/");
      },
      onError: (err) => {
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          switch (status) {
            case 400:
              toast.error("로그인에 실패했습니다");
              break;
            case 404:
              toast.error("아이디와 비밀번호를 다시 확인해주세요");
              break;
            default:
              toast.error("로그인에 실패했습니다");
          }
        } else toast.error("네트워크 연결 상태를 확인해주세요");
      },
    });
  };
  return { credentials, setCredentials, handleChange, handleSubmit };
}

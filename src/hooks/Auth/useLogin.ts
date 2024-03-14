import toast from "react-hot-toast";
import { useState } from "react";

export function useLogin() {
  const [credentials, setCredentials] = useState<{
    userId: string;
    password: string;
  }>({
    userId: "",
    password: "",
  });

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
    const { userId, password } = credentials;
    if (userId.trim() === "") {
      return toast.error("아이디를 입력해주세요");
    }
    if (password.trim() === "") {
      return toast.error("비밀번호를 입력해주세요");
    }
  };

  return { handleChange, handleSubmit, credentials, setCredentials };
}

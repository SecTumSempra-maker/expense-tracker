import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="">{label}</label>
      <div>
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-transperant outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default Input;

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// type Props = {
//   type: string;
//   placeholder: string;
//   id: any;
//   inputId?: any;
//   message?: any;
//   pattern?: {
//     value?: any;
//     message?: any;
//   };
//   required?: any;
//   value?: boolean;
// };

const InputField = ({
  registerName,
  id,
  type,
  placeholder,
  errMessage = "Please fill out this field.",
  isRequired,
  isFullSpan = false,
  isTextArea = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputContent = () => {
    if (isTextArea) {
      return (
        <textarea
          name={registerName}
          id={id}
          placeholder={placeholder}
          className="customInput resize-none"
          {...register(`${registerName}`, {
            required: { value: { isRequired }, message: `${errMessage}` },
          })}
        />
      );
    }
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="customInput"
        {...register(`${registerName}`, {
          required: { value: { isRequired }, message: `${errMessage}` },
        })}
      />
    );
  };

  return (
    <label
      className={
        isFullSpan
          ? "grid grid-rows-2 col-span-2"
          : "grid grid-rows-2 col-span-2 sm:col-span-1"
      }
      htmlFor={id}
    >
      {inputContent()}
      <ErrorMessage
        errors={errors}
        name={registerName}
        render={({ message }) => (
          <p className="text-customTeal animate-pulse text-center">{message}</p>
        )}
      />
    </label>
  );
};

export default InputField;

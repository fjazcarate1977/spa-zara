import React from 'react';

interface InputTextProps {
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
}

const InputText: React.FC<InputTextProps> = ({
  handleInput,
  ...props
}: InputTextProps) => (
  <input
    className="border-slate-400 border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:border-none focus:ring w-full "
    {...props}
    onChange={(e) => handleInput(e)}
  />
);

export default InputText;

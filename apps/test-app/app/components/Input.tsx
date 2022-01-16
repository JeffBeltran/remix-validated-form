import React, { forwardRef } from "react";
import { useField } from "remix-validated-form";

type InputProps = {
  name: string;
  label: string;
};

export const Input = forwardRef(
  ({ name, label }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { getInputProps, error } = useField(name);
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input {...getInputProps({ ref, id: name })} />
        {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
    );
  }
);

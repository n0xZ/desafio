import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface IFormField {
    labelName: string;
    inputName: string;
    inputType: string;
    register: UseFormRegister<any>;
    errors: FieldError | undefined;
}
const FormField: React.FC<IFormField> = ({
    inputName,
    inputType,
    labelName,
    register,
    errors,
}) => {
    return (
        <main>
            <label>{labelName}</label>
            <input type={inputType} {...register(inputName)} />
            <p>{errors?.message && errors.message}</p>
        </main>
    );
};

export default FormField;

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
        <main className="flex flex-col mb-4 w-full  ">
            <label className="font-roboto">{labelName}</label>
            <input
                className="h-11 w-full px-3  rounded-md outline-none border-2 border-gray-300 shadow-md"
                type={inputType}
                {...register(inputName)}
            />
            <p className="text-red-600 ">{errors?.message && errors.message}</p>
        </main>
    );
};

export default FormField;

import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
type Persons={
    name:string
}
interface IFormOptionField {
    labelName: string;
    inputName: string;
    register: UseFormRegister<any>;
    errors: FieldError | undefined;
    options: string[] | Persons[];
}
const FormOptionField: React.FC<IFormOptionField> = ({
    inputName,
    labelName,
    register,
    errors,
    options,
}) => {
    return (
        <main className="flex flex-col mb-4 w-full  ">
            <label className="font-roboto">{labelName}</label>
            <select
                className="px-3 h-11 w-full rounded-md outline-none border-2 border-gray-300 shadow-md"
                {...register(inputName)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
            <p className="text-red-600 ">{errors?.message && errors.message}</p>
        </main>
    );
};

export default FormOptionField;

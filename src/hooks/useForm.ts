import { useState } from 'react';

export const useForm = (initialState: any) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = (event: any) => {
        const { target } = event;
        setValues({
            ...values,
            [target?.name]: target?.value,
        });
    };

    return [values, handleInputChange, reset];
};

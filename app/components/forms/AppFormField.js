import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, width, ...otherProps }) {
    const { errors, setFieldValue, values, setFieldTouched, touched } = useFormikContext();
    
    return (
        <>
            <AppTextInput
                onChangeText={ text => setFieldValue(name, text) }
                onBlur={ () => setFieldTouched(name) }
                value={ values[name] }
                width={ width }
                { ...otherProps }
            />
            <ErrorMessage error={ errors[name] } visible={ touched[name] } />
        </>
    )
}

import React from 'react';
import { useFormikContext } from 'formik';

import ListImageInput from '../lists/ListImageInput';
import ErrorMessage from './ErrorMessage';

export default function FormImagePicker({ name }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri])
      }
      const handleRemove = (uri) => {
        setFieldValue(name, values[name].filter(imageUri => imageUri !== uri))
      }
    return (
        <>
            <ListImageInput 
                imageUris={ values[name] }
                onAddImage={ handleAdd }
                onRemoveImage={ handleRemove }
            />
            <ErrorMessage error={ errors[name] } visible={ touched[name] } />
        </>
    )
}
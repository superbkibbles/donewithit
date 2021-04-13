import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import AppPicker from '../AppPicker';

export default function AppFormPicker({ items, name, numberOfColumns, width, PickerItemComponent, placeholder }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker 
                items={ items }
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={ placeholder }
                selectedItem={ values[name] }
                width={ width }
                PickerItemComponent={ PickerItemComponent }
                numberOfColumns={ numberOfColumns }
             />
            <ErrorMessage error={ errors[name] } visible={ touched[name] } />
        </>
    )
}

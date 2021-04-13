import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
import {
    AppFormField,
    SubmitButton,
    AppForm,
    AppFormPicker
    } from '../components/forms'
import FormImagePicker from '../components/forms/FormImagePicker';
import Screen from '../components/Screen';
import { useLocation } from '../hooks/useLocation';
import listingApi from '../api/listings';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description'),
    images: Yup.array().min(1, 'Please select at least one image')
})

const categories = [
    { lable: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
    { lable: "Clothing", value: 2, backgroundColor: 'green', icon: 'email'},
    { lable: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock'}
]

export default function ListingEditScreen()  {
    const [uploadVisible, setUploadVisible] = useState(false );
    const [progress, setProgress] = useState(0);
    
    const location = useLocation();

    const handleSubmit = async (listing, { resetForm }) => {
        setUploadVisible(true)
        const res = await listingApi.addListing({ ...listing, location }, 
            (progress) => setProgress(progress)   
        );

        if (!res.ok) {
            alert("couldn't save the listing");
            setUploadVisible(false);
            return;
        }

        resetForm();
    } 
    return (
        <Screen style={ styles.container }>
            <UploadScreen onDone={ () => setUploadVisible(false) } progress={ progress } visible={ uploadVisible } />
            <AppForm
                initialValues={{ title: '', price: '', category: null, description: '', images: [] }}
                onSubmit={ handleSubmit }
                validationSchema={ validationSchema }
            >
                <FormImagePicker
                    name='images'
                />
                <AppFormField
                    maxLength={255}
                    name='title'
                    placeholder='Title'
                />
                <AppFormField
                    name='price'
                    maxLength={8}
                    keyboardType='numeric'
                    placeholder='Price'
                    width={ 120 }
                />
                <AppFormPicker
                    name='category'
                    items={ categories }
                    placeholder='Category'
                    PickerItemComponent={ CategoryPickerItem }
                    width="50%"
                    numberOfColumns={3}
                />
                <AppFormField
                    name='description'
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    placeholder='Description'
                />

                
                <SubmitButton title='Post'  />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

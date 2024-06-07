import React from "react";
import { Formik, useField } from "formik";
import { Button, StyleSheet, Text, View } from "react-native";
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'

const styles = StyleSheet.create({
    form: {
        margin: 12,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
        marginTop: -4,
    }
})

const initialValues = {
    email: '',
    password: '',
}

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
        <>
            <StyledTextInput placeholder='Email'
                error={!!meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {!!meta.error && <StyledText style={styles.error}>
                {meta.error}
                </StyledText>}
        </>
    )
}

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Email is required'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email addres';
    }

    console.log(errors);
    return errors;
}

export default function LogInPage() {
    return (
        <>
            <Text>Working on it</Text>
            <Text>Segunda opción de calado</Text>
            <Formik
                initialValues={initialValues}
                onSubmit={values => console.log(values)}
                validate={validate}
            >
                {
                    ({ handleChange, handleSubmit, values }) => {
                        return (
                            <View style={styles.form}>
                                <FormikInputValue
                                    name='email'
                                    placeholder='E-mail'
                                />
                                <FormikInputValue
                                    name='password'
                                    placeholder='Password'
                                    secureTextEntry
                                />
                                <Button onPress={handleSubmit} title='Log In' />
                            </View>
                        )
                    }
                }
            </Formik>
        </>
    )
}
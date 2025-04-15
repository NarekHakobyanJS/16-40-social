import React from 'react'
import {useDispatch} from 'react-redux'
import {Formik, Field, Form} from 'formik'
import { setLoginThunk } from '../../store/reducers/authReducer'

const LoginPage = () => {
    const dispatch = useDispatch()

    const login = ({email, password}) => {
        dispatch(setLoginThunk(email, password))
    }
  return (
    <div>
        <Formik
            initialValues={{
                email : '',
                password : ''
            }}
            onSubmit={(value) => login(value)}
        >
            <Form>
                <Field name='email' placeholder='email'/>
                <Field type='password' name='password' placeholder='password'/>
                <button>Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default LoginPage
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormTextInput,
  Button,
  FormSelect,
  Headline,
} from '@vfde-react/pattern';
import { DevTool } from '@hookform/devtools';
import RootState from '../../types/rootState';
import { setFormData, setUserType } from '../../actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from './styled';

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm<RootState>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: RootState) => {
    dispatch(setFormData(data));
    navigate('/overview');
  };
  return (
    <>
      <Headline children="Form Page" level={2} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormInput>
          <FormTextInput
            label="First Name"
            message={errors.firstName?.message}
            appearance={errors.firstName?.message ? 'error' : 'default'}
            placeholder="Enter Your First Name Please"
            formNoValidate
            uid="first-name"
            {...register('firstName', { required: 'First Name is required' })}
          />
        </FormInput>

        <FormInput>
          <FormTextInput
            message={errors.age?.message}
            appearance={errors.age?.message ? 'error' : 'default'}
            label="Age"
            type="number"
            placeholder="Enter Your Age Please"
            formNoValidate
            uid="age"
            onKeyDown={(e) => {
              if (
                e.key === '+' ||
                e.key === '-' ||
                e.key === 'e' ||
                e.key === '.'
              ) {
                e.preventDefault();
              }
            }}
            {...register('age', {
              required: 'Age is required',
              validate: (fieldValue) =>
                (fieldValue! > 0 && fieldValue! <= 120) || 'Invalid age',
              valueAsNumber: true,
            })}
          />
        </FormInput>

        <FormInput>
          <FormSelect
            label="User Type"
            uid="user-type"
            options={[
              { value: 'user', label: 'User' },
              { value: 'admin', label: 'Admin' },
            ]}
            {...register('userType')}
            onChange={(selectedValue) =>
              dispatch(setUserType({ userType: selectedValue.target.value }))
            }
          />
        </FormInput>
        <Button children="Submit" id="submit-button" />
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;

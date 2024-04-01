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
import './Form.css';

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
      <Headline
        children="Form Page"
        level={2}
        mobileAlign="left"
        align="left"
      />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="formInput">
          <FormTextInput
            label="First Name"
            placeholder="Enter Your First Name Please"
            disabled={false}
            formNoValidate
            uid="first-name"
            {...register('firstName', { required: 'First Name is required' })}
          />
        </div>
        <p className="error">{errors.firstName?.message}</p>

        <div className="formInput">
          <FormTextInput
            label="Age"
            type="number"
            placeholder="Enter Your Age Please"
            disabled={false}
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
              required: { value: true, message: 'Age is required' },
              validate: (fieldValue) =>
                (fieldValue! > 0 && fieldValue! <= 120) || 'Invalid age',
              valueAsNumber: true,
            })}
          />
        </div>
        <p className="error">{errors.age?.message}</p>

        <div className="formInput">
          <FormSelect
            label="User Type"
            disabled={false}
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
        </div>
        <p className="error">{errors.userType?.message}</p>

        <Button
          widthBehavior={undefined}
          children="Submit"
          id="submit-button"
        />
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;

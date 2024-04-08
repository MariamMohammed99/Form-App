import React from 'react';
import { useSelector } from 'react-redux';
import { getFormData } from '../../selectors';
import { FormLabel, Headline, Typography } from '@vfde-react/pattern';
import FormDetails from './styled';

const Overview: React.FC = () => {
  const formData = useSelector(getFormData);
  return (
    <>
      <Headline children="Overview Page" level={2} />
      <FormDetails>
        <FormLabel children="First Name: " />
        <Typography children={formData.firstName} />
      </FormDetails>
      <FormDetails>
        <FormLabel children="Age: " />
        <Typography children={formData.age} />
      </FormDetails>
      <FormDetails>
        <FormLabel children="User Type: " />
        <Typography children={formData.userType} />
      </FormDetails>
    </>
  );
};

export default Overview;

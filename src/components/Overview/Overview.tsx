import React from 'react';
import { useSelector } from 'react-redux';
import { getFormData } from '../../selectors';
import { FormLabel, Headline, Typography } from '@vfde-react/pattern';
import './Overview.css';

const Overview: React.FC = () => {
  const formData = useSelector(getFormData);
  return (
    <>
      <Headline
        children="Overview Page"
        level={2}
        mobileAlign="left"
        align="left"
      />
      <div className="formDetails">
        <FormLabel children="First Name: " />
        <Typography children={formData.firstName} />
      </div>
      <div className="formDetails">
        <FormLabel children="Age: " />
        <Typography children={formData.age} />
      </div>{' '}
      <div className="formDetails">
        <FormLabel children="User Type: " />
        <Typography children={formData.userType} />
      </div>
    </>
  );
};

export default Overview;

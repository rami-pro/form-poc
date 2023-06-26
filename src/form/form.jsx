import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from './FormInput';


// yup resolver: we can modify rules according to our readOnly config
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

// Mapping between json props and inputs
const readOnlyConfig = {
  firstName: true,
  lastName: false,
  email: true,
};

const defaultValues = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
};
//-------------------------------------





// Form
const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="firstName"
        label="First Name"
        isReadOnly={readOnlyConfig.firstName}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        style={{marginBottom: "1rem"}}
        register={register}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        isReadOnly={readOnlyConfig.lastName}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        style={{marginBottom: "1rem"}}
        register={register}
      />
      <FormInput
        name="email"
        label="Email"
        isReadOnly={readOnlyConfig.email}
        error={!!errors.email}
        helperText={errors.email?.message}
        style={{marginBottom: "1rem"}}
        register={register}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

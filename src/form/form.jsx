import { Controller, useForm } from 'react-hook-form';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Edit, Lock } from '@mui/icons-material';


// yup resolver: we can modify rules according to our readOnly config
const infosPersoSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

const infosCompSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});
// Mapping between json props and inputs
const defaultValues = {
  information_personnelle: {
    firstName: 'John',
    lastName: 'Doe',
  },
  info_complementaire: {
    email: 'john.doe@example.com',
  },
};

const checkReadOnly = {
  information_personnelle: {
    firstName: true,
    lastName: false,
  },
  info_complementaire: {
    email: false,
  },
};
//-------------------------------------





// Form
const MyForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(infosPersoSchema),
    defaultValues: defaultValues.information_personnelle,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">infos personnelles</Typography>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="First Name"
            value={value || ""}
            style={{ marginBottom: "1rem" }}
            onChange={onChange}
            InputProps={{
              readOnly: checkReadOnly.information_personnelle.firstName, endAdornment: (
                <InputAdornment position="end">
                  {checkReadOnly.information_personnelle.firstName ? (
                    <Lock />
                  ) : (
                    <IconButton
                      aria-label="edit"
                      onClick={() => console.log('Edit button clicked')}
                    >
                      <Edit />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
            size="small"
            fullWidth
            error={!!error}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="last Name"
            value={value || ""}
            style={{ marginBottom: "1rem" }}
            onChange={onChange}
            InputProps={{
              readOnly: checkReadOnly.information_personnelle.lastName, endAdornment: (
                <InputAdornment position="end">
                  {checkReadOnly.information_personnelle.lastName ? (
                    <Lock />
                  ) : (
                    <IconButton
                      aria-label="edit"
                      onClick={() => console.log('Edit button clicked')}
                    >
                      <Edit />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
            size="small"
            fullWidth
            error={!!error}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

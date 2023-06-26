import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Edit, Lock } from '@mui/icons-material';

export const FormInput = ({ name, label, isReadOnly, error, helperText, register, ...props }) => {
    return (
      <TextField
        name={name}
        label={label}
        fullWidth
        variant="outlined"
        error={error}
        helperText={helperText}
        InputProps={{
          readOnly: isReadOnly,
          endAdornment: (
            <InputAdornment position="end">
              {isReadOnly ? (
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
        {...props}
        {...register(name)}
      />
    );
  };
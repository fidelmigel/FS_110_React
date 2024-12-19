import CustomField from './CustomField';
import CustomPassField from './CustomPassField';

const InputFabric = ({ label, type = 'text', name }) => {
  const types = {
    password: <CustomPassField label={label} name={name} type={type} />,
    text: <CustomField label={label} name={name} type={type} />,
    number: <CustomField label={label} name={name} type={type} />,
  };
  return types[type];
};
export default InputFabric;

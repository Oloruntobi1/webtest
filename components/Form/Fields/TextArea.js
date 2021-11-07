export default function TextArea(props) {
  const {
    id,
    name,
    label,
    isValidated,
    showValidationInfo,
    required,
    handleInputChange,
    ...otherProps
  } = props;

  return (
    <textarea
      {...otherProps}
      className={`form-control ${
        showValidationInfo && (isValidated ? 'is-valid' : 'is-invalid')
      }`}
      name={name}
      id={id}
      required={required}
      aria-label={`Enter ${label}`}
      onChange={handleInputChange}
    />
  );
}

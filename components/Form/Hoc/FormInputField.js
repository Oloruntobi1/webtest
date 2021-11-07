export default function TextInputField(props) {
  const {
    render,
    name,
    id,
    label,
    onChange,
    hideLabel,
    required,
    browserValidate,
    regex,
    isValid: isInputValid,
    errorMessage,
    successMessage,
    renderDropdown,
    interacted,
    ...otherProps
  } = props;

  // determines if current input has required or regex props
  const shouldValidate = !browserValidate && (regex || required);

  // determines if current input should be validated, its value valid
  const isValidated = shouldValidate && isInputValid;

  // determines if to show validation messages
  const showValidationInfo = interacted && shouldValidate;

  // callback for when input changes
  const handleInputChange = (e) => {
    // get current input value
    const currentValue = e.target.value;

    let isValid = true;

    // if regex prop exists, validate with regex
    if (shouldValidate && regex) {
      isValid = currentValue.match(regex);

      // else validate with 'required' prop if it exists
    } else if (required) {
      isValid = currentValue.trim() !== '';
    }

    // call onChange function with current data
    onChange(name, currentValue, isValid);
  };

  return (
    <div className="form-group">
      <label htmlFor={id} className="input-label mb-0">
        {!hideLabel && <span className="mb-2 d-inline-block">{label}</span>}
        {render({
          id,
          name,
          label,
          isValidated,
          showValidationInfo,
          required,
          handleInputChange,
          ...(renderDropdown && { renderDropdown }),
          ...otherProps,
        })}
      </label>
      {showValidationInfo && (
        <>
          {isValidated ? (
            <small className="text-success">{successMessage}</small>
          ) : (
            <small className="text-danger">{errorMessage}</small>
          )}
        </>
      )}
    </div>
  );
}

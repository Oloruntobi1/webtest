export default function RadioGroup(props) {
  const {
    name,
    label,
    onChange,
    options,
    required,
    isValid: isInputValid,
    interacted,
  } = props;

  const showValidationError = interacted && !isInputValid;

  const handleChange = (e) => {
    // reset other response field when changing option
    const otherFieldInput = `${name}OtherResponse`;

    if (e.target.id !== otherFieldInput) {
      document.getElementById(otherFieldInput).value = '';
    }

    const currentValue = e.target.value;

    const isValid = currentValue !== '';

    onChange(name, currentValue, isValid);
  };

  const setOtherOptionActive = (otherOptionId) => {
    const otherFieldOption = document.getElementById(otherOptionId);

    otherFieldOption.click();
  };

  /* prettier-ignore */
  return (
    <div className="form-group">
      {label && <span className="input-label mb-2">{label}</span>}
      {options
        && options.map((item) => (
          <div className="form-check d-flex mb-2" key={item.id}>
            <label
              className="form-check-label font-weight-light"
              htmlFor={`${name}-${item?.id}`}
            >
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id={`${name}-${item?.id}`}
                value={item?.value}
                required={required}
                onChange={handleChange}
              />
              {item?.title}
            </label>
            {item?.value === '' && (
              <div className="col">
                <input className={`form-control form-control-sm ${showValidationError ? 'is-invalid' : ''}`} id={`${name}OtherResponse`} onChange={handleChange} onClick={() => setOtherOptionActive(`${name}-${item?.id}`)} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

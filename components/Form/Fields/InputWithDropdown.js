export default function InputWithDropdown(props) {
  const {
    id,
    name,
    label,
    isValidated,
    showValidationInfo,
    required,
    handleInputChange,
    renderDropdown,
    ...otherProps
  } = props;

  return (
    <div
      className={`input-group has-validation rounded border ${
        showValidationInfo && (isValidated ? 'border-success' : 'border-danger')
      }`}
    >
      <div className="input-group-prepend">
        <span className="input-group-text p-0 border-0">
          {renderDropdown()}
        </span>
      </div>
      <input
        {...otherProps}
        className={`form-control border-0 ${
          showValidationInfo && (isValidated ? 'is-valid' : 'is-invalid')
        }`}
        name={name}
        id={id}
        placeholder={`Enter ${label}`}
        aria-label={`Enter ${label}`}
        required={required}
        onChange={handleInputChange}
      />
    </div>
  );
}

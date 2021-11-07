export default function FileInput(props) {
  const {
    name,
    id,
    label,
    onChange,
    hideLabel,
    required,
    browserValidate,
    isValid: isInputValid,
    errorMessage,
    successMessage,
    maxSizeMb,
    file,
    interacted,
    ...otherProps
  } = props;

  // determines if current input has required or regex props
  const shouldValidate = !browserValidate && required;

  // determines if current input should be validated, its value valid
  const isValidated = shouldValidate && isInputValid;

  // determines if to show validation messages
  const showValidationInfo = interacted && shouldValidate;

  // get size in MB of selected file if exists
  const currentFileSize = file ? file?.size / 1048576 : null;

  // format size to 2 decimal place
  const formattedSize = currentFileSize ? currentFileSize.toFixed(3) : '';

  // callback for when input changes
  const handleFileChange = (e) => {
    // get selected file
    let currentFile = e.target.files[0];

    // get selected file size
    const fileSizeMb = currentFile.size / 1048576;

    let isValid = true;

    // check if file is less/equal to maxSize
    isValid = fileSizeMb <= maxSizeMb;

    // check if the file is indeed pdf
    isValid = currentFile.type.includes('pdf');

    // reset selected file if there is an error
    if (!isValid) {
      e.target.value = '';
      currentFile = null;
    }

    // call onChange function with current data
    onChange(name, currentFile, isValid);
  };

  return (
    <div className="form-group">
      {!hideLabel && (
        <span className="input-label d-inline-block mb-2">{label}</span>
      )}
      <label className="file-attachment-input" htmlFor={id}>
        <span>{file?.name || 'Browse Your Files'}</span>
        <small className="d-block text-muted">
          {formattedSize || `Maximum file size ${maxSizeMb}`}
          MB
        </small>
        <input
          {...otherProps}
          id={id}
          name="file-attachment"
          type="file"
          className="file-attachment-input-label"
          onChange={handleFileChange}
        />
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

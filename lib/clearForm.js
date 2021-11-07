export default function clearForm(formElements) {
  const elements = formElements;

  for (let i = 0; i < elements.length; i += 1) {
    const fieldType = elements[i].type.toLowerCase();
    switch (fieldType) {
      case 'text':
      case 'email':
      case 'password':
      case 'textarea':
      case 'hidden':
      case 'url':
      case 'file':
      case 'tel':
        elements[i].value = '';
        break;
      case 'radio':
      case 'checkbox':
        if (elements[i].checked) {
          elements[i].checked = false;
        }
        break;
      case 'select-one':
      case 'select-multi':
        elements[i].selectedIndex = -1;
        break;
      default:
        break;
    }
  }
}

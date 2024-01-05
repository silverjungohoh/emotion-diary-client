import { useState } from 'react';

function useFormInput(init) {
  const [value, setValue] = useState(init);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange: handleChange };
}

export default useFormInput;

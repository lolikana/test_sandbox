import { ChangeEvent, useState } from 'react';

import Input from '../components/Input';

const InputCallbackPage = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <div>
      <Input handleChange={handleChange} inputValue={inputValue} />
    </div>
  );
};

export default InputCallbackPage;

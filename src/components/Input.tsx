import { ChangeEvent, FC } from 'react';

type Props = {
  handleChange: (event: ChangeEvent) => void;
  inputValue: string;
};

const Input: FC<Props> = props => {
  const { handleChange, inputValue } = props;

  return <input onChange={handleChange} value={inputValue} />;
};

export default Input;

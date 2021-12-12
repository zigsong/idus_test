import React, { TextareaHTMLAttributes, useEffect, useState } from 'react';

import Styled from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string;
  hasButton: boolean;
}

const Form = ({ defaultValue, hasButton, readOnly, disabled }: Props) => {
  const [value, setValue] = useState(defaultValue);
  const [wordCount, setWordCount] = useState(defaultValue.length);

  const handleInput: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setWordCount(value.length);
  }, [value]);

  return (
    <Styled.Root onSubmit={handleSubmit}>
      <Styled.Label htmlFor="review"></Styled.Label>
      <Styled.TextAreaWrapper>
        <Styled.TextArea
          id="review"
          value={value}
          onChange={handleInput}
          readOnly={readOnly}
          disabled={disabled}
        />
        <Styled.WordCount>{wordCount}</Styled.WordCount>
      </Styled.TextAreaWrapper>
      {hasButton && (
        <Styled.SubmitButton aria-label="save" disabled={!value}>
          Save
        </Styled.SubmitButton>
      )}
    </Styled.Root>
  );
};

export default Form;

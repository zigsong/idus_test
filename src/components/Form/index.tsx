import React, { TextareaHTMLAttributes, useEffect, useState } from 'react';

import Styled from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string;
  hasButton: boolean;
}

const Form = ({ defaultValue, hasButton, readOnly, disabled }: Props) => {
  const [value, setValue] = useState(defaultValue);
  const [wordCount, setWordCount] = useState(defaultValue?.length || 0);

  const handleInput: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    alert('입력 완료');
    setValue('');
  };

  useEffect(() => {
    setWordCount(value?.length || 0);
  }, [value]);

  return (
    <Styled.Root onSubmit={handleSubmit}>
      <Styled.Label htmlFor="review"></Styled.Label>
      <Styled.TextAreaWrapper>
        <Styled.TextArea
          id="review"
          value={value}
          placeholder={value ? value : '내용을 입력해주세요'}
          onChange={handleInput}
          readOnly={readOnly}
          disabled={disabled}
        />
        <Styled.WordCount>{wordCount}</Styled.WordCount>
      </Styled.TextAreaWrapper>
      {hasButton && (
        <Styled.SubmitButton aria-label="save" disabled={!value || value === defaultValue}>
          Save
        </Styled.SubmitButton>
      )}
    </Styled.Root>
  );
};

export default Form;

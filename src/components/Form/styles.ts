import PALETTE from 'constants/palette';
import styled from 'styled-components';

const Root = styled.form`
  min-height: 80px;
  height: 100%;
  display: flex;
`;

const Label = styled.label`
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
  position: absolute;
`;

const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextArea = styled.textarea<{ disabled: boolean }>`
  padding: 0.5rem;
  width: 100%;
  min-height: 100%;
  resize: none;
  color: ${({ disabled }) => disabled && `${PALETTE.RED.TEXT_400}`};
`;

const WordCount = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.35rem;
  color: ${PALETTE.GRAY.TEXT_400};
`;

const SubmitButton = styled.button`
  padding: 2rem 1.5rem;
  margin-left: 2px;
  color: ${PALETTE.BLUE.BUTTON_400};
  background: transparent;
  border: 1px solid ${PALETTE.GRAY.BORDER_400};
  border-radius: 2px;

  &:hover {
    background: ${PALETTE.GRAY.BG_400};
  }
`;

export default { Root, Label, TextAreaWrapper, TextArea, WordCount, SubmitButton };

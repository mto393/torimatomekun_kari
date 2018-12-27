import styled from 'styled-components';

const TextArea = styled.textarea`
  font-size: 14px;
  font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo;
  border: 1px solid #B9C9CE;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
  resize: none;
  width: 100%;
  height: ${props => props.Height || "35px"};
  &:focus {
    outline: 0;
  }
`;

export default TextArea;
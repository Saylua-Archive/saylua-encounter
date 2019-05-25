import { css } from 'lit-element';

export const ButtonSharedStyles = css`
  button {
    margin: 0.25em 4px;
    padding: 0.25em 8px;
    border-radius: 16px;
    font-size: 16px;
    border: 1px solid hsla(0, 0%, 0%, 0.15);
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.15);
    background: white;
    cursor: pointer;
    transition: background .2s ease-in-out,
      border-color .2s ease-in-out,
      color .2s ease-in-out;
  }

  button[disabled] {
    opacity: 0.5;
  }

  button:hover {
    background: #e7f8f6;
    border-color: hsla(165, 82%, 51%, 50%);
  }

  button:active {
    transform: translateY(2%);
  }
`;

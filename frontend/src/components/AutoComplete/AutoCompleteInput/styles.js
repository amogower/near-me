import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  input: {
    position: 'relative',
    zIndex: 1,
    display: 'inline-block',
    margin: '1em',
    maxWidth: '350px',
    width: 'calc(100% - 2em)',
    verticalAlign: 'top',
    overflow: 'hidden',
    background: '#FFF',
    borderRadius: '3px',
  },
  inputField: {
    position: 'relative',
    display: 'block',
    padding: '0.8em',
    border: 'none',
    borderRadius: 0,
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    WebkitAppearance: 'none',
    width: '100%',
    background: 'transparent',
    color: '#214e34',
    zIndex: 10,
    fontSize: '100%',
    fontWeight: 500,
    ':focus': {
      outline: 'none',
    },
  },
});

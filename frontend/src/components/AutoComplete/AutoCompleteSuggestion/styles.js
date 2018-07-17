import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  suggestion: {
    position: 'relative',
    zIndex: 1,
    display: 'block',
    margin: '1em auto',
    maxWidth: '500px',
    width: 'calc(100% - 2em)',
    verticalAlign: 'top',
    overflow: 'hidden',
    background: '#FFF',
    ':hover': {
      cursor: 'pointer',
    },
  },
  suggestion__active: {
    background: '#CCC',
  },
  suggestionInner: {
    position: 'relative',
    display: 'block',
    padding: '0.8em',
    border: 'none',
    borderRadius: 0,
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    WebkitAppearance: 'none',
    width: '100%',
    background: 'transparent',
    color: '#797693',
    zIndex: 10,
    fontSize: '100%',
    fontWeight: 500,
    ':focus': {
      outline: 'none',
    },
  },
});

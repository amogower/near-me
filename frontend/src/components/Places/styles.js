import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  card: {
    background: '#FFF',
    color: '#214e34',
    padding: '1em',
    width: '500px',
    margin: '0 auto 1em auto',
    textAlign: 'left',
    borderRadius: '3px',
  },
  cardTitle: {
    margin: 0,
    color: '#214e34',
  },
  group: {
    width: '80vw',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  places: {
    height: '650px',
    overflow: 'scroll',
  },
});

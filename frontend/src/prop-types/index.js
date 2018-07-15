
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';

export const suggestionType = shape({
  active: bool.isRequired,
  description: string.isRequired,
  formattedSuggestion: shape({
    mainText: string.isRequired,
  }),
  id: string.isRequired,
  index: number,
  matchedSubstrings: arrayOf(shape({
    length: number,
    offset: number,
  })),
  placeId: string.isRequired,
  terms: arrayOf(shape({
    offset: number.isRequired,
    value: string.isRequired,
  })),
  types: arrayOf(string),
});

export const suggestionsType = arrayOf(suggestionType);

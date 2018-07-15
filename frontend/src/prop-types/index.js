
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';

export const venueType = shape({
  id: string.isRequired,
  name: string.isRequired,
});

export const itemType = shape({
  venue: venueType.isRequired,
});

export const itemsType = arrayOf(itemType);

export const groupType = shape({
  items: itemsType.isRequired,
  name: string.isRequired,
  type: string.isRequired,
});

export const groupsType = arrayOf(groupType);

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

import deburr from "lodash/deburr";

export default function getSuggestions(props) {
  const {value, suggestions} = props
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          // substring match
          suggestion.label.toLowerCase().includes(inputValue)

          // full string match, from the start
          // suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

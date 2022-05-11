const RadioButtonGroup = () => {
  return (
    <ul>
      <li>
        <input
          type="radio"
          name="filter1"
          id="filter1-0"
          class="sr-only"
          checked
        />
        <label
          htmlhtmlFor="filter1-0"
          class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
          All
        </label>
        <div aria-hidden="true" class="filter-active"></div>
      </li>
    </ul>
  );
};

export default RadioButtonGroup;

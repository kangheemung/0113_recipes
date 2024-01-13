import React from 'react';

// Use forwardRef to provide ref to the parent component
const Form = React.forwardRef(({ search, updateSearch, getSearch }, ref) => {
  return (
    <form onSubmit={getSearch}>
      <input
        type="text"
        ref={ref} // Attach the forwarded ref to the input element
        value={search}
        onChange={updateSearch}
      />
      <button type="submit">検索！！Let's go！！！！</button>
    </form>
  );
});

export default Form;

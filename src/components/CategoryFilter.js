import React from "react";

function CategoryFilter({categories, handleCategoryClick}) {

  const buttons = categories.map((category) => {
    return <button key={category} onClick={handleCategoryClick}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;

import React from 'react'

const Recipe = ( {title,ingredients,calories,image}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
      {ingredients.map((ingredient, index) => ( // Make sure to return the list item
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories.toFixed(0)} cal</p> 
      <img src={image} alt={title} />
    </div>
  )
}

export default Recipe

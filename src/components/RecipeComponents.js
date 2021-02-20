import React from 'react';

const RecipesComponent = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} alt= "" />
    </div>
  )

}

export default RecipesComponent;
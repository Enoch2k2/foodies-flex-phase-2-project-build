import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const RecipeCard = ({ recipe }) => {
  return (
    <ListItem button>
      <ListItemText primary={ recipe.name } />
    </ListItem>
  )
}

export default RecipeCard

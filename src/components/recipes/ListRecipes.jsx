import React from 'react'
import RecipeCard from './RecipeCard'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListRecipes = ({ recipes }) => {
  const classes = useStyles();

  const recipeCards = recipes.map(recipe => <RecipeCard key={ recipe.id } recipe={ recipe } />)
  return (
    <div>
      <h1>List Recipes</h1>
      <List component="nav" aria-label="secondary mailbox folders">
        { recipeCards }
      </List>
    </div>
  )
}

export default ListRecipes

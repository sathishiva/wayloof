import React from 'react';
import './App.css';
import PrimarySearchAppBar from "./components/header/Header";
import Grid from "@material-ui/core/Grid";
import ComplexGrid from './components/list/ProductList'

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          {
            [1,2,3,4,5,6,7,8,9,10].map((item, index) => <ComplexGrid />)
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

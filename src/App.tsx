import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral" border="1px solid black">
        Nav area
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow" border="1px solid black">
          Aside area
        </GridItem>
      </Show>

      <GridItem area="main" bg="red" border="1px solid black">
        Main area
      </GridItem>
    </Grid>
  );
}

export default App;

import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  Container,
  CssBaseline,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  CardActions,
  footer
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./style";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>

        <main>
          <div>
            <Container maxWidth="sm" className={classes.container}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Album layout
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>

              <div className={classes.buttons}>
                <Grid container justify="center" spacing={2}>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      {" "}
                      See my photo
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      Secondary Action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>

          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image Title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Heading
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, cumque?
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        view
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>

        <footer className={classes.footer}>
            <Typography variant="h6" align="center">© by Kaniel, 2022</Typography>
            <Typography variant="subtitle1" align="center" color="textPrimary">Material-ui project</Typography>
        </footer>
      </>
    </div>
  );
};

export default App;

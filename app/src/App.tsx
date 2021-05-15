import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  useLocation,
} from 'react-router-dom';
import {
  Avatar,
  Box,
  Container,
  Grid,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { NavigationBar } from './components/navigation/NavigationBar';
import { LoginRoute } from './routes/LoginRoute';
import { SignUpRoute } from './routes/SignUpRoute';
import { SignInRoute } from './routes/SignInRoute';
import { PuzzleRoute } from './routes/PuzzleRoute';
import { ReplayRoute } from './routes/ReplayRoute';
import { AccountRoute } from './routes/AccountRoute';
import { AboutRoute } from './routes/AboutRoute';
import { PlayRoute } from './routes/PlayRoute';
import { RecoilRoute } from './providers/stateProvider';
import { BackgroundCircle } from './components/common/BackgroundCircle';
import { LoadingView } from './views/LoadingView';
import { isMobile } from 'react-device-detect';
import { SnackbarPresenter } from './presenters/SnackbarPresenter';
import { CommonModalPresenter } from './presenters/CommonModalPresenter';
import { Frame } from './components/mobileframe/Frame';
import { WelcomeCard } from './components/mobileframe/WelcomeCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      color: theme.palette.text.primary,
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    flexWrapper: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      flexWrap: 'wrap',
      position: 'relative',
      height: '100%',
      width: '100%',
    },
    container: {
      height: 'calc(100% - 60px)',
      top: -5,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%',
    },
    fillContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    browserWrapper: {
      height: 650,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      aspectRatio: '6 / 13',
      //cursor: 'none',

      backgroundImage: 'url(/iphone12maxpro.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      boxSizing: 'content-box',
      padding: 15,
      // transform: 'rotate(-35deg) skew(20deg, 5deg)',
    },
    browserContainer: {
      borderRadius: 40,
      height: 'calc(100% - 6px)',
      overflowY: 'auto',
      position: 'relative',
      scrollbarWidth: 'none', // only mozilla
      backgroundColor: theme.palette.background.default,
      maskImage: 'url(/mask.svg)',
      maskSize: 'cover',
      maskRepeat: 'no-repeat',
    },
    searchbar: {
      width: '100%',
      minHeight: 43,
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'content-box',
      backgroundColor: '#35373A',
      position: 'relative',
      zIndex: 30,
      paddingBottom: theme.spacing(0.5),
    },
    statusbar: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: theme.spacing(0.7),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(0.5),
      fontSize: '0.8em',
      color: theme.palette.text.primary,
    },
    adressbar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    adress: {
      display: 'flex',
      color: '#83E576',
      fontSize: '0.7em',
    },
    notifications: {
      display: 'flex',
      justifyContent: 'space-around',
      height: '1em',
      paddingTop: theme.spacing(0.5),
    },
    mobileContainer: {
      position: 'relative',
      height: '100%',
      width: '100%',
    },
    center: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    wrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      padding: theme.spacing(4),
    },
    info: {
      width: '36em',
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
      display: 'flex',
      borderRadius: theme.shape.borderRadius,
    },
    row: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    highlight: {
      color: theme.palette.primary.light,
    },
    leftContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  })
);

export const AppContainer = () => {
  const classes = useStyles();

  if (isMobile) {
    return (
      <Box className={classes.mobileContainer}>
        <App />
      </Box>
    );
  }
  return (
    <Container className={classes.center}>
      <Grid container direction="row-reverse" justify="space-evenly">
        <Frame>
          <App />
        </Frame>
        <WelcomeCard />
      </Grid>
    </Container>
  );
};

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <SnackbarPresenter />
      <CommonModalPresenter />
      <Router>
        <Box className={classes.background}>
          <Box className={classes.flexWrapper}>
            <Switch>
              <RecoilRoute path="/login">
                <Box className={classes.fillContainer}>
                  <Box maxWidth="sm">
                    <React.Suspense
                      fallback={<LoadingView message="Fetching state" />}
                    >
                      <Switch>
                        <RecoilRoute
                          exact
                          path="/login"
                          component={LoginRoute}
                        />
                        <RecoilRoute
                          exact
                          path="/login/sign-up"
                          component={SignUpRoute}
                        />
                        <RecoilRoute
                          exact
                          path="/login/sign-in"
                          component={SignInRoute}
                        />
                        <RecoilRoute>
                          <Redirect to="/login" />
                        </RecoilRoute>
                      </Switch>
                    </React.Suspense>
                  </Box>
                </Box>
              </RecoilRoute>
              <RecoilRoute path="/">
                <NavigationBar
                  menuItems={[
                    { title: 'Account', to: '/account' },
                    { title: 'Play', to: '/play' },
                    { title: 'About', to: '/about' },
                  ]}
                />
                <Box maxWidth="sm" className={classes.container}>
                  <React.Suspense
                    fallback={<LoadingView message="Fetching state" />}
                  >
                    <Switch>
                      <RecoilRoute
                        guarded
                        exact
                        path="/puzzle"
                        component={PuzzleRoute}
                      />
                      <RecoilRoute
                        guarded
                        path="/replay/:id"
                        component={ReplayRoute}
                      />
                      <RecoilRoute
                        guarded
                        exact
                        path="/account"
                        component={AccountRoute}
                      />
                      <RecoilRoute
                        guarded
                        exact
                        path="/about"
                        component={AboutRoute}
                      />
                      <RecoilRoute
                        guarded
                        exact
                        path="/play"
                        component={PlayRoute}
                      />
                      <RecoilRoute guarded exact path="/">
                        <Redirect to="/play" />
                      </RecoilRoute>
                    </Switch>
                  </React.Suspense>
                </Box>
              </RecoilRoute>
            </Switch>
          </Box>
        </Box>
        <BackgroundCircle />
      </Router>
    </>
  );
};

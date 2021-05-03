import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { LoadingAnimation } from './components/common/LoadingAnimation';
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      height: '100vh',
      width: '100vw',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      height: 'calc(100vh - 60px)',
    },
  })
);

export const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.background}>
        <Switch>
          <RecoilRoute path="/login">
            <Container maxWidth="sm" className={classes.container}>
              <React.Suspense fallback={<LoadingAnimation />}>
                <Switch>
                  <RecoilRoute exact path="/login" component={LoginRoute} />
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
            </Container>
          </RecoilRoute>
          <RecoilRoute guarded path="/">
            <NavigationBar
              menuItems={[
                { title: 'Account', to: '/account' },
                { title: 'Play', to: '/play' },
                { title: 'About', to: '/about' },
              ]}
            />
            <Container maxWidth="sm" className={classes.container}>
              <React.Suspense fallback={<LoadingAnimation />}>
                <Switch>
                  <RecoilRoute exact path="/puzzle" component={PuzzleRoute} />
                  <RecoilRoute exact path="/replay" component={ReplayRoute} />
                  <RecoilRoute exact path="/account" component={AccountRoute} />
                  <RecoilRoute exact path="/about" component={AboutRoute} />
                  <RecoilRoute exact path="/play" component={PlayRoute} />
                  <RecoilRoute exact path="/">
                    <Redirect to="/play" />
                  </RecoilRoute>
                </Switch>
              </React.Suspense>
            </Container>
          </RecoilRoute>
        </Switch>
      </div>
      <BackgroundCircle />
    </Router>
  );
};

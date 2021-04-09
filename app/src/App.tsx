import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { NavigationBar } from './components/navigation/NavigationBar';
import { LoginRoute } from './routes/LoginRoute';
import { SignUpRoute } from './routes/SignUpRoute';
import { SignInRoute } from './routes/SignInRoute';
import { PlayRoute } from './routes/PlayRoute';
import { GameRoute } from './routes/GameRoute';
import { ReplayRoute } from './routes/ReplayRoute';
import { SettingsRoute } from './routes/SettingsRoute';
import { ProfileRoute } from './routes/ProfileRoute';
import { RecoilRoute, RecoilSwitch } from './providers/stateProvider';
import { LoadingAnimation } from './components/common/LoadingAnimation';

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
        <RecoilSwitch>
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
          <RecoilRoute path="/" needAuth>
            <NavigationBar
              menuItems={[
                { title: 'Play', to: '/play' },
                { title: 'Profile', to: '/profile' },
                { title: 'Settings', to: '/settings' },
              ]}
            />
            <Container maxWidth="sm" className={classes.container}>
              <React.Suspense fallback={<LoadingAnimation />}>
                <Switch>
                  <RecoilRoute exact path="/game" component={GameRoute} />
                  <RecoilRoute exact path="/replay" component={ReplayRoute} />
                  <RecoilRoute
                    exact
                    path="/settings"
                    component={SettingsRoute}
                  />
                  <RecoilRoute exact path="/play" component={PlayRoute} />
                  <RecoilRoute exact path="/profile" component={ProfileRoute} />
                  <RecoilRoute>
                    <Redirect to="/login" />
                  </RecoilRoute>
                </Switch>
              </React.Suspense>
            </Container>
          </RecoilRoute>
        </RecoilSwitch>
      </div>
    </Router>
  );
};

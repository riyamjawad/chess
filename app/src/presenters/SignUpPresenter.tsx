import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilCallback, useRecoilValue } from 'recoil';

import { createUserWithEmailAndPassword } from '../services/firebase/auth';
import { getGravatarUrl } from '../services/gravatar';
import { userCollection } from '../services/firebase/storage';
import { loginStatusState } from '../state/authentication';
import { snackbarState } from '../state/snackbar';
import { userState } from '../state/user';
import { UserCredentials } from '../types/UserCredentials';
import { UserExtras } from '../types/UserExtras';
import { SignUpView } from '../views/SignUpView';

const nonApplicable = 'N/A';

export const SignUpPresenter = () => {
  const loginStatus = useRecoilValue(loginStatusState);
  const history = useHistory();
  const signUp = useRecoilCallback(
    ({ set }) => async (
      credentials: UserCredentials,
      extras: Partial<UserExtras>
    ) => {
      if (loginStatus in ['pending', 'success']) return;

      set(loginStatusState, 'pending');

      if (
        credentials === null ||
        credentials.email.trim() === '' ||
        credentials.password.trim() === ''
      ) {
        set(loginStatusState, 'fail');
        return;
      }

      const signUpResponse = await createUserWithEmailAndPassword(
        credentials
      ).catch((e) => {
        set(snackbarState, {
          open: true,
          severity: 'error',
          message: e.message,
        });
        set(loginStatusState, 'fail');
        return;
      });

      if (!signUpResponse || signUpResponse.user === null) {
        set(loginStatusState, 'fail');
        return;
      }

      const user = {
        id: signUpResponse.user.uid as string,
        email: signUpResponse.user.email as string,
        name: extras.name as string,
        phone: nonApplicable,
        avatar: getGravatarUrl({
          email: signUpResponse.user.email as string,
          defaultImage: 'robohash',
        }),
        team: nonApplicable,
      };
      // Creates a user-document and stores in on firestore
      await userCollection.set(signUpResponse.user.uid, {
        name: extras.name ? extras.name : user.name,
        team: extras.team ? extras.team : user.team,
        phone: extras.phone ? extras.phone : user.phone,
        avatar: extras.avatar ? extras.avatar : user.avatar,
      });

      set(loginStatusState, 'success');
      set(userState, user);
      history.push('/profile');
    }
  );
  return (
    <>
      <SignUpView
        onLoading={loginStatus === 'pending'}
        onSignUpAttempt={signUp}
      />
    </>
  );
};

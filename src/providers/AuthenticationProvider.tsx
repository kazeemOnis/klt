import React from 'react';
import {SplashScreen} from '../screens/SplashScreen';
import AppStorage from '../utils/appStorage';

interface AuthenticationInterface {
  isAuthenticated: boolean;
  country: string;
  signIn: Function;
  signOut: Function;
}

interface Action {
  type: 'SIGN_IN' | 'SIGN_OUT' | 'SET_LOADING';
  payload?: any;
}

const AuthenticationContext = React.createContext<AuthenticationInterface>({
  isAuthenticated: false,
  country: '',
  signIn: () => null,
  signOut: () => null,
});

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case 'SIGN_IN':
      return {
        ...state,
        isAuthenticated: true,
        country: action.payload.country,
      };
    default:
      return state;
  }
};

export const AuthenticationProvider = (props: {children?: React.ReactNode}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    isAuthenticated: false,
    country: '',
    isLoading: true,
  });

  const signIn = async (data: any) => {
    await AppStorage.storeString('country', data.country);
    dispatch({
      type: 'SIGN_IN',
      payload: {
        country: data.country,
      },
    });
  };

  const signOut = async () => {
    await AppStorage.removeValue('country');
    dispatch({type: 'SIGN_OUT'});
  };

  React.useEffect(() => {
    const getUser = async () => {
      const country = await AppStorage.getString('country');
      if (country) {
        signIn({country});
      } else {
        signOut();
      }
    };
    getUser();
    setTimeout(
      () =>
        dispatch({
          type: 'SET_LOADING',
          payload: {
            loading: false,
          },
        }),
      2250,
    );
  }, []);

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        country: state.country,
        signIn,
        signOut,
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  return React.useContext(AuthenticationContext);
};

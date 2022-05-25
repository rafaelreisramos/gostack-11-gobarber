import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { AuthProvider, useAuth } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('auth hook', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      user: {
        id: 'id',
        name: 'John Doe',
        email: 'john.doe@email.com',
      },
      token: 'token',
    };

    apiMock.onPost('/sessions').reply(200, apiResponse);

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { signIn } = result.current;

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    await act(() =>
      signIn({
        email: 'john.doe@email.com',
        password: '123456',
      }),
    );

    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:token',
      apiResponse.token,
    );
    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:user',
      JSON.stringify(apiResponse.user),
    );

    expect(result.current.user.email).toEqual('john.doe@email.com');
  });

  it('should retrive localStore when auth inits', () => {
    const signInData = {
      user: {
        id: 'id',
        name: 'John Doe',
        email: 'john.doe@email.com',
      },
      token: 'token',
    };

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@GoBarber:token':
          return signInData.token;
        case '@GoBarber:user':
          return JSON.stringify(signInData.user);
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { user } = result.current;

    expect(user.email).toEqual('john.doe@email.com');
  });

  it('should be able to sign out', () => {
    const signInData = {
      user: {
        id: 'id',
        name: 'John Doe',
        email: 'john.doe@email.com',
      },
      token: 'token',
    };

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@GoBarber:token':
          return signInData.token;
        case '@GoBarber:user':
          return JSON.stringify(signInData.user);
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { signOut } = result.current;

    act(() => {
      signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledWith('@GoBarber:token');
    expect(removeItemSpy).toHaveBeenCalledWith('@GoBarber:user');
    expect(result.current.user).toBeUndefined();
  });

  it('should be able update user data', () => {
    const userData = {
      id: 'id',
      name: 'John Doe',
      email: 'john.doe@email.com',
      avatar_url: 'avatar_url',
    };

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const { updateUser } = result.current;

    act(() => {
      updateUser(userData);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:user',
      JSON.stringify(userData),
    );
    expect(result.current.user).toEqual(userData);
  });
});

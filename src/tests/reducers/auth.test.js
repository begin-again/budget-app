/* eslint-env jest */
import authReducer from '../../reducers/auth';

describe('Auth Reducer', () => {
  it('should remove uid on logout', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: 0 }, action);

    expect(state).toEqual({});
  });
  it('should add uid on login', () => {
    const action = { type: 'LOGIN', uid: 1 };
    const state = authReducer({}, action);

    expect(state).toEqual({ uid: 1 });
  });
  it('should change uid on login', () => {
    const action = { type: 'LOGIN', uid: 1 };
    const state = authReducer({ uid: 0 }, action);

    expect(state).toEqual({ uid: 1 });
  });
  it('should return state on no action', () => {
    const action = { };
    const state = authReducer({ uid: 0 }, action);

    expect(state).toEqual({ uid: 0 });
  });
});

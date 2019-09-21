/* eslint-env jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  login, logout
} from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);
let store;
describe('Actions: Auth', () => {
  beforeEach(() => {
    store = createMockStore({});
  });
  it('should set up login action with passed in value', () => {
    store.dispatch(login(1));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'LOGIN',
      uid: 1
    });
  });
  it('should set up logout action', () => {
    store.dispatch(logout());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'LOGOUT'
    });
  });
});

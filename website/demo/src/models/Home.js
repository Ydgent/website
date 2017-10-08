
import * as homeService from '../services/home';

export default {
  namespace: 'home',
  state: {
    collapsed: false,
  },
  reducers: {
    save(state, { payload: { data: collapsed} }) {
      return { ...state, collapsed};
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/home') {
          dispatch({ type: 'home', payload: query });
        }
      });
    },
  },
};

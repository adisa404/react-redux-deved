import 'node-fetch';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';
import { loadTodos } from '../thunks';

describe('The loadTodos thunk', () => {
  it('Dispatches the correct actions in the success scenario', async () => {
    const fakeDispatch = sinon.spy();

    const fakeTodos = [{ text: '1' }, { text: '2' }];
    fetchMock.get('http://localhost:8080/todos', fakeTodos); // this is not pinging, it is just faking the call and the response

    const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' };
    const expectedSecondAction = {
      type: 'LOAD_TODOS_SUCCESS',
      payload: {
        todos: fakeTodos,
      },
    };

    await loadTodos()(fakeDispatch);

    // getCall(0) - first time the dispatch is called, args[0] - first argument
    // getCall(1) - second time the dispatch is called
    expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).toEqual(expectedSecondAction);

    // restore the fake fetch
    fetchMock.reset();
  });
});

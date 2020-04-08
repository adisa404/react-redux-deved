import { todos } from '../reducers';

describe('The todos reducer', () => {
  it('should add a new todo when CREATE_TODO action is recieved', () => {
    // agdje ga doda?
    const fakeTodo = { text: 'adisa1' };
    const fakeCreateTodoAction = fakeTodo => ({
      type: 'CREATE_TODO',
      payload: { todo: fakeTodo },
    });

    const initState = [];
    const expectedState = [fakeTodo];
    console.log('expected', expectedState);

    const actualState = todos(initState, fakeCreateTodoAction(fakeTodo));
    console.log('actual', actualState);
    // assert
    expect(actualState).toEqual(expectedState);
  });
});

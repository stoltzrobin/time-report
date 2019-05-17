const calendar = (state = [], action) => {
  switch (action.type) {
    case "ADD_TIME":
      return [
        ...state,
        {
          ...action.payload
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default calendar;

const todo = (todo = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...todo, action.payload];
    case "DELETE":
      return todo.filter((e) => {return e !== action.payload});
    case "CLEAR":
      return [];
    default:
      return todo;
  }
};

export default todo;
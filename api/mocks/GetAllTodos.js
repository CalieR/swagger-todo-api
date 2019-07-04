"use strict";

module.exports = {
  GetAllTodos: GetAllTodos
};

// acting as middleware so needs a next
function GetAllTodos(req, res, next) {
  res.json([
    {
      todo_id: 0,
      todo: "Get some milk",
      author: "Jim",
      createddate: "2019-07-04T14:23:00.000Z",
      duedate: "2019-07-05T14:23:00.000Z",
      completed: false
    },
    {
      todo_id: 1,
      todo: "Buy bread",
      author: "Mike",
      createddate: "2019-07-06T16:45:00.000Z",
      duedate: "2019-07-07T16:50:00.000Z",
      completed: false
    }
  ]);
}

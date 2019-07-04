"use strict";
var client = require("../helpers/es");

module.exports = {
  AddTodo: AddTodo
};

function AddTodo(req, res) {
  client.create(
    {
      index: AddTodo,
      type: "todo",
      id: req.swagger.params.todo.value.todo_id,
      body: req.swagger.params.todo.value
    },
    function(error, response) {
      res.header("Content-Type", "application/json");
      if (error) {
        console.log(error);
        res.statusCode = 409;
        res.end(JSON.stringify(error));
      } else {
        req.swagger.params.todo.value.datecreated = new Date();
        console.log(
          `Todo ${res.swagger.params.todo.value.todo_id} added to Elasticsearch`
        );
        res.end();
      }
    }
  );
}

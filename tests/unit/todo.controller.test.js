const todoController = require("../../controller/todo.controller")

describe("todo controller", () =>{
    it("should have a createTodo function", () =>{
        expect(typeof todoController.createTodo).toBe("function");
    })

    it("additon", () =>{
        expect(todoController.add(4, 3)).toBe(7)
    })
})
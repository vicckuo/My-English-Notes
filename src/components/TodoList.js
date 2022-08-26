import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {/* 當按下新增按鈕，創建一個新Todo */}
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} text1={todo.text1} />
                ))}
            </ul>

        </div>
    )
}

export default TodoList
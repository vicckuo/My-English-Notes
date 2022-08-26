const Todo = ({ text, text1, todo, todos, setTodos }) => {
    //刪除Events
    const deleteHandler = () => {
        //filer 检测数值元素，并返回符合条件所有元素的数组。
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    //完成Events
    const completeHandler = () => {
        //map 通过指定函数处理数组的每个元素，并返回处理后的数组。
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                //更改完成狀態
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <div className="todo">
            {/* 更改完成狀態的UI,如果是完成,class改為todo-item completed 或 空值 */}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text1}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo
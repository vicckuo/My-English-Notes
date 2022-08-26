const Form = ({ setInputText, setInputText1, todos, setTodos, inputText, inputText1, setStatus }) => {
    //這裡寫入任何js或function
    const inputTextHandler = (e) => {
        // e.target.value 獲取input輸入框的值
        setInputText(e.target.value) //調用來更新
    }
    const inputTextHandler1 = (e) => {
        setInputText1(e.target.value)
    }
    //新增button
    const submitTodoHandler = (e) => {
        e.preventDefault() //停用預設動作
        setTodos([
            //展開 傳遞array
            ...todos, { text: inputText, text1: inputText1, completed: false, id: Math.random() * 1000 },
        ])
        //輸入完一個後用於清空InputText內的value
        setInputText("")
        setInputText1("")
    }
    //狀態選擇框
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            {/* 對應上面Arrow Function */}
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="英文" />
            <input value={inputText1} onChange={inputTextHandler1} type="text" className="todo-input" placeholder="中文" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">全部</option>
                    <option value="completed">已學習</option>
                    <option value="uncompleted">未學習</option>
                </select>
            </div>
        </form>
    )
}

export default Form
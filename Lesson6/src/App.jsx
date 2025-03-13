import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])



  return (
    <>
        <Header/>
        <main>
            <TodoForm handleSubmit={handleSubmit}/>
            {todos.length === 0 ? (
                <p>No data</p>
            ) : (
                    //TODOS render du lieu
                <div className="container">
                    {todos.map((item) => (
                        <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        handleTaskChecked={item.handleTaskChecked}
                        />
                    ))}
                </div>
            )}
        </main>
        <Footer/>
    </>
  );
}

export default App

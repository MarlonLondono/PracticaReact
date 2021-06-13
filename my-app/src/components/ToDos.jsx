import React, {useState} from 'react';
import Todo from './Todo';

export default function ToDos(){
    const [ToDos,setToDos] = useState([]);

    function agregar(value){
        setToDos(oldTodos => [...oldTodos, value])
    }

    console.log(ToDos);
    // const Lista = ToDos.map((todo) => {
    //     return(
    //         <li> {todo} </li>
    //     )
    // })
    return (
        <div>
            <Todo agregar={agregar} />
            <div>
                    <h2>Lista</h2>
                    <ul>
                        {ToDos.map((todo) => {
                            return (
                                <li>{todo}</li>
                            )
                        })}
                    </ul>
            </div>
        </div>
    )
}
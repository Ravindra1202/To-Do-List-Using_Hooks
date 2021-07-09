import React,{useState} from 'react'
import ToDoPrint from './ToDoPrint';
 export const ToDoList=()=>{
     const [input, setInput] = useState("");

     const[item,SetItem]=useState([]);


     const ItemEvent=(event)=>{
         setInput(event.target.value);

     }
     const AddList =()=>{

        SetItem((oldItems)=>{
            return [...oldItems,input]
        })
        setInput("")
     }

     const DeleteItems=(id)=>{
        console.log("deleted");
        SetItem((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
                return index !==id;
            })
        })

    }
     return(
         <div className="Todolist">
             <div className="deader">
                 <br/>
                 <h1>TODO List</h1>
                 <br/>
                 <input type="text" placeholder="Add item" onChange={ItemEvent} value={input}/>
                 <button onClick={AddList}> + </button>

                 <ol>
                    {item.map((itemval,index)=>{
                        return <ToDoPrint
                        text={itemval}
                        key={index}
                        id={index}
                        onSelect={DeleteItems}
                        />;
                    })}
                 </ol>
             </div>
         </div>
     );
 }
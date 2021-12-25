import React, {useState, useEffect} from 'react'
import './style.css';

const getLocalData=()=>{
    const list= localStorage.getItem("mytodo");
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}

const Todo = () => {
    const [inputdata, setInputdata] = useState("");
    const [item, setItem] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [togglButton, settoggleButton] = useState(false);

    const addItem = () =>{
        if(!inputdata)
    {
        alert ("please fill the data");
    } else if(inputdata && togglButton){
        setItem(
            item.map((curElem)=>{
               if(curElem.id === isEditItem){
                   return {...curElem, name:inputdata}
               }
               return curElem;
            })
        )
        setInputdata("");
        setIsEditItem(null);
        settoggleButton(false);
    } 
    
    else{
        const myNewInputData ={
            id: new Date().getTime().toString(),
            name: inputdata,
        };
        setItem([...item, myNewInputData]);
        setInputdata("");
    }
};
        
        const deleteItem =(index)=>{
            const updatedItem = item.filter((curElem)=>{
            return curElem.id !== index;
            }
            );
            setItem(updatedItem);
        };
      const removeAll= ()=>{
          setItem([]);
      };

      useEffect(()=>{

      localStorage.setItem("mytodo", JSON.stringify(item));
          
      }, [item])

      const editItem = (index)=>{
          const item_todo_edited = item.find((curElem)=>{
              return curElem.id ===index;
          }
          );
          setInputdata(item_todo_edited.name);
          setIsEditItem(index);
          settoggleButton(true);
      }

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='../images/todo.svg' alt="todologo" />
              <figcaption>Add Your List Here ✌ </figcaption>
             </figure>
             <div className='addItems'>
<input type="text" placeholder='✍ Add Item' className='form-control' value={inputdata} onChange={(event)=>setInputdata(event.target.value)} />
             { 
                togglButton?(
             <i class="fa fa-edit add-btn" onClick={addItem} ></i>):
            ( <i class="fa fa-plus add-btn" onClick={addItem} ></i>)
                }

              </div>

              <div className='showItems'>
                  { item.map((curElem)=>{
                      return(
                        <div className='eachItem' key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className='todo-btn'>
                            <i className="far fa-edit add btn" onClick={()=>editItem(curElem.id)}></i>
                            <i className="far fa-trash-alt  add btn" onClick={()=>deleteItem(curElem.id)}></i>
                        </div>
                        </div>
                      );
                  })}</div>

            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                    <span >check list</span>
                </button>
            </div>
            </div>

            </div>
        </>
    )
}

export default Todo

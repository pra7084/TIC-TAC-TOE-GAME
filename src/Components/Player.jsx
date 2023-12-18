import {useState} from 'react';
const Player = (props) => {
    const [newName,setNewName]=useState(props.name);
    const [editable,setEditable]=useState(false);
    const editHandler=()=>{
           setEditable((edit)=>!edit);
    }
    const onChangeHandler=(event)=>{
        setNewName(event.target.value)
    }
    let playerName=<span className="player-name">{newName} </span>;
    if(editable===true){
        playerName=<input type="text" onChange={onChangeHandler}required value={newName} ></input>;
    }
  return (
    <li>
      <span className="player">
      {playerName}
      <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={editHandler}>{editable? "Save":"Edit"}</button>
    </li>
  );
};
export default Player;

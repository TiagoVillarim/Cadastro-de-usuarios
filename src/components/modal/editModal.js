import React, { useState } from "react";
import { userContext } from "../context/useContext";
import ModalStyle from "../styles/modal.scss";

export default function Modal(props) {
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");

  const {
    setShowModal,
    userList,
    setUserList,
  } = React.useContext(userContext);

  const users = {
    name: name,
    age: age,
    job: job,
    email: email
  }

  function onSubmit() {
    if(name < 1 || name === undefined || age < 1 || age === undefined || 
      job < 1 || job === undefined || email < 1 || email === undefined) {
        alert("Opa, parece que você esqueceu de algo, tente novamente");
      }else{
        setUserList([...userList, {users}]);
        setName("");
        setEmail("");
        setAge("");
        setJob("")
        setShowModal(false);
      };
  };

  if(!props.showModal) {
    return null;
  };


  return(
    <div className="modal">
      <div className="modal-content">
        <div className="inputs-section">
          <input type="text" placeholder="Name:" value={name} onChange={event => setName(event.target.value)} className="inputs"/>
          <input type="number" placeholder="Age:" value={age} onChange={event => setAge(event.target.value)} className="inputs"/>
          <input type="text" placeholder="Email:" value={email} onChange={event => setEmail(event.target.value)} className="inputs"/>
          <input type="text" placeholder="Job:" value={job} onChange={event => setJob(event.target.value)} className="inputs"/>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={() => setShowModal(false)}>Close</button>
          <button className="button" onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}
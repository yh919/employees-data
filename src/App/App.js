import React, {useState} from 'react';
import styles from './App.module.css';
import './App.module.css'
import Filter from '../Components/Filter/Filter'
import CardList from '../Components/CardList/CardList';
import Modal from '../Components/Modal/Modal'

function App() {

  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState('');
  const [showModal , setShowModal] = useState(false);
  const [data, setData] = useState([
    {
      id : 1, 
      name: "Ahmed",
      age: 21,
      title: "Front-End",
      salary: 8500,
      skills: ["HTML","CSS","JS"],
      type: "male"
    },
    {
      id : 2,
      name: "Mohamed",
      age: 23,
      title: "Back-End",
      salary: 7000,
      skills: ["HTML","CSS","PHP"],
      type: "male"
    },
    {
      id : 3,
      name: "Esraa",
      age: 24,
      title: "UI Designer",
      salary: 6000,
      skills: ["HTML","CSS","Graphic Design"],
      type: "female"
    },
    {
      id: 4,
      name: "Mena",
      age: 23,
      title: "Full Stack",
      salary: 10000,
      skills: ["HTML","CSS","JS","PHP"],
      type: "female"
    },
    {
      id: 5,
      name: "Sarah",
      age: 26,
      title: "Project Manager",
      salary: 9000,
      skills: ["HTML","CSS","JS","PHP","UML","Agile"],
      type: "female"
    },
    {
      id: 6,
      name: "John",
      age: 35,
      title: "CTO",
      salary: 25000,
      skills: ["HTML","CSS","JS","PHP","UML","Agile ","Leadership"],
      type: "male"
    },
  ]
  )

  

  const deleteHandler =  (e , selectedID) => {
    setData((prevState) => {
      return prevState.filter((e) => e.id !== selectedID)
    });
  }

  const toggleHandler = () => {
    setCardToggle(!cardToggle)
  }

//   const testHandler = () => {
//   console.log(inputEl.current.value);
// }

  const filterNames = (name) => {
    setFilter(name)
  }

  const namesHandler = () => {
    if (filter.length !== 0) {
      return data.filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()))
    } else {
      return data;
    }
  }

  return (
    <div className={styles.mainContainer}>
      <Modal show={showModal} close={() => setShowModal(false)} />
      <h1>Employees Data</h1>
      <div className={styles.buttonContainer}>
      <button
        className={styles.toggleButton}
        onClick={() => toggleHandler()}
      >
        {cardToggle ? "Hide Names" : "Show Names"}</button>
      <button
          className={styles.newRecord}
          onClick={() => setShowModal(true)}
      > New Record </button>
      </div>
        <div
        className={(cardToggle) ? styles.show : styles.hide}>
        <Filter
          filteration={filterNames} listName={data} />
        <CardList
          listName={namesHandler()}
          deleteFunc={deleteHandler} />
      </div>
      </div>
  );
}

export default App;

import React, {useState} from 'react';
import styles from './App.module.css';
import './App.module.css'
import Filter from '../Components/Filter/Filter'
import CardList from '../Components/CardList/CardList';
import Modal from '../Components/Modal/Modal'
import Button from '../Components/Layout/Button';
import AddUser from '../Components/AddUser/AddUser';

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
      type: "male"
    },
    {
      id : 2,
      name: "Mohamed",
      age: 23,
      title: "Back-End",
      type: "male"
    },
    {
      id : 3,
      name: "Esraa",
      age: 24,
      title: "UI Designer",
      type: "female"
    },
    {
      id: 4,
      name: "Mena",
      age: 23,
      title: "Full Stack",
      type: "female"
    },
    {
      id: 5,
      name: "Sarah",
      age: 26,
      title: "Project Manager",
      type: "female"
    },
    {
      id: 6,
      name: "John",
      age: 35,
      title: "CTO",
      salary: 25000,
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
    <>
    <div className={styles.mainContainer}>
      <h1>Employees Data</h1>
      <div className={styles.buttonContainer}>
        <Button onClick={() => toggleHandler()}>
          {cardToggle ? "Hide Names" : "Show Names"}
      </Button>
        <Button onClick={() => setShowModal(true)}>
          New Record
        </Button>
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
    <Modal show={showModal} close={() => setShowModal(false)}> <AddUser /> </Modal>      
    </>
  );
}

export default App;

import React, {useState} from 'react';
import styles from './App.module.css';
import './App.module.css'
import Card from '../Card/Card';
import Filter from '../Filter/Filter'

function App() {

  const [cardToggle, setCardToggle] = useState(true);
  const [filter , setFilter] = useState('');
  const [data, setData] = useState([
    {
      name: "Ahmed",
      age: 21,
      title: "Front-End",
      salary : 8500,
      type: "male"
    },
    {
      name: "Mohamed",
      age: 23,
      title: "Back-End",
      salary : 7000,
      type: "male"
    },
    {
      name: "Esraa",
      age: 21,
      title: "Ui Designer",
      salary : 6000,
      type: "female"
    },
    {
      name: "Mena",
      age: 21,
      title: "Full Stack",
      salary : 10000,
      type: "female"
    },
    {
      name: "Sarah",
      age: 21,
      title: "Project Manager",
      salary : 9000,
      type: "female"
    },
  ]
  )

  const deleteHandler =  (e , clickedIndex) => {
    setData((prevState) => {
      return prevState.filter((e,i) => i !== clickedIndex)
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
      <h1>Employees Data</h1>
      <button
        className={styles.toggleButton}
        onClick={() => toggleHandler()}
      >
        {cardToggle ? "Hide Names" : "Show Names"}</button>
      <div
        className={(cardToggle) ? styles.show : styles.hide}>
        <Filter
          filteration={filterNames} listName={data} />
        <Card
          listName={namesHandler()}
          deleteFunc={deleteHandler} />
      </div>
      </div>
  );
}

export default App;

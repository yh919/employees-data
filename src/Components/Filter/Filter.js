import React, {useState} from "react";
import styles from './Filter.module.css'

const Filter = ({ filteration }) => {
    const [filter, setFilter] = useState('');

    const filterHandler = (e) => {
        const name = e.target.value
        setFilter(name);
        filteration(name)
    }
    
    const clearHandler = (e) => {
        const name = e.target.value
        setFilter(name);
        filteration(name);
    }


    return (
        <>
            <div className={styles.mb}>
                <input
                    className={styles.filter}
                    type='text'
                    placeholder='filter by names'
                    value={filter}
                    onChange={filterHandler} />
                <button className={styles.clearBtn} onClick={(e) => clearHandler(e)}> Clear </button>
            </div>

        </>
    )

}

export default Filter;
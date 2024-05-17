import React, { useState } from 'react'
import styles from './Table.module.css'
import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteSweep, MdDone } from 'react-icons/md';

const Table = (props) => {
    const [editActive, setEditActive] = useState(false);
    const { currentData, error} = props;
    
    return (
        <div className={styles.tablewrapper}>
            {
                error ? (
                    <h2>Unable to fetch users data, please try again later</h2>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th><strong>ID</strong></th >
                                <th><strong>Name</strong></th>
                                <th><strong>Email</strong></th>
                                <th><strong>Department</strong></th>
                                <th><strong>Actions</strong></th>
                            </tr >
                        </thead >
                        <tbody>
                            {
                                currentData.map((row, ind) => (
                                    <tr key={ind}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.company['bs'].split(' ').join(', ')}</td>
                                        <td>
                                            <button className={styles.edit} onClick={() => setEditActive(prev => !prev)}>
                                                {
                                                    editActive ? <MdDone />: <FaUserEdit />
                                                }
                                            </button>
                                            <button className={styles.delete}><MdDeleteSweep /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table >
                )
            }
        </div >
    )
}

export default Table
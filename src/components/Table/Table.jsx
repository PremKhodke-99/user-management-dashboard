import React from 'react'
import styles from './Table.module.css'
import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteSweep } from 'react-icons/md';

const Table = (props) => {
    const { data, error } = props;
    console.log(data);
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
                                data.map((row, ind) => (
                                    <tr>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.email}</td>
                                        <td>{row.company['bs'].split(' ').join(', ')}</td>
                                        <td>
                                            <button className={styles.edit}><FaUserEdit /></button>
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
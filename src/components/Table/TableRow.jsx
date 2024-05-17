import React, { useState } from 'react'
import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteSweep, MdDone } from 'react-icons/md';
import styles from './Table.module.css'

const TableRow = ({ data, editHandler, deleteHandler }) => {

    const [editActive, setEditActive] = useState(false);

    const [nameVal, setNameVal] = useState(data.name);
    const [emailVal, setEmailVal] = useState(data.email);
    const [deptVal, setDeptVal] = useState(data.company['bs']);


    return (
        <tr>
            <td>{data.id}</td>
            <td>
                {
                    editActive ? (
                        <input
                            type='text'
                            value={nameVal}
                            onChange={(e) => setNameVal(e.target.value)}
                            className={styles.input}
                        />
                    ) : (
                        data.name
                    )
                }
            </td>
            <td>
                {
                    editActive ? (
                        <input
                            type='text'
                            value={emailVal}
                            onChange={(e) => setEmailVal(e.target.value)}
                            className={styles.input}
                        />
                    ) : (
                        data.email
                    )
                }
            </td>
            <td>
                {
                    editActive ? (
                        <input
                            type='text'
                            value={deptVal}
                            onChange={(e) => setDeptVal(e.target.value)}
                            className={styles.input}
                        />
                    ) : (
                        data.company['bs'].split(" ").join(", ")
                    )
                }
            </td>
            <td>
                <button className={styles.edit} onClick={() => {
                    if (editActive === false) {
                        setEditActive(true)
                    } else {
                        setEditActive(prev => !prev);
                        editHandler(data.id, { nameVal, emailVal, deptVal });
                    }
                }}>
                    {
                        editActive ? <MdDone /> : <FaUserEdit />
                    }
                </button>
                <button
                    className={styles.delete}
                    onClick={() => deleteHandler(data.id)}
                >
                    <MdDeleteSweep />
                </button>
            </td>
        </tr>
    )
}

export default TableRow
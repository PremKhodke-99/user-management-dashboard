import React from 'react'
import styles from './Table.module.css'
import TableRow from './TableRow';

const Table = ({ currentData, error, editHandler, deleteHandler }) => {

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
                                currentData.map((row) => (
                                    <TableRow
                                        data={row}
                                        key={row.id}
                                        editHandler={editHandler}
                                        deleteHandler={deleteHandler}
                                    />
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
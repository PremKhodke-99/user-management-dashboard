import React, { useState } from 'react'
import styles from './Form.module.css'

const Form = ({ data, setData, setFormActive }) => {

  const [details, setDetails] = useState({
    id: '',
    name: '',
    email: '',
    company: {
      bs: ''
    }
  });

  /**
   * 
   * handleChange function handles the changes made in input field and updates it in useState
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'company["bs"]') {
      setDetails({ ...details, company: { 'bs': value } });
    } else {
      setDetails({ ...details, [name]: value });
    }
  }

  /**
   * 
   * handleSubmit adds the new user into the list
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details.name.length) {
      alert('Please enter a valid name');
      return;
    }

    if (!details.email.length) {
      alert('Please enter an email');
      return;
    }

    setData([...data, details]);

    setDetails({
      id: '',
      name: '',
      email: '',
      company: {
        bs: ''
      }
    });
    setFormActive(prev => !prev)
    alert('User Added')
    console.log(details);
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
        <h1>Enter user details</h1>
        <form className={styles.formstyle} onSubmit={handleSubmit}>
          <div className={styles.innerDiv}>
            <label htmlFor="id"><strong>ID:</strong></label>
            <input
              type="text"
              id='id'
              name='id'
              value={details.id}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.innerDiv}>
            <label htmlFor="id"><strong>Full Name:</strong></label>
            <input
              type="text"
              id='name'
              name='name'
              value={details.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.innerDiv}>
            <label htmlFor="id"><strong>Email:</strong></label>
            <input
              type="text"
              id='email'
              name='email'
              value={details.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.innerDiv}>
            <label htmlFor="id"><strong>Department:</strong></label>
            <input
              type="text"
              id='department'
              name='company["bs"]'
              value={details.company['bs']}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <button type='submit' className={styles.submit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form
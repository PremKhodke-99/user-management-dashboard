import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios";
import Table from "./components/Table";

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <Table data={data} error={error}/>
    </div>
  )
}

export default App

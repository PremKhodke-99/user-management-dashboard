import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [formActive, setFormActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 4;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const nPages = Math.ceil(data.length / dataPerPage);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  console.log(data)

  return (
    <div>
      <Navbar formActive={formActive} setFormActive={setFormActive} />

      {
        !formActive ? (
          <>
            <Table
              currentData={currentData}
              error={error}
            />
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <Form
            data={data}
            setData={setData}
            setFormActive={setFormActive}
          />
        )
      }


    </div>
  )
}

export default App

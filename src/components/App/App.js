import React from 'react';
import './App.css';
import DataList from '../DataList/DataList';
import { api } from '../../api/api';

function App() {
  const [data, setData] = React.useState([])
  const [name, setName] = React.useState('')
  const [age, setAge] = React.useState('')

  function changeName(e) {
    setName(e.target.value)
  }

  function changeAge(e) {
    setAge(e.target.value)
  }

  React.useEffect(() => {
    api.getData()
      .then(res => setData(res))
  }, []);

  function addData(e) {
    e.preventDefault()
    api.loadNewData(name, age)
      .then(() => {
        api.getData()
          .then(res => setData(res))
      })
      .catch(err => console.log(err))
  }


  function updateData(id, newName, newAge) {
    api.updateData(id, newName, newAge)
      .catch(err => console.log(err))
  }

  function deleteData(id) {
    api.deleteData(id)
      .then(() => {
        const newData = data.filter(
          (item) => item._id !== id
        )
        setData(newData);
      })
  }

  return (
    <div className="App">
      <form className="form" onSubmit={addData}>
        <input className="form__input" onChange={changeName} placeholder="Имя" required></input>
        <input className="form__input" onChange={changeAge} placeholder="Возраст" required></input>
        <button className="form__button" type="submit">Добавить</button>
      </form>
      <DataList updateData={updateData} deleteData={deleteData} data={data} />
    </div>
  );
}

export default App;

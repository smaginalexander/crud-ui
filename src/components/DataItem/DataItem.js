import React from 'react';
import './DataItem.css';

function DataItem({ item, deleteData, updateData }) {
    const [activeUpdate, setActiveUpdate] = React.useState(false)
    const [newNameValue, setNewNameValue] = React.useState(item.data.name)
    const [newAgeValue, setNewAgeValue] = React.useState(item.data.age)


    function changeUpdatedName(e) {
        setNewNameValue(e.target.value)
    }
    function changeUpdatedAge(e) {
        setNewAgeValue(e.target.value)
    }

    function updateClick() {
        updateData(item._id, newNameValue, newAgeValue)
        setActiveUpdate(false)
    }

    function onRedactBtn() {
        setActiveUpdate(true)
    }

    function onDeleteClick() {
        deleteData(item._id);
    }

    return (
        <tr>
            {activeUpdate ?
                <>
                    <td><input className='table__input table__input_active' value={newNameValue} onChange={changeUpdatedName}></input></td>
                    <td><input className='table__input table__input_active' value={newAgeValue} onChange={changeUpdatedAge}></input></td>
                </>
                :
                <>
                    <td><input className='table__input' value={newNameValue} onChange={changeUpdatedName} readOnly></input></td>
                    <td><input className='table__input' value={newAgeValue} onChange={changeUpdatedAge} readOnly></input></td>
                </>
            }
            <td>
                <div className="buttnon-container">
                    <button className="buttnon-container__button buttnon-container__button_type_delete" onClick={onDeleteClick}>Удалить</button>
                    {activeUpdate ?
                        <button className="buttnon-container__button buttnon-container__button_type_save" onClick={updateClick}>Сохранить</button>
                        :
                        <button className="buttnon-container__button buttnon-container__button_type_edit" onClick={onRedactBtn}>Редактировать</button>
                    }
                </div>
            </td>
        </tr>
    );
}

export default DataItem;
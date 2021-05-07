import React from 'react';
import './DataList.css';
import DataLItem from '../DataItem/DataItem';

function DataList({ data, deleteData, updateData }) {
    return (
        <div div className="data-list" >
            <table>
                <tbody>
                    <tr className="table-headers"><th>имя</th><th>возраст</th></tr>
                    {
                        data.map((item) => (
                            <DataLItem key={item._id} item={item} deleteData={deleteData} updateData={updateData} />
                        ))
                    }
                </tbody>
            </table>
        </div >
    );
}
export default DataList;
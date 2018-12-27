import React from 'react';
import { Button } from './Button';
import Table from './Table';

const HistoryTable = (props) => {
  return(
    <Table>
      <TableHead title={props.title} />
      <TableBody data={props.data} />
    </Table>
  )
}

const TableHead = (props) => {
  var tableTtl = props.title.map((cName, i)=>
    <th key={i}>{cName}</th>
  )
  return(
    <thead><tr>{tableTtl}</tr></thead>
  )
}

const click =(e,props,type)=> {
  e.preventDefault();
  window.location.href = "/"+ type + "?id=" + props.id;
}

const TableBody = (props) => {
  var tableRow = props.data.map(function(tdata){
    return (
      <tr key={tdata.id}>
        <td>{tdata.title}</td>
        <td>{tdata.date}</td>
        <td>
          <Button onClick={e => click(e, tdata, "create")} primary>コピー</Button>
          <Button onClick={e => click(e, tdata, "edit")} primary>編集</Button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{tableRow}</tbody>
  )
}

export default HistoryTable;
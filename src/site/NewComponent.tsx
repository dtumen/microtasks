import React from 'react';

type StudentType = {
  id: number
  name: string
  age: number
}

type NewComponentPropsType = {
  students: Array<StudentType>
}

export const NewComponent = ({ students }: NewComponentPropsType) => {

  const topCars = [
    { id: 1, manufacturer: 'BMW', model: 'm5cs' },
    { id: 2, manufacturer: 'Mercedes', model: 'e63s' },
    { id: 3, manufacturer: 'Audi', model: 'rs6' },
  ]

  return (
    <>
      <table style={{ border: '1px solid red' }}>
        <tr style={{ display: 'flex', gap: '10px', margin: '30px', width: '400px', justifyContent: 'space-between', padding: '10px'}}>
          <th>id</th>
          <th>Manufacturer</th>
          <th>Model</th>
        </tr>
        {topCars.map(t => (
          <tr key={t.id} 
          style={{ 
            display: 'flex', 
            gap: '10px', 
            margin: '30px', 
            width: '400px', 
            justifyContent: 
            'space-between', 
            border: '1px solid blue',
            borderRadius: '10px',
            padding: '10px'
            }}>

            <td>{t.id}</td>
            <td>{t.manufacturer}</td>
            <td>{t.model}</td>
          </tr>
        ))}
      </table>


      <ul style={{ listStyle: 'none', textAlign: 'center' }}>
        {students && students.map(s => (
          <li key={s.id} style={{ border: '1px solid black', width: '150px' }}>
            <p>Name: <b>{s.name}</b></p>
            <p>Age: <b>{s.age}</b></p>
          </li>
        ))}
      </ul>
    </>
  );
};
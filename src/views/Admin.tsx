import { Link } from "react-router-dom";

export default function Admin() {
  const data = [
    // Your data goes here, each row as an array
    ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8", "Col 9", "Col 10","Col 11"],
    ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8", "Col 9", "Col 10","Col 11"],
    ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8", "Col 9", "Col 10","Col 11"],
    ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8", "Col 9", "Col 10","Col 11"],
    // ... more rows
  ];

  const columns = [
    // Define your column names and any custom rendering functions
    { title: 'Folio', key: 'col1' },
    { title: 'Autobus', key: 'col2' },
    { title: 'Falla', key: 'col3' },
    { title: 'Status', key: 'col4' },
    { title: 'Supervisor', key: 'col5' },
    { title: 'Creada', key: 'col6' },
    { title: 'Asignada', key: 'col7' },
    { title: 'Técnico', key: 'col8' },
    { title: 'Cerrada', key: 'col9' },
    { title: 'Tiempo de Atencion (H)', key: 'col10' },
    { title: 'Operacion', key: 'col10' },
    
  ];
  return (
    <>
    <div className="flex justify-between bg-ortgray-300">
      <h2 className="text-4xl font-black text-ortgray-700">Incidencias</h2>
      <Link 
        to="/manager/newuser"
        className="rounded-md bg-ortindig-700 p-3 text-sm font-bold text-white shadow-sm hover:bg-ortindig-800"
      >
        Usuarios
      </Link>
      <Link 
        to="#"
        className="rounded-md bg-ortindig-700 p-3 text-sm font-bold text-white shadow-sm hover:bg-ortindig-800"
      >
        Fallas
      </Link>
      <Link 
        to="#"
        className="rounded-md bg-ortindig-700 p-3 text-sm font-bold text-white shadow-sm hover:bg-ortindig-800"
      >
        Autobuses
      </Link>
      <Link 
        to="#"
        className="rounded-md bg-ortindig-700 p-3 text-sm font-bold text-white shadow-sm hover:bg-ortindig-800"
      >
        Organismos
      </Link>
    </div>
    <div className="flex py-3">
    <table>
      <thead >
        <tr >
          {columns.map((col) => (
            <th key={col.key} className="border border-ortgray-800">{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row[0]} >
            {row.map((cell, index) => (
              <td key={index} className="border border-ortgray-800">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </>
  )
}

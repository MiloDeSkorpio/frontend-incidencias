import { Link } from "react-router-dom";

export default function Users() {
  const data = [
    // Your data goes here, each row as an array
    ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8", "Col 9", "Col 10"],
    ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8", "Col 9", "Col 10"],
    ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8", "Col 9", "Col 10"],
    ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6", "Col 7", "Col 8", "Col 9", "Col 10"],
    // ... more rows
  ];

  const columns = [
    // Define your column names and any custom rendering functions
    { title: 'ID', key: 'col1' },
    { title: 'Nombre', key: 'col2' },
    { title: 'Apellido', key: 'col3' },
    { title: 'Telefono', key: 'col4' },
    { title: 'email', key: 'col5' },
    { title: 'Tipo', key: 'col6' },
    { title: 'Organismo', key: 'col7' },
    { title: 'Activo', key: 'col8' },
    { title: 'Operacion', key: 'col9' },
  ];
  return (
    <div className="mx-auto rounded-md pt-3 w-[95vw] sm:max-w-6xl h-auto p-5 bg-[rgba(173,175,179,0.65)] backdrop-blur-lg shadow">
      <div className="flex justify-between">
        <h2 className="text-2xl text-center font-extrabold text-ortgray-950 ">
          Usuarios
        </h2>
        <Link
          to="/manager/new-user"
          className="rounded-md border-2 border-ortindig-800 p-3 text-sm font-bold text-ortgray-900 shadow-sm hover:bg-ortindig-800 hover:text-white"
        >
          Crear Usuario
        </Link>
      </div>
      <table className="shadow">
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
  );
}

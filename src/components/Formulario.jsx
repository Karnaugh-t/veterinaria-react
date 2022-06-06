import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {

    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setNombrePropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])


  const generarId = () => {
    const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    return id
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fechaAlta, sintomas].includes("")) {
      return setError(true);
    }

    const objetoPacientes = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas
    }

    if (paciente.id) {
      //Editando
      objetoPacientes.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacientesState=>  pacientesState.id === paciente.id ? objetoPacientes : pacientesState)

      setPacientes(pacientesActualizados);
      setPaciente({});


    }else{
      //Creando
      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes]);
    }



    setNombre('');
    setNombrePropietario('');
    setEmail('');
    setFechaAlta('');
    setSintomas('');

    return setError(false);

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">

      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-xl mt-5 text-center">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">adminístralos</span>
      </p>

      <form
        className="bg-white shadow-lg rounded-lg py-10 px-5 mt-10 mb-10 mx-5"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje='Todos los campos son obligatorios.' />}

        <div className="mb-6">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={propietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="salida" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
          <input
            id="salida"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />

      </form>

    </div>

  )
}

export default Formulario
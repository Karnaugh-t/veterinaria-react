import Pacientes from "./Pacientes"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>

          <p className="text-xl mt-5 text-center mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>


          {
            pacientes.map(paciente =>
            (
              <Pacientes
                paciente={paciente}
                key={paciente.id}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
            )
          }
        </>

      ) :
        (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
              Comienza a agregar {''}
              <span className="text-indigo-600 font-bold">pacientes</span>
            </p>
          </>
        )}



    </div>

  )
}

export default ListadoPacientes
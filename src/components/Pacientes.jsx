const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fechaAlta, sintomas, id } = paciente;

    const handleEliminar = () => {
        const res = confirm('Está seguro de eliminar?');

        if (res) {
            eliminarPaciente(id)
        }
    };

    return (
        <div className="mx-3 my-10 bg-white shadow-md px-5 py-10 mb-10 rounded-xl">

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre mascota: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
                <span className="font-normal normal-case">{fechaAlta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-around mt-10">

                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>


                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}

export default Pacientes
export function CartModalForm({ formData, handleChange, handleSubmit, onClose, errores, isLoading, isSuccess, orderId }){

    return (

        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">

            <div className="bg-base-100 text-base-content rounded-xl p-6 w-full max-w-lg shadow-lg">

                <h2 className="text-xl font-bold mb-4">Finalizar compra</h2>
                <form onSubmit={handleSubmit} className="space-y-3">

                    <div className="grid grid-cols-2 gap-2">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        className="input input-bordered w-full"
                        value={formData.nombre}
                        onChange={handleChange}
                        disabled={isLoading || isSuccess}
                        required
                    />
                    {errores.nombre && (
                        <p className="text-error text-sm mt-1">{errores.nombre}</p>
                    )}

                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        className="input input-bordered w-full"
                        value={formData.apellido}
                        onChange={handleChange}
                        disabled={isLoading || isSuccess}
                        required
                    />
                    </div>

                    {errores.apellido && (
                        <p className="text-error text-sm mt-1">{errores.apellido}</p>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading || isSuccess}
                        required
                    />

                    {errores.email && (
                        <p className="text-error text-sm mt-1">{errores.email}</p>
                    )}

                    <input
                        type="text"
                        name="direccion"
                        placeholder="Dirección"
                        className="input input-bordered w-full"
                        value={formData.direccion}
                        onChange={handleChange}
                        disabled={isLoading || isSuccess}
                        required
                    />

                    {errores.direccion && (
                        <p className="text-error text-sm mt-1">{errores.direccion}</p>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                        <input
                        type="text"
                        name="codigoPostal"
                        placeholder="Código postal"
                        className="input input-bordered w-full"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                        disabled={isLoading || isSuccess}
                        required
                        />

                        {errores.codigoPostal && (
                            <p className="text-error text-sm mt-1">{errores.codigoPostal}</p>
                        )}

                        <input
                        type="text"
                        name="localidad"
                        placeholder="Localidad"
                        className="input input-bordered w-full"
                        value={formData.localidad}
                        onChange={handleChange}
                        disabled={isLoading || isSuccess}
                        required
                        />

                        {errores.localidad && (
                            <p className="text-error text-sm mt-1">{errores.localidad}</p>
                        )}

                    </div>

                    <input
                        type="text"
                        name="provincia"
                        placeholder="Provincia"
                        className="input input-bordered w-full"
                        value={formData.provincia}
                        onChange={handleChange}
                        disabled={isLoading || isSuccess}
                        required
                    />

                    {errores.provincia && (
                        <p className="text-error text-sm mt-1">{errores.provincia}</p>
                    )}

                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        className="input input-bordered w-full"
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={isLoading || isSuccess}
                        required
                    />

                    {errores.telefono && (
                        <p className="text-error text-sm mt-1">{errores.telefono}</p>
                    )}

                    <div className="flex justify-end gap-2 pt-4">

                        <button
                            type="button"
                            className="btn btn-outline"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Volver
                        </button>

                        {!isSuccess && (
                            <button
                                type="submit"
                                className={`btn btn-primary ${isLoading ? "loading" : ""}`}
                                disabled={isLoading}
                            >
                                {isLoading ? "Procesando..." : "Confirmar"}
                            </button>
                        )}

                    </div>

                    {isSuccess && (
                        <div className="mt-4">
                            <div className="badge badge-success p-4 text-center w-full">
                                Orden confirmada Código: {orderId}
                            </div>
                        </div>
                    )}

                </form>

            </div>

        </div>
    )
}
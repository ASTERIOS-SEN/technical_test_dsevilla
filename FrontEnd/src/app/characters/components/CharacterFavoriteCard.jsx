'use client'
import Link from "next/link";
import Image from "next/image";
import toast from 'react-hot-toast/headless'
import Swal from 'sweetalert2'
import {IoTrash} from "react-icons/io5";
import Notifications from "@/app/components/Notifications";


export const CharacterFavoriteCard = ({personaje}) => {

    const {id, name, image, species} = personaje;

    const removerFavorite = () => {
        // @ts-ignore
        Swal.fire({
            title: 'Estas Seguro?',
            icon: 'warning',
            text: 'Remover de Favoritos',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            clonseOnConfirm: true,
            allowEnterKey: false,
            allowOutsideClick: false
        }).then(result => {
            if (result.isConfirmed) {

                const toastId = toast.loading('Cargando...')
                // Configuración de la solicitud
                const requestOptions = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(personaje)
                };

                const url = `http://localhost:3000/api/favorites/${id}`

                fetch(url, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud');
                        }
                        return response.json(); // Convertir la respuesta a JSON
                    })
                    .then(data => {
                        const {msj, code} = data;
                        if (code === 200) {
                            toast.success(msj, {id: toastId})
                        } else {
                            toast.error('Algo salio mal!', {id: toastId})
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        toast.error('Error', {id: toastId})
                    });
            }
        })
    }

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <Notifications/>
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={id}
                        src={image}
                        width={100}
                        height={100}
                        alt="nombre"
                        className="rounded"
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
                        {name}
                    </p>
                    <p className="text-sm text-gray-100">{species}</p>
                    <div className="mt-5">
                        <Link
                            href={`/personaje/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más Informacion
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div
                        className="px-4 py-2 hover:bg-gray-100 flex items-center"
                    >
                        <>
                            <div className="pl-3">
                                <button
                                    onClick={removerFavorite}
                                    className="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-gray-400/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <div className="text-red-600">
                                        <IoTrash size={20}/>
                                    </div>
                                    Remover de favoritos
                                </button>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

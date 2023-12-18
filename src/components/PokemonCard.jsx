

export default function PokemonCard({name, img, type}) {
    return (
        <div className="m-5 p-2 w-[200px] h-full rounded-md border-2 border-stone-100 shadow-md bg-red-500"
        >
            <div className="">
                <img src={img} alt={name} 
                className="w-full rounded-lg mb-5"
                />
            </div>
            <div className=" bg-orange-100 rounded-sm">
                <p className="font-bold text-center">{name}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}

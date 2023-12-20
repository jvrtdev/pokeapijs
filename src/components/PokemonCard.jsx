
import './Card.modules.css'
import ButtonCard from "./ButtonCard"

export default function PokemonCard({data}) {
        
        
    
    return (
        <div className={`${data.types[0].type.name} m-5 p-2 w-[200px] h- rounded-xl shadow-md cursor-pointer`}>
            <div className='flex justify-between items-cente mb-1'>
                <p className="font-bold text-center text-white capitalized text-2xl">{data.name}</p>
                <p className=" font-semibold text-center text-white text-2xl">#{data.id}</p>
            </div>
                <div className="bg-ellipse bg-center bg-no-repeat bg-contain">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt={data.name} 
                    className="w-full"
                    />
                </div>
                <div className='flex mt-2 gap-1 items-center'>
                    {data.types.map((pokemonType) =>  
                    <ButtonCard type={[pokemonType.type.name]}>
                        {pokemonType.type.name}
                    </ButtonCard>

                    )}
                </div>
                
                
                        
                    


        </div>
    )
}


import './Card.modules.css'
import ButtonCard from "./ButtonCard"

export default function PokemonCard({data}) {

        
    
    return (
        <div className={`${data.types[0].type.name} m-5 p-2 w-[200px] h-full rounded-xl shadow-md`}>
            <div className='flex justify-between'>
                <p className="font-bold text-center text-white ">{data.name}</p>
                <p className="font-bold text-center text-white ">#{data.id}</p>
            </div>
                <div className="">
                    <img src={data.sprites.front_default} alt={data.name} 
                    className="w-full"
                    />
                </div>
                
                <ButtonCard>
                    {data.types[0].type.name}
                </ButtonCard>
                
                
                        
                    


        </div>
    )
}

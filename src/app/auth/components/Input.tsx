


export default function Input({type, placeholder}:{type: string, placeholder:string}){

    

    return(
        <input type={type} placeholder={placeholder} className="w-full border rounded border-[#333] placeholder:text-[#333] p-2 outline-none bg-transparent" />
    )
}
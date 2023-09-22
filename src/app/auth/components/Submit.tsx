'use client'
import { useRouter } from "next/navigation"

export default function Submit({ value }:{value:string}){

    const router = useRouter();


    const onSubmit = () => {
        router.push('/app/inicio')
    }
    return(
        <input type="submit" className="w-full self-center p-2 bg-white rounded font-bold hover:bg-gray-100 transition-colors active:opacity-60 md:bg-primaryColor md:hover:bg-secondColor md:text-white md:p-2 cursor-pointer" value={value} onClick={onSubmit}/>
    )
}
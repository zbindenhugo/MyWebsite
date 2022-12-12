export default function CustomInput({type, name, placeholder, value, onChange}){

    return(
        <div className={type === 'textarea' || name.includes('email') ? 'col-span-2 w-full' : ''}>
            {
                type === 'text' ? 
                    <input type={type} placeholder={placeholder} name={name} value={value} onChange={(e) => onChange(e.target.value)} className='w-full rounded-lg border-gray-200 md:p-5 p-3 sm:text-xl text-md' />
                :
                    <textarea type={type} placeholder={placeholder} name={name} value={value} onChange={(e) => onChange(e.target.value)}  className='w-full rounded-lg border-gray-200 md:p-5 p-3 sm:text-xl text-md' />

            }
        </div>
    )

}
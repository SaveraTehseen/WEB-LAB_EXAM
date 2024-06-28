'use server'
import {z} from 'zod'
export const adduser = async(value:z.infer<typeof adduser>){
    
const ValidationValues = myformSchema.safeparse(value)
if(ValidationValues.success){
    return{
        error."Invalid values"
    ;}

}
await.prisma.lorem.create({
    data:{
        name:validationValues.data.text,
        iscompleted:true
    }
})

}


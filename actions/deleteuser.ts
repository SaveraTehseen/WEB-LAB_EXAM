'use server'

export const deleteuser= async(id:string) =>{
    await.prisma.lorem.delete({
        where(id.id),
    });
}
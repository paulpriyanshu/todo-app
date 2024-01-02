const zod =require('zod')

const createtodo=zod.object({
  title: zod.string(),
  descrition: zod.string()

})

const updatetodos=zod.object({
    id: zod.string()
})

module.exports={
    createtodo,
    updatetodos
}
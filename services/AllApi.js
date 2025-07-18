import commonApi from "./CommonApi"

//POST
export const postEmployee=async(reqBody,reqHeader)=>{
return await commonApi("post","/postEmp",reqBody,reqHeader)
}
//get
export const getEmployee=async()=>{
    return await commonApi("get",'/getEmP',{})
}
export const getEmployeeById=async(id)=>{
    return await commonApi("get",`/getemployee/${id}`,{})
}
//delete
export const deleteEmployee=async(id)=>{
    return await commonApi('delete', `/deleteEmp/${id}`,{})
}
//edit
export const editEmployees=async(id,reqBody,reqHeader)=>{
    return await commonApi("patch",`/EditEmp/${id}`,reqBody,reqHeader)

}
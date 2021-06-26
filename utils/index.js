export const setValue = (name, value,handler) => {
    handler(prev => (Object.assign(prev, { [name]: value })));
  };
export const getWhereClause=(listOfattr)=>{
    const whereClause={};
    if (Array.isArray(listOfattr)) {        
        listOfattr.forEach(({attr,value})=>{
            whereClause[attr]=value;
        });
    }
    return whereClause;
}
export const getErrorFormat=(screen,{error,cod})=>{
  return {screen,error,cod}
}
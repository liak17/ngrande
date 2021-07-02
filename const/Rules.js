export const LOGINRULES={
    cedula:{
        length:11
    },
    ruc: {
        length:13
    },
    password: {
        min:'',
        max:''
    }
}
export const RULESSTRING={
    equal:"equalString",
    equalBetween:"equalBetweenString"
}
export const RULESLENGTH={
    max:"max",
    min:"min",
    equal:"equal"    
}
export const getRuleFormat=(value,{validator,params})=>({  identificador: {
    value,
    validators: [{
      validator,
      params
     }]
  }})
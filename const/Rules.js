export const LOGINRULES = {
    cedula: {
        length: 10,
    },
    ruc: {
        length: 11,
    },
    password: {
        min: '',
        max: ''
    }
}
export const RULESSTRING = {
    equal: "equalString",
    equalBetween: "equalBetweenString"
}
export const RULESLENGTH = {
    max: "max",
    min: "min",
    equal: "equal"
}
export const getRuleFormat = ( { validator, params }) => ({
    rules: {        
        validators: [{
            validator,
            params
        }]
    }
})
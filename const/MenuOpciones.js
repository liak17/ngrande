import * as ViewsNames from '../const/ViewsNames.js';
export const menuNegocio = [    
    {title: 'Inicio', screen: ViewsNames.DashboardScreenName,id:1 },
    {title: 'Mi Perfil', screen: ViewsNames.PerfilScreenName, id:2 },
    {title:'Nuevo Cupon',screen: ViewsNames.NuevoCuponScreenName,id:3},
    {title:'Nueva Sucursal',screen: ViewsNames.NuevaSucursalScreenName,id:4},
    {title:'Salir', screen:ViewsNames.InicioScreenName,id:5}]
export const menuUsuario = [
    {title:'Inicio', screen:ViewsNames.DashboardUserScreenName,icon:'account'},
    {title:'Mi Perfil', screen:ViewsNames.PerfilUsuarioScreenName,icon:'account'},
    {title:'Mi Estado', screen:ViewsNames.EstadoUsuarioScreenName,icon:'account'},
    {title:'Mi Red', screen:ViewsNames.RedUsuarioScreenName,icon:'camera'},
    {title:'Mi Oficina', screen:ViewsNames.OficinaUserScreenName,icon:'account'},
    {title:'Reader', screen:ViewsNames.ReaderUsuarioScreenName,icon:'account'},
    {title:'Motiva', screen:ViewsNames.MotivaUserScreenName,icon:'account'},
    

]
import * as ViewsNames from '../const/ViewsNames.js';
export const menuNegocio = [    
    {title: 'Inicio', screen: ViewsNames.DashboardScreenName,id:1,icon: 'home'},
    {title: 'Mi Perfil', screen: ViewsNames.PerfilScreenName, id:2,icon: 'account' },
    {title:'Nuevo Cupon',screen: ViewsNames.NuevoCuponScreenName,id:3,icon: 'book'},
    {title:'Nueva Sucursal',screen: ViewsNames.NuevaSucursalScreenName,id:4,icon: 'home'},
    {title:'Salir', screen:ViewsNames.InicioScreenName,id:5,icon: 'home'}]
export const menuUsuario = [
    {title:'Inicio', id:1,screen:ViewsNames.DashboardUserScreenName,icon:'home'},
    {title:'Mi Perfil',id:2, screen:ViewsNames.PerfilUsuarioScreenName,icon:'account'},
    {title:'Mi Estado',id:3, screen:ViewsNames.EstadoUsuarioScreenName,icon:'account-details'},
    {title:'Mi Red',id:4, screen:ViewsNames.RedUsuarioScreenName,icon:'arrange-bring-to-front'},
    {title:'Mi Oficina',id:5, screen:ViewsNames.OficinaUserScreenName,icon:'briefcase'},
    {title:'Reader',id:6, screen:ViewsNames.ReaderUsuarioScreenName,icon:'book'},
    {title:'Motiva', id:7,screen:ViewsNames.MotivaUserScreenName,icon:'clipboard-text'},
    

]
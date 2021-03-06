import * as ViewsNames from '../const/ViewsNames.js';
export const menuNegocio = [    
    {title: 'Inicio', screen: ViewsNames.DashboardScreenName,id:1,icon: 'home'},
    {title: 'Mi Perfil', screen: ViewsNames.PerfilScreenName, id:2,icon: 'account' },
    {title:'Nuevo Cupon',screen: ViewsNames.NuevoCuponScreenName,id:3,icon: 'card-text'},
    {title:'Nueva Sucursal',screen: ViewsNames.NuevaSucursalScreenName,id:4,icon: 'home-city'},
    {title:'Salir', screen:ViewsNames.InicioScreenName,id:5,icon: 'exit-to-app'}]
export const menuUsuario = [
    {title:'Inicio', id:1,screen:ViewsNames.DashboardUserScreenName,icon:'home'},
    {title:'Mi Perfil',id:2, screen:ViewsNames.PerfilUsuarioScreenName,icon:'account'},
    {title:'Mi Estado',id:3, screen:ViewsNames.EstadoUsuarioScreenName,icon:'account-details'},
    {title:'Mi Red',id:4, screen:ViewsNames.RedUsuarioScreenName,icon:'arrange-bring-to-front'},
    {title:'Mi Oficina',id:5, screen:ViewsNames.OficinaUserScreenName,icon:'briefcase'},
    {title:'Reader',id:6, screen:ViewsNames.ReaderUsuarioScreenName,icon:'book'},
    {title:'Motiva', id:7,screen:ViewsNames.MotivaUserScreenName,icon:'clipboard-text'},
    {title:'Salir', screen:ViewsNames.InicioScreenName,id:8,icon: 'exit-to-app'}   

]


export const menuInvitado=[
    {title:'Inicio', id:1,screen:ViewsNames.DashboardUserScreenName,icon:'home'},    
    {title:'Reader',id:2,screen:ViewsNames.ReaderUsuarioScreenName,icon:'book'},
    {title:'Motiva',id:3,screen:ViewsNames.MotivaUserScreenName,icon:'clipboard-text'},    
    {title:'Salir',id:4 ,screen:ViewsNames.InicioScreenName,icon: 'exit-to-app'}
]   
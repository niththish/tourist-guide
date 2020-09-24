import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {MaindetailComponent} from './maindetail/maindetail.component';


export const routes:Routes=[
    {
        path:'main', 
        component: MainComponent
    },
    {
        path:'detailedmain/:name',
        component:MaindetailComponent
    },
    {
        path:'',
        redirectTo:'/main',
        pathMatch:'full'
    }
]
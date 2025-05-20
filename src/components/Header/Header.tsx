import {IonHeader,IonAvatar,IonText,} from '@ionic/react'
import {useUser} from '../../hooks';

import './Header.scss'
import { logIn } from 'ionicons/icons';
import { Logito } from '../../assets';


export function Header() {
    const {avatar} = useUser();
  return (
    <IonHeader className='actividad-header'>
        <div className="logo-container">
        <IonAvatar>
            <img src={avatar} alt="Avatar" />
            <img src={Logito} alt="Logito" />
         </IonAvatar>
        </div>
       
        <div className='progreso__info'>
             <IonText color="white" >Diabetic Plate</IonText>
        </div>
    </IonHeader>
  )
}
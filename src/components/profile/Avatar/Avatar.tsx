import { IonAvatar, IonText } from "@ionic/react";
import "./Avatar.scss";
import {avatar} from '../../../assets';

const nombre:string="Adrian Contreras";
export  function Avatar() {
  return (
    <div className="container-avatar">
        <IonAvatar>
            <img src={avatar}/>
        </IonAvatar>
        <IonText color="dark">{nombre}</IonText>
    </div>
  )
}

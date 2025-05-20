import { IonCard,IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,IonLabel, IonList, IonThumbnail, IonButton} from '@ionic/react';

import './Home.css';

export function Home() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Lista de Platillos</IonCardTitle>
        <IonCardSubtitle>Recomendados</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://imagenes.elpais.com/resizer/v2/3KWQUZHLQFGVRIWYQGO3A5WFD4.jpg?auth=f2d14d8886b49351024920c894e7f4b9f518886e962c654538d191ee37e30bac&width=980" />
            </IonThumbnail>
            <IonLabel>Ensalada</IonLabel>
            <IonButton fill="clear">Mostrar</IonButton>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://storage.googleapis.com/avena-recipes-v2/2019/10/1571780747818.jpeg" />
            </IonThumbnail>
            <IonLabel>Tacos de Aguacate</IonLabel>
            <IonButton fill="clear">Mostrar</IonButton>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://www.cocinavital.mx/wp-content/uploads/2024/05/pozole-rojo-1-634x420.jpg" />
            </IonThumbnail>
            <IonLabel>Pozole</IonLabel>
            <IonButton fill="clear">Mostrar</IonButton>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://adelanteks.wordpress.com/wp-content/uploads/2013/01/pizza.jpg" />
            </IonThumbnail>
            <IonLabel>Pizza de dos quesos</IonLabel>
            <IonButton fill="clear">Mostrar</IonButton>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://myplate-prod.azureedge.us/sites/default/files/styles/large/public/2020-11/TurkeyStew_527x323.jpg?itok=AsyzlV20" />
            </IonThumbnail>
            <IonLabel>Estofado de pavo</IonLabel>
            <IonButton fill="clear">Mostrar</IonButton>
          </IonItem>

        </IonList>
      </IonCardContent>
    </IonCard>
  );
}


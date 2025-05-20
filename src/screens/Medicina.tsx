import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import MedicationForm from "../components/medication/AppMedication/AppMedication"; // Importa el formulario
import AppMedication from "../components/medication/AppMedication/AppMedication";

export function Medicina() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Medicamento</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <AppMedication /> {/* Muestra el formulario aquí */}
      </IonContent>
    </IonPage>
  );
}

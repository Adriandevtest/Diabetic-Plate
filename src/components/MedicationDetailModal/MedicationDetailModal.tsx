import React from 'react';
import { IonModal, IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonText } from '@ionic/react';

interface MedicationDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  medication: {
    medication: string;
    dose: string;
    frequency: string;
    reminderTime: string;
  } | null;
}

const MedicationDetailModal: React.FC<MedicationDetailsProps> = ({ isOpen, onClose, medication }) => {
  if (!medication) return null;

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles del Medicamento</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h3>{medication.medication}</h3>
          <p><strong>Dosis:</strong> {medication.dose}</p>
          <p><strong>Frecuencia:</strong> {medication.frequency}</p>
          <p><strong>Hora del Recordatorio:</strong> {medication.reminderTime}</p>
        </IonText>
        <IonButton expand="full" color="primary" onClick={onClose}>Cerrar</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default MedicationDetailModal;


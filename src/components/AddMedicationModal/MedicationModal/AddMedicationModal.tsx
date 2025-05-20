// src/components/AddMedicationModal.tsx
import React, { useState } from 'react';
import {
  IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, 
  IonItem, IonInput, IonLabel, IonSelect, IonSelectOption
} from '@ionic/react';

interface AddMedicationModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  onSave: (medication: string, dose: string, frequency: string, reminderTime: string) => void;
}

const AddMedicationModal: React.FC<AddMedicationModalProps> = ({ isOpen, onDismiss, onSave }) => {
  const [medication, setMedication] = useState('');
  const [dose, setDose] = useState('');
  const [frequency, setFrequency] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSave = () => {
    if (medication && dose && frequency && reminderTime) {
      onSave(medication, dose, frequency, reminderTime);
      onDismiss(); // Cierra el modal después de guardar
    }
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Medicamento</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onDismiss}>Cerrar</IonButton> {/* Este botón cierra el modal */}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Nombre del Medicamento</IonLabel>
          <IonInput value={medication} onIonChange={e => setMedication(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Dosis</IonLabel>
          <IonInput value={dose} onIonChange={e => setDose(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel>Frecuencia</IonLabel>
          <IonSelect value={frequency} onIonChange={e => setFrequency(e.detail.value)}>
            <IonSelectOption value="diario">Diario</IonSelectOption>
            <IonSelectOption value="semanal">Semanal</IonSelectOption>
            <IonSelectOption value="cada 8 horas">Cada 8 horas</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Hora de Recordatorio</IonLabel>
          <IonInput value={reminderTime} onIonChange={e => setReminderTime(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" onClick={handleSave}>Guardar Medicamento</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default AddMedicationModal;



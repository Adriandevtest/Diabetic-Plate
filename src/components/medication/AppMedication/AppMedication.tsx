import React, { useState, useEffect } from 'react';
import {IonButton, IonContent, IonList, IonItem, IonLabel, IonPage, IonToast, IonFab, IonFabButton, IonIcon} from '@ionic/react';
import { Preferences } from '@capacitor/preferences';
import { add, trash } from 'ionicons/icons';
import AddMedicationModal from '../../AddMedicationModal/MedicationModal/AddMedicationModal';
import './AppMedication.scss';

const AppMedication: React.FC = () => {
  const [medications, setMedications] = useState<any[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadMedications = async () => {
      const storedData = await Preferences.get({ key: 'medications' });
      if (storedData.value) {
        setMedications(JSON.parse(storedData.value));
      }
    };
    loadMedications();
  }, []);

  const handleSaveMedication = async (medication: string, dose: string, frequency: string, reminderTime: string) => {
    const newMedication = { medication, dose, frequency, reminderTime };
    const updatedMedications = [...medications, newMedication];

    await Preferences.set({
      key: 'medications',
      value: JSON.stringify(updatedMedications),
    });

    setMedications(updatedMedications);
    setToastMessage('Medicamento guardado');
    setShowToast(true);
    setShowModal(false);
  };

  const handleDeleteMedication = async (index: number) => {
    const updatedMedications = medications.filter((_, i) => i !== index);

    await Preferences.set({
      key: 'medications',
      value: JSON.stringify(updatedMedications),
    });

    setMedications(updatedMedications);
    setToastMessage('Medicamento eliminado');
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonContent color="light" className="ion-padding">
        <IonList>
          {medications.length === 0 ? (
            <IonItem>
              <IonLabel>No hay medicamentos guardados</IonLabel>
            </IonItem>
          ) : (
            medications.map((med, index) => (
              <IonItem key={index}>
                <IonLabel>{med.medication} - {med.dose} - {med.frequency} - {med.reminderTime}</IonLabel>
                <IonButton color="danger" fill="clear" onClick={() => handleDeleteMedication(index)}>
                  <IonIcon icon={trash} />
                </IonButton>
              </IonItem>
            ))
          )}
        </IonList>

        {/* FAB para abrir el modal */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/* Modal para agregar medicamento */}
        <AddMedicationModal 
          isOpen={showModal} 
          onDismiss={() => setShowModal(false)} 
          onSave={handleSaveMedication} 
        />

        {/* Toast */}
        <IonToast 
          isOpen={showToast} 
          message={toastMessage} 
          duration={2000} 
          onDidDismiss={() => setShowToast(false)} 
        />
      </IonContent>
    </IonPage>
  );
};

export default AppMedication;



import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonInput, IonItem, IonLabel, IonPage, IonIcon } from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons'; // Importa los iconos para mostrar y ocultar la contraseña
import './Login.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar si se muestra u oculta la contraseña

  const handleLogin = () => {
    console.log('Login:', email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alternar el estado de mostrar/ocultar la contraseña
  };

  return (
    <IonPage>
      <IonContent className="ion-padding login-content">
        <IonCard className="login-card">
          <IonCardHeader>
            <IonCardTitle>Iniciar Sesión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Correo Electrónico</IonLabel>
              <IonInput 
                type="email" 
                value={email} 
                onIonChange={e => setEmail(e.detail.value!)} 
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput 
                type={showPassword ? 'text' : 'password'} // Si showPassword es true, mostrar la contraseña como texto
                value={password} 
                onIonChange={e => setPassword(e.detail.value!)} 
              />
              <IonButton fill="clear" onClick={togglePasswordVisibility}>
              </IonButton>
            </IonItem>

            <IonButton expand="block" onClick={handleLogin} className="login-button">Ingresar</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;





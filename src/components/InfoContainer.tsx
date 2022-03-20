import React from 'react';
import { IonButton, IonContent, IonImg, IonThumbnail } from '@ionic/react';
import './InfoContainer.css';

export const ListContainer: React.FC = () => {
    return (
        <IonContent>
            <div className="card">
                <div className="header">
                    <div className="avatar">
                        <IonThumbnail slot="start">
                            <IonImg className="avatar" src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/275786510_3372055203082044_6392780706255812486_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-MUE863lFJIAX8WmAB4&tn=c_rlRlXBFWj0jFTE&_nc_ht=scontent.feoh3-1.fna&oh=00_AT_kyZLtMoPWRLjvQP-2ilxKy9KR1HxxV4A8GTyvjCTHBA&oe=623BAA02" alt="" />
                        </IonThumbnail>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="user-meta ion-text-center">
                    <h3 className="playername">Emanuel Acevedo Muñoz</h3>
                </div>
                <IonButton expand="block" color="secondary" href='https://github.com/Emanuel684'>GitHub</IonButton>
                <IonButton expand="block" color="secondary" href='https://www.linkedin.com/in/emanuel-acevedo-mu%C3%B1oz-1b062b204/'>Linkedin</IonButton>
                <IonButton expand="block" color="secondary" href='https://stackoverflow.com/users/15674328/emanuel-acevedo-mu%c3%b1oz'>StackOverflow</IonButton>
            </div>
        </IonContent>
    );
};

export default ListContainer;

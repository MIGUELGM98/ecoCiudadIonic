import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { GameComponent } from '../components/game/game.component';

export class Utils{

    public loading;

    constructor(
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public modalCtrl?: ModalController
    ){
        if(loadingCtrl){
            this.loading = loadingCtrl.create({});
        }
    }

    async presentModal(){
        const modal = await this.modalCtrl.create({
            component: GameComponent
        });

        modal.present();
    }

    async presentLoading(){
        this.loading = await this.loadingCtrl.create({});
        this.loading.present();
    }

    async presentToast(){
        const toast = await this.toastCtrl.create({
            'color': 'success',
            position: 'top',
            duration: 2000,
            'message': 'Reporte recibido correctamente'
        });
        toast.present();
    }

    stopLoading(){
        this.loading.dismiss();
    }
}
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

    async presentToast(color?, message?){
        let data = {
            color: !color ? 'success' : color,
            message: !message ? 'Reporte recibido correctamente': message
        }
        const toast = await this.toastCtrl.create({
            'color': data.color,
            position: 'top',
            duration: 2000,
            'message': data.message
        });
        toast.present();
    }

    stopLoading(){
        this.loading.dismiss();
    }
}
import { LoadingController, ToastController } from '@ionic/angular';

export class Utils{

    public loading;

    constructor(
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController
    ){
        this.loading = loadingCtrl.create({});
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
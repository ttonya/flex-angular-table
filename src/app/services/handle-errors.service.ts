import { Injectable } from '@angular/core';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HandleErrorsService {

 public statusInfo:any; 
 public status: any;

  constructor(private messageService: MessagesService) { }

  message: any;

  catchErrors(resp:any) {
    if (resp.status == 200) {
      this.message = 'Запрос выполнен успешною Код: ' + resp.status;
    }
    else if (resp.status == 0) {
      this.message = 'Неизвестная ошибка';
    }
    else if (resp.status == 400) {
      this.message = 'Неверный запрос. Код ошибки: ' + status;
    }
    else if (resp.status == 404) {
      this.message = 'Сущность не найдена в системе. Код ошибки: ' + status;
    }
    else if (resp.status == 500) {
      this.message = 'Ошибка сервера. Код ошибки: ' + status;
    }
return this.messageService.showMessage(this.message);
  }

}

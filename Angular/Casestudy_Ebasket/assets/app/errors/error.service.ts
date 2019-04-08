import { EventEmitter } from "@angular/core";

import { Error } from "./error.model";

export class ErrorService {
    /**
     * @type {EventEmitter<Error>}
     */
    errorOccurred = new EventEmitter<Error>();

    clearErrorMessage = new EventEmitter();
    

    /**
     * @description emit errorOccurred
     * @param error
     */
    handleError(error: any) {
        //TODO handle error and emit errorOccurred
        // console.log('error service called....' + error);
        this.errorOccurred.emit(error);
    }

    clearError(){
        this.clearErrorMessage.emit();
    }
}
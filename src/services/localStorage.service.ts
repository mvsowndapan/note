import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { defaultTheme } from "../assets/theme/themes.js";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public App_Key = "Note";
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    setDefaultLocalStorage() {
        const payload = {
            App_Theme: defaultTheme.MODE.DARKMODE
        };
        this.storage.set(this.App_Key, payload);
    }

    getCurrnetLocalStorage() {
        return this.storage.get(this.App_Key);
    }

    hasLocalStorage() { return this.storage.has(this.App_Key) }

    themeHandler(operation, ...rest) {
        let currnetLocalStorage = this.getCurrnetLocalStorage();
        switch (operation) {
            case "GET": return currnetLocalStorage.App_Theme;
            case "CHANGE_MODE":
                currnetLocalStorage.App_Theme = defaultTheme.MODE.LIGHTMODE;
                this.storage.set(this.App_Key, currnetLocalStorage);
                return;
            case "CUSTOMIZE_THEME":
                currnetLocalStorage.App_Theme = Object.assign(currnetLocalStorage.App_Theme, rest[0]);
                this.storage.set(this.App_Key, currnetLocalStorage);
                return;
            default:
                break;
        }
    }

}

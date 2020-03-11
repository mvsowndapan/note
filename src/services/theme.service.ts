import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    public _Url = "../assets/data/notes.json";
    public appThemeKey = "App_Theme";
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    hasDefaultTheme() {
        return this.storage.has(this.appThemeKey)
    }

    setDefaultTheme() {
        const defaultTheme = {
            BackgroundColor: "black",
            FontColor: "white",
            NavBackgroundColor: "grey",
            NavFontColor: "white"
        }
        this.storage.set(this.appThemeKey, defaultTheme);
    }

    getDefaultTheme() {
        return this.storage.get(this.appThemeKey);
    }

    changeDefaultTheme() {
        const defaultTheme = {
            BackgroundColor: "white",
            FontColor: "black",
            NavBackgroundColor: "white",
            NavFontColor: "black"
        }
        this.storage.set(this.appThemeKey, defaultTheme);
    }
}

import { Injectable, Inject } from "@angular/core";
import { LocalStorageService } from './localStorage.service';


@Injectable({
    providedIn: "root"
})
export class ThemeService {
    public appThemeKey = "Note";
    constructor(private localStorageService: LocalStorageService) { }

    getDefaultTheme() {
        return this.localStorageService.themeHandler("GET");
    }

    changeDefaultTheme() {
        return this.localStorageService.themeHandler("CHANGE_MODE");
    }

    customizeTheme(customizedValues) {
        return this.localStorageService.themeHandler("CUSTOMIZE_THEME", customizedValues);
    }
}

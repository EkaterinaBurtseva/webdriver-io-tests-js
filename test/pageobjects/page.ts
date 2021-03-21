
export class Page {
    open (path : string) {
        return browser.url(`/${path}`)
    }
}
export const basePage = new Page();

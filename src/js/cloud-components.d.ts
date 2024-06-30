export declare class CorePopup {
    private static _contentLoadedCallBack;
    private static get selector();
    private static get element();
    static get isOpened(): boolean;
    static onContentLoaded(callback: () => void): void;
    static open(content?: string | HTMLElement, settings?: CorePopupSettings): void;
    static close(): void;
    static softClose(): void;
    static updateContent(content: string | HTMLElement): void;
}
export declare class CorePopupSettings {
    preventClose: boolean;
}
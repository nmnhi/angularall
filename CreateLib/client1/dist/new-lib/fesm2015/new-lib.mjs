import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NewLibService {
    constructor() { }
}
NewLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NewLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NewLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NewLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NewLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NewLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NewLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NewLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.7", type: NewLibComponent, selector: "lib-new-lib", ngImport: i0, template: `
    <p>
      new-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NewLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-new-lib', template: `
    <p>
      new-lib works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class NewLibModule {
}
NewLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NewLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NewLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.7", ngImport: i0, type: NewLibModule, declarations: [NewLibComponent], exports: [NewLibComponent] });
NewLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NewLibModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NewLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NewLibComponent
                    ],
                    imports: [],
                    exports: [
                        NewLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of new-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NewLibComponent, NewLibModule, NewLibService };
//# sourceMappingURL=new-lib.mjs.map

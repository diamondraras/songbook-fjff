webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_localStorage_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_numberInput_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, modalCtrl, nbrInputService, lss) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.nbrInputService = nbrInputService;
        this.lss = lss;
    }
    ModalPage.prototype.ngOnInit = function () {
        this.previous = this.nbrInputService.number;
    };
    ModalPage.prototype.changeFocus = function () {
        // this.inputEl.nativeElement.focus()
    };
    ModalPage.prototype.add = function (num) {
        if (this.nbrInputService.ready_to_clear) {
            this.nbrInputService.number = num;
        }
        else {
            this.nbrInputService.concatenate(num);
        }
        this.nbrInputService.ready_to_clear = false;
    };
    ModalPage.prototype.ok = function () {
        this.previous = this.nbrInputService.number;
        this.navCtrl.pop();
        this.lss.setLastStorage(this.nbrInputService.number);
    };
    ModalPage.prototype.clear = function () {
        this.nbrInputService.backspace();
    };
    ModalPage.prototype.ionViewWillLeave = function () {
        this.nbrInputService.number = this.previous;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])("myInput"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], ModalPage.prototype, "inputEl", void 0);
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\pages\modal\modal.html"*/'<ion-content class="padding">\n  <ion-list>\n    <!-- <ion-item>\n      <ion-input type="number" value="518" #myInput id="input"></ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(1)">1</button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(2)">2</button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(3)">3</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(4)">4</button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(5)">5</button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(6)">6</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(7)">7</button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(8)">8</button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(9)">9</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button block round (click)="add(0)">0</button>\n          </ion-col>\n          <ion-col col-8>\n            <button ion-button block round (click)="ok()" [disabled]="nbrInputService.number?false:true">OK</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item>\n      <ion-toggle checked="false" item-start [(ngModel)]="nbrInputService.reverse"></ion-toggle>\n      <button ion-button item-end clear color="danger" (click)="clear()">clear</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__services_numberInput_service__["a" /* numberInputService */],
            __WEBPACK_IMPORTED_MODULE_0__services_localStorage_service__["a" /* LocalStorageService */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_songs_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_localStorage_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_numberInput_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavorisPage = /** @class */ (function () {
    function FavorisPage(navCtrl, navParams, lss, songService, songs, alertCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lss = lss;
        this.songService = songService;
        this.songs = songs;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    FavorisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavorisPage');
    };
    FavorisPage.prototype.gotoSong = function (num) {
        this.songs.number = num;
        this.navCtrl.pop();
    };
    FavorisPage.prototype.onRemoveFavorite = function (num, title) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Ireo Hirako',
            message: 'Irina hiala ato amin\'≪ Ireo Hirako ≫ ny hira ' + num + '.' + title + '?',
            buttons: [
                {
                    text: 'Tsia',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Eny',
                    handler: function () {
                        _this.lss.remove_one_favorite(num);
                        // console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    FavorisPage.prototype.presentActionSheet = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Ireo Hirako',
            message: 'Hamafa ≪ Ireo Hirako ≫ rehetra ?',
            buttons: [
                {
                    text: 'Tsia',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Eny',
                    handler: function () {
                        _this.lss.setFavoritesStorage([]);
                        // console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    FavorisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-favoris',template:/*ion-inline-start:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\pages\favoris\favoris.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ireo Hirako</ion-title>\n    <ion-buttons right>\n        <button ion-button icon-only (click)="presentActionSheet()" *ngIf="lss.object.favorites[0]" >\n          <ion-icon name="trash" color="danger">\n          </ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item-sliding *ngFor="let item of lss.object.favorites" >\n    <ion-item (click)="gotoSong(item)">\n      <h3>\n          <ion-icon name="star" item-left small color="yellow"></ion-icon>\n            {{ songService.getSongByNumber(item).title }}\n          </h3>\n          <p>\n            Hira faha : {{ item }}\n          </p>\n    </ion-item>\n    <ion-item-options>\n      <button ion-button color="danger" (click)="onRemoveFavorite(item,songService.getSongByNumber(item).title)">\n        <ion-icon name="trash"></ion-icon>\n        delete\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\pages\favoris\favoris.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_0__services_songs_service__["a" /* SongsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_numberInput_service__["a" /* numberInputService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */]])
    ], FavorisPage);
    return FavorisPage;
}());

//# sourceMappingURL=favoris.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_numberInput_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_songs_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_songs_list__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, songsService, nbrInputService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.songsService = songsService;
        this.nbrInputService = nbrInputService;
    }
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.songs = __WEBPACK_IMPORTED_MODULE_4__data_songs_list__["a" /* default */];
        setTimeout(function () {
            _this.myInput.setFocus();
        });
        this.pbt = this.processByTitle("");
        this.pbl = this.processByLyric("");
        //  alert()
    };
    SearchPage.prototype.getItems = function (ev) {
        var a = ev.target.value;
        console.log(a);
        this.pbt = this.processByTitle(a);
        this.pbl = this.processByLyric(a);
    };
    SearchPage.prototype.view_song = function (num) {
        this.nbrInputService.number = num;
        this.navCtrl.pop();
    };
    SearchPage.prototype.processByTitle = function (query) {
        console.log("called!");
        var x = new RegExp("^" + query, "i");
        var y = new RegExp(query, "i");
        var a = [];
        var b = [];
        for (var index = 0; index < this.songs.length; index++) {
            var element = this.songs[index];
            if (x.test(element.title)) {
                a.push(element.title);
            }
            else if (y.test(element.title)) {
                b.push(element.title);
            }
        }
        return a.sort().concat(b.sort());
    };
    SearchPage.prototype.processByLyric = function (query) {
        console.log("processbylyric");
        var x = new RegExp(query, "i");
        var output = [];
        if (!query || query.length < 4) {
            return null;
        }
        for (var i = 0; i < this.songs.length; i++) {
            var element = this.songs[i];
            // console.log(element.number);
            var foo = element.verses.concat([element.chorus]);
            for (var j = 0; j < foo.length; j++) {
                var fragment = "";
                var num = void 0;
                var text = foo[j];
                if (x.test(text)) {
                    num = element.number;
                    // console.log(num);
                    for (var k = 0; k < text.split("\n").length; k++) {
                        var ligne = text.split("\n")[k];
                        if (x.test(ligne)) {
                            fragment = "..." + ligne + "...";
                            break;
                        }
                    }
                    output.push({
                        number: num,
                        fragment: fragment
                    });
                    break;
                }
            }
        }
        return output;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('searchBar'),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "myInput", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-searchbar animated=true  (ionInput)="getItems($event)" placeholder="Lohateny & Tonony" #searchBar></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="songs">\n    <ion-list>\n      <ion-list-header *ngIf="pbt || pbt==[]">Lohateny</ion-list-header>\n      <ion-item *ngFor="let item of pbt" (click)="view_song(songsService.getSongByTitle(item).number)">\n        <h2>\n          {{ songsService.getSongByTitle(item).title }}\n        </h2>\n        <p>Hira faha : {{ songsService.getSongByTitle(item).number }}</p>\n      </ion-item>\n    </ion-list>\n  \n    <ion-list>\n      <ion-list-header *ngIf="pbl || pbl==[]">Tonony</ion-list-header>\n      <ion-item *ngFor="let json of pbl" (click)="view_song(json.number)">\n        <h3>\n          {{ json.number }}.{{ songsService.getSongByNumber(json.number).title }}\n        </h3>\n        <p style="text-align: right;">\n          {{ json.fragment }}\n        </p>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_songs_service__["a" /* SongsService */],
            __WEBPACK_IMPORTED_MODULE_0__services_numberInput_service__["a" /* numberInputService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favoris/favoris.module": [
		276,
		2
	],
	"../pages/modal/modal.module": [
		277,
		1
	],
	"../pages/search/search.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_localStorage_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_numberInput_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favoris_favoris__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_songs_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, songs, menuCtrl, modalCtrl, nmbrInputService, lss, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.songs = songs;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.nmbrInputService = nmbrInputService;
        this.lss = lss;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
    }
    HomePage.prototype.ngOnInit = function () {
        this.size = 20;
        this.test = this.songs.getSongByNumber(this.nmbrInputService.number);
        this.current_input;
    };
    HomePage.prototype.onOpenMenu = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.loadFavoris = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__favoris_favoris__["a" /* FavorisPage */]);
        this.menuCtrl.close();
    };
    HomePage.prototype.exit = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Fanamafisana',
            message: 'Hiala tanteraka?',
            buttons: [
                {
                    text: 'Tsia',
                    handler: function () {
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Eny',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.addToFavorites = function (num) {
        this.lss.add_one_favorite(num);
    };
    HomePage.prototype.removeFromFavorites = function (num) {
        this.lss.remove_one_favorite(num);
    };
    HomePage.prototype.isFavorite = function (num) {
        for (var index = 0; index < this.lss.object.favorites.length; index++) {
            var element = this.lss.object.favorites[index];
            if (num == element) {
                return true;
            }
        }
        return false;
    };
    HomePage.prototype.showModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */]);
        modal.present();
        this.modal_showed = true;
        this.nmbrInputService.ready_to_clear = true;
        modal.onWillDismiss(function () {
            _this.nmbrInputService.ready_to_clear = false;
            _this.modal_showed = false;
        });
    };
    HomePage.prototype.inc = function () {
        this.nmbrInputService.increment();
        this.lss.setLastStorage(this.nmbrInputService.number);
    };
    HomePage.prototype.dec = function () {
        this.nmbrInputService.decrement();
        this.lss.setLastStorage(this.nmbrInputService.number);
    };
    HomePage.prototype.show_number = function () {
        if (!this.nmbrInputService.number) {
            return "    ";
        }
        var foo = this.nmbrInputService.number + "";
        switch (foo.length) {
            case 1:
                return "  " + foo + "  ";
            case 2:
                return " " + foo + " ";
            case 3:
                return foo;
        }
    };
    HomePage.prototype.showConfirm = function (num) {
        var _this = this;
        var title = this.songs.getSongByNumber(num).title;
        var message;
        var isFavorite = this.isFavorite(num);
        if (isFavorite)
            message = 'Irinao hiala ao amin\' ≪ Ireo Hirako ≫ ny hira faha ' + num + " : " + title + '?';
        else
            message = 'Irinao hiditra ao amin\' ≪ Ireo Hirako ≫ ny hira faha ' + num + " : " + title + '?';
        var confirm = this.alertCtrl.create({
            title: 'Ireo Hirako',
            message: message,
            buttons: [
                {
                    text: 'Tsia',
                    handler: function () {
                        if (isFavorite)
                            _this.addToFavorites(num);
                        else
                            _this.removeFromFavorites(num);
                        // console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Eny',
                    handler: function () {
                        if (isFavorite)
                            _this.removeFromFavorites(num);
                        else
                            _this.addToFavorites(num);
                        // console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\pages\home\home.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n      <ion-range [(ngModel)]="size" min="10" max="30">\n          <ion-icon range-left small name="eye"></ion-icon>\n          <ion-icon range-right name="eye"></ion-icon>\n        </ion-range>\n        <br>\n    <ion-list>\n      <button ion-item (click)="loadFavoris()">\n        <ion-icon name="star" item-left>\n        </ion-icon>\n        Ireo Hirako\n      </button>\n      <button ion-item (click)="exit()">\n        <ion-icon name="exit" item-left>\n        </ion-icon>\n        Hiala\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="onOpenMenu()">\n        <ion-icon name="menu">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons left >\n        <button ion-button icon-only (click)="showConfirm(nmbrInputService.number)" [color]="isFavorite(nmbrInputService.number)?\'yellow\':\'\'">\n          <ion-icon name="star">\n          </ion-icon>\n        </button>\n      </ion-buttons>\n\n    <ion-title style="text-align: center;">\n      <button ion-button icon-only clear (click)="dec()">\n        <ion-icon name="arrow-round-back">\n        </ion-icon>\n      </button>\n      <button ion-button outline id="button_number" (click)="showModal()" [color]="nmbrInputService.ready_to_clear?\'danger\':\'\'">\n        <span *ngIf="nmbrInputService.reverse && modal_showed">|</span>{{ show_number() }}\n        <span *ngIf="!nmbrInputService.reverse && modal_showed">|</span>\n      </button>\n      <!-- <span>\n          <ion-input type="number" value="518" style="display: inline-block"></ion-input>\n      </span> -->\n      <!-- <ion-input type="number" value="518" style="display: inline-block"></ion-input> -->\n\n\n      <button ion-button icon-only clear (click)="inc()">\n        <ion-icon name="arrow-round-forward">\n        </ion-icon>\n      </button>\n    </ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="showConfirm(nmbrInputService.number)" [color]="isFavorite(nmbrInputService.number)?\'yellow\':\'\'">\n        <ion-icon  name="star">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="goToSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content #content padding>\n  <div *ngIf="songs.getSongByNumber(this.nmbrInputService.number)" style="text-align: center">\n\n    <h3 [style.font-size.px]="size*1.4">\n      {{ this.songs.getSongByNumber(this.nmbrInputService.number).title }}\n    </h3>\n\n    <div *ngIf="this.songs.getSongByNumber(this.nmbrInputService.number).verses[0]">\n      <pre [style.font-size.px]="size"><span style="color: #488aff;" [style.font-size.px]="size*1.3">1. </span>{{ this.songs.getSongByNumber(this.nmbrInputService.number).verses[0] }}</pre>\n    </div>\n\n    <div *ngIf="this.songs.getSongByNumber(this.nmbrInputService.number).chorus" style="text-align: center;">\n      <ion-note [style.font-size.px]="size*0.9">Isan\'andininy</ion-note>\n      <pre class="chorus" [style.font-size.px]="size">{{ this.songs.getSongByNumber(this.nmbrInputService.number).chorus }}</pre>\n    </div>\n\n    <div>\n      <div *ngFor="let verse of this.songs.getSongByNumber(this.nmbrInputService.number).verses; index as i">\n        <div *ngIf="i">\n          <pre [style.font-size.px]="size"><span style="color: #488aff;" [style.font-size.px]="size*1.3">{{ i+1 }}.</span> {{ verse }}</pre>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_songs_service__["a" /* SongsService */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_numberInput_service__["a" /* numberInputService */],
            __WEBPACK_IMPORTED_MODULE_0__services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_numberInput_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_modal_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_favoris_favoris__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_search_search__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_songs_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_localStorage_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_favoris_favoris__["a" /* FavorisPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_modal_modal__["a" /* ModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favoris/favoris.module#FavorisPageModule', name: 'FavorisPage', segment: 'favoris', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_favoris_favoris__["a" /* FavorisPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_modal_modal__["a" /* ModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__services_songs_service__["a" /* SongsService */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* MenuController */],
                __WEBPACK_IMPORTED_MODULE_12__services_localStorage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_0__services_numberInput_service__["a" /* numberInputService */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\app\app.html"*/'<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"C:\Users\Diamondra\Desktop\mg.songbook.fjff\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return numberInputService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localStorage_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_songs_list__ = __webpack_require__(58);


var numberInputService = /** @class */ (function () {
    function numberInputService() {
        var lss = __WEBPACK_IMPORTED_MODULE_0__localStorage_service__["a" /* LocalStorageService */].getLocalStorage();
        if (lss) {
            this.number = lss.last;
        }
        else {
            this.number = 1;
        }
    }
    numberInputService.prototype.concatenate = function (n) {
        if (this.number) {
            var condition = void 0;
            if (this.reverse)
                condition = n + "" + this.number;
            else
                condition = this.number + "" + n;
            if (parseInt(condition) < __WEBPACK_IMPORTED_MODULE_1__data_songs_list__["a" /* default */].length)
                this.number = parseInt(condition);
            else
                this.number = __WEBPACK_IMPORTED_MODULE_1__data_songs_list__["a" /* default */].length;
        }
        else {
            this.number = n;
        }
    };
    numberInputService.prototype.backspace = function () {
        var len = (this.number + "").length;
        if (len && !this.ready_to_clear) {
            if (!this.reverse) {
                this.number = parseInt((this.number + "").substring(0, len - 1));
            }
            else {
                this.number = parseInt((this.number + "").substring(1, len));
            }
        }
        else if (this.ready_to_clear) {
            this.number = 0;
        }
        this.ready_to_clear = false;
    };
    numberInputService.prototype.increment = function () {
        if (this.number >= __WEBPACK_IMPORTED_MODULE_1__data_songs_list__["a" /* default */].length) {
            this.number = 1;
        }
        else {
            this.number++;
        }
    };
    numberInputService.prototype.decrement = function () {
        if (this.number <= 1) {
            this.number = __WEBPACK_IMPORTED_MODULE_1__data_songs_list__["a" /* default */].length;
        }
        else {
            this.number--;
        }
    };
    return numberInputService;
}());

//# sourceMappingURL=numberInput.service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        var lss = LocalStorageService.getLocalStorage();
        if (lss) {
            this.object = lss;
        }
        else {
            this.setLocalStorage(this.get_initial_value());
        }
    }
    LocalStorageService.prototype.get_initial_value = function () {
        return {
            last: 1,
            favorites: []
        };
    };
    LocalStorageService.getLocalStorage = function () {
        var songBookFjff = localStorage.getItem('songBookFjff');
        if (songBookFjff)
            return JSON.parse(songBookFjff);
        return null;
    };
    LocalStorageService.prototype.setLocalStorage = function (data) {
        this.object = data;
        var a = JSON.stringify(data);
        localStorage.setItem('songBookFjff', a);
    };
    LocalStorageService.prototype.setLastStorage = function (num) {
        var new_object;
        if (this.object) {
            new_object = this.object;
            new_object.last = num;
        }
        else {
            new_object = {
                last: num,
                favorites: []
            };
        }
        this.setLocalStorage(new_object);
    };
    LocalStorageService.prototype.setFavoritesStorage = function (new_favs) {
        var new_object = this.object;
        new_object.favorites = new_favs;
        this.setLocalStorage(new_object);
    };
    LocalStorageService.prototype.add_one_favorite = function (num) {
        var lss = LocalStorageService.getLocalStorage();
        if (!lss)
            lss = this.get_initial_value();
        lss.favorites.push(num);
        this.setLocalStorage(lss);
    };
    LocalStorageService.prototype.remove_one_favorite = function (num) {
        var lss = LocalStorageService.getLocalStorage();
        var result = [];
        for (var index = 0; index < lss.favorites.length; index++) {
            var element = lss.favorites[index];
            if (!(element == num))
                result.push(element);
        }
        this.setFavoritesStorage(result);
    };
    return LocalStorageService;
}());

//# sourceMappingURL=localStorage.service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_songs_list__ = __webpack_require__(58);

var SongsService = /** @class */ (function () {
    function SongsService() {
        this.songs = __WEBPACK_IMPORTED_MODULE_0__data_songs_list__["a" /* default */];
        // console.log(this.songs);
    }
    SongsService.prototype.getSongByNumber = function (number) {
        for (var index = 0; index < this.songs.length; index++) {
            var element = this.songs[index];
            // console.log(element);
            if (element.number == number) {
                return element;
            }
        }
        return null;
    };
    SongsService.prototype.getSongByTitle = function (title) {
        for (var index = 0; index < this.songs.length; index++) {
            var element = this.songs[index];
            // console.log(element);
            if (element.title == title) {
                return element;
            }
        }
        return null;
    };
    return SongsService;
}());

//# sourceMappingURL=songs.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        "title": "AFA-PO AMIN'I JESOSY",
        "number": 489,
        "chorus": "Afa-po tokoa, tena afa-po\nAmin'i Jesosy aho;\nFa moa mba afa-po amiko\nJeso Tompo?\nIzany no fanontaniana.",
        "verses": [
            "Afa-po amin'i Jesosy\nSy 'zay nataony ho ahy aho;\nNijal'Izy mba hanavotra ahy,\nMat'Izy mba hanafak'ahy.",
            "Jesosy no tena Sakaiza\nNy hany tsara indrindra;\nAzo ianteherana hatrany\nAo anaty fitsapana.",
            "Reko mandrakariva Izy\nMiteny amiko hoe:\nNdeha tadiavo ireo very;\nAvereno ireo mania.",
            "Raha hifarana ny androko,\nKa hita ilay ony aho;\nMoa mba hitsena ahy Jeso Tompo?\nHifaliako mandrakizay."
        ]
    },
    {
        "title": "AFINDRAFINDRA SINY",
        "number": 337,
        "chorus": "Ny famindrafindrana siny\nMoa efa nolalovanao?\nFa mahasoa anao izany\nRaha tena te-hadio ianao.",
        "verses": [
            "Ny famindrafindrana siny\nIzay tsy nampoizinao\nTsy natao hahakivy\nFa mandrosoa hatrany ianao.",
            "Misy toetra ratsy izay manimba\nTena mahasorena anao\nTsy nahitanao fanalahidy\nHahatafavoaka anao.",
            "Misy fahatsapana ambony\nTokony ho azonao\nFa mila famindrana siny\nTsy hampirehareha anao.",
            "Misy hevitra izay mitsiry\nManahiran-tsaina anao\nFa raha vao nafindra siny\nNihiratra ny masonao.",
            "Tsy anjaranao ny hifidy\nEndri-tsiny hitoeranao\nFa Jesosy tena hendry\nMahay mitarika anao.",
            "Mba meteza hafindra siny\nToa anay koa ianao\nMba hiaisotra ny faika\nIzay tsy mampijoro anao."
        ]
    },
    {
        "title": "AHOANA NO FISAOTRA",
        "number": 670,
        "chorus": "Efa jamba aho raha tsy nino\nNijaly, ory, feno tahotra\nEkeo ny fankasitrahako\nJeso Tompo (in-2)",
        "verses": [
            "Te-hankasitraka aho\nNoho izay nataonao\nTsy haiko ny hilaza\nAmin-teny tsy tanteraka\nAmpianaro ho tia anao\nToy ny nitiavanao ahy\nSatria tsy nampoiziko\nIreo izay nomenao ahy",
            "Raha misy fihemorana\nHianao manandratra ahy\nRaha tsy afa-mandroso\nHianao no mitarika ahy\nRaha tsy azo antoka\nHianao mampijoro ahy\nVao maraina Hianao\nNampiorina ny finoako"
        ]
    },
    {
        "title": "AHY IZANY",
        "number": 491,
        "chorus": "Ahy 'zao ny fiadanana\nAhy mandrakizay, fiadanam-be\nAhy izany, isaorana anie\nNy anaran'ny Tompo.",
        "verses": [
            "Mitoetr'ato anatiko izao\nNy fiadanan'Andriamanitra:\nEfa nesoriny 'reo tahotro\nSy fisalasalako.",
            "Fitsaharana mahafa-po tokoa\nNo napetrany ao am-poko\nFitahiana isan'andro ihany koa\nNo arotsany amiko.",
            "Nomeny any ny fifaliana\nTsy mety lany fa maharitra\nKa ho fiderana ny Anarany\nDia manompo Azy aho.",
            "Nampahery ny fanahiko tokoa\nNy fitiavan'Andriamanitra;\nOnjam-pifaliana tsy mitsahatra\nNo mameno ny foko."
        ]
    },
    {
        "title": "AHY JESO",
        "number": 7,
        "verses": [
            "Ahy Jeso, ahy Izy\nTompo, Mpamonjy soa;\nNitady ahy, namonjy ahy,\nNahafa-po ahy Izy.\nTiako, ankalazaiko\nIanao Mpanjakako;\nApetrako Aminao ny fiainako\nMandra -piantsoanao ahy."
        ]
    },
    {
        "title": "AIZA IANAO, JESOSY O!",
        "number": 792,
        "chorus": "Aiza ianao Jesosy ô, aiza?\nHamikirako 'ndrao maty aho;\nAzon-tahotr'aho, vonjeo tsy ho fefika.\nAvia Tompo ô! tsinjovy aho.",
        "verses": [
            "Nivadibadika ny toetr'andro\nTakona indraindray ny masoandro;\nRaha manarona ahy ny aizim-pito\nRaiso ny tanako ry Tompo ô!",
            "Mampanahy ny herin'ny tafiotra\nAry ny aiko mila ho ritra:\nTsy takatry ny saiko fa rerak'aho\nManiry famonjena avy Aminao.",
            "Mila handetika ny sambokely\nNy onja vaventy sy masiaka,\nToa tsy hitako intsony 'zay atao,\nFaingana, Tompo ô! ampio.",
            "Ianao, ry Mpihaino vavaka,\nHamonjy ny tra-doza ho afaka\nHampangiana ny onja misafoaka\nDidio hitsahatra ny tafiotra."
        ]
    },
    {
        "title": "AKAIKIN'IZAY MIANTSO AZY",
        "number": 165,
        "chorus": "Akaikin'izay miantso Azy\nAndriamanitra,\nDia'zay miantso Azy\nMarin'amin'ny fo;\nTsy ho menatra tokoa\nIzay miandry Azy\nHaneho fahagagana\nHamonjen'ahy Izy.",
        "verses": [
            "Manohana ny efa\nho lavo ny Tompo\nMampitraka izay\nmitanondrika Izy\nNa ory sy malahelo aza aho ety,\nNy Raiko any an-danitra\nNo mihevitra ahy.",
            "Ny rahona mitatao\ndia mbola hisava\nTsy miova ny finoako,\nHandresy hatrany aho;\nTohizako ny ady, tsy hila volefon'aho\nInoako fa hanampy ahy Jesosy\nheriko.",
            "Tsy misy fakam-panahy\nMety tsy ho resiko.\nTsy misy fitsapana mety\nHampihemotr'ahy;\nHanoro làlan'ahy hahafahako Jeso\nVao mainka ho mafy orina\nny finoako."
        ]
    },
    {
        "title": "AKAIKIN'NY FON'NY RAY",
        "number": 435,
        "chorus": "Ry Jesosy Mpanavotra\nAvy ao am-pon'ny Ray\nTazony izahay ho\nEo anilan'ny Ray.",
        "verses": [
            "Eo akaikin'ny fon'ny Ray\nNo fitsaharana;\nToerana tsy azon'ny\nOta hanjakana.",
            "Eo akaikin'ny fon'ny Ray\nNo fampiononana;\nToerana hihaonana.\nAmin'nyMpamonjy.",
            "Eo akaikin'ny fon'ny Ray\nNo fahafahana;\nFifaliana, fiadanana\nNo mitoetra ao."
        ]
    },
    {
        "title": "AKAIKINAO NY VARAVARANA",
        "number": 257,
        "chorus": "Akaiky anao ny varavarana\nMivoha ho anao\nAkaiky anao (in-2)\nToa hiditra, nefa lavitra.",
        "verses": [
            "Ry mpanota ana, sasatra\nAkaikinao ny vavahady\nMiandry anao ny fiadanana\nAry koa ny fitsaharana.",
            "Nanolo-tena Izy re,\nHamonjy ny fanahinao\nMaratra izany fony re,\nRaha any ivelany ianao.",
            "Mielina ny andronao\nHo tonga koa ny aizim-pito\nHo feno fanenenana ianao\nSatria tsy mba hiditra ao",
            "Ho afaka ny gadranao,\nFa manatona izao\nalohan'ny tafiotra re,\nMidira faingana."
        ]
    },
    {
        "title": "AKAIKY ANAO, ANILANAO",
        "number": 239,
        "verses": [
            "Akaiky Anao, anilanao\nSintony aho Mpamonjiko ô!\nFihino eo an-tratranao aho\nAlofy tsy hanana ahiahy (in-2)",
            "Akaiky Anao, anilanao\nTsy misy fanatitra entiko\nAfa-tsy ny foko meloka\nDiovy amin'ny rànao aho. (in-2)",
            "Akaiky Anao, anilanao\nAfoiko ny ota sy rehaka\nSy ny fahafinaretany\nFa voahombo Jeso Tompoko. (in-2)",
            "Akaiky Anao, anilanao\nRaha mbola velona koa ny aiko\nMandra-pifaran'ny adim-panahy\nAkaikinao Tompo, anilanao. (in-2)"
        ]
    },
    {
        "title": "AKANJO FOTSY",
        "number": 428,
        "verses": [
            "Akanjo fotsy no hotafiantsika\nFitafiana soa no homena antsika\nIlay tànana soa sy masina\nNo honenan'ireo voavoatra.",
            "Hiaraka mandeha Aminy isika\nTanteraka ao ireo izay ninoana\nMahita ny hatsaran'ny Mpamonjy\nHanandratra fiderana Azy.",
            "Nosasany tokoa ny akanjoko\nTamin'ny Ràn'ny Zanak'Ondry soa\nHiditra tsy ho ela ao re\nNy olom-boavonjy marobe. .",
            "Akanjo fotsy no hotafiantsika\nFitafiana soa no homena antsika\nIlay tanàna soa sy masina\nNo honenan'ireo voavotra?"
        ]
    },
    {
        "title": "ALEFANAY AO ANATY FASIKA SATANA",
        "number": 164,
        "chorus": "Alefanay anaty fasika tokoa\n'Reo fanahy manangoly marobe\nTsy hijanona izahay raha tsy ao\nIlay Satana tsy mba tia an'i Jesosy.",
        "verses": [
            "Tonga ny Mpamonjy\nIzay nitady ahy\nManan-kery\nHanala'reo gadrako\nFa natolotro indray\nNy tenako Jesosy\nAfaka tokoa izao.\n(Haleloia!)",
            "Torotoro izao\nIlay mpiampanga anay\nKa nazera avy any an-danitra\nny anjeliny\nTonga re ny famonjena antsika\nsy ny hery,\nFandresena noho anay,\n(Haleloia!)",
            "Na manonja mafy re\nNy onja eto an-tany,\nKa mitady handresy anay\nIlay menarana be,\nTsy ho resy\nNa ho kivy ny fanahinay\nNoho ny Zanak'Ondrinay\n(Haleloia!)"
        ]
    },
    {
        "title": "ALEOKO MANANA AN'I JESO",
        "number": 140,
        "chorus": "Na dia atao hoe ho mpanjaka aza\nHo tonga manan-daza;\nAleoko ihany manana\nAn'i Jesosy aho. '",
        "verses": [
            "Aleoko manana an'i Jesosy\nToy'zay volafotsy na volamena\nAleoko aho an'i Jesosy\nToy'zay voagejan'ny harena.",
            "Aleoko manana an'i Jesosy\nToy'zay ny fideran'olombelona\nAleoko mifikitra Aminy aho\nToy'zay matimatin'ny rehaka.",
            "Tsara mihoatra noho ny lilia\nMamy mihoatra noho ny tantely\nIzy no zava-drehetra ilaiko\nAleoko manana an'i Jesosy."
        ]
    },
    {
        "title": "ALEOKO MANKANY AMIN'NY RAY",
        "number": 605,
        "verses": [
            "Sambatra eto an-tany\nMihoatra izany any ambony\nKa raha asaina misafidy,\nAleoko mitoetra eo amin'ny Ray\nSy monina ao amin'ilay lapasoa\nTsy haiko saintsainina\n'Zay nomaniny ho ahy\nNampanantena ahy Izy fa ho avy\nindray mba haka ahy\nHo any aminy any an-danitra\nizay honenako.",
            "Sarotra ny hisafidy\nNa hijanona eto\nNa hankeo anilan'i Ray\nRaha mitoetra irery aho\nKa toa matoky tena\nHo foana izany raha mibanjina amim-\npinoana ilay tanàna\nIzay hodiako any amin'ny Ray.",
            "Sarotra ny hisafidy\nNa hijanona eto\nNa hankeo anilan'ny Ray\nRehefa tong any andro\nHandaozako ny tany\nHitomany eo amin'ny nofoko\nefa mangatsiaka ireo sakaizako\nIzaho anefa ho any amin'ny Ray."
        ]
    },
    {
        "title": "ALFA SY OMEGA",
        "number": 730,
        "chorus": "Ianao ry Jesosy ô\nNo Alfa sy Omega,\nIlay efa maty\nFa velona mandrakizay;\nJesosy no Làlana\nSy fahamarinana\nAry Fiainana ho an'\nIzay rehetra mino Azy.",
        "verses": [
            "Ianao ry Jesoso ô\nNo Tompon'ny fiainana,\nFa nitsangana Ianao,\nResy ny fahafatesana;\nMenatra ireo mpandrafy\nFa foana ilay fasana;\nHanaraka Anao izahay\nRy Zanak'ondry masina",
            "Afa-tahotr'izahay\nFa manana anao tokoa\n'Zay mitantana anay\nHo tody ao an-dapa soa\nEndrey ny famindramponao\nRy Tompo Andriamanitray;\nFa na dia olom-bery aza\nNovonjenao izahay.",
            "Tsara noho ny harena\nNy fitiavanao anay,\nFa 'lay very tao Edena\nDia mbola azonay indray;\nTsy hainay ny hangina\nRaha mahatsiaro an'ireo\nHamaroan'ny fitahiana\nKa asandratray ny feo."
        ]
    },
    {
        "title": "ALINA MASINA",
        "number": 207,
        "verses": [
            "Alina masina tonga ny Mpanavotra;\nIndro, teraka ao Betlehema\nNy Mpanjakan'i Jerosalema\n;;; Jeso teraka izao;;;",
            "Alina masina, ny anjely midina\nKa miara-mihoby hoe:\nIndro ny fiadanam-be\n;;; Jeso teraka izao;;;",
            "Alina masina, nisehoan'ny Zanaka\nNy mazava miposaka\nFa ny tahotra afaka\n;;; Mifalia izao;;;"
        ]
    },
    {
        "title": "ALOFY AHO TOMPO O!",
        "number": 681,
        "verses": [
            "Alofy amin'ny elatrao aho Tompo ô\nAfeno ao amin'ny vatolampy\nTsy ho tra-doza",
            "Mifaly fa zanaky ny Mpanjaka\nAlofy amin'ny elatrao aho Tompo ô!",
            "Toy ny sambo mamaky ny onja\nManara-maso am-pitiavana Izy\nNahita ahy Jeso ka nitantana ahy.\nNilaza fa fa tsy handao ahy Izy"
        ]
    },
    {
        "title": "AMBARANAY",
        "number": 680,
        "verses": [
            "Ambaranay fa Kristy no Tompo\nLazainy fa mitsangana Izy",
            "Ambony indrindra (in-2)\nDerao Jesosy, f'ambony indrindra",
            "Ambany tongony (in-2)\nNy rehetra eo ambany tongony",
            "Eo ambany tongotsika (in-2)\nSatana sy ny fahefany rehetra",
            "Fa isika mijoro\nnohon'ny Herin'ny Rany\nManam-pahefana amin'ny\nRan'i Jesosy isika."
        ]
    },
    {
        "title": "AMEN! HOTANTERAKA ANIE IZANY",
        "number": 297,
        "verses": [
            "Hahazo zavatra 'zay mino\nTsy miahanahana ao am-pony\nValim-bavaka tsy voafetra\nRaha araka ny sitrapony\nAmen (in-3)\nZava-marina anie izany.",
            "Ho sitrana izay marary\nNoho ny dia kapok'i Jesosy\nFametrahan-tànana ihany\nDia hampiafana tanteraka\nAmen (in-3)\nTena azo antoka izany.",
            "Mbola hisy làlana ihany\nHanafaka fakam-panahy\nIzay tsy hoe tafahoatra\nFa araka izay zaka ihany\nAmen (in-3)\nAzo inoana anie izany.",
            "Ho avy faingana Jesosy\nNa dia toa nandrasana ela\nNy fahoriako eto an-tany\nSamy tsy hotsaroako intsony\nAmen (in-3)\nHo tanteraka anie izany"
        ]
    },
    {
        "title": "AMIN'NY FOTOANA ILAKO AZY",
        "number": 86,
        "chorus": "Amin'ny fotoana ilàko Azy ré\nNo mampifaly, mampionona\nidrindra Jesosy.",
        "verses": [
            "Amin'ny fotoana ilàko an'i\nJeso dia akaiky Izy;\nAmin'ireo andro mahory;\nVonona hamonjy Izy.",
            "Amin'ny fotoana ilàko Azy,\nDia tsy mandao Jeso;\nFa soloany fifaliana ny alaheloko.",
            "Amin'ny fotoana ilàko Azy\nDia mahery Jeso;\nSoloany hira ny sentoko\nSy ireo entako.",
            "Amin'ny fotoana ilàko Azy\nDia mamaly ahy Izy,\nMiambin'ahy am-pitiavana\nMba tsy ho lavo aho."
        ]
    },
    {
        "title": "AMINTSIKA ANDRIAMANITRA",
        "number": 708,
        "chorus": "O! avia ry Imanoela o!\nHamonjy ny mijaly\nMila Mpanafaka,\nMiandry Anao ny firenena samihafa\nManandratra ny Famonjena entinao.",
        "verses": [
            "O! avia Jesosy ô! Ry lay Mesia\nHamonjy ny olonao amin'ota\n'Zay andevozin'ny santana,\nVoafatotra\nAmin'ny karazam-pahazarandratsy.",
            "O! Avia ry solofon'i Jese ô!\nAfaho 'zay mijaly sy migadra,\nVoasaron'ny aizin'ny helo\nNy olona\nKa tsy mahalala izay tokony hatao.",
            "Avia ry fanalahidin'i Davida ô!\n'Zay mamaha\nKa tsy misy maha-hidy,\nVohay ny lanitra\nHidiran'ny navotanao,\nSitrakao ny hampadova azy izany.",
            "O! avia ry irin'ny firenena ô!\nAmpiraiso fo\nSy saina ny tany,\nHitsaharan'ny fifandirana\nSy ny ady\nIanao no hitondra fiadanana ety."
        ]
    },
    {
        "title": "AMPAHAFANTARO AHY NY LALANAO",
        "number": 553,
        "verses": [
            "Ampahafantaro ahy ny lalanao\nAmpianaro ny sitrakao\nTariho amin'ny fahamarinanao\nAmpianaro, ampianaro (bis)\nAndriamanitry ny famonjena ahy\nNo andrasako lalandava (bis)"
        ]
    },
    {
        "title": "AMPIANARO AHY NY LALANAO",
        "number": 152,
        "verses": [
            "Ampianaro ahy ny làlanao\nTohano ny antranao, tariho aho;\nAmpio aho handeha amim-pinoana\nAmpianaro ahy ny làlanao.",
            "Raha misy tahotra sy ahiahy,\nAmpianaro ahy ny làlanao\nKa misehoa Ianao amin'ny adiko,\nAmpianaro ahy ny làlanao",
            "N'aiza n'aiza ny nanjarako.\nAmpianaro ahy ny làlanao\nMandra-pahatapitry ny diako ety\nAmpianaro ahy ny làlanao.",
            "Raha misy tafiotra sy rahona,\nAmpianaro ahy ny làlanao\nMandra-pahazoako ny valisoako\nAmpianaro ahy ny làlanao"
        ]
    },
    {
        "title": "AMPIANARO HIVAVAKA AHO",
        "number": 138,
        "chorus": "Ny ho velona ao Aminao,\nAry Ianao ato anatiko,\nHo feno hery avy Aminao\nNo faniriako, ry Tompo ô!",
        "verses": [
            "Ampianaro hivavak'aho,\nIzany no fitarainako;\nNy hahalala ny sitrakao,\nNo hany fanirian'ny foko.",
            "Mitondra hery ny vavaka.\nMandresy ota, fakam-panahy\nMaro ireo'zay nihemotra,\nTafio hery aho haharitra.",
            "Ampianaro hivavak'aho\nTsy misy tsar'ato anatiko\nFa ny vavaka sy ny herinao\nNo hahefako ny asanao.",
            "Ampianaro hivavak'aho\nHo eo Aminao isan'andro\nKa ianao no hiantok'ahy\nAmin'ny androm-piainako."
        ]
    },
    {
        "title": "AMPIO AHO JESOSY",
        "number": 532,
        "verses": [
            "Tiako Hianao Jesosy ka deraiko\nNy fiainako atolotro Anao doria\nAoka ny Fanahinao no ato am-poko\nAmpio aho hihira Anao Jeso.",
            "Tiako Hianao Jesosy ka hiraiko\nAnkalazako an-kira lalandava\nMampamiratra masoandro ato\nam-poko\nAmpio aho hihira Anao Jeso.",
            "Tiako Hianao Jesosy ka tompoiko\nNy foko mifikitra Aminao hatrany\nNy fitiavanao mitombo ao am-poko\nAmpio aho hihira Anao Jeso."
        ]
    },
    {
        "title": "AMPODIO NY FIFALIAKO",
        "number": 554,
        "verses": [
            "Ampandreneso fifaliana,\nFiravoana aho\nHifalian'ny taolana\nVoavakivakinao (in-2)\nAfeno ny tavanao ny otako\nVonoy ny heloko rehetra\nAmorony fo madio aho Tompo ô!\nAmpodio ny fifalian'ny famonjena.",
            "Ampandreneso fifaliana\nFiravoana aho\nHifalian'ny taolana\nVoavakivakinao (in- 2)\nNy mpanonta ampivereno aminao\nVonjeo aho afaka amin'ny\nfamalianao\nHihobian'ny vavako\nNy fahamarinanao",
            "Ampandreneso fifaliana\nFiravoana aho\nHifalian'ny taolana\nVoavakivakinao (in-2)\nSokafy Tompo ô ny molotro\nHanambara ny fiderana Anao\nNy fo torotoro mangorakoraka\nNo sitrakao fa tsy fanatitra"
        ]
    },
    {
        "title": "AMPY AHY NY FAHASOAVANAO",
        "number": 594,
        "chorus": "Ampy (in-3) ahy ny fahasoavany\nAoka tsy hihena ny famindra\nTohizo ny dia, mitrakà",
        "verses": [
            "Mahita ahy Andriamanitra\nNy drafi- pitiavany dia amiko\nmbamin'ny asako\nManara-maso Izy\nTsy mahafantatra aho\nNefa notarihiny amin'izay misy ahy\nAmpy ahy ny fahasoavany.",
            "Jereo hoy ny Baiboly\nNy vorona eny an-tsaha\nMarefo ny ain'izy ireo\nMiahy ireo ny Ray\nSatria ny fanatrehany\nNo mamelona ireo\nFeno fahatokiana aho\nAmpy ahy ny fahasoavany.",
            "Fa tombotsoa mamy dia mamy\nNy aiko eo an-tanany\nInona no mampanahy ahy\nny amin'ny ampitso?\nAmpy ho an'ny andro\nny ratsy miseho eo aminy\nMarina izany kanefa\nAmpy ahy ny fahasoavany.",
            "Tsy nampoiziko tokoa\nNy hatevin'ny aizina\nNampandalovina ireo olony\nAry nalehako koa\nMiova endrika ny ady\nFa tsy hoe tapitra\nAmin'ny fahoriana be\nNo idirana ny lanitra."
        ]
    },
    {
        "title": "AN'ANDRIAMANITRA NY VONINAHITRA",
        "number": 626,
        "verses": [
            "Te- hisaotra Anao aho\nNoho izay rehetra nomenao\nNa dia tsy mendrika aza aho\nTsapako ny fitiavanao ahy\nFeon'anjely alin-kisa\nNo hanambara ny fiderako\nNa fahombiazana,\nNa fatiantoka dia avy Aminao",
            "Deraina ny Tompo (in-3)\nNoho ireo asa vitany\nNy Rany nanavotany ahy\nNy heriny nananganany ahy\nDeraina ny Tompo\nNoho ireo asa vitany",
            "Tiako raha ny fiainako\nHo an'ny Tompo, ho Azy\nRaha omem-boninahitra aho\nDia atolotro an'i Jesosy.\nNy Rany nanavotany ahy\nNy heriny nananganany ahy\nDeraina ny Tompo\nNoho ireo asa vitany."
        ]
    },
    {
        "title": "AN'I JESOSY IRERY VE NY HAZOFIJALIANA",
        "number": 31,
        "verses": [
            "An'i Jesosy irery ve\nNy hazofijaliana?\nTsia fa misy hazofijaliana\nHo ahy sy ho anao",
            "Ravoravo ny olo-masina\n'zay niory tety\nFifaliana ts'isy ranomaso\nNo azy'reo izao",
            "Entiko ny hazofijaliana\nFanoloran-tena\nFa misy satroboninahitra\nHoraisiko ary",
            "Eo amin'ny lalam-be kristaly\nAo an-tongotr'i Jeso\nNo hatolotro sy hapetrako\nNy diademako"
        ]
    },
    {
        "title": "AN-KOATRA ARY",
        "number": 198,
        "verses": [
            "Saino re'lay fonenana ary\nEo anilan'ny ony madio\nAo ireo masina mandrakizay\nMitafy ny fotsy sy soa\nAn-koatr'ary (in-2)\nSaino re'lay fonenana ary.",
            "Saino re ireo sakaiza ary\nNahavita ny diany tety\nSy ny hira hiainany ary\nAo amin'ny lapan'ny Ray\nAn-koatr'ary (in-2)\nSaino re'lay sakaiza ary.",
            "Ny Mpamonjiko izao indro ao\nSy ireo havako miala sasatra\nRehefa ilaozako ny alahelo\nHanidina hiakatra aho\nAn-koatr'ary (in-2)\nNy Mpamonjiko izao indro ao",
            "Tsy ho ela aho dia ho tonga ao\nRaha mifarana ny diako\nDia ho hitako ao'reo malala\n'Zay mitazana sy miandry ahy\nAn-koatr'ary (in-2)\nTsy ho ela aho dia ho tonga ao."
        ]
    },
    {
        "title": "AN-TANY LAVITRA",
        "number": 238,
        "chorus": "Feo I\nTsy maintsy mandeha aho hilaza\nny hafatra\nMandram-pahafantatra ilay\nfamonjena.\nFeo 2-3-4\nHilaza ny hafatra\nTsy maintsy mandeha hilaza aho\nIlay famonjena natao.",
        "verses": [
            "Handeha hanambara\nilay hafatra aho\nAny an-tany lavitra re\nAny amin'ireo izay tsy mbola\nNandre\nNy fitiavan'ilay Jesosy (Tompo)",
            "Tsy mihevitr'izay mahafianaritra re\nTany sarotra no miantso izao\nAmpy ahy rehefa ankasitrahana\nEo anatrehan'ny Tompo (Jeso).",
            "E! ianao izay mandany ny fifaliana\nAmin'ny sitra-po adala\nMitsangana ka ario ny otanao\nMirosoa, mitoria ianao (ianao).",
            "Misy ondry very ho entin'ny Tompo\nMba hilazana ny hafatra\nNanirak'ahy Izy mba hanangon'ireo\nHitondra, hiverina am-bala (vala)."
        ]
    },
    {
        "title": "ANAO AHO TOMPO O!",
        "number": 142,
        "chorus": "Tompo o! ataovy manakaiky Anao\nSy ny hazofijaliana aho\nManakaiky izany lanivoanao\nMivoa-drà ka isaorako.",
        "verses": [
            "Anao aho Tompo o! reko ny feonao\nIzay mitory ny fitiavanao ahy;\nNefa mila hatsangan'ny finoana aho\nHanatonako Anao.",
            "Hafaliana manao ahoana\nizany ora iray\nManatrika ny seza fiandrianana\nRaha mandohalika\nhivavaka aho Tompo ô!\nHiresaka Aminao Sakaizako.",
            "Atokàny ny fiainako hanao ny asanao\nAmin'ny hery sy ny fahasoavanao\nDia tohano ny fanahiko\nhibanjina amin-toky\nKa izay sitrakao ho sitrako.",
            "Misy fitiavan-dalina\ntsy takatry ny saiko\nMandra-pitako ilay ony maizina,\nMisy fifaliana tsy ananako\nmandra-podiko\nAmim-piadanana eo Aminao."
        ]
    },
    {
        "title": "ANAO NY ZAVA-TSOA",
        "number": 772,
        "verses": [
            "Anao tokoa ny zava-tsoa\nRehetra atolotrao anay\nRaiso ry Ray ny vavakay\nFitia, fankasitrahana",
            "Fitiavan-dehibe nasehonao re\nFamelana sy fiadanana\nAo ny faharim-po, harena be tokoa\nTamin'ireo zava-bitanao.",
            "Noho ny fahasoavanao amim-pinoana\nNo handraisanay ho akaiky Anao\nKa isan'ora misoko mora\nNy fodianay ho an-tranonao."
        ]
    },
    {
        "title": "ANARAM-BAOVAO",
        "number": 100,
        "chorus": "Anaram-baovao manan-daza\nAnjarako, anjarako\nMihoby ny anjely manjopiaka\nFa mpanota iray no mody\nAnaram-baovao manan-daza\nAnjarako, anjarako\nVoavela ny heloko\nKa ho any an-danitra aho\nMba tsy hania intsony.",
        "verses": [
            "Tamy aho mpanota teo aloha\nHandray ny famelana amin'ny\nTompoko\nAn-tsitrapo no nanolorany\nTsy mivadi-panekena Izy",
            "Mitaona ahy hietry ny nijaliany\nNy fitsaran'ny Ray\nno hany tahotro\nRaha nivoha ilay boky iray\nHitako voasoratra ao ny anarako.",
            "Noho ny hasoavany,\nvoavonjy aho\nEndrey ny fifalian'ny fanahiko\nAfak'ota aho, izao no fantatro\nNy Rany no famonjena ahy,"
        ]
    },
    {
        "title": "ANARANA MAHAVOTRA",
        "number": 264,
        "chorus": "Tsy misy anarana mahery\nMahafak'amin'ny sarotra\nFa ny an'i Jesosy irery\nIo no anara- mahavotra.",
        "verses": [
            "Jesosy no anaran'ilay\nOlona iray namonjy ahy;\nNanaiky an-tsitrapo Izy\nHisolo ahy tao Kalvary.",
            "Nitady olona izay tia ahy\nAn-taonany maro aho\nKanjo nolazaina tamiko\nFa Jesosy io olon'io.",
            "Rah'manontany ahy ianao\nHoe inona no vaovao\nDia valiako avy hatrany\nFa Jesosy, Jesosy ihany,",
            "Nampiasaiko avokoa\nIzay mety fanafana\nFa tsy nisy nahafapo\nHanome fitsaharana."
        ]
    },
    {
        "title": "ANARANA SOA",
        "number": 414,
        "chorus": "Tianay ny mihira an'i Kristy\nMpanjakantsika Izy\nHankalaza an'i Jesosy\nTompo Masina isika.",
        "verses": [
            "Tsy misy anarana soa\nEty an-tany, an-danitra\nNialoha ny nahaterahan'i Kristy\nMpamonjy antsika",
            "Nihantona tamin'ny hazo\nVoafantsika ny Tompo\nHo fantatry ny rehetra.\nFa tia azy isika.",
            "Ankehitriny Izy ambony\nSeza fiandrianany\nManan-kery hanafak'\nAmin'ny ota sy alahelo."
        ]
    },
    {
        "title": "ANATIN'NY INDRAY MIPI-MASO",
        "number": 776,
        "chorus": "Amin'indray mipi-maso\nNo hanovana antsika\nHatsangan'ireo maty amin'iTompo\nHo fanavotana.",
        "verses": [
            "Rehefa maneno ny\ntrompetran'ny arikanjely,\nAry ny faran'ny tany hamoaka\nireo maty,\nRehefa tonga am-boninahitra Jeso\nMbamin'ireo masina\nHe fihobian-dehibe\nno eny an-danitra,\nHataon'ireo tafakatra.",
            "Raha avy izy hidina\nanatin'ny rahona,\nHitsangana avy ao am-pasana '\nreo 'zay tia Azy\nHidera Azy am-pifaliana\nfa tsy amin-tahotra;\nRehef'atambatra indray\nny nofo sy ny fanahy\nDia tsy ho faty intsony.",
            "Ilay voa 'zay tamin'ny fahalemena,\nDia hitsangana amin-kery\navy amin'ny Fanahy\nNy Rà nividianany ny marobe\nno hohiraina,\nHiderana Azy\namim-pahasambarana,\nAmin'ny maraina vaovao."
        ]
    },
    {
        "title": "ANATINAO NY TOMPO",
        "number": 738,
        "verses": [
            "Jehovah no ao anatinao\nMahery Tsitoha\nHitako feno voninahitra,\nFahamasinana, hery, fahefana\nHo Mpanjaka ao anatinao\nmandrakizay\nAmen"
        ]
    },
    {
        "title": "ANDAFIN'ILAY LOHASAHA",
        "number": 679,
        "chorus": "Andafin'ilay lohasaha mangina\nAloky ny fahafatesana\nNo misy ilay tànana\nSoa mamiratra alehako",
        "verses": [
            "Mpivahiny aho no ety\nNilaozako ny ota\nKa miezaka ho tonga ary\nJerosalema vaovao.",
            "Ao Jesosy no miandry ahy\nMbamin'ireo anjely\nManiry hahita Azy aho\nKa dia mandeha faingana aho.",
            "Na dia sahaza iaretako\nFanesoana zakaiko\nMampahery ahy hatrany\nNy hafatra izay nomeny.",
            "Mankao an-tanana sambatra\nIzao làlako izao\nKa manasa anao mpitazana\nMba hiara-dia amiko."
        ]
    },
    {
        "title": "ANDEHA HIARAKA HIDERA AN'I JESOSY",
        "number": 611,
        "verses": [
            "Andeha hiaraka isika\nHidera ny Anaran'i Jehovah\nFa Mpanjakan'ny mpanjaka\nmandrakizay\nAndeha hiaraka isika\nMba hankalaza ny Tompo",
            "Andeha hiaraka isika hanompo\nHiankohoka eo anatrehany\nFa Tompon'ny Tompo\nBe voninahitra\nAndeha hiaraka isika\nMba hanompo ny Tompo",
            "Andeha hiaraka ho any an-danitra\nHiravo mandrakizay\nAmin'ireo olo-masina mahatoky\nAndeha hiaraka isika\nHo any an-danitra"
        ]
    },
    {
        "title": "ANDEHA HIASA",
        "number": 200,
        "chorus": "Andeha hiasa ho an'i Jesosy\nMatokia mivavaha, mandratoa\nManadra-pihaviany",
        "verses": [
            "Andeha hiasa ho an'i Jesosy\nHanaraka ny ohatr'izay nomeny\nMiasa amin'ny herinao rehetra\nFa Izy hanavao indray ny herinao",
            "Fahano'reo noana, tariho hisotro\nAmy loharanon'aina ny reraka,\nAndeha ambarao fa ny famonjena\nDia omena maimaimpoana",
            "Misy asa ho an'ny olon-drehetra\n\"Handrava ny asa, herin'\nny maizina\"\n\"Ny hevi-diso aelin'ny satana\"\nMba hisadratan'ny Anaran'ny\nTompo",
            "Miasà amin'ny herinao rehetra\nHo an'ny Tompo izay nanavotra anao\nF'handray valisoa sy voninahitra\nHiara-mihoby ny olo-mahatoky."
        ]
    },
    {
        "title": "ANDEHA HIZAHA",
        "number": 745,
        "verses": [
            "'Lay Zaza tao Betlehema\nManafaka ny aizina\nNy Tompon'ny famonjena\nMamelona ny aina,\nka faingana, andeha hizaha.",
            "Nonina tao Nazareta\nNiory, nitomanykoa\nHo an'izay mangetaheta\nTsy lavitr'Azy tokoa,\nKa faingana, andeha hizaha",
            "Niakatra tao Golgota\nNafoiny ny aina soa\nFitiavana anao mpanota\nNaharihariny koa,\nKa faingana, andeha hizaha",
            "Nitsangana tao am-pasana\nNandresy 'zany ho ahy\nNiakatra ho any an-danitra\nHampidina ny Fanahy,\nka Faingana, andeha hizaha",
            "Manatona amin-dranomaso\nDia hahita ny Mpamonjy\nNampitony ny andraso\n'Lay fitia mahavonjy",
            "Raha ho avy amim-boninahitra\nMiaraka amin'nyfandresena\nHifarana ny tantara\nF'hahita Azy ny rehetra\nDia Kristy Mpanjaka",
            "Ny zava-drehetra eto an-tany\nMandalo miserana fa\nNy fahamarinana ihany\nMitoetra manafaka"
        ]
    },
    {
        "title": "ANDRAMO KA IZAHAO",
        "number": 675,
        "verses": [
            "Andramo ka izahao\nFa tsara ny Tompo (in-2)\nNy olona izay matoky\nAzy hotahiana (in-2)\nNy anjeliny mitoby\nManodidina izay matahotra Azy;\nAndramo ka izahao\nFa tsar any Tompo",
            "Miantso Azy aho\nDia mamaly Izy\nAndramo, izahao\nNy tahotro rehetra esoriny\nAndramo, izahao\nNy anjeliny mitoby\nManodidina izay matahotra Azy\nAndramo ka izahao\nFa tsara ny Tompo"
        ]
    },
    {
        "title": "ANDRANDRAO NY MASONAO",
        "number": 407,
        "verses": [
            "Andrandrao ny masonao\nKa minoa ny fitiavany\nMbola tsy miova toy ny taloha\nJesosy 'Lay Mpamonjy anao."
        ]
    },
    {
        "title": "ANDRIAMANITRA DIA FANAHY",
        "number": 637,
        "verses": [
            "Ny Ray dia Fanahy\nRaha mivavaka Aminy\nDia amin'ny Fanahy\nSy fahamarinana (in-2)",
            "Ny Tompo dia Fanahy\nKoa izay itoerany\nNo misy fiadanana\nSy fahafahana (in-2)"
        ]
    },
    {
        "title": "ANDRIAMANITRA HIADY HO ANAO",
        "number": 573,
        "verses": [
            "Andriamanitra hiady ho anao\nFa ianao kosa hangina\nHangina (in-2)",
            "'Lay Tompon'nyhery\nHampandresy Anao\nFa hianao kosa hangina\nHangina (in-2)",
            "Ny Tompon'ny tompo\nNo hamonjy anao\nFa hianao kosa hangina\nHangina (in-2)"
        ]
    },
    {
        "title": "ANDRIAMANITRA HIAHY ANAO",
        "number": 108,
        "chorus": "Andiamanitra hiahy anao\nIzy no tena Ray'zay tsy mandao\nMpanafaka sady Sakaiza soa\nMatokia Azy n'inona manjo.",
        "verses": [
            "Aza matahotra re ianao\nF'Andriamanitra hiahy anao.\nHiambina ireo azy Izy\nTsy handao anao ho irery.",
            "Andriamanitra hiahy anao,\nIzy no hiaro ny tongotrao\nMpiandry ondry mitarika ho\nEny amin'ny rano tony soa",
            "Andriamanitra hiahy anao\nHanome fitahiana vaovao\nHiaro hatramin'ny farany\nTsy hahafoy anao mandrakizay."
        ]
    },
    {
        "title": "ANDRIAMANITRA LEHIBE HIANAO",
        "number": 622,
        "verses": [
            "Lehibe Hianao, masina, marina\nNy herinao no nanova anay\nLehibe Hianao, sady mahatoky\nVoaporofo ny fitiavanao.\nRay Lehibe, mendri-boninahitra\nRay Lehibe, anao ny dera\nRay Lehibe\nKa asandratray (in-2)\nLehibe ianao."
        ]
    },
    {
        "title": "ANDRIAMANITRA MAHATOKY",
        "number": 786,
        "verses": [
            "Tompo ô! nozarainao ny tena sy rànao (in-2)\nMandroso ho aminao 'zahay feno fiderana\nF'Andriamanitra mahatoky Hianao\nAnio, mandrakizay, derainay ny Anaranao",
            "Nampiraisinao 'zahay mba hiray Aminao (in-2)\nHo tena mpirahalahy feno fitiavana\nF'Andriamanitra mahatoky Hianao\nAnio, mandrakizay, derainay ny Anaranao",
            "Ny fitiavanao no tena nanafaka anay (in-2)\nAhafahanay mandroso ho tena masina tokoa\nF'Andriamanitra mahatoky Hianao\nAnio, mandrakizay, derainay ny Anaranao",
            "Nomenao sori-dalana mba ho eo Aminao\nHitaona ireo namana hanaiky handray Anao\nF'Andriamanitra mahatoky Hianao\nAnio, mandrakizay, derainay ny Anaranao"
        ]
    },
    {
        "title": "ANDRIAMANITRA MAHATOKY IZY",
        "number": 374,
        "chorus": "Hankalaza Anao amin'ny fo\nMitodika Aminao 'zay fifalianay\n(in-2)",
        "verses": [
            "Derao ny Tompo (Derao ny Tompo)\nFa tena be fitia (Fa tena be fitia)\nDerao ny Tompo (Derao ny Tompo)\nFa mahatoky Izy (Fa mahatoky Izy)",
            "Derao ny Tompo (Derao ny Tompo)\nFa mahery Izy (Fa mahery Izy)\nDerao ny Tompo (Derao ny Tompo)\nFa masina Izy (Fa masina Izy)"
        ]
    },
    {
        "title": "ANDRIAMANITRA MAHERY",
        "number": 351,
        "verses": [
            "Andriamanitra mahery Hianao\nMpanjaka Hianao,\nMpamonjy anay\nVelona Hianao,\nRainay mandrakizay\nMasina Hianao ary ho aminay.",
            "Ampio izahay amin'ny fiainanay\nArovy izahay\nTsy ho reraka,\nFiainana mandrakizay\nNo tadiavinay\nZany no tanjonay ka dia torianay."
        ]
    },
    {
        "title": "ANDRIAMANITRA NITIA",
        "number": 459,
        "verses": [
            "Andriamanitra nitia\nKa nanome ny zanany ho faty,\nMba hamonjy ahy\nAmin'ny andro iray\nHiverina Kristy, andro hahatalanjona",
            "Arovan'ny fitiavany isan'andro aho\nMihira sy miandry ny fiaviny,\nHe! Sambatr'aho izao\nAto am-poko Jeso,\nVoninahitr'ho Azy",
            "Derao Haleloia, ho avy indray Jeso\nMba haka ahy ety ho any Aminy\nDerao, Haleloia, ho avy indray Jeso\nHo avy mba haka ahy."
        ]
    },
    {
        "title": "ANDRIAMANITRA NO MOMBA ANTSIKA",
        "number": 285,
        "chorus": "Avia manatona Azy amin'ny finoana\nIzy hiaro anao, Haleloia!\nJesosy mahery tsy hamel'ho irery\nIzy tia anao, Haleloia!",
        "verses": [
            "Andriamanitra no momb'antsik'izao\nIza no hahatohitr'antsika?\nArio ny tahotra fa Izy tsy handao\nNy tànany hanafak'antsika.",
            "Andriamanitra no momb'antsik'izao\nIzy no hany fanantenanao;\nMijaly raha toa lavitr'Azy ianao\nFa omeo Azy anio ny fonao.",
            "Andriamanitra no momb'antsik'izao\nIzy no tena fahazavana\nMpiandry lehibe, mitarika anao\nMeteza hanaraka ny làlany"
        ]
    },
    {
        "title": "ANDRIAMANITRY NY FAHASOAVANA",
        "number": 691,
        "verses": [
            "Ny fahasoavanao no heriko\nNanisy soa ahy Hianao\nNoho ny fahamarinako\nNataonao ho zanakao\nTsy mendrika ny voninahitra aho\nNy fahasoavanao no heriko",
            "Mandinika ahy Hianao\nMizaha toetra koa\nFantatrao aho n'aiza n'aiza\nTsy miafin'Aminao, izay alehako\nNy fahasoavanao no heriko",
            "Andriamanitra ô, mitady Anao aho\nNy fahasoavanao no heriko"
        ]
    },
    {
        "title": "ANDRIAMANITRY NY VONINAHITRA",
        "number": 619,
        "verses": [
            "Andriamanitry ny voninahitra,\nDeraiko ny Anaranao\nAnkalazaiko amin'ny molotro\nNy fahendrenao sy fahefanao",
            "Zanak'Ondry mendrika (in-2)\nNy anjely rehetra miandry\nNy herin'ny Anaranao",
            "Zanak'Ondry mendrika (in2)\nNy tontolo manambara\nNy hatsaran'ny Anaranao."
        ]
    },
    {
        "title": "ANDRO FIRAVORAVOANA",
        "number": 712,
        "chorus": "Andro firavoravoana no nahitan'i\nJesosy ahy\nIzay nisakambinany ahy sy namenoany fifaliana ny foko\nAndro soa ô! Haleloia:\nAndro mahafinaritra;\nHoderaiko hoe: Hosana ho any amin'ny Avo Indrindra.",
        "verses": [
            "Very tao anatin'ny aizin'ny ota\nNo nahitan'i Jesosy ahy,\nNefa nanavotr'ahy ho afak'amin'ny henatro Izy.",
            "Velona ny lakolosin-danitra\nSatria efa voavotr'aho izao\nFeno hiram-pifaliana.\nNy foko fa voavonjy aho.",
            "Fifaliana no hiaonana indray\nAmim-boninahi-dehibe\nAny amin'ny lapan'Andriamanitra\nRay mandrakizay."
        ]
    },
    {
        "title": "ANDRO FITSARANA",
        "number": 709,
        "chorus": "Vonona ve ho amin'ny\nAndro fitsarana ianao?\nVonona ve, vonona ve?\nMba hotsaraina.",
        "verses": [
            "Hisy andro iray izay voaomana;\nHanavahana ny olona;\nKa ny masina ataony eo an-kavanany,\nNy mpanota ho eo ankavia.",
            "Hisy andro iray 'zay hifaliana;\nHo an'ireo izay tia ny Tompo;\nDia andro fitsarana, nefa hiravoana.\nHandraisany ny valisoany.",
            "Hisy andro iray izay mahatahotra;\nVoatokana ho an'ny mpanota;\nHandrenesany ny Fanamelohan'ny\nTompo\nMoa vonona ve ianao?"
        ]
    },
    {
        "title": "ANIO MANATONA AN'I JESOSY",
        "number": 636,
        "verses": [
            "Manatòna an'i Jesosy\nMiantso anao izy anio\nEfa ela no nihodinanao\nManatòna Azy anio.",
            "Tia anao (in-2)\nTia anao Izy anio\nEnto eo Aminy\nIreo alahelonao be.",
            "Mamela heloka Izy\nIzao anio izao\nRaiso Izy ka manatòna\nAzy ianao anio.",
            "Hofafany (in-2)\nNy helokao anio\nManatreha Azy isan'andro\nManatòna Azy anio."
        ]
    },
    {
        "title": "ANIO NO HANOLORAKO TENA",
        "number": 361,
        "chorus": "Ekeo Tompo ô '\nzao fanatitro izao\nKa aoka ny Fanahy\nhirotsak 'amiko.",
        "verses": [
            "Anio no anolorako tena sy fanahy\nHo an'i Jesosy 'zay\nmaty nisolo ahy.",
            "Afoiko an-tsitrapo\ntsy misy nenina\nHo Anao ny tenako\nryTompo Masina",
            "Aoka ny afo vaoavao\nHirehatra indray\nHandoro ny zava-drehetra\ntsy an'ny Ray",
            "Avia Jesosy ô\nmba ho Mpanjakako\nAtaovy izay sitrakao amin'ny\nFiainako"
        ]
    },
    {
        "title": "ANISAN'NY AZY AHO",
        "number": 753,
        "chorus": "Noraisiny ho anisan'ny Azy aho,\nRehefa nanatona, fa nandre ny Antso hoe:\n\"Aoka izay mety ho avy hisotro\nmaimai-poana amin'ny\nloharanon'aina\".",
        "verses": [
            "Faly ao amin'i Kristy aho,\nFa mitaona ahy hihira izany;\nFaly aho satria fantatro,\nFa anisan'ny Azy aho",
            "Raisiko amim-pifaliana.\nLay antso izay manao hoe:\n\"Aoka ho avy izay mety\"\nKoa anisan'ny Azy aho.",
            "Ny Fanahy sy ny ampakarina\nMiantso, manao hoe: \"Avia\"\nAza mirenireny intsony,\nFa hampiditra anao Izy.",
            "Avia misotro malalaka,\nIzay fanahy mangetaheta\nFa an'izan'iza re no mila\nHampidiran'azy Jesosy."
        ]
    },
    {
        "title": "ANJARAKO JESOSY",
        "number": 729,
        "verses": [
            "Ny harena sy ny laza soa\nMety tsy ananako ety,\nFa Jesosy no anjarako\nEny, lovako mandrakizay",
            "Tsy hahafak'hetaheta ahy,\nNy zava-poana izay mandalo\nFa natao ho an'i Jesosy\nNy foko mbamin'ny tenako",
            "Raiso ho Anao Jesosy ô,\nNy fiainako manontolo;\nTano aho re haharitra,\nKa tsy hivadi-pinoana."
        ]
    },
    {
        "title": "ANKALAZAO ILAY AVO INDRINDRA",
        "number": 640,
        "verses": [
            "Ravo aho noho ireo asanao\nFenoinao fifaliana aho\nHandositra 'reo fahavalo\nFa ny marina hitoetra",
            "Atolory am-piderana\nNy fanatitry ny fo\nRay marina ô, Vatolampinay\nMisandrata hatrany Hianao.",
            "Ankalazaina anie ny Tompo\nAndriamanitra avo indrindra\nTorio isan'andro ny indrafony\nFahatokiana Azy raha alina\nFahatokiana raha alina."
        ]
    },
    {
        "title": "ANTOMOTRA ILAY FOTOANA HIAVIAN'I JESOSY",
        "number": 332,
        "chorus": "Hevero re ny fiainanao,\nRy Olombelona o!\nFa misy farany daholo\nny zavatra atao\nNa amin'ny takona na amin'ny\nmiafina\nDia mbola samy hotsaraina",
        "verses": [
            "Efa antomotra ilay fotoana\nIzay hiavian'i Jesosy\nHitsarana ny velona sy maty\nKa miomàna ianao",
            "Raha ho avy ny Tompo\nAndriamanitra\nMoa hahita finoana ety\nAmbonin'ny tany?\nKa miomàna ianao"
        ]
    },
    {
        "title": "ANTSOY AHO HOY NY TOMPO",
        "number": 210,
        "verses": [
            "Antsoy Aho dia hovaliako hianao\nHoy ny Tompo\nKa hampisehoako zava-dehibe\nSaro-patarina\nhampisehoako zava-dehibe\nIzay tsy fantatrao."
        ]
    },
    {
        "title": "ANTSOY NY TOMPO",
        "number": 722,
        "verses": [
            "Antsoy ny Tompo dieny hita\nAntsoy dieny akaiky,\nAntsoy Izy dieny mbola hita\nHanala ireo tahotra.",
            "Antsoy ny Tompo dieny hita\nAntsoy dieny akaiky,\nAntsoy Izy dieny mbola hita\nHamafa ny ranomaso"
        ]
    },
    {
        "title": "AO AMIN'IZAY MISY AN'I JESOSY NO LANITRA",
        "number": 425,
        "chorus": "O! Haleloia, lanitra\nNy voavela heloka\nAo amin'izay misy\nAn'i Jesosy no lanitra.",
        "verses": [
            "Hatramin'ny nahafak'ahy\nDia lanitra ity tany ity,\nAnaty fahoriana sy loza koa,\nDia lanitra.",
            "Fahiny, dia toa\nToeran-davitra ny lanira\nFa ankehitriny kosa\nDia manombok'ao anatiko.",
            "Na ankavoana, andohasaha\nAn-trano bongo, lapa soa,\nAo amin'izay misy\nAn'i Jesosy no lanitra."
        ]
    },
    {
        "title": "AO AMIN'NY ALOKY NY ELATRAO",
        "number": 500,
        "chorus": "Eo amin'ny aloky ny elatrao\nNo ialofako Jesosy ô,\nMandra-pahalasan'ny loza,\nKa afaka ny tahotro.",
        "verses": [
            "Ao amin'ny lalina,\nNo iantsoako Anao\nAny am-paran'ny tany koa,\nMandrenes'ahy Tompo ô.",
            "Mamindrà fo amiko;\nMamelà ny heloko;\nAza mahafoy ahy re,\nFa ekeo ny fifonako.",
            "Ianao Jesosy ô,\nEfa nanome toky fa,\nTsy misy mahay\nmandrombaka ahy\nAmin'ny tànanao."
        ]
    },
    {
        "title": "AO AMIN'NY ASAN'NY TOMPO",
        "number": 251,
        "chorus": "'Zay rehetra talenta,\nEntiko manompo Anao;\nManam-piadianan'aho\nAmin'ny fanompoako Anao.",
        "verses": [
            "Faly amin'ny asan'ny\nMpanjak'aho\nIo no tena fifaliako\nManam-pifaliana sy fiadanan'aho\nIzay tsy omen'ny hafa.",
            "Faly amin'ny asan'ny\nMpanjak'aho\nIo no tena fifaliako;\nKa na mibaliaka na manjombona\nNy andro, dia mahahira aho.",
            "Faly amin'ny asan'ny\nMpanjak'aho\nIo no tena fifaliako;\nNy tana-maherin'ny Tompo Jeso,\nNo tena hamikirako.",
            "Faly amin'ny asan'ny\nMpanjak'aho\nIo no tena fifaliako;\nKa ny zava-drehetra ananako.\nEntiko manompo Azy."
        ]
    },
    {
        "title": "AO AMIN'NY JESOSY NY TENA FIADANA",
        "number": 470,
        "chorus": "Shalom (in-2)\nRahoviana no hanam-piadanana\nShalom (in-2), ilaina ny fiadanana",
        "verses": [
            "Alehelom-pamoizam-po\nSy tabataban'ady eran-tany\nIrina hiverina indray\nNy fiadanana",
            "Tsy fantatra ny ho avin'ireo\nAnkizy madinika kamboty\nTiako ny hahafantarany\nFiadanana",
            "Ao ireo ory sy mahantra\nNesorina avokoa izay azy\nMiandry izay manam-pitiavana\nHiantra azy",
            "Raha afaka ny hifankatia\nKa samy hifandray tanana\nDia izay vao hiaina amim-\nPiadananana",
            "Ny fiankinana amin'i Jesosy\nAndrian'ny fiadanana\nNo hany fomba azo antoka\nHampiadana.",
            "Shalom (in-2)\nRahoviana no hanam-piadanana\nShalom (in-2)\nJeso manome fiadanana."
        ]
    },
    {
        "title": "AO AMIN'NY TOMPO NY FANTENAIKO",
        "number": 336,
        "chorus": "Maty ho ahy Jesosy\nKa afaka izao ny fanahiko.",
        "verses": [
            "Ao amin'ny Tompo ny fanantenako\nFa Izy no nisolo ahy tao Kalvary.",
            "Tsy manana ny fahamendreko aho\nFa miankin'amin'ny fahamarinany.",
            "Eo anatrehan'ny Ray izao ny Tompo\nMampiseho ny holatry ny tanany",
            "Rehefa nino aho ka nandray Azy\nDia nomeny fiainana mandrakizay"
        ]
    },
    {
        "title": "AO AMINAO TOMPO",
        "number": 246,
        "chorus": "Ao Aminao Tompo hatrany\nNa maty aho na velona\nHo any amin'iza indray moa\nIty zanakao?\nHo any amin'iza indray raha\nTsy ao Aminao?",
        "verses": [
            "Ao aminao, ry Jesosy no misy\nFahasitranana\nHo an'ny fo maratra sy\nmiaritr'elabe (in 2)",
            "Ao Aminao, r'ilay Mesia no misy\nFiadanana,\nFiadanana azo antoka\nMandrakizay (in-2)",
            "Ao Aminao, ry Mazava no misy\nFahamarinana\nKa misav'avokoa ny aizina\nnanarona (in-2)",
            "Ao Aminao, ry Zanak'ondry no\nMisy fandresena\nHo an'izay manatrik'ady be\nmangotrka(in-2)"
        ]
    },
    {
        "title": "AOKA HIFANKATIA",
        "number": 442,
        "verses": [
            "Hifankatia isika\nHifankatia isika\nNy fanahintsika\nAo amin'ny Tompo\nAoka hifankatia isika.",
            "Hiaraka hidera isika\nHo feno ny fitiavany\nHifandray tànana\nHo hitan'ny rehetra\nFa mifankatia isika",
            "Hiara-miasa isika\nHo voninahitry ny Ray\nHo vavolombelona mahatoky\nHifankatia isika"
        ]
    },
    {
        "title": "AOKA HINO NY TOMPO",
        "number": 405,
        "verses": [
            "Aoka hino, aoka hino ny Tompo (in-3)\nDeraina Izy.",
            "Fitiavan-dehibe no-mameno fo (in-3)\nDeraina Izy.",
            "Te-hino an'i Jesosy Tompo aho (in-3)\nDeraina Izy",
            "Ny hafaliany no mameno ny androko (in-3)\nDeraina Izy."
        ]
    },
    {
        "title": "AOKA HITOHY HINO IANAO",
        "number": 54,
        "verses": [
            "Manatrik'ady ve ianao;\nAmpahorian'ny fakam-panahy;\nTsy misy'zay mba hampifaly\nToa foan'izay mba nantenaina",
            "Rehefa mety izay atao\nToa tsy misy ny fijaliana\nFa rehefa tojo fahoriana\nToa lavitra ery Jesosy",
            "Ny Tompo no hery ho anao\nMpitarika sy fahendrenao;\nMatokia Azy dia hahomby\nNy asa rehetra ataonao",
            "Aoka tsy hamoifo ianao\nJeso anie mahatahiry anao\nFahatsapana fa tsy fihetseham-po\nNo hampijoro ny finoanao",
            "Aoka hitohy hino ianao\nTsy aiza Jeso f'eo anilanao\nMitovy ny andro sy ny alina\nAmin'zay manam-pinoana",
            "Aoka hitohy hifaly ianao\nTsy aiza Jeso f'eo anilanao\nMitovy ny andro sy ny alina\nAmin'zay manam-pifaliana"
        ]
    },
    {
        "title": "AOKA HO HITA AMINAO JESOSY",
        "number": 117,
        "chorus": "Aoka ho hita aminao Jesosy,\nAoka ho hita aminao Jesosy,\nLazao isan'andro ny hasoavany;\nAoka ho hita aminao Jesosy,",
        "verses": [
            "Vahiny an-tanin'ota ianao;\nAoka ho tarafin'ny hafa,\nAtaovy madio sy masina\nIvelany sy anatiny.",
            "Ny fiainanao dia boky 'zay\nVakin'izao tontolo izao;\nManondro làlan-danitra\nAoka ho hita aminao Jesosy,",
            "Raha tapitra ny andronao,\nHo feno fifaliana ianao,\nHahita ireo voatananao,\nAn-dapasoa honenanao.",
            "Aoka hiaina amin'i Kristy\nAndro aman'alina ianao\nHitarika amin'ny fiainana\nHanazava ireo very."
        ]
    },
    {
        "title": "AOKA ISIKA HANAO HIRA INDRAY",
        "number": 760,
        "chorus": "Aoka isika hitantara\nNy nahafatesany;\nHo Azy anie ny dera sy laza\nIzy no nahafak'ota antsika re.",
        "verses": [
            "Aok'isika hanao hira indray,\nHira fiderana ny Mpamonjy tia,\nAoka holazaina amin'ny rehetra\nNy famindram-po sy ny fifonany.",
            "Aok'isika hanao feo fiderana\nNoho ny teny feno fampiononana,\nEo anilan'izay mino hatrany Izy\nKa maneho ny famindram-pony.",
            "Aok'isika hanao feo fiderana\nNoho ny teny fikasana mahasoa,\nDia ny amin'ny fonenana tsara,\nMbamin'ny harenan'ny fahasoavany."
        ]
    },
    {
        "title": "AOKA IZY HIARA-DALANA AMINAO",
        "number": 85,
        "chorus": "Ny heriny no hahatanteraka anao\nNy rany hanadio hanafaka anao\nNy fitiavany hameno ny fanahinao\nHo tsara ny hiarahanay aminao.",
        "verses": [
            "Te-hiaina ho madio ho an'i Jeso\nianao?\nHiaraka Aminy an-dalantery vé?\nTianao ny hitondrany koa ny\nentanao?\nAok'Izy hiara-dalana aminao.",
            "Irinao ho afaka, hanaraka Azy koa?\nTianao ho fantatra ny fiadanana?\nTe-ho voavonjy ka hijoro ianao?\nAok'Izy hiara-dalana aminao.",
            "Te-hahita fitsaharana ao an-danitra\nNa hahatsapa fa mahatoky ilay Jeso\nIzay tsara anananao no\nHanompoanao vé?\nAok'Izy hiara-dalana aminao."
        ]
    },
    {
        "title": "APETRAHO AMIN'I JESOSY",
        "number": 550,
        "chorus": "Apetraho (in-2 ) amin'i Jesosy\nIzay mety ho tebiteby\nApetraho (in-2 ) amin'i Jesosy\nHo feno fifaliana ny fiainanao",
        "verses": [
            "Maniry andro mibaliaka\nMitady fahasambarana\nNy sorisory sy ny fanahianao\nDia omeo an'i Jesosy",
            "Maloka foana ve ny andro?\nTsy misy izay mba hifaliana,\nMinoa ny fitiavan'i Tompo\nHo foanana ny alahelo",
            "Finoana manao ahoana\nNo entinao miatrika ady,\nMila fanatanjahan-tsaina\nNy tafika te- handresy.",
            "Naharitra ela no niaretanao\nNiandrasanao an'i Jesosy,\nFotoana fohy sisa anefa\nDia hiravo mandrakizay."
        ]
    },
    {
        "title": "ARIO ENY AMIN'NY VOVOKA",
        "number": 779,
        "verses": [
            "Ario eny amin'ny vovok'avokoa\n'Zay rehetr'akoram-bolamenanao,\nFa ny Tompo Tsitoha no ho harenao,\nZay mihoatra noho ny zava-tsoa\nrehetr'ety.",
            "Moa fantatrao va fa ny Tomponao\nDia maty mba ho famonjena anao;\nManatonan'io fa hpmeny anao,\nNy fahasambarana sy ny fiadanana.",
            "Tia anao Jesosy, tia anao koa\nFaingana hianao hiaraka aminay\nHanara-dia Azy ho mandrakizay\nAo amin'ny halehiben'ny fitiavany"
        ]
    },
    {
        "title": "AROVY AHO JESOSY",
        "number": 580,
        "verses": [
            "Mitantana ahy Hianao Jesosy\nAtolotro koa ny tanako (in-2)\nAmin'ny alina rakotra aizina\nTsy mamela ahy ho irery\nMatoky ka tsy hatahotra aho,\nArovy aho, arovy Jesosy!\nMitantàna ahy Hianao Jesosy\nAtolotro koa ny tanako"
        ]
    },
    {
        "title": "ARY AN-KOATRA ARY",
        "number": 711,
        "chorus": "Ary an-koatra ary;\nMisy fitsaharana\nAry an-koatra ary,\nAo Jesosy miandry ahy",
        "verses": [
            "Eo an-tanan'i Jeso\nIlay tena tia ahy no;\nHanolorako Azy\nNy tenako sy fanahy.",
            "Hifarana ny ady\nHo lasa ny rahona\nHohadinoina ny sento,\nSambatr'ireo tonga ao.",
            "Mba ho tafiditra ve\nKa honina any hianao?\nTian'i Jesosy ho vonona\nNy fanahinao."
        ]
    },
    {
        "title": "ASANDRATO NY HIRA",
        "number": 614,
        "verses": [
            "Asandrato ny hiranao\nKa mifalia amin'ny Tompo ianao\nMampahereza ny tenanao,\nMibitaha ny fonao\nFa fifaliany ianao,\nMibitaha, Izy no valim-pitia lehibe\nho Anao\nAmintsika Izy, ka miravoa\nManaova hiram-pifaliana\nMiaraka amin'ny voavidy\nEo anatrehan'ny Zanak'ondry\nMiara-paly eo amin'ny lalan'ny\nZanak'ondry.",
            "Asandrato ny tanànantsika rehetra\nIzay tempoliny\nTempoly vaovaon'ny Tompo\nIsika izay manaraka ny baikom-\npitiavana:\nNo fonenany, tena iray\nAnkavanan'ny Zanak'Ondry.",
            "Izy no Jeso, 'Lay Zanak'Ondry\nIzay maty mba hamonjy antsika\nNefa velona indray\nSady manana ny fahefana\nAry mipetraka eo amin'ny tànan-\nkavanan'ny Ray."
        ]
    },
    {
        "title": "ASEHOY AMINAY NY HERINAO",
        "number": 621,
        "chorus": "Sitrano ny tany (in-3)\nHo heniky ny fanahinao izy.",
        "verses": [
            "Asehoy aminay ny herinao,\nTompo ô\nIzay no antson'ny fo\nMba sitrano sy areno\nNy Fanahinao no mampifoha.",
            "Ny fanahinao manakaiky\nMba handrakotra ireo tany\nHampanjaka ny marina\nTompo ô, fohazy izahay."
        ]
    },
    {
        "title": "ATANJAHO IZAHAY",
        "number": 298,
        "chorus": "Atanjahonao izahay\nHanoatra ny mpandresy\nAmpaherezo ny fonay;\nAtanjaho izahay, ry Tompo ô!",
        "verses": [
            "Antsoinao izahay mba ho miaramila\nKa indreto izahay vonona hanaraka\nNy fitarihanao, n'aiza n'aiza",
            "Omeo finoana sy fahasahiana\nSy fahendrena, ary hafanampo\nhatrany\nAoka hirehitra mba ho\nmpandresy koa.",
            "Ny hazofijaliana no faneva ho anay\nHandresenay ny fahavalonay 'zay\nmarobe;\nNy ràn'ny Zanak'Ondry ho\nfiarovanay",
            "Aoka hivavaka, hanam-paharetana\nFa ho satroham-boninahitra ny\nmpandresy\nKoa aza mihemotra, fa mandrosoa"
        ]
    },
    {
        "title": "ATAOKO MPANARATO OLONA",
        "number": 455,
        "chorus": "Tompo o! inty aho\nNa dia tsy mendrika aza\nInty aho iraho aho\nKoa tafio ny Fanahy Masina",
        "verses": [
            "Atopazo ny masonao\nKa jereo ny eny an-tsaha\nEfa masaka ho jinjaina\nAndeha hanaraka Ahy\nFa hataoko mpanarato\nolona hianao",
            "Be ny vokatra\nFa vitsy ireo mpanompoko\nEfa nahazo maimaim-poana\nManomeza maimaim-poana\nIndro Izaho momba anao\nmandrakariva",
            "Ho be ny fahorianao\nEo amin'ny fanompoana Ahy\nNefa hody fifaliana\nNoho ny mpanota mibebaka\nLehibe ny valim-pitianao\nAny an-danitra",
            "Iza no hanohy ny asako\nHanangona ny ondriko\nAo amin'ny valako\nF'efa mby akaiky ny andro\nIza no ho irako amin'ireo\nEfa navotako."
        ]
    },
    {
        "title": "ATODIHO NY FONAO",
        "number": 713,
        "chorus": "Atodiho ny fonao\nHijery an'i Jesosy;\nHihamatroka 'zao tontolo izao\nAnoloan'ny voninahiny.",
        "verses": [
            "Ry fanahy ory sy ana\nTsy nahita izay hatao\nJesosy no fahazavana,\nSy fiainana ho anao.",
            "Ny ota dia tsy hanan-kery,\nAmintsika mino satria,\nManoatra noho ny mpandresy\nIzay rehetr'ao Aminy.",
            "Tsy hamitak'anao satria,\nNy teny 'zay nolazainy,\nIzay mino Azy homeny\nFiainana mandrakizay."
        ]
    },
    {
        "title": "ATOLORY AN'I JESOSY",
        "number": 41,
        "verses": [
            "Atolory an'i Jesosy avokoa\nNy fiderana, ny voninahitra;\nLazao, ambarao ny fitiavany\nFitiavana mandrakizay.",
            "Itokio sy ekeonao avokoa\nNy teny soa nambarany,\nHiambina anao lalandava\nJeso, Mpitarika anao"
        ]
    },
    {
        "title": "ATOLOTRO NY TENAKO",
        "number": 148,
        "chorus": "'Nty ny tenako\nRy Mpamonjiko,\nHo Anao manontolo,\nRaisonao ka anjakao.",
        "verses": [
            "'Nty ny tenako\nAtolotro Anao manontolo\nRy Jesosy mba ho velona\nHanao ny asanao.",
            "Tiako sy itokiako\nIanao Jesosy\nMandohalika eo an-tongotrao\nAho Tompo ô.",
            "Aoka ho feno\nNy Fanahy\nMasina aho Mpamonjy ô\nKa ho tsapako\nFa tena ahy Ianao Jeso."
        ]
    },
    {
        "title": "ATSANGANO IZAHAY ANDRIAMANITRA",
        "number": 755,
        "chorus": "Andriamanitra ô! atsangano izahay\nAoka hiseho amin'ny Zanakao\nKa atolory anay ny fiainam-baovao\nAndriamanitra ô! Atsangano",
        "verses": [
            "Andriamnaitra ô! atsangano izahay\nVelominao indray izahay\nMandrenesa ny Mpiandrin'i Israely\nVonjeo amin'ny fahasoavanao",
            "Andriamanitra ô! fohazinao zahay\nEsory ny aizina mampatory\nTorotoroy, ovay ny fonay vato\nTompo ô! atsangano amin'ny maty.",
            "Andriamanitra ô! vangionao izahay\nMamela ny tsy fahatokianay\nAoka ny Fanahinao hameno anay\nHampiorina anay indray"
        ]
    },
    {
        "title": "AVAOZY HIORINA",
        "number": 324,
        "verses": [
            ";;; Amorony fo madio aho\nAndriamanitra ô!\nHavaozy hiorina marina ny\nFanahy ato amiko;;;\nTs'hitako 'zay aleha\nTsinpntsinona anie aho,\n;;; Ny tananao no ilaik'\nHitantana ahy;;;"
        ]
    },
    {
        "title": "AVAOZY NY FIANGONANA",
        "number": 427,
        "verses": [
            "Avaozy ny fiangonana\nSy ny fanompoany\nMba ho fanasina eran-tany\nSy ho fanazavana.\n'Zay ao anatin'ny aizina\nsy ny filàna\nKa iraho ny herinao\nAmpio 'zahay ry Tompo ô\nHihavao ho Anao.",
            "Ampianaro anay ny Teninao,\nMba hitsilo ny dia\n'Reo asanao mahagaga maro\nIsaky ny pejy\nNy nitiavanao nanomezanao\nKristy Zanakao, ho famonjena,\nAmpio 'zahay ry Tompo ô\nHahay ny teninao.",
            "Ampianaro hivavaka izahay\nFa akaiky Ianao\nEo aminao no fitsaharanay\nSy zava-kendrenay;\nAoka ho toy ny eo\nAmin'ny fanatrehanao izahay\nHahitanay ny sitraponao\nHo aminay sy fitarihanao.",
            "Ampianaro ny hahay mitia\nAo am-po sy saina\nRavao ny hevitra mibahana\nSy fankahalana\nIanao efa nanolotra\nNy ainao handrava fisarahana\nIzarao fitiavana izahay Tompo ô."
        ]
    },
    {
        "title": "AVELAO HIDITRA JESO",
        "number": 71,
        "verses": [
            "Avelao hiditra ny masoandro\nmazava,\nAoka hivoha ny varavaran'ny\nfonao,\nMba hidiran'i Jesosy."
        ]
    },
    {
        "title": "AVELAO JESOSY HITANTANA NY FIAINANAO",
        "number": 504,
        "chorus": "Manantona (in-2)\nIlay Tompon'ny ranomasina\nManantona (in-2)\nIlay nahary izao rehetra izao,\nIzy no hany (in-2)\nNampangina tafiotra\nOmeo Azy ny fiainanao\nhotantaniny",
        "verses": [
            "Ny fiainanao dia sambo\nMamakivaky ranomasina\nOmaly tsara ny andro\nAndroany tonga tafiotra\nOmaly sambatra hianao\nAnio malahelo ketraka\nTsy hitanao intsony izay haleha.",
            "Ny fiainanao dia sambo\nMamakivaky ranomasina\nAo ny andro mibaliaka\nAo koa ny andro manjombona\nMisy fahoriana na dia ao\namin'i Jesosy\n'Nefa tony ianao anaty ady",
            "Tsy ho fitsapana lalandava ny\nFiainanao\nMisy fotoana izay anefena anao\nHo voadio hianao,\nHo amin'ny fahatsarana kokoa\nHo hitanao hiova ny fiainanao",
            "Avelao Izy hitantana\nNy androm-piainanao\nNa tony na manonja\nNy ranomasina\nHo tody soa hianao,\nEry am-pita ery\nRaha ekenao Jesosy hanjaka\nEo aminao"
        ]
    },
    {
        "title": "AVERENO NY LOHATAONA",
        "number": 199,
        "chorus": "Tompo ô! avereno indray\nAto am-poko ny lohataona\nArotsahy ny Fanahinao Masina\nHanatsara sy hamelona.",
        "verses": [
            "Mamoa sy mivelatra ny voninkazo\nAmin'ny andro lohataona\nLasa ny ririnina manjombona\nMikalo indray ny vorona.",
            "Ho toy ny rano mikoriana anie\nNy fizotran'ny fiainako\nMba hanambara ilay tantara iray\nIzay niseho tao Kalvary.",
            "Ampanalaviro ny aizin'ny ota\nDia hifaly ny fanahiko\nHiravoravoako tanteraka indray\nAmin'ny fanompoako Anao."
        ]
    },
    {
        "title": "AVIA FANAHY MASINA O!",
        "number": 522,
        "verses": [
            "Avia Fanahy Masina o!\nHazavao ny fonay\nAmpisehoy anay tanteraka\nIreo otanay\nMalemy izahay, nefa te-ho afaka\nKa arotsahy aminay anio\nNy herim-pandresena",
            "Avia toy ny afo hanadio ny foko\nNy fanahiko, ny tenako manontolo\n'Ndreto ho fanatitra ho an'ny\nMpanavotra\nAoka ny fiainako ho toy\nNy boky vakina",
            "Avia toy ny rivotra mifofofofo\nAvereno eto aminay ny Pantekosta\nOmeo anay anio ny fahasahiana\nHanambara amin'ny\nOlona ny fanavotanao"
        ]
    },
    {
        "title": "AVIA FANAHY O!",
        "number": 273,
        "verses": [
            "Avia Fanahy ô!\nFanahy Masina ô!\nMidina eto aminay\nHitari-dàlana",
            "Fa diso làlana\nKa ory izahay;\nNy sainay dia maizina\nNy fonay ratsy koa.",
            "Midina Hianao\nRy Mpanazava anay!\nHanaisotra ny maizina\nAty anatinay",
            "Avia Mpananatra ô!\nMomba anay tokoa\nAmpahatsiarovinao\nNy teny mahasoa",
            "Ry Mpampianatra ô!\nAmpionao izahay\nKa aoka re ho marina\n'Zay ianaranay\n",
            "Mitomoera aty\nAnatin'ny fonay\nIzany indrindra, Tompo ô!\nNo angatahinay."
        ]
    },
    {
        "title": "AVIA HITSAOKA",
        "number": 642,
        "chorus": "Voninahitra ho Anao Jesosy\nTompon'ny tompo\nMpanjakan'ny mpanjaka\nMonina ao am-ponay\nAnio, ampitso derainay\nNy herinao ho mandrakizay\nNy voninahitrao sy ny fahafatesanao.",
        "verses": [
            "Avia rankizy, andeha\nHitsaoka an'i Jeso Tompo\nAvia fa lehibe Izy\nMahery ary Mpamonjy\nMihirà fiderana kanto\nSy tena mendrika ho an'ny\nTompon'ny fiainana.",
            "Avia ry fiangonana ô\nDerao ny Tompotsika\nMendri-panajana\nSy iankohofana koa Izy\nLazao eran-tany sy eran-danitra\nny lazany\nHirao hanakoako ankehitrio.",
            "Ry firenen-drehetra ô,\nAnkalazao Jesosy\nAnarana mandrakizay,\nMitondra famonjena\nTsy misy anarana mahavotra\nny fanahy\nAfa-tsy ny Anaran'ny Tompo"
        ]
    },
    {
        "title": "AVIA KA HOMEO AZY NY VONINAHITRA",
        "number": 615,
        "chorus": "Ho Azy 'Zay Lehibe\n'Lay Zanak'Ondry masina\nAnarana Avo,\nTsy miova mandrakizay\nJesosy 'Lay Lehibe\nZanak'Ondry nitsangana\nNaharesy ny ota ka derao.",
        "verses": [
            "Avia ka omeo Azy ny voninahitra\nAvia ka omeo Azy ny dera sy laza.",
            "O! asandrato ny feonao\nHo an'i Jesosy\nAsandrato ny tànanao\nHo amin'ny lanitra"
        ]
    },
    {
        "title": "AVIA MBA HIRAVORAVO",
        "number": 136,
        "chorus": "Henoy ny fasana\n\"Izay mety re avia! \"\nDerao Andriamanitra\nNoho ny famonjeny.",
        "verses": [
            "Andeha ry noana sy reraka\nAvia mba hiravoravo;\nVoavoatr'izao ny fanasana;\nHo voky tokoa ianao.",
            "Mivoha ny varavarana\nVita ny zava-drehetra;\nMisy toerana ho anao,\nEo anilan'ny Tompo.",
            "Raha mbola eo am-piandrasana\nNy fahatongavanao Izy\nAza mangatak'andro intsony\nTsy fantatrao ny ampitso.",
            "Ilaozy ny fanahinao\nSy izay mitazona ety,\nAndeha hifaly mandrakizay,\nAmin'ny fitiavan'ny Ray."
        ]
    },
    {
        "title": "AVIA RE JESOSY O!",
        "number": 137,
        "verses": [
            "Avia re, Jesosy ô!\nMonena ato anatiko;\nMonena anio, ampitso koa,\nMonena mandrakizay."
        ]
    },
    {
        "title": "AVIA RY MINO",
        "number": 146,
        "verses": [
            "Avia, ry mino! Hifaly sy hihoby\nAvia, avia hankany Betlehema\nTeraka Jeso, Tompon'ny anjely;\nAvia hitsaoka Azy (in-3)\n'zay Tomponao.",
            "Tompon'ny Tompo, Andriananahary,\nNefa mba zana-behivavy koa;\nZanak'i Maria nefa Zanahary\nAvia hitsaoka Azy (in-3)\n'zay Tomponao.",
            "Derao ry anjely, mihobia mafy,\nRy mponina an-danitra\nao ambony ao!\nDera sy laza atolory Azy;\nAvia hitsaoka Azy (in-3)\n'zay Tomponao.",
            "He, arahaba tonga ety an-tany\nNy Tompo Mpamonjy sy Mpanjaka\nkoa\nTenin'ny Rainy voatafy nofo;\nAvia hitsaoka Azy (in-3)\n'zay Tomponao."
        ]
    },
    {
        "title": "AVIA RY ORAM-BAVAKA",
        "number": 478,
        "verses": [
            "Feno fiadanana sy fitsaharana\nNy oram-bavaka izay anilan'ny\nTompo;\nFeno fifaliana, manala ahiahy,\nNy mitoetra eo an-tongony\nam-bavaka.",
            "Mifanatri-tava, mifandray tànana\nMihira ny famonjena sy ilay\ntany soa;\nNy fahamarinana no fanilontsika\nNo hanazava an'ireo anaty aizina.",
            "Ora sarobidy ny oram-bavaka,\nAhatsapana ny herin'ny\nFanahy Masina\nManaisotra ny tahotra mampahory,\nMahatonga fanantenana sy finoana",
            "Moa tsy azonay ry Mpihaino\nvavaka ô!\nHatonina Ianao raha very ny\nfinoanay\nNoho ny tahotra sy ireo ahiahy;\nNy oram-bavaka mitondra fifaliam-\nbaovao."
        ]
    },
    {
        "title": "AVY AMINY NY ZAVATRA REHETRA",
        "number": 662,
        "verses": [
            "Avy Aminy, hazoniny ho Azy\nNy zavatra rehetra\nAn'i Jesosy ny voninahitra\nAvy aminy, hazoniny ho Azy\nNy zavatra rehetra\nAn'i Jesosy ny voninahitra",
            "Avy Aminy, hazoniny ho Azy\nNy zavatra rehetra\nAn'i Jesosy ny voninahitra\nAvy Aminy, hazoniny ho Azy\nNy zavatra rehetra\nHo Azy ny voninahitra Amen!"
        ]
    },
    {
        "title": "AZA HODIANAO TSY RE",
        "number": 328,
        "chorus": "Aza hodianao tsy re'\nzao antso izao\nAza fatra-piala-tsiny ianao\nfandrao\nAny aoriana hotadiavinao\nJesosy fa tsy ho hitanao.",
        "verses": [
            "Miantso anao Jesosy hoe:\nAvia, andeha hanaraka Ahy\nFa misy drafitry\nNy Tompo tiany hatao\nMatoa Izy miantso anao 'zao\nanio izao\nKoa mitsangana e dieny mbola re\nNy antsom-pitiavan-dehibe.",
            "Manas'anao Jesosy izao\nIlaozy ny fiainan-dratsinao;\nTsy sitrany mantsy\nny haverezanao\nFa ny hamonjena ilay fanahinao;\nMiverena ianao,\nry zaza mpiodina\nFandrao hampanahelo ny Fanahy.",
            "Anio no andro famonjena\nIzao ny vavakao no ekena,\nIzao no manan-kery ny fifonanao,\nKa tsy very maina ny ranomasonao\nTsy misy famonjena any am-pasana\nKa ekeo izao ny fanasana.",
            "Nefa raha toa tsy sitrakao\nNy antso 'zay ataony aminao\nDia azonao atao ny mandà izany\nNefa ho avy ny andro iray\nHanenenanao\nHiantso ianao fa tsy ho henoina\nSatria efa tratr'aoriana."
        ]
    },
    {
        "title": "AZA ILAOZANA MIHODINA IZY",
        "number": 277,
        "chorus": "Koa aza ilaozana mihodin'Izy\nManalavitr'Azy ianao ankehitrin'\nIzao\nNefa mbola ilainao Izy indray\nAndro any,\nAza hilaozana mihodina, vohay\nNy fonao",
        "verses": [
            "Mandondon'eo am-baravaran'ny\nFonao Jesosy\nAmim-paharetana sy hahalemem-\npanahy lehibe.",
            "Ny fangoraham-pony no nidinany\nHo ety\nKoa ekeo ny fitiavana mahagaga\nNasehony.",
            "Az'atao tsinontsinona ny\nSakaiza toa Azy\nKa hibebaho ny otanao fa\nMamela tokoa Izy",
            "'Zao no fotoana mety mba\nHandraisanao Azy\nAza omena alahelo intson'Izy\nFa mba ekeo."
        ]
    },
    {
        "title": "AZA IZAHAY",
        "number": 65,
        "verses": [
            "Aza izahay, ry Tompo\nAndriamanitra o!\nAza izahay no omena voninahitra\nfa ny Anaranao irery ihany\nNoho ny famindram-po\nSy ny fahamarinanao",
            "Ampio izahay hanetry tena\nbe dia be\nRaha avy izay fotoana\nHisandratanay,\nHo sanatria raha hisy reharehanay\nAfa-tsy ny hazo fijalian'i Jesosy."
        ]
    },
    {
        "title": "AZA MANADINO AHY RY MPIHAINO VAVAKA",
        "number": 151,
        "verses": [
            "Aza manadino ahy,\nRy Mpihaino vavaka!\nAza mba manary ahy\nHanalavitra Anao!\nMitodiha, ry Mpanjaka\nKa jereo ny olonao;\nAza manadino ahy,\nRy Mpihaino vavaka.",
            "Hianao no fireneko\nVatolampy, heriko\nNa kamboty aza aho\nFaly manana Anao\nAfa-tahotra ny foko\nRaha miandrandra Anao\nAza manadino ahy,\nRy Mpihaino vavaka!",
            "Eny, Hianao no Raiko,\nKa hatoniko izao\nNefa ny fahadalako\nAza mba heverinao\nO! ampifalio aho,\nKa ombay ny elatrao;\nAza manadino ahy,\nRy Mpihaino vavaka.",
            "Tabataba lalandava\nNo mba hitako izao\nKa izaho te-ho tonga\nAo am-pitsaharanao\nMitenena ry Jehovah!\nMamalia ahy'zao;\nAza manadino ahy,\nRy Mpihaino vavaka."
        ]
    },
    {
        "title": "AZA MANAHY",
        "number": 368,
        "chorus": "Aza manahy\nHo eo alohanao Aho\nAvia, araho Aho\nF'Izaho no Làlana.",
        "verses": [
            "Raha mamaky ny efitra hianao\nDia hanome rano Aho\nKa ho sahy hiroso ianao\nHo an-tany tsy fantatra\nRaha hiresaka amin'ny vahiny\nDia ho azony ianao\nHo hitanao ny Tompo hamelona.",
            "Raha mita ny ony hianao\nTsy hanafotr'izany\nRaha mamaky afo hianao\nNefa dia tsy ho may\nRaha mijoro anilan'ny helo\nToa mila ho faty\nFantaro fa eo ihany koa Aho.",
            "Hotahina ny mahantra\nHo azy ny fanjakana\nAry hianao izay mitomany\nDia ho sambatra\nRaha tenenin-dratsy mijaly\nNoho ny Anarako\nHo lehibe ny valisoanao.",
            "Raha nomena andraikitra\nMavesatra, sarotra\nDia handà izany ve ianao?\nFa hoe tsy zakako\nTsarovy fa ny Tomponao\nNitondra ny Azy\nDia tsy ho afa-miala ianao",
            "Raha toa maharitra ela\nNy Mpampakatra antsika\nKa rendrehana avokoa\nNa adala na hendry\nNy fitiavan'ny Tompo kosa\nMahay miaro\nFa aoka tsy ho lany solika."
        ]
    },
    {
        "title": "AZA MANAHY RY ONDRY VITSY",
        "number": 545,
        "chorus": "Minoa fotsiny ihany (in-2)\nHainy ny zavatra rehetra\nMinoa fotsiny ihany",
        "verses": [
            "Aza manahy ry ondry vitsy\nJesosy no nidina.\nNombohana tamin'ny hazo,\nNahazoana seza fiandrianana;\nNekeny ny fahafatesana,\nAhazoanay ny fiainana\nNomen'Azy ny fahefana,\nEty an-tany, an-danitra.",
            "Aza manahy ry ondry vitsy,\nEo alohanao Jesosy,\nNy Mpiandry anao no misafidy,\nNy làlana alehanao,\nTao Getsemane,\nNosotroiny ny kapoaka\nHanomezany anao ny fandresena.",
            "Aza manahy ry ondry vitsy,\nMavesatra ve ny entanao?\nTsy misy mahasakana,\nNy fanavotany anao,\nIzy tsy mba mandao,\nAry tsy manadino,\nEo mandrakizay Izy,\nK'aza manahy ianao."
        ]
    },
    {
        "title": "AZA MATAHOTRA",
        "number": 668,
        "verses": [
            "Aza matahotra fa momba anao Aho\nAza miherikerika foana\nFa Izaho no Tomponao\nAza matahotra fa momba anao Aho\nMampahery anao, sy mamonjy anao.\nTompoko Hianao\nTompoko Hianao\nMitantana ahy ny tanan- kavananao\nTompoko Hianao Eny\nTompoko Hianao\nTsy matahotra aho\nfa momba ahy Hianao",
            "Aza matahotra\nMomba anao Izy\nAza miherikerika foana\nf'Izy no Tomponao\nAza matahotra\nMomba anao Izy\nMampahery anao sy mamonjy anao\nTomponao Izy (in- 2)\nMitantana Anao ny tanan-kavanany\nTomponao Izy\nEny Tomponao Izy\nAza matahotra fa\nMomba anao Izy."
        ]
    },
    {
        "title": "AZA MBA MANDALO AHY",
        "number": 190,
        "chorus": "Ry Mpanjaka, mihainoa re,\nMamonje fa mitaraina\nny vahoaka",
        "verses": [
            "Aza mba mandalo ahy\nRy Mpamonjy ô!\nAza mba manary ahy\nJeso Tompo ô!",
            "Fantatrao fa malahelo\nNy mpanomponao,\nRaha mbola eto aho\nMba tsinjovinao.",
            "Indro fa miandry eto\nNy navotanao,\nAoka tsy halahelo\nMba tafio izao.",
            "Eny, manomeza hery\nMba ho ahy re\nKa hahery sy handresy\nNy mpanomponao"
        ]
    },
    {
        "title": "AZA MILEFITRA AMIN'NY FAKAM-PANAHY",
        "number": 222,
        "chorus": "Angataho ny Tompo hanome\nhery anao\nTiany ny hanampy sy hamonjy anao",
        "verses": [
            "Aza milefitr'amin'ny fakam-panahy\nMba handresenao ireo hafa sisa;\nMandrosoa miady amin'ny filàna;\nJereo Jesosy hanampy anao.",
            "Ilaozy ny teny sy ny naman-dratsy;\nHajao ny anaran'Andriamanitra\nAoka ho marina sy ho mahitsy fo,\nJereo Jesosy hanohan'anao",
            "Amin'ny finoana no andresentsika\nNa dia azera matetik'aza re!\nHavaozin'ny Mpamonjy\nNy herintsika\nJereo Jesosy hanafaka anao."
        ]
    },
    {
        "title": "AZOKO NY FAMONJENA",
        "number": 588,
        "chorus": "Lehibe ny antranao sy ny fitiavanao\nNy fitarainako eo anatrehanao\nAmpianaro ny didinao\nHideran'ny molotro\nNoho ny fahamarinanao\nFamonjena no azoko.",
        "verses": [
            "Ny làlanao tsy adinoko\nMatoky Anao aho\nMiandry ny famonjenao hatrany\nMarina ny fitsaranao.",
            "Ry Tompo Mpamonjinay ô!\nTantano izahay\nAza avela ho reraka ny fo\nFa fenoy ny herinao.",
            "Arovy amin'ny ratsy\nN'aiza n'aiza aleha\nTariho amin'ny tànanao\nHo tafita any Aminao.",
            "Hianao ihany no hampijoro\nAmin'ny finoana\nSy hanohana raha mila ho kivy\nSambatra aho fa novonjenao."
        ]
    },
    {
        "title": "AZONY ATAO VE NY MITOKY AMINAO?",
        "number": 220,
        "chorus": "Azony itokiana ve ianao\nNy fiasorana azy atao\nAzony atao ve ny mitoky anao?\nAzony itokiana ve ianao?",
        "verses": [
            "Jesosy Mpamonjy tonga tety\nHitia sy hamindra fo\nNohombohana sy\nnalaim-baraka koa\nSy maty tao Kalavary\nNivavaka teo amin'\nny hazo fijaliana\n\"Ray o! mamelà ny helony\"\nNoho izy maty dia velona isika\nAzony itokiana ve ianao?",
            "Raha vao nitsangana tao am-pasana\nNy asa asehony anao;\nAndeha mitory filazantsara\nArio ny tahotra re.\nDidio mba hino sy hibebaka\nMandehana am-piainam-baovao\nTano ny mazava hitsilo azy ireo\nAoka hiady ianao",
            "Jesosy Mpamonjy hiverina indray\nHanjaka mandrakizay\nMoa mba vonona\nhihaona Aminy ianao\nSa kosa holavina?\nEfa nitory fitiavana ve\nLazao: inona no vitany?\n'Zay no fitsipika tonga ho anao\nAzony itokiana ve ianao?"
        ]
    },
    {
        "title": "BETLEHEMA",
        "number": 477,
        "verses": [
            "O! ry tanana kely any Betlehema ô\nSondrian-tory ianao anatin'ny\nAizina;\nNefa mamiratra sy manatona anao\nNy kintana ho fanazavana\nMandrakizay",
            "Sahirana ireo anjely sady talanjona\nNoho ny fitiavana naseho ny\nOlona.\nFa naterak'i Maria 'lay voahosotra\nFiadanana ho ety ambonin'ny tany.",
            "Tao anaty fahanginana no\nNanomezana\nNy fitahian-danitra ao\nam-pon'ny olona\nTsy nisy 'zay nandre\nny fahatongavany\nFa tany feno ota no nidiran'i Kristy.",
            "Ry zaza Masina Izay tao Betlehema ô\nMidina eto aminay, izany no vavakay\nEsory ny helokay; aoka ho teraka\nAto am-ponay Ianao r'Imanoela ô."
        ]
    },
    {
        "title": "DERAIKO NY ANARANAO TOMPO",
        "number": 560,
        "verses": [
            "Deraiko ny Anaranao Tompo ô!\nDeraiko, Hianao Jeso\nFa lehibe sy mendri- piderana. (in-2)",
            "Deraiko ny Anaranao Tompo ô!\nDeraiko, Hianao Jeso\nMpanasitrana,\nMpamonjy mahagaga (in-2)",
            "Deraiko ny Anaranao Tompo ô!\nDeraiko Hianao Jeso\nFa Tompo\nMpanjaka mandrakizay (in-2)"
        ]
    },
    {
        "title": "DERAINA IANAO",
        "number": 690,
        "verses": [
            "Deraina Hianao, Tompo\nNy Anaranao Avo\nIankohofanay (in-3)",
            "Ankalazainay ny Anaranao\nIanteheranay (in-3)\nIlay anaranao mahagaga\nIorenan'ny fonay (in-3)\nNy fitiavana mandrakizay.",
            "Deraina Hianao, Tompo\nNy Anaranao Avo"
        ]
    },
    {
        "title": "DERAINA NY TOMPO",
        "number": 536,
        "chorus": "Deraina ny Tompo\nDeraina Izy deraina.",
        "verses": [
            "Deraina ny Tompo\nHohiraiko ny fiderana\nDeraina ny Tompo\nDeraina Izy deraina.",
            "Jesosy no sakaiza\nMitarika isan'andro\nHazoniny ny tanako\nHazavainy ny lalako",
            "Andro tsara na ratsy\nHohiraiko ny fitiavany\nMibaliaka na matroka\nHihira hatrany aho."
        ]
    },
    {
        "title": "DERAO ANDRIAMANITRA",
        "number": 762,
        "verses": [
            "Derao Andriananahary\nDerao Jeso Mpanavotra\nDerao ny Fanahy Mpampionona\nHaleloia (in-3)"
        ]
    },
    {
        "title": "DERAO ANKALAZAO",
        "number": 746,
        "chorus": "Derao, ankalazao Izy ka tantarao\nNy fikarakarany antsika\nAoka ho toy ny dinin-kazo manitra\nNy fanoloran-tenantsika",
        "verses": [
            "Hirao ny famindrampon'\nAndriamanitra\nMbamin'ny fiarovany koa\nAoka ho toy ny dinin-kazo manitra\nNy fanoloran-tenantsika",
            "Hirao ny fanomezan-pahasoavany\nAo amin'i Jeso Zanany\n'Zay nampanatona antsika\nHo eoanilan'ny seza fiandrianany.",
            "Mivavaha mba hitohy ny fitahiany\nKa hazava ny làlan-kaleha,\nMba ho tanteraka ny fanahintsika\nAry handova ny fanjakany."
        ]
    },
    {
        "title": "DERAO NY HERY",
        "number": 208,
        "verses": [
            "Akalazao ny herin'\nny anaran'i Jesosy\nAoka hiankohaka Aminy ireo\nanjeliny\nSatrohy voninahitra Izy fa\nTompon'ny rehetra.",
            "Ry voafidy amin'ny fokon'\nny Israely\nRy voavonjy, miderà izay namonjy\nanao\nSatrohy voninahitra Izy fa\nTompon'ny rehetra.",
            "Ry ankohonana sy ny fokom-\npirenena\nAtolory an' i Jeso ny fahalebiazana\nSatrohy voninahitra Izy fa\nTompon'ny rehetra.",
            "Isika sy ny masina ho eo an-tongony\nHiaraka mihoby 'lay hira\nmandrakizay\nSatrohy voninahitra Izy fa\nTompon'ny rehetra."
        ]
    },
    {
        "title": "DERAO NY MPANJAKA",
        "number": 717,
        "verses": [
            "Masina, masina 'Lay Jesosiko (in-2)\nAnkalazao ny anarany\nMasina, masina 'Lay Jesosiko\n(Mendrika, mendrika\n'Lay Jesosiko) (in-2)",
            "Ndeha hidera ny anarany;\nMendrika, mendrika 'lay Jesosiko\nJesosy ô! Tompo Ianao (in-2)\nMankalaza Anao izahay:\nJesosy ô! Tompo Ianao"
        ]
    },
    {
        "title": "DERAO NY MPANJAKAN'NY MPANAJAKA",
        "number": 531,
        "verses": [
            "Miankohofa eo amin'ny\nMpanjaka\nDerao amin'ny fonao Izy\nAsandrato amin'ny voninahiny\nDerao ny Mpanjakan'ny\nMpanjaka.",
            "Asandrato amin'ny voninahiny\nDerao ny Mpanjakan'ny\nMpanjaka. ."
        ]
    },
    {
        "title": "DERAO NY TOMPO FA TSARA",
        "number": 616,
        "verses": [
            "Derao ny Tompo fa tsara (in-2)\nNampandresy amin'ny Anarany\nDerao ny Tompo fa tsara Izy.",
            "Ankalazao ny Heriny (in-2)\nEran-tany ny voninahiny\nAnkalazao ny Heriny.",
            "Hirao ny famindrampony (in-2)\nAmin'izay matahotra Azy\nHirao ny famindram-pony."
        ]
    },
    {
        "title": "DIOVY AHO",
        "number": 10,
        "verses": [
            "Diniho aho Andriamanitr'ô!\nAry fantaro ny foko;\nZahao toetra aho ry Mpamonjy ô!\nKa fantaro ny eritreritro.",
            "Diniho aho sao misy làlana\nMampahory ato anatiko;\nDia tariho amin'ny làlanao;\nMandrakizay, ka diovy aho;",
            "Tanteraho ny faniriako,\nTompo ô!\nDiovy ny ato anatiko\nMba hanomezako voninahitra\nNy Anaranao, 'zay no vavako.",
            "Mialok'Aminao aho ry\nTompo ô!\nKa raiso ho Anao tanteraka\nFenoy ny fitiavan-danitra aho\nO! mitoera amiko Ianao.",
            "Fohazo aho ry Fanahy Masina ô!\nAtombohy amiko ny asanao;\nKoa takiako ny fitahianao;\n'Zany no vavako ry Tompo ô!"
        ]
    },
    {
        "title": "EFA ANANANAO VE?",
        "number": 75,
        "chorus": "Atolory anio ho fanatitra soa\nNy fonao fa iriny izao\nEny, ny andronao koa\nDia ilainy avokoa\nMoa tsy homenao hatrizao?",
        "verses": [
            "Efa anananao vé? Ny fiadanan'ny fo\n'Zay atolotr'i Jeso izao'lay\nFitiavany be\nMahatoky tokoa moa ve efa\nnoraisinao?",
            "Efa anananao vé, Zany herin'ny fo\n'Zay atolotr'i Jeso izao,\nNy fitiavany re\nManda mafy tokoa\nFiarovana mafy ho anao",
            "Moa anananao vé? Ho fiainan'ny fo\nNy aina atolotr'i Jeso\nNy fitiavany anie\nFitiavana be\nZay hamelona re ny ainao."
        ]
    },
    {
        "title": "EFA NAFOIKO MANDRAKIZAY",
        "number": 134,
        "verses": [
            "Efa nafoiko mandrakizay\nNy filan'izao tontolo izao.\nFa ny hanompo an'i Jesosy\nNo mameno ny foko izao."
        ]
    },
    {
        "title": "EFA NOMEKO AN'I JESOSY NY FOKO",
        "number": 315,
        "verses": [
            "Efa nomeko ny foko\nNomeko an'i Jesosy\nRaha te-ho sambatra toa ahy ianao\nDia omeo Azy koa ny fonao."
        ]
    },
    {
        "title": "EFA VOALOAN'I JESOSY AVOKOA",
        "number": 112,
        "chorus": "Izay ilaiko dia ao Aminy\nF'efa voaloan'i Jesosy avokoa.",
        "verses": [
            "Bitika ny herinao ka dia mivavaha\nFa ao amin'ny Mpamonjy izay\nrehetra ilainao",
            "Tompo ô! fantatro fa\nHerinao irery\nNo manadio ny ota, manova\nNy fo vato.",
            "Eo an-tongotr'i Jeso no\nHijoroako\nHanolotra ny asa\n'zay mba vitako tety."
        ]
    },
    {
        "title": "EKEKO TOMPO O IZAY HITARIHANAO AHY",
        "number": 212,
        "chorus": "Feo I:\nN'aiza n'aiza Jesosy ô,\nHitondranao ahy (in-2)\nN'aiza n'aiza Jesosy ô,\nDia hanarak'aho.\nFeo sisa:\nN'aiza n'aiza re, ry\nMpamonjy mamiko\nHitondranao ahy (in-2)\nN'aiza n'aiza re,\nHitarihanao ahy\nDia hanarak'aho.",
        "verses": [
            "Ekeko ry Tompo izay sitrakao\nN'aiza n'aiza làlana hitarihanao,\nNa ho feno tsilo sy feno fandrika\nDia hanarak'Anao n'aiza n'aiza aho.",
            "Mampahery ahy sy miaro koa\nIlay fifaliana avy Aminao,\nNa ho mafy aza ny dia, harahiko\nDia hanarak'Anao n'aiza n'aiza aho.",
            "Izao no iriko ry Mpamonjy ô!\nTehirizo aho e! tsy haniasia;\nHanda ny fitaomana entin'ny ota,\nDia hanarak'Anao n'aiza n'aiza aho."
        ]
    },
    {
        "title": "EKEO JESOSY",
        "number": 537,
        "chorus": "Ekeo Jesosy, henoy ny antsony\nOmeo ny fiainanao hanompo Azy\nEkeo Jesosy, henoy ny antsony\nOmeo ny fiainanao hanompo Azy",
        "verses": [
            "Ekeo Jesosy sy ny baikony\nManompoa Azy am-pitiavana\nMiasà ny sahany am-pinoana\nN'inona atolony ekeo\nfa sahaza anao.",
            "Ekeo Jesosy dieny izao\nMinoa ny fitondrany, mamoaza be\nMahereza, tano ny finoana\nJesosy Tsitoha no Tomponao.",
            "Ekeo Jesosy aoka ho marina\nho an'ilay Mpanavotra maty ho anao\n'Zay nitia anao omeo ny tsara\nindrindra\nAtaovy ny asany, Izy hiahy anao",
            "Ekeo Jesosy, Azy hianao Mahafaly\nny mpanompo Mpanjaka\nTsy mpanompo intsony fa sakaizany\nMandia ilay lalam-be hatrany\nam-parany"
        ]
    },
    {
        "title": "EL SHADDAI",
        "number": 391,
        "verses": [
            "Niova ny rehetra fa tianao\nAbrahama\nNy herinao nanisy\nLàlana tan-dranomasina\nNanome ny tsara\nHo an'ireo nolavina Hianao\nNy herinao nanafaka azy ireo\nEl Shaddaï, El Shaddaï\nEL Elyona Adonaï\nTsy miova ny Anaranao\nMahery tiako\nEl Shaddaï, El Shaddaï\nErkankana Adonaï\nHoderaiko n'aiza n'aiza\nEl Shaddaï",
            "Naseho an-taona maro\nNy fihavian'i Kristy\nHo an'ireo izay jamba\nTianao hovonjena\nNefa tsy nahoan'ireo ny\nTenifikasana\nNahefa ny rehetra Hianao\nNamoy ny ain'ny Zanakao,\nEl Shaddaï, El Shaddaï\nEl Elyona Adonaï\nMandresy an'ady Hianao\nEl Shaddaï\nEl Shaddaï, El Shaddaï\nEl Elyona Adonaï\nTsy miova ny Anaranao\nMahery tiako\nEl Shaddaï, El Shaddaï\nErkankana Adonaï\nHoderaiko n'aiza n'aiza\nEl Shaddaï",
            "El Shaddaï, El Shaddaï\nEl Elyona Adonaï\nTsy miova ny Anaranao\nMahery tiako\nEl Shaddaï, El Shaddaï\nEl Kamka na Adonaï\nHoderaiko n'aiza n'aiza,\nEl Shaddaï"
        ]
    },
    {
        "title": "ELA NO NIANDRASAN'I JESO",
        "number": 115,
        "chorus": "Ela no niandrasan'i Jeso\nTeo ambaravaran'ny fonao,\nNdrao ity no antso farany,\nKa valio Izy sao ho very ianao? (in-2)",
        "verses": [
            "Moa ve vita fihavanana,\nAmin'Andriamanitra ianao?\nMoa mba efa nibebahanao\nTamin'ny fonao ve'reo otanao?",
            "Manatona an'Adriamanitra.\nDia hanatona anao Izy,\nAoka tsy hisalasala intsony\nSatria tia anao Jesosy",
            "Ny osa sy ny tsy mino anie,\nHanana ny anjara ratsiny,\nKoa raha menatra ny Tompo ianao\nIzy kosa ho menatra anao.",
            "Tsy ny Tompo no haninona.\nRaha manda ny hovonjen'ianao.\nFa ianao no hitomany\nIanao ihany no hijaly mandrakizay",
            "Ny fiadanan'i Jesosy,\nNo ho lova tsara ho anao;\nTsy aleo ve voavonjy ianao,\nToy izay meloka mandrakizay?"
        ]
    },
    {
        "title": "ENDREY IZANY FITSENANA ANAO JESOSY",
        "number": 634,
        "verses": [
            "Tsy ampy fanantenana\nHafaliana, faharetana\nIandrasana ny fotoana\nIzay hahitana Anao.",
            "Miandry ny fotoana\nMitady izay misy Anao\nTe-handre ny feonao hoe:\nAvia ka mahita.",
            "Niezaka niasa\nNefa dia tsy nahazo,\nKivy fa ny harato\nTsy nitondra ny vokatra.",
            "Ny fanjakanao anie\nHo tonga hatrany an-koatra\nNy Fanahy Fitiavana\nHamelona anao hatrany.",
            "Endrey tsara ny miara-mitsena Anao\nJesosy\nEndrey mamy ny manatona Anao\nTompo ô\nManatrika Anao, mahatsapa ho\nzanakao\nKa miantso hoe: efa hitanay sy renay\nHianao."
        ]
    },
    {
        "title": "ENDREY NY FAHALEHIBIAZANAO",
        "number": 473,
        "chorus": "Izany no hihirako ho Anao\nMpamonjy Andriamanitro,\nMidera Anao ny fanahiko\nEndrey ny fahalehibeazanao.",
        "verses": [
            "Ry Tompo ô! endrey 'zany herinao\nSy ny asa nataon'ny tànanao,\nNy kintana sy izao hita izao\nDia mampiseho koa ny herinao.",
            "Raha namaky ny ala aho dia nandre\nNy vorona mikalo ary koa,\nNy rano mikoriana sy mandeha\nAo ny tendrombohitra\nAvo koa",
            "Nosainiko ilay fanomezanao\nKa sarotra tamiko ny nandray,\nFa teo amin'ny hazo fijaliana\nNo nitondranao ireo entako.",
            "Raha avy am-pihobiana Jesosy\nFaly ny foko hody Aminao\nAm-panetre-tena no hanompoako\nHilazako ny fahalehibiazanao"
        ]
    },
    {
        "title": "ENDREY NY FITAHIANA",
        "number": 150,
        "chorus": "Mitantana, mitantana ny diako\nNy tanany no itarihany ahy re\nKa dia hanaraka ny diany\nami-toky aho\nFa ny tanany mahery\nno mitantana ahy.",
        "verses": [
            "Endrey ny fitahiana\nSy ny hery feno\nfaherezan-danitra\n'Zay ataoko sy alehako\nNy tanany mahery\nno mitarika ahy.",
            "Indraindray tarihiny\nAmin-dalam-pahafatesana ny\nFiainako\nNa ranomasin'onja be\ntsy hatahotra aho\nFa eo an-tanan'i Jeso.",
            "Mpamonjy ô! raisinao ny tanako\nHanekeko an-tsitrapo\nizay tena sitrakao\nN'aiza n'aiza no haleha,\nfaly aho miara-dia\nFa ny tanany mahery\nno mitarika ahy.",
            ". Ka rehefa vita ny asako ety\nNoho ny fitia sy ny fahasoavanao\nDia handresy aho ka tsy hatahotra\nHiampita 'lay onim-pahafatesana."
        ]
    },
    {
        "title": "ENDREY NY HAMARON'NY SOA",
        "number": 68,
        "chorus": "Eny, Raiko,\nHe! Ravoravo tokoa\n'Ty zanakao voavonjy ré\nKa velombelona ery.",
        "verses": [
            "Endrey ny hamaron'ny soa,\nNomenao Ray, ho ahy koa!\nNy aiko, he! navotanao,\nNy heloko, vonoinao",
            "He azoko tokoa Jeso\n'Lay perla soa, madio sy vao\nNy zava-tsoan'ny tany re\nDia tsy ahoako tokoa.",
            "Ny vavako dia tsy mahay\nHamisavisa izao, ry Ray!\nNy fanomezan-dehibe\nDia tsy voatonoko koa.",
            "Ny foko no midera izao,\nHisaotra sy hanaja anao,\nHanoa, ho vonona hanao\nNy sitrakao rehetra."
        ]
    },
    {
        "title": "ENDREY NY VONINAHITRAO",
        "number": 372,
        "chorus": "Inona moa izahay\nTompo Andriamanitra ô?\nInona moa izahay\nNo arovanao indray?",
        "verses": [
            "Raha mijery ny\nlanitra asanao\nVolana aman-kitana\nNamboarinao",
            "Raha mijery ny fitiavanao\nFamonjena fanasitranana"
        ]
    },
    {
        "title": "ENY RY TOMPO",
        "number": 475,
        "chorus": "Koa valio hoe: ''Eny ry Tompo;\nLaviko ny sitrapoko,\nEny, hino sady hanompo\nEny, ho Anao ny foko''",
        "verses": [
            "Mitaona sy miantso anao\nHahafoy ny tianao Jesosy\nNa fomba mahazatra izany,\nNa saina ratsy miafina.",
            "Ny fanapahan-kevitrao\nNo hametra ny anjaranao,\nNa helo mbamin'ny satana\nNa lanitra sy Jesosy",
            "Tsarovy tsara fa mandalo\nNy an'izao tontolo izao,\nFa ny an'ny sitrapon'ny Ray\nMaharitra mandrakizay.",
            "Koa aza mety hofitahina\nFa marina ny Baiboly.\nIzy afafin'ny olona\nDia hojinjainy avokoa"
        ]
    },
    {
        "title": "ENY TIAKO JESO",
        "number": 160,
        "chorus": "Eny, tiako Jeso (in-3)\nNitia ahy taloha Izy.",
        "verses": [
            "He misy anarana iray\n'Zay sarobidy amiko,\nToy ny feo manako\nEo an-tsofiko.",
            "Anarana mampahatsiahy\nNy fitiavan'i Jeso.\nSy ilay rà sarobidy\nIlay nanadio ahy.",
            "Anarana mampifaly\nMamafa ny ranomaso\nKa mibitsika mora hoe\nO! Aza matahotra",
            "Jesosy ilay anarana\nTena tiako indrindra;\nTsy misy mahalaza\nNy hasarobidiny.",
            "Na feno tsilo aza re\nNy Làlana diaviko;\nMamerovero amiko\nIlay Anarana.",
            "Ny mponina any an-danitra\nVoavidin'ny Ràn'i Jeso\nMbola hihira mandrakizay\nIlay Anarana."
        ]
    },
    {
        "title": "EO AM-BAVAHADIN'NY LANITRA",
        "number": 502,
        "chorus": "Mbola hihaona aminao aho\nEo am-bavahadin'ny lanitra.\nMbola hihaona aminao aho\nRehefa tonga ny maraina vaovao.",
        "verses": [
            "Hihaona aminao aho amin'ilay\nMaraina\nKoa mivonona ianao ndrao tsy\nHo tonga ao.",
            "Raha ianao no tonga aloha\nAok'ianao hitsena ahy\nEo amin'ny vavahady no\nHahitako anao.",
            "Aoka hirehitra hatrany ny fanilo\nTananao.\nFa ny Mpampakatra any efa\nMiandry anao.",
            "Miandry antsika any ireo olo-\nMasina\nFivoriam-be izany feno hasam-\nbarana."
        ]
    },
    {
        "title": "EO AN-TANANY",
        "number": 787,
        "verses": [
            "Ny tany dia eo an-tanany\nToy ny zava-bitika indrindra\nNy ony sy ny ranomasina\nNy zava-drehetra an-tanany\nNy lanitra sy ny masoandro\nAo ny volana aman-kintana\nNy avana an'habakabaka\nEo an-tanany avokoa",
            "Izy no mitana ny aina,\nNa ny zaza vao teraka\nNa ny reny faly mitaiza\nNy ampitsotsika an-tanany,\nNa ny andro tena mazava\nMety hisy koa ny rahona,\nNy fiandohana sy ny fiafarana\nIzy no mandahatr'azy.",
            "Izy no tompon'ny fanahy,\nNy hirako Azy avokoa\nIreo fiderako rehetra\nEo an-tanany hiany koa,\nNy helo ary ny lanitra\nDia eo ambany fahefany,\nKa raha manaiky Azy ianao\nHovonjeny mandrakizay."
        ]
    },
    {
        "title": "ERAN-TANY AN'I JESOSY",
        "number": 526,
        "chorus": "Eran-tany (in-2)\nTorio ny Filazantsara eran-tany\nAjoroy ny hazofijaliana\nAtsangano ny faneva\nMandra-piaikin'ny eran-tany\nAn'i Jesosy",
        "verses": [
            "Ny eran-tany an'i Jesosy\nIzay no tanjona\nManomboka an-kavoana\nHatrany an-dranomasina\nNy eran-tany an'i Jesosy\nHiankohoka Aminy\nAn-tanàna, any an-tsaha\nHo Azy avokoa.",
            "Ny eran-tany an'i Jesosy\nIzay no hafatra\nMandrosoa, mitoria n'aiza misy\nolona\nNy eran-tany an'i Jesosy\nAjoroy ny faneva\nMiadia ho an'i Jesosy am-pinoana",
            "Ny eran-tany an'i Jesosy\nHo ao an-tranon-dRay\nLapasoam-pitiavana\nMazava, mahagaga\nNy eran-tany an'i Jesosy\nMandrosoa ry Mpanjaka\nHo amin'ireo firenena am-\nboninahitra."
        ]
    },
    {
        "title": "ETY AN-DALANA",
        "number": 363,
        "chorus": "Tsy ahiko ny làlan'izay haleha\nNa lohasaha na tendrombohitr'avo\nkoa;\nAmpy ahy rehefa miaraka amiko\nJesosy 'lay tena Sakaizako.",
        "verses": [
            "Manana sakaiza miara-dia amiko,\nEty an-dàlan'ny fiainana aho\nDia Jesosy 'lay namabo ny foko,\nFa nanova ny aizina ho mazava.",
            "Mitarika sy mitantana mor'Izy\n'Zay trotraka ety an-dalana;\nMbola handia lalam-be volamena\naho\nMiaraka amin'ilay Jesosiko.",
            "Tsy fantatr'ho marina ny fitiavany\nNandritra ny taona maro lasa;\nRaha tsy efa nandray ny famonjeny\naho.\n'Zay nataony teo amin'ny hazo."
        ]
    },
    {
        "title": "FA ANDRIAMANITRO IANAO",
        "number": 694,
        "verses": [
            "Andriamanitro Hianao\nSy Mpanjakako,\nFiadanako sy fiarovan'ahy\nMatoky Anao, tsy matahotra\nSatria vatolampiko Hianao",
            "Hianao no iriko\nSy fifaliako\nMpamonjy sy Mpanafaka ahy koa\nMijery Anao, tsy hihemotra\nAminao ny teny fiainana.",
            "Jesosy ô\nTsy hiala eo anilanao\nHo tony hihaino ny feonao\nHisotro eo amin'ny ranon'aina\nMandra-pahafenoko Anao."
        ]
    },
    {
        "title": "FA TSY AMIN-KERY NA AMIM-PAHATANJAHANA",
        "number": 617,
        "verses": [
            ";;; Fa tsy amin-kery na amim-\npahatanjahana\nFa amin'ny Fanahiko\nHoy ny Tompo;;;",
            "Ho hitanao ny fahavalonao\nAmbanin'ny tongotrao\nRaha miady amin'ny\nAlàlan'ny Fanahiko",
            "Ho hitanao ny asa lehibe\nHo vitanao\nRaha miantehatra\nAmin'ny fahasoavako",
            "Ho tsapanao ny fandresena\nFeno ho azonao\nRaha mandeha amin'ny\nFanetren-tena hianao."
        ]
    },
    {
        "title": "FA ZAZA NO TERAKA HO ANTSIKA",
        "number": 739,
        "verses": [
            "Fa zaza no teraka ho antsika\nZazalahy nomena antsika\nNy Anarany: Mahagaga,\nMpanolotsaina,\nAndriamanitra Mahery,\nRay mandrakizay,\nAndrian'ny fiadanana",
            "Ny anjelin'ny lanitra\nNanambara koa io zaza io\nFa nidina tety ny Mpamonjy\nHanafaka, hamaha ny fatorana\nHanome fiadanana ho an'ny\nOlona rehetra 'zay manaiky\nhandray Azy",
            "'Reo Mpiandry ondry mahantra\nRaha nandre ny amin'io zaza io\nDia niainga mba hizaha ny voalaza\nKa nahita 'lay fitiavan'Andriamanitra\nVonona handray 'zay manatona Azy\nKa mangetaheta famonjena.",
            "Toy izany koa ireo Magy\nNahita ny famantarana\nDia namototra tsara ny momba Azy\nKa nahita ary niakohoka taminy\nSady nanolotra 'zay nananany\nVolamena, zava-manitra, miora",
            "Dia manainga antsika koa\nHanatona 'lay Mpamonjy\nFa Azy ny zavatra rehetra\nVonona Izy hanome izay ilaina\nFamonjena,\nfanasitranana sy fiadanana\nFiainana mandrakizay."
        ]
    },
    {
        "title": "FAHASOAVANA! FEO MAMY",
        "number": 255,
        "verses": [
            "Fahasoavana! Feo mamy\nNamonjy ahy mahantra\nVery sy jamba aho, fa izao hitany,\nKa dia voavotra.",
            "Dia nianatra aho ny hankato,\nF'ireo tahotro foana,\nEndrey mamy ery tokoa izany\nHasoan'ny ora vao ninoana.",
            "Be 'reo fandrika mpanadala\n'Zay nahavoasingotra\nNoho io fahasoavan'io aho afa-niala\nKa ho any an-danitra.",
            "Rehefa tsy hitempo ny foko,\nLasa ny aina malia,\nDia atolotra ahy hiadanako\n'Lay fiainana ho doria.",
            "Reh'fa any an-koatra isika\nDia hisy andro maro\nAndro maro kokoa'zay\nHiderantsika\nIlay Tompo niaro."
        ]
    },
    {
        "title": "FALY AHO TOMPO O!",
        "number": 167,
        "verses": [
            "Faly aho Tompo o: satria Anao\nAmiko ny famindram-ponao\nNitady ahy, nanafak'ahy\nFaly aho Tompo ô, e faly aho!"
        ]
    },
    {
        "title": "FALY MIARAKA AMIN'I JESOSY TOKANA IHANY AHO",
        "number": 8,
        "chorus": "Faly miaraka amin'i\nJesosy tokana ihany\nNa dia mahantra aza\nMbola manao hoe\nFaly ao Aminy re aho.",
        "verses": [
            "Tsy misy soa ho ahy afa-tsy Jeso\nAfoiko ny haren'ny tany\nManan-karena aho nahita Azy\nFaly ao Aminy re aho.",
            "Raha meloka ho amin'ny\nfamoizam-po\nTsy nisy ny fahazavana\nJesosy kosa nanao ahy mpandova\nNy lapan'ny voninahitra",
            "Fony tsy nisy avotra fisoloana\nSy ho fampanekena ny Ray\nDia nanolo-tena hanavotr'ahy\nTamin'ny ràny Jesosy"
        ]
    },
    {
        "title": "FALY NY FOKO IZAO",
        "number": 280,
        "verses": [
            "Faly, faly ny foko izao (in-2)\nAto anatiko Jeso\nFaly ny foko izao, Haleloia."
        ]
    },
    {
        "title": "FAMINDRAM-PO LALINA",
        "number": 130,
        "chorus": "Jesosy ô! mananton'Anao\nEo amin'izao toetrako izao;\nKoa mba raiso re\nmananton'Anao\nAza lavinao ny foko.",
        "verses": [
            "He! famindram-po lalina\nFa ny Ray dia mamela,\nNy mpanota be toy izao,\nSy manadio ny otako.",
            "Ela no lavitra (ny)\nNy tavanao ry Tompo ô!\nAry nanidy ny foko,\nSy nandratra ny fonao.",
            "Manolo-tena ho Anao\nAho ry Jesosy ô!\nTe– ho afak'amin'ota,\n'Zay manelingelina.",
            "Haleloia! , tsy misy intsony\nNy fisalasalana,\nLasa ny enta-mavesatra\nKa ho any an-danitra aho…."
        ]
    },
    {
        "title": "FANAHY MARINA O!",
        "number": 629,
        "chorus": "Fanahy Marina ô\nVonony ny olonao\nArovy amin'izao\nAndro farany izao",
        "verses": [
            "Ambeno ny fo, ahirato ny maso\nMba ahafantarantsika ny amboadia\nFa any am-parany hisy mpampianatra\nHamitaka ny fiangonan'ny Tompo",
            "Tiavo ny marina, fantaro ny Tompo\nAoka ho diovina ny saina sy fo\nRaiso ny teny hosabatry ny fanahy\nAfoizo ny sampy hiderana ny Ray.\nFanahy Marina ô\nVonony ny olonao\nDiovy amin'izao\nAndro farany izao",
            "Aza mitsiriritra izao tontolo izao\nIalao ny avonavona sy ny lainga\nTiavo ny sitrapon'nyRay\nHiaina ho Azy eto an-tany.\nAndrandrao ny masonao\nry Fiangonana ô!\nAoka ny fonao ho amin'ny\nharen-danitra\nMiadia ny ady tsara\nMipaika ny ora farany\nFanahy Marina ô\nVonòny ny olonao\nFohazy amin'izao\nAndro farany izao"
        ]
    },
    {
        "title": "FANAHY MASINA O OMEO AINA VAO",
        "number": 312,
        "verses": [
            "Fanahy Masina ô! (in-3)\nTiako Ianao\nMangetaheta Anao\nny fanahiko izao;\nMidina Ianao\nfenoy aho\nOmeo aina vao,\nmba tsy ho reraka aho,\nvelombelomy aho\nFanahy ô\nNy fifaliana\nizay ho entinao\nNo hery vaovao\nhandreseko.",
            "Fanahy Masina ô! (in-3)\ntariho aho\nOmeo fahendrena\nsy fahalalana\nTolory saina aho\nanaro koa\nAmpiekeo ny fahotako aho\nTorotoroy ny fanahiko\nAza ilaozana aho sao diso làlana\nFanahin'ny fahasoavana ô."
        ]
    },
    {
        "title": "FANAHY MASINA O! MIDINA",
        "number": 371,
        "chorus": "Ry Fanahy Masina ô!\nMidin'ato aminay\nNy hery sy fahefanao\nAoka hiseho aminay",
        "verses": [
            "Avia Fanahy ô, midina\nHo fahendrena ho anay,\nHampahiratra ny jamba\nHo herin'ny malemy",
            "Avia ho fitsaharana\nHo an'izay reraka\nHamelona toy ny ando\nIreo 'zay mangetana.",
            "Avia fenoy ny foko\nIzay toy ny efitra;\nKa aoka re ny herinao\nNo hanasitrana ahy.",
            "Ry Fanahy ô; midina\nHo balsama ho anay;\nHampisinda ny henatra\nVokatry ny otanay."
        ]
    },
    {
        "title": "FANAMASINAN-TENA",
        "number": 801,
        "verses": [
            "Manolo-tena ho Anao ry Ray\nNamabo ahy ny fitiavanao\nFoiko ho Anao ny fiainako manontolo\nSy izay rehetra momba ahy",
            "Inona koa no azoko omena\nAnao ny lanitra sy ny tany\nNy foko izay mitia sy midera Anao\nAmbony noho ny volamena",
            "Tiako ny Tompo malemy fanahy\nNy manaraka Anao tsy an-tery\nManaiky izay baikonao rehetra\nNo fifaliako mandrakizay",
            "Ho an'izao tontolo izao mahantra\nSatria nandà ny fiadananao\nEkeo Kristy, Ianao feno antra\n'Zao fo maniry ireo ho Anao."
        ]
    },
    {
        "title": "FANDRESENA",
        "number": 26,
        "chorus": "Fandresena (in-2)\nHaleloia! afaka aho\nJeso nampandresy ahy\nVoninahitra, Haleloia!\nHo anao, Haleloia!",
        "verses": [
            "Haleloia! Famonjena feno\nNentin'i Jeso\nManome fandresena\nResy teo ny herin'ota\nNoho ny fahasoavany\nFandresena (in-2)",
            "Itokiako ny Tompo,\nIjoroako ny teniny\nFandresena (in-2)\nFaly sy miadana aho\nAfany ny otako\nFandresena (in-2)",
            "Ambarao ny fandresena,\nFiadanana ho doria\nFandresena (in-2)\nKa hirao eo imason'ny\nfahavalonao ny hoe;\nFandresena (in-2)",
            "Hiraintsika any am-pitan'ity\nTany'zay mandalo\nFandresena (in-2)\nAtombohy ilay hiranao\nMandrakizay, ry voavonjy\nFandresena (in-2)"
        ]
    },
    {
        "title": "FANDRESENA",
        "number": 472,
        "chorus": "Fandresena no azo ao amin'i Jesosy\nTsy manda n'iza n'iza Izy\nMandrosoa ianao.",
        "verses": [
            "Mahazo ny fandresena ao amin'i\nJesosy\nIzay manaiky Azy ho Tompo sy\nMpamonjy\nMoa vonona hianao handray Azy\nHo Tompo?",
            "Ho hitsakitsahinay ny fahavalo resy\nTsy hihemotra izahay handresy ny\nDevoly\nMoa vonona hianao handray Azy\nHo Tompo?",
            "Te-hahazo fandresena toa anay\nKoa hianao?\nDia raiso ny famonjena tsy\nHanenina hianao\nMoa vonona ianao handray Azy\nHo Tompo?"
        ]
    },
    {
        "title": "FANDRESENA AO ALOHA",
        "number": 419,
        "chorus": "Indro eo aloha ny fandresena\nNoho ny Ràn'i Jeso tsy hatahotra\nMatoky ny Tompo am-pinoana aho\nNy fandresena ho azo ao aloha.",
        "verses": [
            "Notarihin'ny Tompo ny tafika\nNanodidina an'i Jeriko\nNatoky ny Tompo tam-pinoana\nNy fandresena ho azo ao aloha.",
            "Vato kilonjy sy antsamotady\nNo nentin' I Davida tao an-tsaha\nNatoky ny Tompo, nahalala koa\nNy fandresena ho azo ao aloha.",
            "Tao an-davaky ny liona Daniela\n'Lay nivavaka in-telo isan'andro\nNatoky ny Tompo, tsy natahotra\nNy fandresena ho azo ao aloha.",
            "Notsapaina matetika ara-nofo\nNitalaho, naniry ny ho afaka\nNatoky ny Tompo na dia reraka\nFa fandresena ho azo ao aloha.",
            "Raha ho toa 'reo lasa teo aloha aho\nHijoro eo amoron'ny ony koa\nMatoky ny Tompo, tsy hangovitra\nNy fandresena indro eo aloha."
        ]
    },
    {
        "title": "FANDRESENA HO AN'NY TOMPO",
        "number": 606,
        "verses": [
            "Fandresena ho an'ny Tompo\nIlay tsy miova mandrakizay\nHo an'ny Anaran'i Kristy\nSy ny Fanahy Masina",
            "Fanjakana ho an'ny Tsitoha\nHo azy irery mandrakizay\nFandresena no antsoina\nNoho ny ran'ny Zanak'ondry",
            "Tenin'ny Ray no Anarany\nManjaka any an-danitra Izy\nIzy no Lion'ny Joda\nNandresy tamin'ny ady Izy."
        ]
    },
    {
        "title": "FANIRIAKO",
        "number": 789,
        "verses": [
            "Mba te-ho kristiana aho\nTena ao am-poko 'zany re\nMba te-ho kristiana aho\nAo am-poko, ao am-poko re.",
            "Te ho be fitiavana aho\nTena ao am-poko 'zany re\nAo am-poko,\nMba omeo ahy re ny Tompoko.",
            "Te-ho madio sy masina aho\nTena faniriako izany\nAto am-poko,\nMba omeo ahy re ny Tompoko",
            "Mba tsy te- hivadi-panekena aho\nHetahetako izany re\nAo am-poko,\nKoa arovy aho re ry Tompoko",
            "Hanahaka an'i Jesosy\nHetahetako izany\nAto am-poko\nTanteraho re ny faniriako."
        ]
    },
    {
        "title": "FANOLORAN-TENA",
        "number": 409,
        "chorus": "Mitoria hianao\nAmbarao Jesosy\nMba ho kintana ho anao\nIreo 'Zay voataonanao",
        "verses": [
            "Ry tanora, manolora tena\nHo an'ny Tompo\nFa akaiky izao ny famonjena\n'Ndrao ho neninao",
            "Manakaiky izao ny fijinjana\nIreo 'zay tsy voantso\nDieny mbola misy ny fotoana\nRaiso ny andraikitrao.",
            "Vonona aho ry Tompo\nMitenena ka tsilovy ny dia\nHizaranay ny famonjena\nVitan'i Kristy"
        ]
    },
    {
        "title": "FANTATR'I JESOSY",
        "number": 270,
        "chorus": "Fantany, eny fantany\nIzay mahasoa ny fiainako;\nFantatr'I Jesosy,\nka hainy hatrany\nNy hitehirizan'ahy ho sambatra.",
        "verses": [
            "Midera ny Tompo aho fa tsara Izy\nMitombo hatrany\nny fitiavako Azy\nManenika ny fiainako\nny fiadanany\nKa mitahiry ahy ho sambatra.",
            "Mandifotra ahy\nireo fizahan-toetra\nNefa tsy mihemotr'aho\nfa miaritra\nFa ny fahasoavany no mampan-\ndresy ahy\nNy fitahiany no arotsany.",
            "Toa mamiratr'isan'andro izao\nTontolo izao,\nNefa aho mibanjina\nny tsara lavitra\nKa mila finoana\nmiorina mafy aho\nHijoro hatramin'ny farany."
        ]
    },
    {
        "title": "FANTATRAO FA MARINA NY BAIBOLY",
        "number": 367,
        "chorus": "Fantatrao tokoa,\nFa marina ny baiboly;\nAndriamanitra ny manolotra,\nNy teniny ho antsika.",
        "verses": [
            "Nomen'antsika ny baiboly\nTenin' Andriamanitra;\nMarina sy teny velona,\nIzay voasoratra ao.",
            "Nomena ny tantaran'i Kristy\nNy fomba sy fiainany;\nInoako ny fiavianay indray,\nIzay voasoratra ao.",
            "Marin'avokoa ny baiboly\nMilaza fiadanana\nSy manome fiononana\nAry mandresy ota.",
            "Manohitra ny fahavalony\nMandà ilay hafatra\nKanefa ny fahamarinany\nDia tsy voasakana."
        ]
    },
    {
        "title": "FANTATRAO VE JESOSIKO",
        "number": 49,
        "chorus": "Fantatrao ve Jesosiko?\nIlay tena Sakaiza\nRenao ve ny fitiavany\nHo an'izay manompo Azy.",
        "verses": [
            "Reraka ve ny fonao, toa feno\nahiahy\nMitady fitsaharana ve ny\nfanahinao?",
            "Iza no mba handre ny feo\nfita rainanao?\nKa hampionon'anao noho\nireo alahelo.",
            "Iza no mahalala ireo ratram-\nponao\nIza no mba hamafa ireo\nranomasonao?"
        ]
    },
    {
        "title": "FANTATRO FA AO NY ANARAKO",
        "number": 133,
        "chorus": "Eny fantatro fa ao ny anarako,\nHe fantatro fa voasoratr'ao aho.\nTao amin'ny an'ireo very\nNy anarako fahiny\nKanefa nafindran'i Kristy\nAo amin'ny bokiny.",
        "verses": [
            "Ao amin'ny bokin'ny fiainana\nny anarako\nTsy misy isalasalako, fa ao\nmazava tokoa.",
            "Ny fahoriana miseho ety\nDia aloka mampisento\nKanefa tsy hahafoana\nNy anarako ary.",
            "Ny hafa mitady laza\nSy anarana mety lefy,\nFa any an-danitra kosa\nNy ahy ny anarako."
        ]
    },
    {
        "title": "FANTATRO ILAY MIHAZONA NY AMPITSO",
        "number": 272,
        "chorus": "'Zay rehetra ho ampitso\nTsy haiko fantarina\nFa 'lay mihazona ny ampitso\nNo mihazon'ahy koa.",
        "verses": [
            "Takon'amiko ny ampitso\nNy anio no fantatro;\nNy andro 'zay mamiratra\nMety hihamaizina,\nTsy ahiako ny ho avy\nFa anilako Jeso\nMiara-mandeha amiko,\nFantany 'zay hiseho",
            "Ny dingana izay hatao\nMety ho mamiratra;\nKa ho lavitra ny sento\nNy andro hibaliaka,\nMety hihamaivana koa\nNy enta-mavesatra\nKa ny lanitr'amin'izay\nToa azo takarina.",
            "Takon'amiko ny ampitso\nSy 'zay mety entiny;\nNa ho androm-pahoriana\nNa ho fahantrana koa\n'Zao ihany no iriko\nHo eo alohako Jeso\nKa ny Ràny sarobidy;\nHo fiarovana ahy."
        ]
    },
    {
        "title": "FANTATRO IZAY INOAKO",
        "number": 400,
        "chorus": "Nefa fantatro izay inoako\nMahatahiry ilay efa\nNatolotroAzy Izy\nAmin'izay andro izay",
        "verses": [
            "Tsy fantatro, nahoana re izao\nFahasoavana izao?\nSy nanavotan'i Jesosy ahy,\nDia izaho tsy mendrika",
            "Tsy fantatro nahoan'izao\nFinoana mamonjy ahy 'zao?\nAry miasa fiadanana\nAto am-po ny teniny.",
            "Tsy fantatro, nahoana ny Fanahy;\nNo mandresy lahatra\nMiteny ny amin'i Jesosy\nKa àry ny finoana"
        ]
    },
    {
        "title": "FANTATRO: HISY ZAVA-TSOA",
        "number": 426,
        "verses": [
            "Fantatro, hisy zava-tsoa hiseho\nFantatro hisy zava-tsoa tokoa\nHoy Izy: Mankanes'aty Amiko\nhianareo\nDia hohitanareo ny marina\nRaha vonon'hahafoy ny hevitrao\nianao\nHanarak'Azy amin'ny làlany\nFantatro, hisy zava-tsoa hiseho\nHo anao no anaovan'izany anio.",
            "Tsy mora foana ny manarak'Azy\nMazàna làla-mikitoantoana\nRaha sendra ao anaty ady indrindra\nianao\nDia manefy ny fiainanao Izy\nNa dia tsy mazava aminao aza\nNy antony anaovany izany\nAvelao ihany Jesosy hitantana anao\nNy hoavinao dia eo an-tanany",
            "Fantatro, miandry anao ny tsara\nkokoa\nTsy tokony ho ketraka ianao\nNanome toky Izy fa hitahy\nIzay mihitsy sy marina eo Aminy\nAza manahy izay mbola hitranga\nIzy tsy hamela anao irery\nFantatro, miandry anao ny tsara\nkokoa\nHo feno hafaliana ny fonao (in-3)"
        ]
    },
    {
        "title": "FENO HOBY RE NY LANITRA",
        "number": 742,
        "chorus": "Feno hoby re ny lanitra\nKa derao Andriamanitra\nEny, mihobia re ry mino ô!\nKa hirao ny fihiram-baovao",
        "verses": [
            "He! Ny fifaliana ao an-danitra,\nTonga ity ny very fahizay\nKa ny Rainy faly sy finaritra\nMba handray ny zanany indray.",
            "He! Ny fifaliana ao an-danitra\nFa ilay very dia hita izao\nVoaray ho zanak'Andriamanitra\nEfa tonga olona vaovao",
            "He! Ny fifaliana ao an-danitra,\nMahabe ny haravoanay,\nMba ankalazao Andriamanitra,\nFa ny maty velona indray."
        ]
    },
    {
        "title": "FENOY AHO",
        "number": 747,
        "verses": [
            "Fenoy ny herinao aho,\nfenoy ny fitiavanao\nFenoy ny tanjakao aho,\nhanompoako Anao Jesosy,\nIlaiko ny Fanahinao\nhanova ny foko vato\nNy rehetra hahita ny fitiavanao,\nfiainana, fahazavana"
        ]
    },
    {
        "title": "FENOY AHO TOMPO",
        "number": 154,
        "chorus": "Fenoy aho re ry Tompo ô!\nMba tsy hangetahet'intsony,\nKa vokiso aho mba ho afa-po.\nsy ho feno Anao manontolo.",
        "verses": [
            "Toy 'lay vehivavy iray tao Sikara\nNitady fa tsy afa-po,\nTamin'ny zavatry ny tany,\nKanjo tojo an'i Jesosy.",
            "An-tapitrisan'ireo 'zay mitady,\nNy fahafinaretan'ety;\nKa tsy manana 'lay harena\nHitako ao amin'ny Tompo.",
            "Noho izany ry sakaiza, afoizo\nNy filàn'ity tany ity\nFa hamonjy anao Jesosy,\nRaha manetry tena ianao."
        ]
    },
    {
        "title": "FIANTSOANA FITAHIANA",
        "number": 596,
        "verses": [
            "Tompo ô Ianao Izay nanolo-tena\nHo fanatitra ho anay\nFenoy zotom-po izahay\nMba hirotsaka eo amin'ny\nasanao\nNy andronay, ny fanananay\nNy tenanay, ny fonay\nAtaovy mahay mandeha\nNa dia malemy aza izahay\nNy hanara-dia Anao Jesosy ô\nAry noho Ianao ihany no nahatonga\nanay rehetra\nHo mihoatra noho ny mpandresy\nFandresena tsy miato.",
            "Ataovy mahita isan'andro izahay\nFa tena zava-tsoa tokoa\nHo an'ny zanak'Andriamanitra\nNy mahita fitsaharana Aminao\nNy manompo sy ny mitia Anao\nF'amiko ny fiainana\nDia tsy misy afa- tsy Jesosy\nEnga'nie k'izany no tanjona\nHo tratrarin'ny olom- boavonjy\nAoka ny tsirairay no hiloa-bava\nHanambara izany\nKa ny rehetra no ho samy\nHanatanteraka izany.",
            "Fa raha tsy nisy\nNy nanaiky ho iraka\nHo fantsom-pitahiana\nIzay hahasoa ny olona\nDia ho faty noho ny fahotany\nNy manan'aina ka manam-panahy\nNa dia manan-javatra aza\nNefa matiantok'izany izy\nKoa raha manaiky\nHo fantson-danitra\nMahatatitra fitahiana isika\nTsy misy vaky na tsentsina\nDia tsy handiso fanantenana\nNy Tompo efa nanipy afo\nHirehitra ambonin'ny tany."
        ]
    },
    {
        "title": "FIDERANA",
        "number": 723,
        "verses": [
            "Notadiaviny aho\nRah' mbola mpanota very iny,\nDia nilazany fa tiany aho,\nTsy mba afoin'intsony\nNosasany hadio tamin'ilay Ràny\nTao Kalvary,\nSambatr'aho olon-kafa.",
            "Afa-nandositra\n'Zay mety ho fakam-panahy aho\nReh'fa miantso ny Anarany,\nSarobidy, mahavonjy,\nMahagag'amiko 'zany fahefana izany;\nKoa lazaiko, ho re eran-tany.",
            "Hihira fiderana aho\nHo an'ilay maty ho ahy\nHo fiainako\nHihira fiderana aho\nHo an'i Jesosy sakaiza\nMpanavotr'ahy"
        ]
    },
    {
        "title": "FIFALIAKO NY HO ANAO",
        "number": 566,
        "verses": [
            "Mitodika Aminao aho\nHanaraka ny làlanao\nHanandran-tànana hihaona Aminao\nNy foko hidera Anao\nHankalaza ny Anara-masinao\nFa mahatoky Hianao\nTompo ô, Tompo ô, omeko Anao\nTompo ô, Tompo ny fiainako izao",
            "Mijery ny voninahitrao\nNy ainao mamelona ahy\nNy fiadananao, ny fifalianao\nNo mahasambatra ahy\nTiako hanambara isan'andro\nAnao 'zay fitahiana ahy.\nTompo ô, Tompo hiaraka Aminao\nTompo ô, Tompo ho mandrakizay",
            "Afoiko hatramin'izao\nNy fiainako ho anao\nHanompo Anao, hofehezinao\nHanao ny sitraponao\nManaiky aho Tompo fa\nHamokatra eo amin'ny sahanao\nTompo ô, Tompo hiasa tokoa\nTompo ô, Tompo raha velona koa",
            "Na ho sarotra aza ny dia\nMatoky ny sandrinao\nHitantana sy homba ahy\nSatria manaiky ny antsonao\n'Zany no faniriako ka irariako\nNy hery avy aminao\nTompo ô, Tompo tariho aho re\nTompo ô, Tompo n'aiza n'aiza no haleha\nHaleloia (in-9)"
        ]
    },
    {
        "title": "FIFALIANA SY FIADANANA",
        "number": 262,
        "chorus": "Fifaliana sy fiadanam-be\nNo homen'i Jesosy anao anie\nRah'akenao ho Tomponao Izy\nDia ho anao ny fiadanany.",
        "verses": [
            "Maro no mitady fiadanana\nAo amin'ny vola na fananana\nManasa-tena mihar'isan'andro\nFa tsy misy mety ho afa-po.",
            "Ny fahotana sy ny rehaka ve\nNo ataonao fifaliana rehareha?\nTsarovy fa hotsaraina ianao\nAmin'izay rehetra ataonao.",
            "Tsy misy fiadanana ho anao\nRah'mbola tsy afoinao ny otanao\nNy fiadanan'izao tontolo izao\nDia fandrika hamatoran'anao.",
            "Jesosy no andrian'ny fiadanana\nSy loharanom-pahasambarana\nFatiantoka ny mivezivezy\nKa tsy miraik'amin'ny antsony."
        ]
    },
    {
        "title": "FIFOHAZAN-DEHIBE",
        "number": 284,
        "verses": [
            "Fifohazan-dehibe izao\nNo irin'ny foko fatratra\nAoka ny Fanahy no avy handray\nAn-tanany ny zava-drehetra"
        ]
    },
    {
        "title": "FIKIRO RE NY BAIBOLINAO",
        "number": 225,
        "chorus": "Fikiro re ny baibolinao\nMpitarika sy fanilonao",
        "verses": [
            "Fikiro re ny baibolinao\nAza ariana ny, fitsipiny\nIzay matory hifoha indray\nNoho ireo teny fikasana",
            "Fikiro re ny baibolinao\nTahiry sy firavaka soa\nMitondra fiainana ary mamonjy;\n'zahao ny soa ao anatiny",
            "Fanilo ho an'ny tanora izy io\n'Zay mety ho lavon'ny ota ety;\nFanantenana ary vatsy hoanao\nBoky izay tsara indrindra koa."
        ]
    },
    {
        "title": "FISAORANA NY TOMP0",
        "number": 37,
        "verses": [
            ";;; Isaorana anie (in-2)\nIsaorana ny anaran'ny Tompo;;;\n;;; Haleloia, haleloia!\nIsaorana ny anaran'ny Tompo;;;"
        ]
    },
    {
        "title": "FITAHIANA MITOHY",
        "number": 430,
        "verses": [
            "Ny fitahian'ny Tompo\nNo manampy ahy\nNy fitahiany mitohy\nNo mahatsar'ahy\nRaha te ho sambatra ianao\nDia raisonao Jesosy\nFa ho azonao.\nHanampy ho anao ny fitahiany."
        ]
    },
    {
        "title": "FITIA MANAKA-DANITRA",
        "number": 362,
        "verses": [
            "Fitia manaka-danitra ny Anao\nAvo loatra ny hatsaranao\nLehibe ny fahamarinanao\nTsy voafetra ny fahendrenao\nDia vangionao aho.\nManenika ahy ny fahasoavanao\nMiadana eo ambany eletrao aho\nNy latabatrao ahitako soa\nNy onim-pifalianao no sotroiko\nMpanjakako.",
            "Fony mbola mpanota ratsy aho\nDia efa maty hamonjy ahy\nNy Tompo Tsara Jesosy Kristy\nKa raha antsoiny aho hanompo\nDia manaiky aho.\nMampahery ny fanatrehany\nRaha mivavaka noh'ny adiko aho\nKa mandoatra ny ao am-poko\nMba tsy hisy hiafina Aminy\nMpanampy ahy.",
            "Ry Jesosy malala indrindra ô\nTsy vitako samy irery\nNy hiaro tena tsy ho simba\nFa raha mbola amiko Hianao\nDia matoky aho.\nRaha sendra diso làlana aho\nKa natoky tena fa olon-kendry\nDia avereno amiko indray\nNy Fanahy mampanetry tena\nHanarina ahy."
        ]
    },
    {
        "title": "FITIAVANA MAHATALANJONA",
        "number": 464,
        "verses": [
            "Fitiavana mahatalanjona\nNy fitiavan'i Jesosiko ahy\nLalina mihoatra noho ny ranomasina\nAvo noho ny lanitra ny fitiavany"
        ]
    },
    {
        "title": "FITIAVANA NANAVOTRA",
        "number": 420,
        "chorus": "Ho ahy tsy mendrika\nNefa nohasoaviny\nFitiavana nanavotra.",
        "verses": [
            "Tena harena lalina\nTsy takatry ny saina\nNy fitiavan' Andriamanitra\nNanavotr'ahy",
            "Tsy miova, tsy misy ohatr'Azy\nTsy hay lazaina\nNy fitiavan'Andriamanitra\nNanavotr'ahy",
            "Endrey tsara\nEndrey mamy\nNy mihira ny\nZanak'Ondry nanavotr'ahy."
        ]
    },
    {
        "title": "FITIAVANA NO NANANGANA AHY",
        "number": 458,
        "chorus": "Fitiavana no nananga'ahy fa\nTsy nisy zava-kafa nahavonjy ahy;\nFitiavana no nanangan'ahy ka\nDeraiko Jesosy fa nanavotr'ahy",
        "verses": [
            "Nilentika tamin'ny ota aho fahiny;\nLavitra ahy ny moron'ny fiadanana\nNilentika tsy nahapoitra intsony\nRen'ny Tompo ny antsom-\npamoizam-poko\nKa afak'aho.",
            "Atolotro Azy ny foko manontolo,\nHifikitra Aminy mandrakizay aho\nFa eo aminy misy fiainan-\ntsambatra\nAtaoko an-kira ny fitiavany\nMarina.",
            "Ry fanahy am-bava loza,\njereo Jesosy\nFa nanangana hamonjy tanteraka\nanao\nAok'hovonjena amin'onja mahery\nianao\nFa ny onja tafiotra manaiky ny\nsitrapony\n"
        ]
    },
    {
        "title": "FITIAVANA RANOVELONA",
        "number": 2,
        "verses": [
            "Fitiavana ranovelona, loharano\nlalina,\nKa miafina ao anatiny ny fiainan-\ndanitra;",
            "Fitiavana no nirahina avy tamin'i\nJehovah,\nO! mba raisonao, dia ho fantatrao\nny fahasambarana.",
            "Fitiavana didy tokana ary didy\nlehibe,\nMitomoera ao, hitoeranao amim-\npiadanana."
        ]
    },
    {
        "title": "FITIAVANA SAROBIDY",
        "number": 734,
        "chorus": "Fitiavana 'zay sarobidy\nNy fitiavan'ny Mpamonjiko;\nHihira sy hidera Azy\nAmin'ny fo falifaly aho.",
        "verses": [
            "Misy zavatra mampisava ny\nadim-piainanao\nDia ny fitiavan'ny Mpamonjy\nManamaivana ny entako sy\nmampifaly ahy\n'Lay fitiavany sarobidy.",
            "'Zay mitahiry ahy\nho mahery sy mahatoky\nDia ny fitiavan'ny Mpamonjy;\nMahatonga ahy\nho fitahiana ny sahirana\n'Lay fitiavany sarobidy.",
            "Mahatong'ahy\nho tony amin'ny zava-miseho\nDia ny fitiavan'ny mpamonjy;\nMitaon'ahy ho tia\nilay tanàna soan'ny lanitra\n'Lay fitiavany sarobidy.",
            "Misy fanantenana\nho anao 'zay mitanondrika,\nDia ny fitiavan'ny Mpamonjy\nMisy fiononana\nfahafahana miandry anao,\n'Lay fitiavany sarobidy."
        ]
    },
    {
        "title": "FITSAHARANA MANDRAKIZAY",
        "number": 19,
        "chorus": "Voninahitra anie\nHiran'ny voavotra\nHo an'Andriamanitra\nMpanjaka ho doria\nDerao, Haleloia!\nAny an-danitra\nMiandry ny fanovana antsika\nFa akaiky ny ora izao",
        "verses": [
            "Mipaika izao ny ora\nHo avy tsy ho ela Jeso\nHotronin'ny tafiky ny hery\nHifarana ny ota\nInjay re manakoako\nToa riandrano be;\nHiraina ny fiderana,\nAn'Andriamanitra.",
            "Amin'ilay lapa mamiratra\nTsy mba ho faty anie\nTaona hifandimbindimby\nHanaraka Azy re!\nNy sentom-po tsy ao intsony\nFiraisana tokoa\nNy alahelo efa lasa\nFeno haravoana.",
            "Ny sento tsy hisy intsony\nSatria tsy hijaly indray\nFeo fiderana manako\nHo Azy no hatao\nAo amin'ilay hazavana\nMandrakizay doria\nManaja ny Zanak'Ondry\nMendri-boninahitra.",
            "Tantara mahafinaritra\nFanazavana Jeso\nAo amin'ny Fanjakany\nTsy mba ho maizina\nAny aho manao hiran-danitra\nEto tsy maintsy miady\nNy mpandresy koa omena\nFiainana mandrakizay."
        ]
    },
    {
        "title": "FIVAHINIANANA NY ETO AN-TANY",
        "number": 571,
        "chorus": "Omeo ahy Tompo ny hery\nHandrosoako hatrany\nOmeo ahy Tompo ny hery\nHahafahako mijoro",
        "verses": [
            "Fivahinianana ny fiainana eto an-tany\nRaha tojo tafiotra\nTsy tokony ho kivy",
            "Fivahinianana ny fiainana eto an-tany\nAza mba ketraka\nRaha misy mampanahy",
            "Fivahinianana ny fiainana eto an-tany\nTsy misy tokony hametrahana ny fo",
            "Fivahinianana ny fiainana eto an-tany\nMila fahatokiana\nIlay hany Mpamonjy",
            "Fivahinianana an-tany lavitra ny eto\nNefa mahery aho raha\nMitantana ahy Jeso."
        ]
    },
    {
        "title": "FIVORIANA HO TOA INONA?",
        "number": 58,
        "chorus": "Endrey! fifaliana\nAmin'ilay fivoriana masina!\nEndrey! fihobiana\nHataon'ireo voavonjy tonga ao",
        "verses": [
            "Raha tsofina ny trompetra\nHivory ny masina\nEo amoron-dranon'aina\nhihaona re\nNy voavonjy sy mahatoky no\nMiandry antsika ao\nFivoriana ho toa inona no ao?",
            "Hanambara ny anjely fa ho avy\nny Tompo\nNy fotoana efa tapitra izao\nHihaona any an-danitra mami-\nrapiratra\nFivoriana ho toa inona no ao?",
            "Haseho amin'ny fitsarana\nIzay nafenina\nRehefa tonga amim-boninahitra\ni Kristy\nHandidy Izy hoe avia eto an-\nkavanako\nIanareo izay voavonjy sambatra",
            "Ny anjely hanambara amin'ny\nfeon'anjomara\nIlay jobilim-pandresena lehibe\nNy hiran'i Mosesy sy ny Zanak'\nondry no\nHiderain'ireo voavonjy an'i Jeso."
        ]
    },
    {
        "title": "FIVORIANA MASINA",
        "number": 293,
        "verses": [
            "Avia Fanahy Masina ô,\nTariho izao fivoriana izao\nFenoy hery avy Aminao\nIzahay rehetra tong'eto izao.",
            "Jesosy Andriamanitra ô!\nIndro vory ny mpanomponao,\nHidera ary hisaotra Anao,\nKa mijoroa eto anilanay.",
            "Hianao izay tafangon'eto\nMba omeo ny Tompo ny fonao\nKa hamasino ny fiainanao\nFa manatrika eto Izy izao.",
            "Ry Tompo, hamasinonao\nSy anjakao ny fiangonanao\nFa Jesosy no famonjena,\nFah' marinana mandrakizay"
        ]
    },
    {
        "title": "FOFONAINA",
        "number": 97,
        "verses": [
            "Omeo ahy ry Tompo\nNy fofonainao,\nArotsahy ny Fanahy Masina!\nFenoy ny herinao aho\nMba ho velona\nMamenoa ny foko re anio."
        ]
    },
    {
        "title": "FOTOANA FOHY SISA",
        "number": 94,
        "chorus": "Fotoana fohy ihany\nNo iandrasantsika ety\nFotoana fohy ihany koa\nNo iadiantsika ety\nTebiteby kely sisa\nEto an-tany feno ota\nFa hiditra ao an-danitra,\nSoa sy mamiratra.",
        "verses": [
            "Tsy ho ela dia hifarana; ny\nFiainana ety\nTsy ho ela dia ho tapitra; ny\ndiantsika ety\nTsy ho ela dia hiainga; hankany\nan-danitra\nHo ao an-tranon-dRay;\nHiaraka amin'ireo sakaiza.",
            "Tsy ho ela dia hiseho, ilay\nFahazavan'ny maraina\nTsy ho ela dia ho re ny hoe:\nAvia ka midira\nHanakoako'reo anjely sy ny\nHiram-pandresena\nRaha hifarana ny loza ety,\nDia honina ao an-danitra.",
            "Tsy ho ela dia hihaona indray\nAmin'ny olom-boavonjy\nKa hifandray tanana rehefa ao\nan-tany soa,\nHo toa inona ilay maraina\n'zay tsy hanam-piafarana\nFa hitoetra ao mandrakizay;\nMandrakizay doria"
        ]
    },
    {
        "title": "FOTOANA FOHY SISA",
        "number": 462,
        "chorus": "Kely sisa, fotoana fohy sisa\nDia hahita Azy isika\n'Lay Mpamonjy mamintsika\nIndray mipi-maso no\nHanovana antsika\nHo tahaka Azy isika\nHihaona Aminy any tsy ho ela",
        "verses": [
            "Fotoana fohy sisa\nDia hofoanan'Andriamanitra\nNy fahoriantsika eto an-tany\nNoho ny fitiavany be",
            "Fotoana fohy sisa (no)\nHitondrana hazo fijaliana\nFotoana fohy sisa\nNo iaretantsik'izany",
            "Amin'ny indray mipi-maso\nAmin'ny fahafenoana\nAmin'ny voninahitra\nNo hihavian'i Jesosy"
        ]
    },
    {
        "title": "FOTSY MADIO NOHO NY ORAM-PANALA",
        "number": 213,
        "chorus": "Fotsy mihoatra\nNy oram-panala\nSasao aho ho fotsy madio\nNoho ny oram-panala;",
        "verses": [
            "Isaorana anie ilay Rà\n'Zay naseho ny mpanota\nIsaorana ny Zanaka\nNoho ny ratra mahasitrana\nNa dia nirenireny aza\nAzom-pahoriana tokoa\nSasao aho ho fotsy madio\nNoho ny oram-panala.",
            "Satro-tsilo no nentiny\nHazo fijaliana koa;\nAlahelo niaretany\nFa tsy very maina tokoa.\nAoka ho voatarika eo\nHanadio ny otako aho\nSasao aho ho fotsy madio\nNoho ny oram-panala;",
            "Diso làlana sy nania\nMatetika aho Raiko o!\nToy ny jaky ny otako;\nRano tsy hahasasa azy ireo\nKoa manatona aho Jesosy\nEo amin'ny loharanonao.\nDiovy aho ho fotsy madio\nNoho ny oram-panala."
        ]
    },
    {
        "title": "HAFATRA AMIN'NY FIHAVIANY",
        "number": 186,
        "chorus": "Faly isika milaza ny fiaviany izay\nIsaorana\nHo avy faingana am-boninahitra\nIzy hilaza hoe:\nMifohaza ry masin'ny Tompo\nNahoana ianao no matory?\nMivonona amin'ny\nantsony farany.",
        "verses": [
            "Miandry 'zao isika\nHo avy indray ny Tompo\nHo ety an-tany handray ireo Azy\nKoa mivonona\nrehefa re ny antso\nHiara-manjaka amin'i Jeso.",
            "Miandrandra isika\nSady manantena\nVoninahitra ho an'\nizay mpandresy\nFiainana mandrakizay\nIzao no miandry\nHo an'ireo mandà ny ota",
            "Mivavaka isika hiavian'ny Tompo\nIzay mampanantena\nFiainana mandrakizay;\nHo avy faingana Izy,\nHo to izay lazainy,\nIsika hifanatrika Aminy.",
            "Izao no famantarana\nHo avy faingana Izy\nNy firenen-drehetra handre\nny teniny:\nTazano ny aviavy,\nEfa manaroka izy;\nHita izao fa akaiky ny farany."
        ]
    },
    {
        "title": "HAHITA AN'I KRISTY AHO",
        "number": 389,
        "verses": [
            "Fantatro fa indray andro any\nNy masoko hahita an'i Kristy\nDia hitoetra hatrany aho\nAry hihemotra\nNy masoko hahita an'i Kristy."
        ]
    },
    {
        "title": "HAHITA ANTSIKA MIAMBINA VE JESOSY",
        "number": 12,
        "chorus": "Afa-milaza hoe: vonona re\nHo any an-tany soa\nMbola ho hitany miambina vé?\nRehefa miverina ny Tompo",
        "verses": [
            "Hamaly ny mpanompony Jeso\nTsy fantatra ny ora\nNy olo-mahatoky dia hiambina\nNy jirony hirehitra",
            "Raha amin'ilay maraina\nvao mifoha\nNo antsoiny hiala etỳ\nKa hamerina ny talentanao\n\"Tsara izany \" va, hoy Izy?",
            "Moa nahatana fitokisana\nNanao izay azo natao\nRaha tsy misy manameloka ré\nHandray fitsaharana.",
            "Sambatra izay ho hitan'ny Tompo\nEo am-piambenana\nKa raha tonga tampoka Jesosy\nMoa niambina ianao?"
        ]
    },
    {
        "title": "HAHITA NY MPANJAKA ISIKA",
        "number": 726,
        "chorus": "Amin'ny andro (derao) hiaviany (tantarao)\nHahita ny Mpanjak'isika (Haleloia)\nHo avy amin-kery sy voninahitr'Izy.\nDia hahita Az'isika.",
        "verses": [
            "Ho avy tsy hoela ny fotoana\nMety ho andro na ho alina\nIzay hiavian'ny Mpajak'antsika\nDia hahita Azy isika.",
            "Moa efa vonona ve ianao\nRaha miantso anao Izy izao\nMba hiteny ve Izy hoe: Tsara izany?\nSa “Mialà amiko ianao”",
            "Ho satroham-boninahitra Izy\nRehefa tonga ety an-tany;\nHo rava ny fanjakàna rehetra nisy\nRehefa hiverin'izy."
        ]
    },
    {
        "title": "HAINAREO VE HOY NY TOMPO",
        "number": 714,
        "chorus": "Eny ry Tompo, hainay ihany.\nTefeo ho toa Anao izahay.\nTariho amin'ny fahazavanao\nHitiavanay Anao mandrakizay.",
        "verses": [
            "Hainareo ve, hoy ny Tompo\nNo hiarak'amiko\nHo faty sy voahombo\nAry tsy hihemotra.",
            "Hainareo ve ny hahatsiaro\nIlay jiolahy iray,\n'Zay nibebaka sy nino\nNandova Paradisa?",
            "Hainareo ve raha ho avy\nNy fahafatesana,\nNy hanolotra ny fanahy\nHo an'Andriamanitra?",
            "Hainareo ve, hoy ny Tompo,\nManontany hatrany,\nN'inona inona no hanjo\nHanaiky ahy ihany?"
        ]
    },
    {
        "title": "HALELOIA",
        "number": 666,
        "verses": [
            "Jesosy (Jesosy)\nNo Tompo (no Tompo)\nHaleloia, Izy no Tompo",
            "Jeso no (Jeso no)\nMpanjaka (Mpanjaka)\nHaleloia manjaka izy\nHaleloia Jeso no Mpajaka",
            "Haleloia (Haleloia)\nHaleloia (Haleloia)"
        ]
    },
    {
        "title": "HALELOIA AFAKA AHO",
        "number": 60,
        "verses": [
            "Tapaka ny gadrako, notapahin'i Jeso\nTapaka ny gadrako ka afaka aho",
            "Omeko an'i Jeso ny dera sy laza\nOmeko an'i Jeso satria afaka aho",
            "Hihira hoe: Haleloia (in-2)\nHihira hoe: Haleloia satria afak'aho"
        ]
    },
    {
        "title": "HALELOIA DERAINA NY TOMPO",
        "number": 601,
        "chorus": "Haleloia (in-2) deraina\nHaleloia (in-2) deraina ny Tompo\nHaleloia (in-2) deraina\nHaleloia deraina ny Tompo\nAnkalazaina Hianao\nRy Jesosy Mpanjakanay\nIza no hanameloka\nIzay voavela sy mandeha am-pahamasinana\nSy mandeha amim-pahamasinana",
        "verses": [
            "Hihira fiderana ho Anao Aho\nTompo ô (in-3)\nHaleloia, deraina ny Tompo",
            "Nitsangana tamin'ny\nmaty Jesosy (in-3)\nHaleloia deraina ny Tompo",
            "Ny Anarany no\nmampandresy antsika (in-3)\nHaleloia deraina ny Tompo\nIray fo isika ho tia an'i Jesosy (in-3)\nHaleloia deraina ny Tompo."
        ]
    },
    {
        "title": "HALELOIA! HITSANGANA ISIKA",
        "number": 710,
        "chorus": "Hitsangana (Haleloia) isika.\n(Amen)\nRehefa (Haleloia) hotosana\nNy famatoran'ny fahafatesana\nHitsangana (Haleloia) isika.",
        "verses": [
            "Amin'ny ampanenona ny\ntrompetran-danitra\nHitsangana (Haleloia) isika,\nAry faly mandrakizay ny olo-masina\nHitsangana (Haleloia) isika.",
            "Fivorian-dehibe tsy mbola\nnisy toa azy\nHitsangana (Haleloia) isika,\nFa hifankahita indray amin'ireo Havana\nHitsangana (Haleloia) isika.",
            "Amin'io maraina vaovao\nfanantenako io;\nHitsangana (Haleloia), isika,\nNo hahitako ny Mpamonjy maty nisolo ahy\nHitsangana (Haleloia) isika.",
            "Dia hitsena Azy eny amin'ny\nhabakabaka;\nHitsangana (Haleloia) isika,\nHiditr'ao amin'ilay fonenam-boninahitra;\nHitsangana (Haleloia) isika."
        ]
    },
    {
        "title": "HANAO NY SITRAPONY AHO",
        "number": 551,
        "chorus": "Hotanterahiko izay sitrapony\nNy zava- manahirana\nApetrako eo aminy\nManoro hevitra Izy\nRaha vita ny sitrany",
        "verses": [
            "Na dia miezaka aza aho\nNa dia misy fotoana izay\nTsy ahombiazako\nNefa tsaroako 'lay Sakaiza\nAny an-danitra\nHo tody aho miaraka aminy",
            "Tsy takatry ny saiko\nIzay fitarihany\nFantatro fa marina Izy\nKa na tsy mahomby aza aho\nHenoiko ny feony\nOmeo ahy ny vahaolana",
            "N'inon'inona hiseho\nRaha manaraka azy aho\nInoako fa momba ahy Izy\nTombo- tsoa manokana\nNy fiankinako Aminy\nKa hanao ny sitrapony aho"
        ]
    },
    {
        "title": "HANARAKA AZY AHO",
        "number": 177,
        "chorus": "Na aiza n'aiza hitondrany,\nNa aiza dia handeha aho\nHanaraka an'ilay Kristy\nizay tia ahy aho.",
        "verses": [
            "Ento ny hazofijaliana\nHoy ny Tompo aminao\nNomeko ny aiko hamonjy anao\nAtolory izay anao.",
            "Manintona ahy ny lanivoany\nHahalala ny sitrapony\nNoho izany no itoerako izao\nNa aiza dia handeha aho.",
            "Na alom-pahafatesana\nNa onjan-dranobe\nEntiko ny hazofijaliako\nHanaraka Azy aho.",
            "Ny foko, ny aiko omeko Anao\nRy Kristy izay tia ahy\nTompo Mpanjakako Izy\nNa aiza dia handeha."
        ]
    },
    {
        "title": "HANDALO AHO",
        "number": 16,
        "chorus": "Handalo anao (in-2)\nRaha hitako ny Rà (in-2)\nEny handalo aho\nRaha hitako ny Rà.",
        "verses": [
            "Maty voahombo ilay\nMpanavotra\nZanak'Ondry mora sady masina\nMba handoa ny trosan'\nny mpanota ré\nFafazo ny Ràny Fanahinao.",
            "Ny mpanota indrindra no havotany\nNy teny fikasana ho tanterahiny\nMisasà amin'ilay loharano soa\nIzay miboika hanadio ny meloka.",
            "Ny olona rehetra ho avy hanatrika\nIlay fitsarana ho tonga faingana;\nMba ho tolorana ny valin'asany;\nIlay Rà mahadio no aoka hiafenanao",
            "Endrey ny fangoraham-po\nsy fitiavany\nHe! tsy misy fetra sy mahatoky koa\nRaha te ho sambatra sy\ntretrika ianao\nAoka re ny Ràny no ho fiarovanao"
        ]
    },
    {
        "title": "HANDEHA AMIN'IZAO HERINAO IZAO",
        "number": 733,
        "chorus": "Mandehana, hoy ny Tompo\nAmy'zao herinao 'zao;\nTaomy, lazao mba handray,\nAn'i Jeso izy 'reo",
        "verses": [
            "Miandry anao 'reo ondry very\nMba hitondra ny hafatra;\nJerao fa maro no mitoetra\nAo anaty haizin'ota.",
            "Ny tena fitiavana dia manome\nIzay tsara indrindra;\nKoa saino tsara izay azonao\nAtolotra ny Tomponao",
            "Koa mihetseha amim-pitiavana\nAvelao ny zava-poana;\nAtolory ireo talentanao\nMba ho an'ilay Tomponao.",
            "Ny Fanahy hitarik'aina\nNy heriny hanampy anao;\nNy irak'izay omeny anao\nDia ataovy amin-joto."
        ]
    },
    {
        "title": "HANDEHA AMIN'IZAY TIANAO AHO TOMPO!",
        "number": 84,
        "chorus": "'Zay tianao, Tompo no halehako\nNa aiza na aiza sitrakao\nKa dia holazaiko ireo hafatrao\nEkeko izay hisy ahy.",
        "verses": [
            "Mety tsy ho eny an-kavoana no\nIlan'ny Tompo ahy,\nMety tsy ho eny an-tsahan'ady\nNo ilan'ny Tompo ahy,\nFa n'aiza n'aiza no ilanao ahy,\nHamaly ny antsonao aho,\nFa ny tananao no hitantana ahy\nKa'zay tianao no haleha.",
            "Tian'i Jesosy ho mpilaza soa\nNy vavako izao;\nFa misy mpirenireny any\nTiany hotadiaviko\nRaha mety ho mpitarika ahy Jeso;\nTsy ahiko ny aizina;\nHo toy ny anjomara ny feoko;\nHilaza izay tianao.",
            "Maro ny olo-mahantra any an-tany lavitra.\nKa handeha hiasa ho an'ilay\nVoahombo ho ahy aho;\nHatoky Anao tanteraka aho,\nFantatro ny fitiavanao;\nHanaraka'zay rehetra sitrakao\nMba ho to izay ilainao."
        ]
    },
    {
        "title": "HANDRESY AHO",
        "number": 497,
        "chorus": "Handresy aho (in-2)\nHandresy tokoa aho Jeso\nSatria Hianao (in-3)\nNo tokiko.",
        "verses": [
            "Matetika manonja re\nIty ranomasin-dozabe\nHanafotra ahy handentika ahy\nHanary ahy tsy ho Anao",
            "Ny ahiahy ariako\nNy tahotra tsy ampingako\nTsy mba ho ahy intsony re\nIzany tsy finoana",
            "Naripakao resy avokoa\nReo fahavalo teo aloha\nNanenjika ahy, nandreraka ahy\nFa hay namonjy ahy Hianao.",
            "Mijoro eo anilako\nAndro aman'alina Hianao\nKa raha tojo ady mafy\nDia mbola hiantso sy hihira hoe:"
        ]
    },
    {
        "title": "HANDRESY HATRANY",
        "number": 243,
        "chorus": "Handresy (in-2)\nNoho ny ran'i Jesosy\nHandresy (in-2)\nTsy mijanona\nRaha velona koa\nJehovah Tsitoha\nReo 'zay mahalal'Azy\ndia handresy.",
        "verses": [
            "Hahery hatrany, handresy tokoa\n'Reo 'zay mahafantatra ny\nMpamonjy\nRaha miady amin'ny faharatsiana\nDia hahefa zava-dehibe ireo",
            "Aza mety kivy eo anivon'ny\nFanafihan'ny herin'ny maizina\nF'Andiamanitra no\nmiarak'aminao\nNy tafiky ny lanitra\nhanampy anao.",
            "Maharet'amin'ireo fitsapana\nIzay toy ny memy\nfandrendrehana\nMitaov'amin'ny\nsabatra ny fanahy\nMahazo fanahy ho an'i Jesosy."
        ]
    },
    {
        "title": "HANDRESY ISIKA",
        "number": 393,
        "chorus": "Handresy isika noho ilay hazo\nManakoako ankehitriny\nAry izao tontolo izao\nHanandratra Azy\nHo Mpanjakan'ny mpanjaka",
        "verses": [
            "Handresy isika noho ilay hazo\nIzay nijalian'ny Tompo\nTeo no nahazoana famelana\nSy nahafatesan'i Kristy.",
            "Handresy isika noho ilay hazo\nNy fo ravo hanandratra Azy\nHo Mpanjaka, Mpamonjy,\nMpanavotra\nNy fiderana Azy eran-tany.",
            "Handresy isika noho ilay hazo\nIza no hahatohitra Azy\nNidina tety an-tany ho fanavotana\nNy mpanota ny Tompo."
        ]
    },
    {
        "title": "HANDROSO AHO",
        "number": 126,
        "chorus": "Handroso aho, te-ho tody;\nK'haloako izay mety ho vidiny;\nTsy ahoako izay aton'ny hafa;\nF'hanaraka ny Tompo, handroso aho.",
        "verses": [
            "Manomboka mandeha aho izao;\nEo amin'ny làlana izay mazava,\nNilaozako ny hadalan'ny tany\nKa hatramin'izao dia handroso aho.",
            "Maro'reo'zay nihazakazaka,\nNiara-nandeha tamin'ny Mpamonjy\nNanaiky fa zava-dehibe izao;\nNefa maro ireo no tsy mba tody.",
            "Hanaraka ny Mpamonjiko aho\nNa hiondam-bato tahakan'i Jakoba;\nToy'zay ny fah'finaretan'ny tany\nKa ny hiafarany dia tsy ho tody.",
            "Avia ry sakaiza, mandrosoa\nAmin'izao làlan-danitra tsar'izao;\nNy mpamonjy no mpitarik'antsika\nMatokia, mandrosoa fa ho tody soa."
        ]
    },
    {
        "title": "HANGOVITRA NY HELO",
        "number": 618,
        "verses": [
            "Raha mivavaka hianao\nMidera ny Tompo\nDia hangovitra ny helo (in-2)\nRaha mivavaka hianao\nMidera ny Tompo\nHangovitra ny helo\nRaha mivavaka hianao\nResy ny fahavalo\nFandresena ho an'izay midera",
            "Raha mivavaka hianao\nAmim-pinoana\nDia hangovitra ny helo (in-2)\nRaha mivavaka hianao\nAmim-pinoana\nRaha mivavaka hianao\nRava ny olana\nFahagagana ho an'izay mino",
            "Raha mivavaka hianao\nAmim-paharetana\nDia hangovitra ny helo (in-2)\nRaha mivavaka hianao\nAmim-paharetana\nHangovitra ny helo\nRaha mivavaka hianao\nMihaino ny Tompo\nZava-dehibe no vokatr'izay."
        ]
    },
    {
        "title": "HANGOVITRA NY RAFINAO",
        "number": 252,
        "chorus": "Rehefa niomana tamin'ny vavaka\nDia raiso ny sabatry ny fanahy;\nEnto ny anaran'i Jesosy,\nFa hangovitra ny rafinao.",
        "verses": [
            "Miadia ny ady tsaran'ny finoana,\nHaleloia (in-2);\nAoka ho toy ny mpanafika\nvoaomana, Haleloia.",
            "Tsy avy amin'ny nofo ny fiadianao,\nHaleloia (in-2);\nNefa mahery amin'Andriamanitra,\nHaleloia.",
            "Mahavonjy ny anaran'i Jesosy,\nHaleloia (in-2);\nAoka hahafantatr'izany ireo,\nKivy fo, Haleloia.",
            "Misy hery ny fiainana masina,\nHaleloia (in-2);\nKa fadio ny ratsy mba handresena,\nHaleloia."
        ]
    },
    {
        "title": "HANKALAZA ANAO AHO RY RAY",
        "number": 356,
        "verses": [
            "Hanandratra Anao Tompo ô.\nAmin'ny firenena\nHankalaza ka hihira\nny fandresenao\nFa ny fitiavanao\nmisandratra hatrany\nNy fahamarinanao,\nNy fahamarinanao an-danitra\nTompo ô misehoa Hianao\nEny amin'ny lanitra\nNy voninahitrao\nhameno ny tontolo.\nTompo ô misehoa Hianao\nEny amin'ny lanitra\nNy voninahitrao hameno ny tontolo.",
            "Ny voninahitrao, ny voninahitrao\nNy voninahitrao\nHameno ny tontolo."
        ]
    },
    {
        "title": "HANOMPO ISIKA",
        "number": 508,
        "chorus": "Honompo isika\nMandram-piverin'i Jesosy\nHanompo isika dia honina ao\nAn-tranon'ny Ray",
        "verses": [
            "Maniry ny tany fialan-tsasatra aho\nRahoviana ny fotoana\nHametrahako ny fiadiako\nKa hiadana ao an-tranon'ny Ray",
            "Miala sasatra sy miadana\nAo amin'i Jesosy aho\nMiankina eo an-tratrany\nKa handeha ho any an-danitra",
            "Hitako ny tavan'ny Mpamonjiko\nTsy hirenireny aho\nTsy ahiako ny fahafatesana\nHo tody soa any an-danitra aho"
        ]
    },
    {
        "title": "HANOMPOA ANAO AHO",
        "number": 558,
        "chorus": "Hanompo amin'ny fo\nNy Tompon'ny tompo\nNo hany faniriako\nHanompo Anao Tompo",
        "verses": [
            "Raha jereko izay nataonao tamiko\nTsapako ho momba ahy\nToy ny sakaiza Ianao\nTena mitoetra ao anatin'ny foko\nKa na dia bitika:\nVonona hanompo anao",
            "Mianatra mihaino sy mananatra anao\nAmin'ny làlana izay hitarihanao\nEo anilanao aho raha mitantana ahy\nHianao\nMibitsika amiko fa zanakao aho"
        ]
    },
    {
        "title": "HANONTANY ANGAMBA IANAO",
        "number": 159,
        "chorus": "Misy tany soa ary;\nFiomanako ny ety,\nAndriamanitra Tompo\nTsy menatra ny ho Andriamanitro",
        "verses": [
            "Hanontany angamba ianao\nka hiteny hoe;\nInona no antony mampifalifaly anao?\n'Zao no havaliko'zay\nRaha tianao ho fantatra\nOlo-melok'aho nefa nafahan'i Jeso.",
            "Hihevitr'angamba ianao\nka hilaza hoe\nTsy mba misy ady ve\nEo amin'ny fiainanao?\nTsy laviko fa misy fahoriana hitako\nNefa Jesosy dia\nmiara-mandeha amiko.",
            "Matahotr'angamba ianao\nHoe ho lavo aho,\nKa hiverin-dalana\nnoho ny fahavalo?\nTsy misy anefa\nmety maharombaka.\nIzay eo an-tànan'i Jesosy mahery.",
            "Hisain'ahy angamba ianao ka\nHanao hoe: Sambatra ianao\nFa niangaran'Andriamanitra\nDiso anefa raha izay\nfa fitiavana ny Ray\nTiany koa ianao ka manaova fo\nvaovao."
        ]
    },
    {
        "title": "HATAO NY SITRAKAO",
        "number": 609,
        "verses": [
            "Aoka hanjaka Ianao\nHatao ny sitrakao\nTompo ô! Manjakà amiko\nAoka hanjaka Ianao\nHatao ny sitrakao\nO! manjakà amiko",
            "Fohazinao izahay\nHatao ny sitrakao\nTompo ô, fohazo aho\nFohazinao izahay\nHatao ny sitrakao\nTompo ô, fohazo izahay",
            "Omeo ny Fanahy\nHatao ny sitrakao\nFanahy ô, mireheta amiko\nOmeo ny Fanahy\nHatao ny sitrakao\nO! Mireheta amiko."
        ]
    },
    {
        "title": "HATRANY HATRANY",
        "number": 467,
        "chorus": "Ny fitiavany no mitahiry\nNy fiainako ho tsar'hatrany,\nArovan'ny herin'i Jesosy\nAmin'ny finoana hatrany aho,",
        "verses": [
            "''Maty miaraka amin'i Jeso''\n''Velon' amin'ny fiainam-baovao''\n'Reo no zava-kendreko Tompo ô\nMba ho Anao hatrany re aho,",
            "Atrehiny ireo fitsapana\nNy enta-mavesatra entiny,\nNy alahelo amaivaniny,\nMiahy sy mihevitra ahy Izy.",
            "Tsy misy aretina na loza\nNa fahoriana hoe tsy hitany\nEo amin'ny fiandrianany Izy\nMihevitra hatrany'reo Azy.",
            "Ny fahalemena re tsapany\nTsy misy aretina tsy sitrany,\nMiarak'amiko hatrany Izy\nN'inona zava-manjo ahy ety"
        ]
    },
    {
        "title": "HATRIZAY NAHAZOAKO AN'I JESO",
        "number": 59,
        "chorus": "Hatr'izay nahazoako an'i Jeso\nHatr'izay nahazoako an'i Jeso\nNy hafalian'ny foko dia feno tokoa\nHatrizay nahazoako an'i Jeso.",
        "verses": [
            "Fanavaozan'izay mahagaga tokoa,\nHatrizay nahazoako an'i Jeso.\nHitako ny mazava, niriako elabe,\nHatr'izay nahazoako an'i Jeso.",
            "Tsy mba maniasia intsony aho re,\nHatrizay nahazoako an'i Jeso\nVoasasa avokoa ny otako be\nHatrizay nahazoako an'i Jeso.",
            "Ny finoako izao mafy orina koa\nHatrizay nahazoako an'i Jeso\nNy rahona mainty misava avokoa\nHatrizay nahazoako an'i Jeso.",
            "Tsy ahoako ny fahafatesana ety\nHatrizay nahazoako an'i Jeso\nIndro tazako ny vavahady ery\nHatrizay nahazoako an'i Jeso.",
            "Fantako fa honenako io tanana io\nHatr'izay nahazoako an'i Jeso\nAry faly tokoa aho mandroso ao\nHatrizay nahazoako an'i Jeso."
        ]
    },
    {
        "title": "HAY TENA MORA NY ZIOGA",
        "number": 799,
        "verses": [
            "Hay tena mora ny zioga\nTena tiako ny làlanao\nEo anoloako mandrakariva\nny filazantsara\nEo amin'ny diako misy fahazavana\nFa mba ahitako Azy, hazavao ny masoko.",
            "Tsia, tsy sarotra ny làlanao\nHo an'izay naterakao\nDia azony ny fandresena\nHo an'ny miady am-pinoana\nAo amin'ny mandanao Tompo ô!\nTsy hatahotra aho\nRaha mamely ahy ny ratsy\nDia manohana ahy Ianao.",
            "Ry Andriamanitra Mpitarika sy\nMpampionona\nFantatro fa ny fahasambarana dia amin'ny teninao\nKa raketiko ato am-poko'\nzany fitsipikao\nRaha izany no fifaliana\nDia tsy ho menatra aho."
        ]
    },
    {
        "title": "HAZAVAO AHO",
        "number": 612,
        "chorus": "Hazavao amin'ny voninahitrao ny tany\nAmpirehetonao ny fonay\nFenoy ny fahasoavanao ny firenena\nAmpahafantaro ny fifalianao.",
        "verses": [
            "Ny hazavan'ny fitiavanao Tompo\nNo andreseko ny aizina eo aminay\nHianao Jesosy no Mpanazava\nFahamarinana, Mpitarika\nMpanafaka, hazavao aho.",
            "Hianao mitarika amin'ny fombanao\nAmin'ny taratry ny herinao\nNy Ranao nahazoako fahamasinana\nResy ny aizina raha tsisy devoly\nHazavao aho, hazavao aho.",
            "Raha mibanjina ny fanjakanao\nMisoritra eny aminay ny hatsaranao\nManova anay ny voninahitrao\nTsy hitsahatra hitory ny Aminao\n'zahay\nHazavao, hazavao"
        ]
    },
    {
        "title": "HAZAVAO NY TOERANA IZAY MISY ANAO",
        "number": 116,
        "chorus": "Hazavao ny toerana izay misy anao.\n'Reo miraparapa anaty aizina\nAmpio izy hahita fitodiana;\nHazavao ny toerana izay misy anao.",
        "verses": [
            "Aza miandry mandra-\npahavitanao zava-dehibe\nAoka hipariaka ny taratrao,\nBe ny andraikitrao manodidina anao;\nHazavao ny toerana izay misy anao.",
            "Misy eo akaikinao ve\nItambesaran-drahona?\nAza avela ho takona ny taratrao,\nNa dia fo iray monja no hifaly noho\nIanao;\nHazavao ny toerana izay misy anao.",
            "Rehefa mety ho talenta izay\nNomen'ny Tompo anao\nDia ilaina ho fitarik'andro soa\nIreo noana dia ho voky mofon'\nAina an-tànanao\nHazavao ny toerana izay misy anao."
        ]
    },
    {
        "title": "HAZONY SY TARIHO AHO TOMPO O!",
        "number": 705,
        "chorus": "Tariho aho Tompo ô!\nTazony ny tanako,\nAza afenin'ahy ny tavanao\nMandram-pahavitako\nNy asa nomenao ahy\nAry mandram-pandresiko ety.",
        "verses": [
            "Tantano aho raha mbola ety\nAmin'izao fiainana izao,\nTantano amin'ny tananao\nTariho aho k'aza avela hania.",
            "Irery tety an-dalan'aho\nKa tsy nahita izay aleha\nNefa faly aho izao\nSatria hitako ny làlan-danitra.",
            "Rehefa indray andro any,\nHandao 'reo entana mavesatr'aho\nEntiko ny hazo fijaliana\nFa satroboninahitra ho ahy."
        ]
    },
    {
        "title": "HE NY ANDON'NY MARAINA",
        "number": 189,
        "verses": [
            "He ny andon'ny maraina\nLatsaka ao an-tsaha re\nKa mamelona ny maina\nIzay maniry rano be!\nRavoravo e! ny tany\nFa he ny andro maina efa lany\nKa mitsahatra ny fahantrany\nManaroka ny hazo be.",
            "Ny fanahy karakaina\nMisy rano velona\nFa Jesosy andon'aina\nManome fiainana\nVelona ny jentilisa\nNy tany hay dia tonga Paradisa\nMarobe no efa voaisa\nHandray ny lova masina.",
            "Misy làlana mizotra\nIzay mankao Ziona re,\nAny no mitanjozotra\nNy vahiny marobe\nKa Ziona dia mivoha\nHidiran'ny navotan'i Tsitoha\nAo no hivorian'ny mifoha\nFa ao ny Tompo lehibe.",
            "He! mikambana ny mino\nAmim-pifaliam-be\nKa ny hobiny maneno\nTahaka ny rano be\nAo mitovy avokoa\nTsy misy Tompo\nsy mpanompo koa\nEny, razana iray tokoa\nNy mponina ao Ziona re!"
        ]
    },
    {
        "title": "HE NY FIRAISANA",
        "number": 394,
        "chorus": "Miankina (in-2)\nKa miadana sy afaka\nMiankina (in-2)\nEo an-tànany mandrakizay.",
        "verses": [
            "He ny firaisana! He ny fitahiana!\nMiankina eo amin'ny sandriny\nHe ny fifaliako, he ny fiadanana!\nEo an-tànany mandrakizay.",
            "Endrey mamiko ny fivahiniana!\nMiankina eo amin'ny sandriny\nLàla-mamiratra mihamazava re\nEo an-tànany mandrakizay.",
            "Inona no ahiako sy atahorako\nMiankina eo amin'ny sandriny\nFiadanam-be eo akaikin'i Jeso\nEo an-tànany mandrakizay."
        ]
    },
    {
        "title": "HE TIA AHY JESOSY",
        "number": 226,
        "chorus": "He! Tia ahy Jeso\nEny, fantatro;\nHe! Tia ahy Jeso\nHoy ny baiboliko.",
        "verses": [
            "Fantatro; tia ahy Jeso,\nHoy ny baiboliko.\nZaza aho malemy e,\nFa Jeso no heriko.",
            "Maty Jeso 'zay tia ahy,\nHanadino ny otako;\nKa mivoha ny lanitra;\nAvelao aho hiditra.",
            "Tia ahy Jeso tsy mandao,\nRaha tsy foiko Izy izao;\nDia horaisiny tokoa,\nHiditra ao an-danitra."
        ]
    },
    {
        "title": "HE! JEHOVAH NO MPIANDRY AHY",
        "number": 227,
        "verses": [
            "He! Jehovah no mpiandry ahy\nTsy mba misy atahorako\nRaha Izy no mitondra ahy;\nAhi-maitso no handriako\nEny, fa ny tany karankaina\nDia hody saha lonaka\nAry ao amoron-dranon'aina\nHialan'ny foko sasatra.",
            "He! Jehovah no mpiandry ahy\nAo an-dalam-pahamarinana\nKoa tsy ho kivy ny Fanahy\nNoho ny aloky ny fasana\nIanao ry Tokiko irery\nNo hiara-dia amiko\nKa ny tsora-kazonao mahery\nNo hanafaka ny tohotro.",
            "Amelaranao latabatra aho\nEo imasom-pahavaloko\nNamboaranao kapoaka aho\nMampahery sy mahafa-po\nEny indra-fo tsy hita lany\nNo hiaraka amiko izao\nMandra-pahatongako ho any\nAnatrehanao mandrakizay."
        ]
    },
    {
        "title": "HE! NY FIFALIANA AO AN-DANITRA",
        "number": 69,
        "chorus": "Feno hoby, re, ny lanitra,\nKa derao Andriamanitra\nEny, mihobia re ry mino!\nKa hirao ny firim-baovao!",
        "verses": [
            "He! Ny fifaliana ao an-danitra\nTonga ity ny very fahizay,\nKa ny Rainy faly sy finaritra\nMba handray ny zanany indray",
            "He! Ny fifaliana ao an-danitra\nFa ilay very dia hita izao\nVoaray ho zanak'Andriamanitra,\nEfa tonga olona vaovao.",
            "He! ny fifaliana ao an-danitra,\nMahabe ny haravoanay,\nMba ankalazao Andriamanitra,\nFa ny maty velona indray"
        ]
    },
    {
        "title": "HENOY IZAHAY MPAMONJY O!",
        "number": 413,
        "chorus": "Ranonorana fitahiana\nNo alatsaho aminay ry Tompo ô.",
        "verses": [
            "Henoy 'zahay Mpamonjy ô\nRaha mbola mivavaka;\nEkeo ny ranonorana\nMba hilatsak'aminay.",
            "Fantatray ny fitiavanao\nK' antsoinay Ianao\nRanonoram-pitahiana\nNo alatsaho aminay",
            "Itokianay ny teninao.\nTakinay ka tovy.\nRanonorana Tompo ô\nNo alatsaho aminay."
        ]
    },
    {
        "title": "HENOY NY HIRAN'ANJELY",
        "number": 244,
        "verses": [
            "Henoy ny hiran'anjely\n\"Voninahitra anie\nFiadanana ho ety\nAmbonin'ny tany koa\"\nMiravoa ny firenena,\nMiaraha milaza hoe:\nTeraka ao Betlehema\nIlay Mpanjaka lehibe.\nHenoy ny hiran'anjely\n\"Voninahitra anie!\"",
            "Kristy tompon'ny lanitra\n'Lay Tompo mandrakizay\nTamin'ny fotoan'andro\nNo indro fa teraka\nSaotra sady arahaba\nR'ilay efa tonga nofo\nNonin'amin'olona\nJesosy Imanoela ety\nHenoy ny sns….",
            "Arahaba Ianao ry\nAndrian'ny fiadanana ô!\nMasoandrom-pahamarinana\nMitondra fiainana\nManana fanasitranana\nEo amin'ny elany Izy\nTeraka hanangana\nNy zanak'olombelona\nHenoy ny sns….",
            "Ry irin'ny firenena\nO! avia eto aminay\nMitsangana ry taranaky\nNy vehivavy ô!\nTorotoroy aminay ny\nLohan'ilay menarana\nRy Adama faharoa\nVelomy indray izahay\nHenoy ny sns…."
        ]
    },
    {
        "title": "HERIKO ANDRIAMANITRA",
        "number": 529,
        "verses": [
            "Heriko Andriamanitra\nMahafaly ahy\nIzy no mamonjy ahy (in-2)\nMahafaly ahy.",
            "Fahamarinako Jesosy\nMpanafaka any\nNandresy ahy ny fitiavany (in-2)\nFahamarinako Jesosy\nMpanafaka ahy.",
            "Faniloko ny Fanahy\nMpananatra ahy\nIzy no hampiakatra ahy (in-2)\nFaniloko ny Fanahy\nMpananatra ahy."
        ]
    },
    {
        "title": "HETSEHO AHO TOMPO",
        "number": 693,
        "verses": [
            "Hetseho aho\nAmin'ny fanahinao\nAmboary ny fo vato\nHetseho Tompo\nAmin'ny fitiavanao\nOmeo fo nofo.\nAminao no anolorako\nNy fiainako indray\nIsan'andro iainako Aminao\nToy ireo tia ny Anaranao"
        ]
    },
    {
        "title": "HEVERO NY LALANAO",
        "number": 724,
        "verses": [
            "Hevero ny làlan'alehanao\nRy zaza 'zay mpirenireny;\nLavitr'an'Andriamanitra ianao;\nEntin'onja, ka ho very.\n",
            "Mba saino ny lalan'alehanao,\nFa tsy misy mpitarika ianao;\nMihevitra anao anie Jeso,\n'Lay nanolotra ny ainy.",
            "Diniho ny làlan'alehanao,\nFa tsy afaka handroso ianao;\nRaha tsy mino sy matoky Azy;\nKa Mankato ny didiny.",
            "Ka saino re ny làlanao;\nMoa mankany an-danitra\nve ny dianao?"
        ]
    },
    {
        "title": "HIAHY ANAO NY RAY",
        "number": 234,
        "chorus": "Hiahy anao ny Ray\nIsan'andro, na aiza aleha\nHiahy anao Izy\nHiahy anao ny Ray;",
        "verses": [
            "Aoka tsy ho kivy ianao\nHiahy anao ny Ray\nNy elany no ialofy\nHiahy anao ny Ray;",
            "Raha mihareraka ny fonao\nHiahy anao ny Ray;\nRaha tojo loza ny làlanao\nHiahy anao ny Ray;",
            "Izay ilainao atolony\nHiahy anao ny Ray;\nTsy handà ny angatahinao\nHiahy anao ny Ray;",
            "Aza manahy fitsapana\nHiahy anao ny Ray;\nAoka hirona eo an-tratrany\nHiahy anao ny Ray;"
        ]
    },
    {
        "title": "HIANAO NO IALOFAKO",
        "number": 653,
        "verses": [
            "Hianao no ialofako\nKa hohirain'ny foko\nFa nanafaka ahy\nIsaky ny azon-tahotra aho\nMiankina Aminao\nMiankina Aminao\nRaha reraka aho\nNy Tompo mampahery ahy."
        ]
    },
    {
        "title": "HIANAO NO VONINAHITRY NY MARINA",
        "number": 685,
        "verses": [
            "Hianao no voninahitry ny marina\nSy famirapiratry ny andro\nHianao mazava no sady manavao\nFanilon'ny làlako\nFeno ny fahatsaranao aho\nSy hafanan'ny fanatrehanao\nTao Kalvary ka hatr'aty\nNy fahasoavanao.",
            "Hianao no kintana fitarik'andro\nSy fahazavan'izao tontolo izao\nHianao mampahery sady mitarik'ahy\nAndry ianteherako\nTena feno fahatokiana aho\nSatria miantehitra Aminao\nTao Kalvary ka hatr'aty\nNy fahasoavanao."
        ]
    },
    {
        "title": "HIARA-MANDEHA",
        "number": 193,
        "chorus": "Handroso isan'andro na aiza aleha\nNa mora na sarotra atao\nTsy hiala tokoa na hivadika re\nAmbara-pahatonga Aminao (in-2)",
        "verses": [
            "Hiara-mandeha Aminao hatrizao\nJeso no iriko tokoa\nO! raiso ny tanako atsotra Aminao\nFa atolotro koa ny fo.",
            "Hiara-miasa Aminao hatrizao\nHitady ireo 'zay very koa\nKa hanana fo antra toy ny Anao.\nHanarina ny efa voa.",
            "Hiara-mitondra Aminao hatrizao\nNy hazofijaliana\nFa maivana izany raha anilanao\nKa hody fifaliana",
            "Raha avy indray tsy ho ela Hianao\nIzaho handao ny ety\nHiaraka amin'ireo navotanao\nHandova ny lanitra ery.",
            "Ho sambatra indrindra\nHo tretrika koa\nHanatrika ny tavanao\nKanefa izao no hafaliako tokoa\nHiara-mitoetra Aminao (in-2)"
        ]
    },
    {
        "title": "HIDERA ANAO AHO",
        "number": 379,
        "verses": [
            "Hidera Anao aho amin'ny foko\nHanambara ny fahatsaranao\nHihira ho Anao",
            "Hidera Anao aho amin'ny foko\nHanao Anao ho fifaliako\nHaleloia."
        ]
    },
    {
        "title": "HIDERA ANAO AHO",
        "number": 539,
        "chorus": "Hidera Anao aho\nHankalaza Anao aho\nHitory ny teninao\nAmin'izao tontolo izao\nHo vavolombelonao\nHitondra hazofijaliana\nMandrakizay aho hihira\nAnao Jeso famonjena.",
        "verses": [
            "Jeso, Zanak'Ondrin'\nAndriamanitra\nJeso, nidina tety an-tany\nJeso, 'lay fahasoavana\nJeso, ho an'izao tontolo izao.",
            "Jeso notevatevaina\nJeso, nanaiky hamapahoriana\nJeso, nanaiky hohazonina\nJeso, nahafoy ny ainy tao Golgota.",
            "Jeso, tsy voatana tao am-pasana\nJeso, nitsangana tamin'ny maty\nJeso, velona mandrakizay\nJeso, anio miantso anao.",
            "Atolory ny fiainanao\nRaiso Izy ao am-ponao\nIbebao ny fahotanao\nManeke mba hosasana\nDia omeny ho anao izao\nNy fiainam-baovao\nKa manomboka anio\nMatokia fa voadio\nHidera Anao aho\nJeso (in-3)"
        ]
    },
    {
        "title": "HIDERA ANAO AO AN-TRANON'NY RAY",
        "number": 383,
        "verses": [
            ";;; Tonga ao an-tranonao\nHo tonga mba hidera Anao Jeso;;;\nTonga ao an-tranonao\nHo tonga mba hidera Anao\nJeso, Jeso\nHidera Anao izahay Jeso.",
            ";;; Ny fahamarinanao\nNo nanafaka anay hidera Anao;;;\nNy fahamarinanao\nNo nanafaka anay hidera Anao\nJeso\nHidera Anao izahay Jeso.",
            ";;; Hanangana tànana\nHibanjina Anao 'zahay Jeso;;;\nHanangana tànana\nHibajina Anao 'zahay\nJeso, Jeso\nHidera Anao izahay Jeso."
        ]
    },
    {
        "title": "HIDITRA MALALAKA NY LANITRA",
        "number": 343,
        "chorus": "Haleloia (in-2)\nHo any an-danitra isika\nHiditra ao malalaka isika\nDia honina ao.",
        "verses": [
            "Ny fonao re ry mpino\nDiniho isan'andro\nFa raha madio izany\nDeraina Andriamanitra",
            "Ny fitsapana ry mpino\nTsy maintsy miaritra isika\nIzay mivoaka mandresy\nHitafy lamba fotsy.",
            "Ny manetry tena ry mpino\nNisandratan'i Jesosy\nMba hianatra izany isika\nDia hisandratra koa.",
            "Mba mazotoa ry mpino\nHampitoetra ny fiantsoana\nSy ny fifidianana antsika\nTsy ho isan'ny tsy mino.",
            "Mba mibitaha ry mpino\nFa tia anao Jesosy\nTena hisy fifaliana any an-koatra\nKa mahaiza misaotra.",
            "Te-ho any koa ve ianao?\nTena azo atao izany\nFa vidiny mora dia mora\nNo takina aminao.",
            "Mibebaha, minoa\nMba ho isanay koa ianao\nHiditra ao malalaka isika\nSamy honina ao."
        ]
    },
    {
        "title": "HIFANATRI-TAVA",
        "number": 735,
        "chorus": "Hifanatri-tav'Aminy\nEny amin'ny rahona,\nAmin'ny voninahiny\nFeno sy mamiratra",
        "verses": [
            "Hifanatri-tava\namin'i Jeso mpamonjiko aho\nRehefa ho avy Izy;\nHanao ahoana re?",
            "Takona amin'ny masony\nOlombelon'izy;\nHo avy anefa ilay\nAndro mahafinaritra.",
            "Fifaliana ny hahita\nNy tavan'ny Jesosy;\nHampisinda ny alahelo,\nNy fanatrehany.",
            "Ora hahafinaritra\nNy hihaonan' Aminy\nHahita sy hahalala,\nNy tena fitiavana."
        ]
    },
    {
        "title": "HIHIRA HATRANY",
        "number": 230,
        "chorus": "Jeso, Jeso, Jeso tena tiako\nMameno ny faniriako hatrany Izy",
        "verses": [
            "Misy feo iray manako\nMibitsika ao am-poko\n\"Aza matahotra fa momba anao\nHatrany Aho\"",
            "Simban'ota ny fiainako\nMaro ny ady tao am-po\nNotapahin'i Jesosy'zao\nNy gadra namatotra",
            "Mandray ny hasoavany aho\nMialoka ao Aminy koa\nMijery ny endriny ravo\nKa miventy hira hoe:",
            "Rano lalina no hitàko\nDiavina matetika\nMandalo lalam-pitsapana\n'Zay mafy sy mideza.",
            "Ho avy hitsena ahy Jesosy\nHody any an-danitra\nHanodina hiakatra aho\nHiara-manjaka Aminy."
        ]
    },
    {
        "title": "HIRAIKO LALANDAVA NY ANARAN'NY TOMPO",
        "number": 564,
        "verses": [
            "Hiravoravo hidera an'i Tompo aho\nHanompo Azy amin'ny foko\nNoho ny halehiben'ny hatsaran'ny\nasany\nHobiako hatrany ny anarany.",
            "Fianteherako, fiarovako, fiankinako\nMandako ary fialofako Izy\nVatolampy iorenan'ny fiainana\nMiaro ka itokiako Izy.",
            "Namonjy ahy tamin'ireo fahavaloko\nIzay toy ny liona mierona\nManasitrana ahy, nisarika tamin-doza\nTony ny foko, misaotra azy aho\nRy sakaiza, avia hifaly",
            "Ho an'ny Tompo\nOmeo azy ny voninahitra\nVohay ny fonao amin'ny fitiavany\nMihira ho Azy\nDerao ny Anarany",
            "Hiraiko lalandava (in-2)\nNy anaran'ny Tompo"
        ]
    },
    {
        "title": "HISY KINTANA VE NY SATROBONINAHITRAO?",
        "number": 774,
        "chorus": "Moa ve mba hisy kintana\nEo amin'ilay satroboninahitro?\nMba hisy kintana ve\n'lay satroboninahitro?\nRaha handray valisoa.",
        "verses": [
            "Misaina 'lay tany mahafinaritra aho\nOmeny noho ny hasoavany;\nRaha tonga any aho moa hisy kintana\nIlay satroboninahitro.",
            "Ho mpivavaka aho, hano ny asany\nNoho ny herin'ny Tompoko;\nAry ho mpanarato fanahy ho Azy\n'Zay ho tonga kintana ho ahy.",
            "He! Fifaliana ny hahita Azy\nSy 'lay tanàna volamena.\nVoaravaka vatosoa mamiratra;\nFonenam-pahasambarana."
        ]
    },
    {
        "title": "HISY ZAVA-TSOA HISEHO EO AMIKO",
        "number": 403,
        "chorus": "Hisy zava-tsoa hiseho eo aminao\nHiseho aminao, izao anio izao\nHisy zava-tsoa hiseho eo aminao\nJesosy no mandalo\namin'ny làlanao.",
        "verses": [
            "Teo amin'ny vovoka\nAnilan'ny vavahady\nNiandry ny jamba iray\nNihaino ny mpandalo\nTsy nampoiziny fa\nTamin'io andro io\nNo nandalo teo\nNy Tompo Jesosy",
            "Vehivavy nantsaka\nTrotraka irery\nOry, nanary fo,\nIzay no fiainany\nTsy nampoiziny fa\nIo vahiny io i Jesosy\nNo hanome ranovelona\nHosotroiny",
            "Ry sakaiza\nRaha mihaino ahy ianao\nIzao no andro\nMety hanafahany anao\n'Lay Jesosy tsy miova\nDia eto anio\nKasiho Izy am-pinoana,\nMinoa izao teniko izao"
        ]
    },
    {
        "title": "HITAKO NY VAHAOLANA",
        "number": 719,
        "chorus": "Hitako izao ny vahaolana,\nDia Jesosy 'lay Mpanavotra\nMianatra fahononan-tena aho;\nMba ho amin'ny fivavahana.",
        "verses": [
            "Nandeha tao anatin'ny aizina aho\nNania sy reraka ka dia mamoifo\nNefa nanafak'ahy Jeso' Lay mazava\nKa voavel'avokoa\nIreo otako.",
            "Ela sady mampahory ny andro,\nAry very koa izay fanantenako,\nKanjo sahy nitraka mifalifal'indray\n'Zany no nahatonga ahy hilaza fa:",
            "Raiso sy diniho ny Baibolinao\nIzy no hanoro fitahiana ho anao\nMianara hanana fiononana\nAry fitiavana ny hivavaka."
        ]
    },
    {
        "title": "HITANAY JESOSY",
        "number": 330,
        "verses": [
            "Hitanay ny fifalian'ny miana\nsy ny mihira\nHitanay ny fahasambarana\nNy zava-miafina sarobidy\nManome fanantenana\nHitanay Jesosy Tompo\nIzany no hiranay am-pifaliana\nan-dalana\nAntenainay fa Hianao koa\nMahita ny fifalian'ny miaina\nsy ny mihira\nHitanao ny fahasambarana\nNy zava-miafina sarobidy\nManome fanantenana\nHitanao Jesosy Tompo"
        ]
    },
    {
        "title": "HIVERINA INDRAY NY TOMPO",
        "number": 740,
        "chorus": "Voninahitra anie ho Anao\nMandrakizay ny Anaranao\nAny an-danitra 'zay mamiratra\nNo ankalazan'ny voavotra.",
        "verses": [
            "Ho avy indray izao ny Tompo\nTsy ho ela dia ho re ny feony\nNy lanitr'indray koa hiova loko\nMandrakizay ny ratatr'androny.",
            "Na manodidina ahy ny tafiotra\nMatoky aho fa mijery ahy Hianao\nMijoro aho satria mihoatra\nNy finoako'zany fitiavanao.",
            "Ho an-tranon'i Ray no iantsoanao ahy\n'Zay honenan'ireo voavotra\nFena hazavana ho mandrakizay\nTsy hisy sento na koa tahotra",
            "Sambatra aho noho ny fitiavanao\nNaseho anay na dia mbola ety\nHobim-pifaliana no asetrinay\nNy fiverenanao haneho fitia."
        ]
    },
    {
        "title": "HO AN'ANDRIAMANITRA NY VONINAHITRA",
        "number": 410,
        "chorus": "Miderà, miderà ry tany rehetra\nHo fisaorana sy ho fankalazana\nAn'Andriamanitra noho ireo soa\nTamin'ny alàlan'i Jesosy",
        "verses": [
            "Ho an'Andriamanitra irery anie\nNy dera mbamin'ny voninahitra;\nSatria nomeny ho antsika Jeso\nIlay Zanany mba ho famonjena.",
            "Fanavotana sarobidy tokoa\nNo nataon'i Jeso tamin'ny Ràny\nNy teny fikasany dia ho an'ny\nMino rehetra tsy an-kanavaka.",
            "Zava-dehibe no nataony tety\nSy nampianaran'ny Tompo Jeso\nZava-dehibe no nanomezany\nNy fiadanany ho ety an-tany"
        ]
    },
    {
        "title": "HO AN'NY TOMPON'NY FIFALIANA",
        "number": 548,
        "verses": [
            "Haleloia, Haleloia, Haleloia\nEty an-tany, an-danitra no hiderako\nNy hazo an'ala hifaliahavanja ihany\nkoa\nNy voankazo any an-tsaha hankalaza\nNy tendrombohitra hifaly\nNy ony hitehan-tanana\nSatria Tompo Andriamanitra ianao\nHirao: Haleloia (in-3)",
            "Ny firenena hanandratra anao\nTompo ô!\nNy olon-drehetra hihira\nfihiram-baovao\nNy tany hanome hanome voninahitra\nAnao\nNy olo-marina hiankohoka eo\nanoloanao\nSatria Tompo Andriamanitray\nHianao\nHirao: Haleloia (in-3)",
            "Hidera Anao amin'ny foko rehetra aho\nFeno hafaliana aho no manantona\nAnao\nNy olonao hilaza ny hatsaranao\nHanaram-po amin'ny fanasan'I\nZanak'ondry\nSatria Tompo Andriamanitray Hianao\nHirao: Haleloia (in-3)",
            "Ho Anao irery ny voninahitra\nRay ô\nHaja sy saotra atolotray ny Zanakao\nFiadanana, fifaliana ho an'ny olonao\nHaravoana tsy hay lazaina no any an-\ndanitra\nSatria Tompo Andriamanitray\nHianao\nHirao: Haleloia (in-3)",
            "Koa indreto zahay ry Tompo ô!\nManolo-tena mba hanao ny asanao\nHanambatra tsy miato ny Famonjenao\nHanangona fanahy maro ho any an-\ndanitra\nHankato ny baiko omenao\nHirao: Haleloia (in-3)"
        ]
    },
    {
        "title": "HO ANDROM-BONINAHITRA",
        "number": 416,
        "chorus": "Andro lehibe (in-2)\nAndrom-boninahitra\nRaha mbola velona koa aho\nTsy hanan-tahotra\nHo hitako tsy hoela ny Tompoko\nAndrom-boninahitra.",
        "verses": [
            "Raha tonga anio Jesosiko\nAndro lehibe izay\nHahita ireo sakaizako\nHitsena ahy re;\nMety hody anio aho\nHandre hira manako\nAtaon'ireo vahoaka ravo\nAndrom-boninahitra.",
            "Nahoana no hatahotra\nAndro lehibe izay\nNy tafiotra tsy hampanahy\nKoa hatoky aho;\nMino aho ankehitriny\nKa manambara ny antso\nHolazaiko an-kalalahana\nAndro leibe izay."
        ]
    },
    {
        "title": "HO AVY JESO",
        "number": 498,
        "chorus": "Ho avy Jeso, ho avy amin'ny\nvoninahiny\nNy olom-boavonjin'ny firenena\nrehetra re\nHiara-manjaka amin'ny Seza\nFiandrianany\nHiray voninahitra Aminy\nIsika voavonjin'ny famindram-pony.",
        "verses": [
            "Ho avy faingana Jeso ka torio\nEran-tany sy ranomasina\nHo avy hanangona ny voavonjy\nHatrehin'ny anjely masina\nMidina ny lanitra ka hitombo\nNy fihobiam-pifaliana\nHahita 'lay Mpanjaka\nFofom-badintsika sady Sakaiza.",
            "Andrandrao ny loha ka tario\nHianareo no olo-marina\nIndro izao ny famonjena fa akaiky\nNy mamaton'alina\nIndro avy Izy fa miady mafy\nSy ory ireo masina\nHanafak'alahelo sy hitondra\nHo amin'ilay fonenantsoa.",
            "Avia Jeso tanteraho ny teny\nFikasana izay nomenao\nMangetaheta ny fanahinay\nFa malemy ny fakam-panahy\nOzona no mandrakotra ny tany\nKanefa handresy Hianao\nNy teninao tsy miova ary\nMandrakizay ny voninahitrao"
        ]
    },
    {
        "title": "HO AVY JESOSY",
        "number": 103,
        "chorus": "Ho avy faingana Izy\nKa am-pifaliana no hitsenana Azy\nMaraina na hariva koa\nTsy ho ela dia ho avy Jeso.",
        "verses": [
            "Izao no andro farany\nAnananao fanantenana\nHiavian'ny Tompon'ny Tompo\nMpanjakan'ny Mpanjaka ety an-\ntany.",
            "Hisy famantarana aloha\nAmin'ny kintana sy volana\nNy masoandro koa hiha-maizina\nHanambara fa akaiky ny Tompo.",
            "Ireo tsy hita isa maty amin'i Kristy\nDia hifoha ka hitsangana\nRehefa ambaravaran-danitra Jeso\nHandray ireo voavonjy avy ety.",
            "Isika velona hiara-hiakatra\nHitsena ilay Tompo mahatoky\nNy fanantenana koa azo antoka\nKoa mifampionona ianareo."
        ]
    },
    {
        "title": "HO FANATITRA VELONA",
        "number": 169,
        "verses": [
            "Atolotro ny tenako 'zao\nHo fanatitra velona\nMba hataon'i Jesosy\nToy ny lapa honenana.",
            "Tiako ny fahakelezako\nHapetrak'eo an-tanany\nHo toy ny an'i Samoela\nNah'foy ny tenany.",
            "Izao no vavako ry Tompo\nSatria mbola zaza aho\nArovy ny aiko sy saiko\nAry ny tenako"
        ]
    },
    {
        "title": "HO HITAKO JESO",
        "number": 34,
        "verses": [
            "He! fantatro anie (in-2)\nHe! fantatro fa ho hitako Jeso\nAzo antoka tokoa (in-2)\nAzo antoka fa ho hitako Jeso\nNa alina, na atoandro,\nNa maraina tsy haharitra!\nHe! Fantatro fa ho hitako Jeso"
        ]
    },
    {
        "title": "HO HITANTSIKA NY TOMPO",
        "number": 540,
        "verses": [
            "Ho hitantsika tsy ho ela\nNy Tompo (in-3)\nHaleloia, Haleloia ho hitantsika Izy",
            "Foana ny alahelo fa ahita ny\nTompo (in-3)\nHaleloia, Haleloia ho hitantsika Izy",
            "Hasambarana ny hahita ny\nTompo (in-3)\nHaleloia, Haleloia ho hitantsika Izy"
        ]
    },
    {
        "title": "HO RAVAN'NY FINOANA",
        "number": 139,
        "chorus": "Rah'tsapanao fa mila hery ianao\nHatony amim-bavaka indray Jesosy\nHo rava sy hafindran'ny finoanao\nNy tendrombohitry ny olana.",
        "verses": [
            "Miambena mandrakariv'isika\nTomoer'amin'ny finoana\nTafio avokoa ny fiadiana\nIzay omen'Andiamanitra.",
            "Mivonona fa zavona ny aintsika,\nIzay hiseho anio tsy fantatra;\nTandremo sao tsy marin'amin'ny\natao\nKa simba ny toe-panahinao.",
            "Hoa avy tsy ho ela mantsy Jesosy\nIzany no hafatra farany\nNy famantarana mitombo hatrany\nDia manambara fa akaiky Izy."
        ]
    },
    {
        "title": "HO TAHIANA ANIE",
        "number": 782,
        "verses": [
            "Endrey ny firaisantsika\n'Zay napetraky ny Fanahy\nFitiavana avy amin'ny Ray\n'Zay mamatotra antsika ao ho Aminy.",
            "Any an-danitra tokoa\nAmim-pifalian –dehibe\nNy hira sy voady iraisantsika\n'Zay ankasitrahan'ny Tompo.",
            "Firaisana am-po lehibe\nNa faly na tomany re\nHiara-mametraka ny enta-mavesatra\nEo amin'ny Tompo Jeso.",
            "Raha ilaozantsika tokoa\nIty tany mandalo ity\nFihaonam-be any ankoatra ihany koa\nHisolo ny alahelo tety."
        ]
    },
    {
        "title": "HO TANAMASOANDRO AHO",
        "number": 546,
        "chorus": "Ho tanamasoandro, 'zay no ilain'ny Jesosy\nHo tanamasoandro hamiratr'ho Azy aho",
        "verses": [
            "Tian'i Jesosy ho toy ny tanamasoandro aho\nAntokan-trano, an-tsekoly hamirapiratra",
            "Tian'i Jesosy ho tonga be fitiavan'aho\nHo tsar'amin'ny rehetra, ho faly aminy",
            "Hangataka an'i Jesosy hanampy ahy aho\nHankahalako ny ota;\nHamiratr'ho azy."
        ]
    },
    {
        "title": "HO TOA AN'I JESOSY",
        "number": 99,
        "verses": [
            "Toa an'i Jeso ho tia Azy re.\nio no hany iriko\nManombok'ety ka ho hatrary\nToa Azy no iriko."
        ]
    },
    {
        "title": "HO VAVOLOMBELON'NY TOMPO",
        "number": 444,
        "verses": [
            "Hahazo hery hianareo\nAmin'ny hilatsahan'\nny Fanahy (in-2)\nHo vavolombelon'\nny Tompo (in-4)",
            "Any Jodia sy Samaria,\nJerosalema sy\nAm-paran'ny tany (in-2)\nHo vavolombelon'\nny Tompo (in-4)",
            "'Zay nandray fahasoavana\nHanantona ireo namany (in-2)\nHo vavolombelon'\nny Tompo (in-4)",
            "Ny fitondran-tena tsara\nNo fomba tena mahomby sy\nTsotra (in-2)\nHo vavolombelon'ny Tompo (in-4)"
        ]
    },
    {
        "title": "HOHAZAVAIN'I TOMPO ANY AORIANA",
        "number": 365,
        "chorus": "Miresak'amiko ny Tompoko\nNy amin'ny zava-miafina,\nIzay mba niaretako tety,\nReh'fa tonga any an-danitra aho.",
        "verses": [
            "Kely 'zay mba fahalalako\nNefa tsy te-hanontany aho,\nNy lalàn'i Jesosy ho ahy\nSy ny fomba izay hitondrany ahy.",
            "Marina ny fitarihany,\nIzay tsy mba mety ho diso\nKa mino Azy na dia amin'ny\nDingana iray, izay ataoanao.",
            "Miafina ny ratram-poko,\nNefa miandry ny Tompo aho;\nAo amin'ny fitsapana ahy;\nDia misy taram-panantenana."
        ]
    },
    {
        "title": "HOLAZAIKO FA KRISTIANA AHO",
        "number": 795,
        "verses": [
            "Holazaiko fa Kristiana aho,\nTsy menatra ny Anarany\nKa n'aiza toerana hisy ahy,\nDia hiaraha Aminy.\nHolazaiko fa voavonjy aho,\nSy ny fomba nandraisako Azy\nFantatro, fa raha mino ianao,\nDia homeny anao toy izany koa\nJesosy no 'lay Mpamonjiko\nTia ahy tsy manam-paharoa,\nKa ho azy ny fiainako\nN'aiza hitondrany; vonona aho.",
            "Holazaiko fa ho avy Izy,\nNa hoela, na ho haingana\nTokony ho tahaka Azy isika,\nAmin'ny fihaviany;\nTsy hisy andro toy 'zany\nHo an'ireo izay tia Azy,\nF'hahita 'reo zava-tsoa, izay\nNomaniny ho ahy sy ho anao;\nKoa lazao fa Kristiana ianao;\nAza menatra ny Tompo;\nKa ento miaraka aminao Jesosy\nN'aiza hisy anao."
        ]
    },
    {
        "title": "HOSANA MIDERA",
        "number": 704,
        "verses": [
            "Tonga ilay Mesia\nZanak'Andriamanitra\nHamonjy ireo mania\nVoagadran'ny ota,\nHosana!",
            "Ireo Mpiandry ondry,\nOry sy mahantra\nTao an-tranon'omby\nMba hitsaoka Azy,\nHosana, midera.",
            "Ireo Magy nanome\nVolamena, miora\nAry zava-manitra\nHo an'ilay Mpamonjy,\nHosana.",
            "Ny anjely mihira hoe:\nVoninahitra anie\nHo amin'ilay Avo indrindra.\nHo an'Andriamanitra\nHosana.",
            "Mba mitaky aminao\nFanomezana Jeso\n\"Anaka atolory\nMba ho ahy ny fonao\"",
            "Hosana miderà, Haleloia, (in-2)"
        ]
    },
    {
        "title": "HOY NY TOMPO",
        "number": 575,
        "verses": [
            "Hoy ny Tompo tamin'ny mpianany\nNambarany tsara manao hoe:\nHianareo no hazavan'ny olona\nRaha maizina hianareo:\nHo maizina ny tany.",
            "Hoy ny Tompo tamin'ny mpianany\nNambarany tsara manao hoe:\nHianareo no fanasin'ny tany\nNefa raha tsy masina.\nTsy maintsy hariana",
            "Hoy ny Tompo tamin'ny mpianany\nNambarany tsara manao hoe:\nHianareo no vavolombelona\nLazao amin'ny olona:\nIzaho no Làlana,\nLàlana fahamarinana,\nLàlana ary fiainana"
        ]
    },
    {
        "title": "ILAIKO JESOSY",
        "number": 155,
        "chorus": "Ilaiko re Jesosy izao,\nIlaiko isan'andro,\nNa mamiratra izao,\nNa mitatao rahona\nIsan'andro, eny ilaiko Jesosy.",
        "verses": [
            "Ilaiko Jesosy ankehitrio\nTsy misy olana toa Azy koa\nAmin'ny androm-pahoriana\nMbola ilaiko Izy\nIlaiko Jesosy!",
            "Ilaiko ny Sakaiza toa Azy\nMitarika amin-dala-maizina\nRaha mamely ny fahavaloko\nTsy mahaleo aho fa ilaiko Jesosy.",
            "Ilaiko hatramin'ny farany\nJesosy ilay tsy manam-paharoa\n'Zay Sakaizan'ny mpanota tokoa\nMahery, tsara, eny ilaiko Jesosy."
        ]
    },
    {
        "title": "ILAINA NY MPIJINJA",
        "number": 793,
        "chorus": "Andrandrao ny masonareo ka jereo,\nFa efa masaka ny eny an-tsaha\nO! Mifohaza ry matory,\nIlaina ho mpijinja ianareo,\nValio hoe: ''inty aho''\nEfa milonjehatra ireo voa,\nAhofahofan'ny rivotr'avokoa,\nO! Mifohaza ry matory,\nSatria mihelina faingana\nNy taona fijinjana.",
        "verses": [
            "Misy olo-maro manontany hoe:\nMoa ve tsy mba misy asa azoko atao?\nNefa indro ny Mpampianatra\nnanao hoe:\nIza re no'ndeha hias'anio?",
            "Ireo amboara izay efa hangoninao\nNo ho tonga vatosoa mamiratr'ho anao;\nMitadiava satro-boninahitra tsy lo,\nIza re no ndeha hias'anio?",
            "Madiva ho tapitra ny andro mazava\nDia ho lasa ny fotoana mety iasana,\nMoa hiseho amin'ny tànam-poana\nIanao?\nIza re no ndeha hias'anio"
        ]
    },
    {
        "title": "ILAY FIFALIAN-DEHIBE",
        "number": 318,
        "chorus": "Tsy andriko izany re!\nHo fifalian-dehibe\nRaha androany izany re!\nHo fifalian-dehibe",
        "verses": [
            "Hisy andro fifalian-dehibe\nHo foana ireo sento\nHo fafàna ny ranomaso re\nHo fifalian-dehibe",
            "Ho adino ireo alahelo\nHo lasa ny hakiviana\nHahita ny tavan'ny Tompo re\nHo fifalian-dehibe.",
            "Ho hita ireo namana\nSy ireo malala rahetra\nIzay lasa nodimandry taloha\nHo fivorian-dehibe.",
            "Nefa izao no tena lehibe\nNy hahita an'i Jesosy\nIo no tena fifalian-dehibe\nHo fifalian-dehibe."
        ]
    },
    {
        "title": "ILAY FIVORIANA FAHAGOLA",
        "number": 357,
        "chorus": "Ny fivavahana niainan'ireo taloha\nNampibebaka ny mpanota\nHandraisany famelan-keloka\nSy fahasoavana,\nKa mivavaha\nMba ho tahaka izany koa.",
        "verses": [
            "Endrey tsaroako tokoa\nNy andro teo aloha,\nIreo olona fahiny sy ny fombany\nNaharitra tamin'ny\nFivavahana marina\nKa dia novalian' Andriamanitra.",
            "Nisy ireo hira soa\n'Zay natao fahiny,\nNisy hery ny vavaka nataon'izy ireo;\nNy faharesen-dahatry ny mpanota\nNahatonga ny Tompo\nHihaino ny fivavany",
            "Milaza ny olona hoe:\nTsara ny taloha,\nNefa miova ny zavatra rehetra izao;\nTiako anefa io fomba fahagola io\nNanehoan'ny Tompo\nNy heriny rehetra.",
            "Tsy miova mandrakizay\nAndriamanitra\nTsy mba toy ny\nFomban'ny olombelona\nTsy mankasitraka izay manot'Izy\nNefa mamela heloka\n'Zay mibebaka."
        ]
    },
    {
        "title": "ILAY FONENANA IRAY",
        "number": 166,
        "chorus": "O! aza miandry ampitso re\nSao ho neninao\nAvia manantona anio\n'Lay Mpamonjinao\nNy ota anie mavesatra,\nMisakan-dalana\nArio, ilaozy avokoa\nHo sambatra ianao.",
        "verses": [
            "Ilay fonenana iray\nHodiako rahatrizay\nFonenana mamiratra\nMiaraka amin'ny Ray\nFonenana iray vaovao hasolo ny ety\nFonenan'ny voavoatra sy afa-keloka.",
            "Irinao ve ny hiditr'ao\nRy olom-bery ô!\nIrinao ve ho tonga ao\nMiandry Izy izao\nIrinao ve hifaly ao\nMandrakizay doria\nTapaho izao ny hevitrao\nValio Jeso tia.",
            "E! ianao'zay mandre\nIzao antso iray izao\nIlay Mpanjakan'ny mpanjaka\nNo manasa anao\nRaha voadio ny fitafiana\n'Zay ho entinao\nJeso hitsena anao tokoa\nHo faly aminao.",
            "Hikatona aminao anie\nNy varavarana\nHo menatra tokoa ianao\nSatria holavina\nNy ota izay mangeja anao\nVoasoratra avokoa\nManafaka Jeso anio\nManfaka tokoa."
        ]
    },
    {
        "title": "ILAY HAVOANA",
        "number": 188,
        "chorus": "O! Tsarovy re!\nMaty ory tao\nJeso Tompo lehibe\nHanavotra anao.",
        "verses": [
            "Ilay havoana\nNatao hoe Kalvary\nNo tany namonoana\nNy Tompo Jesosy",
            "Jereo ny Tomponao,\nTazanonao iny\nKa andrandrao ny masonao,\nFa io no Kalvary.",
            "Hevero Kalvary\nFa tao ny Tomponao;\nTsarovinao ny nentiny,\nMba hamonjena anao.",
            "Tsinjovy Kalvary\nFa Jeso Tomponao\nNijaly tany raha tety,\nKa maty Izy tao."
        ]
    },
    {
        "title": "ILAY LEHIBE NOHO IZAHO SY IANAO",
        "number": 721,
        "verses": [
            "Iza no nanao ny havoana\nNy renirano sy lohasaha\nNy volana mbamin'ny kintana?\n'Lay lehibe noho 'zaho sy ianao",
            "Iza no nanao feon-kira\nMba hokaloin'ny railovy\nMampilatsaka ranonorana?\n'Lay lehibe noho 'zaho sy ianao",
            "Manaiky hiara-dia aminao\nHo sakaizanao te hitarika anao Izy\nToy ny hitarihany ahy,\n'Zaho rehefa ory sy sasatra,\nIza moa no manome hery ahy\nAry iza no manome finoana ahy?\n'Lay lehibe noho 'zaho sy ianao"
        ]
    },
    {
        "title": "ILAY MARAINA SOA",
        "number": 329,
        "chorus": "Ho avy 'lay maraina soa\nHivorian'ny olom-boavonjy;\nTsy hisy intsony ny alahelo\nEo anatrehan'i Jesosy.",
        "verses": [
            "Sarotra ny làlana mankao\nAn-tanàna soan'ny lanitra;\nNefa tano ny finoanao\nFa ho avy 'lay maraina.",
            "Tanin-tsento sy fahoriana\nIty 'zao tontolo izao ity\nManetsika ny faniriana\nHiavian'i Jesosy.",
            "Efa nitomany avokoa\nNa izaho 'zany na ianao\nNef'ireny dia hiova ho\nHafaliana vaovao.",
            "Mbola mahatoky Jesosy\nAmin'ny tenifikasany\nFa tsy maintsy ho tanterany\n'Zay nolazain'ny vavany."
        ]
    },
    {
        "title": "ILAY MEMY FANDRENDREHANA",
        "number": 335,
        "chorus": "Ilay memy fandrendrehana\nJesosy no mpandrendrika\nIzay tena volamena marina\nDia hivoaka ho mamiratra",
        "verses": [
            "Misy fomba maro isehoan'ny\nFanamboarana sy fanefena\nZanak 'Andriamanitra\nMpanompony\nHo fitaovana eo am-pelatanany",
            "Maro ireo mpanompo no arendrika\nFahoriana, fijaliana,\nFanenjehana, fanaratsiana\n'Reo no lasitra eo am-pelatànany.",
            "Mety ho mafana ny fitsapana\nToa ilaozana ka irery ianao\nToa tsy misy tara-pahazavana\nAza kivy anefa na mamoy fo."
        ]
    },
    {
        "title": "ILAY MPANAVOTRA AHY",
        "number": 422,
        "chorus": "Koa meteza ho isanay,\naza mandà re\nManatona ianao\nNy Tomponay tsy manadino\nNy sakaizany 'zay tia Azy re.",
        "verses": [
            "Tonga tety mba hanavotra ahy\nJeosy 'lay tsy mba mandao\nNatolony ny tenany ho anao koa\nAtolory ny tenanao izao.",
            "Faly sy ravo, mirana izahay\nHanompo an'Ilay Jesosinay\nSatria omeny ireo fitahiana\nKa afa-po amin'ny fitiany."
        ]
    },
    {
        "title": "ILAY MPIANDRY ONDRY TSARA.",
        "number": 586,
        "verses": [
            "Ny Mpiandry tsara mitondra\nNy ondry amin'ny ahi-maintso\nTsinjoviny ireo madinika satria tiany\nEntiny anilan'ny ony.\nRaha mangetaheta\nAmoron-drano no itondran'ny\nMpiandry tsara.",
            "Ny zaza dia toy ny ondry kelin'ny\nMpiandry tsara\nTian'i Jesosy ho isan'ireo izay\nandrasany\nAkaikin'ny Ray an-danitra no\nitondrany\nTianay ny ho isan'ireo ondrin'i\nTompo.",
            "Raha misy ondry mania\nLavitry ny namany\nTadiavin'ny Mpiandry Tsara\nsatria tiany\nRy ondry very, lasa nandao,\nmiverena!\nHo feno hafaliana ny Tompo",
            "Hianao izay efa nahatsapa\nNy famonjen'i Tompo\nTsarovy fa isan'ireo izay ondriny koa\nEkeo ny sitrapony, araho Izy\nFa Jesosy Mpiandry tsara no\nMahita anao."
        ]
    },
    {
        "title": "ILAY ORA TAO GETSEMANE",
        "number": 78,
        "chorus": "Tsaroako'zao Getsemane,\n'zay niaretanao\nTsy haiko hadinoana re\n`lay fahoriana tao",
        "verses": [
            "'Lay ora tao Getsemane\nTraroako tsara izao,\nFa Tompo tia sy lehibe\nNo ory loatra tao.",
            "Ny mpianatrao malalanao\nNatory avokoa;\nNafoin'izao rehetra izao\nJesosy Tompo soa.",
            "Nanjary rà ny dinitrao\nNoho ny helokay;\nFadiranovana Hianao\nNisolo voina anay.",
            "Soraty ao am-poko re!\nHo sary velona ao,\nNy sarin'i Getsemane\n'Zay niaretanao."
        ]
    },
    {
        "title": "ILAY TANANA PERLA SOA",
        "number": 300,
        "chorus": "Tanàna kanto, Perla soa\nHaren'ny foko, tena mamiko\nTiako fatratra, iriko tokoa,\nHo tonga any sy honin'any.",
        "verses": [
            "Misy tanàna masina tokoa\nIzay naorin'ny Tompo;\nTanàna tena volamena;\nNy mandany vato jaspy,\nRaha ravàna ny trano laiko\nIty mora simba ity\nDia hahita io tanàna io\n'Zay be voninahitra aho.",
            "Ny ota tsy ho tafiditra any\nNa ny zavatra manimba;\nTsy hisy fangirifirina\nNa aretina mandoza\nHohadinoina ny ahiahy\nsy alahelon'ny tany;\nTsy hisy ny mpaka fanahy\nIzay hanelingelina.",
            "Tsy his'intsony ny aretim-po\nAry koa ny ranomaso\nTsy hisy fialonana any,\nNa ady mampisaraka;\nFa 'zay mahazo miditr'any\nDia izay olo-masina;\nKa ny fiaraha-monina\nDia amim-pilaminana",
            "Miandry ireo havana tiana\n'Zay efa lasa nialoha\nIreo olona voavonjy\nEfa nandray an'i Kristy;\nManiry ho isany koa aho\nHonin'ao mandrakizay;\nHiarak'amin'i Jesosy\nAo amin'io tanana io"
        ]
    },
    {
        "title": "ILAY VATOLAMPY MAFY INDRINDRA",
        "number": 168,
        "chorus": "Kristy Vatolampy mafy\nNo ijoroako izao\nFasika miletsy ny hafa re.",
        "verses": [
            "Tsy zava-kafa fa ny rà\nNo vato fehizoroko\nRafitra malemy tsy itokiako\nJesosy no iankinako.",
            "Raha takon-drahona Jeso\nItsaharako ny hasoavany\nRivotra mahery'njao miavosa re\nAo ambadika ao ny Vatofantsiko.",
            "Teny fikasany sy ny ràny soa\nIjoroako an-dranobe manafotra\nIndreo mikoa ny manodidina ahy\nAntenaiko Izy, ka hitsahatra aho,",
            "Ho avy Izy amin'akon'anjomara\nIriko aho ho hita ao Aminy\nItafiako izao ny fahamarinany\nKa ho tanteraka aho eo anatrehany"
        ]
    },
    {
        "title": "ILAZAO JESOSY",
        "number": 182,
        "chorus": "Ilazao Jesosy, ilazao Jesosy,\nSakaiza tsara ho anao;\nRahalahy tokana an-tany;\nIlazao Jesosinao.",
        "verses": [
            "Mivesatra entana va ny fonao?\nIlazao Jesosy, ilazao Jesosy,\nMalahelo va fa lasa ny hafaliana?\nIlazao Jesosinao.",
            "Kotsan-dranomaso va ny endrikao?\nIlazao Jesosy, ilazao Jesosy,\nMisy ota miafina ao am-ponao?\nIlazao Jesosinao.",
            "Atahoranao va ny rahon'alahelo?\nIlazao Jesosy, ilazao Jesosy,\nManahy ny ho avy va ianao?\nIlazao Jesosinao.",
            "Matahotra ny ho faty va ianao?\nIlazao Jesosy, ilazao Jesosy,\nItomanianao ny Fanjakan'i Kristy\nIlazao Jesosinao."
        ]
    },
    {
        "title": "IMANOELA",
        "number": 345,
        "verses": [
            "Tia antsika Izy\nKa dia namonjy\nImanoela no Anarany\nManasitrana ny aretina\nImanoela no Anarany",
            "Imanoela (2)\nImanoela no Anarany\nAndriamanitra amintsika Izy\nImanoela no Anarany"
        ]
    },
    {
        "title": "INDRAY MANDEHA",
        "number": 765,
        "chorus": "Indray mandeha ihany re Jeso\nRy mpanota sy rahalahy ô!\nNo voahombo hisolo anao;\nIndray mandeha ho avotra.",
        "verses": [
            "He sambatra 'reo olon'afaka,\nNavela noho ny rà latsaka;\nAfak'isika, voavonjy re\nVaotra indray mandeha",
            "Tsy meloka intsony isika,\nNovonjen'i Jeso tanteraka;\nNantsoiny isika mantsy hoe:\nMba ho Azy indray mandeha",
            "Endrey izany voninahiny,\nF'izay Azy dia voatahiriny,\nNovelominy tokoa ka he!\nAfaka indray mandeha!"
        ]
    },
    {
        "title": "INDRETO IZAHAY",
        "number": 577,
        "verses": [
            "'Ndreto izahay hidera Anao (in-2)\nNy Fanahy no aoka hitarika\n'Ndreto izahay hidera Anao",
            "'Ndreto izahay hihaino Anao (in-2)\nNy Fanahy no aoka hiteny\n'Ndreto izahay hihaino Anao",
            "'Ndreto izahay hizara fiainana (in-2)\nAmpiraiso amin'ny fitiavanao\n'Ndreto izahay hizara fiainana",
            "Ndreto izahay hidera (in-2)\n'Ndreto izahay hihaino Anao\nAmpiraiso amin'ny fitiavanao\n'Ndreto izahay hidera Anao.",
            "'Ndreto izahay hidera Anao (in-2)\nNy Fanahy no aoka hitarika\n'Ndreto izahay hidera Anao"
        ]
    },
    {
        "title": "INDRISY RE NIVOA-DRA",
        "number": 163,
        "chorus": "'Lay hazofijaliana nahitako mazava\nAfak'entana izao ny foko\nTeo no nampahiratra ahy tamim-\npinoana\nIzao aho faly mandavanandro.",
        "verses": [
            "Indrisy re nivoa-dra\nSy maty ny Tompo\nMoa tokony hisolo ahy\nIzay kankana?",
            "Moa ho an'ny heloko\nNo nijalianao?\nFamindram-po toa inona!\nFitiavan-dehibe."
        ]
    },
    {
        "title": "INDRO EO AM-BARAVARANA AHO",
        "number": 27,
        "verses": [
            "Izaho no hanasitrana\nAnao mpanota izay mijaly\nRaha te-ho afaka ianao\nMianara ny manaiky Ahy\nIndro eo am-baravarana aho\nMpamonjy sady Tomponao\nMitondra fahasambarana Aho\nKa tsy hamoha va ianao?",
            "Nateraka ho anao Aho\nNomeko ho anao ny aiko\nFandriam-bahiny va ny fonao\nKa tsy mba misy hitoerako?\nMatetika aho no nandona\nMandritra ny fotoana maro\nIzao anefa sisa andro\nKa tsy hamoha va ianao?",
            "Moa Aho tsy mahasoa anao?\nHo avy faingana ny alina\nAvia ny elatro ialofy\nFa ho anao tontolo Aho\nIndaosin'ny fotoana ianao\nNahoana no hiandry ampitso\nF'indray andro any ianao\nHandona nefa ho lavina",
            "Raha toa tsy mila Ahy ianao\nHenoy ihany ka ekeo\nIzaho kosa mila anao\nKa hiandry rahoviana ré?\nIndro eo am-baravarana Aho\nMpamonjy sady Tomponao\nMitondra fahasambarana Aho\nKa tsy hamoha va ianao?"
        ]
    },
    {
        "title": "INDRO FA MIPOSAKA AMINAO",
        "number": 344,
        "chorus": "Indro fa miposak'aminao\nJesosy ho fahazavanao\nAraraoty 'zao fotoana izao\nMba hamonjeny anao.",
        "verses": [
            "Ry fanahy 'zay miraparapa\nAo anatin'ny aizin'ny ota\nSy mitoetra ao amin'ny tany\nAloky ny fahafatesana.",
            "Tandindomin-doza ny olona\nIzay hajambain'ny satana\nFa amin'ny andro hahafatesany\nDia ny helo no anjarany.",
            "Mankanes'ao amin'i Jesosy\nRy mpanota voaheloka\nFa izay rehetra mino Azy\nDia homeny famelan-keloka.",
            "Ny alahelonao hosoloiny\nDiloilo fifaliana\nAry ny fisaonanao hovàny\nFitafiana fiderana."
        ]
    },
    {
        "title": "INDRO NY TOMPO JESOSY JEREO",
        "number": 92,
        "chorus": "Indro, Jeso, jereo, Jeso (x2)\nIzy izao dia mihevitra anao\nIndro, Jeso, jereo.",
        "verses": [
            "Indro ny Tompo Jesosy, jereo\nTena nihafy tokoa!\nHe! fa mavesatra eso, jereo\nMba hamonjena anao",
            "Indro ny Tompo Jesosy, jereo\nEfa voahombo tokoa!\nHe! fa nijaly tsy meloka teo, mba\nHamonjena anao.",
            "Indro ny lefo-mandoza, jereo\nNenti-namely ny Tompo!\nHe! fa ny Rany nirotsaka teo\nMba hamonjena anao."
        ]
    },
    {
        "title": "INDRO TAMY NY MPAMPAKATRA",
        "number": 688,
        "chorus": "Sambatra izay miambina\nAmin'ny mamanton'alina\nHanakoako ny trompettra\nIndro tamy ny mpampakatra.",
        "verses": [
            "Any an-danitra miraondraona\nNy feo midera ny Zanak'ondry\nEfa an-tomotra ny fotoana\nNampakarana ny voavonjy.",
            "Ho avy tsy ho ela anie Jesosy\nAmin'ny ora izay tsy fantatra\nKoa mivonona hihaona Aminy\nSao sanatria ho laviny ianao",
            "Raha ny fahoriana manjo ety\nSy ny olana, mbamin'ny ady\nDia satry aza ho Jesosy\nNo hameno ny voninahiny.",
            "Ry mino ô! mifohaza ianao\nAza matory toy ny sasany\nFa indro avy ny Mpanjakanao\nAmin-kery sy voninahiny."
        ]
    },
    {
        "title": "INJANY MISY FEO",
        "number": 11,
        "chorus": "Mifohaza ianao, mivonòna re\nFa akaiky ny mamaton'alina\nMisy solika fitaiza vé ny jironao\nHitsenanao ilay Mpampakatra?",
        "verses": [
            "Injany misy feo miantso\nmafy hoe\nRy mpiambina ô! toa inona\nalina moa izao\nAvy re ny maraina, avy koa\nny alina\nMaizim-pito izao ny lanitra.",
            "Ho avy tsy ho ela ny Tomponao\nFa akaiky ny fararano izao.\nHijinja izao tontolo izao ny anjeliny\nAiza ny toerana hisy anao?",
            "Hifarana ny androm-pahasoavana\nHo tsofina ny trompetran-danitra\nSao diso tara ré ka ho neninao\nFijaliana tsy hisy fetra ho anao."
        ]
    },
    {
        "title": "INOAKO JESOSY",
        "number": 652,
        "verses": [
            "Inoako Jesosy\nFa Zanak'Andriamanitra\nMaty nefa nitsangana\nNividy ny olon-drehetra\nInoako fa eto Hianao\nManatrika anay eto\nManan-kery hanasitrana sy hamela heloka."
        ]
    },
    {
        "title": "INONA NO HOMEKO AZY",
        "number": 574,
        "verses": [
            "Fitahiana, fahasoavana,\nHasambarana, fiadanana\nTsy haiko lazaina amin'ny vavako\nIzay vitan'ny Tompo.",
            "Tena Mpamonjy azo antoka\nTsy mivadika no iankinako\nHany tokiko, fialofako\nKa tsy hatahotra aho",
            "Tsy mendrika aho raha novonjeny\nNoraisiny mba ho mpandova Azy\nInona ary no tokony\nMba ho nomeko ny Tompo?",
            "Lehibe ny fitiavan'i Jesosy ahy\nNohomboana tamin'ny hazo\nTia ahy Jeso\nTena tiako Jeso (in-2)\nNijaly, maty ho ahy izy.\nMamiko Jesosy",
            "Lehibe ny fitiavan'i Jesosy ahy\nKoa manolotra ny fiainako mba ho\nAzy koa\nRaiso, raiso Jeso\nHo Anao manontolo\nF'izany no porofon'ny fitiavako Anao."
        ]
    },
    {
        "title": "INONA RE NO HATAKALOKO",
        "number": 77,
        "verses": [
            "Inona re no hatakaloko\nAn'i Jesosy izay Mpisoloko?\nNy zavatra izay ho simba va\nSy mora levona?\nRaha mbola hazoniko ny to.\nKa tsy maty ny jiro ao am-po\nJesosy tsy soloako\nna inona na inona",
            "Indro Jesosy no fiainako\nIzy no manda fiarovako;\nIzaho, efa maty, nefa\nNovelominy indray;\nKa na dia mahantra aza aty\nKa tsy mbola nafindra ho ary,\nJesosy no anjarako,\nKa ampy ahy re, izay.",
            "O, ry Jesosy Tompo tsara o!\nAza mamela ny fanahiko\nHisaraka Aminao, fa tano aho\nho mpanomponao\nMba velomy ny fitiavako,\nka tohano ny fandehanako,\nMba hanarahako ny làlana izay\nnalehanao."
        ]
    },
    {
        "title": "IRAHO AHO",
        "number": 50,
        "chorus": "Mitenena Tompo ô!\nDia hamaly Anao faingana aho\nMitenena Tompo ô!\nKa iraho aho, mba hamory.",
        "verses": [
            "Mba henoy ny Tompo miantso\nanao\n\"Iza no handeha hiasa anio\nIza no hitondra ho ahy ireo very\nSy hitarika amin-dalàn-tery\".",
            "Raha afo mahamay mandoro,\nManadio ny mpaminany izany\nIza no handeha, hoy ny Tompo\nDia namaly izy, \"iraho aho\"!",
            "Alinalina ireo matin'ota\nHenonao va ny tomaniny\nMba faingana re avia afaho\nDia valio ny Tompo hoe:\n\"Inty aho\"",
            "Hifarana ny taom-pijinjana\nKa hangonina ny vokatra\nNy Tompony hanampy sy handray\nIreo mazoto, miasa tsara."
        ]
    },
    {
        "title": "IRAHO NY FONAO",
        "number": 129,
        "verses": [
            "Ianao ry Kristy Mahery\nAry afo mpanadio koa\nTakinay ny fanomezanao\nAvy amin'ilay ranao soa;\nOmeo ny Fanahy'zay nolazainao\nMila Pentekosta vaovao'zahay,\nOmeo ny Fanahy izahay\nIraho ny afo avy Aminao.",
            "Ry Andriamanitr'i Elia ô!\nArotsahy ny Fanahinao,\nMba hahavonona anay hatrany,\nNa ho faty na ho velona,\nHandevona ny mariky ny ota,\nHanao fanavaozana aminay,\nOmeo ny Fanahy izahay,\nIraho ny afo avy Aminao.",
            "'Zany afo izany no ilainay,\nHahato ny fanirianay,\nHahafanay manao ny marina\nHampandresy amin'ny ady koa;\nHery hahaiza handehanana\nAmin'ny fahadiovana tokoa\nOmeo ny Fanahy izahay,\nIraho ny afo avy Aminao."
        ]
    },
    {
        "title": "ISAN'ANDRO",
        "number": 752,
        "chorus": "Fitahiam- baovao no raisiko\nisan'andro\nManodidin'ahy toy ny ando\nHanompo ny Mpamonjy mandritry\nNy andro fivahiniako ety aho.",
        "verses": [
            "Mandrotsaka fitahiana vaovao\nAmiko isan'andro ny Mpamonjy\nSy mitarik'ahy isan'andro koa,\nMba tsy hivilian'ny làlako",
            "Feno fifaliana ny fanahiko,\nRaha manapak'ahy isan'andro Izy;\nRavoravo ny foko fonenany\nNoho ny fitahiana entiny",
            "Ho an'i Jesosy isan'andro aho,\nHihira ho an'ilay nanavotr'ahy;\nHiasa ho Azy isan'andro koa;\nSatria Isy no ivelomako."
        ]
    },
    {
        "title": "ISAN'ORA ISAN'ANDRO",
        "number": 66,
        "verses": [
            "Isan'ora isan'andro, miahy\nahy Jeso\nIsan'ora isan'andro, mifaly\nny foko\nNony voavonjy aho dia\nsambatra\nManam-piadanana aho fa\nolon'afaka"
        ]
    },
    {
        "title": "ISAO NY FITAHIANA AZONAO",
        "number": 74,
        "chorus": "Isao ny fitahiana azonao\nJereo izay nataon'ny Tomponao\nIsao ny soa izay noraisinao\nDia ho hitanao ny asan'ny Tompo.",
        "verses": [
            "Raha mamaky onjam-piainana\nIanao,\nKivy fa toa very izay rehetra anao,\nTanisao ny fitahiana azonao\nHahagaga anao izay nataon'ny\nTompo",
            "Itambesaran'ahiahy va ianao,\nToa tsy zaka ny hazofijaliana?\nIsao ny fitahiana noraisinao,\nFisalasalana ho afaka aminao,",
            "Raha mijery ny haren'ny hafa\nianao\nSaino fa Jeso mampanantena\nAnao\nValisoa, harena any an-danitra\n'Zay tsy azo vidina amim-bola re!",
            "Aza mety kivy anaty ady ianao\nJesosy mahery noho izao rehetra\nIzao,\nNy anjely koa hanatrika anao\nHampahery anao hatrany am-parany"
        ]
    },
    {
        "title": "ITOKIAKO JESOSY",
        "number": 449,
        "chorus": "Itokiako Jesosy\nDeraiko ny anarany\nHo foana ny tahotro\nTsisy afeniko Aminy",
        "verses": [
            "Raha miresaka amin'i Jesosy\nDia henoiny\nTiako haboraka Aminy\nNy heloko fa havelany.",
            "Raha tsy haiko hadinoina\nNy ratsy ataon'ny hafa\nDia ny Mpamonjiko no\nMampianatra hamindrafo.",
            "Misafoaka ny onja\nToa mahakivy fo\nDia antsoiko Jesosy\nHany mpampahery ahy."
        ]
    },
    {
        "title": "IZA ANY AN-DANITRA NO TAHAKA ANAO?",
        "number": 353,
        "verses": [
            "Adonaî Jiré Hianao,\nTompo mihevitra anay\nAdonaî Raphé Hianao,\nTompo manasitrana.",
            "Adonaî Shamma Hianao,\nMihaino sy mamaly anay\nAdonî Shalom Hianao,\nTompon'ny fiadanana.",
            "El Shaddai, Mpiaro Hianao\nAndriamanitra Tsitoha\nEl Olam Mandrakizay\nEl Haî, 'lay velona.",
            "Iza any an-danitra\nNo tahaka Anao\nSy mahery toa Anao,\nRay Mpanjaka ô,\nSy mahery toa Anao,\nRay Mpanjaka ô,"
        ]
    },
    {
        "title": "IZA NO HAHASARAKA AHY",
        "number": 53,
        "chorus": "Ka loza ve sa mosary,\nSa fanenjehana mafy\nNa ny fahafatesana aza eny, eny,\nTsy hamoizako anao.",
        "verses": [
            "Iza no hahasarak'ahy\nAminao; ry Jeso o!\nTompo tia nanavotr'ahy.\nHianao, ry Kristy o!",
            "Iza no hahasarak'ahy.\nAmin'ny fitiavanao\nHe ny foko tsy manahy.\nTafatoetra eo aminao.",
            "Ny finoana no ampinga.\nNy Baiboly sabatra.\nKa manoatra ny mpandresy\nAmin'ny alalanao.",
            "Ry Jesosy feno hery.\nTano aho ho Anao\nRy Mpamonjy manan-kery\nVonona aho hanoa Anao."
        ]
    },
    {
        "title": "IZA NO HANOMPO AN'I JESO SOA?",
        "number": 174,
        "chorus": "Jeso Tomponay ô! Ndreto izahay\nAvy mba hanaiky ka mandraisa\nanay.",
        "verses": [
            "Iza no hanompo an'i Jeso soa?\nIza no hanaiky mba ho Azy moa?\nHe, ny hatsarany! He ny antra be!\nF'Izy ta-hamonjy, ka meteza re.",
            "Iza re no mety, iza re lazao,\nHanome ny fony mba ho Azy'zao?\nHe! Miantso mafy Jeso Tompo tia\n'Zay rehetra mety, ô Avia!; avia!",
            "Iza re no sahy, sahy ao am-po\nHo miaramila fehin'i Jeso?\nIza no hiady, ady tsara re?\nFa ny fahavalo dia marobe.",
            "Iza re no homba Azy ankehitrio\nMba hamonjy ireny azon'ny manjo?\nIza no hihafy sady hanome\nAndro, hery, saina? Mamalia re!",
            "Iza no mazoto mba hiasa moa?\nIza no handroso mba ho hendry koa?\nIza no hanaiky, iza re lazao?\nMba ho an'i Jeso'zao anio izao"
        ]
    },
    {
        "title": "IZA NO MIHEVITRA AHY",
        "number": 777,
        "chorus": "Iza no mba mihevitra ahy\nToy izao ataon'ny Mpamonjy izao?\nTsy misy izay mihevitr' ahy\nTahaka an'i Jesosy.",
        "verses": [
            "Lasa ny rahona ka mazava\nNy masoandrom-pifaliana;\nFa ny Tompo dia mandray\n'zay maniry\nHitoetr'ao Aminy.",
            "Velona indray ny fanantenako\nDeraina ny anarany;\nNasandrany aho mba ho afak'ota\nTamin'ny Ràny soa.",
            "Endrey fitiavana, fahasoavana\nFa nanaiky ho faty\nHamonjy ahy very noho ny ota,\nHaleloia! Afak'aho."
        ]
    },
    {
        "title": "IZA RE NO HANDEHA",
        "number": 286,
        "verses": [
            "Injao feo avy any am-pitan-drano\nAntson'ny famoizam-po izao\nAntson'ny fanahy anaty aizina\nMiandry ny mazavan'i Jeso\nHenoy ny mpiasa manao hoe;\nInona no hataoko, Tompo ô?\nNy vokatra dia be, kanefa\nVitsy ny mpiasa.",
            "Moa te-hitantara ny Mpamonjy\nIzay nijaly ho an'ireo ianao\nKa hanolotr'aina mba hamonjy\nHitory ilay Jeso Mpanafaka?\nMoa handeha hiari-pahoriana\nAry hitondra hazofijaliana\nFa voninahitra no vokatrao,\nTsara ny diany.",
            "Hanaraka an'i Jeso izahay\nAmim-pifaliana, sitra-po koa\nIzy tsy handao na hanadino\nSakaizanay sy Mpampionona\nNa ho ranomasina izany\nNa ho efitra no hitondrany\nDia mbola tokinay Kristy\nMpamonjy\nDerao Izy.",
            "Raha efa nandray ny Fanahy\nFeno fitiavana ny fonay\nMpanambara ny filazantsara\nHo amin'ny firenen-drehetra\nAry raha voatorinay izany\nKa nandre ny lavitra sy akaiky\nDia ho hitanay hiseho ny\nMpanjaka\nToy ny helatra",
            "Iza re no handeha any am-paran'\nNy tany\nMoa tia ireo olom-bery ianao?\nTsapanao ve fa sarobidy ireo?\nIza re no handeha ka hitory an'i\nJeso Mpisolo?\nIza no te-hamaly hoe:\n''inty aho iraho, Tompo ô'",
            "Izahay no handeha any am-\nparan'ny tany\nTianay ireo olom-bery ireo\nTsapanay fa sarobidy ireo\nIzahay no handeha ka hitory\nAn'i Jeso Mpisolo\nHamaly ny antsony hoe\nInty aho, iraho Tompo ô."
        ]
    },
    {
        "title": "IZAHO JESOSY TIA ANAO",
        "number": 342,
        "chorus": "O! henoy 'zao bitsika izao\n\"Izaho Jesosy tia anao\"\nOlombelona mety mandao\nFa Izy no momb'anao",
        "verses": [
            "Misy tokoa ireo olona\nMa'tsiaro tsy tiavina\nHalan'izao tontolo izao satria\nEfa manaraka ny Tompo",
            "Mety ho tia azy 'reo ianao\nFa izy ireo no tsy tia anao\nOdiany tsy fantatr'aza\nFa efa manomboka mivavaka.",
            "Matoa ny olona tsy mandray\nFa mankahala anao indraindray\nDia satria Jesosy efa tia\nSy nifidy anao ho Azy.",
            "Tsy aleo ve manan'Azy\nHo Mpiandry sy Mpampianatra\nHiaro sy hitantan' anao\nToy 'zay hatoky tena ho Hendry"
        ]
    },
    {
        "title": "IZAHO NO ANDRIAMANITRA MPANASITRANA",
        "number": 631,
        "verses": [
            "Izaho no Andriamanitra\nTompo mpanasitrana\nNalefako ireo Teniko\nHitsabo ny aretinao.",
            "Ianao no Andriamanitra\nTompo mpanasitrana\nNalefanao ireo Teninao\nHitsabo ny aretiko."
        ]
    },
    {
        "title": "IZAHO RAHA MIHIRA",
        "number": 340,
        "chorus": "Izaho raha mihira, misy zava\nkendreko\nDia ny hitory an'i Jesosy\nKa sady mampahery ny tenako aho\nNo mitondra ny hafatry ny Tompo.",
        "verses": [
            "Ekeko fa misy hira sesehena\nManerana an'izao tontolo izao\nFa ny hira izay ahazoam-pamonjena\nAo amin'i Jesosy no mamiko.",
            "Tsy vitsy fa maro ireo maty fanahy\nMila mandre ny feon'i Jesosy\nIzao hira izao dia fomb'anankiray\nHampitàko aminao ny hafany.",
            "Raha mihira aho dia aoka tsy izaho\nNo hanintona ny sain'izay mandre\nFa Jesosy ihany, izay miantso hoe\nMinoa Ahy, dia ho sambatra ianao.",
            "Iriko mba ho ny Fanahy Masina\nNo hibitsika ao am-pon'ny olona\nKa ho maro ireo ho resy lahatra\nHanapa-kevitra ho an'ny Tompo"
        ]
    },
    {
        "title": "IZAHO SY NY ANKOHONAKO",
        "number": 593,
        "verses": [
            "Anaty ady na anivom-pifaliana\nIzaho sy ny ankohonako,\nHatramin'ny zanako.\nHanompo ny Tompo izay hany\nMpanafaka\nMandritra ny androm-piainanay ety",
            "Andeha isika hiaraka\nHandroso hanao ady masina\nHandresy fahavalo\nMisikina hery\nMiorena amim-pinoana\nHo avy ny fotoana mbola hitsaharana",
            "Inona ary no mbola misakana anao\nTsy hanompo an'ilay Andriamanitra\nMpamonjy\nHararaoty ny andro azo\nhanaovan-tsoa\nTsy ho very maina izay fiezahanao.",
            "Izaho sy ny ankohonako\nHanompo an'i Jesosy (in-2)\nIzaho sy ny ankohonako hanompo\nAzy\nMahatoky sy mpamindra fo Izy\nIzaho sy ny ankohonako Hanompo\nan'i Jesosy."
        ]
    },
    {
        "title": "IZAO ANIO IZAO MANATONA AN'I JESOSY",
        "number": 604,
        "verses": [
            "'Zao anio izao,\nManatona an'i Jesosy hanova Anao,\nHamela anao tanteraka Izy\nNy ranomaso ho fafany\nAza miahotra, manatona,\nNy fijalianao ho foana\nNy otanao taloha tsy hotsarovany\nMinoa fa manafaka Izy.\nHampifaly anao sy hanome anao ireo hira mahasondriana\nRaha miantso Azy hianao\ndia hamaly Izy\nHoderaina: Haleloia."
        ]
    },
    {
        "title": "IZAO DIA HODY AHO",
        "number": 29,
        "chorus": "Hody aho, hody aho\nTsy haniasia\nNoho ny fahasoavanao\nTompo ô! Inty aho",
        "verses": [
            "Nirenireny lavitra Anao\nIzao dia hody aho\nNy lalan'ota nodiaviko\nIzao dia hody aho",
            "Fa taona maro no laniko\nIzao dia hody aho\nMibebaka, mitomany koa\nIzao dia hody aho",
            "Nania sy sasatry ny ota\nIzao dia hody aho\nMatoky ny fitiavanao\nIzao dia hody aho",
            "Fanahy marary, ory ny fo\nIzao dia hody aho\nVaovao ny heriko, velona aho\nIzao dia hody aho"
        ]
    },
    {
        "title": "IZAO NO BAIKO \"MAZOTOA\"",
        "number": 32,
        "chorus": "f. 1 Ma-zo-to-a\nf. 2 Mazotoa re zay no didy\nho an'ny Tomponao\n\nf. 1 Ma-zo-to-a\nf. 2 Zoto amin'ny adidy\n'zay no baiko azonao.\n\nf. 1 Ma-zo-to-a\nf. 2 Zoto mahataona ny hafa\n'zay no ilàna anao.\n\nf. 1 sy f. 2 Tsy mba ho faty ny asa\n'zay atao amin-joto",
        "verses": [
            "Herezo ny asa nomeny;\nAn-tsitrapo marina;\nVonona hanampy hatrany\nn'aiza ilana Anao.\nMiraisa saina hatrany\nAtambaro ny hery,\nMandehana amin-joto\nNy tsara no mba kendreo.",
            "Mitomboa zoto ho Azy,\nManaraka ny tsara,\nDia ny làlany marina,\nMandray'zay mety ho lazainy,\nMamela'zay fihetseham-po,\nFamindram-po no sitrany\nAraka ny teniny,",
            "Hahazoam-balisoa ny zoto,\nNoho ny vokatra azo,\nAmin'ny fampitomboana,\nNy fanjakany ety;\nNy fanahy izay nomeny (ho)\nHo asa sy am-bavaka\nFa rehef'any an-danitra\nHomem-boninahitra"
        ]
    },
    {
        "title": "IZAO TENAKO IZAO",
        "number": 28,
        "verses": [
            "Izao tenako izao tsy manana\nAfa-tsy ny rà narotsakao\nSy ny feonao izay miantso ahy\nRy Zanak'Ondry o! Inty aho",
            "Izao tenako izao mangozohozo\nKa mila hisalasala\nAdy ivelany, tahotra anatiny\nRy Zanak'Ondry o! Inty aho",
            "Izao tenako izao, vonona ny fonao\nKa mety handray'zao foko izao\nMba hanova ahy manontolo\nRy Zanak'Ondry o! Inty aho",
            "Izao tenako izao, ory sy mahantra\nHarena, fanasitranana\nSy izay ilaiko, aminao avokoa\nRy zanak'Ondry o! Inty aho.",
            "Izao tenako izao, ny fitiavanao\nNo namelanao heloka\nHo anao aho manomboka anio\nRy Zanak'Ondry o! Inty aho"
        ]
    },
    {
        "title": "IZARAO FIFALIANA",
        "number": 317,
        "chorus": "Izarao fifaliana\nItondray fahazavana\nAmin'ny tenin'ny vava\nSy ny asa atao\nNy manodidina anao.",
        "verses": [
            "Efa nahazo maimaimpoana\nKoa manomeza maimaimpoana\nNataon'i Jesosy ho mpanarato\nFanahy ho Azy ianao.",
            "Tsy ny hakelezan'ny talentanao\nNo anomezan'ny Tompo\ntsiny anao\nFa ny fandevenanao izany\nNoho ny fahalainanao.",
            "Fanaovana ny asan'ny Tompo\nNy mivavaka ho an'\nny voahosony;\nAry mahafoy izay anananao\nAndro, tena, vola, hery.",
            "Amin'ny alàlan'ny tongontsika\nNo andehanan'i Jesosy ety\nAmin'ny alalan'ny vavantsika\nNo itenenany ety."
        ]
    },
    {
        "title": "IZAY ITOERAN'NY FANAHY",
        "number": 417,
        "verses": [
            "'Zay itoeran'ny Fanahin'ny Tompo\nNo misy fiadanana sy hery\nMisy fitiavana sy fanampiana\nMisy fampiononana\nAo amin'ny Fanahin'ny Tompo."
        ]
    },
    {
        "title": "IZAY MAHARESY",
        "number": 319,
        "chorus": "Ny mihemotra tsy sitrany\nFa ny mandroso no tiany;\nKa izay maharesy dia\nHiara-manjaka Aminy.",
        "verses": [
            "Toy ny ady ny fiainan'ny\nMpanara-dia an'i Jesosy\nMila fiaretana tokoa\nAmin'ny fahoriana manjo.",
            "Ilay ratsy no fahavalo\nMierona toy ny liona\nMiambena aza mimalo\nMiorena amin'ny finoana",
            "Misy fandrika indraindray\nEny an-dalana izorana\nKoa tandremo ny tenin'ilay\nKomandy Mpitarik'antsika.",
            "Tsy ny isantsika anefa no\nJerentsika fa ilay Tsitoha\nNy fahavalo asiana\nFa ny namana ampiana.",
            "Miezaka hampiverina\nAn'ireo kivy satana;\nAoka ianao hifahatra\nDia hisatro-boninahitra."
        ]
    },
    {
        "title": "IZAY MANETSIKA NY FOKO",
        "number": 445,
        "chorus": "Izay manetsika ny foko,\nDia Jesosy amiko;\nFa ny tsara indrindra\nNo hitako amin'ny Tompo",
        "verses": [
            "Izay re no hampifaly fo toa\nan'i Jesosy,\nMarina sy sarobidy,\nFitahiana ho azy Izy",
            "Fitiavana nomena, fahasoavan-dehibe\nFamindram-po avo loatra,\nLalina toa rano koa.",
            "Fanavotana izay mampitolagaga re,\nOta efa toy ny jaky,\nTonga oram-panala,",
            "Izay ilaina rehetra dia\nomen'ny tànany\nIankinako ilay\nHerin'Andriamanitra",
            "Eo amoron'ny ony madio,\nMbamin'ny voavotra,\nNo hiderako mandrakizay ny\nMpanjakako"
        ]
    },
    {
        "title": "IZAY NATAONY TAMIN'NY HAFA",
        "number": 296,
        "chorus": "'Zay nataony tamin'ny hafa\nDia hataony aminao koa\nSatria Jesosy ho an'\nizay mino Izy\nKa tia anao, satria tia ahy\nTia antsika Jesosy",
        "verses": [
            "Aiza no famonjena ny babo?\nAo amin'i Jesosy;\nAiza no hiarenan'ny lavo?\nAo amin'i Jesosy.",
            "Aiza no halehan'ny sasatra\nAo amin'i Jesosy,\nAiza no mankany an-danitra?\nAo amin'i Jesosy",
            "Aiza re no misy fitahiana?\nAo amin'i Jesosy\nAiza koa no misy fifaliana?\nAo amin'i Jesosy.",
            "Aiza no misy an'i Jesosy?\nMivavaha amin'ny fo;\nMoa handray mpanota toa ahy\nIzy\nAzo antoka tokoa"
        ]
    },
    {
        "title": "IZY NO LALANA",
        "number": 788,
        "chorus": "Lalana, Fahamarinana, Fiainana\nIzy no hany Tompoko\nTsy ho tonga any amin'ny Ray\nRaha tsy Aminy, koa hanompo Azy aho",
        "verses": [
            "Teraka ho olona fa mandrakizay\n'Lay tena mazava 'zay nividy ahy\nFo mangetaheta fahafahana\nNanarahako io Mpitarika io.",
            "Gaga ianao satria tsy mba\nfantatrao\n'Lay Mpanjaka 'zay mamela heloka\nMpanjaka nietry tamin'ny olony\nNisatroka tsilo nefa nandresy."
        ]
    },
    {
        "title": "IZY NO MPAMONJIKO",
        "number": 767,
        "verses": [
            "Izy no Mpamonjy ny fanahiko\nJesosy, Jesosy\nIzy no Mpamonjy ny fanahiko\nTiako mandrakariva\nJesosy, Jesosy, Jesosy, Jesosy",
            "Eny Izy no Tompon'ny fiainako\nJesosy, Jesosy\nEny Izy no Tompon'ny fiainako\nTiako mandrakariva\nJesosy, Jesosy, Jesosy, Jesosy"
        ]
    },
    {
        "title": "JEHOVAH NO MPIANDRY AHY",
        "number": 541,
        "verses": [
            "Jehovah no Mpiandry ahy\nTsy hanan-java- mahory aho\nMampandry ahy eo amin'ny\nAhi-maintso Izy\nJehovah no Mpiandry ahy\nTsy hanan-java -mahory aho\nMitondra amoron-drano\nFialan-tsasatra\nHamelombelona ahy Izy\nJehovah no Mpiandry ahy\nTsy hanan-java -mahory aho\nMitarika amin'ny lalan'ny\nFahamarinana noho ny Anarany"
        ]
    },
    {
        "title": "JEHOVAH NO REHAREHAKO",
        "number": 655,
        "chorus": "Miantso Anao aho Tompo ô (in-3)\nAry mamaly ahy Hianao.",
        "verses": [
            "Hianao no hany voninahitro\nHianao no hany mampitraka ahy\nTompo ô, Hianao no ampingako\nKa hany ataoko reharehako.",
            "Hianao no hany fialofako\nHianao no hany antoka ho ahy\nTompo ô, arovinao aho\nF'Hianao no ataoko fialofako.",
            "Hianao no hany Mpitarika ahy\nMandritra izao diako izao\nTompo ô, mombà ahy, aza mandao\nHianao no tena fahazavana."
        ]
    },
    {
        "title": "JEHOVAH NO TOMPO",
        "number": 366,
        "verses": [
            "Fantaro fa Jehovah no Tompo\nFantaro fa Jehovah no Tompo\nFantaro fa Jehovah no Tompo",
            "'Zaho no Tompo manasitrana\n'Zaho no Tompo manasitrana\n'Zaho no Tompo manasitrana",
            "Hianao Jesosy no tokiko\nHianao Jesosy no tokiko\nHianao Jesosy no tokiko"
        ]
    },
    {
        "title": "JEREO MANDRAKARIVA JESOSY",
        "number": 326,
        "chorus": "Maherez'atrakao ny lohanao\nJereo mandrakariva Jesosy;\nHo miramirana ny endrikao\nNoho ny fitiavany tao Kalvary.",
        "verses": [
            "Matetika misy andro manjombona\nAhitana antsika\nMitanondrika sy very hevitra,\nMalahelo endrika.",
            "Hajambain'ny ranomaso\nIndraindray\nKa mila tsy hahita\nAn'i Jesosy izay tsy lavitra fa\nMbola akaiky antsika.",
            "Noho ny alahelo mitambesatra\nLoatra amin'ny fontsika,\nDia toa tsy fantatsika fa Jesosy\nManjohy ny diantsika.",
            "Raha sendra tafiotra mahery ianao\nKa mila ho ketraka\nAntsoy Jesosy f'aza matahotra\nMahery ny vavaka."
        ]
    },
    {
        "title": "JEROSALEMA VAOVAO",
        "number": 55,
        "chorus": "Hosana! hira fiderana\nRaha mizotra ireo masina\nHo ao Jerosalema (in-2)\nHanofahofa sampan-drofia\nRehefa mandray ny fiandrianany\nIlay Mpanjakan'i Jerosalema",
        "verses": [
            "Rehefa tapitra ny asako\nHapetrako ny fiadiako\nHataoko veloma ny tany sy ny\nEnta-mavesany\nHihaona amin'ireo olo-malalako\nHampisatro-boninahitra\nAhy Kristy ao Jerosalema vaovao.",
            "Hazoniny ny tanako\nraha mangina ny lalako\nNa mandalo fitsapana sarotra\nItokiako Izy ka hanarak'Azy\naho satria\nHo fantatro izany ao Jerosa-\nlema vaovao",
            "Veloma no apetrako, ny rano-\nmasoko ho fafany\nAry ho hitako ny voninahiny\nFaly aho hifankahita amin'\nilay Mpanavotr'ahy\nRehefa tonga ao Jerosa-\nlema vaoavao",
            "Rehefa hirotsaka ho tafiky ny\nvoavonjy aho\nHanatrika ny tavan'ny Mpa-\nmonjiko\nHihira fiderana sy hitombo\nfitiavana tanteraka\nAo Jerosalema vaovao."
        ]
    },
    {
        "title": "JESO ANIE HOMBA ANAO",
        "number": 731,
        "chorus": "Tsy matory na rehandrehana\nIlay Mpiaro ny fanahinao\nTsy havelany hangozohozo,\nTsy hangozohozo ianao",
        "verses": [
            "Jesosy anie homban'anao, Jesosy anie\nHiaro anao amin'ny ratsy rehetra;\nNa inona fandrik'amin'izay aleha\nMatokia ny fitiavany tsy misy fetra",
            "Jesosy anie hitantana ny tànanao\nMba ho tafita soa hatramin'ny farany;\nNa ho mamy na mangidy no\nho anjaranao;\nMatokia fa tsy hamel' anao\nhiady irery Izy.",
            "Jesosy anie hiambina ny dianao\nKa ny Fanahy anie hanafy hery anao;\nNy Tompo anie hitsangan'\neo anilanao,\nHanome toky sy hampahery ny\nfanahinao.",
            "Jesosy anie hanazava ny fitànao\nIlay ony maizin'i Jordana farany;\nIzy no hitarika ny làlanao mankao\nAmin'ny tànana soan'ny tenifikasana."
        ]
    },
    {
        "title": "JESO ETO HIANAO",
        "number": 661,
        "verses": [
            "Jeso, eto Hianao (in-2)\nNy foko no milaza\nFa eto Hianao Jeso (in-2)",
            "Jeso Tompo Hianao (in-2)\nMankalaza Anao\nFa Tompo Hianao",
            "Jeso, Andriamanitra (in-2)\nNahary izao rehetra izao\nAndriamanitra Hianao",
            "Fanahy Masina ô (in-2)\nMpitari-dàlana\nFenoy Anao izahay"
        ]
    },
    {
        "title": "JESO FANANTENAKO",
        "number": 431,
        "verses": [
            "Jesosy fanatenako\nJesosy hany harenako,\nHianao no itokiako\nMandra-pahafatiko,\nAvy aminao ny fiainako\nSy ny fiadanako\nAo aminao fifaliako\nHo velona aho doria.",
            "Jesosy! Ireo otako\nNitondranao fijaliana,\nAmpio aho ho mahatoky\nHo tia ireo fitsipikao,\nHianao tsy mampitondra ahy\nMihoatra izay zakako\nTakalon'ny angatahinao\nHanome ny tànanao",
            "Ny fivavako no iriko\nHampifaly ny foko,\nHo avy amin'ny vovoka\nAn-danitra any Aminao\nAny no tanindrazako\nTanin'ny faniriako\nIzany no hetahetako.\nJesosy, ho ao an-dapanao."
        ]
    },
    {
        "title": "JESO ILAY SAKAIZA SOA",
        "number": 219,
        "verses": [
            "Jeso 'lay sakaiza soa\n'Zay mitondra ny otanao\nTombon-tsoa anananao\nNy mivavaka Aminy\nRaha mavesatra entana ianao\nVery ny fiadananao\nRaha toa tsy entinao\nEo am-pivavahana.",
            "Zahan-toetra va ianao\nBe ny fahoriana?\nAza mba ho mety kivy\nEnto amim-bavaka\nJeso tena mahatoky\nMitondra ny alahelonao\nFantany ny halemenao\nEnto amim-bavaka.",
            "Vesaran'entana ianao\nFeno ahiahy koa?\nEnto amim-bavaka amin'i\nJesosy aronao\nNandao anao ireo sakaiza\nEnto amim-bavaka\nEo an-tanany ianao\nHanam-piononana."
        ]
    },
    {
        "title": "JESO MALALA O!",
        "number": 599,
        "verses": [
            "Jeso Malala ô hany harenako\nHianao manome ny fitiavanao\nNy foko tia no mankalaza Anao\nSy mivavaka Aminao\nHaleloia (in-2)\nZana'Ondry mendrika Hianao\nHaleloia (in-2)\nMankalaza Anao Tompo ô."
        ]
    },
    {
        "title": "JESO MPANJAKA MALAZA",
        "number": 503,
        "chorus": "Ry Tompo Mpanjaka\nMahery ô! Mihainoa! mihainoa!\nAvy manaiky tokoa izahay\nFa Tompo ny hery rehetra Ianao\nTsy misy mihitsy ny toa Anao\nTsy tratrin'ny saina ny herinao.\nNy fiderana izay entinay.\nRaiso re raiso re\nNy haja atolotra Anao ety,\nRaiso izao.",
        "verses": [
            "Jeso, Mpanjaka malaza\nNo Tompo Mpanjakanay;\nMahery sy tsara indrindra\nKa Izy no aronay.\nMendrika ny hankalazaina\nNoho ny heriny\nEran-tany sy lanitra koa\nNy zo aman-dazany",
            "Tompo, Mpanjaka hendry\nMpanao izao rehetra izao\nNy zara sy tendry ataony\nDia tsara sy mahasoa\nMendrika ny hoderaina\nNy fandaharany;\nAtolory Azy ny saotra\nFa Izy tandrifin'io",
            "Tompo Mpanjaka tsitoha\nKanefa be indrafo\nDeraina eram-po eran-tsaina\nDeraina mandrakizay\nHe! ny mpanompo voavonjy\nSamy mihoby hoe:\n\"Haleloia ho amin'ny Avo,\nFa Jeso no Tomponay\"!"
        ]
    },
    {
        "title": "JESO MPANJAKA MAMPIFALY FO",
        "number": 89,
        "verses": [
            "O! mahagaga ny asa nataony\nTsy hay hadinoina koa\nAfaka tao anatin'ny aizina,\nJesosy namonjy ahy;\nNamindra fo ary nianatra ré!\nAto am-poko ny hafaliana\nAoka hira-hidera sy hifaly\nSatria namonjy ahy sy Hianao.",
            "O! miandrandra ny lanitra aho\nRehefa tonga Jeso;\nNefa raha tonga mialoha ny androko\nHandray tanana ahy Izy.\nHitovy endrika eo aminy\nDia ho tahaka Azy aho.\nNdeha hiara-dia Aminy mandrakizay\nAn-danitra mamiratra.",
            "Jeso Mpanjaka no mapifaly fo,\nNanafak'ahy, namonjy ny Fanahy,\nNafahany tokoa ny otako be,\nKoa fantatro ny asa vitany."
        ]
    },
    {
        "title": "JESO NO MPIANDRY AHY",
        "number": 483,
        "verses": [
            "Jeso no mpiandry ahy (in-2)\nEo amoron-drano sy ahi-maintso\nKoa\nManarak'Azy aho,\nKa mandray fiainana;\nJeso no Mpiandry ahy,\nIzaho no ondriny."
        ]
    },
    {
        "title": "JESO SAKAIZANAY",
        "number": 131,
        "verses": [
            "Jeso Sakaizanay, Jeso anay\nSady tsy mahafoy, Jeso anay\nRaha ny olona mety mandao anay\nJeso no tsy mandao, Jeso anay.",
            "Jeso Sakaizanay, Jeso anay\nIzy no avotray, Jeso anay\nMaty ny Tomponay noho ny\nHelokay\nAfaka izahay, Jeso anay.",
            "Jeso Sakaizanay, Jeso anay\nIzy no Aronay, Jeso anay\nReraka izahay noho ny adinay\nJeso no herinay, Jeso anay.",
            "Jeso Sakaizanay, Jeso anay\nIzy no Làlanay, Jeso anay\nLàlana marina hahatongavanay\nAny an-danitra, Jeso anay.",
            "Jeso Sakaizanay, Jeso anay\nManana izahay, Jeso anay\nJeso Sakaizanay no hovantaninay\nAny an-danitra, Jeso anay."
        ]
    },
    {
        "title": "JESOSY ANARANA TSARA INDRINDRA",
        "number": 397,
        "verses": [
            "Jesosy: Anarana tsara indrindra\nMpamonjy soa,\nTompo be voninahitra\nImanoela\nAmintsika Andriamanitra\nLoharanom-pifaliana\nTenim-piainana"
        ]
    },
    {
        "title": "JESOSY FIALOFAKO",
        "number": 466,
        "chorus": "Ao amin'i Jesosy\nAo amin'i Jesosy ihany\nMpamonjy tia, mangoraka\nHany sakaizan'\nny mpanota",
        "verses": [
            "Amin'ny fotoana\nMahamaizina ny fiainako\nAfaka amin'ny satana\nAiza no halehako?",
            "Tsisy fialofana eto\nHo an'ny fanahy reraka\nAiza aho no hitoetra\nHiala sasatra?",
            "Mahantra aho, malemy\nFeno tahotra, loza\nMba ho afaka amin'ny ady\nAiza aho no halehako?",
            "Mitebiteby\nKetraky ny ota\nAiza ô! aiza aho\nNo hahita fanampiana?",
            "Faly aho anaty ady\nFinoana manafaka ahy\nJesosy: Famonjena ahy\nMitodika Aminao aho."
        ]
    },
    {
        "title": "JESOSY ILAY MPAMONJY",
        "number": 179,
        "verses": [
            "Jesosy ilay Mpamonjy mamiko tokoa\nIzy no efa nanasa ny foko\nVoavela heloka aho\nNoho ny Anarany\nNentiny ireo entako, voavonjy aho\nKoa irinao ve ny hanam-pifaliana\nAndrandrao ka jereo Golgota\nDia hiarak'amiko hidera ny Tompo\nIanao ka hihira hoe: Haleloia!"
        ]
    },
    {
        "title": "JESOSY IRERY NO MAHARITRA",
        "number": 61,
        "chorus": "Jesosy irery no maharitra\nNy tany sy ny lanitra kosa ho levona.",
        "verses": [
            "Anatin'ny tahotra sy famoizam-po\nMisy sakaiza iray eo anilanao.",
            "Rehefa mikija ny oram-baratra\nKristy fitiavana eo anilanao.",
            "Amin'ny ora izay hahafatesana,\nDia mbola Jesosy no eo anilanao"
        ]
    },
    {
        "title": "JESOSY KAPITENINAY",
        "number": 201,
        "verses": [
            "Jesosy Kapiteninay\nIzao miantso 'zao\nHiady no hilàna anay\nKa zovy no hanao?\nIzay mahafy hatraty,\nMahery fo tokoa\nKa tsy miraika hatrarỳ,\nIreny no hanao.",
            "Ny tany hotafihinay\nIzao tontolo izao\nNy tafika hikatrohanay\nTsy ady mora atao\nNy ota no hasianay\nHo ringana avokoa\nNy tany no hasondrotray\nHo Paradisa soa.",
            "Indreo ny maritiora soa\nNo loha-làlanay\nNalatsaka aina avokoa\nKa marika aminay\nFandava-tena lehibe\nNo vitan'izy ireo\nOdian-tsy hita foana ve\n'Reo maritiora ireo?",
            "Ry Jeso Kapiteninay\nIzao anio izao\nNo anavaozanay indray\nNy fanompoana Anao\nAtolotray Anao tokoa\nIzao tenanay izao\nKa hamasino avokoa\nHanao ny sitrakao."
        ]
    },
    {
        "title": "JESOSY MALALA O!",
        "number": 402,
        "verses": [
            "Jesosy malala ô. Fatratra Ianao\nTsara noho ny kintana\nTsara mihoatra noho ny\nLilia ao an-dohasaha\nSoa noho ny volamena\nIanao no tahaka ny\nRaozin'i Sarôna\nIanao no kanto indrindra,\nJesosy malala ô\nSarobidy noho\nny volamena Ianao"
        ]
    },
    {
        "title": "JESOSY MAMALY VAVAKA",
        "number": 3,
        "chorus": "Ianteheronao, ny fitiavany\nApetraho Aminy ny entanao\nOmeo Azy koa ny fanahianao;\nMamaly vavaka Jeso.",
        "verses": [
            "Tenin'i Kristy no iantehero\nSy ametraho ny fanahianao\nAntsoy Izy fa hamonjy anao\nMamaly vavaka Jeso.",
            "Raha manafiotra ny fiainanao,\nToa tsy zakanao ny entanao,\nManatona f'Izy hanampy anao;\nMamaly vavaka Jeso.",
            "Manatrika adin-tsaina ve ianao?\nMikintoana vé ny làlanao?\nJereo Jeso mitarika anao\nMamaly vavaka Jeso."
        ]
    },
    {
        "title": "JESOSY NO ANTON'NY FIAINAKO",
        "number": 555,
        "verses": [
            "Tsaroako ireo androm-pahoriana\nTsy nisy mba nampahery ahy\nReraka sy kivin'ny miaina\nJesosy no nampitraka ahy",
            "Raha manitraka ady mafy\nAza mety hilofika\nMitraka, mahereza hatrany\nMahery ilay Mpitarika",
            "Miezaha hatrany hahatsapa\n'lay fitiavana mahatalanjona\nMivavaha hatrany tsy miato\nJesosy irery no iankino",
            "Jesosy no anton'ny fiainako\nZava-drehetra izy\nAfa- mandeha tsy amin- tahotra aho\nFa anilako Izy"
        ]
    },
    {
        "title": "JESOSY NO FANALAHIDINY",
        "number": 197,
        "verses": [
            "Mahatsiaro irer'ianao\nMitady fah'sambarana?\nTsy nahit'hatramin'izao\nKa indro atoroko anao\nNy fanalahidiny dia Jesosy,\nNy fah'sambarana dia Aminy.",
            "Te-hahita fifaliana\nEo amin'ny fiainanao ve?\nIndro ny zava-miafina\nIzay azoanao raisina\nNy fanalahidy dia Jesosy,\nNy fifaliana ho anao dia Jeso.",
            "Mavesatra ve ny fonao?\nManiry ny fiadanana?\nMikatsak'izany hianao\nKa indro atoroko anao,\nNy fanalahidy dia Jesosy,\nNy tena fiadanana dia Jeso.",
            "Moa te-hamela heloka?\nNefa toa tsy hainao atao?\nManiry izany ny fonao\nKa indro atoroko anao\nNy fanalahidy dia Jesosy,\nNy famelan-keloka Aminy.",
            "Mikatsaka fitiavana,\nNefa tsy mahit'hatrizao\nAfa-tsy fahorian-tsaina\nKa toa mijaly fatratra\nNy fanalahidy dia Jesosy,\nNy tena Fitiavana dia Jeso.",
            "Ny fahasambarana, fifaliana\nNy famelan-keloka dia Jeso\nNy fiadanana, famelan-keloka\nNy tena Fitiavana dia Jeso"
        ]
    },
    {
        "title": "JESOSY NO FIAINAKO",
        "number": 398,
        "verses": [
            "Jesosy no fiainako sy fifaliako\nNy heriko isan'andro\nZava-drehetra amiko\nRaha ory ny fanahiko\nMankeo Aminy aho\nDia indro fa fifaliana no ahy,",
            "Jesosy no sakaizako\nRaha sedraina aho.\nManatona Azy aho dia ampiany\nBe dia be\nAposany ny masoandro\nArotsany ny orana\nTaon-jina fitahiana no omeny.",
            "Zava-drehetra amiko, tena Sakaiza\nMahatoky Jesosiko\nHo marina Aminy aho;\nTsy hivadika sanatria;\nFa hanarak'Az'ihany\nIzy kosa hiambin'ahy hatrany,",
            "Mba ho sakaiza tsara koa\nno iriko izao\nHo mahatoky Aminy\nHatramin'ny farany;\nDia fiainan-tsambatra\nIzay any an-danitra\nNo homeny mandrakizay ho ahy,"
        ]
    },
    {
        "title": "JESOSY NO FIAINANA SY FAHAZAVANA",
        "number": 519,
        "verses": [
            "Fiainana, fahazavana\nZanak'Andriamanitra\nNojereko ilay hazo\nNatolotro ny fiainako\nNy hazavanao namaky ny alina",
            "Fiainana, fahazavana\nZanak'Andriamanitra\nNovohako ny foko,\nNoraisiko ny fiainana\nHianao nanafaka ahy tamin'ny\naizina."
        ]
    },
    {
        "title": "JESOSY NO FIDIKO",
        "number": 205,
        "chorus": "Feo I sy II\nJesosy no sakaiza ho fidiko\nn' inona ilaiko dia homeny\nNandramako Izy ka tsara\nJesosy no fidiko mba ho ahy\nFeo III sy IV\nEny, ny Mpamonjy no\nFidiko ho Mpanampy ahy,\n'Zay ilaiko, fantatro fa homeny\nmalalaka\nNandramako hatrany\nKa tsara sady marina,\nNy Mpamonjiko no fidiko mba\nho ahy.",
        "verses": [
            "Raha mila olona iray\nIzay ho fifaliako aho\nJesosy re no ho fidiko\nFa mampionona ahy",
            "Raha mila olona iray izay\nHitarik' ahy aho\nOmeko an'i Jesosy\nNy fiadidian' ahy.",
            "Raha mila ampinga ho ahy aho\nHandreseko ny rafy,\nJesosy no hiarahako\nAmim-pinoana.",
            "Raha hiala ety ka hanatrika\nNy ony maizina aho,\nJesosy, kosa hitondra ahy\nHo ery am-pita."
        ]
    },
    {
        "title": "JESOSY NO HIRAO",
        "number": 603,
        "chorus": "Koa andeha re isika hiaraka hihira\nHidera amin'ny fo\nJeso Tompontsika\nEndrey ny fifaliana\nRaha mihira ho Azy\n'Zany no iainako,\nTiako ny hisaotra Azy.",
        "verses": [
            "Maro ireo hira mahaliana\nTiana averimberina\nHampitony alahelo,\nHeverina hahasoa\nTsara noho izany anefa ny mihira ho\nan'ny Tompo\nIzay hany hanampy\nHanome fahafaham-po",
            "Mihira hanan-daza\nMihira hanan-karena\nNefa indrisy,\nFahadisoam- panantenana\nTsy hahomby intsony,\nHitsahatra avokoa\nNy hiran'ny Jesosy\nIrery no ho re."
        ]
    },
    {
        "title": "JESOSY NO ITOKIAKO",
        "number": 781,
        "chorus": "Jesosy no homba anao\nHatramin'ny farany,\nSatria izy no sakaiza\nAzo itokiana.",
        "verses": [
            "Raha mandreraka ny làlana,\nKa toa hivily ianao;\nItokio Jesosy fa Izy,\nNo hitantana ny dia.",
            "Fahanginana sa alahelo\nNo zakain'ny fonao;\nDia Jesosy no itokio,\nHiara- mitondra aminao.",
            "Raha misy fakam-panahyizay\nMitaona isan'andro,\nDia Jesosy no itokio,\nFa handresy ianao.",
            "Rehefa vita ny asako,\nKa tody ery am-pita;\nHiara- mandeha amin'ny Tompo,\nNo fiononana ho ahy."
        ]
    },
    {
        "title": "JESOSY NO MAHALALA",
        "number": 281,
        "chorus": "Eny, Izy no mahalala tsara\nKa miantso hoe:\n\"Mankanesa aty\"\nAvelao Aminy ny ho avinao\nNa ho inona, Jeso mahalala.",
        "verses": [
            "Mampitanondrika ve ny entanao?\nSasatry ny lalan-davitra aleha\nMahereza hatrany, misy tia anao\nJereo Jesosy, Izy mahalala",
            "Fal'Izy hiara-mitondra aminao\nEntana, fahoriana, fifaliana\nFantany tsara ny lalana aleha\nMahereza fa Jeso mahalala",
            "Mifanena aminao ny fakam-panahy\nTojo olana manahirana koa\nMatokia, hainy ny zava-drehetra\nManompoa Azy, Jeso mahalala.",
            "Ry rerak'am-po, miantso Jesosy\nMoa mihasarotra ny làlanao?\nApetraho eo an-tànany avokoa\nNa ho inona, Jeso mahalala."
        ]
    },
    {
        "title": "JESOSY NO MITADY ANAO",
        "number": 310,
        "chorus": "Tsy iza fa Jesosy\nJesosy no mitady anao\nIzy no zanaky ny Ray\nIzay tia ahy sy tia anao\nEny, Jesosy no mahalala tsara\nNy zavatra mahazo anao\nMatokia, aborahy Aminy avokoa\nNy tsiambaratelonao.",
        "verses": [
            "Misy Olon'iray mitady anao\n'Zao ankehitriny izao;\nEfa hatramin'ny ela no naniriany\nMba hiresak'aminao;\nImbetsaka Izy no nanafatra anao\nTamin'ny alalan'ireo\nOlona samihafa 'zay nifandimby\nToy izao anio izao.",
            "Misy Olon'iray be fitiavana\nNahita ny fijalianao;\nHeniky ny aretina sy ny ota\nMitanondrika lava izao;\nTonga Izy miaraka amin'ireo\nFanafody tena ilainao\nDia ny dian-kapoka sy ny ràny\nIzay fanekena vaovao.",
            "Misy Olon'iray nahita anao\nVoababon'ny satana\nToa tsy manana safidy intsony fa\nAndevon'ny fahotana\nTonga Izy handrava ny asan'ilay\nMpandainga sy mpamitaka\nAry ho fitsaharan'ny fanahy izay\nReraka sy sasatra.",
            "Misy Olon'iray mpisolo vava\nIreo voafatotra:\nKa na inona karazan'ota natao\nDia Izy no Mpanafaka:\nIza no hiampanga sy hanohitra\nIreo olom-boafidy\nAndriamanitra no manamarina\nIzay ao amin'i Kristy."
        ]
    },
    {
        "title": "JESOSY NO MPANAMORIKO",
        "number": 496,
        "verses": [
            "Manarona ahy ny fitiavan'i Jesosy\nTahaka ny ranomasin-dehibe;\nJesosy no Mpamily ny\nSambokelin'ny fiainako\nEty ambony rano be\nMitarika ahy Izy."
        ]
    },
    {
        "title": "JESOSY NO MPANJAKA",
        "number": 542,
        "verses": [
            "Deraina Jesosy (in-2)\nFa Hianao no Mpanjaka\nMihoby ny tany\nNy olonao mitory\nMpanjaka Hianao Jesosy."
        ]
    },
    {
        "title": "JESOSY NO SAINIKO ALOHA",
        "number": 158,
        "chorus": "Jesosy no sainiko aloha\nNy maraina vao mifoha\nJesosy indray no sainiko\nAmin'ny alina koa.",
        "verses": [
            "Mpamonjy nanafak'ahy Jesosy\nNahazoako ny zava-drehetra Izy\nNy fahafatesana noreseny\nAtolotr'Azy ny fiderana.",
            "Ry Mpanasitrana ô! Ampio aho\nHo salama sy ho matanjaka\nAsehoy ny herinao ry Tsitoha\nEo amin'ny fanompoako Anao.",
            "Jesosy ô, aok'ho tehirizinao\nHaharitra ny finoako Anao\nAry ao anatin'ny adim-panahy\nTariho sy tohano handresy aho.",
            "Mpanjaka mbola ho avy indray\nHanjak'amim-boninahitr'Izy\nKoa amin'ny fifalian-dehibe\nNo mbola hihaonako Aminy re."
        ]
    },
    {
        "title": "JESOSY NO TIAKO HO HITA ALOHA",
        "number": 720,
        "chorus": "Jesosy no tiako ho hita aloha\nIzy no tompon'ny finoako;\nHahita ireo olo-masin'any aho,\nNefa jeso no tiako ho hita aloha",
        "verses": [
            "Tiako ny hahita ny zav-tsoan'ny\nlanitra\nIzay tsy mbola hitan'ny maso\nRehefa mivoha ny varavaran'ny\nlanitra,\nNefa Jeso no tiako ho fita aloha.",
            "Tiako ny hahita ny tanàna volamena\nHonenan'ny olom-boafidy,\nNy hazon'aina eo amoron'ny\nranon'aina,\nNefa Jeso no tiako ho hita aloha.",
            "Ireo mahery fo notantaran'ny Baiboly\nTamin'ireo fokom-pirenena,\nNa ireo havako samy samy ho\nhitako ireo\nNefa Jeso no tiako ho hita aloha."
        ]
    },
    {
        "title": "JESOSY NO VATO VELONA",
        "number": 331,
        "chorus": "Koa atolotray anao anio\n'Lay noraisinay dia Jesosy\nIzay maty ho an'izao tontolo izao\nAry koa nitsangana ho fanamarinana\nIzay manaiky Azy amin'ny vavany\nAry mino Azy amin'ny fony.",
        "verses": [
            "Jesosy no vato velona sy vato\nfehizoro\nAzon'izay mila famonjena\nhatonina Izy\nMaro ny vavolombelona efa\nNahatsapa fitahiana\nRa'nanandrana ny hatsaran'ny\nfitiavany.",
            "Jesosy no Làlana sy fahamarinana\nary koa\nFiainana mandrakizay ho an'izay\nmino\nIreo izay nanapa-kevitra ka nandray\nAzy ho Tompony\nDia nahatsapa fifaliana lehibe tao\nam-pony.",
            "Jesosy no nahariana ireo zavatra\nrehetra\nIzy no fiandohan' ary fiafarana\nIzy no nisim-piainana sady\nfahazavana\nHo an'ny olona izay mitoetra ao\nAmin'ny maizina.",
            "Jesosy no Zanak'Andriamanitra\nNitafy nofo\nTonga mba hitady sy hamonjy ny\nolom-bery\nKintana mamirapiratra mahatoky\nsady marina\nDia Kristy fahendrena sy\nherin' Andriamanitra."
        ]
    },
    {
        "title": "JESOSY NO VATOLAMPIN'NY FOKO",
        "number": 557,
        "chorus": "Jeso Vatolampin'ny foko\nLovako sy harenako\nJesosy no vatolampin'ny foko\nMiadana aho anilanao",
        "verses": [
            "Ianao irery any an-danitra\nTsy misy iriko tahaka Anao\nety an-tany\nNa reraka na lavo ihany koa\nJesosy Vatolampin'ny foko",
            "Raiso ny foko iantrao re aho\nIanao no iorenako tsy hisalasala aho\nMatoky aho satria tantananao\nRy Jesosy Vatolampin'ny foko",
            "Fiadanana, fifaliana\nFoana ny tahotra sy izay fanahiana\nSatria Ilay Tompon'ny Tompo\nNo hany vatolampin'ny Foko."
        ]
    },
    {
        "title": "JESOSY NO ZAVA-DREHETRA",
        "number": 523,
        "verses": [
            "Zava-drehetra Jesosy (in-3)\nZava-drehetra amiko Izy",
            "Maty ho ahy Jesosy (in-3)\nZava-drehetra amiko Izy",
            "Mivavaka ho ahy Izy (in-3)\nZava-drehetra amiko Izy",
            "Omeny izay ilaiko (in-3)\nZava-drehetra amiko Izy"
        ]
    },
    {
        "title": "JESOSY O INTY AHO",
        "number": 517,
        "chorus": "Jesosy Sakaiza\nMpiaro mahatoky\nMpanjaka ho doria Hianao\nOmeo finoana aho tsy hisalasala\nTariho amin'ny tànanao aho",
        "verses": [
            "Raiso ny fiainako Jesosy be fitia\nF'Aminao misy loharanom-\npianinana\nOmeo finoana aho tsy hisalasala\nTariho amin'ny tànanao aho.",
            "Raha sendra reraka, diso làlana\nAmiko Hianao, satria fitiavana\nNy fijaliana, alahelo mameno fo\nNoho Hianao mandresy tahotra.",
            "Ankehitriny kosa be zava-poana\nMaro ireo olona maty fanahy\nRehefa nifanena Taminao aho\nNiova ny fiainako, afaka aho",
            "Jesosy Sakaiza, Mpiaro mahatoky\nMpanjaka ho doria Hianao\nRehefa nifanena taminao aho\nNiova ny fiainako, afaka aho"
        ]
    },
    {
        "title": "JESOSY O! FENOY ANAO IZAHAY",
        "number": 468,
        "chorus": "Jesosy o! Fenoy anao izahay\nJesosy o! fenoy anao izahay",
        "verses": [
            "'Lay Zanak'Andriamanitra\nManiry hisakambina Anao\nHameno anao manontolo\nAmin'ny fitiany\nOmeo Azy ny fiainanao\nAry ny Fanahin'ny fahazavana\nHidina ao aminao\nHanasitrana anao",
            "Ndeha ré hihira ny fitiavany\nSy ny famonjena nataony\nNy fonao aetreo eo amin'ny\nMpamonjy\nOmeo Azy ny ranomasonao\nSy ireo ahiahinao\nHiaina feno amin'i Jesosy hianao"
        ]
    },
    {
        "title": "JESOSY O! MAHAGAGA NY ANARANAO",
        "number": 506,
        "verses": [
            "Jesosy mahagaga ny Anaranao\nMhaino ireo ory Hianao\nTsinjonao ny olona mandohalika\nNy Anaranao no tsara indrindra",
            "Tiako ny midera ny Anaranao\nTsy miova Hianao mandrakizay\nNidina tety aminay Hianao\nNy Anaranao no tsara indrindra",
            "Mpanjaka mbola ho avy Hianao\nHarenanay ny fitiavanao\nHianao no tianay indrindra\nNy Anaranao no tsara indrindra"
        ]
    },
    {
        "title": "JESOSY O! MISAOTRA",
        "number": 396,
        "chorus": "Feno fifaliana\nNy fiainako izao\nJesosy ô, misaotra",
        "verses": [
            "Hidera Anao aho\nSatria tia ahy Hianao\nAtaoko izany\nHo fisaorana Anao",
            "Sarobidy amiko\nNy namonjenao ahy\nTamin'ny ranao soa\nVoavela heloka aho.",
            "Hatramin'ny anio\nRaiso ny fiainako\nManolo-tena aho\nMba ho mpanomponao."
        ]
    },
    {
        "title": "JESOSY TOMPO LEHIBE",
        "number": 268,
        "chorus": "Jeso tia, Jeso tia\nMaty voahombo\nMaty tany Kalvary\nMaty re ny Tompo.",
        "verses": [
            "Jeso, Tompo lehibe\nIraky ny Rainy\nNolatsain'ny maro be\nTsy mba nohajainy",
            "Ory loatra fahizay\nZanak'Ondry mora\nMaty mba ho solonay\nSady voakora",
            "Alahelo be nanjo\nNefa tsy nanota\nFa nijaly sitrapo\nTany Golgota",
            "Jeso no mpamonjy tia\nNahafoy ny ainy\nMba hamonjy 'zay mania\nHody amin-dRainy"
        ]
    },
    {
        "title": "JESOSY TOMPOKO TSY MIOVA",
        "number": 404,
        "chorus": "Haleloia (in-7)",
        "verses": [
            "Jesosy Tompoko tsy miova\nTsy miova Izy (in-2)\nJesosy Tompoko tsy miova\nTsy miova anio, mandrakizay",
            "Jesosy Tompoko mamonjy\nMamonjy Izy (in-2)\nJesosy Tompoko mamonjy\nMamonjy anio mandrakizay.",
            "Jesosy Tompoko mahery\nMahery Izy (in-2)\nJesosy Tompoko mahery\nMahery anio mandrakizay.",
            "Jesosy Tompoko mandresy\nMandresy Izy (in-2)\nJesosy Tompoko mandresy\nMandresy anio mandrakizay."
        ]
    },
    {
        "title": "KRISTY FA TSY IZAHO",
        "number": 778,
        "verses": [
            "Kristy no hasandratra sy deraina\nFa tsy izaho no fantatra sy re;\nKristy fa tsy izaho no ho hita\nAmin'ny saina sy ny asa atao.",
            "Kristy no aoka ho tsapan'ireo\nMalahelo sy ireo ory fo;\nKristy fa tsy izaho no hamafa,\nNy ranomaso sy ny tahotra.",
            "Kristy irery no aoka ho hita\nAmin'ireo asa sy zoto-po;\nKristy fa tsy izaho no mpanangona\nIreo very sy ireo 'zay mania.",
            "Kristy no aoka re ho manintona\nNy fijery sy ny faniriana;\nKristy no aoka ho zava- drehetra,\nDia voninahitra no miandry."
        ]
    },
    {
        "title": "KRISTY FA TSY IZAO",
        "number": 132,
        "verses": [
            "Kristy no hasandratra sy deraina\nFa tsy izaho ho fantatra sy re;\nKristy fa tsy izaho no ho hita\nAmin'ny saina sy ny asa atao.",
            "Kristy no aoka ho tsapan'ireo\nMalahelo sy ireo ory fo\nKristy fa tsy izaho no hamafa\nNy ranomaso sy ny tahotra.",
            "Kristy irery no aoka ho hita\nAmin'ireo asa sy zotom-po;\nKristy fa tsy izaho no mpanangona\nIreo very sy'reo'zay mania",
            "Kristy no aoka re ho manintona\nNy fijery sy ny faniriana\nKristy no aoka ho zava –drehetra\nDia voninahitra no miandry."
        ]
    },
    {
        "title": "KRISTY ILAY FANTSAKANA",
        "number": 492,
        "chorus": "Jesosy ô, sasao aho\nHo fotsy madio noho ny\noram-panala.",
        "verses": [
            "Natao ho fantsakan'ny mpanota\nHanasany ny loton'ny ota\nSy mpanafak'amin'ny ozona,\nJesosy Tompo 'lay tao Golgota.",
            "Ny asa sy fikelezan'aiko,\nDia fidiovana tsy mahomby\nFa Jesosy no Mpanavotr'ahy\nTsy ho tratry ny fanozonana.",
            "O! sasao ny fisainan'ny foko\nAmpio aho miangavy re\nHazavao isan'andro ry Tompo,\nMba hitombo sy hamoa be dia be",
            "Fotsy noho ny oram-panala\nIzay no tena ilaiko, izao\nIanao ry Kristy ô! malala.\nNy fantsakana mampody ho vao."
        ]
    },
    {
        "title": "KRISTY NO AHAVELOMAKO",
        "number": 625,
        "verses": [
            "Kristy no ahavelomako\nTombony ho ahy ny fahafatesana\nKristy no ahavelomako\nTombony ho ahy ny ho faty\nKristy no Mpanjaka\nAroko ka sambatra aho\nJeso no fifaliako.\nHiraiko, Tompoko Izy"
        ]
    },
    {
        "title": "KRISTY NO VELONA ATO ANATIKO",
        "number": 258,
        "chorus": "F'ankehitriny dia Jesosy\nNo velon'ato anatiko, Haleloia!",
        "verses": [
            "Niraparapa tao anaty\nAizin'ota aho taloha\nLavitra ny mazava sy ny\nFiadanana ny foko.",
            "Ny hany fanantenan'ny\nZanak'olombelona\nDia ny fahazavan'i Kristy\nIzay nanafaka ahy.",
            "Toy ny hazo na voninkazo\nTsy namoa aho taloha;\nNony voavonjy vao\nNamoa ny vokatry ny Fanahy.",
            "Izao no fanirin'ny foko\nHitovy Aminy;\nN'amin'ny fisainana,\nN'amin'izay rehetra atao."
        ]
    },
    {
        "title": "LALAMBY MANKANY AN-DANITRA",
        "number": 275,
        "chorus": "Miandry ireo anjely\nany an-danitra izao\nMba hiaraka hidera\nan'i Jeso isika.",
        "verses": [
            "Toy ny lalamby mamakivaky\nTendrombohitra\nNy fiainantsika ety, feno\nlàla-miolaka\nTsy maintsy tanterahina\nHatramin'ny farany\nIzao diantsika Izao 'zay efa\nNatomboka.",
            "Mety ho mafana tokoa ny\nFitsapana anao\nNefa miserana ihany ny fiainana\nEty,\nKristy no ilay mpamily ka jereo\nny lalanao\nMiasà hatrany ianao aza mety\nKetraka.",
            "Misy ny fisakanana, tafiotra\nRivo-doza\nNef'apetraho amin'i Jeso ny\nFitokisanao\nAza mihozongozona na mety\nho lavo koa.\nJeso no Mpamilinao, banjino\nNy làlanao.",
            "Tazony ny firaisanao amin'ilay\nFitodiana\nMandra-piditrao hihaona amin'\nNy Tompo Jeso\nHifal'Izy hihoby hoe Mandrosoa\nIanao\nRy mpivahiny izay efa tody soa\nEty"
        ]
    },
    {
        "title": "LALAN-TERY",
        "number": 327,
        "chorus": "Mba tantano re, Mba tantano aho\nMba ho tody soa an-danitra\nLàlan-tsarotra, lalan-tery koa\nO! ampio mba ho tody soa.",
        "verses": [
            "Mba tantanonao Jesosy ô!\nIty dia alehako ity\nTena sarotra, feno fandrika\nIndraindray mila hampamoy fo.",
            "Ny devoly izay fahavaloko\nDia miandry kendritohina;\nKa mitady fomba hamandrihana\nAmin' ota sy faharatsiana",
            "Maro koa ireo mpanenjika.\nManakivy sy mandreraka.\nKa miezaka hampiverina\nAmin'ilay lala-malalaka",
            "Làlan-tery lala-miolaka\nLàlana mankany an-danitra\nLàlan-tsarotra, manahirana\nNefa tena azo antoka.",
            "Na dia sarotra ny làlana\nNa fidinana, fiakarana\nTany lemaka mahasondriana\nIanao Mpitari-dalana."
        ]
    },
    {
        "title": "LALINDALINA KOKOA",
        "number": 228,
        "chorus": "Mbola ho lalindalina isan'andro\nMbola ho hendry koa ao amin'ny\nteniny",
        "verses": [
            "Handeha lalindalina kokoa\nAo amin'i Jeso\nHianatra fahendrena\nAmbonimbony kokoa aho.",
            "Tano ho lalindalina kokoa\nRy Fanahy o!\nMandra-pahatongan'ny\nFiainako hatelin'i Jeso.",
            "Handeha lalindalina kokoa\nNa ho mafy aza\nHiorim-paka amin'ny\nFitiavana an'i Jeso aho.",
            "Lalindalina isan'andro re\nMandram-pandrenesiko\nKa hitovy endrika Aminy\nAmin'ny farany.\n"
        ]
    },
    {
        "title": "LANITRA NO IRIKO IZAO",
        "number": 689,
        "chorus": "O! lanitra no iriko izao\nLanitra, lanitra\nFa ny zava-tsoan'izao tontolo izao\nDia tsy haharitra.",
        "verses": [
            "Ny ho tonga any an-danitra izao\nNo faniriako\nFa Jesosy ihany no banjiniko,\nSy arahiko.",
            "Ny hahita ny tavan'ilay tia ahy\nNo fanantenako,\nTsy ahoako izay fanankianana\nNy finoako.",
            "Na dia misy aza ny mpaniasia\nMiverin-dalana\nTsy ataoko hampijanona izany\nFa handroso aho.",
            "Ekeko ny miara-miaritra\nAminao Tompo ô\nSatria ny ho tonga any an-danitra\nNo faniriako"
        ]
    },
    {
        "title": "LAPA SOA",
        "number": 250,
        "chorus": "Avy amin'ilay lapa soa\nHo ety an-tany;\nJesosy tonga hanapaka,\nNy gadran'ny ota.",
        "verses": [
            "Fitoeram-boninahitra\nNy any an-danitra;\nTsy maintsy ho mpandresy ianao,\nVao ekena hoditra ao.",
            "Aza matahotr'izay efa\nHiaretanao,\nFa handray satroboninahitra\nFiainana ianao",
            "Avela hiara-mipetraka\nAmin'i Jesosy\nEo amin'ny seza fiandrianany\nIreo izay mandresy.",
            "Nandresy izao tontolo'zao\nJesosy raha tety\nKa ny mpandresy tahak'Azy no;\nHahita 'lay Lapa soa."
        ]
    },
    {
        "title": "LAVITRA NY FITODIANA IANAO",
        "number": 530,
        "chorus": "Nefa lavitra ny fitodiana\nJesosy anefa te-hamonjy anao\nAtolory ny tananao.",
        "verses": [
            "Ery lavi-pitodiana\nNo mitatao ny loza\nKanjo tsy nampoizina koa\nNifafy ny orambaratra ré.",
            "Tsinjonao ve ny onjan-drano?\nNy rahona maizina\nNy alom-pahafatesana koa\nMisoko mangina ihany.",
            "Nahoana no sondriana re?\nMiandry anao ny fiainana\nMiverina anio izao\nSao hanjary neninao."
        ]
    },
    {
        "title": "LEHIBE ANDRIAMANITRA",
        "number": 698,
        "chorus": "Ny Ray tsitoha no manan-kery\nhanjaka\nEto amin'izao tontolo izao\nTsy tanteraky ny vavan'ny milaza\nNy fahefany sy ny heriny",
        "verses": [
            "Miezaka hitety ny habakabaka\nNy olon'amin'ny fahendreny\nIzao tontolo izao anefa dia kely\nEo anatrehan'Andriamanitra",
            "Toy ny maty ny voa rehefa ririnina\nKanefa miandry ny fahavaratra;\nToy izany koa ny fo izay mangatsiaka\nMiandry ny fanendren'ny Tanany.",
            "Avo sy mandrakizay Jeovah Tompo\nNefa monina ato am-pontsika;\nMitoetr'amin'izay manetry tena\nSy mamelona ny malahelo."
        ]
    },
    {
        "title": "LEHIBE NY FITIAVANAO",
        "number": 725,
        "chorus": "Tompo ô nataonao afa-po aho\nMiadana eo an-tranonao\nMisotro sy mihinana aminao\nMitoetra an-tranonao.",
        "verses": [
            "Raiko ô, misaotra fa nomenao\nFiadanana amin'ny androko\nIsan'andro sy ora, nofenoinao\nLehibe ny fitiavanao.",
            "Isan'ora mandritra ny androko\nMitarik'ahy amin'ny làlanao\nNifona aho ka navelanao\nLehibe ny fitiavanao.",
            "Jesosy ô, notiavinao aho\nNasehonao ny fahatsaranao\nNifidy ahy ny fahazavanao\nLehibe ny fitiavanao."
        ]
    },
    {
        "title": "LEHIBE NY VONINAHITRAO",
        "number": 578,
        "verses": [
            "Ny voninahitry ny fanatrehanao\nMamirapiratra aminay Fiangonanao\nMisandratà Hianao\nHoderain'ny olonao\nTompo Masina ô, Mpanjakanay\nLehibe ny voninahitrao",
            "Mangetaheta Anao izahay Tompo ô\nHo tonga hanatrika ny Fiangonanao\nNy Fanahy Masina no irinay\nharotsakao\nMba ho feno ny voninahitrao\nNy fanompoana izay ataonay.",
            "Koa aoka Hianao hiaraka aminay\nAmin'ny làlana mety hodiavinay\nHo vonona hiroso hanaraka Anao\nAmin'izay hitarihanao\nHanome voninahitra Anao."
        ]
    },
    {
        "title": "LION'NY JODA",
        "number": 350,
        "verses": [
            "Lion'ny Joda\nAmin'ny fiandrianany\nTonga mba hanjaka ety,\nMpanjakan'ny mpanjaka\nfiadanana\nNy fanjakany ho doria\nDeraina Hianao ry Mpanjaka (in-2)",
            "Lion'ny Joda teraka\nTamin'ny kely sy mahantra\nNofantsihin'ireo izay masiaka\nFa nitsangana nandresy\nHaleloia (in-4)",
            "Lion'ny Joda ho avy indray\nHanangana fiainam-baovao\nKa velona indray ho falifaly\nIreo izay novonjena\nMaranatha (in-4)",
            "Lion'ny Joda amin'ny\nfiandrianany\nTonga mba hanjaka etỳ\nMpanjakan'ny mpanjaka\nfiadanana\nNy fanjakana ho doria\nHaleloia (in-4)\nMpanjaka Hianao\nHaleloia, Mpanjaka Hianao."
        ]
    },
    {
        "title": "LOHARANO VELONA",
        "number": 456,
        "chorus": "Faly sy miravoravo aho,\nNoho ilay loharano velona;\nAfa-po tokoa ny fanahiko\nTamin'ny fitahiany marobe.",
        "verses": [
            "Nangetaheta teto an-tanin'ota aho,\nNefa tsy nisy 'zay nahafa-po\nFa teo amin'ny hazofijaliana\nNo nahitako ranovelona.",
            "He! Fatratra 'lay loharano velona;\n'Ka mampifaly ahy lalandava\nFa fahasoavana sy voninahitra\nNo mameno ny dia, Haleloia!",
            "Ry mpanota, manasa anao Jesosy\nHanatona 'lay ranovelona;\nFa eo no hahatony ny irin'ireo\nMangetaheta fitsaharana."
        ]
    },
    {
        "title": "MAHAFAKA ANAO IZY",
        "number": 242,
        "chorus": "Izy dia mahafaka anao (in-2)\nNa dia vesarin'ota aza\n\"Andriamanitray dia mahafaka anao\"",
        "verses": [
            "'Zao no hafatra malaza indrindra\nNanakoako hatry ny taloha\nNohirain'izao tontolo izao\n\"Andriamanitray dia mahafaka anao\"",
            "'Zao no hafatra malaza indrindra\nEran-tany sy ranomasina\nMbola tantarao indray\n\"Andriamanitray dia mahafaka anao\"",
            "'Zao no hafatra malaza indrindra\nHo an'ny mpanota sy meloka\nMijere sy minoa ny Tompo\n\"Andriamanitray dia mahafaka anao\""
        ]
    },
    {
        "title": "MAHAGAGA NY ANARANAO JESOSY",
        "number": 660,
        "verses": [
            "Mahagaga ny Anaranao Jesosy\nMihoatra izay mety ho anarana\nMpanjakan'ny mpanjaka\nSy Tompon'ny tompo\nMihoatra izay mety ho anarana\nIlay Tompon'ny tompo\nMihoatra izay mety ho anarana\nIlay Tompon'ny hery,\nAndrian'ny Fiadanana\nKintan'ny maraina\nMpiandry tsara\nMpanjakan'ny mpanjaka\nSy Tompon'ny tompo\nMihoatra izay mety ho anarana",
            "Mahagaga ny Anaranao Jesosy\nMihoatra izay mety ho anarana\nNy hany tokana tena mahavonjy\nSy manafaka ny aretina\nMitondra hery koa,\nHo an'ny reraka\nMampitraka ireo izay kivy\nMpanjakan'ny mpanjaka\nSy Tompon'ny tompo\nMihoatra izay mety ho anarana.",
            "Mahagaga ny Anaranao Jesosy\nMihoatra izay mety ho anarana\nHiankohofan'ny firenen-drehetra\nAsandratray ho ambony indrindra\nHo eken'ny molotra ny fiderana azy\nFa Andriamanitra manan-kery\nMpanjakan'ny mpanjaka\nSy Tompon'ny tompo\nMihoatra izay mety ho anarana."
        ]
    },
    {
        "title": "MAHAGAGA NY FAHASOVANAO JESOSY",
        "number": 346,
        "chorus": "Feo I\nMahagaga ny fahasoavanao Jesosy\nLalina noho ny ranobe (ny rano be )\nMahagaga sady mahafa-po.\n(mahafa-po)\nFeo sisa\nMahagaga ny fahasoavanao\nLalina noho ny rano be,\nAry avo noho ny tendrombohitra,\nTena ampy sy mahafa-po,\nMiaraka\nLehibe noho ny hadisoako\nLehibe noho ny otako,\nO! ankalazao ny\nAnaran-tsoan'i Jesosy.",
        "verses": [
            "Mahagaga tokoa, mahatalanjona\nNy fahasoavanao ry Jesosy Tompo\nFa lehibe noho ny otako izany\nTsy hay lazain'ny vava ny hatsarany.",
            "Mahagaga tokoa ny fahasoavanao\nDia ny namonjenao ny mpanota very\nNy gadra namatotra notorotoroinao\nLehibe ny fahasoavanao Jesosy.",
            "Mahagaga tokoa ny fahasoavanao\nAmin'izay farany ratsy sy meloka;\nNy nanovanao azy ho zanaky ny\nRay\nHandovany ny lanitra mandrakizay"
        ]
    },
    {
        "title": "MAHAGAGA TOKOA",
        "number": 499,
        "verses": [
            "Mahagaga tokoa (in-3)\nJesosiko\nMpanjaka lehibe\nTompon'ny rehetra\nMahagaga tokoa\nJesosiko\nMpiandry tsara sy vatolampiko\nAndriamanitra\nAvia hivavaka sy hiankohoka\nEo anoloan'ilay Jesosiko."
        ]
    },
    {
        "title": "MAHARETA AZA MIOVA",
        "number": 676,
        "chorus": "Aza miovaova, mahareta,\nAmin'ny fanompoana;\nFa amin'ilay andro fitsarana\nTsy hanenina Ianao.",
        "verses": [
            "Maro ny lavo eo anilanao\nKa mampihena ny herinao;\nMitrakà, tohizo ny dianao\nFa tsy eto no tanjona.",
            "Tsy ampy ireo fahagagana\nHampijoroana ny finoana;\nMibanjina an'i Jesosy ianao\nDia hahita 'lay Kànana.",
            "Koa meteza ianao anio\nMba ho ny Fanahy Masina,\nNo hitarika izay ataonao\nFa tsy ny fahalalanao."
        ]
    },
    {
        "title": "MAHAY IZY",
        "number": 673,
        "verses": [
            "Mahay Izy, mahay mihoatra\nHanatanteraka izay ho ahy anie\nMahay Izy, mahay mihoatra\nHandray an-tànana ny amin'ny làlako",
            "Mahay Izy, mahay mihoatra\nLavitra noho izay heveriko\nMahay Izy, mahay mihoatra\nNanefy ahy araka izay tiany."
        ]
    },
    {
        "title": "MAHEREZA AO AMIN'NY TOMPO",
        "number": 22,
        "chorus": "Mijoroa amin'ny marina,\nHo voninahitry ny Tompo,\nKoa mifahara ianao,\nNoho ny herin'ny Tompo,\nMba ho fandresen'ny teniny",
        "verses": [
            "Mahereza amin'ny herin'ny\nfaherezany,\nMijoroa amin'ny tenin'ny Tompo,\nFa handresy ianao noho ny Anarany\nNa anaty ady mafy aza re!",
            "Mahereza amin'ny herin'ny\nfaherezany,\nAza miamboho ireo fahavalonao\nMiadia ny ady tsaran'ny finoana\nMandrosoa amin'ny herin'ny\nTompo",
            "Mahereza amin'ny herin'ny\nfaherezany,\nTsy miova ny teny fikasany\nHotantanany ianao amin'izay\nrehetr'atao\nKa ho resy lahatra ny fonao"
        ]
    },
    {
        "title": "MAHEREZA SY MAHATANJAHA",
        "number": 595,
        "chorus": "Mahereza, mahatanjaha\nEsory ny tahotrao\nFa Andriamanitra Tomponao\nIzy no homba anao.",
        "verses": [
            "Fantaro Andriamanitra\nMahaiza manompo Azy\nAmin'ny fo rehetra\nSy ny fanahy mazoto.",
            "Jesosy no tsy mandao\nNa oviana na oviana\nMandra- pahavita ny asa\nFanompoana Azy.",
            "Tadiavo Izy fa ho hitanao\nNy tena Andriamanitra\nAza ilaoza- mihodin'izy\nSao hanenina ianao.",
            "Tsarovy izay nitoeranao\nFony mbola mpanota\nAnkehitriny kosa anefa\nZanak'Andriamanitra."
        ]
    },
    {
        "title": "MAHONONA TENA",
        "number": 341,
        "verses": [
            "Aoka tsy ho varian-java-mirenty\nMety hitaona ami' filan'ny nofo\nMivilia tsy hijery zava-poana\nMahay miaro anao ny Tompo Jesosy.",
            "Mitombo isan'andro, maro karazana\nIreo zava-miseho toa mahasarika\nMampitombo harena sy\nmahafinaritra\nFehezo ny tena sao hijinja alahelo.",
            "Raha tsy tanteraka izay noheverina\nDia miando 'ny fitsiriritana\nHevi-dratsy, halatra, fialonana\nAoka hahonon-tena amin'ny\nfivavahana.",
            "Koa tsarovinao izay mivavaka\nMba tsy ho liana amin-java-mandalo\nKa haningo-tena amin'izao tontolo\nizao\nBanjino ilay tanàna izay maharitra"
        ]
    },
    {
        "title": "MAIMAIM-POANA",
        "number": 535,
        "chorus": "Henoy ny feon i Jesosy\nTsisy zavatra aloanao\nMaimaim-poana, maimaim-poana\nEfa nefaiko ireo trosanao.",
        "verses": [
            "Maimaim-poana (in-2)\nTsisy fialan-tsiny ataonao\nMiavosa anefa ireo otanao\nAnanan'ny Tompo trosa ianao.",
            "Maimaim-poana\nnefa be ireo trosa\nHatao ahoana ireo otanao?\nInona re no vahaolana?\nMaimaim-poana\nnefa tsy maintsy aloa",
            "Maimaim-poana,\nMaimaim-poana tokoa\nJeso manafaka ireo trosanao\nNokosehiny tamin'ny Ràny\nVoavela, afaka, tiany ianao"
        ]
    },
    {
        "title": "MALEMY AHO",
        "number": 45,
        "chorus": "Ny ho eo akaikinao\nNo omeo ahy Jesosy o!\nIzany no angatahiko,\nEfao, efao Tompo o!",
        "verses": [
            "Malemy aho fa Ianao\nNo mahery Jesosy o!\nTariho sy arovy aho,\nAmin'izay ratsy rehetra.",
            "Iza no hanohan'ahy\nEo an-tany mahasasatra\nIza no hiara-mitondra\nNy entako afa-tsy Ianao?",
            "Rehefa ho tapitra\nNy aiko mety ho reraka.\nTantano aho ho tonga soa\nAo amin'ny Fanjakanao"
        ]
    },
    {
        "title": "MAMELA HELOKA SY MANADINO JESOSY",
        "number": 302,
        "chorus": "Mamela Jesosy sady manadino\nTsy mba toy ny fanaon'ny olona\nFa mamela tanteraka Izy",
        "verses": [
            "Feno famindrampo ny Tompoko\nKa misy ny famelankeloka\nTsy mba toy ny fanaon'ny olona,\nFa mamela sady manadino",
            "Raha irinao ny honina ao\nAmin' ilay fonenana soa\nDia tsarovy fa mamela Jesosy\nSy manadino ireo otanao",
            "Matetika no andrenesana\nOlona izay miteny hoe:\nMamela anao aho kanefa\nTsy haiko kosa ny hanadino.",
            "Raha hosokafana ilay Boky\nAmin'ny andro fitsarana\nTsy hanan-trosa intsony ianao\nSatria navelany izany."
        ]
    },
    {
        "title": "MAMIN'NY FOKO RY JESO O!",
        "number": 111,
        "chorus": "Jeso malala ô! Mpamonjy soa!\nIndro ny aiko raiso ho Anao;\nVelon-kanompo, velon-kanoa,\nVonon-kanao izay sitrakao.",
        "verses": [
            "Mamin'ny foko, ry Jeso ô!\nNy famonjena izay vitanao\nNy hadisoako navelanao\nTena afaka aho mandrakizay.",
            "Tano ny foko, ry Jeso tia!\nZaza tsy mahasaraka Anao\nMbola malemy, mora mania\nTano hifikitra ao Aminao.",
            "Aoka ny foko, sy ny fonao\nHiara-mitempo tena iray;\nAoka ny saiko, sy ny sainao\nHiray safidy mandrakizay."
        ]
    },
    {
        "title": "MAMPIRAVORAVO AHY IREO ASANAO",
        "number": 656,
        "verses": [
            "Tsara ny midera ny Tompo\nSy mihira ho voninahitry ny Anaranao\nRaha mifoha aho hilaza ny indrafonao\nAry fahatokoana Anao raha alina.",
            "Mampifaly ahy ireo asanao\nRay Masina ô\nKa hiraiko am-piravoravoana\nNy asan'ny tànanao\nLehibe ireo asanao, Ray Masina ô\nLehibe ireo asanao, Lalina\nny fihevitrao.",
            "Tsara ny midera ny Tompo\nSy mihira ho voninahitry ny Anaranao\nRaha mifoha aho hilaza ny indrafonao\nAry fahatokiana Anao raha alina."
        ]
    },
    {
        "title": "MANAFAKA TOKOA JESO",
        "number": 52,
        "chorus": "Jesosy irery no mahay\nManafaka tanteraka\nIreo ady sarotra\nAmiko (in-2):",
        "verses": [
            "Manafaka tokoa Jeso.\nAmin'ireo gadra marobe\nSarotra,\nNefa ao ny Tomponao (ny\nTomponao).",
            "Vatolampy marobe,\nToa misakan-dalana\nSarotra.\nNefa ao ny Tomponao (ny\nTomponao).",
            "Ny fizahan-toetranao,\nMety mahakivy fo\nSarotra,\nNefa ao ny Tomponao (ny\nTomponao).",
            "Eny zava-mahagaga.\nAmiko ny herinao\nKa tsy takatry ny saiko Jeso\n(Jeso)",
            "Haleloia (im-balo),"
        ]
    },
    {
        "title": "MANAM-PONENANA ANY AN-KOATRA",
        "number": 441,
        "chorus": "Manam-ponenana any an-koatra aho\nLapa mamiratra mazava\nManam-ponenana any an-koatra aho\nHonina ao izaho sy Jesosy",
        "verses": [
            "Vavaka manamaivana\nIreo sentoko noho ny alahelo\nManam-ponenana any an-koatra\nHonina ao tsy ho ela aho.",
            "Soa erỳ ny hihaona amin'ireo\nRehetra voavidy ao\nSoa tokoa ny hahita ny Tompo\nHidera Azy noho ny fitiavany.",
            "Fahoriana eto an-tany\nRanomaso matetika\nAo anatin'ny manda Jaspy\nFifaliana haravoana hatrany.",
            "Mikitoantoana ny havoana\nMaizina ny lohasaha\nHanohy ny làlako aho\nIzay mbola hiova volamena"
        ]
    },
    {
        "title": "MANAMASINA TENA",
        "number": 120,
        "verses": [
            "Manokana tena\nAry mivavaha,\nTomoera amin'i\nJeso fiainanao.\nRaiso sy ampio\nNy rahalahinao\nAza hadinoinao\nNy fitahianay.",
            "Manamasina tena\nMandalo ny ety,\nMandania fotoana\nIrery Aminy,\nFa hanahaka Azy\nNy fiainanao\nKa dia aminao\nNo ho hita Jeso.",
            "Manokàna tena\nHotarihiny,\nAza mahafoy Azy\nn'inona hanjo,\nNa ory na faly\nAraho Jeso,\nMatokia ny teniny\nJereo ny Tompo.",
            "Manamasina tena\nAza entim-po\nNy saina sy fonao\nHofeheziny,\nAry ny Fanahy\nHanome fitia\nHo tonga fiasana\nTsy ho ela ianao"
        ]
    },
    {
        "title": "MANAN-JARA RY JESOSY",
        "number": 395,
        "verses": [
            "Manan-jara ry Jesosy\nNy mpanomponao,\nIzay natokanao hitondra\nNy Anaranao\nNofidinao ho mpitory\nNy fitiavanao,\nNitokianao ho mpamory\nNy vahoakanao.",
            "Izao no zara-fanompoako\nVoatendrinao,\nKa ny mafy tsy ahoako\nHahefako izao;\nTsy handosi-pahoriana\nNy mpiasanao,\nFa ny hazofijaliana\nLova taminao.",
            "Na ho voky na ho noana\nNy mpanomponao,\nTsy handao ny fanompoana\nNametrahanao;\nSitrakao ny fihafiana,\nKa mba tiako koa;\nZakanao ny tsy fisiana,\nKa zakaiko koa,",
            "Tsy ahiko ny handany\nHo laniana koa\nFa famoizan-tsoa no hany\nAhefana soa\nNa ny saiko na ny aiko\nAndro, vola koa,\nTsy mba hisy holalaiko,\nFoiko avokoa.",
            "Nefa raha izaho irery\nTsy mahefa izao\nKa mangataka ny hery\nEo an-tananao!\nAoka ho feno ny Fanahy\nNy mpanomponao,\nMba ho tena lehilahy\nVoahosotrao!"
        ]
    },
    {
        "title": "MANANA HERY HIATREHAKO",
        "number": 249,
        "verses": [
            "Manana hery hiatrehako\nNy adiko isan'andro aho,\nMatoky ny fahendren'ny Ray aho\nKa tsy tokony hatahotra;\nTsy misy fetra ny indrafony;\nFantany izay tsara ho ahy;\nOmeny fitsaharana aho\nAmin'ny fahatrotrahako.",
            "Eto anilako ny Tompoko\nVonon'hampahery hatrany\nSatriny hitondra ny entako\nSy ireo ahiahiako;\nNy fiarovana ny zanany\nDia adidiny irery ihany;\n\"Hifamatra amin'ny andronao\nny herinao\", hoy ny teniny.",
            "Tompo ô; ampio aho izao,\nHino ny tenifikasanao;\nHanovo ny fampiononanao\nAo amin'ny teny masinao;\nTompo ô, ampio aho rehefa\nMifanehatra amin'ny ady,\nMandra-pahazoako ny tany\n'zay efa nampanantenainao."
        ]
    },
    {
        "title": "MANANA LAPA SOA",
        "number": 643,
        "verses": [
            "Manana lapa soa aho\nMihoatra izay misy eto an-tany\nManana lapa soa aho\nIzay no tantaraiko aminao",
            "Vatosoa sy volamena\nMahafapo ny hatsarany\nVatosoa sy volamena\nAiza no misy io lapa io?",
            "An-danitra any io lapa io\nJesosy no namboatra azy\nAn-danitra any io lapa io\nToerana ivorian'ny mino.",
            "Meteza koa hianao anio\nHo isan'izay honina ao\nMeteza koa hianao anio\nHo sambatra mandrakizay."
        ]
    },
    {
        "title": "MANANA LATABATRA",
        "number": 23,
        "chorus": "O! avia ka mihinana\nfa miandry anao Jeso,\nNy latabatry ny Tompo\nazonao ihinanana,\n'Lay namoky marobe\nNanova rano ho divay,\nMiantso ny noana\nhiara-komana Aminy.",
        "verses": [
            "Manana latabatra voaomana Jeso,\nHamahanany ireo olo-masina\nNy voafidy no antsoiny hiaraka\nmihinana,\nNy fanahy izay reraka dia afa-po.",
            "Ho avy faingana handray ny\nfofom-badiny Jeso\nHo eo anilany madrakizay doria\nIreo maro any an-danitra\nho avy hanatrika\nNy fampakaram-badin'i Kristy Jeso",
            "Fivorian-dehibe sy feno\nvoninahitra\nHo fotsy manjopiaka ireo\nmasina\nHiara-paly sy hihoby\nSy hiaraka manjaka amin'i\nKristy Tompo mandrakizay"
        ]
    },
    {
        "title": "MANANA SAKAIZA TAPITR'OHATRA AHO",
        "number": 696,
        "chorus": "Eny, io sakaiza io tia anao koa\nIreo adin-tsaina ireo\nFantany avokoa\nNahoana hianao\nno mandeha any an-kafa\nNefa ao amin'ny Jesosy\nNy famonjena Anao",
        "verses": [
            "Manana sakaiza tapitr'ohatra aho\nTena mahatoky sady tsy mandao\nIzay notadiaviko dia ao Aminy\nIzy no heriko ka ho fantatrao",
            "Manana fiadanana tsy lefy aho\nOmen'io Mpamonjy sarobidy io\nKoa taominay ianao ho voavotra\nFa voavonjy ao rehefa mpanota.",
            "Ho anao izay mihaino ahy izao\nHitan'i Jesosy ny fahorianao\nTe-hanampy anao Izy\nRaha mety ianao\nKa miantsoa Azy izao anio izao.",
            "Ary amin'ny andro ahatsapanao\ndia hazony Ilay efa Sakaizanao.\nAza fikirinao ho anao irery\nFa andeha ilazao ireo mbola very."
        ]
    },
    {
        "title": "MANANA VATOFANTSIKA IZAHAY",
        "number": 194,
        "chorus": "Manana ny vatofantsika\nTena azo antoka izahay\nKa mifikitr'eo amin'ilay\nVatolampy dia ny Mpamonjinay.",
        "verses": [
            "Raha mamely ny oram-baratra\nmihazona ve ny vatofantsika?\nRaha mahery ny ranomasina\nMafy tsara ve ny vatofantsika?",
            "Tsy mihetsika na mihontsana.\nFa tazonin'ny tanan'ny Mpamonjy,\nMifamatotra izao ny fonay,\nAfaka maharitra ny tafiotra.",
            "Tsy mihozongozona izany\nAmin'ny toetr'andro mahatahotra\nMisafoaka ny rivo-doza,\nFa tsy haharendrika ny sambonay.",
            "Vatofantsika azo antoka\nEo anivon'ny fahafatesana\nMitoetra ny fanantenanay\nNa hifaran'aza re ny andronay.",
            "Rehefa tsinjonay ilay tanàna.\nVolamena sy mamirapiratra\nTsy ho ela dia hitsahatra\nNy tafiotra sy ny oram-baratra."
        ]
    },
    {
        "title": "MANAPA-KEVITRA AHO IZAO",
        "number": 90,
        "verses": [
            "Manapa-kevitra aho izao (in-2)\nHanarak'an'i Jesosy aho\nKa tsy hiverin-dalana.",
            "Any ivohok'izao tontolo izao (in-2)\nFa Jesosy no eo alohako\nKa tsy hiverin-dalana.",
            "Na dia tsy misy ho namako, aza (in-2)\nHanaraka Azy ihany aho\nKa tsy hiverin-dalana.",
            "Mba tapa-kevitra ve ianao (in-2)\nHanaraka an'i Jesosy izao\nKa tsy hiverin-dalana."
        ]
    },
    {
        "title": "MANARAHA AHY",
        "number": 24,
        "verses": [
            "Mandroso irery aho,\nka toa tsy misy mpiahy\nIreo enta-mavasatro dia\nmampamoy fo\nMatetik'aho no nitaraina\namin'ny Tompo\nNefa namaly mora Izy hoe:\nTrotraka Aho niakatra an'i Kalvary\nNy vesatr'ilay hazo dia\nnandavo Ahy\nRy mpivahiny ô! mahereza\nka ento ny Hazo Fijalinao\nK'araho aho.",
            "Raha sahy nirehareha aho\nka niteny hoe\nNiasa mafy sy nandao\nzava-drehetra aho\nNamoy laza, harena\nmba hanompoako Anao\nNefa namaly mora Izy hoe;\nNafoiko ny lanitra\nny fiandrianako\nNy tongotr'aman-tanako\ndia nohombohana\nTohizo ny dianao\navia tantanako\nMandrosoa hatrany, hanarak'Ahy.",
            "Ekeko n'aiza n'aiza toerana\nhahafatesako\nHo fitoriana Anao\namin'ireo sakaizako.\nIzany no hataoko\nnoho ny fitiavana\nNefa namaly mora ahy Ianao;\nKapoaka iray no mba\nnatolotro anao\nDia izany ihany\nno takina aminao\nEkeko, Tompo o!\nny hitondra ny hazo\nFijaliako miaraka Aminao."
        ]
    },
    {
        "title": "MANATONA AN'I JESOSY",
        "number": 173,
        "chorus": "Manatona an'i Jesosy\nFa izay manaton'Azy\nDia tsy mba ho laviny mihitsy.",
        "verses": [
            "Efa nivoha elabe ny varavaran-danitra\nMba hidiran'izay mino an'i Jesosy\nMpanalalana amin'ny Ray\nSy ny olon-drehetr'Izy\nAzonao hatonina hamonjy anao.",
            "Mihevitra ve ianao fa olona marina\nKa tsy mila ny hateraka indray\nHoe taranaky ny mino\nKanefa tsy mbola nandray\nAn'i Jesosy ho Mpamonjy anao",
            "Ny vavak'ataon'ny hafa\nDia tsy hahasoa anao\nRah'mikiry amin'ny ditranao ianao\nSao ho tonga tampoka ny\nFah'fatesanao\nKa tsy hisy fanafodiny\nMandrakizay.",
            "Aiz'ange no hisy anao reh'fa mial'ety\nMoa ve mba fantatrao izay halehanao\nSao hadinonao ny hany\nFahazoan-dalana manan-kery\nDia ny ràn'ny Zank'Ondry."
        ]
    },
    {
        "title": "MANATONA ANAO AHO TOMPO O! MBA HIVAVAKA",
        "number": 695,
        "chorus": "Manatona anao aho Tompo ô!\nMba hivavaka eo an-tongotrao\nInoako fa ny hakiviana handao\nNy haharatsiana ho lao.",
        "verses": [
            "Aina sy hery ho ahy\nAo anaty adim-panahy\nNy fanatrehan'ny tavanao\nSy fomban'ny Fanahinao",
            "Isan'ora isan'andro\nNo ilaiko ny herinao,\nMety ho diso làlana aho\nRaha tsy miaraka Aminao.",
            "Maro ny fahavalo\nFaingana Hianao hiaro\nRaison y tanako Tompo ô!\nK'aza avela hisaraka Aminao.",
            "Raha maizina ny dia\nHanao ahoana raha sanatria\nIrery tsy manana mpiahy,\nO! meteza re hiantoka ahy."
        ]
    },
    {
        "title": "MANDANIA FOTOANA AMIM-BAVAKA",
        "number": 276,
        "chorus": "Mandania fotoan'amin'i Jeso\nLazao Azy 'reo fanahianao kely?\nIzy no hanome 'zay ilainao\nHanamaivana koa ny entanao\nMandania fotoan'amim-bavaka.",
        "verses": [
            "Misy ireo alahelo\nTsy mba lazainao ny hafa\nMitomany ve ny fonao?\nMandania fotoan'amim-bavaka.",
            "Toa mifaly ihany ianao\nNefa misy mampanahy\nMafy tokoa ny tafiotra\nMandania fotoan'amim-bavaka.",
            "Mampanahy anao ny hoavy\nTsy fantatrao ny làlana\nMarobe koa ny olana\nMandania fotoan'amim-bavaka"
        ]
    },
    {
        "title": "MANDEHA HO ANY ZIONA",
        "number": 355,
        "chorus": "Mandeha ho any\nZiona mahafinaritra\nHo any Ziona\nTanànan'Andriamanitra isika.",
        "verses": [
            "Avia ianareo 'zay tia ny Tompo\nAvia mba hiaraka\nHifaly sy hihira koa\nManodidina ny seza fiandrianana.",
            "Ny mpanota no manda tsy hidera\nNy Tompo\nNy zanaky ny Mpanjakan'ny\nvoninahitra kosa\nTsy maintsy maneho ny fifaliany.",
            "Manehoa fifaliana ry havoanan'i\nZiona\nAlohan'ny hidirana\nNy tanànan'ny lanitra,\nHandiavana ny làlam-bolamena.",
            "Mihirà sy mihobia,\nFafao ny ranomaso\nMamaky ny tanin'Imanoela\nisika izao.\nHo any amin'ny\n\"tanàna sambatra\""
        ]
    },
    {
        "title": "MANDEHANA AMIN'NY FAHAZAVANA",
        "number": 369,
        "chorus": "Tsara ny manaraka ny dian'ny\nMpamonjy\nMandehana amin'ny fahazavana\nManaraka ny diany,\nHo amin'ny fahamarinany.",
        "verses": [
            "Manaraka ny dian'ny Mpamonjy\nMandeha amin'ny nalehany koa\nMaka ny ohatra soa niainany\nNo mahafaly sy laharavo.",
            "Mifikitr'amin'ilay Mpitantana\nMba tsy hiala 'amin'ny làlany\nMatoky ny sadriny 'zay maharo\nNo mahasambatra isan'andro.",
            "Manara-dia amim-paharetana\nAmim-pinoana sy fitiavana\nMijery Azy noho ny fahasoavana\nMandritra ny fivahiniana.",
            "Mandeha amin'ny dian'ny\nMpamonjy\nManaraka ny fitarihany;\nF'amin'ny andro izay iaviany\nDia ho sambatr'eo anilany."
        ]
    },
    {
        "title": "MANDRESY ILAY MAMPAHORY AHY JESOSY",
        "number": 44,
        "chorus": "Tretrik'aho, Haleloia!\nNiady ho ahy Jesosy\nMifaly aho satria,\nNandresy ilay nampahory ahy Jeso.",
        "verses": [
            "Nisy ady tany an-danitra;\nMikaela sy Satana;\nResy anefa ilay mpiampanga\nMbamin'ireo anjeliny.",
            "'Zao no nisehoan'ny Zanaka,\nRaha tonga tety Izy\nDia ny handrava sy handrodana\nIzay asan'ny devoly.",
            "Efa nomena an'i Jesosy\nNy fahefana rehetra;\nKoa maniraka antsik'Izy\nHitory filazantsara."
        ]
    },
    {
        "title": "MANDROSOA LALINA KOKOA",
        "number": 649,
        "verses": [
            "Izory àry ny làlanao\nMandrosoa eo aloha\nAza miahotra hianao\nIzory ny làlanao",
            "Izory àry ny làlanao\nFa momba anao Jeso\nAza mijanojanona\nIzory ny làlanao.",
            "Izory ary ny làlanao\nIzy hitarika anao\nHampifaly, hanafaka\nIzory ny làlanao.",
            "'Ndeha handroso bebe kokoa\n'Ndeha ho amin-dalàna soa\nJeso mitantana anao\n'Ndeha handroso bebe kokoa\n'Ndeha aza miandry ampitso\n'Ndeha aza matahotra."
        ]
    },
    {
        "title": "MANEKE HO TARIHINY",
        "number": 510,
        "chorus": "Nirahin'ny Ray Izy\nHampianatra\nFanetren-tena ahy sy anao\nKoa maneke hotarihiny Ianao\nDia handray fahasoavana.",
        "verses": [
            "Tamin'ny fanetre-tena lehibe\nNo nahatongavan'ny Tompo\nNandao ny fiandrianany Izy\nKa nanaiky mba hanompo.",
            "Mpanjakan'ny Mpanjaka\nNo nidina\nHitondra avotra ho ahy\nFoana avokoa ny fisalasalako\nFa mino Azy tanteraka aho",
            "Tonga ary Izy mba handray\nny fonao\nRaha mbola atao hoa anio\nEsory ny fanamarinan-tena\nKa mibebaha hianao.",
            "Koa samia ary manolo-tena\nHandraisan'ny Tompo antsika\nFa tsy manda izay\nrehetra mankato\nIlay Tompo mpamindra fo."
        ]
    },
    {
        "title": "MANGATAKA AHO TOMPO",
        "number": 581,
        "chorus": "Hainao ny zava-drehetra\nJereo ny tsirairay\nHainao ny zava-drehetra\nIandraketonao izahay",
        "verses": [
            "Mangataka aho Tompo ô,\nHo an'ny olona rehetra\nIzay faly mandritra ny andro\nAry koa ho an'ny kamboty",
            "Mangataka aho Tompo ô\nHo an'ny olona rehetra\nIzay tsy manana hialofana\nMarobe koa ireo noana.",
            "Mangataka aho Tompo ô\nHo an'ny olona rehetra\nMitoetra an-tany lavitra\nSy ireo manodidina ahy."
        ]
    },
    {
        "title": "MANGATAKA NY TOMPO AHO",
        "number": 727,
        "verses": [
            "Mangataka ny Tompo aho\nMba hampaherezany ahy\nRehefa tsy mandeha tsara\nNy zava-drehetra,\nNamaly ahy Izy hoe:\n“Aza manana ahiahy,\nMampahery anao aho\nKa dia aza matahotra”\nMangatak'aho Tompo ô!\nHiarak'Aminzo\nRehefa maizina, matahotra ny lalana\nFa hoy ny Tompo tamiko:\n“Aza manana ahiahy,\nHitako hatrany ianao\nSy 'zay tsar'ho anao”\nHazony hatrany ny finoanao\nFa izy no momb'anao.",
            "Tsy vola na harena be\nNo hangatahiko izao\nFa ho an'izay tia ny Tompo\nNy zava-drehetra\nFa 'zay manosik'ahy\nHivavak'Aminao\nNy hah'tsapa ny fanampianao,\nFomban'ny tananao\nMba manantona Azy\nFa ilainao Izy\nHanampy sy hameno\nIreo banga eo aminao,\nFanoloran-tena, hany\nFomba anatomy Azy,\nHo avy hamonjy anao Izy,\nRehefa ilainao\nNy vavaka tokana ihany\nNo làlana amy 'zany."
        ]
    },
    {
        "title": "MANGETAHETA ANAO AHO",
        "number": 549,
        "chorus": "Ny tany hay miandry ny orana\nNy diera ana mitady rano\nF'izaho mangetaheta\nAnao Jesosiko",
        "verses": [
            "Maro no mitady fiadanana\nSy maniry ny ho ela velona\nTe- hiaina am-pahasambarana\nNy Tompo no hany hampitsahatra",
            "Sambatra izay matoky Anao\nToy ny hazo amoron'ny ony\nFahananao ireo teninao\nIzay mamy mihoatra ny tantely",
            "Toy ny tany karakaina aho\nManantena ny fihavianao\nMpiambina miandry ny maraina\nRahoviana no hahitako Anao?",
            "Nahoana aho no mitanondrika\nKa hitoloko ato anatiko?\nManantena an'Andriamanitra aho\nKa mbola hidera azy hatrany"
        ]
    },
    {
        "title": "MANIRAKA ANAO JESOSY",
        "number": 261,
        "verses": [
            "Maniraka anao Jesosy izao\nHanazava ny manodidina anao\nIzao tontolo izao feno aizina\nAoka hirehitra ny fanilonao.",
            "Toy ny jiro iray amin'ny alina\nNy mazava izay miposaka aminao\nKoa mitsangana, ary mihazava\nAza afenina ny fanilonao.",
            "Fantatr'i Jeso ny fanilonao\nNa mamiratra na malomaloka\nFeno solika ve ny fanalanao\nHiandrasana ny Mpampakatra?",
            "Ota maro be, alahelo koa\nManamaizina ity tany ity\nMiandry anao Jesosy hanazava ireo\nAtsangano avo ny falnilonao."
        ]
    },
    {
        "title": "MANIRY MAFYAHO",
        "number": 57,
        "verses": [
            "Maniry mafy aho\nry Jeso Tompo ô!\nHialoka eo ambany\nhazo fijalianao\nTsy misy toeran-kafa re izay\ntena mamiko\nNy hazo fijalianao no fiarovako",
            "Ny hazo fijalianao no itazanako\nNy tenanao izay nijaly mba ho\navotro;\nKa dia kotsan-dranomasom-\npitiavana\nNy tavako ry Tompo o!\nfa afa-keloka",
            "Am-pototry ny hazo nijalianao\nNo itoerako hohazavain'\nny tavanao\nAtaoko fatiantoka\nny zava-maro lo\nNy hazo fijalianao\nno tombon-dahiko"
        ]
    },
    {
        "title": "MANKANESA ATY AMIKO",
        "number": 14,
        "chorus": "Mankanesa aty\nAmiko ianareo\nIzaho no hanome\nNy fitsaharana\nMora sady tsara\nNy Fanahiko.\nMatokia fa maivana\nNy ziogako.",
        "verses": [
            "Henoy ny Mpamonjy\n'zay miantso hoe;\nMankanesa atỳ ry mavesatra entana\nIzay mijaly sy miasa fatratra,\nIzaho no hanome ny fitsaharana.",
            "Kivy va hianao, mivezivezy koa\nSa misalasala, feno ahiahy?\nMisy ady mafy ao anatinao?\nIzy hanome ny fitsaharana.",
            "Tafintohin'ota sy henatra ianao\nNoho ny fahotana manorotoro anao\nNy mpiandry tsara mampionona\nIzy hanome ny fitsaharana.",
            "Resy matetika va ianao\nNoho ny halemena\nMampalahelo anao?\nAo Jesosy hanamasina anao\nNy Fanahiny no fitsaharana."
        ]
    },
    {
        "title": "MANKASITRAKA ANAO AHO",
        "number": 639,
        "verses": [
            "Mahery aho hoy ny osa,\nSambatra aho hoy ny ory\nLehibe ny asan'ny Tompo\nMahery aho hoy ny osa,\nSambatra aho hoy ny ory\nLehibe ny asan'i Jesosy Tompo.",
            "Ny mpifatotra novahanao,\nNy mpanota vonjenao\nLehibe ny asanao Tompo\nNy Mpifatotra novahanao\nNy mpanota vonjenao\nLehibe ny asanao Jesosy Tompo.",
            "Fiadanana mandrakizay\nLova tsy levona\nVoaomana ho an'ny masina\nFiadanana mandrakizay\nLova tsy levona\nVoaomana ho an'ny masina Amen",
            "Mankasitraka Anao aho\nRy Ray Masina indrindra ô\nNanomezanao an'i Jesosy Zanakao (in-2)"
        ]
    },
    {
        "title": "MANOLO TENA AHO",
        "number": 701,
        "verses": [
            "Manolo-tena aho mba fanatitra\nAnoloan'ny alitara\nHo hiankohofako\nAvia fenoy ny Fanahy\nHazahoako ny fiainako\nManolo-tena aho mba ho fanatitra"
        ]
    },
    {
        "title": "MANOLORA TENA AN-TSITRAPO",
        "number": 288,
        "chorus": "Maro ny mirotsak'an-tsitrapo\nFa mb'ahoana kosa ianao?\nKristy Kapiteny miantso anao\nHirotsak'an-tsitrapo\nEkenao ve?",
        "verses": [
            "Miantso ho miaramila Jesosy\nMiaramila izay ho mahatoky\nHandeha hiady, ady masina\nHirotsak'an-tsitrapo;\nEkenao ve?",
            "Miantso, miaramila mahery fo\nHiaraka Aminy, isan'andro koa,\nIzy tsy handao, fa homba anao\nEo anilanao hatrany Jesosy.",
            "Fo feno fahalemem-panahy\nIndrindra\nNo iantsoany anao hanompo Azy\nMahonena Azy ny olombelona\nFeony mazava no iantsoany anao",
            "Rehefa tapitra ny ady ka azo\nNy fandresena dia ho valian-tsoa\nNy olo-marina sy mahatoky\nDia hosatrohana voninahitra"
        ]
    },
    {
        "title": "MANOME FAHASOAVANA BEBE KOKOA",
        "number": 290,
        "chorus": "Manome fahasoavana bebe kokoa\n'Zay manetry tena anie ny Tompo;\nKa ny hareny izay tsy hita lany\nDia zarainy hatrany hatrany",
        "verses": [
            "Manome fahasoavana bebe kokoa\nJeso raha mihamavesatra ny entana\nAry manome ny hery bebe kokoa\nRehefa mihabetsaka koa ny asa.",
            "Raha mitombo ny fitsapana zakaina,\nDia ampitomboiny koa ny fiadanana\nRaha mitombo ny fahasahiranana,\nDia mitombo koa ny famindram-\npony",
            "Rehefa miha-ketraka ny risi-ponao,\nMiha-trotraka ihany koa ny herinao;\nDia eo ny Ray manomboka\nMamerina\nNy fanavaozany indray aminao"
        ]
    },
    {
        "title": "MANOVA ZAVATRA NY VAVAKA",
        "number": 87,
        "chorus": "Ny vavaka, manova zavatra\nNa andro ratsy na tsara\nJeso no toky ka mivavaha\nHandresy ianao, fa ny vavaka,\nNo manova zavatra.",
        "verses": [
            "Raha aizim-pito manarona anao\nAdy, loza tsy nampoizinao\nDia matokia fa ny vavaka\nNo manova zavatra.",
            "Misy fiadanana ny vavaka\nKa soloy hira ny sentonao\nHandresy ianao, fa ny vavaka,\nNo manova zavatra.",
            "Mba mivavaha ho an'ireo very\nSy mpanjeny akaiky anao\nMamonjy Jeso, fa ny vavaka,\nNo manova zavatra.",
            "Mba mivavaha, mahereza hianao\nAmin'ny adim-piainana\nMinoa tokoa, fa ny vavaka,\nNo manova zavatra."
        ]
    },
    {
        "title": "MASINA ANDRIAMANITRA",
        "number": 633,
        "verses": [
            "Asandrato Jesosy (in-2)\nHianao no iankohofako (in-2)\nMasina Andriamanitra\nAndriamanintsika",
            "Asandrato ny Tompo (in-2)\nMiankohafa Aminy hianao (in-2)\nMasina Andriamanitra,\nAndriamanintsika.",
            "Asandratsika ny Ray (in-2)\nmiankohofa Aminy isika (in-2)\nMasina Andriamanintra,\nAndriamanintsika"
        ]
    },
    {
        "title": "MASINA INDRINDRA ANDRIAMANITRA",
        "number": 669,
        "verses": [
            "Masina indrindra Andriamanitra\nTompon'ny tafika\nMasina indrindra Andriamanitra\nTompon'ny tafika\nFeno ny voninahitrao ny tany (in-3)\nMasina ny Tompo."
        ]
    },
    {
        "title": "MASINA NY ANARANAO",
        "number": 684,
        "verses": [
            "Masina ny Anaranao Tompo\nAvo ambonin'ny tany\nDeraina ianao, ankalazaina\nHianao no teny mamy\nHaleloia, mitsaoka Anao\nVoninahitra e!"
        ]
    },
    {
        "title": "MATOA ISIKA TOY IZAO",
        "number": 321,
        "chorus": "Jesosy, Jesosy tsy miov'izy\nMatoa isika toy izao\nAfaka sy voavonjy\nNahazo fiainam-baovao.",
        "verses": [
            "Maro ny olona no manao hoe:\nTaloha no nisy fahagagana;\nNy valim-bavak'efa azontsika\nAnefa dia mandiso izany.",
            "Sainin'ny maro ankehitriny fa\nHoe: lasa ny andron'ny Fanahy\nNy teny fikasana anefa\nDia natao ho anao sy ho ahy.",
            "Tsy vitsy tamintsika no azon'ny\nHerin'ilay ratsy taloha;\nNy fahafahantsik'ankehitriny\nNo hankalazana ny Tompo.",
            "Mahita ny voninahitry ny Ray\nIzay rehetra mety mino;\nFa ny fahatezerana kosa\nHianjer'amin'ny tsy mino."
        ]
    },
    {
        "title": "MATOKIA",
        "number": 171,
        "chorus": "Aoka hatoky ianao\nraha misafoaka mafy,\nNy rivotra mahery amin'ny\nfiainanao.",
        "verses": [
            "'Zay nolazain'i Mpamonjy\nDia avy amin'i Ray.\nAzo antoka fa ny rà\nIo no tombo-kase.",
            "Nomena an'i Abrahama,\n'Lay tenim-panekena,\nIsao ny kintana\nFa hitombo ny finoanao.",
            "Matokia na mitaona aza\nNy hafanana be\nAoka hiandry ianao\nFa avy ny maraina.",
            "Anatin'ny fahoriana,\nMatokia Azy tokoa,\nFa hilaza fitahiana\nAminao Jesosy.",
            "Ilaozan'ny rehetra ve?\nMatokia fa ao ilay\nManarona famindram-po\nSy fahamarinana",
            "Matokia n'inona manjo\nMandram-pahatonganao\nAo amin'ilay fifaliana\n'Zay azo antoka"
        ]
    },
    {
        "title": "MATOKIA AO JESOSY",
        "number": 202,
        "verses": [
            "Raha mihasarotra ny làlanao\nDia matokia, ao Jesosy\nMinoa fa hainay ny zava-drehetra\nIzy hitarik'anao\nMatokia fa ao Jesosy\nFantan'ireo fanahinao\nAmin'ny hery Tsitoha\nHanafaka anao Izy.",
            "Ary raha tezitr'aminao satana\nDia matokia, ao Jesosy\nAmin' izay ady atrehinao\nIzy hanampy anao\nMatokia fa ao Jesosy\nFantatry ny fahavalonao\nFa ho resy izy satria\nMahery ny momb'anao",
            "Ianao 'zay mijaly manirery\nDia matokia, ao Jesosy\nIzay niaritr'an' i Kalvary\nMba hamonjeny anao\nMatokia fa ao Jesosy\nFantany 'reo alahelonao\nIzy no sakaiza soa\nHampionona anao."
        ]
    },
    {
        "title": "MATOKIA AZA MANAHY",
        "number": 659,
        "verses": [
            "Aza manahy, Izaho nividy anao\nMiantso anao amin'ny anaranao\nAhy hianao, ahy hianao\nAza manahy Izaho nividy anao\nMiantso anao amin'ny anaranao\nKa tiaviko, ka tiaviko",
            "Raha mita ny ony ianao\nMamaky ny afo koa\nHiaraka aminao aho\nTsy haninona hianao",
            "Aza manahy, Izaho nividy anao\nMiantso anao amin'ny anaranao\nAhy hianao, ahy hianao",
            "Lafo vidy Amiko hianao\nNy fitiavako momba anao\nAhy hianao ka tiaviko\nAhy hianao ka tiaviko"
        ]
    },
    {
        "title": "MATOKY ANAO AHO",
        "number": 565,
        "verses": [
            "Matoky Anao aho\nAndriamanitro Hianao\nNy ho aviko dia eo an-tànanao (in-2)\ntokoa",
            "Hankalaza Anao aho\nTompo Mpamonjiko Hianao\nNyfitiavanao ahy ho mandrakizay\nHo ahy mandrakizay",
            "Tiako ny rehetra hanaiky\nAnao tokoa\nHifaly noho ny hasoavanao\nNoho ny fahasoavanao"
        ]
    },
    {
        "title": "MAVESATRA VE NY ENTANAO?",
        "number": 184,
        "chorus": "Mihaino 'zay vavaka atao tokoa Izy.\nTsy lavitra fa eo anilanao isan'andro\nRaha sendra kivy dia tsarovy'zay\nhatao\nMiantoraha eo amin'i Jesosy.",
        "verses": [
            "Irery ve ianao\nKa mavesatr'entana?\nNy hoavinao miafina tsy fantatra?\nMihasasatra ve\nNoho ny adim-panahy?\nAntsoy hanampy anao Jesosy",
            "Moa ny fiainanao feno alahelo ve?\nMampanahy anao'zay\nHiseho rahampitso?\nMila ho very ve\nIzay mba finoanao?\nAntsoy hanampy anao Jesosy."
        ]
    },
    {
        "title": "MAZAVA ILAY SASAKALINA",
        "number": 38,
        "verses": [
            "Mazava ilay sasak'alina,\nMamiratr'ireo anjely,\nNotendreny ny lokangany\nNihira fiderana\nHo an'ny ankasitrahana\nNy fiadanana anie\nNihaino ny feon'anjely\nIzao tontolo izao.",
            "Nisokatra izao ny lanitra\nKa nidina ireo anjely\nHo ety ambonin'ny tany\n'Zay simba sy trotraka\nNanakoako ny feony\nnanao ny hiran- danitra\nNamelatra ireo elany\ntambonin'ny havoana.",
            "Ary ianao 'zay mivesatra\nNy adim-piainan'ety\nKa reraka eny an-dàlana\nMamindra miadana\nTazano ankehitriny\nAo amin'io làlana io\n'Zay sarotra sy mideza\nNy hobim-pifaliana.",
            "E! tonga izao ny fotoana\nNambaran'ny mpaminany\nNandritry ny taona maro\nIlay andro volamena\nNaverina tety an-tany\n'Lay hiran'ny fiadanana\nNataon'ireo anjely\n'Zay nanjopiaka tokoa"
        ]
    },
    {
        "title": "MBA HO VONONA VE?",
        "number": 406,
        "chorus": "Mba ho vonona ve\nRaha miantso anao Izy anio\nMba ho vonona ve\nHankato ny antsony?",
        "verses": [
            "Raha miantso anao ny Tompo anio\nHijoro amin'ny fitsarany,\nKa mifarana hatreo ny andronao\nHahatsiravina ve sa ho soa?",
            "Raha miantso anao ny Tompo anio\nAhoana no havalinao?\nMba ho faly hankatoa ny feony vé\nSy hanatrika ny tavany?",
            "O! vonona ve mba handao ny ety\nRaha tonga anio Jesosy\nHo anao ny satroboninahitra\nIzay tsy mety ho levona",
            "Mivonona satria tsy fantatrao\nNy andro fitsarana anao\nRaha hiainga hiala ety ianao\nDia hotsaraina farany."
        ]
    },
    {
        "title": "MBA NAHARITRA HAFIRIANA",
        "number": 211,
        "verses": [
            "Mba naharitra hafiriana\nNo niresahanao tamin'ny Tompo\nTeo am-pivavahana?\nIreo zava-miafina ao am-ponao\nMba naharitra hafiriana\nNo niandrasanao ny mazava?\nAzonao antsoina ve Jesosy\nHo Sakaiza Mpihevitra anao?",
            "Mba naharitra hafiriana\nTeo am-pandoalehana ianao?\nKa nahatsapanao fa maivana\n'Reo enta-mavesatry ny fonao?\nMoa ve mba efa tsapanao\nFa saro-bidy ny fahavelomanao?\nAzonao antsoina ve Jesosy\nHo Sakaiza Mpihevitra anao?",
            "Mba naharitra hafiriana\nNo nivavahanao hahatsapanao,\nFa niaro sy niambina anao\nTamin'ny alina ny Tompo?\nKa raha nifoha maraina ianao\nDia feno fifaliam-baovao?\nAzonao antsoina ve Jesosy\nHo Sakaiza Mpihevitra anao?"
        ]
    },
    {
        "title": "MBA RENAO VE NY TOMPO",
        "number": 728,
        "chorus": "Jeso no miantso anao\nHanaiky sy hanompo Azy;\nIzy hiaro ny fo, ny hevitrao;\nHitsinjo ny dianao.",
        "verses": [
            "Mba renao ve ny Tompo,\nMiantso anao hanompo Azy,\nMitsotra ny sandriny\nMba handraisany anao.",
            "Jeso ô inty re aho;\nVonona hanompo Anao;\nKa ny foko he fenoy\nIreo fahasoavanao.",
            "Ary any am-parany;\nDia homeny valisoa;\nHiondana eo an-tratrany;\nHiravo mandrakizay."
        ]
    },
    {
        "title": "MBA SAINONAO ANGE",
        "number": 76,
        "verses": [
            "Mba saininao ange,\nSao tsy mba fantatrao\nNy zava-dehibe nataoko ho anao;\nHevero, ka lazao, lazao\nIzay mba vitanao",
            "Ny lapanao tary\nNy fahefako tao\nNilaozako taty hanavotr'aina anao;\nHevero, ka lazao, lazao\nIzay mba foinao",
            "Heveronao ange\nNy nisoloana anao;\nNangidy indrindra anie\nNy nahazoana anao\nHevero, ka lazao, lazao\nIzay mba nentinao.",
            "Endre! ny aiko koa\nNomeko ho anao;\nTsy misy zava-tsoa\nTsy foiko ho anao\nHevero, ka lazao, lazao\nIzay mba taminao.",
            "Ry Tompo be fitia!\nEndre! 'ty vitanao;\nIzaho izay mpania\nTsy mahavaly izao;\nNy aiko no mba raisonao\nHanao ny sitrakao."
        ]
    },
    {
        "title": "MBOLA EO AMIN'NY SEZA FANDRIANANY ANDRIAMANITRA",
        "number": 203,
        "chorus": "Eo amin'ny fiandrianany\nNy Tompo Andriamanitra\nManery antsika ny fitsapana\nAry ny entana mavesatra,\nTsy hilaozany irery\nNa hafoiny ireo Azy\nMbola eo amin'ny seza fiandrianany\nAndriamanitra Tompo.",
        "verses": [
            "Miainga ho any an-danitra ianao vé?\nNarianao ve 'zao tontolo izao?\nAminao ve ny Mpampionona?\nKa derao ny Tompo! Ahy Izy\nMoa niverina ve ireo niara-dia?\nAry toy ny irery ianao?\nMbola eo amin'ny seza fiandrianany\nAndriamanitra Tompo.",
            "Moa reraka sy ory ny fonao\nNoho ny asa sy hainandro be?\nFeno tsilo va re ny lalanao\nAmin' izao fiainana izao?\nMitokàna, lazao ny ahiahy\nSy ireo alahelonao.\nMbola eo amin'ny seza\nFiandrianany\nAndriamanitra Tompo.",
            "Trano bongo ve no misy anao\nAry toy ny tsy misy mpijery?\nMisy lapa aorina ho anao\nAo amin'ilay tanàna soa\n'Zay mamiratra mihoatra ny ety;\nIzy no mpita-marika ao\nMbola eo amin'ny seza\nFiandrianany\nAndriamanitra Tompo.",
            "Ho avy indray izao ny Tompo\nJesosy, toy ilay nialany tety;\nHahita Azy miverina indray\nHoy ny teny fikasany soa\nGaga ve fa toa maharitr'Izy?\nNefa tsy manadino anao\nMbola eo amin'ny seza fiandrianany\nAndriamanitra Tompo."
        ]
    },
    {
        "title": "MBOLA HO TIA ANAO RY KRISTY O!",
        "number": 30,
        "verses": [
            "Mbola ho tia Anao, ryKristy o!\nNo tonom-bavako amin'ny fo\nHenoy ny vavako, mbola ho\ntia Anao\nHo tia Anao, ho tia anao",
            "Tsy ny fiadanan'ny tany intsony\nNo tadiaviko fa ny Anao\nIzao ny vavako mbola ho tia Anao\nho tia Anao, ho tia Anao",
            "Na tonga aza ny fahoriana\nNa mafy aza ny ady ety\nNy hany hirako, mbola ho tia Anao\nHo tia Anao, ho tia Anao",
            "Ny fara-fofon'aiko aza re\nHibitsika fiderana Anao\nNy hany vavako, mbola ho\ntia Anao\nHo tia Anao, ho tia Anao"
        ]
    },
    {
        "title": "MENDRIKA HIANAO",
        "number": 348,
        "verses": [
            "Mendrika ny hanjaka Hianao\nAto am-ponay\nMpanjaka malaza Hianao\nHaleloia\nJeososy no Mpanapaka ahy\nHaleloia (in-3)"
        ]
    },
    {
        "title": "MENDRIKA IZY",
        "number": 83,
        "chorus": "Haleloia (im-8)",
        "verses": [
            "Tiako Jeso (in-3), Haleloia\nTiako Jeso (in-3), Haleloia",
            "Mendrik'Izy (in-3), Haleloia\nMendrik'Izy (in-3), Haleloia",
            "Ho avy Jeso (in-3), Haleloia\nHo avy Jeso (in-3), Haleloia"
        ]
    },
    {
        "title": "MENDRIKA NY ZANAK'ONDRY",
        "number": 647,
        "verses": [
            "Mendrika ny Zanak'Ondry\nMba handray hery, dera, laza, fahendrena,\nVoninahitra, fahefana.\nMendrika ny Zanak'Ondry mandrakizay doria.\nHaja, hery ary fandresena,\nFahendrena, harena feno fahefana.\nHaja, hery ary fandresena\nFahendrena, harena ho an'ny Zanak'Ondry."
        ]
    },
    {
        "title": "METY AMIN'IZAY ILAINY",
        "number": 783,
        "verses": [
            "Mety amin'izay ilainy isan'ora,\nisan'andro aho,\nManaiky ny Tompo tanteraka aho\nmandra-pialako ety,\nToy ny tanimanga eo an-tananan'ny\nmpanefy azy re;\nMety amin'izay ilainy isan'ora,\nIsan'andro aho",
            "Mitoetra amin'ny finoana isan'ora,\nisan'andro aho\nManaiky hiatrika fakam-panahy\nMandritra ny fiainako\nNy ho mpanompony\nHampiasainy no ilaiko\nIsan'ora isan'andro aho"
        ]
    },
    {
        "title": "METY HO SAROTRA",
        "number": 697,
        "chorus": "Mety ho sarotra\nNy làlana hitondrany\nNefa tsy hahafoy Ahy Izy\nFa homba ahy hatrany",
        "verses": [
            "An'i Jeso aho izao\nFa tsy tompon'ny tenako\nNatolotra Azy ny foko\nIzy no sakaizako",
            "Tsy irery intsony aho\nManana an'i Jesosy,\nTsy ahiako izay hiseho\nSatria amiko Izy.",
            "Maro ireo namako taloha\nRehefa nahita ahy niova\nKa tsy nety hiara-dia\nAmiko intsony.",
            "Tsy laviko fa mbola hisy\nZavatra tsy ampoizina\nAnefa tsy hahasaraka ahy\nAmin'ny fitiavany."
        ]
    },
    {
        "title": "MIAKATRA HATRANY HATRANY",
        "number": 46,
        "verses": [
            "Mandroso miakatra\nHatrany, hatrany aho\nHo any amin'ny tany mamiratra\nIsan'andro vaovao dia\nDingana mankao\nAmin'ny fonenan'ao an-danitra\nMandroso miakatra\nHatrany, hatrany aho\nHo any amin'ny tany mamiratra\nIsan'andro vaovao dia\nDingana mankao\nKa hitsahatra ny ady ety."
        ]
    },
    {
        "title": "MIAMBINA AHY NY RAIKO",
        "number": 486,
        "chorus": "Matoky an'Andriamanitra aho,\nFantatro fa Izy no miantok'ahy,\nMiaro ny fanahiko,\nMiambin'ahy ny Raiko an-danitra.",
        "verses": [
            "Matoky an'Andriamanitra aho\nEty an-tany an-dranomasina;\nNa aiza n'aiza hisy ahy,\nAoka ho tong'izay ho tonga.",
            "Ny voninkazo karakarainy;\nNy vorona ampanidininy;\nAzo antoka f a tsaroany aho;\nMiambin'ahy ny Raiko an-danitra.",
            "Matoky an'Andriamanitra aho,\nNa any an-davaky ny liona aza\nNa derain' aho na kianina\nNa mamaky afo, na ranobe.",
            "Mety ho maizina ny lohasaha\nMety ho lalina ny hantsana\nNefa ilay Mpiandry ahy,\nMitarik'ahy ho tody soa ary."
        ]
    },
    {
        "title": "MIANATRA NY MIANKINA AMIN'I JESOSY",
        "number": 170,
        "verses": [
            "Feno fifaliana ny foko hatrizay\nNaha-Mpanjakako an'i Jeso;\nNy Fanahy no hitarihany ahy,\nMampianatra ahy hiankin'Aminy.",
            "Misy fandresena isan'andro\nho ahy\nSy fiadanana mahafa-po\nManampy ahy Izy\namin'ny asako;\nMianatra ny miankin'Aminy aho.",
            "Maty ho ahy Izy ka izay takiany\nFo matoky toy ny an'ny zaza\nAry koa fitiavana sy fo izay,\nMianatra ny miankin'Aminy.",
            "Mianatra ny miankina,\nAmin'i Jesosy aho,\nF'ahazoako hery be izany,\nKa miankin'Aminy aho."
        ]
    },
    {
        "title": "MIANDRAIKITRA AHY TOKOA NY TOMPO",
        "number": 562,
        "chorus": "Jesosy, Zava-drehetra Hianao\nMandray andraikitra ahy\nTiako Hianao no hitarika ahy\nMisaotra Tompo ô!",
        "verses": [
            "Jehovah no mpiandry ahy,\nTsy hatahotra aho\nMiandraikitra ahy hatrany Izy\nNa miala sasatra na mandeha aho\nMiandraikitra ahy tokoa ny Tompo",
            "Miaraka amiko Izy, mitantana ahy\nEkeko ny fitarihany\nFenoiny fitahiana, tsinjoviny aho\nMiandraikitra ahy tokoa ny Tompo",
            "Famindram-mpo, fiadanana\nNo miaraka amiko\nEto an-tany fivahinianana\nMiaina ao amin'ny fanatrehany\nMiandraikitra ahy tokoa ny Tompo.",
            "Fahafenoana hasambarana\nNo tsapa isan'andro\nMilamina ny fiainako\nTsy miherikerika intsony ny fisainako\nMiandraikitra ahy tokoa ny Tompo"
        ]
    },
    {
        "title": "MIANDRY TSY HO ELA",
        "number": 256,
        "chorus": "Miandry tsy ho ela ilay fiaviany\nNy fiverenan'ny Mpanjakako\nHo avy handray, hampody ahy koa\nAo no mihoby'reo anjely.",
        "verses": [
            "Te-hifanatrika amin'ny Mpamonjy\naho\nAry iriko ny fiaviany indray\nAry ireo olo-masina sy mahatoky\nHo tonga ao tokoa.",
            "Indraindray sarotra ny lalako\nToa lavitra ny diako\nNefa Izy re no eo anilako\nMampahery sy mitarika ahy",
            "Raha tafiditra ao ho toy inona\nRaha mahita ilay nisolo ahy\nNy alaheloko sy ny ahiahiko\nHo tafajanona avokoa."
        ]
    },
    {
        "title": "MIANKINA AMIN'I JESOSY",
        "number": 533,
        "chorus": "Miankina, miara-dia amin'i\nJesosy aho\nMatoky Azy, Mpiandry sy\nMpitarika ahy.",
        "verses": [
            "Reraka mandeha irery\nMavesatry ny ota\nMisy fitsaharana ve\nRaha tsy manana an'i Kristy?",
            "Manahy ny tsy hahajoro\nSy tsy ampy vavaka\nFa eo an-tratran'ny Tompo\nLasa ny tahotra sy ahiahy.",
            "Tsy mitebiteby intsony\nMiatrika olana\nMiankina amin'i Jesosy\nIzay mitondra 'reo entako.",
            "Mandia 'lay lalana\nHo hitako ny marina\nMiankina eo an-tratrany\nMandroso aho, voavotra."
        ]
    },
    {
        "title": "MIANKINA AMINY",
        "number": 313,
        "chorus": "Ankino Aminy ny làlanao\nAry matokia Azy\nFa izy no hanatanteraka\nIzay fikasanao.",
        "verses": [
            "Mifalia sy miravoravoa\nAmin'ny Tompo ianao;\nDia homeny anao\nIzay rehetra ilainao.",
            "Tsy mbola nisy lasitra\nIzay nampidirany anao;\nNahatonga fahavoazana,\nTeo amin'ny fiainanao",
            "Mety hisy fitsapana anao\nNa fizahan-toetra\nAoka hankasitraka ny Tompo,\nAmin'izay miseho.",
            "Koa raha mihilangilana,\nMitady hianjera;\nIankino ny Tompo Jesosy\nMba hampijoro tsara."
        ]
    },
    {
        "title": "MIANTSO ANAO JESOSY",
        "number": 125,
        "chorus": "Miantso anao Jesosy;\nRy ondry mania, miveren'ianao,\nFa Izy no Mpiandry tsara\nIzay mahavonjy anao.",
        "verses": [
            "Tsy avy hiantso\nIzay olo-marina ny Tompo,\nFa ny mpanota sy very\n'Zay tonga hibebaka.",
            "Ataovy ampy ny lasa,\nIzay nanaranam-po,\nKa ny andronao sisa,\nOmeo an'i Jesosy.",
            "Tsy misy fifaliana\nHo an'ny mpiodina,\nNy fahatezeran'ny Tompo\nIzay no anjarany."
        ]
    },
    {
        "title": "MIANTSO ANAO NY TOMPO",
        "number": 295,
        "chorus": "Indreto izahay ry Tompo\nHo miaramilanao;\nHanao ny asanao\nKa vonona hankatò ny baiko\nIraka hampanaovinao.",
        "verses": [
            "Injao ny feon'ny Tompo miantso\nKa manao hoe iza no handeha\nHitory sy hanambara ny teny\nAmin'ireo voafatotra?",
            "Mbola marobe ireo namana\nVesaran'ota anaty aizim-be;\nVoagadra vin'ny satana\nMijaly sy fadiranovana",
            "Raha miasa ho an'ny Tompo ianao\nDia omeny valisoa lehibe,\nSatroboninahitra vaovao\nMirenty vatosoa mamiratra",
            "Ry Jesosy Tomponay ô!\nMba tafio hery avy Aminao\nFenoy ny Fanahy Masina\nmba hamokatra ho Anao."
        ]
    },
    {
        "title": "MIANTSO, MIBITSIKA AHY JESOSY",
        "number": 172,
        "chorus": "Mankanesa aty,\nRy miasa fatratra!\nMiantso, mandondona koa Jesosy\nO ry mpanota avia!",
        "verses": [
            "Miantso, mibitsika ahy Jesosy\nMiantso ahy sy ianao,\nMiandry eo am-baravarana Izy\nMiandry ahy sy ianao,",
            "Miangavy Izy ka tsy hiaraka ve?\nMiangavy ahy sy ianao\nTsy ahoanao'zany indrafony ve?\nIndrafo ahy sy ianao,",
            "Mihelina sy mandalo ny andro\nMandalo ahy sy ianao\nNy fahafatesana no indro avy\nAvy ho ahy sy ianao,",
            "Noho ny fitia nanomezany toky\nToky ho ahy sy anao\nNa dia nanota aza, Izy mamela\nMamela ahy sy anao."
        ]
    },
    {
        "title": "MIANTSONA AO AMIN'I JESOSY AHO",
        "number": 119,
        "chorus": "Miantsona ao amin'i Jesosy aho,\nNy rivotra sy onja tsy atahorako.\nMiantsona ao amin'i Jesosy aho,\nFa manan-kery hamonjy Izy.",
        "verses": [
            "Ambony ranomasin'ny fiainana,\nJeso no antenaiko ho vatofantsiko\nRaha toa mamely ahy ny tafio-\ndrivotra,\nMiankina amin'ny indrafony aho",
            "Miaro Izy ka manome fiadanana,\nNy feony mampangina ny onjan-\ndranobe;\nNy Mpanamory ahy no itokiako,\nFa eo anilako lalandava Izy",
            "Mpamonjy iantorahan'ny\nVatofantsiko,\nMiaro amin'ny rivo-doza be Izy\nE! tsinjoko am-pinoana ery am-pita re\nNy lanitra nomanina mba ho ahy."
        ]
    },
    {
        "title": "MIARA-MANDEHA AMIN'NY MPANJAKA AHO",
        "number": 260,
        "chorus": "Miara-mandeha, Haleloia!\nO! derao ny Anarany!\nMiara-mandeha sy miresaka\nAmin'ny Mpanjaka aho.",
        "verses": [
            "Nalahelo, nirenireny tokoa,\nIzao sambatra sy mitsahatra aho\nKa faly mihira tontolo andro\nMiara-mandeha ami-Mpanjaka aho.",
            "Nofatoran'ota naharitra aho\nTsy nahita vonjy sy fiononam-po\nIzao toy ny vorona lohataona\nAfaka sy miravoravo tokoa.",
            "Ry fanahy kivy sy miady koa\nAvelao Jesosy handroso ao am-po\nHifaly amin'ny famonjeny ianao\nMidira amin'ny hazavana hatrizao."
        ]
    },
    {
        "title": "MIARA-PALY",
        "number": 585,
        "verses": [
            "Endrey ny firaisam-po\nNy zanak'Andriamanitra\nFoana ny fisarahana\nMiara-paly avokoa\nNy zanak'Andriamanitra.",
            "Feno fifankatiavana\nNy zanak'Andriamanitra\nFifaliana isan'andro\nAvy ao anaty fon'ny\nZanak'Andriamanitra.",
            "Fiadanana mameno fo\nMilamina ny fiainana\nJesosy mampitoetra\nFifaliana ao amin'ny\nZanak'Andriamanitra."
        ]
    },
    {
        "title": "MIARAKA AMIKO JESOSY",
        "number": 512,
        "chorus": "Miaraka amiko Isan'ndro\nJesosy, Jesosy Mpamonjiko\nMiaraka amiko isan'andro\nJesosy, miaraka Aminy aho\nMandrakizay (mandrakizay )",
        "verses": [
            "Miaraka amiko isan'andro Jesosy\nTsapako eo anilako Izy\nMibitsika amiko tenim-pahendrena\nLasa ny ahiahy sy tahotra",
            "Miaraka amiko isan'andro Jesosy\nZarainy ireo entako\nNy tolo-tsainy mitarika ahy\nMiaro amin'ireo fandrka",
            "Miaraka amiko isan'andro Jesosy\nTena afa-po tokoa aho\nMiha- mazava hatrany ny lalako\nRaha miara-dia izahay",
            "Miaraka amiko isan'andro Jesosy\nNa dia tsy hitako maso Izy\nMomba anao hatrany aho, Hoy Izy\nAmpy ahy ny teny fikasany"
        ]
    },
    {
        "title": "MIARAMILA KELY",
        "number": 73,
        "verses": [
            "'Zaho dia miaramila kely\nAo amin'ny tafika,\nTsy nasain'ny Tompo hiandry\nMba ho rehefa lehibe aho;\nToheriko ny devoly,\nJesosy no ankatoaviko;\nAry ny famindrako dia\nManamarika Haleloia (in-2)"
        ]
    },
    {
        "title": "MIARETA TORY SY MIVAVAHA",
        "number": 798,
        "verses": [
            "Miareta-tory, mivavaha\nAry aoka hafana fo\nMiadia tsy ankiato\nAmin 'ny fo mazoto\nHo amin'ny asan'ny Tompo,\naza matahotra\nFa ao ny fahasoavany.",
            "Miareta-tory, mivavaha\nAry aoka ho be fitiavana\nMandehana amin'ny fahazavany\nKa matokia, tohizo ny asa izay\nnataonareo isan'andro\nFa handray valim-pitia.",
            "Miareta tory, mivavaha\nAndrandrao ny loha\nMangataha fiadanana\namin'ny Tsitoha\nIzy no ianteherana, azo antoka\nHo Azy ny voninahitra."
        ]
    },
    {
        "title": "MIBANJINA NY LAPANAO AHO",
        "number": 399,
        "verses": [
            "Mibanjina ny lapanao aho\nNy foko maniry ny Tompo\nNy momba aho rehetra\nMiantso ny Tompo Velona\nNy Ray Mpanjakako",
            "Ny harena sy volamena\nmety hanananay koa\nNefa tsy manafaka ny olana izany\nJeso no fiainako",
            "Ny baiboly dia nomena\nHanovozana fahendrena\nKa vakio isan'andro\nisan'andro izany\nFa ao Andriamanitra",
            "Ny manompo an'i Jesosy\nZava-maivana angamba izany\nNefa ilofosako maraina sy hariva\nHampifaly ny Tompo"
        ]
    },
    {
        "title": "MIDERA HOE: HALELOIA",
        "number": 235,
        "chorus": "Koa mifalia ary miderà hoe:\nHaleloia!\nHo Anao, ry Tompo\nMpanjakanay\nNy saotra mandrakizay.",
        "verses": [
            "Aoka hoderaina fa Jesosy\nNo mihevitr'antsika\nAoka ho lazaina fa Izy koa\nNo mamoha ny lanitra.",
            "Lasa ny ozona sy aizina\nNoho ny fanatrehany\nLasa ny henatra sy ny loza\nNoho ny fisoloany.",
            "Azo antoka ny famonjena\nNataony tao Kalvary\nNatolotr'Azy ny famonjena\nMenatra ilay rafy.",
            "Marina fa mbola mety hisy\nFitsapàna mahamay\nTsy miov'anefa ny hevitray\nAn'i Jesosy'zahay."
        ]
    },
    {
        "title": "MIFALIA",
        "number": 72,
        "verses": [
            ";;;Mifalia amin'ny Tompo\nHoy izaho indray; mifalia;;;\n;;;Mifalia (in-2)\nHoy izaho indray; mifalia;;;"
        ]
    },
    {
        "title": "MIFALIA IANAO",
        "number": 780,
        "chorus": "Noho ny fitiavany\nMifalia ianao ho mandrakizay",
        "verses": [
            "Ry mino ô! mifalia\nJereo ny Tomponao\nNy fitiavany ts'isy fetra ho anao",
            "Miravoa ihany koa\nDerao Jesosinao\nNoho ny famonjena\nnamoizany aina",
            "Resy ny fasana\nMihobia ianao\nF'Andriamanitra nandresy\nizany ho anao",
            "Manatona, minoa\nDera ny Mpamonjy\nF'hiseho ny voninahiny\ntoa lavitra",
            "Ho any an-danitra\nMandrakizay tokoa\nNy fiderana\nan'Andriamanitra Tsitoha"
        ]
    },
    {
        "title": "MIFALIA MANDRAKARIVA",
        "number": 741,
        "verses": [
            "Mifalia mandrakariva amin'ny Tompo (in-3)\nHoy izaho indray, mifalia"
        ]
    },
    {
        "title": "MIFAMPIVAVAHA",
        "number": 457,
        "verses": [
            "Raha mandohalika hivavaka hianao\nDia ento am-bavaka aho\nIlaiko foana ny famonjen'ny Tompo\nKa ento am-bavaka aho\nMivavaha ho ahy hianao\nTena ilaiko Jesosy\nMivavaha ho ahy hianao\nLazao Azy ny anarako\nRaha mandohalika hivavaka hianao\nDia ento am-bavaka aho\nIlaiko foana ny famonjen'ny Tompo\nKa ento am-bavaka aho",
            "Raha mandohalika hivavaka hianao\nDia ento am-bavaka aho\nIlaiko foana ny famonjen'ny Tompo\nKoa ento am-bavaka aho\nHivavaka ho anao aho\nIlainao tokoa ny Tsitoha\nHivavaka ho anao aho\nNoresahiko Azy ny aminao\nRaha mandohalika hivavaka hianao\nDia ento am-bavaka aho\nIlaiko foana ny famonjen'ny Tompo\nKa ento am-bavaka aho."
        ]
    },
    {
        "title": "MIHA-MAMIKO ISAN'ANDRO",
        "number": 183,
        "chorus": "Endrey ny hatsarany! Endrey\nNy voninahiny\nRaha misy mamiko indrindra dia\nIanao Jeso.",
        "verses": [
            "Manakaiky Anao isan'andro ny foko\nFotsy noho ny lisy sy mamirapiratra\nSary tsara indrindra tamin'ireo\nnofiko\nMihamamy isan'andro amiko\nIanao Jeso.",
            "Ny voninahitrao Jesosy tonga amiko,\nRaha nahita Anao avy eny lavitra\naho,\nFianinam-po sy fifaliana azoko,\nMihamamy isan'andro amiko\nIanao Jeso.",
            "Raha mavesatra ny foko amaiva-\nninao\nAmpofoinao aho raha azon'ny\nmanjo,\nTiako Ianao mivesatra ny entako\nMihamamy isan'andro amiko\nIanao Jeso."
        ]
    },
    {
        "title": "MIHAINOA",
        "number": 231,
        "verses": [
            "Mihainoa, mihainoa\nNy feon'anjely sambatra\nMilaza fa vao teraka\nNy Zanak'Andriamanitra\nMihainoa izao (in 2)",
            "Mifalia! Mifalia!\nRy zanak'olombelona\nFa tonga ilay Mpanavotra\nAntsika izay nifatotra\nMifalia izao. (in 2)",
            "Mba omeo! mba omeo!\nNy fonao fa angatahiny\nNy tenany natolony\nAnao izay malalany;\nMba omeo izao. (in 2)",
            "Matokia! Matokia\nKa manaraha Azy izao\nIlay Mpamonjy be fitia\nNanetry tena ho anao;\nMatokia izao. (in 2)"
        ]
    },
    {
        "title": "MIHIRA ATAOVY ANTSO AVO",
        "number": 665,
        "verses": [
            "Haleloia ho an'ny\nAndrian'ny fiadanana\nHaleloia, velona mandrakizay\nHaleloia,\nZanaky ny Ray izy\nHaleloia,\nHovohany ny lanitra",
            "Haleloia,\nHo an'ny Tompon'ny tompo\nHaleloia,\nManjaka ao am-pontsika.",
            "Mihirà, ataovy antso avo\nMihirà, hobio ny Mpanjakanao\nMihirà ataovy antso avo\nHirao ny Mpanjakan'ny mpanjaka\nHaleloia, haleloia ho an'ny Mpanjaka.",
            "Mihirà, ataovy antso avo\nMihirà, hobio ny Mpanjakanao\nMihirà ataovy antso avo\nHirao ny Mpanjakan'ny mpanjaka"
        ]
    },
    {
        "title": "MIHIRA ATO AM-POKO",
        "number": 364,
        "verses": [
            "Ho ahy no nampahoriana Azy\nfatratra\nHo ahy izay tsy mendrika\nHo ahy no nampahoriana Azy\nfatratra\nHo ahy Tompo ô; ho ahy tokoa.",
            "Ho ahy no nijaliany fatratra\nHo ahy izay tsy mendrika\nHo ahy no nijaliany fatratra\nHo ahy Tompo ô; ho ahy tokoa.",
            "Ho ahy no nanombohana Azy\nHo ahy izay tsy mendrika\nHo ahy no nanombohana Azy\nHo ahy Tompo ô; ho ahy tokoa.",
            "Ho ahy no nanandratana Azy\nHo ahy izay tsy mendrika\nho ahy no nanan dratana Azy\nHo ahy Tompo ô; ho ahy tokoa.",
            "Ho ahy no hiverenan'i Jesosy\nHo ahy izay tsy mendrika\nHo ahy no hiverenan'i Jesosy\nHo ahy Tompo ô; ho ahy tokoa.",
            "Mihira ato am-poko fitiavana iray\nFitiavana ny Mpamonjiko\nMihira ato am-poko fitiavana iray\nIzay mahasambatra ahy."
        ]
    },
    {
        "title": "MIHOBIA ENY MIHOBIA",
        "number": 658,
        "verses": [
            "Mihobia, mihirà am-pifaliana\n(Fa tia antsika ny Tompo\neny mihirà) (in-2)",
            "Mivavaha hatrany am-pinoana\n(Fa mihaino ny Tompo eny mivavaha) (in-2)",
            "Ho avy indray Jesosy\nHo avy indray\nHandray antsika ho Azy\nHo avy faingana. (in-2)"
        ]
    },
    {
        "title": "MIHOBY NY FANAHIKO",
        "number": 21,
        "chorus": "Ny ran'i Jesosy\nNo tena avotro\nKa sambatra aho\nSy tretrika am-po.",
        "verses": [
            "Mihoby ny fanahiko\nfa voavonjy izao\nNy ratran'ny Mpamonjiko\nno misy aim-baovao.",
            "Ny ratran'ny Mpamonjiko,\nry foko mba jereo,\nFa hanasitrana anao,\nKa ho fiainanao,",
            "Mba mibitaha re, ry fo!\nny gadra tapaka\nNy hajambana izay nanjo\nizao dia afaka."
        ]
    },
    {
        "title": "MIJERE NY ZANAK'ONDRY",
        "number": 18,
        "chorus": "Mijere ny Zanak'Ondry!\nMijere ny Zanak'Ondry\nIzy irery ihany no mahavonjy anao\nMijere ny Zanak'Ondry!",
        "verses": [
            "Irinao vé ho afak'ota anio?\nJereo ny Zanak'Ondry\nIzy no maty tao Kalvary,\nHo mpanavotra anao.",
            "Raha alaim-panahy ka azon-tahotra\nJereo ny Zanak'Ondry\nNy heriny no hampandresy anao\nJereo ny Zanak'Ondry.",
            "Trotraka va fa toa lavi-dalana?\nJereo ny Zanak'Ondry\nNy fitiavany no hampandresy anao\nHampifaly ny fonao.",
            "Raha semban'aloka eny an-dalana?\nJereo ny Zank'Ondry\nNa ory na finaritra ety\nJesosy aminao"
        ]
    },
    {
        "title": "MIJERY ANAO AHO TOMPO O!",
        "number": 671,
        "verses": [
            "Tsy noheveriko intsony\nIzay zavatra taloha\nFa ny ho aviko kosa\nNo hobanjiniko\nHanohy ny dia raha tarihinao\nIzay fahoriako tsy hampiato ahy.",
            "Nataoko tsinontsinona\nIzay rehetra manintona ahy\nFa te- handroso aho\nSatria Hianao manampy ahy\nHanohy ny dia raha tarihinao\nIzay fahoriako tsy hampiato ahy.",
            "Tompo ô, mijery Anao aho\nHanompo Anao\nHanaja Anao Tompo.",
            "Tsy hatahotra aho\nFa handeha ka hijery Anao\nTompo ô mijery Anao aho\nHanompo Anao\nHanaja Anao Tompo."
        ]
    },
    {
        "title": "MIJERY IREO TSINTSINA IZY",
        "number": 547,
        "chorus": "Mihira aho satria\nMananampiantoka\nNy tsintsin'aza jereny\nKa tsy mba hafoiny aho",
        "verses": [
            "Nahoana aho no ho kivy\nRaha misy rahona,\nJesosy no sakaiza\n'Zay tsy manadino\nIzy dia mitsimbina\nSady mihevitra ahy\nIzy mijery sy miahy\nIreo tsintsina\nKa dia fantatro tokoa\nFa tsy mba hafoiny aho",
            "Tsy mba hanahy ny foko\nFa miankin'Aminy\nHeny hatsarany\nFeony malefaka\nKoa afany ny tahotro\nSy ny fisalasalako,\nIzy mijery sy miahy\nIreo tsintsina,\nKa ny dingana ataoko\nDia feno fahatokiana\nNa dia toy ny foana aza",
            "Ny fanantenana,\nDia manatona hatrany\nHo eo anilany\nMba ho karakarainy\nSy hiandraiketany,\nFa izy mijery sy miahy\nIreo tsintsina\nKa hosoloiny hira\nIreo tebitebyko"
        ]
    },
    {
        "title": "MIJORO AHO",
        "number": 114,
        "chorus": "Mijoro aho (in-2)\nMijoro amin'ny tenin'i Kristy Jesosy\nMijoro aho (in-2)\nMijoro amim-pahatokiana.",
        "verses": [
            "Tenin'i Kristy no ianteherako\nAzo antoka sy tsy mivadika\nRaha tonga ny ahiahy\nsy ny tahotra\nIo no vato ianteherako.",
            "Tenin'i Kristy no ianteherako\nAfaka avokoa izao ny otako\nFa efa voadion'ny rà soan'i Jeso\nNy fahafahany no tanako.",
            "Tenin'i Kristy no ianteherako\nMamehy ahy ny tadim-pitiavana;\nIsan'andro aho hifaly sy handresy\nNoho ny sabatry ny Fanahy.",
            "Tenin'i Kristy no ianteherako\nNoho izany dia tsy hatahotra aho\nHenoiko isan'andro koa ny feon'\nNy Fanahy\nKa mahita fitsaharana aho."
        ]
    },
    {
        "title": "MIJORO HO VAVOLOMBELONA",
        "number": 334,
        "chorus": "Ankehitriny izahay\nManoatra noho ny mpandresy\nAmin'ny alàlan'ilay\nNitia anay dia Jesosy.",
        "verses": [
            "Mety ho gaga ianao\nRaha mijoro eto izahay\nMba ho vavolombelon'i Jesosy\nIzy no nanafak'anay\nTao anatin'ny aizin'ota\nIzy no nanova ny toetranay",
            "Tsy nahita fitsaharana\nMihitsy izahay taloha\nNampahorian'ny tahotry ny helo\nFantatray anefa ankehitriny\nNa fahamarinana\nFa an'i Jesosy ny fahefana.",
            "Nampisotroin'i Jesosy anay\nNy tena rano velona\n'Zay nolazain 'ny tenifikasana\nNy heriny mahagaga\nNo ahefanay izay tsara\nSy ahazoanay fandresena isan'andro",
            "Fantatrao moa ve fa tiany\nHo voavonjy avokoa\nNy olombelona rehetra izao\nTsy misy tiany ho very\nFa mba hanana fiainana\n'Zay rehetra mino sy mandray Azy.",
            "Koa indreto izahay\nMijoro ho vavolombelona\nHilaza fa tia anao Jesosy\nRaiso Izy ho Tompo\nSy Mpamonjy anao manokana\nDia ho afaka toa anay hianao"
        ]
    },
    {
        "title": "MIJOROA EO ANILAKO TOMPO O!",
        "number": 732,
        "verses": [
            "Raha mamely ny tafiotram- piainana\nMijoroa eo anilako Tompo ô!\nRaha mafy ny fiantefan'ny\nonja mahery;\nMijoroa eo anilako Tompo ô!",
            "Raha atositosiky ny olona aho;\nMijoroa eo anilako Tompo ô!\nMampangina ny onja sy ny\nrivotra Ianao;\nMijoroa eo anilako Tompo ô!",
            "Rehefa manafika ahy satana;\nMijoroa eo anilako Tompo ô!\nNa mandifotra ahy aza ireo hahoriana;\nMijoroa eo anilako Tompo ô!",
            "Rehefa tsy mahomby izay ataoko\nMijoroa eo anilako Tompo ô!\nEfa mba niezaka hanao ny izay\ntsara aho;\nMijoroa eo anilako Tompo ô!",
            "Rehefa miha-osa sy antitra aho\nMijoroa eo anilako Tompo ô!\nRaha mandeha amin'ny làlan'ny\nfahafatesana aho;\nMijoroa eo anilako Tompo ô!"
        ]
    },
    {
        "title": "MILAMINA NY FIAINAKO IZAO",
        "number": 451,
        "chorus": "Milamina tokoa ny fiainako izao\nSatria Jesosy no Mpamonjiko.",
        "verses": [
            "Taona maro aho\nNo nandia lalan-tsarotra\nNy fahany sy ny foko feno tahotra\nFa vao nahita sy nanaiky ny\nMpamonjy aho\nNiova ny zava-drehetra\nNilamina avokoa.",
            "Faly ny foko izao feno ny fitiavany\nAo andalan-tery aho,\nHo any an-danitra\nHo Azy ho doria aho,\nMaty tao Kalavary\nSatria Mpamonjy tia Izy\nMilamina aho izao.",
            "Eo anilako ny Mpamonjy\nMampahery ahy\nNy sandriny mahery\nMisakambina ahy\nFantatro fa Mpamonjy\nMahatahiry ahy Izy\nFa raha matoky Azy hianao\nHilamina tokoa."
        ]
    },
    {
        "title": "MINO AHO TOMPO O!",
        "number": 204,
        "chorus": "He mino aho, ry Tompo ô!\nAtsangano hahafindra\nTendrombohitra aho\nHe mino aho, ry Tompo ô!\nAry tsy misalasala aho.",
        "verses": [
            "Rehefa mamely ny tafiotra be\nKa mibitsika hamerina ahy satana\nFinoana kely dia indro\nHampandeha\n'Reo rahona izay manamaizina.",
            "He mora ny matoky ny sandriny,\nRaha tony ny ranomasina ety;\nKanefa raha toa safotry ny onja;\nDia raisina kely ny finoana.",
            "Nandre olona aho'zay nilaza hoe\n\"Hijoro hatramin'ny farany re!\"\nKanefa raha nasain'\nny fakam-panahy\nDia tsy nino intsony\nfa nihemotra.",
            "He misy amin' ireo '\nzay maheri-fo\nMandroso ka toa\nsahy miady tokoa.\nKanefa amin'ny ady mangotraka\nRaha tokony hino,\nindreo potraka.",
            "Ry mpihazakazaka, tsarovy koa\nNy finoana dia tsy fihetseham-po\nRaha toa maizina manodidina anao\nAoka hino isika fa tsy mba handao."
        ]
    },
    {
        "title": "MINOA FOTSINY IHANY",
        "number": 309,
        "verses": [
            "Aza matahotra\nFa minoa fotsiny ihany\nNy zavatra rehetra dia hain'ny mino\nJereo Jesosy raha tianao ny handresy\nNy zavatra rehetra dia hain'ny\nMino (in-2)"
        ]
    },
    {
        "title": "MINOA HATRANY",
        "number": 412,
        "chorus": "Minoa hatrany ny Teny\nFikasan'andriamanitra\nNa dia ela aza ny fotoana\nDia azo antoka ny valim-bavaka\nMinoa hianao.",
        "verses": [
            "Raha tsy nahazo valim-bavaka\nAza mba manary ny finoana\nNa manaiky ho kivy hianao\nApetraho aminy ireo adinao",
            "Aza isalasalana ny Tompo\nRaha zahan-toetra sy alaim-panahy\nMandalo izao tontolo izao\nFa ny Teniny mitoetra hatrany\n3 Na dia tsy maintsy mandalo\nAizina az'ianao\nManavatsava làlan-davitra feno tsilo\nTsinjovy ny fiposak'ilay maraina"
        ]
    },
    {
        "title": "MINOA HATRANY NY TENY FIKASANY",
        "number": 513,
        "chorus": "Minoa hatrany (in-3)\nNy teny fikasany\nNa dia toa maharitra misy\nvalim-bavaka\nMinoa hatrany ny teny fikasany",
        "verses": [
            "Raha toa tsy nahazo valim-bavaka\nAza kivy na mamoy fo\nOmeo an'i Jesosy ny entanao\nMinoa hatrany ny teny fikasany",
            "Aza manahy raha alaim-panahy\nMandalo ny ety fa tsy ny teniny\nTsitoha Jesosy, Miafena ao Aminy\nMinoa hatrany ny teny fikasany",
            "Fotoana fohy ny aizina andalovana\nSy ireo olana atrehanao\nF'indro hazavana, mitsikia, mihirà\nMinoa hatrany ny teny fikasany"
        ]
    },
    {
        "title": "MIRAISA AMIN'I JESOSY",
        "number": 392,
        "chorus": "Tomoera Aminy raha manjombona,\nNa ireo sakaiza na ny rafinao,\nAoka tsy ho rahona hampiala anao,\nMiraisa hatrany amin'i Jeso.",
        "verses": [
            "Tianao ve ny handresy ireo rafinao\nSy ny fitsapana hitanao ety?\nTianao ve ny handresy ny fakam-\npanahy?\nMiraisa hatrany amin'i Jeso",
            "Be ny fo maratra izay miandry anao\nHanome ny teny fitsaharana,\nKa ny fifaliana sy fiadanana\nNo ho entinao mba ho azy ireo.",
            "Tianao ny hitahiry ny fitiavana\nSy ho fitahiana isan'andro koa?\nAoka ny Fanahy hampandresy anao\nMiraisa hatrany amin'i Jeso",
            "Tianao ve hitoetra miray Aminy\nMba ho voatahiny isan'andro koa?\nTomoera an-tongony mba hianatra\nSy hivavaka eo tsy hitsahatra."
        ]
    },
    {
        "title": "MIROSOA HATRANY",
        "number": 527,
        "chorus": "Mirosoa hatrany\nTaomy ny hafa\nMirosoa hatrany fa miredona\nIreo feo ao an-danitra.",
        "verses": [
            "Mirosoa hatrany, andeha hiasa\n'Njay ny feon'ny Tompo toy ny\nTrompetra\nAoka havesatra aminao ny\nhamokatra\nVao mangiran-dratsy mandra-\npahariva.",
            "Mirosoa hatrany, minoa ny\nTompo\nAmpitao ny baiko amin'ireo namana\nFo ravo tokoa, mandray fitahiana\nManoro ny hafa ny làlan-danitra.",
            "Mirosoa hatrany, isan'andro miasa\nJesosy mitarika ho any an-danitra\nMitaona rahalahy, mampahery ny\nhafa\nManao dingana hahazoana ny loka."
        ]
    },
    {
        "title": "MISAORA AN'ANDRIAMANITRA",
        "number": 349,
        "chorus": "Ety an-tany hilaozanao\nAny an-danitra hovantaninao;\nMisaora an'Andriamanitra\nAmin'izay miseho rehetra;\nNy fitondrany no tsara indrindra\nMihevitra anao Izy.",
        "verses": [
            "Misy zavatra manjo tsy\nnampoizinao ve?\nNy antony dia tsy fantatrao?\nMiara-miasa anie\nNy zava-drehetra\nKoa miareta ianao",
            "Raha rava, ohatra ny harenao tety\nKa arian'ny havanao ianao\nAndrandrao ny lanitra\nMahereza hatrany\nFa Jesosy tsy handao anao.",
            "Mety mihamaro ve\nNy mpanenjika anao?\nAo koa manisy ratsy anao?\nMivavaha ho azy ireo,\nfisaorana atao\nHandresy tsy ho ela hianao.",
            "Tsy mba toy ny teo aloha intsony\nKoa ve\nFa efa mihena ny herinao\nTsarovy ilay teny hoe:\n\"Mandra-pahantitrao,\nTsy miova aho fa tia anao\""
        ]
    },
    {
        "title": "MISAOTRA ANAO TOMPO",
        "number": 570,
        "chorus": "Jesosy Hianao nanova ahy\nNanome ny fiadanana\nTsy irery intsony aho\nEto an-tany fa eo Hianao\nFenoinao fahasambarana aho\nNy foko miravoravo\nNafahanao, navelanao.\nHaleloia.",
        "verses": [
            "Misaotra Anao\nTonga mba hanafaka ahy\nTao anatin'ny aizina\nIzay nitoerako\nMisaotra Anao\nNanome ny fitiavanao\nIzay tsy misy takalony\nTsy manameloka ahy.",
            "Misaotra Anao\nNanome ny Fanahinao\nHanoro ahy ny làlana\nMbola tsy fantatro\nMisaotra Anao\nNoho ireo teninao mampahery\nMampianatra ho mahatoky",
            "Misaotra Anao\nNoho ny fitiavanao\nManampy ahy isan'andro\nMba ho tia ny namako\nMisaotra Anao\nNitehirizanao ahy\nHo velona mandrakizay\nHiaraka Aminao"
        ]
    },
    {
        "title": "MISAOTRA TOKOA",
        "number": 147,
        "verses": [
            "Misaotra tokoa, Tompo ô!\nMisaotra noho ny Zanakao\nNoho ny fanomezana be\nIzay natolotrao mandrakizay"
        ]
    },
    {
        "title": "MISY AIZINA BE MIALOHA NY FAHAZAVANA",
        "number": 382,
        "chorus": "Tsy maintsy misy ny aizina be\nMialoha ny fah'zavana\nMbola hiposaka ny masoandro\nTohizo ny dia ka matokia\n(ka matokia )",
        "verses": [
            "Kivy ve ianao? Mitanondrika?\nSaro-drahona ny masoandro;\nAoka hitohy ho mahatoky,\nFa ao Jesosy 'lay tia anao.",
            "Na tonga aza ny tafiotra\nKa toa ketraka 'zany fonao;\nAraho ny teny Fikasany\nFa tsy hamitak'anao Izy.",
            "Ataovy eo an-tanan'i Jeso\nNy olana, ny ratram-ponao;\nFa Izy no handamin'izany\nKoa ekeo ny sitrapony."
        ]
    },
    {
        "title": "MISY ANJARA HO ANAO AMIN'NY HAZOFIJALIANA",
        "number": 375,
        "chorus": "Misy anjara ho anao\nNy hazofijaliana,\nNa an-tapitris'aza no avy\nEny mbola misy ho anao",
        "verses": [
            "Fialofana ny hazofijalian'i Jesosy\nNy fahasoavany lehibe dia ampy\nHozaraina mba ho ahy sy ho anao",
            "An-tapitrisa no efa\nNandray Azy mba ho Sakaiza;\nMbola manokatra ny vavahadiny\nHo an'ny mpanota re, ny Mpamonjy",
            "Ny Tànan'ny Mpamonjiko\nDia mahery sy maharo ahy,\nNa andro mibaliaka na manjombona\nAmpy ahy ny ràny izay mahadio."
        ]
    },
    {
        "title": "MISY FAMELANA HO ANAO",
        "number": 543,
        "chorus": "Misy famelana ho anao\nEny famelan-keloka\nJeosy maty hanavotra anao\nMamela tanteraka anao.",
        "verses": [
            "Manatona ny Mpamonjy\nMinoa Azy\nMangataha fanavaozam-po\nMamindra fo Izy, aza mihodina\nMisy famelana ho anao izao.",
            "Fahafatesana no tambin'ny ota\nNahoana no ikirizanao?\nLavinao ve ny antsom-pitiavana?\n'Zay manome famelan-keloka.",
            "Hany fiarovana sy famonjena\nHo anao ny hazo fijaliana\nMinoa, fa ny fanahim-pahasoavana\nHanaiky ny fifonanao."
        ]
    },
    {
        "title": "MISY FIAINANA",
        "number": 423,
        "chorus": "Mijere Azy!\nMisy fiainana raha mijery an'ilay\nNohomboana tamin'ny hazo",
        "verses": [
            "Misy fiainana raha mijery an'ilay\nNohomboana tamin'ny hazo\nMijere Azy dia ho voavonjy ianao,\nMijere lay voafantsika re.",
            "Fa nahoana moa Izy no\nnihantona teo,\nRaha tsy nitondra ny otanao?\nAry rà mahadio tamin'ny lanivoany\nRaha tsy handoa ny trosanao?",
            "Tsy mba ny ranomaso na ny\nfivavakao\nFa ny Rà fanavotana fanahy\nAtolory an'ilay nadrotsaka ny Ràny\n'Reo otanao mavesatra.",
            "Aza misalala fa ny Ray nanao hoe\nTsy misy zavatra tsy vita re,\nIzy efa niseho nanatanteraka\nIlay asa 'zay natombony.",
            "Koa raiso avy amin'i Jeso izao\nNy fiainana mandrakizay\nAzo antoka fa tsy ho faty ianao\nSatria velona Jesosinao."
        ]
    },
    {
        "title": "MISY FONENANA ANY AN-KOATRA",
        "number": 706,
        "chorus": "Manana fonen'any ankoatr'aho\nTanàna soa mamirapiratra.\n'Ndray andro any\nRaha tonga any aho\nHandia lalam-be volamena.",
        "verses": [
            "Mionona sy mifaly amin'izay\nAnjarako ety an-tany aho\nSombisombiny ihany 'zay ananako,\nF'any an-koatra no tanteraka.",
            "Matetik'aho dia alaim-panahy\nZaha-toetra, ampahoriana koa,\nToy ny natao tamin'ny mpaminany\nEto amin'ity tany ity.",
            "Az'heverinao fa mahantra aho ety\nSatria irery toa nilaozana;\nTsy kivy anefa, fa mpivahiny ihany\nManam-ponenana hodin'ary."
        ]
    },
    {
        "title": "MISY HERY AO AMIN'NY RA",
        "number": 43,
        "chorus": "Misy hery, hery vaovao\nAmin'ny Ran'ny Zanak'Ondry\nEny, ampy hanadio anao\nilay Rà sarobidy",
        "verses": [
            "Te ho afak'ota va ianao?\nMisy hery ao amin'ny Rà\nao amin'ny Ra\nSitrakao va ny ho levonin'ota?\nMahagaga ny herin'ny Rà",
            "Te-handositra amin'ny rehaka?\nMisy hery ao amin'ny Rà,\nao amin'ny Rà\nO! Avia re fa ho afaka\nMahagaga ny herin'ny Rà.",
            "Te ho fotsy ka hanjopiaka va ianao?\nMisy hery ao amin'ny Rà,\nao amin'ny Rà\nRanovelona hanadio ny otanao\nMahagaga ny herin'ny Rà",
            "Maminao va hanompo ilay\nMpanjakanao?\nMisy hery ao amin'ny Rà\nao amin'ny Rà\nHihira fiderana mahafinaritra ianao\nMahagaga ny herin'ny Rà"
        ]
    },
    {
        "title": "MISY JESOSY SOA AMIKO",
        "number": 145,
        "chorus": "Misy Jesosy soa amiko\nMisy Jesosiko\nMety mandalo ny zavatr'ety\nFa Jeso no amiko.",
        "verses": [
            "Na ny zava-tsoan'ny tany\nAza no manintona ety,\nMisy marina iray 'zay hareko\nJesosy no fantatro.",
            "Fa betsaka ny alahelo\nSy rahona manokana;\nFa Jeso Sakaiza tsy miova\nAo'lay Jesosiko re.",
            "Irery sy lavi-tsakaiza\nMangina sy toy ny afoy;\nMisy iray sarobidy anefa,\nDia Jeso anilako.",
            "Fanahy ô! miova ny eto\nFa katsaho ny Sakaiza soa\nMisy Iray 'zay maharitr'indindra\nAo Jeso mitady anao."
        ]
    },
    {
        "title": "MISY LOHARANO IRAY",
        "number": 15,
        "verses": [
            "Misy loharano rà iray\nAvy amin'i Imanoela\nAry ny mpanota misasa eo\nManary ao ireo pentin'ny ota;\nAriany ao avokoa ny otany\nIzay mipentipentina\nAry ny mpanota misasa eo\nManary ao ireo pentin'ny ota.",
            "Ilay jiolahy voahombo\nFaly raha nahita io rano io,\nAry izaho ho tahaka azy koa,\nHanasa eo ny fahotako,\nHanadio eo ny otako,\nKa ho voasasa avokoa,\nAry izaho ho tahaka azy koa,\nHanasa eo ny fahotako.",
            "Ilay Zanak'Ondry novonoina,\nTsy ho lefy ny herin'ilay Ràny,\nMandra-pahatongam-pamonjena,\nNy Fiangonan'i Kristy Jeso.\nTsy ho lefy ny herin'ilay Rà\nMandram-pahatongam-\npamonjena,\nNy Fiangonan'i Kristy Jeso.\nAry tsy hanota intsony.",
            "Hatreo dia hitako am-pinoana,\nIlay Ràno sy ny ratranao,\nFanavotana no hirako,\nMandra-pialako ety,\nAry ho hirako hatrany io\nMandra-pialako ety an-tany,\nFanavotana no hirako,\nMandra-pialako ety.",
            "Hira mendrika sy mamy koa.\nHiderako ny herim-pamonjena,\nAmin'ny molotra mangovitra,\n'Zay efa hitsahatra.\nMbola hidera ny famonjena aho,\nEny mandra-pahafatiko\nAmin'ny molotra mangovitra.\n'Zay efa hitsahatra."
        ]
    },
    {
        "title": "MISY MASO IRAY MIJERY ANAO",
        "number": 217,
        "chorus": "Mijery anao (in-2)\nMisy maso iray mijery anao\nMijery anao (in-2)\nMisy maso iray mijery anao",
        "verses": [
            "Eny amin'ny làlan'ny fodianao\nMisy maso iray mijery anao.\nNy dingana izay hataonao\nHitan'ilay maso iray mijery anao.",
            "Tazony ny fahamarinanao\nMampahatsiahy mialoha ny Ray\nMba tsy hizotra amin'ny lalan-kafa\nMisy maso iray mijery anao.",
            "Aoka hibanjina ilay fetra iray\n'Zay hitoeran'ny fanahinao\nFa misy maso iray mijery anao\nAza miala amin'ny Fanjakan'ny\nRay."
        ]
    },
    {
        "title": "MISY ZAVA-MIAFINA",
        "number": 769,
        "verses": [
            "Misy zava-miafina\nHolazaiko aminao\nAmin'ny anarako no\nIantsoan'i Jesosy ahy\nMpiandry mahatok'Izy\nOndrikely andrasany aho.",
            "Ory aho raha indro fa\nMania eny an-dalana\nKa ny tsora-kazony no\nMamerina faingan'ahy\nNy Mpiandry (fantatro)\nNo mamela helok'ahy",
            "Manala ny tahotro\nNy Mpamonjy mamiko\nMitazona mafy ahy\nAry miantsorok'ahy\nMoa tsy tsara ve izay\nZava-niafiko izay!"
        ]
    },
    {
        "title": "MISY ZAVATRA AZOKO ATAO VE?",
        "number": 266,
        "verses": [
            "Moa mba misy azoko hatao\nHo Anao Tompo ô?\nNoh'ny zava-tsoa rehetra\nNataonao teo amin'ny fiainako\nVonona aho Tompo ô!\nHanao izay sitraponao\nKa moa mba misy azoko atao\nHo Anao Tompo ô?",
            "Moa mba misy ilàna ahy\nHo Anao Tompo ô?\nFa ny zava-nilàko Anao\nNotanterahinao avokoa\nVonona aho tompo ô\nHo amin'izay hilanao\nKa moa mba misy azoko hatao\nHo anao tompo ô?",
            "Moa mba misy azoko haleha\nHo Anao Tompo ô?\nHandao ny zavatra rehetra\nn'aiza n'aiza no tianao haleha\nVonona aho Tompo ô\nHandeha mba ho irakao\nKa moa mba misy azoko hatao\nHo Anao Tompo ô?"
        ]
    },
    {
        "title": "MITANA NY TENINY IZY",
        "number": 438,
        "chorus": "Ho mandrakizay fa tsy andro iray!\nMitana ny teniny Izy!\nHo an'izay mino sy mankato\nMitana ny teniny Izy.",
        "verses": [
            "Niteny ny Tompo no hanefa koa\n\"Akaiky hanafaka anao Aho\nFialofanao sy fiafenanao\"\nMitana ny teniny Izy.",
            "Na iza na iza hitady Azy izao\nDia Izy no hahita Azy\nTsy misy averiny izay mitalaho\nMitana ny teniny Izy.",
            "Ny asako izay toy ny foana ety\nApetrako amin'ny Tompo!\nIandrasako ny ranonorana be\nMitana ny teniny Izy.",
            "Ny kofehy 'zay mamatotra\nanay ety\nIndray andro any hovahany;\nHavaozina any an-danitra indray;\nMitana ny teniny Izy."
        ]
    },
    {
        "title": "MITEHAFA TANANA",
        "number": 686,
        "verses": [
            "Mitehafa, hirao ny fandresena\nKristy no Tompo maneran-tany\nDerain'izy fa manan-kery\nAo aminy ny famonjena.",
            "Afak'ota aho fa notahiany\nFiainam-baovao no izorako\nNy Ray no manamarina ahy\nJesosy no fahamarinana.",
            "Mitehafa, hirao ny fandreseny\nKristy Tompo, hany Mpanjaka\nAtambaro ny feon'anjely\nAsandrato ny hiran'ny Ray",
            "Mitehafa, hirao ny fandresena\nKristy no Tompo maneran-tany\nDeraina Izy fa manan-kery\nMitehafa, Haleloia!"
        ]
    },
    {
        "title": "MITOETRA AMIN'NY TANY AMPAKARINA",
        "number": 122,
        "chorus": "Mitoetra eto amin'ny havoana\nsambatra\nMisotro loharano tsy mety ritra aho;\nManaram-po amin'ny mana fa\nmitoetra\nEto Amin'ny \"Tany ampakarina \"",
        "verses": [
            "Nahita fonenana tsy misy tabataba aho\nTany mandry fahizay, lavitry ny sento\nN'inona inona tsy hampiala ahy eto\nAmin'ny \"Tany ampakarina\"",
            "Babon'ny fisalasalana 'zao tontolo 'zao\nTafihan'ny fahavalo ny olombelona;\nIzaho kosa anefa dia tsy manahy eto\nAmin'ny \"Tany ampakarina\"",
            "Aoka hamely ny tafiotra na ho mafy\naza\nFa ny tànan'Andriamanitra hiaro ahy\nMasoandro tsy takon'ny aloka ny eto\nAmin'ny ''Tany ampakarina''",
            "Mahatalanjona izay nataon'ny\nTompo eto\nSoa ny feony, voalamina ny làlany;\nFaly aho, hitoetra am-panahy eto\nAmin'ny \"Tany ampakarina\""
        ]
    },
    {
        "title": "MITOETRA ATO AMIKO IZY",
        "number": 304,
        "chorus": "Haleloia, Haleloia, ato anatiko Jesosy\nKa ny zava-miafin'ny tena\nfahasambarako\nDia ny Mpampionon'amiko",
        "verses": [
            "Ravoravo andro aman'alina ny foko\nEty an-dalam-pivahiniana\nTsapako ny tanàn'ny Ray 'zay\nmitantan'ahy\nKa dia feno fahatokian' aho",
            "Na dia feno ota aza ny foko teo\naloha\nDia niantoraka teo an-tongony aho\nNoafahany aho ka nomeny fiadanana\nSambatr 'aho fa olon'afaka",
            "Miara-mandeha amiko n'aiza\nn'aiza Jesosy\nFaly toy ny voron-kely afak'aho\nNy Fanahy no mitarika sy\nmana-pak'ahy;\nAfaka ny fanahiako",
            "Tsy misy hetaheta ny zavatry ny\ntany\nMahasintona ny foko intsony\nFa novainy ho maraim-baoavao 'lay\nalina\nSatria tonga ny Mpampionona."
        ]
    },
    {
        "title": "MITOETRA HATRANY",
        "number": 757,
        "chorus": "Mitoetr'hatrany, ahy Jesosy\nMitoetr'hatrany, tretrik'aho,\nTsy mial'amiko Izy, fa milaza hoe:\n\"tsy hamela anao aho\",\nAhy Jessosy",
        "verses": [
            "Misy fiadanana tsy mety miala\nAto anatin'ny foko\nManodidina ny fitsapana, nefa\nMbola ao io fiadanako io.",
            "Rehefa tafiditr'ato am-poko tokoa\nIo fiadanana mamy io\nDia lasa avokoa ny hotakotaka,\nDeraiko Ianao, Jesosy ô!",
            "Mbol'anatin'ny tena 'zay tanimanga\nIzao io harena soa io,\nFa ho tonga Izy haka ahy ho any\nAn-danitra 'zay fonenako"
        ]
    },
    {
        "title": "MITONDRA FANDRESENA NY FINOANA",
        "number": 259,
        "chorus": "Ny finoana mijery\nNy voninahitra mandrakizay;\nTanisao ny teny fikasana\nfa marina\nNy finoana no mampandresy.",
        "verses": [
            "Hitanao ve ny tafika maherin'\nNy ota toa manintona fatratra\nMoa mandroso amin-\ntahotra ianao\nNy finoana no mampandresy.",
            "Ny ratsy 'zay mahakivy dia\nEsorin'ny Tompo Jesosy aminao\nNy famindrampony\ndia hasehony\nNy finoana no mampandresy",
            "Hampangina ny onja Izy\nAry hanafaka ny fo izay malahelo\nHanome koa ny fitsaharana Izy\nNy finoana no mampandresy.",
            "Eo an-tànany 'zay tsy mety resy\nDia hahita fialofana ianao\nNy teny fikasana azo antoka\nNy finoana no mampandresy.",
            "Aza mety ho resy an'ady\nFa aoka hahery fo sy ho marina\nMahery hampandresy\nanao ny Ray\nHo resy ny fahavalonao.",
            "Fitahiam-be no ho raisin'ireo\nMasin'Andriamanitra rehetra\nSy ireo izay mino ny teniny\nNy finoana no mampandresy."
        ]
    },
    {
        "title": "MITSANGANA",
        "number": 648,
        "verses": [
            "Ahoana no hinoany\nIzay tsy fantatra?\nAhoana no ahazoana\nManompo an'i Jesosy.",
            "Ahoana no hamokisana\nIreo mahantra?\nSy hampionona ireo\nTra-pahoriana?",
            "Mitsangàna amin'ny Anaran'i Kristy\nHitory ny fitiavan'ny Ray"
        ]
    },
    {
        "title": "MITSANGANA HO MIARAMILA",
        "number": 447,
        "verses": [
            "Mitsangana ho miaramilan'i Jesosy\nHanohitra ny fanahy ratsy eto\nan-tany\nMiaramila mahery no sady tsy irery\nNo ilain'i Kristy, hiaraka Aminy\nHo: tafika tsara\nTsy mifidy anjara fanompoana\nFitsapana mahazo ety an-tany ety.",
            "Na miasa i satana handavoana anao\nFilàna, fakam-panahy\nTsy maintsy ho resena\nRaha antsoinao Jesosy Hitarika anao\nHo tody hianao hampandrosoiny\nao\nTanana tsara tsy manan-tsahala\nFifaliana, fiadanana\nNo homen'i Jesosy anao.",
            "Raha tonga i Kristy handray\nireo Azy\nVoaantso hianao hiaraka Aminy\nHandresy hianao\nKa hantsoiny hiditra ao\nHandray ny valisoa\n'Zay homen'ny Tompo ho\nAnjara tsara ho an'ny mamoa\nvoatsara\nSady mahatoky ka mahafaly ny\nTompo Jesosy."
        ]
    },
    {
        "title": "MIVAVAHA AMPITIAVANA",
        "number": 418,
        "chorus": "Raha vao mangiran-dratsy\nAmin'ny antoandro;\nNy hariva ihany koa\nMivavaha am-pitiavana.",
        "verses": [
            "Kivy ve raha vao mifoha\nVesaran'entana,\nManjombona koa ny andro\nAndeha mivavaka.",
            "Marobe ireo adidy\nIzay miandry anao,\nNy hany tena fahendrena\nMitokàna am-bavaka.",
            "Mivembena ve hianao\nSatria reraka;\nHahazo hery vaovao\nRaha toa mivavaka.",
            "Miezaha hatrany hianao\nTsy hiato hivavaka\nHahery na dia toa reraka;\nMivavaha lalandava."
        ]
    },
    {
        "title": "MIVAVAKA AHO",
        "number": 576,
        "verses": [
            "Ry Tompo ô, ekeo izao fangatahanay\nFitiavana mampiray, Fanahy mitarika\nTakinay ny fitiavana\nHo anton'ny fiainanay\nHianao no irinay hamaly ny vavakay.",
            "Ifonanay ny helokay sy ny\navonavonay\nIzay tsy mampilefitra\nfa mampifandrafy\nMivavaka amim-panetren-tena\nMiandry ny Fanahy\nFanasitranana ary famelan-keloka.",
            "Mivavaka aho hiraisan'ny olona\nMba hinoany fa Jesosy Mpamonjy\n(in-2)"
        ]
    },
    {
        "title": "MIVAVAKA AMINAO IZAHAY",
        "number": 591,
        "chorus": "Indray andro anilanao\nTsara noho ny arivo\nIriko ny honina ao an-tranonao\nIndray andro anilanao\nTsara noho ny arivo\nIriko ny honina ao an-tranonao\nTompo ô",
        "verses": [
            "Hivavaka ao an-tranonao izahay\nTompo ô\nAmin'ny Fanahy sy fahamarinana\nMitoetra amin'ny fideranay Hianao\nHivavaka Aminao aho Tompo ô",
            "Hisaotra Anao amin'ny fo izahay\nTompo ô\nNoho ny fitiavanao\nSy famindram-ponao\nTsy hay tononin'ny\nvava ireo asanao\nMisaotra Anao izahay Tompo ô",
            "Hankalaza Anao izahay ry\nTompo ô\nFa Mpanjaka mendri-\npiderana Hianao\nHihoby Anao noho ny herinao\nHankalaza Anao izahay Tompo ô"
        ]
    },
    {
        "title": "MIVAVAKA HO ANAO",
        "number": 534,
        "chorus": "Mivavaka ho anao aho (in-2)\nMba ho Mpamonjinao\nIo Mpamojiko io.",
        "verses": [
            "Manana Mpamonjy aho\nMpisolovava ahy\nMpamonjy tia na dia irery aza aho\nMiaro ahy am-pitiavana Izy\nEnga anie ka ho Mpamonjinao koa.",
            "Manana Ray aho\nIzay nampanantena ahy\nFiainana mandrakizay sambatra\nTsy ho ela dia hantsoiny aho\nAndeha ré mba\nHo any an-danitra koa.",
            "Manana fiadanana tanteraka aho\n'Zay tsy ananan'izao tontolo izao\nNy Mpamonjiko no manome azy\nEnga anie ka homeny anao koa.",
            "Rehefa an'i Jesosy ianao\nAmbarao ny hafa\nFa ny Mpamonjiko dia\nMpamonjinao koa\nDia mivavaha\nMba hamonjeny ny hafa\nHahazo valim-bavaka koa ianao.",
            "Mivavaha ho an'ny hafa (in-2)\nMba ho Mpamonjiny io\nMpamonjintsika io"
        ]
    },
    {
        "title": "MIVERINA AO AMIN'NY PANTEKOSTA",
        "number": 744,
        "chorus": "Efa aminao ve ny Fanahy\nDia ny Mpampionona soa?\nHampiaiky izao tontolo izao\nNy fahotan'izay natao",
        "verses": [
            "Handeha aho ka haniraka\nNy Fanahy Masina,\nHitoetra maharitra,\nHo Mpampionona mandrakizay\nsy Masina.",
            "Avia handray ny fahafenoana\nRy fiangonana;\nMandra-pahatongan'ny very,\nHandray ny fahasoavana,\nSy hino koa an'i Kristy.",
            "Feno ny hery ny lanitra\nOmena ho antsika;\nKa handeha hanetry tena\nHandray ilay lova\nHarotsaka avy amin'ny Kristy.",
            "Miverena faingana ianao\nHo toy ilay teo aloha;\nHangataka ny Fanahy\nIzay avy amin'ny Ray,\nKa hiandry mandra-pivahiny."
        ]
    },
    {
        "title": "MOA HANDEHA AMIN-TANAM-POANA AHO?",
        "number": 218,
        "chorus": "Moa handeha amin-tanam-poana\nHihaona amin'i Jeso aho?\nMoa tsy misy izay mba voataona\nNa fanahy iray aza?",
        "verses": [
            "Moa handeha amin-tanam-poana\nMihaona amin'ny Tompo aho?\nKa tsy nanana hanompoana\nNa dia andro iray aza?",
            "Tsy hoe miahotra ny ho faty\nFa Jesosy namonjy ahy!\nFa ny hihaonana amin-tànam-poana\nIzay no mahamaloka ahy",
            "Ireo taonan'ny ota, lany\nRaha mba azo nantsoina koa\nDia natolotro ny Mpamonjy\nHanovany ny sitra-po.",
            "Ry olo-masina ô! miasà re\nDieny mbola atoandro izao;\nIndro avy ny alina be\nAoka hiezaka ianao."
        ]
    },
    {
        "title": "MOA NIVAVAKA IANAO?",
        "number": 162,
        "chorus": "Mampitsahatra ny ory\nNy fiainam-bavaka,\nNoho izany rehefa kivy\nDia mivavaha.",
        "verses": [
            "Raha niala tao an-trano,\nMoa nivavaka?\nNitaraina ve ianao\nKa nangataka ny Tompo\nHo ampinganao.",
            "Rehefa tojo fakam-panahy,\nMoa nivavaka?\nNitalaho ve ianao\nHotarihin'ny Fanahy\nMba handresenao?",
            "Rehefa tezitra ianao\nMoa nivavaka?\nNanaiky ve ianao\nMba hahay mamela\nIzay diso taminao?",
            "Rehefa azom-pahoriana\nMoa nivavaka?\nRehefa sendra ny mangidy\nMoa mba naka balsama\nHampitony anao?"
        ]
    },
    {
        "title": "MOA VE JESO",
        "number": 196,
        "chorus": "He! Fantatro he fantatro!\nFa akaiky Jeso izao\nIzy tena tia, anio doria\nAkaiky Jeso izao.",
        "verses": [
            "Moa ve Jeso dia mihevitra\nNy momba ny fiainako\nMoa jereny ve isan'andro re\nIzay làlan-kizorako.",
            "Moa ve Jeso dia mandre tokoa\nNy feo fitarainako\nMba henony ve, ka valiany koa\n'Zany antso sy sentom-po.",
            "Moa ve Jeso dia manafaka\nRaha mafy ny ady aty\nMoa ampiny ve, ka vonjeny e!\n'Zao ity olo-mahantra ity",
            "Moa ve Jeso mahafantatra\nIlay ora farany\nMoa akaiky ve, hamikirana\n'Zao ny sandrim-pitiavany."
        ]
    },
    {
        "title": "MOA VE NY TSARA INDRINDRA NO NOMEKO",
        "number": 102,
        "chorus": "Mba firy moa ireo fanahy voagadra\nNampiako ho afa-patorana\nMoa ve nanao ny farany'zay azo\nNatao ho an'i Tompo aho",
        "verses": [
            "Moa ve ny tsara indrindra no\nNomeko\nHo an'ilay nisolo ahy\nMisaina manontany tena aho\nMoa nanome ny tsara indrindra aho?",
            "Maro ny ora lanilany foana\nTsy nafoiko homena Azy\nMaratra angamba izao ny fon'ny\nTompo\nSatria tsy ampy ny fitiavako.",
            "Moa ve nihevitra ny hafa aho\nSa kosa tsy nahoako ireo\nTokony ho nampiako ny mpanjeny\nHanantona ny hany Mpamonjy.",
            "Tsy mba hijanonjanona intsony\nFa hiasa ho Azy aho\nSasa-miandry izao tontolo izao\nManiry ahy hitory aminy."
        ]
    },
    {
        "title": "MOMBA ANAY RY JESOSY TOMPO O!",
        "number": 408,
        "verses": [
            "Momba anay ry Jeso Tompo ô\nFa maizina ny alina aty,\nTsy misy vonjy raha tsy Aminao\nMpamonjy tia ô, momba anay",
            "Mandalo koa ny andronay ety\nKa miha-lo ny fifalianay\nMiovaova izao rehetra izao\nRy tsy miova ô mombà anay",
            "Aza mba mivahiny aminay\nAza mihevitra ny helokay;\nAoka ho be ny famindranao fo\nRy Jeso Tompo ô, mombà anay",
            "Tsy mahaleo tena izahay\nFa mora resy, mora kivy koa\nRy Jeso Tompo ô, aoka honenanao\nEty an-dasin'ny mpanomponao",
            "Ny teninao no fifalianay\nNy masonao mitari-dalana;\nAry ny herinao no tanjakay;\nSakaiza tsara ô, mombà anay.",
            "Izay ombanao, afa-tahotra\nTsy mety kivy na mamoy fo;\nTsy misy fahoriana izay\nHaninona ny fo arovanao.",
            "Rehefa tonga ny fotoana\nHitànay 'lay ony maizina\nAoka ny tavanao hazava ao,\nAmin'izany re mombà anay."
        ]
    },
    {
        "title": "MPAMONJY MAHERY INDRINDRA",
        "number": 583,
        "chorus": "Te ho voavonjy ve hianao?\nNy otanao omeo an'i Jeso\nHandray ny fitahiana\nNoho ny fitiavany\nRaiso Jesosy hamonjy anao.",
        "verses": [
            "Mpamonjy Mahery indrindra\nManampy làlandava\nTsy mandao haramin'ny farany\nJeso manampy làlandava.",
            "Jesosy no andrasako\nMihaino ny antsoko izy\nMitodika amiko Jesosy\nRaha mandre ny fitarainako",
            "Jesosy no Mpamindra fo\nMiantra isan'andro\nAoka izay rehetra tia ny famonjenao\nHankalaza nyAnaranao."
        ]
    },
    {
        "title": "MPAMONJY MORA AZO",
        "number": 82,
        "chorus": "Mpamonjy mora azo ny Tompo\nAmin'ny andro fahoriana;\nMatokia ianao ka mivavaha;\nMahavonjy anao Jesosy.",
        "verses": [
            "Maro tokoa ireo zava-tsarotra\nTsy efan'ny herin'olombelona;\nF'amin'Andriamanitra\nMpamorona\nHainy ny zavatra rehetra.",
            "Andriamanitra efa nanolotra\nNy Zanany ho famonjen'antsika;\nTsy homeny antsika maimaim-poana\nVe ny zavatra hafa rehetra?",
            "Moa ve afaka ny hino fotsiny\nAraka ny tenin'i Jesosy ianao?\nFa raha hino ianao dia hohitanao\nNy voninahitr'Andriamanitra.",
            "Ny mason'ny Tompo dia manerana\nEny tontolo eny mba hamonjeny\nIzay manana fo mahitsy Aminy\nSady miantehitra Aminy.",
            "Azon'i Jesosy ampanekena anao\nNa dia satana sy ireo anjeliny;\nIzy no manome fahefana anao\nHandresenao ny fahavalonao."
        ]
    },
    {
        "title": "MPAMONJY NY REHETRA",
        "number": 401,
        "chorus": "Misaotra Anao ry Ray\nNanome ny Zanakao\nAry ny Fahazavanao\nNetin'ny Fanahinao",
        "verses": [
            "Mpamonjy ny rehetra\nJeso Zanaky ny Ray\nFiadanana manafotra\nZanak'Ondrin-danitra",
            "Mpamonjy ny rehetra\nVoahombo ho anay\nNy fitiavanao mameno\nR'Ilay velona indrindra",
            "Ary indray andro any\nHahita ny tavanao\nHiaina amin'ny fanatrehanao\nSy ny fahasoavanao"
        ]
    },
    {
        "title": "MPANJAKA ANDRIAMANITRA",
        "number": 528,
        "chorus": "Andriamanitra Mpandresy\nIzyTompo mahery\n'Lay Lion'i Joda",
        "verses": [
            "Manjaka amin'ny fomba mahagaga\nNy Tompo\nMitsotra ny sandriny, mihorohoro\nny tontolo\nNafahany tamin'ny aizin'ny helo\nny tany\nOmeo voninahitra (in-2)",
            "Mahery Andriamanitra lehibe\nManan-kaja\nNy rany sarobidy nanokatra ny\nlanitra\nNy Mpanjakam-boninahitra\nAmin'ny fiandrianany\nTianay hobiana. (in-2)",
            "Hobio Ilay Mpandresy\n(Mpandresintsika)\nDerao ny Anarany, ny Anarany\nNanadio ny Lanitra\nManjaka ao am-pontsika\nAndriamanitra Mpandresy Izy\nTompo mahery'lay lion'i Joda (in-2)"
        ]
    },
    {
        "title": "MPANJAKA HIANAO",
        "number": 514,
        "verses": [
            "Andriamanitra ambonin'ny\ntany Hianao\nNy Fanjakanao any an-danitra\nAndriamanitry ny voninahitra\nAndriamanitra ny Mpanjaka"
        ]
    },
    {
        "title": "MPIVAHINY SY MPIRENIRENY",
        "number": 716,
        "chorus": ";;; Eny tokoa, fahasoavana sy\nfamindram-po\nNo hanarak'amin'ny androko;;;",
        "verses": [
            "Mpivahiny sy mpirenireny\nTao anatin'ny ota aho taloha,\nNony hitan'i Jesosy anefa,\nDia ny mody no mamin'ny fo.",
            "Mamelombelona ny fanahiko\nMampahery ahy isan'andro,\nMitondra ahy eo amoron'ny rano\nIzay fialan-tsasatra Izy.",
            "Ary raha mamaky ny lohasaha\nAloky ny fahafatesana aho;\nDia ny tànany no hitondra ahy\nHo tody soa ao an-tranony.",
            "Dia hitoetra ao an-tranon'i\nJehovah aho\nAry hamelarany latabatr'aho,\nEny tokoa, fahasoavana sy\nfamindram-po\nNo hanaraka amin'ny androko (in-3)"
        ]
    },
    {
        "title": "N'AIZA N'AIZA MIARAKA AMIN'I JESO",
        "number": 384,
        "chorus": "N'aiza n'aiza (in-2)\nTsy hatahotra\nN'aiza n'aiza Jeso ô\nHo tody aho.",
        "verses": [
            "N'aiza n'aiza miaraka amin'i Jeso\nDia handroso aho satria tarihiny\nFa ny lavitra Anao dia ory fo\nN'aiza n'aiza tsy hatahotra aho Jeso!",
            "N'aiza n'aiza miaraka\namin'i Jeso\nNaman-kafa mety mahavery ahy\nTsy irery aho tantananao ety\nN'aiza n'aiza hankalaza,\nAnao Jeso!",
            "N'aiza n'aiza miaraka\namin'i Jeso\nEto na ampitan-dranomasina\nHampianatra 'reo mbola maizina.\nN'aiza n'aiza raha vao tarihinao."
        ]
    },
    {
        "title": "NA DIA NANAN-KARENA AZA RE",
        "number": 143,
        "verses": [
            "Na dia nanan-karena aza re\nDia tonga nalahelo ho ahy.\nNy Mpamonjy izay\nnisolo voina ahy\nMba hahatong'ahy\nhanan-karena."
        ]
    },
    {
        "title": "NA DIA NY LIONA SY NY VIPERA",
        "number": 156,
        "chorus": "Na dia ny liona sy ny vipera aza\nDia hodiavinao ambany tongotrao\n(Haleloia)\nNa dia ny maingoka sy\nny menarana aza\nDia tsy hisy hampaninona anao.",
        "verses": [
            "Raha mitady hikororoka anao\nIlay satana izay fahavalonao\nJesosy mivavak'ho anao\nMba tsy ho levona ny finoanao.",
            "Tahotra sy ahiahy koa ve\nNo tonga manafika anao\nTsarovy fa Jesosy anie\nEfa naharesy izao tontolo izao.",
            "Mbola ho finaritra tsy miody\nNy fonao 'zay efa noratraina\nFa handray ny tena fanafody\nEo amin'ny ravin'ny hazon'aina.",
            "Andriamanitra fa tsy olo-kafa\nMiareta kely sady andraso\nIzy no hamoaka sy hamafa\nNy masonao kotsan'ny ranomaso.",
            "Mbola hifarana tsy hisy intsony\nNy fiazakana hazofijaliana\nFa ny Tompo avy any ambony\nNo indro mitondra famaliana."
        ]
    },
    {
        "title": "NA HO MAFY NA HO SAROTRA",
        "number": 216,
        "chorus": "Na ho mafy na ho sarotra\nNy làlanao Jesosy ô!\nTsy hatahotra ny loza aho,\nFa Ianao no amiko.",
        "verses": [
            "Na ory aho na malahelo\nN'inona anjarako\nTsy ahenako ny fitiavako\nAnao Jesosiko.",
            "Iza indray moa no mba heveriko\nFa mety hamonjy ahy;\nRehefa misy zavatra manjo.\nAfa-tsy Jesosiko.",
            "Miaiky ny fahalemeko aho\nEny tsinitsinona aho;\nNefa ampy ny fahasoavanao\nAraka ny teninao.",
            "N'aiza n'aiza, na rahoviana,\nJesosy no aroko.\nRaha mamely ny fahavaloko,\nJesosy no heriko."
        ]
    },
    {
        "title": "NAHAFOY NY AIKO AHO",
        "number": 67,
        "verses": [
            "Nahafoy ny aiko Aho,\nHanavotako anao,\nKa nalatsako ny ràko,\nNisoloako anao,\nHe! Ny aiko no nomeko\nRy mpanota very e!\nAiza izay afoinao ré\nmba ho ahy Tomponao?",
            "Lapan-dRaiko ao ambony\nvoninahi-dehibe,\nNo nilaozako hamonjy\nsy hanafa-doza anao,\nIzay voafitaky ny satana\nsy nozoin-doza be;\nAiza izay afoinao ré\nmba ho ahy Tomponao?",
            "Soa be sy mahagaga\nno atolotro anao,\nFamonjena tsy vidina\nfamelana ny otanao,\nFitiavan-tsy voafetra,\nlova ao an-danitra ao;\nAiza izay afoinao ré\nMba ho ahy Tomponao?",
            "Indro Tompo! fa omeko\nho anao ny tenako;\nka tsy misy 'zay tsy foiko\n'zay rehetra tianao;\nEso, latsa, tsy ahoako,\nFa ny ho mpanomponao\nNo ho zavatra kendreko,\nRaiso re ny zanakao."
        ]
    },
    {
        "title": "NAHOANA AHO NO TIANY TOY IZAO?",
        "number": 487,
        "chorus": "Nahoana Jeso no\nTia ahy toy izany?\nKa nanaiky ny ho faty Izy\nEndrey fitiavana.",
        "verses": [
            "Maty nisolo ahy tao Kalvary\nJesosy Mpamonjy;\nNitondra ny hazofijaliana\nFampihavanana.",
            "E! nofantsihana ny Tompoko\nNoho ny otako;\nniaritra alahelo Izy,\nMba hamonjeny ahy",
            "Fijaliana no niaretany\nNisolo toeran'ahy;\nNamela ahy Izy ka tsy misy\nMahasakan' Azy."
        ]
    },
    {
        "title": "NAHOANA AHO NO TSY HIHIRA",
        "number": 385,
        "verses": [
            "Nahoana aho no tsy hihira\nIlay Mpanavotra\nAmbarako ny fitia lehibe mahery\nTiako hodradraina\nLazaina eran-tany\nIzay vitan'i Jeso\nTiako hohiraina"
        ]
    },
    {
        "title": "NAHOANA NO MBOLA HIANDRY?",
        "number": 271,
        "chorus": "Nahoana re\nNo tsy manatona anio?\nNahoana re\nMoa tsy ilainao Izy?",
        "verses": [
            "Nahoana no mbola hiandry?\nJesosy no miantso anao,\nMitsangana re ry mahantra\nHatony ilay tia anao.",
            "Mihelina ny andronao\nIzao azo atao ny mandray\n'Lay Jeso 'zay hany Mpamonjy\nHo rakitra soa ho anao",
            "Moa tsy tsapanao ao anaty\nFa mitaona anao ny Fanahy?\nTianao ve ny afony no mba\nHamelombelomany anao?",
            "Nahoana ianao no mandà\nKanefa ho faty tsy ho ela\nRaha mbola mazava ny andro\nAvia! Ka hatony Jeso"
        ]
    },
    {
        "title": "NAHOANA NO MITANONDRIKA",
        "number": 446,
        "chorus": "Nahoana no mitanondrika\nNahoana no mitoloko ianao?\nManantenà an'Andriamanitra\nMbola hidera Azy ihany ianao.",
        "verses": [
            "Ry ory fo noho ny ady ety\nKetraka sady misento irery\nMampahereza ny fanahinao\nAoka tsy ho reraka ny fonao.",
            "Ny kivy sy ny mivarilavo\nDia manaiky ho isan'ny babo\nKoa miezaha, hetseho ny herinao\nAza manaiky ho resy ianao.",
            "Na maro aza ny fahavalo\nManakan-dàlana ny mpandalo\nNy Fanahin' Andriamanitra\nHampandositr'azy ireo lavitra.",
            "Ny tenin'ny Tompo no itokio\nAry ny tahotra kosa ario,\nAvereno matetika hoe:\nTsy maintsy mandresy Jesosy e!"
        ]
    },
    {
        "title": "NAHOANA NO TSY IZAO ANIO IZAO",
        "number": 93,
        "chorus": "Fa nahoana no tsy izao anio izao?\nTe-hovonjena va ianao\nKa tsy'zao anio izao?",
        "verses": [
            "Aza avela ho mandalo re ny teny\nNa hikipianao koa ny fahazavana\nAza manamafy ny fonao, fa aoka\nHovonjena'zao anio izao.",
            "Mety tsy haraina intsony ny ampitso.\nHo voafitaka ny hevitrao\n'Zao no ora ankasitrahana ka aoka\nHovonjena'zao anio izao.",
            "Tsy mandà n'iza na iza re ny Tompo\nIzay te-hiray fanahy Aminy\nManeke ny asa vitany ka aoka\nHovonjena'zao anio izao."
        ]
    },
    {
        "title": "NAMAKY TEO AMIN'NY EFITRA LAMBA AHO",
        "number": 149,
        "chorus": "Haleloia Haleloia,\nEfa namaky teo amin'ny efitra\nlamba aho,\nHaleloia Haleloia;\nAnatrehan'ny Mpanjaka aho izao.",
        "verses": [
            "Nino aho rehefa nandre,\nHaleloia, ankalazao\nTsy any ivelany intsony\nO! derao ny Tompo\nF'eo anilan'i Jesosy\nTanterak'aho izao;\nMaty ny amin'ny ota;\nHaleloia, ankalazao.",
            "Dia Mpanjaka\nSy mpisoron'Andriamanitr'aho\nNoho 'lay rà soa mahadio;\nO! derao ny Tompo;\nNoho ny herin'ny Fanahy,\nDia tafiditr'eo amin'\nNy fitoera-masin'aho;\nHaleloia, ankalazao.",
            "Anatin'ny toerana\nMasin'indridr'izao\nNo anamasinan'ahy;\nO! derao ny Tompo\nAmin'ny herin'ny rà,\nNy Tompo hatramin'izao\nNo tonga fonenako;\nHaleloia, ankalazao."
        ]
    },
    {
        "title": "NANAIKY AHO JESO",
        "number": 237,
        "verses": [
            "Nanaiky aho Jeso fa hanompo Anao\nHatramin'ny farany ho mandrakizay\nTsy hatahotra ny ady\nraha anilako\nIanao hitarika ny diako ety.",
            "Aoka ho tsapako fa\nanilako Ianao\nHitako ny zava-mamiratra soa ety\nManodidina ahy koa\nny fahavaloko\nArovy re tsy hanota ny fanahiko.",
            "Nampanantena Ianao, ry Jesosy ô!\nFa ho mpanomponao izay ao an-\ndanitra\nNanaiky aho Jeso\nfa hanompo Anao\nOmeo fahasoavana\nhanaraka Anao."
        ]
    },
    {
        "title": "NANAVOTR'AHY",
        "number": 463,
        "chorus": "Haleloia, raisiny tokoa ny mpanota\nvery\nAfahany amin'ny fotaka mandrevo\nKa hotantaraiko hatrany, hirao;\nDerao (in-3)\nHaleloia! he voavotr'aho",
        "verses": [
            "Misy tantara iray amin'i Kristy\nIzay tonga hanavotr'ahy\nAmin'ny otako\nNotadiaviny aho ka afak'ota\nSady afak'henatra\nHaleloia! He voavotr'aho",
            "Notsoahin'i Jesosy\nTao amin'ny lalin'aho\nKa namindrany fo tanteraka tokoa\nNy ràny soa sarobidy no narotsany\nMba hividianany ahy\nSy hanavotany ahy",
            "O! tantara tena mamy\nSady feno fitahiana,\nFa nilaozany ny voninahiny;\nNidina tety an-tany\nMba hanandratra ny verin'ota\nSy hanafaka Jeso.",
            "Ary vetivety foana,\nAmim-pifaliana feno,\nRehefa hakarina hiarak'Aminy,\nDia ho isan'ireo marobe mihira\nHo an'ny Mpanjaka\nIzay nanavotr'ahy aho."
        ]
    },
    {
        "title": "NANDAO ANAO ELA AHO RAIKO O!",
        "number": 161,
        "chorus": ";;;Inty tamy aho Raiko malala o!\nRaiso ny tanako;;;",
        "verses": [
            "Nandao Anao ela aho Raiko o!\n'Zao dia te-hody aho\nManiry hiankina eo an-tranonao\n'Zao dia te-hody aho",
            "Itambesaran'ny ota natao\n'Zao dia te-hody aho\nMatoky anefa fa ho raisinao\n'Zao dia te-hody aho.",
            "Na dia tsy mendrika ho zanakao\n'Zao dia te-hody aho\nAtaovy ho isan'ny mpanomponao\n'Zao dia te-hody aho",
            "Maniry hanana fiadanam-po\n'Zao dia te-hody aho\nSy mba hivesatra ny zioganao\n'Zao dia te-hody aho",
            "Indro fa tazako ny sandrinao\n'Zao dia te-hody aho\nMitsotra mba hisakambina re!\n'Zao dia te-hody aho"
        ]
    },
    {
        "title": "NANENDRY AHY",
        "number": 791,
        "chorus": "Nanendry ahy, nanendry ahy;\nMifaly ny fanahiko;\nNiova ny fiainako,\nSatria nanendry ahy Jesosy",
        "verses": [
            "Nihevitra aho fa very,\nNalahelo irery;\nTsy nanantena intsony\nFa mbola hisy zay anio;",
            "Hatramin'izay dia izy,\nNo mitarika ahy ety;\nHanaiky Azy hatrany,\nNoho ny fitiavany ahy."
        ]
    },
    {
        "title": "NARINDRIKO NY VARAVARANA",
        "number": 461,
        "verses": [
            "Narindriko ny varavarana\nMitokan'eo anatrehanao aho;\nKa mitenena re ry Tompo ô!\n'Zay rehetra sitraponao amiko.",
            "Mivavak'eo anatrehanao;\nKa miandry Anao ny fanahiko;\nToroy hevitra, anaro koa;\nHahay manaraka ny sitraponao.",
            "Misy fiadanana maharitra;\nNy fahanginan'eo anatrehanao\nLavitra ny ady sy ny ota,\nRaha ianao Tompo no anatiko",
            "Ry Tompo ô, ampaherezo aho;\nAmin'ny asa 'zay nomenao hatao;\nAndraindraiko ny fahasoavana\n'Zay manome ahy hery vaovao"
        ]
    },
    {
        "title": "NASANDRATRA HO TOMPO SY MPAMONJY",
        "number": 279,
        "chorus": "Nasandratra ho Mpamonjy\nNasandratra ho Tompo koa\nHOSANA ho anao Jesosy\nHaleloia.\nVangio ny fiangonana",
        "verses": [
            "Lehibe tsy manam-paharoa\nFa nandresy izao tontolo izao\nLehibe amin'ny hery, Tsitoha\nTonga mendrika ho deraina",
            "Efa natolotry ny Rainy\nAzy ny zavatra rehetra\nNomen'Azy koa ny fahefana\nHanome famelan-keloka",
            "Mipetrak'eo an-tanana\nAnkavanan'Andriamanitra\nMba hifona ho antsika re\nSy ho an'izao tontolo izao.",
            "Mpanjakan'ny mpanjaka\nTsy mety ho faty intsony,\nAry hiverina ho ety indray,\nTahaka ny lion'ny Joda"
        ]
    },
    {
        "title": "NASEHONY TAMIN'NY ZAZA MADINIKA",
        "number": 663,
        "verses": [
            "Isaorana anie ny Tompon'ny\nlanitra sy tany\nNoho ny nanafenanao izany\nTamin'ny Hendry sy manan-tsaina\nNasehonao tamin'ny zaza",
            "Tompo ô, mahagaga ny nataonao\nho ahy:\nNy nanomezanao fifaliana, fiadanana.\nIzay nomenao ho ahy mandrakizay\nIsaorana Hianao mandrakizay."
        ]
    },
    {
        "title": "NIARETANY IZAHAY",
        "number": 715,
        "chorus": "Narotsany ny Rany\nHanaovany famonjen-dehibe;\nNanetry tena, nanaiky ho faty,\nHo ahy no niaretany izany.",
        "verses": [
            "Jesosy 'lay Zanak' Andriamanitra\nNiaritra fahoriana\nSy izay rehetra fijaliana\nHo ahy no niaretany izany.",
            "Hahita ny tavan'ny Tompo\nSy 'lay lapa mamiratra\nVoaravaka vatosoa sy perla.\nNomaniny ho ahy izany"
        ]
    },
    {
        "title": "NIARO AHY IZY",
        "number": 509,
        "verses": [
            "Ho anao izay mpitory ny filazantsara\nManapa-kevitra hanolo-tena ho Ahy\nAza matahotra fa momba anao Aho\nAmin'ny ratsy izay afafin'ny devoly\nFa na dia maro aza ny mpanakana\nHanao izay handrava ny mpianatra\nDia ny Fanahiko mbamin'ny elatro\nHamoaka azy ho mpiady mahery.",
            "Marina fa marobe koa ny fitsapana\nAretina, fahoriana, tsy fisiana\nZava-poana izany raha mijery\nAn'ilay voafantsika teo amin'ny\nhazo ianao\nJesosy dia efa nilaza taminao fa ra'\nManantona Azy hitaraina hianao\nNambarany taminao: Omeo azy ny\nentanao\nFa Izy no miadidy izany"
        ]
    },
    {
        "title": "NIFANENA TAMINAO AHO",
        "number": 538,
        "verses": [
            "Nihaona tamin'i Jeso aho\nNanolotra aina ho ahy Izy\nNofantsihana, naratra, maty\nLatsaka ny ra noho ny otako\nFifaliana tsy hay lazaina\nNo homeny ny ato am-poko\nFiadanana no azoko ao Aminy\nTsy hay ambara ny hafaliana azoko\nHo valin'ny fifonako.",
            "Na dia mbola ety an-tany aho\nFanantenana no amiko\nHo avy Izy mba haka ahy\nHiaraka Aminy mandrakizay*\nIanao mijaly mila famonjena\nManantona Azy\nMiaro sy mamindra fo\nMiantra Izy\nFifaliana tsy hay lazaina\nNo ato am-poko\nHo valin'ny fifonako.",
            "Ho avy Izy mba haka ahy\nHo any amin'ny voavotra\nHiala ety an-tany aho\nHiditra any an-danitra\nFifaliana tsy hay lazaina\nNo homeny ato am-poko\nFiadanana no azoko ao Aminy\nTsy hay ambara ny hafaliana azoko\nHo valin'ny fifonako"
        ]
    },
    {
        "title": "NILAOZANAO NY VONINAHITRAO",
        "number": 677,
        "verses": [
            "Nilazanao ny voninahitrao\nNidina tety an-tany\nHanehoany fitiavan'ny Ray\nSy hanome ny fanahy.",
            "Nanolotra ny fitiavany ahy\nNampanantena fa homba ahy\nReko ny feonao amiko\nHanoro ahy ny làlako",
            "Fanahin'Andriamanitra ô\nIsaorako sy ankalazaiko\nHaleloia, haleloia (Haleloia)",
            "Mampionona ny ory ianao\nNesorinao ny alahelo\nHiraiko ny fitiavanao\nAvy amin'ny fofon'ainao\n(fofon'Ainao)\nFa Anao izao rehetra izao\nTompon'ny lanitra sy ny tany\nNa dia saro-patarina aza\nTongava ato amin'ny fiainako"
        ]
    },
    {
        "title": "NISAFIDY NY HO MPIANANY",
        "number": 432,
        "chorus": "Am-pototry ny hazofijaliana,\nAm-pandohalehana, misafidy aho\nHo mpianany, izay no tiako\nEo akaikiny am-pinoana.",
        "verses": [
            "Am-pototry ny hazofijaliana,\nAm-pandohalehana,\nMisafidy aho ho mpianany,\nIzay no tiako, eo akaikiny,\nAm-pinoana, ondry ao amin'ny\nvalany\nTsy misy maharombaka ahy\nEo an-tànan'i Jesosy\nEo no hahasambatra.",
            "Hatrizay nanekeko an'i Jesosy\nRavo hatrany ny foko\nLasa avokoa ireo ahiahiko\nNoho i Jesosy, Mpandresy aho\nNafoiko ny rehak'izao tontolo izao\nManintona ahy\nAzoko ny fitsaharana\nTamin'ny Ràny tao Golgota.",
            "Rehefa vitako ny asako ety\nTsy ho ela dia hody aho\nMiandry ahy ao Kanana ao\nIlay nadresy fahafatesana\nHiraiko ao ny voninahitra\nHianao izay nitia ahy\nNanavotra ahy mandrakizay\nTeo amin'ny hazofijaliana.",
            "Ny fitiavany nanosika ahy\nMba hitady ireo very,\nHamerina ireo ho ao\nAm-balan'ny Famonjen'i Kristy\nHo fitaovana eo an-tanany,\nHanompo Azy amn'ny fo\nAry ho mpijinja mahatoky\nMandra-piverin'i Jesosy."
        ]
    },
    {
        "title": "NITIA AHY JESO",
        "number": 101,
        "verses": [
            "Nitia ahy Jeso (in-2)\nFa efa voahombo ho ahy\nNitia ahy Jeso."
        ]
    },
    {
        "title": "NITONDRA NY ENTAKO JESOSY",
        "number": 378,
        "chorus": "Jesosy no nitondra ireo entako\nIzy no naka ireo\nho valim-bavako\nMitsahatra izao ny tebitebiko\nJesosy no nitondra ireo entako.",
        "verses": [
            "Mpanota very aho,\nNahantra teo aloha\nKa nitaraina mafy\nHovonjen'ny Tompo\nNihaino ahy Izy\nka nampahery ahy\nJesosy no nitondra ireo entako.",
            "Indraindray reraka\nnoho ny làlan'aho\nKa mitanondrika\nToa vesaran'entana,\nFa nony mitaraina\namin'ny Tompo\nDia Jesosy no mitondra\nireo entako.",
            "Rehefa toron'ny\nalahelo mafy aho\nKa mitondra mihoatra\nNoho ny zakako;\nDia omeny toky hoe:\nAn'ny Tompo ianao\nJesosy no nitondra ireo entako.",
            "Ny amin'ny ho avy\nMatoky Azy aho\nIzy no mahalala\nNy làlana haleha\nNy masony hitsinjo ny diako ety\nJesosy no nitondra ireo entako."
        ]
    },
    {
        "title": "NITSANGANA NY TOMPO",
        "number": 96,
        "chorus": "Nitsangana tamin-kery\nAvy tao Izy ka nandresy\nNy rafiny sy ny aizina\nHiara-manjaka amin'ireo masiny\nEfa nitsangana, Haleloia, ny Tompo",
        "verses": [
            "Nandry tao am-pasana,\nJeso Mpamonjy\nNiandry ny maraina,\nNy Tompoko.",
            "Sasa –niambina ireo\nJeso Mpamonjy\nSasa-nanomboka koa,\nNy Tompoko.",
            "Resy teo ny fasana\nJeso Mpamonjy\nTapany ny gadra re!\nNy Tompoko"
        ]
    },
    {
        "title": "NIVAVAKA JESO TIA",
        "number": 9,
        "verses": [
            "Nivavaka Jeso tia\nNijaly noho ny otako\n;;; Fitiavana lehibe\nNiseho tao Getsemane;;;",
            "Niantso ny mpianany Izy\nHiari-tory tao\n;;; Anefa ireo tsy namaly\nNy feon'ny Tompony;;;",
            "Ao an-tongotrao Tompo o!\nNo itoerako izao\n;;; Mba handre ny feonao\nSy ny fampianaranao;;;",
            "Ry Tompo o! Inty aho\nAvy manantona Anao\n;;; Raiso ny tenako anio\nHo isan'ny mpianatrao;;;"
        ]
    },
    {
        "title": "NOLEVONINY IREO OTAKO",
        "number": 352,
        "chorus": "Nolevoniny 'reo otako marobe\nToy ny zavona nanaron'ahy\nNanamaizina ny fo sy fanahy\nNolevoniny ireo otako marobe.",
        "verses": [
            "He sambatr'aho\nSatria nanafak'ahy Jesosy\nNosasany tamin'ny ràny aho\nMihira aho satria olom-boavonjy\nFifaliana ny manana an'ny Tompo.",
            "Mifaly ny foko,\nNotsoahin'ny Tompo\nTao anatin'ny fota-mandrevo\nLasa ny aizina, tonga ny mazava,\nTena mahafa-po tokoa Jesosy.",
            "He ravoravo aho\nHatramin'ilay andro\nIzay ninoako ny Teniny\nNy zava-drehetra 'zay mety\nilaiko izao\nDia azoko ao amin'i Jesosy.",
            "Rah'tonga ny andro\nHodiana an-tany soa\nMiarak'amin'ny voavoatra\nDia hohirain'any ny amin'ny Rany,\nIzay nanafaka ny fanahiko.",
            "Mitaon' anao koa,\nMba handray Azy aho\nMinoa ny Anaran'i Jesosy,\nDia holevoniny koa ny fahotanao,\nHo tsapanao ny famelan-keloka."
        ]
    },
    {
        "title": "NORAISINAO AHO MPAMONJY O!",
        "number": 453,
        "chorus": "Noraisinao aho Mpamonjy ô!\nTamin'ny tsiky sy fitia\nMialoka amin'ny fitiavanao\nToy ny voromailala aho",
        "verses": [
            "Toy ny vorona nandao ny\nAnkaniny aho\nNiala taminao aho Mpamonjiko\nNy feonao no miantso ahy\nHiverina Aminao\nHay mbola mandray ahy Ianao.",
            "Voavoatra aho\nNapetrako tamin'ny\nfamindramponao ny fiainako\nFenoinao hazavana sy fifaliana aho\nIzay ho ahy mandrakizay",
            "Voavoatra aho\nTsy atahorako ireo tafiotra\nManafika ahy\nHojereko am-pinoana ny lanitra\nFaly hihira ny fanahiko"
        ]
    },
    {
        "title": "NY ADY MASINA",
        "number": 737,
        "chorus": "Ny trompetra miantso\nHo amin'ny ady masina\nRy mpino ô! mitsangana\nAza misalasala.",
        "verses": [
            "Mila anao ny Tompo hitondra sabatra\nHihazakazaka ho amin'ny ady\nTena tsy an-kiato ny fiatrehana\nFa ny fahasoavany no mitondra.",
            "Araho akaiky re ny mpitarika\nIsaky ny dingana izay atqony\nFa eo aminy misy fandresena\nNy dia-tongony voahoso-drà",
            "Aoka ho eo amin'ny loha-laharana\nMendrika ny fitiavanao ny Tompo\nPoteho ny gadra, tapaho ny filàna\nMialà amin'ny laharan'ny osa",
            "Handeha eran-tany sy ambany lanitra\nny feon'adintsika am-pifaliana\nAndriamanitra mitady \"zay sahy\nSady tsy mihevitra ny handositra"
        ]
    },
    {
        "title": "NY ADY MASINA",
        "number": 802,
        "chorus": "Ny trompetra miantso\nHo amin'ny ady masina\nRy mpino ô! mitsangana\nAza misalasala",
        "verses": [
            "Mila anao ny Tompo hitondra sabatra\nHihazakazaka ho amin'ny ady\nTena tsy an-kiato ny fiatrehana\nFa ny fahasoavanay no mitondra.",
            "Araho akaiky re ny Mpitarika\nIsaky ny dingana izay ataony\nFa eo aminy misy fandresena\nNy dia-tongony voahoso-drà"
        ]
    },
    {
        "title": "NY AFON'I FANAHY",
        "number": 25,
        "chorus": "Ka ny zavatra ilaina\nAndeha hivavaka indray;\nTahaka ireo izay teo aloha\nHandray ny afon'ny Fanahy.",
        "verses": [
            "Maro ny fanahy\ntsy azontsika anie\nNy faniriana tsy ampy re\nKa ny zavatra tena ilaina izao\nDia ny afon'ny Fanahy.",
            "Ny Fanahiny no arotsany\nAo amin'ny fiainanao;\nIsan'andro re raha mikatsaka\nToy ireo teo aloha.",
            "'Ndeha hizaha ny tavan'ny\nMpanjaka\nHanao ny sitrapony koa;\nHo avy ao anatinao indray\nNy Fanahy Masina.",
            "Mangatsiaka va izao ny fonao\nAry very ny herinao?\nRaha mitady Azy isan'andro koa\nOmeny'lay afo teo aloha."
        ]
    },
    {
        "title": "NY AMIKO",
        "number": 518,
        "verses": [
            "Efa ela izay Tompo ô,\nNo nandaozako ny tranonao\nSy nanadinoako ireo rahalahiko\nIzao anefa Tompoô, mandondona\nAto anatiko ihany Hianao\nMibebaka, mifona re.",
            "Raha nandinika ny fitiavanao\nHianao, Ray Mahery, Tompo\nMpanavotra\nNefa ny tenako izao\ndia efa fantatrao\nFa olona tsy mendrika\nMpanota ratsy fanahy",
            "Inty aho re hanaraka Anao\nHanjohy ny dianao\nJeso Mpamonjiko\nAveriko indray, antitranteriko\nNy fiainako taloha efa naleviko\nFa ny fiainako izao,\nAtolotro Anao dia ho Anao\nMandrakizay"
        ]
    },
    {
        "title": "NY AMIN'NY MPAMONJY",
        "number": 485,
        "chorus": "Ny amin'ny Mpamonjy iray\nNo hira mahafinaritra ahy\nDia Jesosy tao Golgota\nIzay avy ho Mpanjaka",
        "verses": [
            "Rahonan'ny loza ny tany;\nMatahotra ny olona;\nMahagaga fa mbola mahahira aho\nSatria Jeso anilako.",
            "Sahirana noho ny ady\nManahy izao tontolo izao\nMahagaga fa tsy isan'izany aho\nSatria afak'amin'ota.",
            "Mandre sabatra famaboana\nSy firenena potika aho,\nMahagaga f'ilay fanjakana\nTsy ho rava no hirako.",
            "Mamontsina ny aviavy\nAkaiky ny lohataona\nMahagaga fa ny famindrany ahy\nHiala no handrasako."
        ]
    },
    {
        "title": "NY ASAN'NY TOMPO NO MAHAFINARITRA",
        "number": 192,
        "chorus": "Ekeo ny fanatitra ry Tompo\nF'hankato Anao aho;\nAmin'ny alitaranao no hanaterako\nTokoa\nNy fiainako rehetra.",
        "verses": [
            "Asa mahafinaritra tokoa\nNy manompo Anao Jeso\n'Ty ny foko omeko Anao,\nNy tena sy ny fanahy,\nHo fanatitra masina.",
            "Fantatrao re ny fahalemeko,\nTsy ampy koa ny heriko\nRaha tsy maintsy hanampy Ianao\nHanasitrana ho tia\nMba ho vatosoa toa Anao.",
            "Aoka hiala ato am-poko ireo\nIzay tsy mba nafafinao;\nFa ny afo vaovao\nNo aok'hirotsaka izao\nMiandry Anao ry Jeso ô!",
            "Manantona ry Kristy Mpamonjy\nFa ny rànao no nanavotr'ahy\nHiainako isan'andro\nAry ho mandrakizay\nNy fiarahako Aminao."
        ]
    },
    {
        "title": "NY DERA SY NY LAZA HO AN'NY ZANAK'ONDRY",
        "number": 632,
        "chorus": "Ny voninahitra sy fankalazana\nFiderana ho an'ny Zanak'Ondry",
        "verses": [
            "Mendrika ny Zanak'Ondry (in-2)\nMendrika ny Zanak'Ondrin'\nAndriamanitra",
            "Masina ny Zanak'Ondry (in-2)\nMasina ny zanak'Ondrin'\nAndriamanitra",
            "Mandresy ny zanak'ondry (in-2)\nMandresy ny Zanak'Ondrin'\nAndriamanitra",
            "Manjaka ny Zanak'Ondry (in-2)\nManjaka ny Zanak'Ondrin'\nAndriamanitra"
        ]
    },
    {
        "title": "NY ETO AN-TANY TSY NANOME AHY",
        "number": 638,
        "verses": [
            "An-taona maro no nanaranako fo\nTamin'izao Tontolo izao\nTsy afa-po tamin'ny fahafinaretana\nFahadisoam-panantenana\nNefa tanteraka ny faniriako\nNomen'ny Tompo izay nilaiko\nNy eto an-tany tsy nanome\nTsy afa-manaisotra amiko.",
            "Zava-poana avokoa\nKa tsy hiantehatra amin'izay\nMety ho levona aho\nMaro no miaina tsy amin'ahiahy\nToa haharitra mandrakizay\nFar aha ny fiainako dia holaniako\nHo an'ilay zava-drehetra amiko\nNy eto an-tany tsy nanome\nTsy afa-manaisotra amiko",
            "Ny eto an-tany tsy nanome ahy\nTsy afa-manaisotra amiko (bis)\nNahoana aho no hifikitra\nAmin'izay rendrarendra?\nNy eto an-tany tsy nanome\nTsy afa-manaisotra amiko"
        ]
    },
    {
        "title": "NY FAHAFATESANAO NO MANOME FIAINANA",
        "number": 664,
        "verses": [
            "Namonjy anay Kristy ho afaka\nTsy ho ambany ziogan'ny\nfanandevozana\nHobim-pifaliana ho an'ilay\nMpandresy\nHeniky ny fitiavana izahay",
            "Ny Fanahiny mahafa-tahotra\nAfa-mandroso fa mivoha ny làlana\nRaisinay aminy ny fiadanany\nNy fonay ho amin'ny fitiavany.",
            "Jeso, mankalaza ny fandresenao\nJeso, ny fitiavanao mameno\nJeso fifaliana, fahafahana\nNy fahafatesanao manome fiainana"
        ]
    },
    {
        "title": "NY FAHATSARAN'NY RAY",
        "number": 597,
        "verses": [
            "Ray ô, any ambony\nEo anoloan'ny Tavanao\nDia fantatray ny fahalebiazan'ny fahatsaranao\nHo an'ny tsirairay avy, voafidinao.\nHitsaoka ny fahasoavanao\nmandrakizay izahay\nIzay nasehonao taminay\nTamin'ny asam-panavotana\nVitan'ny Jesosy."
        ]
    },
    {
        "title": "NY FAHENDREN'NY TANANY",
        "number": 469,
        "chorus": "Manendry ny tànako Izy\nAmin'ny ora fitsapana;\nMisy fahasoavana ao amin'ny\nFanendreny ny tànako",
        "verses": [
            "Misy andro maizina\nHitadiavako foana ny Tompoko,\nNefa ao Izy ka mitarika\nSy manendry ny tànako.",
            "Misy fotoana mampisento ahy\nNoho ny lala-manasatra;\nKanef'areniny aho amin'ny\nFanendreny ny tànako.",
            "Rehefa manjavona ny làlana\nKa tsy hitako izay haleha,\nDia miverina ny finoako\nAmin'ny fanendreny ahy.",
            "Amin'ny ora farany\nIhavian'ny fahafatesana\nDia hitarik'ahy Izy amin'ny\nFanendreny ny tànako."
        ]
    },
    {
        "title": "NY FAMINDRAMPONAO",
        "number": 657,
        "verses": [
            "Ny famindramponao Tompo ô\nTena tsara noho ny aina\nNy molotro no hiderako Anao\nHanandra-tànana amin'ny Anaranao\nNy molotro no hiderako Anao\nHanandran-tànana amin'y Anaranao\nHaleloia (in-4)"
        ]
    },
    {
        "title": "NY FANALAHIDIN'NY FAHASAMBARANA",
        "number": 263,
        "chorus": "Jesosy no fanalahidin'ny\nFiainana mahafinaritra;\nJesosy no fanalahidin'ny\nFahasambarana maharitra.",
        "verses": [
            "Soresorena matetika va ianao?\nManjombona koa ve ny andronao?\nMatahotra ny ampitso ve ianao?\nKa reraka sy kivy ny fonao?",
            "Ho anao izay mahatsiaro afoy\nMangaihay sy very hevitra;\nToa tsy manana na iza n'iza intsony\nMahit'anao Andriamanitra.",
            "Tsy fantatrao intsony ve'zay hatao?\nFa sesilany ireo olana?\nMandrosoa amin'ny lalina hatrany\nAza atsahatra ny vavaka.",
            "N'aiza n'aiza no mety hisy anao.\nKa tsy ampy ny fifalianao.\nDia mivavaha roahy ny hakiviana\nFahavalo tsy maintsy resena."
        ]
    },
    {
        "title": "NY FANAMPIANA ATAOKO",
        "number": 758,
        "chorus": "Ny fanampiana ataoko dia ny mitia,\nSatria ny fitiavana dia lehibe.",
        "verses": [
            "Nandao ny voninahiny Jeso\nMba hidina ety;\nNitondra ny heloko rehetr'Izy.\nHe ny fitiavany.",
            "Tsy mendrika handray ny\nfahasoavana,\n'Zao tenako izao;\nJeso nijaly sy maty ho ahy,\nAry ho anao koa.",
            "Jeso 'Lay tsara indrindra amiko\nSy be fitiavana;\nMahafa-po ahy ny fahatsarany\nNoho izay fantako."
        ]
    },
    {
        "title": "NY FANEVA EO AMBONIKO DIA FITIAVANA",
        "number": 311,
        "chorus": "Tia ahy Jesosy, tia ahy mandrakizay\nNa maizina ny masoandro na\nmibaliaka\nTsy tokony ho taitra aho fa tia ahy\nJesosy\nNy faneva eo amboniko, dia fitiavana",
        "verses": [
            "Namonjy ahy Jesosy tia ahy\nmandrakizay\nNanaiky nokapohin'Izy sy\nnohombohana\nMarobe ireo otako, navelany avokoa\nNy faneva eo amboniko, dia fitiavana.",
            "Tsaroany ny tsintsina sy vorona\nhafa koa\nTafiany soa ny vonikazo ka\nmamiratra\nTsy maty ho an'ireo Izy fa ho ahy\nTsy mendrika\nNy faneva eo amboniko, dia fitiavana",
            "Mibitsika ny devoly\nte-hanakivy ahy:\nTsy tia anao Jesosy, tsy zanany\nhianao;\nLainga anefa izany\nka toheriko tokoa\nNy faneva eo amboniko,\ndia fitiavana",
            "Mampianatra ahy ho tia Izy\nHamela heloka\nHisaotra ny mpanejika manisy\nratsy ahy\nInona no tsy lefitro\nna tsy ho zakako?\nNy faneva eo amboniko,\ndia fitiavana\n",
            "Ny foko ny fanahiko, ny saiko,\nNy heriko\nNo entiko mitia Azy hatramin'ny\nfarany\nTantanany isan' andro aho\nmba tsy ho reraka\nNy faneva eo amboniko,\ndia fitiavana"
        ]
    },
    {
        "title": "NY FANIRIAKO",
        "number": 141,
        "verses": [
            "Hitovy amin'i Jesosy;\nNo faniriako hatr'izao;\nNy Fanahiny no hanova ahy,\nHitovy amin'ny Tompo."
        ]
    },
    {
        "title": "NY FIAFARAN'NY DIA",
        "number": 386,
        "chorus": "Rehefa tapitra ny androko,\nDia hisy valisoa ho ahy\nFifaliambe any an-danitra\nRaha mifarana ny diako.",
        "verses": [
            "Raha mazoto amin'ny asany\nMandra-pifaran'ny androko;\nDia hahita 'lay Mpanjaka lehibe\nSy ny fahatsarany rehetra.",
            "Raha miasa tsara ho an'i Kristy\nKa mitady 'reo ondry mania,\nAzo antoka f'hasehony ahy\nNy voninahitry ny Tompo.",
            "Ho tapaka izay mamatotra\nSy ny tomanin'alahelo:\nTsy hisy intsony ny aretina\nRaha mifarana ny diako.",
            "Ny fiezahako mba hankato\nSy hanaraka 'zay sitrany\nHampitombo ny fahasambarako\nRehefa tong'any an-danitra."
        ]
    },
    {
        "title": "NY FIANDRIANANY",
        "number": 627,
        "verses": [
            "Hirao sy derao ny Anaran'i Jesosy\nAmbarao fa Jeso Kristy no Mpanjaka\nHo azy ny fiandrianana\nMpamonjy sy Tompo\nMpanjaka am-pontsika.",
            "Ry fokom-pirenena miankohofa\nAnatrehan'ilay mendrik'ho hajaina\nKa hobio, ary ankalazao\nOmeo azy ny saotra sy fiderana.",
            "Ry Fiangonana ô\nHo toy ny fanatitra ny fiainanao\nHamasino isan'andro koa ny fonao\nHo seza fiandrianany.",
            "Ho Azy ny fiandrianana\nDera, haja ho an'i Jesosy\nAry koa ny fahefana avo,\nHo avy Izy\nHanjaka amin'ireo Azy"
        ]
    },
    {
        "title": "NY FINOANA DIA FANDRESENA",
        "number": 191,
        "chorus": "Ny finoana no mandresy\nIzao tontolo izao;\nKa ho fandresena feno voninahitra",
        "verses": [
            "Mitsangàna mba ho miaramilan'\nI Kristy\nMivonona hanatrika\nNy ady masina;\nSatana sy ny ota no fahavalo ety,\nAtambaro ny hery 'zao,\nMba handresena azy.",
            "Ny fitiavana no faneva entintsika\nNy tenin'Andriamanitra kosa\nNo sabatra;\nNy dian'ireo Mpaminany no arahina\nSady miventy ireo hiram-pandresena",
            "Mierona toy ny liona\nny fahavalo re\nNefa minoa fa\nJesosy manohana anao;\nRaiso ny famonjena\nMba ho fiarovan-doha\nary ny fahamarinana no fisikinana.",
            "Aoka ho feno fitiavana ny fontsika\nIsan'ny fiadiana io\nHo enti-mandresy;\nAkanjo fotsy lava sy anaram-baovao,\nNo homena ny mpandresy\nAny an-danitra."
        ]
    },
    {
        "title": "NY FINOANA DIA MANDRAVA",
        "number": 784,
        "verses": [
            "Ny finoana dia mandrava\nNy manda mafy indrindra\nNy finoana dia mampandresy\nAntsika amin'ny ady.",
            "Ny finoana no mamoha\nNy rakitry ny hery\nKa mampahatanjaka ny osa\nAmin'ny fanatrehany.",
            "Ny finoana no mitarika\nHo eo an-tongotr'i Jeso\nIo no hany kintana\nManazava ny diantsika.",
            "Ry finoana ô! ianao no tokin'\nIreo maritioranay\nNanome azy\nSatroboninahitra tsy ho lo",
            "Ny finoana manome antoka\nSy fanantenana\nIo no hira mandrakizay\nSy feon'ny fahanfahana"
        ]
    },
    {
        "title": "NY FITIAVAN'ANDRIAMANITRA",
        "number": 47,
        "chorus": "Endrey ny fitiavanao\nHarena sarobidy\nMaharitra mandrakizay\nHo hirain'ny masina.",
        "verses": [
            "Lehibe ny fitiavan'Andriamanitra\nka tsy haiko\nNy milaza amin'ny vavako satria\navo ka tsy tratro\nNatolony ny Zanany\nho an'ny mpanota\nHanavotra, hampivahana\nhamela heloka.",
            "Ho rava sy hirodana avokoa\nIzay hitanao ety\nHo menatra, hiafin'ary\nhandositra ny mpanota\nHiantso ny vatolampy ireo nanda\nny Tompo\nFa ny fitiavan'ny Ray haharitra\nho ahy.",
            "Endrey 'zany fitiavana maherin'\nAndriamanitra\nTsy voapentinao izany fa toy ny\nranomasim-be\nNy lanitra no mitory\nny voninahiny\nNy habakabaka manambara\nny asany"
        ]
    },
    {
        "title": "NY FITIAVAN'ANDRIAMANITRA",
        "number": 590,
        "chorus": "Endrey ny fitiavan'ny Tompo ahy\nNohomboana teo amin'ny hazo,\nMidadasika sy lalina noho ny\nranomasina\nAvo noho ny habakabaky ny lanitra",
        "verses": [
            "Lehibe ny fitiavan'Andriamanitra\nJesosy Zanany no nanolotra ny ainy\nFitiavan-dehibe,\nFa maty ho ahy Mpanota",
            "Lehibe ny fitiavan'Andriamanitra\nManafaka ahy ny Fanahy,\nJesosy ao am-poko\nNoho ny herin'ny fitiavany\nTompoko mandrakizay Izy.",
            "Lehibe ny fitiavan'Andriamanitra\nManatona ry Mpanota,\nAoka ho vonjena\nNy fahafatesan'i Jesosy,\nFitiavana tsy levona",
            "Lehibe ny fitiavan'Andriamanitra\nHazony izay noraisinao,\nMandrosoa hatrany\nHo azonao ny lapasoa\nIzay namboarin'i Tompo."
        ]
    },
    {
        "title": "NY FITIAVAN'I JESOSY",
        "number": 104,
        "chorus": "Rehefa tonga any an-danitra\nAkory izany hafaliam-be\nRaha mahita an'I Jesosy\nHiram-pandresena no hatao.",
        "verses": [
            "Hirao ny fitiavan'i Jesosy\nHirao ny famindram-pony\nFa fonenana mamiratra\nNo homeny antsika ao.",
            "Raha mbola am-pivahiniana\nSaro-drahona ny lanitra\nRaha tonga ny fotoana\nLasa ny sento sy aloka.",
            "Aoka ho marina sy mahatoky\nAmin'ny fanompoana ny Tompo\nNy hihaona amin'i Jesosy\nNo ho valisoantsika ao.",
            "Hivoha vetivety ho antsika\n'Lay vavahady perla soa re\nLalan-tsoa izay volamena\nNo hodiavintsika ao."
        ]
    },
    {
        "title": "NY FITIAVAN'NY MPAMONJY",
        "number": 127,
        "verses": [
            "Ny fitiavan'ny Mpamonjy\nDia toy ny ranomasina manafotra,\nFa be dia be sy tsy misy fetra\nAmpy ahy mandrakizay."
        ]
    },
    {
        "title": "NY FITIAVANA NO FANEVANY",
        "number": 654,
        "verses": [
            "Ahy Jesosy Tompo ary Azy aho\nFitiavana no fanevany\nFitiavana no fanevany eo amiko",
            "Mitondra amoron-drano\nfialan-tsasatra Izy\nFitiavana no fanevany (in-3)\nFitiavana no fanevany eo amiko.",
            "Manome ahy Fanahy Masina Izy\nFitiavana no fanevany (in-3)\nFitiavana no fanevany eo amiko.",
            "Tiako hianao ary hianao tia ahy\nFitiavana no fanevany (in-3)\nFitiavana no fanevany eo amiko."
        ]
    },
    {
        "title": "NY FITIAVANA NO TENA LEHIBE",
        "number": 552,
        "chorus": "Ny fitiavana no lehibe (in-2)\nRaha feno fitiavana aho\nManao izay tian'i Tompo\nNy fitiavana no tena lehibe",
        "verses": [
            "Na hiteny toy ny anjely\nNa haminany ny ho avy\nNa hanam-pinoana be\nHo zava-poana izany\nNa hanam-pahalalana\nTsy misy fahendrena\nHo tsinontsinona izany\nFitiavana no tena lehibe",
            "Ny fitiavana mora fo\nTsy mialona na loza be\nMiantra sy mamindra fo\nMandefitra hatrany\nMahatsiaro ho mahantra aho\nRaha tsy manam-pitiavana\nIlaiko isan'andro izany\nFitiavana no tena lehibe",
            "Ny fitiavana mifaly\nAmin'ny fahamarinana\nMino ny zava- drehetra\nAry manantena\nMaharitra lalandava\nN'inona zava-miseho\nIzany no ijoroako:\nFitiavana no tena lehibe"
        ]
    },
    {
        "title": "NY FITIAVANAO NO IORENAKO",
        "number": 607,
        "chorus": "Mampahery ahy ny fitiavanao\nAndrin'ny finoako (in-2)",
        "verses": [
            "Ny teninao nomitarika ahy amin'ny\nalàlan'ny finoana (in2)\n;;; Nitady toky aho\nTamin'ny fombànao ahy\nLazain'ny Teninao ka inoako;;;",
            "Esory ny tahotro mba hijoro ho vavo\nlombelonao (in-2)\n;;; Tsy takatry ny saiko\nNy olan'ny fiainana\nNy feonao manome antoka ahy;;;"
        ]
    },
    {
        "title": "NY FITIAVANAO NO MAMPIPOSAKA NY MASOANDRO",
        "number": 667,
        "chorus": "Izay no itiavako Anao,\nJesosy sakaizako\nTsy miova Hianao\nMandritra ny andro\nManan-kialofana aho\nMatoky Anao aho\nAmin'ny androm-piainako ny fitiavanao\nMampiposaka masoandro.",
        "verses": [
            "Miovaova ny zavatra eto an-tany\nToa mamiratra, nefa mampitomany\nHianao Jesosy,\nNo hany itokiako\nNy fitiavanao\nMampiposaka masoandro.",
            "Raha toa mandrivotra\nNa mandrahona ny andro\nNy feonao\nMampitsahatra ny tafiotra\nFenoinao fanantenana aho\nMiposaka amin'ny fiainako\nNy masoandro."
        ]
    },
    {
        "title": "NY FIZAHAN-TOETRA",
        "number": 454,
        "verses": [
            "Misy fomba maro isehoan'ny\nFizahan-toetran'ny finoana\nNefa ao Jesosy\nManomana làlana\nSy fomba maro 'zay hahafahanao",
            "Raha misalasala, feno ahiahy\n'Zay miseho rehetra\nToa mampanahy;\nNefa ao Jesosy\nmivavaka ho anao\nNy fijeriny dia ampy ho toky.",
            "Raha alaim-panahy amin'ny ota\nSy ny harena maloto, mandratra\nDia ampahatsiarovy ahy\n'Lay tao Getsemane\nSy ny fijalianao tao Kalvary.",
            "Mandray fitahiana, fahasoavana\nKa zahan-toetra amin'izany\nFanetren-tena hatrany\nNo ankasitrahany\nAo ny tànany ampy hitantana."
        ]
    },
    {
        "title": "NY FO ILAIKO TOMPO Ô!",
        "number": 764,
        "verses": [
            "Mila fo madio aho ry Tompoko,\nFo mazava tsy misy pentina re;\nFotsy toy ilay Anao tahaka\nny oram-panala e!\n'Zany no iriko hatao amiko.",
            "Mila fitia ampy aho, ry Tompoko\nAry hery ampy sady betsaka;\nVonona hamaly izay\nantsonao ka tsy ho reraka:\nIo no fo tokony hananako.",
            "Aoka hiredareda aho Tompoko,\nHo fanahy feno herin-danitra,\nHo saina sy Tanana\nhanao izay sitrakao rehetra,\nHampiely izay noraisiko"
        ]
    },
    {
        "title": "NY FOKO RY MPAMONJY",
        "number": 278,
        "verses": [
            "Ny foko, ry Mpamonjy\nMangetaheta Anao,\nManiry lalandava\nHikambana Aminao.\nTsy afaka ao am-poko\nNy faniriana Anao\nOneno re ny foko\nHo lapanao!",
            "Ny androm-pahoriana\nRaha lapanao ny fo,\nManjary fitahiana,\nIzay manadio ny fo\nTsy afaka ao sns…",
            "Ny ora fifaliana\nRaha ao anilanao\nMamelom-paniriana\nHanao ny sitrakao\nTsy afaka ao sns….",
            "Ho lao ny fahotako\nRaha akaikezinao\nTsy misy hadalako\nIzay tsy afakao\nTsy afaka ao sns…",
            "Finaritra ny saiko\nRaha hipetrahanao,\nFa reraka ny aiko\nRaha halavirinao\nTsy afaka ao sns…"
        ]
    },
    {
        "title": "NY FOMBA ITIAVAN'ANDRIAMANITRA",
        "number": 359,
        "verses": [
            "Ny fomba itiavan' Andriamanitra\nDia mamiratra tokoa\nToy ny andro izay miposaka\nManome fahazavana\nMalefaka sady tsara\nSy manetsika ny foko\nKa mionona aho\nMiarak'amin'i Jesosy izay tia ahy.",
            "Ny fomba itiavan' Andriamanitra\nDia mampifaly ny fo;\nMitsoka toy ny rivotra,\nAfaka mamelombelona\nIzaho dia ratsy kanefa\nVoahetsik'io fitiavana io\nNy fomba itiavan'Andriamanitra\nDia maharesy ahy tokoa.",
            "Ny fomba itiavan' Andriamanitra\nDia toy ny voninkazo,\nMadio sy mihatsara isan'andro\nTokoa ny endriny,\nManomb'ahy ny fitivany\nEo amin'ny fiainako\nEkeko Jesosy noho ny fomba\n'Zay entiny mitia ahy.",
            "Ny fomba hitiavan'Andriamanitra\nDia lalina tokoa\nManome fitsaharana ny fanahy\nIzay reraka Izy\nKoa ankiniko amin'i Jesosy ny\nfiainako\nIzay mandalo vetivety foana\nsy mielina ety."
        ]
    },
    {
        "title": "NY HAHALALA ANAO",
        "number": 674,
        "chorus": "Ny hahalala Anao Jesosy\nHany tsara indrindra\nHianao Andriamanitro\nHareko, fifaliako\nTompo ô, tiako Hianao.",
        "verses": [
            "Izay noheveriko ho sarobidy\nNanorenako ny fiainako\n'zay toa tombony\nFatiantoka tsy mba nahasoa\nFa ny iriko:",
            "Ny hetahetako hahalala Anao\nHitoetra ho fananao\nHandray am-pinoana ny hasoavanao\nSy fanomezanao saro-bidy.",
            "Hiaina ao amin'ny fitsangananao\nAmpiraisina amin'ny fijalianao\nHitovy amin'ny fahafatesanao\nHiaraka Aminao mandrakizay."
        ]
    },
    {
        "title": "NY HAMONJY NO SAFIDINY",
        "number": 678,
        "chorus": "Ny hamonjy no safidy\nRaha nidina tety Jesosy\nNy rany soa sarobidy\nNo nomeny ho ahy sy ho anao.",
        "verses": [
            "Tsy nataony ho zavatra\nHo fikirina tsy azo avela\nNy fitoviany tamin'Andriamanitra\nAny ambony",
            "Be fanetren-tena tokoa\nNivesatra fahoriana koa\nNoho ny fitiavany\nMitady sy hamonjy ny very",
            "Novetavetaina Izy\nTsy tian-ko jerena akory\nNilaozan'ny mpianany\nNafoin'ny Rainy tao Kalvary.",
            "Niaritra fijaliana\nVono sy latsa, fanesoana\nNisotro ny ngidin'ny ota\nNohaniny tokoa tao Golgota."
        ]
    },
    {
        "title": "NY HAZO NIJALIANAO",
        "number": 118,
        "verses": [
            "Ny hazo nijalianao,\nRy Jeso Tomponay!\n;;;Maneho ny fitiavanao;;;\n''' Dia iankinanay'''\nDia iankinanay. (in-2)",
            "Mitazana ny masonay,\nMangoraka ny fo;\n;;;Na meloka aza izahay;;;\n\"Ny teninao ho to\"\nNy teninao ho to. (in-2)",
            "Ny avotr'aina vitanao\nNo itokianao\n;;;Ny entanay voaesotrao;;;\n\"Ka afaka izahay\"\nKa afaka izahay. (in-2)",
            "Ny hazo nihomboanao\nDia voninahitray\n;;;Ny nanalam-baraka anao;;;\n\"No isandratanay\"\nNo isandratanay. (in-2)"
        ]
    },
    {
        "title": "NY HAZOFIJALIANA IZAY AMPITONDRAINY AHY",
        "number": 236,
        "chorus": "Tsy lehibe mihoatra noho\nNy herin'ny fahasoavany\nNy hazofijaliana\n'Zay ampitondrainy ahy\nAfaka mandresy aho.",
        "verses": [
            "Mety ho mavesatra tokoa\nNy hazofijaliana\nKanefa tsy havesa-danja\nMihoatra ny fahasoavany",
            "Ny kapoaka izay sotroiko\nDia tsy mangidy noho\nIlay nosotroin'ny Tompo\nFahiny tao Getsemane",
            "Rehefa mirotsaka ety\nAn-dàlan'ny fahoriana\nNy fahazavan'ny fitiany\nDia mamiratra soa ery",
            "Mameno ny fifaliako\nNy manao ny sitrapony\nMandeha eo imasony aho.\nAfoiko izay ananako."
        ]
    },
    {
        "title": "NY HIRAKO",
        "number": 232,
        "chorus": "Izy no hirako sy hotantaraiko\nNy famindram-pony\nno holazaiko\nMandram-pahitàko\nilay voninahiny\nDeraina isan'andro ny Anarany.",
        "verses": [
            "Mankao amin'ny fonenana\nMandrakizay ny lalako\nKa hahita ny Mpamonjy ravo\nsy mirana\nMameno izany foko, ny fitiavany\nIzany re no hirako\nDeraina ny Anarany.",
            "Nidina avy any an-danitra\nJesosy nitady ahy\nIzay voagadran'ny ota sy\nNandevozina\nVoahositry ny fitiavany aho\nAry ny zava-kendreko\nNy ho vatosoa iray eo an-tanany.",
            "Na dia mandao ahy ireo namana\nHiaraka amiko ianao ao ambony ao\nMandritr'ilay maraina.\nMaraina mandrakizay\nAzoko atao ny mitaky ny anjarako"
        ]
    },
    {
        "title": "NY HIRAKO IZAO",
        "number": 95,
        "verses": [
            "Ny hirako izao; Ray be fitia\nNy ho akaikinao;\nBebe kokoa\n'Zay re no hirako,\nMandra-pahafatiko:\n;;;Akaikinao;;;",
            "Raha mba sarotra; ny diako\nKa zary maizina\nNy lalako;\nRy Ray akaikinao\nNo tian'ny zanakao;\n;;;Akaikinao;;;",
            "Ao no hiseho re; ny tohatra\nMba hanatonako\nNy lanitra\nAnjely miantso ahy\nAkaikinao ry Ray,\n;;;Akaikinao;;;",
            "Ny fahoriana; sy loza koa,\nRaha eo anilanao,\nDia mody soa\nKoa dia tano aho\nHo ao akaikinao!\n;;;Akaikinao;;;",
            "Na dia hilentika; ny androko,\nAry'zao hita izao\nHilaozako,\nMbola ho hirako\nRy Andriamanitro,\n;;;Akaikinao;;;"
        ]
    },
    {
        "title": "NY LALAN'ANDRIAMANITRA",
        "number": 373,
        "chorus": "Koa apetraky ny Tompo\namintsika\nNy fitoriana izany;\nTsy misy fomba hafa nomeny\nHamonjeny ny olona.",
        "verses": [
            "Làlan'iray ihany no atoroy\nHo an'zao tontolo izao\nJesosy maty ho an'ny mpanota\nIo no fifaliana",
            "Raha nangina ka tsy nanambara,\nNy mpianatr'i Jesosy\nDia tsy ho nandre izaho sy ianao\nFa mamindra fo ny Tompo.",
            "Lazao amin'ny olona\nIzay nataony taminao\nAsao hametraka ny entany\nAmin'ny Jesosy ireo.",
            "Tompo malala ô, handeha izahay\nHitory amin'ny hafa,\nMba hilazan'ireo kosa indray\nAmin'ny hafa sasany."
        ]
    },
    {
        "title": "NY LISY AO AN-DOHASAHA",
        "number": 107,
        "verses": [
            "Nahita sakaiza aho 'zay\nnahanterak'ahy\nIzy no tsara indrindra amin'ny\nAlinalina, \"Haleloia\"\nDia Jesosy nanadio,\nnisolo ahy koa\nNampahery sady nampionona ahy\nNitondra ny entako sy ny aretiko,\nNanafaka ny fahasahiranako.\n\"Haleloia\"\nKintana mamiratra\nvao maraina izy io\nNotsongaiko tamin'ny alinalina.",
            "Ny enta-mavesatra dia nesoriny\nTamiko,\nMandako amin'\nny fakam-panahy Izy\n\"Haleloia\"\nNy sampin'ny foko efa nilaozako,\nNoho ny fitiavako an'i Jeso\nNa mandao aza izao tontolo izao\nHo tafita aho noho ny\nherin'i Jeso \"Haleloia\"\nKintana mamiratra\nvao maraina izy io\nNotsongaiko tamin'ny alinalina.",
            "Tsy hamela ahy ho irery\nna handao ahy Izy\nRaha velona am-pinoana koa aho\n\"Haleloia\"\nManda vy fiarovana ahy,\nTsy hanan-tahotra aho\nMana iveloman'ny fanahiko\nFo matoky no hoentiko any an-\ndanitra\nLoharonom-pifaliana azoko\n\"Haleloia\"\nKintana mamiratra\nvao maraina izy io\nNotsongaiko tamin'ny alinalina."
        ]
    },
    {
        "title": "NY MASOKO HAHITA ANAO",
        "number": 370,
        "verses": [
            "Nandre ny filazana Anao aho\nF'ankehitriny kosa\nDia hahita ny Mpanjaka\nHahita ny Mpanjaka dia Jeso",
            "Manomboka izao aho hidera Anao\nAnkehitriny kosa dia hahita ny\nMpanjaka\nHahita ny Mpanjaka dia Jeso"
        ]
    },
    {
        "title": "NY MIARA-DIA AMIN'I JESOSY NO TIAKO",
        "number": 1,
        "chorus": "Izay itarihany ahy, dia harahiko\nIzay arosony, dia hohaniko\nNy nalehany no izorako\nJeso no arahiko amin'ny androko.",
        "verses": [
            "Ny miara-dia amin'i Jesosy\nno tiako\nToy ireo vahoaka maro\ntamin'ny androny tety;\nNafahany ny babo sy ny\nmalahelo am-po\nIlay vaovao mahafaly dia\nmitondra fiadanana.",
            "Ny miara-dia amin'i Jesosy\nno tiako\nToy ilay jamba teo amoron-\ndalam-ben'i Jeriko;\nNitaraina izy ka nampahiratiny\nka ny lalàn'i Jesosy no narahiny.",
            "Ny miara-dia amin'i Jesosy\nno tiako\nHahita an'i Kalvary\nizay nijaliany;\nNampirotsa-dranomaso ahy\nny fitiavany\nKoa hanarak'Azy aho fa voavela\nHeloka.",
            "Indray andro any aho hiaraka\namin'i Jeso\nHo amin'ilay fonenana hodiako\nrahatrizay;\nHihira fiderana miarak'amin'ireo\nmasina\nHankalaza ny Mpamonjy amim-\nboninahitra."
        ]
    },
    {
        "title": "NY MPAMONJY NO MITADY",
        "number": 144,
        "verses": [
            "Ny Mpamonjy no mitady\nFihavanana aminao\nIzy no manambitamby\nHanantonanao izao\nSao manjary fandatsana\nNy fifonana aminao\nKa ny mety, mihavàna\nAmin'ny Mpamonjy 'zao.",
            "Dieny misy hafanana\nKa mangoraka ny fo,\nManatona ny Mpamonjy\nSao dia mangatsiaka indray,\n'Zao no andro famonjena\nKa vonjeo sao neninao;\nRy mpanota, miverana\n'Zao ankehitriny 'zao.",
            "Sao ity no toriteny\nFara-fanasana anao;\nSao anio no fotoana\nFara-ahavelomanao:\nKa aza mba misalasala\nSao manjary neninao\nRaha tsy mety mahalala\n'Zao fotoana mety 'zao.",
            "'Ndrisy! be ny fahotako\nBe ny ratsy vitako:\nSao tsy raisin'ny Mpamonjy;\nNy mpanota tahak'izao?\nMiverina, fa ny ràny\nAmpy hahadio anao;\nManatona hosasany\n'Zao ankehitriny izao."
        ]
    },
    {
        "title": "NY OLAN'NY FAHORIANA",
        "number": 592,
        "chorus": "Ny fahoriana mpahazo ny mpino\nManerana izao tontolo izao\nTandremo!\nMiorena tsara amin'ny finoana\nMahonona tena, miambena.",
        "verses": [
            "Tsy azoko Tompo ô\nNefa manaiky aho\nManoloana ny olana\nMahavery hevitra\nMisy ny fahatsaranao\nHafa ny fahendrenao\nHo fantatro any ambony\nAo an-tranonao.",
            "Tsy marenina amin'ny\nantson'ny reraka Ianao\nNy fahanginanao\nDia misy antony\nMahazo valim-bavaka\nNy fo be ahiahy\nNa dia tsy araka\nIzay nandrasany aza",
            "Ny làlanao tsy mitovy\nAmin'izay iriko\nTsapako, hitako\nFa hafa ny drafitrao\nEnga anie mba ho mamiko\nNy sitraponao hiankohofako\nNy hazo fijalianao",
            "Misy ny fahatsaranao\nHafa ny fahendrenao\nFantatrao izay soa\nTokony ho an'ny zanakao\nNa dia tsy fantatro avokoa ny rehetra\nAtaovy mandresy amin'ny fitsapana\naho."
        ]
    },
    {
        "title": "NY OTA TSY HOTAFIDITRA",
        "number": 81,
        "chorus": "Ny ota tsy ho tafiditr'ao\nAmin'ny andro fitsarana\nRaha ny fanahinao\nMisy pentipentina\nTsy ho tafiditr'ao ianao",
        "verses": [
            "Masina ny lanitra feno voninahitra\nFa ny ota tsy ho tafiditr'ao\n'Zay rehetra tonga ao\nDia tsy misy pentina\nFa ny ota tsy ho tafiditr'ao,",
            "Raha ilaozanao ity, ka irinao\nNy ho ary\nAmin'ilay fonenan-tsoa mamiratra\nDiovy ny toetranao, aoka ho\nfiainanao Jeso\nFa ny ota tsy ho tafiditr'ao",
            "Mety ho azonao atao ny mivelona\namin'ota\nKa mandà ny fahasoavan-danitra\nNefa ny ota dia hisakana eo am-\nbaravarana\nKa tsy ho tafiditr'ao ianao.",
            "Raha fikirinao ny ota mandram-\npahafatinao\nDia ho latsak'ao amin'ny\nMaizina ianao\nHo very ianao hamoy fo\nMba ho valin'ny natano\nFa ny ota tsy ho tafiditr'ao."
        ]
    },
    {
        "title": "NY RAN'NY ZANAK'ONDRY LATSAKA",
        "number": 110,
        "verses": [
            "Ny ran'ny Zanak'Ondry latsaka\nNamelona ahy tao Golgota\nKa io no tena vato fantsika,\nMaharitra ny tafio-drivotra.",
            "Raha voaratra noho ny otako\nKa lany foana ny heriko,\nNy rany masina nalatsaka\nNo nahitako fahasitranana.",
            "Izao hira izao no mamiko\nKa tonga tsy misaraka amiko\nNy ran'ny Zanak'Ondry no mahay\nManavotra ahy mba ho an'i Ray.",
            "Raha ketraka sy kivy re ny fo\nVelomiko indray ny hirako\nNy amin'i Jesosy sy ny Rà\nKa afaka ery ny tahotro."
        ]
    },
    {
        "title": "NY RAN'NY ZANAKONDRY",
        "number": 91,
        "chorus": "Ny ràn'ny Zanak'Ondry va?\nDia'lay Rà mahadio ny fanahy\nNo namotsinao ny fitafianao?\nVoasasan'ny Ràny va ianao?",
        "verses": [
            "Moa ny Ran'ny Zanak'Ondry mahadio\nMba noraisinao hahasasa anao?\nMoa tokinao ny hasoavany?\nVoasasan'ny Ràny va ianao?",
            "Ny Mpamonjy va mba eo, anilanao\nVoasasan'ny Rany va ianao?\nIlay voahombo hatrizay va aminao?\nVoasasan'ny Ràny va ianao?",
            "Rehefa tonga ny Mpampakatra aty,\nMoa hadio ny fitafianao?\nFonenana mamirampiratra ary\nHo anao raha voasasa ianao.",
            "Ny lambanao voapentin'ota ré\nMba sasao fa hanjopiaka koa\nNy Ran'ny Zanak'Ondry Mahadio\ntokoa\nNy Fanahy te-hiverina amin-dRay."
        ]
    },
    {
        "title": "NY RANAO",
        "number": 600,
        "verses": [
            "Tompo any an-danitra Sarobidy Ianao\nKa iankohafanay sy hamasininay\nManakoako ny hiran'ny voavonjy\nDerao ny Zanak'Ondry",
            "Tonga tety an-tany\nHo anay Ianao\nNitondra ny helokay\nSy fanaintainanay\nNiaritra ny mafy noho ny aminay\nHahazoanay fiainana",
            "Tompo tia sy miantra\nMendrika haja Hianao\nSatria nanolotra aina\nMba hisolo anay\nVonona hanaja ny fitiavana\nAmin'ny androm-piainanay",
            "Ny Ranao no namonjy ahy\nNy Ranao no nanafaka ahy\nHahafahako miditra any an-danitra\nAfitiavanao no namela ahy\nNy herinao no nanarina ahy\nNy ra soan'ny zanak'ondry (in-2)"
        ]
    },
    {
        "title": "NY SITRAKAO NO SITRAKO",
        "number": 436,
        "verses": [
            "Ny sitrakao no sitrako,\nAndriamanitra ô\nTsy mahaleo tena aho,\nTsy ahy ny safidy\nFa efa nankiniko eo an-tananao\nNy androko rehetra\nNafoiko hanjakanao\nHotantaninao ry Raiko ô!",
            "Ny làlanao no lalako\nNa sarotra na mora,\nTsy azo antoka\nIzao fiainana mandalo izao;\nIanao ihany no sisa antenaiko\nSady anjara lovako,\nVahiny sy mpivahiny aho no ety,\nRy Raiko ô.",
            "Tsy vitsy ny fakam-panahy\nMitady hamabo ny fo,\nMiezaka hanintona ahy\nHo tia ny ratsy noho ny soa\nIanao anefa no mbola hotiaviko\nNo sady hifikirako,\nTsy hanenenako,\nNy nanekeko Anao Jesosy ô."
        ]
    },
    {
        "title": "NY SITRAPON'ANDRIAMANITRA",
        "number": 482,
        "chorus": "Ny sitraponao Andriamanitr'ô\nNo mampanaiky ahy Anao,\nMandra-pahatonga ahy ho\nVoafina ao Aminao;\nHo tanteraka anie ny sitraponao.",
        "verses": [
            "Resy ihany ireo sitrapoko\nAnao aho, Anao irery,\nIzao no vavaka ataoko;\nHatao anie ny sitraponao",
            "Sasatra ny ota sy reraka aho;\nMaizina hatrany koa ny làlana;\nFahazavana anefa izao,\nNo miposaka mampahery.",
            "Ny sitraponao ry Mpamonjy ô;\nNo namabo ahy sy nanarona ahy,\nToy ny ony ny fiadanako\nAfaka re ny fanahiko",
            "Voahidy ao Aminao izao\nNy làlako mba tsy hiviliany;\nEo anivon'ny sitraponao,\nMpamonjy ô no fonenako."
        ]
    },
    {
        "title": "NY TAFIKY NY LANITRA",
        "number": 387,
        "chorus": "Nafahany ny mpanota\nNovonjeny izao tontolo izao\nAsandrato ny fihobiana\nHaleloia, haleloia.",
        "verses": [
            "Avia ry olom-boavonjy\nRy tafiky ny lanitra\nDerao Andriamanitra\nFa mandresy Izy",
            "Raha miaraka Aminy isika\nHitombo ny finoana\nHihoby sy hihiaka hoe:\nDerao ny Mpanjaka",
            "Aingao ny diantsika izao.\nRy tafiky ny lanitra\nHitaona izao tontolo izao\nHo an'i Jesosy."
        ]
    },
    {
        "title": "NY TAMBINY",
        "number": 254,
        "verses": [
            "Efa misy fetra raha\nMandà ny Tompo\nKa miala aminao\nNy antson'ny Fanahy\nRaha milofo amin'\nIreo zava-poana\nNy tambiny ve\nNoheverinao?",
            "Ny marainan'ny\nFanantenainao ve\nSoloinao ny\nFifaliana mandalo?\nAry koa re ny\nFamiratry ny ota\nSy ny tambiny\nIzay ho raisinao.",
            "Dieny mbola misy re\nNy famindram-po\nKa misintona anao\nNy fitiavany\nTsy hanantona ve?\nKa mibitsika hoe\nInty aho re,\nInty aho re Jeso.",
            "Noheverinao ve\nNy tambin'izao?\nRaha very\nNy fanahinao,\nKa nihoaranao koa\nIlay fetra iray\nNy tambiny ve\nNoheverinao?"
        ]
    },
    {
        "title": "NY TARIKY NY HALELOIA",
        "number": 128,
        "chorus": "Voninahitr'ho Azy, redony hoe\nHeleloia\nAoka hanakoako ny fiderana\nEfa novohaiko ho Azy\nny varavaran'ny fo.\nTariky ny Haleloia aho izao.",
        "verses": [
            "Lavitra ny Tompo aho\nfony mbola mpanota,\nNefa nohenoiny raha nitaraina;\nNotarihiny aho ka nentiny\nho isan'i Azy\nTariky ny Haleloia aho izao.",
            "Manodidin'ahy izao\ntontolo izao mamiratra\nNefa tsy iriko ny zava-poana,\nSatria any an-danitra\nno sainin'ny fanahiko\nTariky ny Haleloia aho izao.",
            "Volamen'an-tapitrisany tsy atakaloko\nIo toeran-tsarobidy indrindra io\nAzo antoka ny ao amin'Andriamanitra\nTariky ny Haleloia aho izao.",
            "Mamiratra lalandava\nny masoandro any,\nTsy toeran'olona manjombona\nFeno hira izao ny foko,\nfeno hafaliam-be\nTariky ny Haleloia aho izao."
        ]
    },
    {
        "title": "NY TELEFAONAN'NY MPANJAKA",
        "number": 471,
        "chorus": "Telefoneo re ny any an-danitra,\nKa miresahà amin'i Jesosy ianao,\nEndrey 'zany fifalina satria,\nAzo tsapaina ny\nherin'ny vavaka re.",
        "verses": [
            "Foibe tsy mba mety ho sahirana,\nVonona hatrany handray ny antso\nRaha ory iny indrindra izaho sy\nIanao,\nAoka hiantso ny Mpanjakan'ny\nLanitra.",
            "Tsy vidina re ny fifandraisana,\nNefa miasa ho ahy sy ho anao,\nMalalak'hatrany ny fihaonana,\nAmin'ny fotoana\nmety koa ny valiny",
            "Sendra tsy azo ve ireo valiny?\nTapak'izany ny fifandraisana,\nSatana no nanimba tamin'ota\nSy fitak'ary zava-dratsy\nmaro hafa,",
            "Moa ratsy ve ny fifandraisana,\nVavaka finoana, teny fikasana,\n'Reo no mampitohy 'lay fi-\nfandraisana marina\nAmin'ny Jesosy Sakaizanao.",
            "Ireo tafiotra sy ny fitsapana\nTsy hahafoana ny fifandraisana\nRaha mihazon'anao ny tanan'ny\nRay\nKa miantsona tsar'amin'i Jeso\nIanao."
        ]
    },
    {
        "title": "NY TENIN'ANDRIAMANITRA",
        "number": 233,
        "verses": [
            "Saino ny tenin'Andriamanitra\nRaiso sy fikiro ao am-ponao\nAsehoy amin'ny fiainanao\nFa nanov'anao'lay Teny Soa.",
            "Afafazo ny tenin'i Tompo\nFa ilain'izao tontolo izao\nManambara an'i Kristy izy\nIzay lalana tokana."
        ]
    },
    {
        "title": "NY TENINAO",
        "number": 476,
        "chorus": "Eny, ato am-poko no\nIraketako ny Teninao\nMba tsy hanotako Aminao (in-2)\nRy Tompo ô, Mpanjakako.",
        "verses": [
            "Fanilon'ny tongotro\nSy ny fanazavana ny lalàko ny\nTeninao.",
            "Toy ny rano mahadio\nSy manamasina ny fiainako\nNy Teninao.",
            "He, mamy sady soa,\nNoho ny tantely mahafapo\nNy Teninao.",
            "Fa sabatra ihany koa;\nMaranitra, mahavoa manindrona\nNy Teninao"
        ]
    },
    {
        "title": "NY TENINAO",
        "number": 587,
        "chorus": "Ny Teninao ihany\nNo fanilon'ny tongotro\nSy fanazavana ny làlako\nSy fanazavàna ny làlako.",
        "verses": [
            "Raiketiko am-po ireo Teninao\nMba tsy hanotako Aminao\nRaiketiko am-po ireo Teninao\nMba tsy hanotako Aminao.",
            "Ny molotro no hidera Anao\nFa ampianaronao ny fitsipikao\nNy lelako hihira ny Teninao\nFa marina ireo didinao.",
            "Raisiko ho lova ny Teninao\nFa fiflian'ny foko izany\nApetrako ny foko hankatoa\nNy didinao mandrakizay."
        ]
    },
    {
        "title": "NY TENY FIKASANY HO AHY",
        "number": 6,
        "chorus": "Tanany ny teny fikasany,\nIzy dia miara-dalana amiko,\nMbola tsy nofoanany izay nolazainy\nTanany ny teny fikasany.",
        "verses": [
            "Mety hisy aizina eo alohako,\nKanefa tsy ho irery aho,\nFa ilay Sakaiza eo anilako\nMampanantena fa hitarika ahy.",
            "Mety ho hitako ny fahoriana,\nSakaiza mety koa tsy handray,\nNefa raha mijoro aho tohanany\nManarona ahy ny fitiavany.",
            "Aok'izay ny hevitra mamabo ahy\nTsy miova Izy fa tia.\nFitsapàna tsy hahasarak'Azy,\nAmin'ireo manaja ny anarany."
        ]
    },
    {
        "title": "NY TSARA INDRINDRA",
        "number": 13,
        "chorus": "Jesosy dia mitahy ny asany,\nNy tsara indrindra no tadiaviny,\nNa bitika aza re ny talentanao\nNy tsara indrindra no omeo Azy",
        "verses": [
            "Henoy ny antson'ny Tompoko\nho anao\n\"Atolory Ahy ny tsara indrindra\naminao\"\nNa be na kely izay vitanao tetỳ\nIzy no hitsara ny fiezahanao.",
            "Tsy ilàna sitraka amin'ny\nolombelona\nFa voninahitr'Andriamanitra\nAza ketraka amin'ny fanaovan-tsoa\nHo azonao tokoa ny valisoa",
            "Mandalo ny andro, avy faingana\nny alina\nHampamoahina any an-danitra\nny asanao\nDia ho azonao ny tena fitsaharana\nNoho ny tsara indrindra\nizay natolotrao"
        ]
    },
    {
        "title": "NY ZAVATRA REHETRA",
        "number": 736,
        "verses": [
            "Ny zavatra rehetra\nmiara-miasa hahasoa\nIzay tian'Andriamanitra,\ndia izay voantso\nNy zavatra rehetra\nmiara-miasa hahasoa\nAraka ny fikasany rahateo",
            "Amin'ny andro mahafaly\nmifalia ianao\nRaha sendra ory kosa, mieritrereta\nFa 'lay Andriamanitra\ndia mikendry hahasoa\nIzay hoavinao any am-parany.",
            "Ka na faly na tomany\ndia misaora Azy\nSady mandratra Izy, manasitrana\nIzay rehetra miseho,\nekeo ho avy Aminy\nTsy ho ela dia hazava nylàlana.",
            "Koa misaora Azy noho\nny zavatra rehetra\nFa izay no sitrapon'i Ray\nNy alina ho mazava mamirapiratra\nRehefa eo ny Tompo mitari-dàlana."
        ]
    },
    {
        "title": "NY ZAVATRA REHETRA AO AMIN'I JESOSY",
        "number": 794,
        "chorus": "Ny fifaliana mateza, mahafa-po dia omeny;\nHitako ao Aminy koa ny zavatra rehetra.",
        "verses": [
            "Mitady 'azy hampifaly ny fo\nAmin'ota sy ' zao fiainan'izao;\nIzaho sy ianao, ry sakaiza,\nHita ao amin'i Jeso.",
            "Torotoron'ny alahelo ianao\nVesaran'entana koa ny fonao;\nNefa Jeso vonona hanampy anao,\nRaha mibebaka amim-panetren-tena.",
            "Tsy misy anarana mahavonjy,\nAfa-tsy ny anaran'i Jesosy,\nZay ahazoam- pamelan-keloka\nAry manasitrana ny ratram-po."
        ]
    },
    {
        "title": "O MANDROSOA RY MPANARATON'I JESO",
        "number": 178,
        "chorus": "Miaingà ry namako ô,\nJeso no mibaiko\nMandrosoa, mandrosoa\nMandrosoa tokoa,\nAza kivy koa na dia tsy mahazo\nMandrosoa amin'ny lalina kokoa.",
        "verses": [
            "O! mandrosoa ry mpanaraton'i Jeso\nIzao no baiko azontsika ka\nmandrosoa\nJesosy Tompo no mibaiko\nmandrosoa\nRaiso ka arotsahy ny haratonao.",
            "O! mandrosoa ry mpanaraton'i Jeso\nSaina mora kivy aoka holavinao\nFa ny mora kivy dia hanenina tokoa\nRaiso ka arotsahy ny haratonao.",
            "O! mandrosoa ry mpanaraton'i Jeso\nMbola ao ny hazandrano hoazonao\nTsy azonao anio ampitso mandrosoa\nRaiso ka arotsahy ny haratonao.",
            "Mba mitoera Jeso ao an-tsambonay\nMba ho renay lalandava ny feonao\nNy baikonao ry Tompo\nno asandratray\nHandrotsahanay ny haratonay"
        ]
    },
    {
        "title": "O! AVIA",
        "number": 501,
        "chorus": "Feo sisa: O! Avia (in-10)\nFeo I:\nMitadiava an'i Jehovah\nDieny mbola akaik'Izy,\nAoka hiverin'Aminy ianao,\nFa hamindra fo tokoa ny Tompo.",
        "verses": [
            "Hanao ny efitra ho farihy Aho\nHanova izay karankaina.\n'Zany no Teny fikasan'ny Tompo.\nAmin'izao andro farany izao.",
            "Hototofana ireo lohasaha,\nHaetry koa ireo havoana\nAry ny meloka dia hahitsy\nHaneho ny famonjen'i Jehovah.",
            "Handrotsaka ny Fanahiny Izy\nAmin'izany mangetaheta\nHahatonga azy hahay mandeha\nAraka ny lalàny hatrany.",
            "Mampahery sy mamonjy anao\nAry mitarika hatrany Aho\nAza matahotra na miherika\nFa ny tanako mitantanan'anao."
        ]
    },
    {
        "title": "O! RY MPANOTA AZA MANDA",
        "number": 4,
        "chorus": "He! mivoha izao ny lanitra,\nRy mpirenireny lavitra\nIndro Jesosy, Izy no ao!\nAiza no hisy anao?",
        "verses": [
            "O! ry mpanota, aza mandà\nJeso miantso, ka miovà\nMba manatòna Azy izao!\nIzy hamonjy anao.",
            "Be ahiahy va ianao,\nNo tsy mandroso faingana izao?\nDia tapaho ny hevitrao,\nKa miovà hatrizao.",
            "Mba miverena re, hatrizao\nKa hararaoty ny andronao;\nFa ny aty ho simba sy lao,\nKa mba modia izao."
        ]
    },
    {
        "title": "O! RY RAIKO IZAY MALALA",
        "number": 274,
        "verses": [
            "O! ry Raiko izay malala\nTonga aho zanakao,\nIzay nania fa adala\nKa mifona Aminao;\nMamelà ny fahotako\nTeo anatrehanao;\nAry ny fahadalako\nAza mba tsarovanao!",
            "He izaho nanantena\nIzao fiainana izao\nKa nandà ny famonjena\nIzay lazain'ny teninao;\nKanjo hitako tokoa\nFa izao tontolo izao;\nTsy mba manan-java-tsoa\nHampiadana ao.",
            "Enga aho izay mahantra\nMba ho isan'ny Anao\nHianao no Ray Mpiantra\nMiantra ny zanakao;\nAry noho ny Mpamonjy\nIzay nanavotra ahy re;\nRaiso aho ho tra-bonjy\nHo anay, ry Ray! Amen!"
        ]
    },
    {
        "title": "OMALY SY ANIO, MANDRAKIZAY",
        "number": 440,
        "chorus": "Omaly sy anio, mandrakizay\ntsy miova Jeso\nMety miova ny zava-drehetra\nafa-tsy Jeso\nVoninahitra, ho an'ny Anarany.\nVoninahitra ho an'ny Anaran'i Jeso",
        "verses": [
            "Endrey ny hafatra malaza\nSady mamy koa,\nOmaly sy anio, mandrakizay\nTsy miova Jeso\nMbola tia ny mamonjy\nSy manasitrana Izy.\nMampifaly ny ory,\nMampangina tafiotra.",
            "Sakaizan'ny mpanota Izy\nKa mitady anao\nManantòna, miankohofa\nf'ilay milaza hoe:\n''Izaho tsy manameloka anao fa\nMandehana soa''\nNo miteny aminao koa\nAn'io famelana io.",
            "Nositraniny ireo nijaly\nTety an-tany\nMbola miala noho ny didiny\nNy aretina\nNanasitran'ilay nanendry Azy\nNy heriny;\nNy finoana mitaky dia mbola\nHomeny be.",
            "Toy ny tany Emaosy niaraka\nTamin'ireo\nNo nandehanany hatrany\nAnilantsika koa\nTsy ho ela intsony\nDia hanoloana Azy re!\nMbola ho iny Jesosy iny\nToy ilay nandeha"
        ]
    },
    {
        "title": "OMEO AHY JESOSY",
        "number": 124,
        "chorus": "Omeo ahy Jesosy amin'ny alehako;\nAmpy ahy Jesosy, omeo ahy re\nJesosy",
        "verses": [
            "N'inona hitranga ety\nAmpy ahy Jesosy,\nNa ho sarotra ny dia;\nomeo ahy re Jesosy.",
            "Raha ilaozan'olona aho\nAzom-pahoriana\nSotroiko ny kapoaka\nOmeo ahy re Jesosy",
            "Raha tsy maintsy irahina\nAny an-tany lavitra\nEkeko am-pifaliana\nOmeo ahy re Jesosy.",
            "Manantena Azy aho\nRaha sendra olana\nIzy no hanampy ahy\nOmeo ahy re Jesosy",
            "Rehefa vita ny asako\nKa ilaozako ny eto\nAmin'ny andro hodiako\nOmeo ahy re Jesosy"
        ]
    },
    {
        "title": "OMEO AHY NY HANAM-PITIAVANA",
        "number": 247,
        "chorus": "Maniry mafy aho, Jesosy ô\nHahazo fanahy ho Anao\nHitaona ny mpanota mahantra\nHandraisanay famonjena.",
        "verses": [
            "Omeo ahy ry Tompo ô!\nNy hanam-pitiavana\nFitiavana mba hamonjy\nNy fanahin'ireo very.",
            "Na dia ho sarotr'aza ny dia\nTsy maintsy harahiko,\nHandroso ihany aho satria\nIanao no amiko",
            "Ampio aho, ry Tompo ô!\nValio ny vavako\nHamonjy ireo sahirana\nNoho ny herin'ny ota."
        ]
    },
    {
        "title": "ORA FIVAVAHANA",
        "number": 347,
        "verses": [
            "Ora fivavahana (in-2)\nIzay manala ireo ahiahiko\nHanaiky ny seza fiandrianan'ny\nRaiko\nHamborahako ny hetahetako\nAmin'ny fotoana maha ory ahy\nMahazo fiononanana ny fanahiko\nVoaaro amin'ny fakam-pahy\nAmin'ny ora fivavahana",
            "Ora fivavahana (in-2)\nMahatsiaro sambatra aho\nToy ireo izay maniry fatratra\nHo ao am-pony ny fiverenanao\nHandeha aho hiaraka amin'izy ireo\nHihaona amin'ny Tavan'ny Tompo\nAry hitoetra ao am-pifaliana\nAvia ô! Ora fivavahana.",
            "Ora fivavahana (in-2)\nElatrao no hitondra ny faniriako\nHo any amin'ilay mahatoky\nIzay nitahy ny fanahiko\nSatria hoy ny Tompo;\n\"Tadiavo ny Tavako\"\nMinoa ny teniko, ny fahasoavako\nApetrako eo amin'ireo entako\nAmin'ny ora fivavahana."
        ]
    },
    {
        "title": "ORA FIVAVAHANA",
        "number": 450,
        "chorus": "Oram-bavaka fitahiana\nBalsama ho an'ny reraka sy sasatra",
        "verses": [
            "Ora fivavahana,\nraha manetry tena\nKa miangona eo amin'i Jesosy\nRaha manatona Azy isika dia\narovany\nBalsama ho an'\nny reraka sy sasatra.",
            "Ora fivavahana, rehefa akaiky Jeso\nKa miantra sy mihaino ny zanany\nRehefa apetraka eo an-tongony ireo\nahiahy\nBalsama ho an'ny reraka sy sasatra.",
            "Ora fivavahana, rehefa mamboraka\nNy alahelony ireo 'zay alaim-panahy\nDia mangoraka Jeso\nKa manala ahiahy\nBalsama ho an'ny reraka sy sasatra.",
            "Ora fivavahana amim-pahatokiana\nNo hasandraisantsika\nFitahiana tokoa\nFahatokiana hanariana ny ahiahy\nBalsama ho an'ny reraka sy sasatra"
        ]
    },
    {
        "title": "OVAY AHO TOMPO O!",
        "number": 748,
        "chorus": "Mba ovay, Tompo ô,\ntsy ho toy ny teo aloha\nDia anjakao ny fiainako\nRaiso aho, Tompo ô,\nka ovay ny toetrako\nIriko, Tompoô! Ho toa Anao",
        "verses": [
            "Ovay Tompo ô ny fiainako izao\nMba hanana fo torotoro\nIanao no mahefa zany amiko Jesosy ô\nHanana toetra toy ny Anao",
            "Tsy afa-po aho fa maniry hiova\nAmin'izao toetrako izao;\nTiako ny ho voaro eo akaikinao Jeso\nAfaka ny hanova ahy Ianao.",
            "Maniry aho ny ho feno ny Fanahy\nSy ny mba ho tarihinao koa;\nMahay manova ahy Ianao ry Jesosy ô!\nKa tanteraho amiko izany."
        ]
    },
    {
        "title": "RAHA AMIKO JESOSY DIA VONONA AHO RE",
        "number": 35,
        "chorus": "Raha Jesosy no amiko, vonona\naho re\nFa lanitra ho ahy izay misy ahy\nraha amiko Jesosy\nTombon-tsoa ho ahy\nny hazofijaliana\nRaha Jesosy no amiko\ndia, vonona aho re.",
        "verses": [
            "Na ao an-dohasaha feno loza\nMiafina\nNa toeran– tsoa feno fiadanana\nIzao no hany fantatro, na andro\nna alina\nRaha amiko Jesosy dia vonona\naho re.",
            "Angamba anjarako hitondra\ntenim-piainana\nAny amin'ny tany hay misy\nady mahamay\nHitondra ny fanevan'ny\nfilazantsara\nRaha amiko Jesosy dia vonona\naho re",
            "Raha hazofijaliana anjarako\nao an-tranoko\nNy hafa hitory teny am-pitan-\ndranomasina\nHasehoko ny finoako, ekeko\nny fitsarany\nRaha amiko Jesosy dia vonona\naho re.",
            "Tsy anjarako ny manontany ny\nfitsaran'ny Ray\nNy ahy dia ny manaraka ny teniny\nNa hitoetra na handeha, na aiza\nno haleha\nFaly aho miara-dia amin'ny\nMpamonjiko"
        ]
    },
    {
        "title": "RAHA ANANAKO AVOKOA",
        "number": 325,
        "chorus": "Tsy mahavidy mihitsy na dia\nsombiny\nTamin'ny hazofijaliana\nNahafatesan'i Jesosy\nTsy voavidiko na dia ny indray\nmitete tamin'ny ràny\nNalatsany hamonjy ahy.",
        "verses": [
            "Raha ananako avokoa\nNy haren'izao tontolo izao\nKa tsy misy mahory ahy,\nSambatra ara-nofo aho\nSaingy tsisy fiadanana ho ahy\nTsy atakaloko ny fitiavan'\nAndriamanitra.",
            "Raha ananako avokoa\nNy haren'izao tontolo izao\nHozaraiko amin'ireo tena ory,\nMalahelo\nNefa io harena eo an-tànako io\nTsy ahazoako mividy\nFiainana mandrakizay."
        ]
    },
    {
        "title": "RAHA ANDROANY IZAY?",
        "number": 754,
        "chorus": "Voninahitra! ho faly ny foko\nVoninahitra! rehefa hanjaka Izy;\nVoninahitra! amboary ny làlana;\nVoninahitra! ho avy indray Jeso",
        "verses": [
            "Mbola hiverin'indray Jeso\nRaha androany izay\nHanjak'amin-kery lehibe\nRaha androany izay\nHitaky ireo voafidiny\nEfa voavotra sy voadio\nIzay mbola miely ety\nRaha androany izay.",
            "Ho foana ny herin'ny satana\nAoka ho anio izay!\nTsy hisy alahelo intsony,\nAoka ho anio izay!\nHitsangana ka hitsen'Azy\n'Reo maty ao amin'ny Tompo\nRahoviana no hiseho izany,\nRaha androany izay?",
            "Tiany isika ho marina\nRaha ho avy anio Izy!\nHiambina tsy amin-tahotra,\nRaha ho avy anio Izy!\nMitombo ny famantarana,\nMiposak'izao ny marina,\nMiambena f'antomotra re\nRaha androany izay!"
        ]
    },
    {
        "title": "RAHA FANTATRAO MANTSY",
        "number": 333,
        "verses": [
            "Raha mba fantatrao mantsy\nFa manimba ny fahafinaretan'ny\ntany\nDia hanatona an'i Jesosy ianao\nKa hahatsapa ny hatsarany\nMijere an'i Jeso\nIzahao ny endriny mamiratra\nDia homatrok'aminao\n'Zao tontolo izao\nRah'mijery Azy ianao\nMpamonjy maha-te ho tia Jesosy\nSakaiza soa mahafinaritra\nEty an-tany sy an-danitra koa\nTsy misy az'oharina Aminy."
        ]
    },
    {
        "title": "RAHA HOMBAN'NY ELATRA",
        "number": 121,
        "chorus": "Raha homban'ny elatrao\nMatoky sy mahery\nFa ianao no Tompo Mpanao\nHamonjy tsy ho very.",
        "verses": [
            "Raha Ianao no aronay ry Jesosy\nTsy hanan-tahotra re izahay\nFa ao ambanin'ny elatrao,\nMisy fiadanana soa mandrakizay.",
            "Ny alina maizim-pito mandoza,\nTsy hampaninona ny zanakao\nFa Ianao no masoandro mazava\nHamirapiratra soa hatrao.",
            "Raha manafiotra ny rivo-mahery\nKa misafoaka hantetika anay,\nJesosy fitarik'andro hijery\nNy hitodian'ny sambokelinay.",
            "Ny fahoriana sakaizan'ny tany\nNamana, havana mety hamoy\nFa raha Ianao no tonga hiandany\nMahazo toky izahay, tsy hikoy.",
            "Ry ela-tsoa mahery mpambomba\nEnto izahay hiarak'Aminao\nFa raha'zay Sakaiza no momba\nNy tany hanjary lani-baovao.",
            "Jeso, Anao tokoa ny dera aman-daza\nSy Anao Ray ary Fanahy koa\nIray ka telo, na dia tokana aza\nMasina, masina, tokoa tokoa."
        ]
    },
    {
        "title": "RAHA LATSAKA AMIN'NY TANY",
        "number": 70,
        "chorus": "Tia ahy koa (in-2)\nTia ahy koa Izy\nNa bitika sy kely aza aho,\nTia ahy Jeso.",
        "verses": [
            "Raha latsak'amin'ny tany,\nNy voron-kely iray\nHenoin'Andriamanitra\nny fitarainany",
            "Nanao ny loharano,\nSy ny ala manitra\nSy nanome loko maro\nNy voninkazo Izy.",
            "Tsimbininy ny vorona,\nTiany ny vitsika\nNasainy nofahanana\nny ondrikeliny"
        ]
    },
    {
        "title": "RAHA MANDINIKA NY HAZO FIJALIANA AHO",
        "number": 388,
        "verses": [
            "Raha mandinika ilay hazo\nNijalianao aho Tompo ô!\nDia hitako fa teo no maty\nNisolo toeran'ahy Ianao.",
            "Raha nosainiko ny làlako\nDia hitako fa fatiantoka\n'Zay tombony noheveriko\nNafoiko ireo rehaka",
            "'Reo zava-poana 'zay mamiko\nDia homboiko eo amin'ny hazo\nNahafatesanao ry Kristy ô!\nArovy aho tsy hiavona.",
            "Tamy lohany, ny tànany\nNy tongony no narotsany e!\nNy Ràny soa ho fitiavana;\nHo satroboninahitro.",
            "'Zay rehetra atoamiko,\nDia bitika sy tsinotsinona\nKanefa ny Ray no mitaky,\nNy momba ahy rehetra."
        ]
    },
    {
        "title": "RAHA MIANTSO NY TOMPO AHO",
        "number": 624,
        "verses": [
            "Raha miantso ny Tompo aho\nSy midera ny Anarany\nResy avokoa ireo fahavaloko\nRaha miantso ny Tompo aho\nFa velona Izy\n'Zay vatolampiko\nTompon'ny famonjena ahy\nKa hasandratro (in-2)"
        ]
    },
    {
        "title": "RAHA TE-HANARAKA NY TOMPO",
        "number": 323,
        "chorus": "Koa meteza amboarina\nRaha te-hahafantra\nIzay làlana mankany an-danitra\nTsy araka ny fahitana\nf'amin'ny finoana\nKa izay mety hotarihiny no\nHijinja fiainana.",
        "verses": [
            "Raha te-hanaraka ny Tompo ka\nHo mpianany\nAoka hitondra ny hazofijaliana\nisan'andro\nSatria tsy lala-malalaka ny\nmankany an-danitra\nTsy maintsy misy ny fahoriana\nVao tena ho sambatra.",
            "Ho kely hery izay rehetra\ntsy manaraka\nNy fitarihan'ny Tompo kanefa\nsahy miady\nTsy maintsy manaiky ny baiko\nOmen 'ilay Mpitarika\nDia handresy ny fahavalo ka\nHandova lanitra.",
            "Koa misikina hery amin'ny\nFiainam-bavaka\nRaha te-hanaraka ny Tompo\nHatrany am-parany\nFikiro mafy ny finoana dia\nHahazo fandresena\nKa hifaly ianao fa homeny\nNy satroboninahitra."
        ]
    },
    {
        "title": "RAHA TE-HO SAMBATRA",
        "number": 195,
        "verses": [
            "Raha te-ho sambatra tokoa ianao,\nRaiso re Jeso ho anao (in-2)\nRaha afany ny otanao,\nNy hasoavany ho raisinao,\nHanova ny toetranao\nMba hanjakany ao am-ponao."
        ]
    },
    {
        "title": "RAHA TOA HANDIA EFITRA MANDORO",
        "number": 106,
        "verses": [
            "Raha toa handia efitra mandoro\nFantatry Jesosy izay haleha,\nRaha toa handia efitra mandoro\nFeno fahatokiana aho re.\nNoho ny fitiavany\nManana antoka aho,\nRaha toa handia efitra mandoro\nFantatry Jesosy izay haleha."
        ]
    },
    {
        "title": "RAHA TSY AMINAO NY MAZAVA",
        "number": 224,
        "chorus": "Raha hiainga ety, mba heverinao\nIlay aizina hovantaninao\nHiady irery, hiady irery ianao\nRaha tsy aminao ny mazava",
        "verses": [
            "Raha hilentika izao re ny andronao\nKa hifarana ny dianao ety\nHanarona anao ny alina iray\nRaha tsy aminao ny mazava.",
            "Raha handao ity tany ity ianao\nKa hihamaizina koa ny jironao\nHitady irery, hiady irery ianao\nRaha tsy aminao ny mazava",
            "Raha hanatrika ny fitsarana ianao\nKa hiseho avokoa ny asanao\nNa soa na ratsy, hanao ahoana re\nRaha tsy aminao ny mazava."
        ]
    },
    {
        "title": "RAISO AHO HO AN'NY ASANAO",
        "number": 569,
        "verses": [
            "Raiso ny fiainako ho Anao\nTompo ô\nFoiko ho an'ny asanao (in-2)",
            "Amboary Tompo ô\nHo fitaovana soa\nEo amin'ny Asanao (in-2)",
            "Ny Fanahy Masinao\nNo aoka hitarika ahy\nRaha manompo Anao (in-2)",
            "Tehirizo Tompo ô\nHo isan'ny olonao\nHandova ny lanitra (in-2)"
        ]
    },
    {
        "title": "RAISO KA VAKIO NY BAIBOLY",
        "number": 494,
        "verses": [
            "Raiso ka vakio isan'andro\n;;; ny Baibolinao;;;\n;;; Te-ho hendry ve ianao? ;;;\nRaiso ka vakio isan'andro\nNy Baibolinao.",
            "Mivavaha ka araho\n;;; ny Baibolinao;;;\n;;; Te- hitombo ve ianao? ;;;\nMivavaha ka araho\nNy Baibolinao.",
            "Soraty ao am-ponao\n;;; ny Fitsipika;;;\n;;; Te-handresy ve ianao? ;;;\nSoraty ao am-ponao\nNy Fitsipika",
            "Fehezo eo an-tananao\n;;; ny Fitsipika;;;\n;;; Te-ho sambatra ve ianao? ;;;\nFehezo eo an-tranonao\nNy Fitsipika"
        ]
    },
    {
        "title": "RAISO NY FIAINAKO",
        "number": 175,
        "chorus": "Tompo ô, indro ny aiko\nAtolotro tahaka ny Anao",
        "verses": [
            "Raiso ny fiainako, anjakao\nKa hamasino Tompo ho anao;\nRaiso ny tanako, ampiasao\nMba ho fitiavana Anao.",
            "Raiso ny tongotro mba hahasoa\nHo kinga hanao izay\nmahafaly Anao\nRaiso ny feoko hidera Anao\nMandrakizay ry Mpanjakako.",
            "Raiso ny volamenako\nAtolotro ho isan'ny anao\nRaiso ny androko sy fotoana\nTsy hiato mba hidera Anao.",
            "Raiso ny faniriako izao\nKa tsy hahaleo tena aho\nRaiso ny foko ho Anao irery\nHo mendrika ny fiandriananao."
        ]
    },
    {
        "title": "RAISO TOMPO Ô!",
        "number": 294,
        "verses": [
            "Raiso Tompo ny fitiavako\nMba ho toy ny fitiavanao;\nNy fonenako ho fonenanao\nAnjakao ny fiainako"
        ]
    },
    {
        "title": "RANKIZY MANEKE",
        "number": 289,
        "verses": [
            "Rankizy maneke ny ray sy reny\nAo amin'ny Tompo\nFa marin'izany, fa marin'izany\nHajao izy ireo fa izany\nNo didy voalohany misy teny\nFikasana,\nMba hahita soa ianao\nSy ho maro andro ambonin'ny\ntany"
        ]
    },
    {
        "title": "RANON'AINA",
        "number": 181,
        "chorus": "Ranon'aina, tsara loatra\nMora azon'ny maniry azy re\nTsy mba eto fa any an-koatra\n'Zay tafiditr'ao dia tretrika tokoa",
        "verses": [
            "Ranon'aina izay tena mateza\nAo an-tapon'i Kalvary\nSaro-dalana sady mideza\nNefa kosa tsy lavitr'anao",
            "Loharano tsy mety ho ritra\nFa maharitra mandrakizay\nManadio ny loto rehetra\nIkambanana amin'ny Ray.",
            "Ny fitiavan'i Jesosy Tompo\nNo manolotra io rano io\nKa manafaka ny mampisento\nHatak'andro, tapaho ny hevitrao.",
            "Tonga Jeso hamonjy ny maro\nIzay mibebaka dia matokia\nNy Fanahy Masin'ny Tompo\nManadio ny loto ao am-po.",
            "Ireo Jiosy nanao ranolava\nMba hanototra io rano io\nNefa kosa tsy maintsy misava\nNy fiboikany tsara tokoa."
        ]
    },
    {
        "title": "RANONORAM-PITAHIANA",
        "number": 153,
        "chorus": "Fitahiam-be 'zay mivatravatra re\nNo hiaingaviantsika\nHarotsaky ny Tompo.",
        "verses": [
            "Ranonoram-pitahiana\nTeny fikasan'ny Ray\nHo famelombelomana\nAvy amin'ny Mpamonjy.",
            "Ranonoram-pitahiana\nHamelombelon'indray\nRe mivatravatra eny\nAn-kavoana, an-dohasaha.",
            "Ranonoram-pitahiana\nArotsahy Tompo ô,\nAvia ka omeo voninahitra\nNy Teninao.",
            "Ranonoram-pitahiana\nAoka hirotsaka anio\nIanao ry Jesosy no\nAntsoinay ankehitrio."
        ]
    },
    {
        "title": "RAOZY TSY HO LO",
        "number": 307,
        "chorus": "Eto simba sy malazo rehefa\nHo vonikazo\nFa any an-danitra no\nmisy raozy tsy ho lo.",
        "verses": [
            "Mandeha ho any amin'ny tanàna\nVolamen' aho\nMisy hazon' aina mamoa sy ny\nraozy tsy ho lo.",
            "Fahoriana sy sento\nno hitantsika eto\nF'any ts'isy zava-manjo, misy\nraozy tsy ho lo.",
            "Ireo efa tonga any dia hitsena ahy\nkoa\nAny amin'ilay tany misy\nraozy tsy ho lo."
        ]
    },
    {
        "title": "RAY O! TIA ANAO AHO",
        "number": 515,
        "verses": [
            "Ray ô! tia Anao aho\nMidera, mitsaoka Anao aho\nDerao ny Anaranao eran-tany\nDerao ny Anaranao (in-2)\nDerao ny Anaranao eran-tany",
            "Jesosy ô! tia Anao aho\nMidera, mitsaoka Anao aho\nDerao ny Anaranao eran-tany\nDerao ny Anaranao (in-2)\nDerao ny Anaranao eran-tany",
            "Fanahy ô! tia Anao aho\nMidera, mitsaoka Anao aho\nDerao ny Anaranao eran-tany\nDerao ny Anaranao (in-2)\nDerao ny Anaranao eran-tany"
        ]
    },
    {
        "title": "RAY O! ZANAKAO IZAHAY",
        "number": 692,
        "verses": [
            "Ray ô, zanakao izahay\nTsy mba kamboty na irery\nRay ô, ny indrafinao\nNahita anay mba ho Anao",
            "Jeso, nanavotra anay\nSady nanadio noho ny fitia\nJeso, nividy lafo\nNanolotr'aina, nanova anay",
            "Fanahy ô, monena\nFa hery ny fanatrehanao\nAmin'ny alalanao no\nAntoka ho anay ny lanitra."
        ]
    },
    {
        "title": "REHEFA ANTSOINA NY ANARANA",
        "number": 17,
        "verses": [
            "Rehefa tonga ny maraina feno\nhazavana be\nKa maneno ny trompetran-danitra.\nMiangona ery am-pita\nny voavonjy marobe\nHo any koa, ho any koa aho ré!\nRehefa antsoina ny anarana (in-3)\nHo any koa, ho any koa aho ré!",
            "Rehefa atsangana ny maty\nao amin'ny Tompo soa\nKa mandray anjaram-boninahitra\nRehefa antsoina ny voafidy\nho ary an-koatra ary\nHo any koa, aho any koa aho ré!\nRehefa antsoina ny anarana (in-3)\nHo any koa, ho any koa aho ré!",
            "Na maraina na hariva, miasà\nho an'i Jeso\nDerao fa mahagaga ny fitiavany,\nRehefa tapitra ny fiainantsika\nsy ny asa ety,\nHo any koa, ho any koa aho ré!\nRehefa antsoina ny anarana (in-3)\nHo any koa, ho any koa aho ré!"
        ]
    },
    {
        "title": "REHEFA HOY NY DEVOLY",
        "number": 493,
        "verses": [
            "Rehefa hoy ny devoly hoe\nNdeha manota, dia valio hoe;\nTsia, tsia, ry satana,\nHo mahatoky aho."
        ]
    },
    {
        "title": "REKO NY ANTSON'NY MPAMONJIKO",
        "number": 157,
        "verses": [
            "Reko ny antson'ny Mpamonjiko\nReko ny antson'ny Mpamonjiko\n\"Ento ny hazofijaliana\nKa avia hanaraka Ahy\"",
            "Izay hitarihany ahy\nDia hanaraka Azy aho\nN'aiza làlana hitondrany\nHo any koa, ho any aho.",
            "Ho any Getsamane aho\nHiaraka amin'ny Mpamonjiko,\nn'aiza n'aiza hitondrany\nHo any koa, ho any aho.",
            "N'aiza n'aiza fitsarana\nHiaraka aminy koa aho,\nn'aiza n'aiza hitondrany\nHo any koa, ho any aho.",
            "Hanome fahasoavana ahy,\nHanome voninahitra Izy,\nHomba ahy lalandava,\nHomba ahy mandrakizay."
        ]
    },
    {
        "title": "RY FANAHY MPANAZAVA",
        "number": 42,
        "verses": [
            "Ry fanahy Mpanazava!\nMiandrandra anao izahay\nAza ela fa tongava\nTaomy ny fanahinay;\nMba ho fantatray mazava\n'zay lazain'ny Teninao;\nAreheto lalandava\nao am-po ny afonao.",
            "Ry Jesosy! Mitenena\naraka ny fombanao\nAminay 'zay manantena\nMba handre ny feonao;\nFo marary sy manahy\nMba tsaboy sy iantrao;\nNy te-hino fa tsy sahy\nAnehoy ny holatrao.",
            "Rainay mpanome ny soa!\nMba henoy ny hatakay,\nKa ny tananao Tsitoha\nIarovinao anay;\nNy tanora mba tahio,\nNy vaventy hafanao;\nMba ho hitanay anio\nFa aty ny Tenanao"
        ]
    },
    {
        "title": "RY JESO, MPAMONJY MALALA",
        "number": 20,
        "verses": [
            "Ry Jeso, Mpamonjy malala!\nIndreto ny mpanomponao,\nRaha misy izay mankahala\nMatoky, fa manana Anao\nJereo, jereo!\nFa vonon-kanaraka\nAnao",
            "Ny tafika ataon'ny satana\nMilofo hamotraka anay\nAvia ry Jeso! mitantàna.\nFa mioman-kandresy izahay\nJereo, jereo!\nFa vonon-kanaraka\nAnao",
            "Na zovy mioman-kadrafy,\nIrinay hanaraka Anao\nNa iza hisakana mafy,\nHijoro, fa manana Anao\nJereo, jereo!\nFa vonon-kanaraka\nAnao",
            "Ireo nentinao voatantara,\nNo feo mampahery anay;\nNy tokin'ireo maritiora\nFaneva mitarika anay,\nJereo, jereo!\nFa vonon-kanaraka\nAnao"
        ]
    },
    {
        "title": "RY JESOSY MBA TANTANO",
        "number": 36,
        "verses": [
            "Ry Jesosy mba tantano\nHo tafita soa arỳ\nKa ambeno sy sakano\n'Zay rehetra loza aty;\nRano be mangeniheny\n'Zay alehako izao.\nKa aoka Hianao hiteny\nMba ho tokiko hatrao.",
            "Aza miandry ao am-pita\nSao dia fefika aho aty;\nFa avia hiara-mita\nDia ho tody soa ary;\nRaha sendra ka manonja\nZany alon-drano be.\nAoka Hianao ho tonga\nHampitony ahy re.",
            "Ao ny rivotra mahery\nMety hampivadi-po\nFa ny feonao irery\nMampisava ny manjo\nAny koa ny vatolampy\nSy ny biby marobe.\nFa ny herinao dia ampy\nKa vonjeo ny zanakao",
            "Ry Jesosy mihainoa\n'Zao fivavako izao\nMijoroa, misehoa\nKa jereo ny diako'zao;\nMbola lavitra ao am-pita\nKa tsy hita'zay hanjo.\nToy'lay tao Genesareta\nMisehoa Hianao!"
        ]
    },
    {
        "title": "RY MIARAMILA MANDROSOA",
        "number": 180,
        "chorus": "Ry miaramila! Mandrosoa izao\nKristy Kapiteny mialoha anao",
        "verses": [
            "Ry miaramila, mandrosoa izao\nKristy Kapiteny mialoha anao;\nAo aloha tafika, loza, ratra be,\nFitsaharana tsy misy, misikina re",
            "Any lehy ratsy no manotrika\nAny ny tsipika no milatsaka\nTano ny finoana ho ampinganao\nEntonao ho fandresena izao\nrehetra izao",
            "Aza miamboho na miherika\nAo an-tratranao ny fiarovana\nAza mba matahotra\nfa sahia fandrao\nRaha tsy mandresy dia ho resy\nhianao.",
            "Dia mandrosoa hianao izao\nKa miraisa dia aminay ho ao\nMilofosa fatratra aza ketraka\n\"Miadia ny ady tsaran'ny\nfinoana\"",
            "Kristy Kapiteny tapitra ohatra\nIzy no Mpiaro ny Mpanafika\nMiankina Aminy mafy hianao\nKa aza mba ny teninao\nno itokianao."
        ]
    },
    {
        "title": "RY ORY MALAHELO AKAIKY JESOSY",
        "number": 490,
        "chorus": "Nentiny 'reo entanao tao\nKalvary Kalvary\nKa indro afaka ianao\nAkaiky Jesosy.",
        "verses": [
            "Ry ory sy malahelo\n'Zay mihevitra hoe:\nMijaly sy misento irery\nAkaiky Jesosy",
            "Atsipazo eo aminy\n'Reo ahiahinao\nAry koa ny tahotrao ario\nAkaiky Jesosy",
            "Ry fanahy mitebiteby\nHitan'ny Mpamonjy;\nNy ratram-po sy ranomaso\nAkaiky Jesosy."
        ]
    },
    {
        "title": "RY RAIKO FENO ANTRA",
        "number": 5,
        "verses": [
            "Ry Raiko feno antra!\ninty ny zanakao,\nNy foko dia mahantra\nraha lavitra Anao;\nFa tany karankaina\nizao tontolo izao,\nKa reraka ny aina\nmihataka Aminao.",
            "Nivezivezy aho\nnikaro-java-tsoa,\nIzay rehetra hita\nnandramana avokoa,\nNandany taona maro\nnanara-tsitrapo;\nKanefa tsy nahazo\nizay mahafa-po",
            "Mamitaka mihitsy\nIzao tontolo izao;\nNy mamy dia mangidy,\nizay tena soa tsy ao;\nKoa aza mba adalainy\nintsony re ry fo!\nAndeha mba ho hendry\nhatramin'ny anio.",
            "Ry Jeso, Mofon'aina\nSy Ranon'aina koa!\nHianao no mahatony\nizay filan'ny fo;\nHianao no mahavoky, hianao\nno manome\nizay irian'ny foko,\nDia hasambaram-be."
        ]
    },
    {
        "title": "RY TOMPO O! MAHAGAGA HIANAO",
        "number": 561,
        "verses": [
            "Ry Tompo ô!\nMahagaga ny Anaranao\nLehibe, mahatalanjona Hianao\nMidera Anao aho,\nf'izao tontolo izao\nDia manambara ny hatsaranao\nRaha jereko ny asanao\nNataon'ny tananao\nDia tsapako ny fahakelezako\nNantsoinao ka notiavinao\nFenoinao fitahiana\nTiako ny midera Anao mandrakizay\nRy Tompo ô! Mahagaga ny anaranao"
        ]
    },
    {
        "title": "RY TOMPO Ô NY SITRAPONAO",
        "number": 480,
        "verses": [
            "Ry Tompo ô ny sitraponao,\nNo ekeko manombok'izao;\nHo tanimanga an-tananao,\nTefeo aho, volavolao,",
            "Mpampianatr'ô, diniho aho;\nZahao toetra dia sasao,\nIzao no ilaiko Aminao,\nOmeo ahy fo vaovao.",
            "Malemy aho, ka atanjaho\nNy hery rehetra nomen'Anao\nNy ratram-poko ho sitranao,\nRaha manendry Ianao",
            "Ry Tompo, ny sitraponao\nNo ekeko manombok'izao\nManaiky aho ho fonenanao;\nK'arotsahy ny Fanahinao."
        ]
    },
    {
        "title": "SAHAZA NY ORY REHETRA JESOSY",
        "number": 39,
        "chorus": "Sahaza ny ory rehetra Jesosy\nFo loharanon-tsoa mahafa-po\nNy olo-mahantra 'zay miantso Azy\nDia indro fa tafarina avokoa.",
        "verses": [
            "Mpiandry tsara manolotra\nNy tenany mba hanavotra\nIreo very sy mpanjeny\nJesosy 'lay Iraky ny Ray.",
            "Manorotoro ny asan'\nilay fahavaloko Jesosy\nManaisotra ny alahelo\nKa mampifaly ny fo sasatra.",
            "Manome fomba handresena\nNy ota sy ny fahalemena\nAry mahita vahaolana\nAmin'ny zava-tsarotra Izy.",
            "Manonona ny fiadanany\nHo an'izay mpianany\nSy mivavaka ho azy 'reo\nMba hiarovany azy Jesosy.",
            "Mampanantena fonenana\nMaharitr'any an-danitra\nHo an'izay manaraka\nSy mankato ny teniny izy."
        ]
    },
    {
        "title": "SAHIA HO DANIELA",
        "number": 448,
        "chorus": "Sahia mijoro ho mahatoky\nHatramin'ny farany toa an'i Daniela",
        "verses": [
            "Sahia re mijoro ho an'ny Tompo\nHitandrina sy\nHankatò ireo didiny.",
            "Olona manan-dàza maro no very\nFa tsy sahy ho\nMiaramilan'i Jesosy.",
            "Lavo ireo olona mpiavonavona\nSy ambony\n'Zay ratsy toetra tety an-tany;",
            "Tano ny fenevan'ny filazantsara\nDia hahery ianao\nSady ho mpandresy."
        ]
    },
    {
        "title": "SAHIA MILAZA HOE TSIA",
        "number": 443,
        "chorus": "Sahia milaza hoe: Tsia\nSahia milaza hoe: Tsia\nSahia milaza (in-2)\nSahia milaza hoe: Tsia",
        "verses": [
            "Mpivahiny roso ianao izao\nRy tanora ô\nKa fakam-panahy sesehena\nNo mety hihaona aminao;\nNa aiza no halehanao,\nDia misy loza avokoa,\nKanefa raha alaim-panahy\nSahia milaza hoe: Tsia",
            "Mahereza aoka hatoky\nRaha vao mandroso ianao\nNy Ray no hiaro anao\nTsy ho voapentin'ny ota re;\nMitombo sy miha-lehibe\nNy fakam-panahy izay kely,\nKanefa raha mahatoky ianao,\nSahia milaza hoe: Tsia",
            "Ny sakaiza be herim-po\nSy marina hatrany no fidio\nAmin'ny andro fitsapana\nManakaikeza azy ireo\nKanefa raha sendra ny sandoka\nMitaona mangina anao,\nMiareta sady mifahara\nSahia milaza hoe: Tsia"
        ]
    },
    {
        "title": "SALAMO FISAORANA",
        "number": 630,
        "chorus": "Mifalia ao amin'ny Tompo\n(Aoka ny fon'ireo mitady\nAzy hifaly) (in-2)",
        "verses": [
            "Omeo ny Tompo ny fisaorana\nAntsoy ny Anarany ka hirao\nAnkalazao sy derao\nNy anarany Masina.",
            "Misaora ny Tompo fa tsara Izy\nNy fitiavany maharitra mandrakizay\nKa antsoy ny Anarany Masina",
            "Ambarao amin'ny firenena\nTorio inona no nomeny?\nLazao 'reo asany: asa mahery\nDerao ny Anarany"
        ]
    },
    {
        "title": "SAMBATRA AHO FA VOAVONJY",
        "number": 702,
        "verses": [
            "He! Sambatra aho fa voavonjy\nHe! Sambatra aho fa voavonjy\nTia ahy Jesosy ka namonjy ahy\nHaleloia, Haleloia, voavonjy aho."
        ]
    },
    {
        "title": "SAMBATRA AHO MIARAKA AMINY",
        "number": 109,
        "verses": [
            "Sambatra aho miaraka Aminy! (in-2)\nHo tantanany, ny dia\nAm-pivahiniako ety;\nSambatra aho miaraka Aminy.",
            "Miakara miaraka Aminy! (in-2)\nAza matahotra re\nJeso no mpiandry e!\nMiakara miaraka Aminy",
            "Ao an-danitra hitsahatra! (in-2)\nHo finaritra doria\nAmin'ilay Jeso tia;\nAo an-danitra hitsahatra"
        ]
    },
    {
        "title": "SAROBIDY HIANAO JESO",
        "number": 796,
        "verses": [
            "Sarobidy Hianao Jeso\nGaga aho mijery ny hazofijaliana\nAsandratro ny fanahiko sy ny tanako\nSarobidy Hianao Jeso",
            "O, ry Ray, tena be fitia\nNoraisinao izahay mba ho zanakao\nAsandratro ny fanahiko sy ny tanako\nMba hidera ny Anaranao",
            "Haleloia, Haleloia\nHaleloia, Haleloia, Haleloia\nAsandratro ny fanahiko sy ny tanako\nHaleloia! Haleloia\nHatrany an-danitra",
            "Fa afaka entana, manam-pitarika\nMihobia, mihobia ry voavonjy\nDerao ny Tomponao\nHira Haleloia (in-2)\nManafaka Jesosy\nHira Haleloia (in-2)\nHatrany an-danitra"
        ]
    },
    {
        "title": "SAROBIDY NY BAIBOLY",
        "number": 544,
        "verses": [
            "Sarobidy ny baiboly\nNomen'Andriamanitra\nManazava toy ny fanilo\nNy diantsika an-danitra.",
            "Ny jirony avy any ambony\nMampahery ny fiainantsika\nManeho ny Mpamonjy tia\nSy ny voninahiny.",
            "Ny baiboly mitantara\nNy nalehan'ny Tompo\nManeho ny fahasoavan'ilay\nTompo mpamela heloka.",
            "Fanilo anatin'ny alina\nHanazava ny lalantsika\nMandram-pisy ny hazavan'ny\nMaraina mandrakizay"
        ]
    },
    {
        "title": "SASA-POANA NY MPITAONA",
        "number": 48,
        "chorus": "Sasa-poana ny mpitaona\nHamilivily ny fitiavako Azy",
        "verses": [
            "Resim-pitiavana an'i Jesosy\nKa nisaraka tamin'ny fahotana aho\nEfa niloa-bava aho ka tsy hovako\nintsony\nHiarak'Aminy mandrakizay aho",
            "Azonao esorin'amiko avokoa\nNa inona na inona ananako\nFa Jesosy Mpamonjiko mitoetr'ato\nanatiko\nTsy vitanao ny hanaisotr'Azy ao",
            "Na dia ho tambazana harena koa\nNa taomin'amin-kevitra sy vola be\nDia amiko tsy misy soa amin'ny\nzavatra ho lo\nJesosy ihany no ataoko rehareha",
            "Mbola tsy nanisy ratsy ahy Izy\nHatramin'izay nahafantarako Azy\nKa mahamenatr'ahy izay\nhisitak'Aminy indray\nKa dia tsy hivadim-panekena aho"
        ]
    },
    {
        "title": "SATRIA VELONA IZY",
        "number": 135,
        "chorus": "Tsy ahiako izay ho ampitso,\nLas'avokoa ny tahotro;\nEo an-tanany avokoa ny ho avy;\nMatoky aho satria velona Jesosy.",
        "verses": [
            "Tonga tety an-tany Jesosy,\nKa maty mba hanavotra\nResy ny fasana ka foana\nIo no porofo fa velona Jesosy.",
            "Tsy miova mandrakizay Izy\nFa mboa tia, mamonjy koa\nMamela sy manasitrana\nMbola miasa Jesosy, fa velona.",
            "Fifaliana ny nahaterahany\nNefa mainka tsara kokoa;\n'Reo antoka izay nomen'i\n'Zay efa maty nefa indro velona",
            "Rehefa hita ilay ony maizin'aho,\nHifarana ny androko;\nDia hahita ny fahazavan'\nny tavany\nSatria velona Jesosy."
        ]
    },
    {
        "title": "SOKAFY NY MASONAO",
        "number": 248,
        "verses": [
            "Sokafy e ny masoko\nHahitako ny marina\nTolory fanalahidy 'zay\nMahay mamaha, manafaka aho\nSokafy e ny masoko;\nHazavao aho Fanahy ô!\nMiandry aho, Raiko ô\nNy sitrakao.",
            "Sokafy e ny sofiko\nHandre ny feo nalefanao,\nDia fahamarinana mazava\nFa ho lao ny zava-diso\nSokafy e ny sofiko; sns….",
            "Sokafy e ny vavako,\nHitondra am-pifaliana,\nNy hafanan'ilay hafatrao\nNa aiza n'aiza no aleha\nSokafy e ny vavako; sns….",
            "Sokafy e ny foko izao,\nHanomana fitiavana;\nMiaraka amin'ireo zanakao,\nIzay mizara izany\nSokafy e ny foko; sns….."
        ]
    },
    {
        "title": "TAFIO AHO",
        "number": 759,
        "chorus": "Tafio fiderana aho Tompo ô!\nTafio ny tsara indrindra\nHijoro eo anatrehanao\nMitafy ny fifaliana.",
        "verses": [
            "Tafio fiderana aho Tompo ô!\nTafio ny tsara indrindra\nHijoro eo anatrehanao\nMitafy ny fifaliana.",
            "Hiravo amin'ny fanatrehano\nHankalazany Anaranao\nHihoby amim-pifaliana ho Anao\nFa feno fahasoavana aho."
        ]
    },
    {
        "title": "TAHAKA AN'I ZIONA",
        "number": 433,
        "chorus": "Tahaka an'i Ziona\nTendrombohitra masina\nFeo 2-3 (Masin'Andriamanitra\nizay arovany)\nFa haharitra mandrakizay\nKa tsy hihetsika\nTahaka an'i Ziona\nTendrombohitra masina.\nFeo 2-3(Masin'Andriamanitra\nho mandrakizay )\nIzay voaporofon'ny\nTaona maro izay\nNifandimby.",
        "verses": [
            "Hiorina mandrakizay\nIzay matoky ny Ray\nKa tsy manana ahiahy\nTahaka an'i Ziona",
            "Akaiky ny olo-masiny\nAndriamanitra\nTahaka an'i Jerosalema\nIzay arovany.",
            "Misafoaka ny rivotra\nAo koa ny kotroka\nNefa mandrakizay tokoa,\nNy fiarovany.",
            "Tsara sy azo antoka\nNy fitiavany;\nKa tiako honenana\nMandrakizay doria."
        ]
    },
    {
        "title": "TANAN-DROA MBA HANOMPOANA",
        "number": 452,
        "chorus": "Tompo ô, inty ny foko\nMbamin'ny fiainako\nTsy hohadinoiko Ianao\nRy Andriamanitra.",
        "verses": [
            "Tanan-droa mba hanompoana,\nTongotra handehanana,\nHilaza amin'ny rehetra hoe:\nAn'i Jeso 'zahay.",
            "Sofina hihaino izay\nHafatry ny lanitra\nSaina mba hianatra\nNy fananaran'i Jeso.",
            "Maso roa hamaky 'lay boky\nMamy sady soa,\nBoky 'zay mamelon'anay,\nSady mampahery koa.",
            "Fo iray\nHo seza fiandrianan'i Jesosy,\nNy fiainako tontolo\nAtolotro Azy izao."
        ]
    },
    {
        "title": "TANTANO AHO",
        "number": 123,
        "verses": [
            "Tantano aho fa tsy manankery\nTsy sahy mandroso raha afoinao,\nTantano aho, ry Mpamonjiko ô!\nDia ho lasa ireo tahotro.",
            "Tanatano aho ho eo anilanao,\nAmpanakaikezo hatrany aho;\nTantano aho tsy hirenireny,\nFandrao lavo raha tsy misy Anao.",
            "Tantano aho fa maizina loatra,\nNy lavitra ny fanatrehanao,\nNefa ny fahazavan'ny tavanao,\nNo mahabe ny fifaliako.",
            "Tantano aho rehefa hiampita.\nEo amin'ilay ony maizina.\nTsenao aho tsy ho very toky\nKa ho tafita soa eo Aminao."
        ]
    },
    {
        "title": "TANY KANANA",
        "number": 62,
        "chorus": "O! Mandrosoa ho any\nAmin'ny \"Tany Kanana\",\nAza miverin'amin'ny\nLàlana efa nalehanao.",
        "verses": [
            "Herezo ny làlana mizotra\nMankao amin'ny tany lovanao,\nNa iza hisakana, hitroatra\nNy Tsitoha no loha-làlanao.",
            "Tohizo ny làlana vitanao\nAza mety ho rerak'ianao,\nTandremo, fadio ny mijanona,\nRaha sendra tany lemaka.",
            "Amboary tsara ny vatsinao\nMivonona re dieny velona\nFa rehefa tonga ny fotoana\nHita an'i Jordana ianao."
        ]
    },
    {
        "title": "TANÀNA PERLA SY MAZAVA",
        "number": 303,
        "chorus": "Manazava ao Andriamanitra\nDia Ilay Zanak'Ondry\nAo amin'io tanàna kanto io\nJerosalema vaovao.",
        "verses": [
            "Tanàna perla sy mazava\nMitoera eny amin'ny havoana\nTsy mbola nisy olona tany\nNahita ny hatsarany.",
            "Feno voninahitra ao\nMamoha ao ny hazon' aina\nTondrahan'ny onin'aina\nIo fialofana masina io",
            "Rehefa tonga ao ireo mpandeha\nTrotraky ny tany hay\nFialan-tsasatra ho azy\nNy loharano miboika.",
            "Fifaliana tsy hay lazaina\nRehefa ho avy Jesosy\nIlay tanàna mamiratra\nHiorina mandrakizay"
        ]
    },
    {
        "title": "TAO AN-TRANON'OMBY",
        "number": 700,
        "verses": [
            "Tao an-tranon'omby\nFandriana natao\nIlay Tompo kely\nNiondana tao,\nNy kintan'eny ambony\nMijery azy koa\nDia Jesosy kely\nNatory tokoa.\nTiako hianao Jeso\nMba jereo avy eny ambony aho\nFandriako akaikezo,\nMijanona eo\nAmbaram-piavin'ny maraina soa"
        ]
    },
    {
        "title": "TAO KALVARY",
        "number": 79,
        "chorus": "Lehibe ny famindram-pony\nSy ny famelàny heloka\nSambatra ny fanahiko\nNoho ilay tao Kalvary.",
        "verses": [
            "Taona maro nolaniako foana\ntamim-pireharehana\nTsy fantatro fa maty ny Tompo\ntao Kalvary.",
            "Natolotro Azy avokoa\nNy tenako manontolo\nFaly aho manana Azy izao\nKa mihirà an'i Kalvary.",
            "Endrey ny fitiavan'i Jeso\nSy ny famonjena natolony\nAry ny fahoriana niaretany\nTao Kalvary."
        ]
    },
    {
        "title": "TAO KALVARY",
        "number": 320,
        "chorus": "Tao Kalvary (in-2)\nNo maty Jesosy\nTao Kalvary (in-2)\nNanavotra ahy Izy.",
        "verses": [
            "Jesosy dia nanaiky re\nHo fanavotana ahy\nNa dia mpanota aza aho\nDia natolony ny tenany\nMba ho famonjena ahy.",
            "Ny dininy dia niraraka\nIzany dia niova ho toy ny ra\nPotipotika ny tenany\nMba ho famonjena ahy.",
            "Ry mpanota very ô!\nJereo ny Tompo\nFa miantso anao\nIzy no mitady\nKa mba manatòna Azy."
        ]
    },
    {
        "title": "TAOMY HO AZY IREO",
        "number": 176,
        "chorus": "Miasà ho voninahitry ny\nTompo Jesosy,\nTantarao ny fitiavan'Andriamanitra\nTsy misy fetra\nAtoroy ny fahazavanao\nireo manodidina\nMihelina ny fotoana\nKoa taomy ho Azy 'reo",
        "verses": [
            "Tantarao ny Mpamonjy,\nMijoroa ho voninahiny,\nMaro no misalasala\nKoa taomy ho Azy 'reo\nIlazao ny sakaizanao\nSy ny mifanila aminao\nTia azy ireo Jesosy\nKoa taomy ho Azy'reo.",
            "Mitenena mba hanoro\nNy làlan'ny fitahiana;\nMisy tsy nandre ny antso\nKoa taomy ho Azy 'reo\nMiandry anao ny asa\nNoho ny hery nomen'anao,\nDia ny fanompoana Azy\nKoa taomy ho Azy 'reo.",
            "Aoka ianao hanetry tena\nKa ho vavolombelony;\nHazavao ny manodidina\nKa taomy ho Azy'reo\nMitenena ka ampio\nIreo diso lalan'ireo\nAmbarao ny Mpamonjy;\nKoa taomy ho Azy 'reo."
        ]
    },
    {
        "title": "TAPAKA NY HEVITRO",
        "number": 484,
        "chorus": "Manaton'anao faingan'aho ry Jeso ô\nMba ho afaka sy feno fifaliana.",
        "verses": [
            "Tapaka ny hevitro fa tsy hitare-\ndrehitr'intsony\nNy zavatra mendrika kokoa\nNo maminton' ahy izao",
            "Tapaka ny hevitro fa hanatona\n'lay Marina,\nSatria Ianao no manana ny\nTenin'ny fiainana.",
            "Tapaka ny hevitro fa hanarak'\nIlay Mahitsy,\nHanao ny sitrany fa Izy no\nLàlan'ny fiainana.",
            "Tapaka ny hevitro fa ho any an-\ndanitra aho,\nHandao ny ota na mahafoy aza\nIreo sakaizako."
        ]
    },
    {
        "title": "TARIHO AMIN'NY FAHAMARINANAO",
        "number": 511,
        "verses": [
            "Eo Aminao ny fanahiko\nTompo ô\nTompo ô Anao aho\nMatoky Anao aho\nTariho amin'ny fahamarinanao",
            "Tsarovinao aho\nF'Ianao no antenaiko\nTompo ô Anao aho …",
            "Atoroy izay\nLalana halehako\nTompo ô Anao aho …",
            "Tompo mahitsy\nMarina mpamindra fo\nTompo ô Anao aho …",
            "Ny fitivan'i Ray\nHo an'izay tia Azy\nTompo ô Anao aho …"
        ]
    },
    {
        "title": "TAZAKO ERY AM-PITA",
        "number": 495,
        "chorus": "Tiako ny ho tonga ao\nKa ny làlana mankao\nNo izorako tokoa\nHiara-paly Aminao Mpamonjy.",
        "verses": [
            "Tazako ery am-pita 'lay fonena-\nMasina\nMisy reo tra-bonjy 'zay tsy omby\nAlinalina\nKa miderà, mankalazà an'\nAndriamanitra\nIo fonenan'io no tiako, io no\nTena lanitra",
            "Moa ny helokao rehetra sy ny ota\nVitanao\nDia novidin'ny Mpamonjy,\nTamin'ny Ràny soa vé?\nRaha tsy voavelaheloka\nTanteraka ianao\nDia hikatona aminao ny\nvaravaran-danitra.",
            "Moa ny sitra-po adala sy filàn'ny\nnofonao\nMba voahombo teo ambony\nhazofijaliana\nMoa ny fo, fanahinao efa\nNohavaozinao\nNdrao mikantona aminao ny\nVaravaran-danitra.",
            "Moa ny herinao rehetra sy ny\nEritreritrao\nNentinao hankalazana ny\nFahasoavany\nMoa ny fiainan'i Jesosy koa\nNo ivelomanao\n'Ndrao mikatona aminao ny\nVaravaran-danitra."
        ]
    },
    {
        "title": "TE HO AFAKA AHO",
        "number": 434,
        "verses": [
            "Tompo ô henoy ny vavako\nIlaiko ny hanakaiky Anao\nNoho ny fahamendrehan'i\nKristy maty noho ny otako\nIlaiko ny famindram-ponao\nSy ny fahamoram-ponao\nHotsoriko ireo otako\nMba hanatrehako Anao\nDia afaka aho.",
            "Tompo ô! inty aho\nIriko ny ho afaka\nAo amin'ny fanafahanao\nNo hany misy izany\nIriko ny Fanahinao\nHitoetra ato am-poko\nHo mendrika aho noho\nny Aminao sy\nHo marina koa\n'Zay no fahafahako.",
            "Tompo ô! inty aho\nInoako fa hainao\nNy hanamboatra ahy\nHo tahaka Anao\nMba tsy hianjerako intsony\nIlaiko ny fanavotanao\nNy fitianao no hialofako\nAfaka amin'ny fahafatesana\nAho noho ny fiainam-baovao\nTena afaka aho."
        ]
    },
    {
        "title": "TE-HAHAFANTATRA ANAO AHO TOMPO",
        "number": 628,
        "chorus": "Te- hahafantatra aho,\nTe ho tia Anao\nTe- hahalala kokoa, Jeso, Jeso",
        "verses": [
            "Te-hahafantatra Anao aho\nTompo ô!\nTsy maintsy mahalala aho\nKa hiorina ao Aminao\nNy fahamarinanao no itafiako\nAndriamanitra ô 'zany no tiako.",
            "Mijery Anao aho,\nTsy maintsy mahita Aho\n'Zany no finoako\nAndriamanitra ô!\nLaniako Aminao ny Fiainako izao\nSy izay momba ahy,\n'Zany no tiako."
        ]
    },
    {
        "title": "TE-HIAINA EO ANILANAO AHO TOMPO Ô!",
        "number": 620,
        "verses": [
            "Anatrehanao ampanginana\nNo andrenesako ny feonao\nHenoiko am-pitiavana\nLavitra ny zava-poana eto an-tany eo anilanao.\nHiaina eo anilanao Tompo ô (in-2)"
        ]
    },
    {
        "title": "TE-HO ISAN'NY OLON'NY LANITRA VE IANAO",
        "number": 292,
        "chorus": "Irinao marina ve ny ho any an-\ndanitra?\nHandova ny fiainana sy ilay\nlapa soa?\nIlaozy ny hevitrao sy 'zay mama\ntotr'anao,\nDia ho anisan'ny olon'ny lanitra\nianao.",
        "verses": [
            "Tsy te-hanatona ny\nHazofijalian'ianao\nIlay nanavotan'ny Tompo anao;\nKanefa dia irinao ny mba ho\nAnisanay.\nHandova 'lay lapa soan'ny lanitra.",
            "Mihemotra ianao ny handoa ny\nvidiny\nKa hoy ianao tena sarotr'izany;\nKanefa mba irinao ny hiaraka\naminay\nHahita ny lapa soan'ny lanitra.",
            "Mionona ianao satria manan-\ntany sy trano\nAry harena sy fananana ety;\nHo gag'anefa ianao fa tsinotsi-\nnona ireo\nMitah'amin'ny lapan'ny lanitra.",
            "Koa miangavy anao izahay mba\nHo malina tokoa;\nAmin'izay fanapaha-kevitrao;\nFa miankina amin'izay safidy\nraisinao,\nNa ho very, na ho any an-danitra",
            "Indro atoro anao ny làlana\nmarina\nMibebaha ka raisonao Jesosy\nTsy maintsy ateraka indray\nianao aloha\nVao hahita any an-danitra"
        ]
    },
    {
        "title": "TENA FIFALIANA NY MANOMPO AN'I JESO",
        "number": 287,
        "chorus": "Fa ny tena fifaliana, sy\nFiadanan'ato am-poko\nDia ny fanompoako ilay Jesosiko\nMiarak'amin'ireo, talentako rehetra\ns'izay rehetra momba ahy\nDia ho entiko manompo Azy.",
        "verses": [
            "Tena fifaliana, ny manompo an'i\nJesosy\nFahasambarana ny miarak'Aminy\nTsy ho foana tsy akory, ireo\nFikelezana aina\nFa ilay Tomponao no hanome\nValisoa ho anao",
            "Raha sendra ny mafy ary koa ny\nSarotr'atao\nToa mila ho resy, mila ho kivy ny fo\nDia antsoy Jesosy, ilay Tompo\nMpamonjy anao.\nIzy hanampy hery sy hampandresy\nNy mpanompony.",
            "Koa ankehitriny, olona ve no\nHojereko\nSy hilako fitia moa sa Andriamanitra\nRaha mbola mpila sitrak'amin'ny\nOlona aho\nDia tsy ho anisan'ny mpanompon'i\nJesosy Kristy",
            "Fidio anio izay ho tompoinao\nNa ho i Jesosy, na izao tontolo izao\nRaha izaho ihany, raha mbola eto\nAn-tany,\nKa hatrany an-danitra, dia hanompo\nAn'i Jesosy."
        ]
    },
    {
        "title": "TENA TIA ANTSIKA ANDRIAMANITRA",
        "number": 608,
        "verses": [
            "Tena tia antsika Andriamanitra\nFa nanome ny Zanany Tokana\nTena tia antsika Andriamanitra\nFa nanome an'i Jesosy\nRaha amino izany hianao\nTsy ho faty\nFa ho velona tokoa mandrakizay\nRaha mino izany hianao\nTsy ho faty fa ho velona mandrakizay"
        ]
    },
    {
        "title": "TENA TIAKO JESOSY",
        "number": 507,
        "verses": [
            "Tena tiako Hianao Jesosy\nAnilako lalandava\nTena tiako Hianao Jesosy\nFenoinao fifaliana aho\nTena tiako Hianao Jesosy\nNamonjy ahy ny fitiavanao\nTena tiako Hianao Jesosy\nMidera Anao aho isan'andro\nIriko indrindra ny hitovy Aminao\nNy saina dia ho tia tahaka Anao\nIriko indrindra ny hitovy Aminao\nAmin'ny alalan'ny Fanahinao"
        ]
    },
    {
        "title": "TENA TSARA ANDRIAMANITRA",
        "number": 305,
        "verses": [
            "Novonjeny, nafahany ny fanahiko\nNositraniny ny ratram-poko",
            "Novainy ny fiainako, navelany ny\nheloko\nNositraniny ireo aretiko.",
            "Tsara Andriamanitra, tena tsara\nTsara Andriamanitra, tsara ho ahy"
        ]
    },
    {
        "title": "TENA TSARA ANDRIAMANITRA",
        "number": 797,
        "chorus": "Fantany ny manavesatra anao\nSy mampahory isan'andro koa.\nMandray andraikitra anao tokoa Izy\nAza manahy izay ho ampitso.",
        "verses": [
            "Tena tsara Andriamanitra\nMandray andraikitra, mahatoky Izy\nManampy amin-java-tsarotra koa\nMihevitr' anao ka manatona Azy",
            "Mandrakizay sy mahery ny Tompo,\nManatona fa handray anao Izy\nNa maizina sy manjombona avokoa\nNy zava-drehetra, dia mbola ao Izy.",
            "Hanampy anao ny Andriamanitro\nHitarika, handamina ny dianao\nRaha vonona hanaiky ny làlany ianao\nDia aza manahy fa ho to 'zay lazainy."
        ]
    },
    {
        "title": "TEO AMIN'NY HAZO FIJALIAN'I KALVARY",
        "number": 411,
        "verses": [
            "Maty tao Kalvary ho antsika Jesosy\nNanome ny Rainy soa Izy\nMba hanafaka, mahadio ho\nToy ny oram-panala Izy io\nMaty ho ahy Jesosy\nTeo amin'ny Kalvary\nTao Kalvary (in-2)\nMaty ho ahy Jesosy teo amin'ny\nKalvary",
            "Eny, fitiavana izay mahatalanjona\nNahafaty ary koa nahatonga sorona\nTompo ô, atolotro ny Fanahy sy\nTenako\nHo ahy ny Rà nalatsakao\nTeo amin'ny Kalvary\nTao Kalvary (in-2)\nHo ahy ny Rà nalatsakao\nTeo amin'ny Kalvary.",
            "Raiso aho Jeso ô ho Anao\nManontolo\nAhy Hianao Jeso, tomoera anatiko\nO! sasao ny foko ka diovy ato\nAnatiko\nIzao no asan'ny Rànao\nTeo amin'ny Kalvary\nTao Kalvary (in-2)\nIzay no asan'ny Rànao teo amin'ny\nKalvary",
            "Maizina ny lanitra\nRaha nohomboana Izy\nVita! Hoy ny antsony\nNiondrika ny lohany\nVita mba ho ahy, afaka ny tany izao\nMaty ho ahy Jesosy\nTeo amin'ny Kalvary\nTao Kalvary (in-2)\nMaty ho ahy Jesosy teo amin'ny\nKalvary"
        ]
    },
    {
        "title": "TIA AHY JESOSY",
        "number": 707,
        "chorus": "Jesosy ô, mamy ny fitiavanao;\nJesosy ô, tia Anao koa aho.",
        "verses": [
            "Tia ahy Jesosy, tsy isalasalako\nIo no antoky ny finoako;\nTonga nofo Izy\nNef'Andriamanitra,\nLehilahy ory sy niaritra.",
            "Tia ahy Jesosy\nNa dia tsy mendrik'aza aho.\nTsy miova Izy ary tsy mandao;\nEny fantany koa ireo alaheloko,\nNentiny avokoa ireo entako.",
            "Tia ahy Jesosy,\nToy ny vatosoa aho\nHitany ka novidiany lafo;\nNy voninahiny nozarainy amiko,\nNatolony noho ny finoako."
        ]
    },
    {
        "title": "TIA ANAO JESOSY",
        "number": 358,
        "verses": [
            "Raha ory indrindra ny fonao sasatra\nJesosy mampionona anao\nTsy mba manameloka anao akory Izy\nKa henoy izao antso izao.",
            "Raha ekenao ny fitiavan'Ilay Tsitoha\nKa ho zava-dehibe aminao\nFiainana mandrakizay no atolony\nHitahiry anao hatrany Izy.",
            "Tia anao Jesosy, nanolo-tena\nHo famonjena ahy sy ianao\nIndro Izy mivonona handray anao\nManolotra ny fitiavany."
        ]
    },
    {
        "title": "TIA ANAO KOA AHO JESOSY O!",
        "number": 185,
        "chorus": "Tia Anao koa aho Jesosy ô!\nSatria Ianao no efa nitia ahy taloha.",
        "verses": [
            "Tsy mba misy fitiavana\nToy ny an'i Jesosy\nFa ny ainy no natolony\nHo anao sakaizany.",
            "Nofoanany ny tenany\nRaha nandao ny lanitra.\nNaka endriky ny mpanompo\nKa nanaiky ho olona.",
            "Na dia fony mbola mpanota\nSy tsy nino akory aza aho;\nDia nasehony ny fitiavany:\nEfa maty hamonjy Izy.",
            "Toy ny nitiavan'ny Rainy\nSy nombany Azy koa\nNo itiavan'i Jesosy ahy\nKa itehirizany ahy.",
            "Fitiavana mandrakizay\nNo nitiavan'ny Tompo\nAry famindram-po lehibe\nNo nampaharetany."
        ]
    },
    {
        "title": "TIAKO AINAO MPAMONJIKO",
        "number": 64,
        "chorus": "Ianao Mpanavotra ahy\nMpamindra fo tokoa\nIanao ry Mpamonjiko.\nNo mamin'ny foko",
        "verses": [
            "Tiako Ianao Mpamonjiko\nFa ahy tontolo\nHariako ny ditrako\nHe! Tiako Ianao Jeso",
            "Nitia ahy taloha Ianao\nNamela heloka\nNy satro-tsilo nentinao\nHe! Tiako Ianao Jeso",
            "Raha mbola velon'aina koa\nNa maty aza aho\nDia hankalaza Anao tokoa\nHe! Tiako Ianao Jeso",
            "Hitory voninahitra\nSy hankalaza aho\nHidera Anao mandrakizay\nHe! Tiako Ianao Jeso."
        ]
    },
    {
        "title": "TIAKO HOZARAINA",
        "number": 360,
        "verses": [
            "Raha hampirehatra afo,\nAmpy ny lelafo iray.\nMifindra, mihanaka ny hafanan'ny\nafony\nToy ny afo ny\nfitiavan'Andriamanitra\nRaha mirehitra ao am-ponao\nNy hafanany, ny fahalefahany\nTianao hozaraina.",
            "Rehefa lohataona\nMiverina indray ny aina.\nAny an-tsaha, any an'ala\nVelom-bolo ny tontolo\nLohataona ny fitiavan'Andriamanitra\nRehefa tonga ao am-ponao\nNy fanavaozany, ny fahalefahany\nTianao hozaraina.",
            "Tiako hozaraina aminao\nIzao hafatra izao\nN'aiza n'aiza alehanao\nHiaraka aminao hatrany\nTiako hotoriana hatraiza hatraiza\nHiraiko ny hafaliako\nAndriamanitra fitiavana\nTiako hozaraina\nMiaraka amiko\nio Andriamanitra io\nTiako hozaraina."
        ]
    },
    {
        "title": "TIAKO JESOSY",
        "number": 516,
        "verses": [
            "Tiako Jesosy\nHianao no hiankohofako\nDera sy laza no an'ny Mpanjaka\nHaleloia (in-4)",
            "Tiako Jesosy\nHanompo Anao aho\nNy fianako atolotro Anao\nHaleloia (in-4)"
        ]
    },
    {
        "title": "TIAKO JESOSY TENA TIAKO",
        "number": 563,
        "verses": [
            "Tiako Jesosy, eny tiako tena tiako (in-2)\nMahagaga ny fahitana Anao\nNy endrikao mitory ny fitiavanao\nTiako Jesosy, eny tiako tena tiako",
            "Tiako Jesosy, eny tiako tena tiako (in-2)\nTsy misy atakaloko Anao\nSy ny Rà narotsakao hamonjy ahy\nTiako Jesosy…",
            "Tiako Jesosy, eny tena tiako (in-2)\nManampy ihany ireo namana\nFa be lavitra ny vitan'i Jeso\nTiako Jesosy….",
            "Tiako Jesosy, eny tiako tena tiako (in-2)\nManolo-tena ho anao aho\nRaiso re na dia tsy mendrika\nTiako Jesosy…"
        ]
    },
    {
        "title": "TIAKO MIHOATRA NOHO NY ZAVA-DREHETRA JESOSY",
        "number": 245,
        "chorus": "Azo esorina avokoa ny laza 'zay\nMety ho ahy\nSy ny zavatra sarodidy 'zay eto\nan-tany\nEkeko Jesosy ary izay fanapahany\nahy\nAleoko manana an'i Jesosy toy 'zay\nZavatra hafa.",
        "verses": [
            "Jesosy no tiako mihotra noho ny\nZavatra rehetra\nFantatro fa Izy no hany mahafa-po\nEkeko ny fitarihany\n'Zay sarobidy eo amin'ny fiainako\nIlaiko Jesosy amin'ny androko",
            "Manan-kery tsy misy fetra avy\nAny an-danitra Jesosy\nKa manapaka an'izao tontolo izao\nNy làlan'ny fijaliany\nNo nahafatesany tao Kalvary\nNoho ny amiko no niaretany.",
            "Koa tiako mihoatra ny zavatra\nrehetra\nMisy ety an-tany Jesosy."
        ]
    },
    {
        "title": "TIAKO NY BAIBOLY",
        "number": 646,
        "verses": [
            "Tiako ny Baiboly milaza\nNy tokony hataoko\nTiako ny baiboly milaza\nMifalia hatrany.",
            "Tiako ny Baiboly manoro ahy\nMba hitia ireo namako\nTiako fa mampianatra ahy\nHiahy ny mahantra.",
            "Tiako ny Baiboly fanilo\nNy amin'ny làlan-danitra\nSady manome toky ahy\nMinoa ny Tompo"
        ]
    },
    {
        "title": "TIAKO NY HANOMPO ANAO",
        "number": 269,
        "chorus": "Tiako Ianao sy ny hanompo Anao\nNy fofon'aiko, ny tena manontolo\nIlay Mpamorona no avy hamonjy\nAndriamanitra tokoa Izy.",
        "verses": [
            "Nafoiny ilay fonenan-tsoa\nAndriamanitra JESO no anarany\nTeraka an-tranon'omby\nNolavin'izy ireo\nLehilahy ory sy nijaly",
            "Nanetry tena mba hanavotra ahy\nAndriamanitra tonga ho ahy\nTsy nanantena re fa nisy aizina\nNiondrika Jeso hamonjy ahy.",
            "Nitafy nofo Izy, naka ny endritsika\nNaharihariny ny zava-miafina\nNoho ilay fanatitra iray tao Kalvary\nAry izao dia fantatrao Izy."
        ]
    },
    {
        "title": "TIAKO NY HO SAKAIZANAO JESOSY",
        "number": 602,
        "verses": [
            "Nihevitra hahavita tena amin'ny\nfiainana aho\nFankahalana Anaono tato am-poko\nMatetika aho no hafahafa toetra\nNanatona ahy Hianao na tsy nilaiko.",
            "Fantatro fa tsinontsinona aho raha\ntsisy Anao\nNitsotra ny tananao raha niantso\nvonjy aho\nTsy navelanao ho fefiky ny\nfamoizam-po\nHianao nanazava ahy tanaty aizina.",
            "Eo anilako isan'andro\nHianao ka momba ahy\nRaha tra- pahamainana aho,\nHianao no antsoiko\nHianao no ianteherako amin'ny\nandrom-piainako\nHianao nanome ahy hery vaovao.",
            "Jeso, tiako ny ho sakaizanao\nHianao no nanafaka ahy\nJeso, tiako ny ho sakaizanao\nNy fahitako Anao Tompo ô\nNanova ahy"
        ]
    },
    {
        "title": "TIAKO NY MANOMPO ANAO",
        "number": 88,
        "verses": [
            "Ny manompo, Anao no tiako\nFa namelon'ahy Ianao;\nTsinotsinona anie aho\nRaha namonjy ahy Ianao.\nTorortoro ny foko\nNoho ilay asanao tao Kalvary;\nVonona ho amin'ny\nTendrinao aho Tompo ô."
        ]
    },
    {
        "title": "TIAKO NY MITANTARA",
        "number": 209,
        "chorus": "Tiako ny mitantara\n'lay zavatra kendreko,\nIlay tantara fahagola\nDia ny amin' i Jeso",
        "verses": [
            "Tiako ny mitantara\nIreo zava-miafina\nDia ny fitiavany be\nSy ny voninahiny\nTiako ny mitantara\nSatria marina\nKa afa-po tokoa\nNy faniriako be.",
            "Tiako ny mitantara\nLay tsara lavitra\nNoho ny volamena\nIzay heverinao\nTiako ny mitantara\nF'ambony amiko\nKa io no antony iray\nHitantarako izao",
            "Tiako ny mitantara\nMamerimberina\nTantara mamy tokoa\nMahafinaritra\nTiako ny mitantara\nHo an'ny tsy nandre\nNy tenim-pamonjena\nAtolotry ny Ray.",
            "Tiako ny mitantara\nHo an'ireo noana\nSy ny mangetaheta\nHo fitsaharana\nIlay tantara ela\n'zay tiako hatrety\nHo hira vaovao\nAny an-danitra."
        ]
    },
    {
        "title": "TIAKO SATRIA TIA AHY",
        "number": 338,
        "verses": [
            "Amin'ny andro mahafaly\nEo anilako Izy\nAmin'ny andro mahory koa\nEo akaikiko Izy.",
            "Tsy ny hatsaram-panahiko\nNa ny fahamendrehako\nNo nisoloany ahy\nFa noho ny fitiavany.",
            "Tsy nisy nahavita izay\nVitan'i Jesosiko;\nTsy misy manam-pitiavana\nToy ny fitiavany",
            "Indray andro any aho\nHahita ny endriny;\nAry hanompo Azy ao\nJerosalema vaovao.",
            "Jesosy no sakaizako\nTiako satria tia ahy;\nTsy mba ho solosoloiko\nFa ho Tompoiko mandrakizay\nJesosy no ahy anio sy ho doria."
        ]
    },
    {
        "title": "TIAN'I JESOSY NY MADINIKA",
        "number": 645,
        "verses": [
            "Aoka hino ny rehetra\nTia zaza Jesosy\nAraka ny voalaza\nAo amin'ny Baiboly.",
            "Aoka hino ny rehetra\nMamonjy ny zaza Izy\nAraka ny voalaza\nAo amin'ny Baiboly",
            "Aoka hino ny rehetra\nMiahy ny zaza Jesosy\nAraka ny voalaza\nAo amin'ny Baiboly"
        ]
    },
    {
        "title": "TOERANA HO AN'I JESOSY",
        "number": 481,
        "chorus": "Eny, misy toerana ho anao\nny foko\nMonena re ry Tompo ô, monena\nao doria.",
        "verses": [
            "Moa tsy mba misy toerana\nhonenan'i Jeso ve?\n'Lay nandrotsaka ny rany mba\nHamonjeny anao.",
            "Nilaozany ny lapany;\nka dia nanetry tena\nTsy mba misy toerana ve ho Azy\nAo am-ponao?",
            "Manaiky aho Tompo ô ka dia\nMandrosoa;\nO! aza mba ilaozana ity foko\nMahantra",
            "Monena fa ny fanatrehanao no\nFahazavako\nMitarika ny fiainako mba ho\nVoninahitrao",
            "Amin'ny andro hodiako,\nDia hampandroso Jeso\nHilaz'amiko fa: ''Misy toerana\nho anao''"
        ]
    },
    {
        "title": "TOHIZO NY DIANAO",
        "number": 437,
        "chorus": "Tohizo ny dianao, eny tohizo\nhatrany\nMandeha amin'ny fahazavan'\nny Tompo\nHo tody soa hianareo raha\nmizotra hatrany\nMandehana amin'ny fahazavan'\nny Tompo.",
        "verses": [
            "Nitady ela ny lalan-danitra aho\nMety ho hitako ve io lalana io?\nRaha nipetraka kely aho\nMba hiala sasatra\nInjany misy feo iray mibitsika hoe:",
            "Nangataka ela aho\nny fahasoavany\nHanazava ny hatrany ny làlako\nRaha natahotra aho irery\nTeo amin'io làlana io\nInjay misy feo iray\nmibitsika hoe:"
        ]
    },
    {
        "title": "TOKANA NY SAFIDIKO",
        "number": 644,
        "verses": [
            "Tsy haiko ny handalina\nNy hasarotam-piainana\nTokana ny hany fantatro:\nAmpy ahy Jesosy.",
            "Tiako ireo voronkely\nSy ny voninkazo koa\nNefa tena ilaiko\nDia ny baiboliko",
            "Raha tonga ny fanahiana\nSainiko haingana aloha\nNy amin-java-bitika aza\nJesosy no iankinako.",
            "'Zao no mba safidiko:\nNa andro ratsy na ho soa\nTena tsy hohadinoiko\n'Lay Jeso mahafapo"
        ]
    },
    {
        "title": "TOMOERA AMIN'NY FITIAVAKO",
        "number": 682,
        "verses": [
            "Hoy Jeso, tomoera amin'ny fitiavako\nRaha te- ho mpianatro\nHoy Jeso, tomoera amin'ny fitiavako\nRaha te- ho mpianatro",
            "Toy ny nitiavan'ny Ray\nNo hitiavako anareo\nTomoera amin'ny fitiavako\nRaha mitandrina ny didiko ianareo\nDia hitoetra amin'ny fitiavako.",
            "Niantso anareo Aho\nIzay fifaliako\nSy ho fifalianareo\n(Tomoera amin'ny fitiavako)\nOmeo ny ainao ho an'ny namanao\nMifankatiava ianareo",
            "Tsy ianareo no nifidy Ahy\nFa Izaho no nifidy anareo\nAnkatoavy ny didy nomeko anareo\nMifankatiava ianareo."
        ]
    },
    {
        "title": "TOMPO O! AROVY TSY HIVADIKA",
        "number": 354,
        "verses": [
            "Arovy aho ry Tompo ô\nArovy tsy hivadika Aminao\nMisy famalian-tsoa\nTiako ho azoko tokoa;\nTompo ô\nArovy tsy hivadika aho."
        ]
    },
    {
        "title": "TOMPO O! OVAY NY FOKO",
        "number": 253,
        "verses": [
            "Tompo o! ovay ny foko,\nMba homora anarina\nToy ny an'ny zazakely\nTsotra sady marina,\n;;; Tsy mialona, tsy maditra\nFa manao ny sitrakao;;;",
            "Zaza ka tsy te-hifidy\nIzay homenao ahy anio;\nNy ho azoko ampitso\nDia ankinina Aminao\n;;; Koa tsy manahy aho\nFa efa niantohanao;;;",
            "Zaza tsy maharo-tena\nFa miankina amin-dRay;\nTsy mahery, tsy mba hendry\nAry tsy mahay mandeha;\n;;; Hianao no Raiko tia,\nRaiko be fahari-po;;;"
        ]
    },
    {
        "title": "TOMPO O! TARIHO AHO",
        "number": 113,
        "verses": [
            "Tompo ô! tariho aho\nBe ny tafiotram-panahy;\nOnja no manafotra ahy\nVato no misakana ahy\nFantatrao ny tsara haleha.\nTompo ô! , tariho aho.",
            "Manaiky ka tony re\nNy onja misafoaka\nNoho ny didinao hoe\nMangina, mitsahara;\nTompon'ny rehetra Ianao\nTompo ô! , tariho aho.",
            "Rehefa mby amoron'ny\nOnim-pahafatesana aho\nKa mitroatra mampanahy\nNy onja mahatahotra\nOmeo toky aho hoe:\n\"Aza matahotra re\"."
        ]
    },
    {
        "title": "TOMPO Ô AREHETO INDRAY",
        "number": 623,
        "chorus": "Atrehonao aho Tompo ô\nArovy amin'ny herinao",
        "verses": [
            "Tompo ô, areheto indray\nNy afo nomenao ahy\nIanao no manazava ahy,\nAmpahirato ny masoko.",
            "Tafio ny fahamasinanao\nHazony amin'ny indrafonao\nAtrehonao aho Tompo ô\nArohy amin'ny herinao\nTafio ny fahamasinanao\nTohano amin'ny fahefanao.",
            "Tompo ô, areheto indray\nNy afo ato aminay\nIanao no manova anay\nAmpahirato ny masonay.",
            "Atrehonao izahay\nArovy amin'ny herinao\nTafio ny fahamasinanao\nHazony amin'ny indrafonao\nAtrehonao izahay\nArovy amin'ny herinao\nTafio ny fahamasinanao\nTohano amin'ny fahefanao."
        ]
    },
    {
        "title": "TOMPO Ô! MAHITA ANAY HIANAO",
        "number": 610,
        "verses": [
            "Tompo ô, indreto izahay\nTafavory eto Aminao\nKa mampifaly ny fonao\nNy firaisan'ny zanakao\nMba hidera sy hitsaoka Anao\nAmin'ny fo sy saina iray\nKa manandratra Aminao\nNy hanitra fankasitrahana",
            "Jeso ô, indreto izahay\nMiray saina eto Aminao\nVonona hanao ny sitrakao\nSy hanaraka ny làlanao\nNa ho sarotra aza ny dia\nTsy hihemotra sanatria\nFa handroso am-pinoana\nMandram-pahatonga ao Aminao."
        ]
    },
    {
        "title": "TONGA IZY",
        "number": 672,
        "chorus": "Tonga Izy (in-2)\nRaha tsy afa-nanatona Azy aho\nTonga Izy\nMaty ho ahy Izy teo amin'ny hazo\nRaha tsy afa-nanatona Azy aho\nTonga Izy.",
        "verses": [
            "Ny efitra nampisaraka ahy\ntamin'i Kristy\nDia lehibe tsy haiku nodinganina\nNy elanelana taminay: lehibe tokoa\nHoy aho:\nTompo tsy afa-manaton' Anao aho",
            "Raha mbola voafatotra aho\nTonga izy\nTonga Izy raha tsy nanam-piadanana aho\nNokasihiny malefaka\n, nareniny\nAnkehitriny, mialoka amin'ny fitiavana aho."
        ]
    },
    {
        "title": "TONGA TIA AZY AHO",
        "number": 380,
        "verses": [
            "Efa sakaizako izao fa tsy fahavaloko\nJesosy 'zay nitia ahy\nTao Golgota\nTonga tia Azy koa aho,\nBabony tanteraka\nAn'i Jesosy izay nanavotra ahy aho.",
            "Matoky an'i Jesosy\nKa tsy hatahotra aho\nEo alohako, mitarik'ahy Izy\nAtsotrany hamonjy ahy\nNy sandriny mahery\nFiarovana tsar'indrindra Jesosy.",
            "Ny holatry ny tànany\nIzay nohombohana\nNo manamarika ny fitiavany\nFa ny fahavalo kosa\nVao mahita an'ireo\nDia rifatra mandositra amin-tahotra."
        ]
    },
    {
        "title": "TOROY LALANA",
        "number": 520,
        "verses": [
            "Ry Tompo ô, toroy ny lalanao izahay\nte hampifaly sy hankato Anao\nhatrany\nFanahy Masina ô, fenoy fitiavanao\nizahay\nTorotoroy, volavolao, ampianaro.",
            "Ry Tompo ô, toroy ny lalanao aho\nte hampifaly sy hankato Anao\nhatrany\nFanahy Masina ô, fenoy (ny)\nfitiavanao aho\nTorotoroy, volavolao, ampianaro.",
            "Jesosy ô, omeo ny herinao izahay\nMba handresenay ny herin'ny\nfahavalo\nTantano izahay ho tonga any\nAminao\nHitoetra mandrakizay an-dapanao.",
            "Jesosy ô, omeo ny herinao aho\nMba handreseko ny herin'ny\nfahavalo\nTantano aho ho tonga any Aminao\nHitoetra mandrakizay an-dapanao."
        ]
    },
    {
        "title": "TSARA AMIKO NY TOMPO RE",
        "number": 40,
        "chorus": "Haleloia(in-3)\nTsara amiko",
        "verses": [
            "Tsara amiko ny Tompo re!\nNy Tompo re, tsara amiko"
        ]
    },
    {
        "title": "TSARA JEHOVAH",
        "number": 339,
        "verses": [
            "Hihira aho fa Tompoko, Hianao\nHidera aho fa Tompoko, Hianao\nDerao ny Tompo fa tsara Izy\nFa ny famindram-pony\nmandrakizay."
        ]
    },
    {
        "title": "TSARA NOHO NY AINA",
        "number": 699,
        "verses": [
            "He! tena tsara noho ny aina\nNy famindram-ponao, ry Tompo ô!\nIzany no hisaorako Anao,\nRaha mbola velona koa ny aiko.",
            "Asandratro amin'ny Anaranao\nNy tanako, ry Andriamanitra ô!\nNy molotro no hidera Anao;\nTsara tokoa ny famindram-ponao."
        ]
    },
    {
        "title": "TSARA NY MIDERA NY TOMPO",
        "number": 641,
        "verses": [
            "Feno hafaliana sambatra aho\nAvy aminao izany\nIzany dia asanao Tompo ô\nKa tsara avokoa",
            "Ny fisainanao mameno ahy\nMiaina ao Aminao aho\nHianao Vatolampy iankinako\nTompon'ny fiainako.",
            "Tsara ny midera, misaotra\nAry mihira ny Tompo\nVao maraina anehoany fitia\nIsan'andro arovany."
        ]
    },
    {
        "title": "TSAROVY KALVARY",
        "number": 687,
        "verses": [
            "Tsarovy Kalvary\nNy fisentoana lao\nNy ady samirery\nNataony ho anao",
            "Tsarovy ireo tsilo\nNandratra ny endriny\nNy fitiavana feno\nNatolony ho Anao",
            "Ry mpanota mahantra\nSaino fa noho ianao\nNy Tompo feno antra\nNamoy ny ainy tao\nNy fahorian'ny Tompo\nManaitra ahy sy hianao\nHo vonona hanompo\nIzao anio izao\nAtolory Azy ny fonao (in-2)."
        ]
    },
    {
        "title": "TSENAO AHO TOMPO O!",
        "number": 56,
        "chorus": "Tsenao (Tompo o! ), any an-koatra\n(an-koatra)\nIzay misy an'ireo hazon'aina;\nRehefa ho tapitra ny onjam-\npiainana tety,\nDia tsenao aho, Tompo ô, ho any\n(aminao)",
        "verses": [
            "Raha ho eo amoron'ny\nonim-pifaliana aho\nKa ny olo-mahatoky ho lasa;\nAry hitsahatra ny adim-piainana tety,\nKoa tsenao aho Tompo ô, ho any\n( Aminao)",
            "Ny zavatra maro izay manintona ety,\nDia zava-poana sy mety ho rava,\nFa ny any an-danitra, feno zava-\ntsoa tokoa,\nKoa tsenao aho, Tompo ô, ho any\n(aminao)",
            "Ho hitantsika ireo zava-ninoana tety;\nAnjely mitendry ny lokangany;\nHidera ny Mpanjaka ireo'zay\nnotahiany;\nKoa tsenao aho, Tompo ô, ho any\n(aminao)",
            "Hisy firaisan'am-po, mahafinaritra\nTokoa,\nMiaraka amin'ireo sakaiza tety;\nAny amin'ilay tontolo tsy manam-\npaharoa\nKoa tsenao aho, Tompo ô,\nho any (aminao)"
        ]
    },
    {
        "title": "TSY DINGANA IZAY NATOMBOKA",
        "number": 215,
        "chorus": "Tsy ny dingana 'zay natomboka\nFa ny fiafaran'ny dia\nRehef'ihaona amin' i Jesosy\nHandray 'lay satroboninahitra.",
        "verses": [
            "Tsy ny dingana voalohany\nNatomboka no hitsaran'anao;\nFa maro ny zava-misakana\nKa mety hampihemotr'ireny.",
            "Aoka hihahery ny finoanao\nFa io no hampandroso anao\nRaha miara-mandeha isan'andro\nAmin' i Jesosy dia handresy.",
            "Ety an-dalana izao isika\nKa miambena amim-bavaka\nFa ao satana, 'lay mpaka fanahy\nKa antsoy Jeso ho mpanafaka anao",
            "Mitombo eny an-dalana ve\nIreo entana mavesatra\nFa raha avelanao Jesosinao\nHiara-mitondra, dia ho maivana"
        ]
    },
    {
        "title": "TSY HAMELA AHY HO IRERY",
        "number": 98,
        "chorus": "Tsy hamela ahy ho irery\nNa handao ahy Izy (in-2)\nTsy hamela ahy ho irery\nNa handao ahy Izy (in-2)",
        "verses": [
            "Hitako ny tselatra,\nReko, ny kotroka\nTsapako ny herin'ota mamely\nNy fanahy\nReko ny feon'ny Mpamonjiko\nMilaza fandresena\nTsy hamela ahy ho irery\nNa handao ahy Izy",
            "Manafiotra ny fakam-panahy,\nMasiaka sy mahery\nFiadanana no azoko anilan'ny\nMpamonjiko\nRaha mandao ireo namana\nIanao no miaro\nTsy hamela ahy ho irery\nNa handao ahy Izy.",
            "Raha tojo fijaliana, hanaraka,\nNy làlanao\nIanao manampy re mitondra\nNy entako\nKetraka ny tongotro, ka\nMila ho solafaka\nTsy hamela ahy ho irery\nNa handao ahy Izy"
        ]
    },
    {
        "title": "TSY HANGETAHETA MANDRAKIZAY",
        "number": 322,
        "chorus": "Tsy hangetaheta mandrakizay\n'Zay misotro ny rano\nomen'i Jesosy\nFitsaharan'ny fo sy fanahy no\nOmeny 'zay manaton'Azy.",
        "verses": [
            "Mangetaheta fahasambarana\nNy olombelona rehetra\nNefa tsy mionona\namin'izay azony\nFa mbola mitsiriritra hatrany.",
            "Andriamanitra irery ihany\nNo tokony omentsika ny fo;\nFa ny zavatra hafa,\nn'inon'inon'izany\nDia tsy hanome fahafaham-po.",
            "Tsy ho lany andro hivezivezy,\nHikaro-java-tsoa intsony,\nIzay an'i Jesosy,\nfa handeha hilaza\nNy hatsaran'ny fahalalan' Azy.",
            "Tsy miankin'amin'ny toerana\nNa ny ataon'ny hafa aminao,\nNo hahasambatra na tsia,\nNy fiainanao ety,\nFa ny fanananao an'i Jesosy."
        ]
    },
    {
        "title": "TSY HARENA NA VOLAMENA",
        "number": 751,
        "verses": [
            "Tsy harena na volamena no\nazoko omena anao\nAmin'ny anaran'i Jesosy,\nmitsangatsangana mandehana\nMitsangàna ka, minoa hianao\nMankalazà an'Andriamanitra\nTsy harena na volamena fa ny\nAnaran'i Jesosy.",
            "Tsy harena na volamena no\nnanavotana anao\nFa Rà nomen'i Jesosy,\nmanafaka ny ota\nMitsangàna, mibebaha hianao\nEkeo Jesosy ho Tomponao\nTsy harena na volamena, fa ilay\nRà sarobidy.",
            "Tsy harena na volamena no hitondra\nanao an-danitra\nFa fahavononanao hihaona\namin'ilay Mpampakatra\nMifohaza mivavaha hianao\nTsy harena na volamena,\nfa fitiavan'i Jesosy."
        ]
    },
    {
        "title": "TSY HO ELA INTSONY",
        "number": 299,
        "chorus": "Tsy ho ela intsony\nDia hiverina Jesosy",
        "verses": [
            "Tsy fantatro izay mbola androko\nMandra-piverin'ny Tompo\nNefa ho avy tokoa Jesosy\nHaka ahy ho any Aminy.",
            "Raha jerena ireo zava-misy\nEran'izao tontolo izao\nKorontana miampy feon'ady\nMitondra ny tebiteby",
            "Tsy azo inoana fa hilamina\nNy eto ambonin'ny tany\nFinoana no hany hanantenana\nFa mbola hilamin'indray"
        ]
    },
    {
        "title": "TSY HO FANIRIANA FOTSINY",
        "number": 291,
        "chorus": "Raha mba mahita fitia izahay\nJesosy ô\nDia tsy ho faniriana fotsiny izany\nNa nofy na fikasana\nforonin'ny saina\nFa ho fahatanterahan'ny Soratra\nMasina",
        "verses": [
            "Ry Tompo ô, ny Jesosy Famonjena\nFahamarinantsika\nMbola mino sy manaiky\nNy fitarihan'ny Fanahy\nTsy hanafoana na hampandefitra\nIzany sanatria\nKoa aza mitsahatra ny miteny\nAminay Hianao.",
            "Ry Tompo ô, Ny Jesosy\nFamonjena Fahamarinantsika\nTsy hampitamby na hampiandry\nAmin'ny mampahalalaka\nFa ampy izay ny andro maro\nNandeferanao\nKoa ankehitriny ampaherezo ny\nTànanay.",
            "Ry Tompo ô, ny Jesosy\nFamonjena Fahamarinantsika\nTsy hiantehitra aminm-bola\nVao hihetsika hanompo\nAry tsy hirehareha amim-bola\nRaha notahianao\nKoa dia ampitoero amin'ny\nFanetren-tena.",
            "Ry Tompo ô, ny Jesosy\nFamonjena Fahamarinantsika\nTena hitory ny fampianarana\nTs'isy kilema\nFamonjena, fanasitranana,\nMandresy ny devoly\nTsy amin-kery na tanjaka fa\nAmin'ny Fanahinao.",
            "Ry Tompo ô, ny Jesosy.\nFamonjena Fahamarinantsika\nArovy tsy hiova fa tsy tsara noho\nNy hafa\nAmpandehano ny tavanao fa\nNahomby Mosesy\nDia hahavita izay alehanay koa\nIzahay"
        ]
    },
    {
        "title": "TSY HO LEFY NY HERIN'NY RA",
        "number": 240,
        "chorus": "Ka na ovina na oviana\nNa aiza na azia koa toerana\nDia tsy ho lefy ny herin'ilay Rà\nAzoko itokiana.",
        "verses": [
            "Ilay Rà nalatsaky Jesosy\nFahiny tao Kalvary\nDia manome hery ahy isan'andro\nHandreseko ilay ratsy",
            "Mamafa ny ranomasoko\nNy herin'ilay Rà\nManaisotra ny ahiahy sy tahotro\nMahatony tsara ny fo.",
            "Mandresy ny fahavaloko\nNy herin'io Rà soa io\ndia satana mpaka fanahy\nSy mpanimba\nAry mpitondr'aretina"
        ]
    },
    {
        "title": "TSY HOHADINOIKO",
        "number": 80,
        "chorus": "Tsy hohadinoiko isan'andro\nNy fitahiana narotsakao;\nNohamaroinao ny asanao,\nHotsaroak'ireo, Jesosy ô!",
        "verses": [
            "Nahantr'indrindra aho fahiny\nFa olom-bery voafatotra\nKa maizin-tsaina maty fanahy,\nNef'ankehitriny novonjena.",
            "Nijaly tokoa aho taloha,\nNy fo sy saina simba avokoa;\nHeniky ny aretin'ota;\nKanef'izao sitrana aho.",
            "Zava-poana no tiako taloha\nFa Jesosy nanidiako fo;\nAnkehitriny Izy anefa\nNo velon'ato anatiko.",
            "Raha mbola toa ahy taloha ianao\nRy tsy voavonjy mahantra o!\nDia raiso ho anao Jesosy\nFa hanova anao toa ahy Izy."
        ]
    },
    {
        "title": "TSY HOTSAROVANY",
        "number": 651,
        "verses": [
            "Tsy hotsarovany,\nTsy hosaininy intsony\nNy ota nofafany, namindrany fo\nTsia tsy hotsarovany intsony",
            "Tsy hotsarovany\nTsy hosaininy intsony\nIreo ota navelany\nTsy hotsarovany intsony intsony."
        ]
    },
    {
        "title": "TSY MAHANTRA ANDRIAMANITRA",
        "number": 439,
        "verses": [
            "Tsy mahantr'Andriamanitra\nHainy atao 'zay lazainy\nTsy mahantr'Andriamanitra\nMihaino ny vavakao Izy."
        ]
    },
    {
        "title": "TSY MAINTSY ATERAKA INDRAY",
        "number": 267,
        "chorus": "Tsy maintsy hateraka indray\nTsy maintsy hateraka indray\nLazaiko anao marina tokoa tokoa\nTsy maintsy hateraka indray.",
        "verses": [
            "Indray alina nisy mpanapaka iray\nNanontany mangina ny Tompo Jeso\nNamaly ny Tompo ka nanao hoe\n''Tsy maintsy ateraka indray''.",
            "Henoinao ny hafatry ny Tomponao\nRy mpanota izay varian-daolao\nTandremo sao tsy misy vokany izao\n''Tsy maintsy ateraka indray''",
            "Moa lanitra ambony no irinao ve\nKa te-honina ao mandrakizay ianao?\nEkeo ary izao baiko marina izao\n''Tsy maintsy ateraka indray''.",
            "Izao: azo atao ny miditra ao\nHiara-mifaly amin'ireo marobe\nNy fiainana mandrakizay ho anao\n''Tsy maintsy ateraka indray''"
        ]
    },
    {
        "title": "TSY MAINTSY ILAZAKO JESOSY",
        "number": 390,
        "chorus": "Tsy maintsy ilazako Jesosy\nRehefa mavesatr'entana aho\nTsy zakako irery izany\nF'ilako ny fanampiany.",
        "verses": [
            "Tsy maintsy ilazako Jesosy\nAmin'ny andro fitsapana,\nAfaka manampy ahy Izy\nSatria efa an'ny Tompo aho.",
            "Tsy maintsy ilazako Jesosy\nAmin'ny andro fahoriana,\nSakaiza tia sy antra Izy,\nManafak'amin'ny tahotro",
            "Rehefa alaim-panahy aho\nDia mila Mpamonjy mahery\nAfa-mitondra ireo entako\nTsy maintsy ilazako Jeso.",
            "Manosik'ahy 'zao tontolo izao,\nHiroso amin'izay ratsy;\nTsy maintsy hilazako Jesosy\nMba handreseko an'izany,"
        ]
    },
    {
        "title": "TSY MANDISO FANANTENANA IZY",
        "number": 465,
        "verses": [
            "Tsy mandiso fanantenana\nFa mahatoky Jesosy,\nIzay tsara lavitra\nNoho ny nisainako Azy;\nMahafantatr'azy aho,\nMarin'amiko Izy",
            "Tsy mandiso fanantenana\nFa namonjy ahy Izy,\nIreo fahoriana\nIzay nampahory ny foko,\nDia nesoriny tamin'ny\nFanatrehany avokoa\nNanome toky ny foko\nNy famihinany ahy",
            "Tsy mandiso fanantenana\nNanasitran'ahy Izy;\nFa Mpamonjy manan-kery\nTsy misy tsy hainy atao\nFony tety an-tany Izy\nDia nanasitrana;\nNihaosa ve Jesosy\nKa tsy onena intsony?",
            "Tsy mandiso fanantenana!\nHo avy faingana Izy\nMiha-tomotra hatrany\nNy fiaviany indray\nIreo 'zay mpaniratsira\nDia manesoeso ahy\nNefa Avy Aho, hoy Izy\nAmpy ahy tokoa izany",
            "Tsy mandiso fanantenana\nIlay zava-drehetra,\nFa Mpamonjy sy Mpitsabo\nKristy I 'zay tsy miova,\nEfa azony ny foko,\nOmeny 'zay ilaiko;\nTsy mandiso fanantenana\nFa mahafa-po Izy"
        ]
    },
    {
        "title": "TSY MENDRIKA HO AHY",
        "number": 559,
        "verses": [
            "Ny hanatona Anao\nTsy mendrika ho ahy\nFa ny teninao no aoka hitarika ahy\nDia ho sitrana\nHo sitrana",
            "Ny hanambara Anao\nTsy mendrika ho ahy\nFa ny Teninao no ho fifaliako\nDia ho sitrana aho\nHo sitrana",
            "Ny hanompo Anao\nTsy mendrika ho ahy\nFa ny teninao\nNo hamelom-pinoana ahy\nDia ho sitrana aho.\nHo sitrana",
            "Ny hihira Anao\nTsy mendrika ho ahy\nFa ny teninao\nNo ambaran'ny feoko\nDia ho sitrana aho\nHo sitrana"
        ]
    },
    {
        "title": "TSY MIHOATRA NOHO IZAY ZAKA",
        "number": 316,
        "chorus": "Tsy manome mihoatra noho\nIzay mety ho zakako\nNy Tompo satria Izy\nNo miara-dàlana amiko.",
        "verses": [
            "Maro ireo fitsapana\nMety ho lalovako\nNefa mbola misy ihany\nNy làlana ahafahako.",
            "Takona indraindray\nNy masoandrom-piainana\nRaha mijery an'i Jesosy\nDia manjary mirana.",
            "Mafy matetika ireo ady\nIzay atrehina\nNy finoana ilay Avo no\nMahatonga fandresena",
            "Koa raha mitanondrika ary\nNa mitady ho kivy\nDia antsoy Jesosy\nFe Izy hampahery anao."
        ]
    },
    {
        "title": "TSY MIOVA JESOSY",
        "number": 460,
        "verses": [
            "Nanova ny rano ho divay\nTamin'ny fanasana\nNampahery ny malahelo\nNijery ny kamboty",
            "Hainy koa ny mampitony\nNy fanaintainana\nNokasihiny ny marary\nKa dia sitrana ireny",
            "Nohombonana ny Tompo\nHitondra famonjena\nTsy ho an'ireo taloha\nFa ho anao sy ho ahy koa",
            "Izy no Tompon'ny tompo\nMpanjakan'ny mpanjaka\nTiako hanjaka ato am-poko\nKa izy no hitarika ahy,",
            "Tsy miova Jesosy\nNa oviana na oviana (in-2)\nMbola ho hita,\nmbola ho tia"
        ]
    },
    {
        "title": "TSY MISY AFENIKO ANAO",
        "number": 572,
        "chorus": "Tsy misy miafina Aminao Jesosy\nHanao irery no mameno ny foko.",
        "verses": [
            "Tsy misy afeniko Anao Jesosy\nNa dia ny toerana miafina ato am-poko\nMety hizarazara io foko kely io\nNefa Jesosy irery no Mpanapaka ao.",
            "Mety ho sarotra ny làlana haleha\nMila mpitarika mbatsy haniasia\nAla mikitroka, onja manafiotra\nHianao irery no itokiako.",
            "Ekeko ny sitraponao Tompo ô\nApetrako Aminao\nNy fiandraiketana ahy\nMahantra irery, tsy maintsy ho very\nIzay manafina ota tsy mety hovonjena."
        ]
    },
    {
        "title": "TSY MISY ATAHORAKO",
        "number": 221,
        "verses": [
            "Tsy misy atahorako,\nJesosy no momba ahy;\nAtaony 'zay hahasoa ahy\nSatria efa Azy aho\nManome toky ny foko\nNy teny fikasany;\nMandra-pifaran'ny diako\nDia hitantana ahy izy.",
            "Mandalo fizahan-toetra\nIndraindray ny tenako\nNefa tsy afoiny aho\nFa ampiany tokoa\nMangataha, hoy ny teniny\nDia homena ianao\nDondony ihany koa fa\nHovohaina ianao.",
            "Raha mitsangana i satana\nMba hanisy ratsy ahy\nHamafy fisalasalana\nDia antsoiko Jesosy.\nTsy ho kivy aho satria\nMbola mitoetra Izy;\nAry fantatro fa tia ahy\nHatramin'ny farany"
        ]
    },
    {
        "title": "TSY MISY FAHADISOAM-PANANTENANA ANY AN-DANITRA",
        "number": 187,
        "chorus": "Voataona ho amin'io tanàna\nNomanin'ny Tompo io aho\n'Lay tananà soa sy masina\nHo an'ireo'zay tia Azy\nManina ny any aho izao\nSy'zay valisoa ho azoko\nFifaliana ny hahita ny Mpamonjy\nAny an-danitr'honenako",
        "verses": [
            "Tsy misy fahadisoam-panantenana\nAny an-danitra\nTsy hisy fahasasarana\nTsy hisy koa aretina\nNy fo maratra sady ory\nHandray fampiononana\nNy rahon'izay nanarona\nHisolo fifaliana.",
            "Tsy hisy fandoavam-bola\nNa fandoavan-kofany\nNy fitafiana tsy hiofo\nFa ho vaovao hatrany\nTsy hangetaheta intsony\nNa mba ho noana akory\nFa zaraina amin'ny masina\nNy fanomezan-danitra",
            "Tsy hisy fisaonana any\nTsy hisy fahafatesana\nNy antitra ho tanor'indray\nHisy fanovana atao\nHo tahaka an'i Jesosy\nMandrakizay ireo Azy\nNy masoandro sy kintana\nTsy hanazava an'ireo"
        ]
    },
    {
        "title": "TSY MISY IRIKO TAHAKA ANAO",
        "number": 63,
        "chorus": "Ny ho akaikin'ny Tsitoha\nNo mahatsara ny fiainako;\nTompo o! ry Tompo ô!\nTsy misy iriko tahaka Anao.",
        "verses": [
            "Ataoko toy efa maty aho,\nNy amin'ny ota sy rehaka;\nTsy izaho intsony izao no velona;\nFa Kristy ato anatiko.",
            "Ny foko tokana, tsy zaraina,\nNo entiko hatao fanatittra;\nNy ho aviko'zay mbola miafina;\nApetrako amin'ny Ray.",
            "Tsy hahita ny tavan'ny Tompo,\nIzay tsy manam-pahamasinana;\nIzany indrindra no iezahako;\nHanomboana ny nofo.",
            "Raha tonga ny fisalasalasana,\nKa mila ho fefika ny samboko;\nJesosy tompon'ny finoako;\nMpiantok'ahy no antsoiko"
        ]
    },
    {
        "title": "TSY MISY SAKAIZA TOA AN'I JESOSY",
        "number": 223,
        "chorus": "Eny itokiako Izy satria\nnampandresy ahy\nTsy namonjy fotsin'Izy fa mitahiry\nAhy koa",
        "verses": [
            "Tsy misy sakaiza\nToa an'i Jesosy amiko\nManome izay ilaiko izy no\nmiaro koa",
            "Izy no zava-drehetra\nMpamonjy, Mpitarik'ahy\nMiaro ahy amin'ny fahavalo rehetra",
            "Tsy hitsahatra hitia\n'Lay maty ho ahy aho\nFa indray andro any dia hahita ny\nTavany"
        ]
    },
    {
        "title": "TSY MISY TAHAKA AN'I JESOSY",
        "number": 229,
        "chorus": "Tsy misy tahaka an'i Jesosy\nSakaiza mahafinaritra\n'Zay nanaisotra ny aizim-pahotako\nSy nikarakara ahy.",
        "verses": [
            "Tiako ny hanambara aminao\nNy momba an'i Jesosy\nSakaiza mamiko\n'Zay nanova ny fiainako rehetra\nAry mihevitra ny fanahiko",
            "Hitan'i Jesosy tao anaty ota\nSy fahantrana ary fijaliana aho\nKa natsotrany tamiko ny tanany\nHitarik'ahy amim-pitiavana.",
            "Mampahery ahy isan'andro Izy\nAmin'ireo tenim-pitiavany\nIzy koa no miaro amin'ny ratsy\nMandra-pifaran'ny diako ety."
        ]
    },
    {
        "title": "TSY MISY TSY MANATRIK'ADY",
        "number": 206,
        "chorus": "Koa apetraho amin' i Jesosy\nNy enta-mavesatry ny fonao\nFa Izy tsy handao anao mihitsy\nNa inona manjo anao.",
        "verses": [
            "Tsy misy tsy manatrik'adim-panahy\nRehefa olona naterak'indray\nNef'amin'ireo fitsapana mianjady\nDia hita fa mandresy Jesosy.",
            "Ny famelan'ny Tompo ny ranomaso\nHirotsak'amin'ny fiainanao\nTsy fanadinoany anao sanatria\nFa mba hijinjanao fifaliana.",
            "Tena mahasoa anao ny fahoriana\nMahatonga faharetana izany\nAry rah'tsy misy moa ny ady,\nAiza no hisian'izay fandresena?",
            "Hatramin'izay dia tsy mbola nisy,\nMpanaraka an'i Jesosy nafoiny\nKoa hianao izay manatrik'ady,\nMandrosoa amin'ny Anarany."
        ]
    },
    {
        "title": "TSY MORA NY LALANA",
        "number": 377,
        "chorus": "Tsia, tsy mora ny làlana\nNefa Jesosy momba anao\nKa manazava ny dia\nSy manamaivana\nIreo enta-mavesatra",
        "verses": [
            "Tsy làlana mora\n'Zao lalan-danitr'izao\nFa eo ireo tsilo, dia ny ady\nNefa ny fanatrehan'i Jesosy\nNo mampody izany ho fifaliana.",
            "Tsy làlana mora\nNy fizahan-toetra\nNa loza mety mifanena\nNefa Jesosy miaro tsy ho voaratra\nNa ho potraka an-dalana.",
            "Na dia sasatra sy mitanodrika aza\nNoho ny ady sy ny ahiahy,\nDia mbola hisy\nAndro mahafinaritra\nHitsaharana mandrakizay."
        ]
    },
    {
        "title": "TSY VERY MAINA SANATRIA",
        "number": 488,
        "verses": [
            "Ho ahy no nahaterahan'i Kristy\nHo ahy koa nanekeny ho faty;\nTsy very maina sanatria,\nNy asany tety,\nFa voavonjy aho izao.",
            "Ho ahy no nisotroiny ny kapoaka\nHo ahy no niaretany kapoka;\nTsy very maina sanatria,\nNy asany tety,\nFa sitrana ny nofoko.",
            "Ho ahy koa nitsanganan'i Kristy\nHo ahy no ifonany amin'ny Ray\nTsy very maina sanatria,\nNy asany tety,\nFa tsapako ny heriny.",
            "Ho anao koa izay nataon'i Kristy,\nKoa raiso ny anjaranao ao Aminy\nTsy very maina sanatria,\nNy asany tety,\nO! Manaton'Azy anio!"
        ]
    },
    {
        "title": "TSY VOLAMENA",
        "number": 282,
        "verses": [
            "Tsy volamena na harena be\nNo irinay mba hananana izao\nFa fahendrena ho enti-mandeha\nHo voninahitry ny anaranao",
            "Tsy miantra anay na mangoraka anay\nSatana fa maka fanahy tokoa\nKanefa na zaza aza izahay\nHandresy azy noho ny ranao soa.",
            "Midera Anao sady misaotr'Anao\n'Zahay ankizy satria raisinao\nTahio 'zahay noho ny fahasoavanao\nRy Jeso Zoky, Mpamonjy anay."
        ]
    },
    {
        "title": "VAHINY AVY ANY AN-DANITRA",
        "number": 598,
        "verses": [
            "Raha mandrahona\nNy sambotsika ny tafiotra\nDia aza matahotra ny loza misy\nAza matahotra\nFa efa naka toerana ny vahiny Iray\nTonga mba ho namana\nMba ho namana (in-2)\nFa iza moa izany Vahiny izany?\nFa iza moa? Iza moa\nTsy iza fa Jesosy avy any Nazareta, koa aza matahotra."
        ]
    },
    {
        "title": "VATOLAMPY FAMONJENA",
        "number": 381,
        "verses": [
            "Hihira am-pifaliana ho Anao aho\nRy Vatolampy famonjena ahy\nAry am-pakasitrahana\nNo hiderako Anao Jeso\nHianao Mpanjaka ambonin'ny\nrehetra.\nMihazona izao tontolo izao\nHihira am-pifaliana ho Anao aho\nRy Vatolampy famonjena ahy."
        ]
    },
    {
        "title": "VAVAKA MANDOHALIKA",
        "number": 301,
        "chorus": "O! mihirà raha mifaly ianao\nKa mivavaha raha ory\nny fanahinao;\nKa mijoroa amin'ny finoana\nFa mahita anao Andriamanitra.",
        "verses": [
            "Misy ireo andro mampifaly anao\nAo ny fotoan 'izay mampahory\nNefa aza atao hisakana anao\nMba tsy ho afaka\nNy handohalika.",
            "Nandray fitahiana,\nDerao ny Tomponao\nDia mihobia hoe: Haleloia\nAry mihirà Ilay Mpanavotra,\nNefa aoka mbola handohalika.",
            "Rehefa tojo ady be mangotraka\nKa tsy mahavanom-bavaka ianao\nMiezaha ihany handohalika\nKa hilaza fa tianao Jesosinao",
            "Ho tsapanao eo am-pandohalehana\nFa hahazo hery vaovao hianao;\nTena lehibe amin'ny Tomponao,\nIlay vavaka mandohalika."
        ]
    },
    {
        "title": "VELONA ANDRIAMANITRA",
        "number": 474,
        "verses": [
            "Voadiniko ve ny hazo an-tsaha?\nVelona Andriamanitray\nRenao ve ny siokan'ny vorona?\nVelona Andriamanitray\nNy rian-drano izay mihira ny\nFahatsaran'ny Ray\nVoadinikao ve ny hazo an-tsaha?\nVelona Andriamanitray.",
            "Tsapanao ve ny rano lalina?\nVelona Andriamanitray\nNosaininao ve ny herin'ny onja?\nVelona Andriamanitray\nAry ireo fizaran'ny taona sy asan'ny\nrivotra\nTsapanao ve ny rano lalina?\nVelona Andriamanitray.",
            "Fantatrao ve ny fitiavan'ny Ray?\nVelona Andriamanitra\nRenao mibitsika ao am-ponao ve?\nVelona Andriamanitray\nNy tànany te-hitarika anao\nSy hampionona anao\nFantatrao ve ny fitiavan'ny Ray?\nVelona Andriamanitray",
            "Aoka ny tontolo hihira hoe:\nVelona Andriamanitray\nAoka ny rehetra hiantso hoe:\nVelona Andriamanitray\nAoka ny andro mifandimby\nHanambara izany\nAoka ny tontolo hihira hoe:\nVelona Andriamanitray"
        ]
    },
    {
        "title": "VELONA HO AN'I JESOSY",
        "number": 283,
        "chorus": "Jesosy Mpamonjy ô, Inty aho\nHo Anao\nSatria nanolo-tena ho ahy taloha\nIanao;\nIanao irery no ahy, anjakao ny foko\nAtolotro ny fiainako ho Anao irery.",
        "verses": [
            "Velona ho an'ny fahamarinana\nManao izay mahafaly Azy\nMandao ny fahafinaretana\nNo làlan'ny fitahiana ho ahy.",
            "Velona ho an'i Jesosy izay\nMaty nisolo ahy tao Kalvary\nSy hanaiky ny antsony koa aho\nHanaraka ny fitarihany.",
            "Velona ho an'i Jesosy aho\nManao ny adidiko rehetra\nManaiky hiaritra ho Azy\nHitondra ny hazo fijaliako.",
            "Velona ho an'i Jesosy aho\nEto amin'ny tany mandalo;\nHitondra ireo miasa fatratra\nHahita fitsaharan'Aminy."
        ]
    },
    {
        "title": "VELONA JESOSY",
        "number": 635,
        "verses": [
            "Jesosy (in-2)\nJesosiko, Jesosy\nMaty izy (in-4)\nNitsangana Izy (in-4)\nVelona Izy (in-4)\nAzontsika ny fiainana\nAvy amin'i Jesosy."
        ]
    },
    {
        "title": "VELONA NY MPAMONJY",
        "number": 790,
        "verses": [
            "Velona, velona ny Mpamonjy\nNaneho fitiavana sy namoy aina\nVelona, velona ny Mpamonjy\nFitiavan-dehibe\n\nHira Haleloia (in-2)\nVelona ny Tompoko\nHira Haleloia (in-2)\nVelona mandrakizay",
            "Manjaka izao, Manjaka Jesosy\nNy fanavotany no naha toy izao\nManjaka izao\nManjaka Jesosy, Fahefana feno\n\nHira Haleloia (in-2)\nFa manjaka Jesosy\nHira Haleloia (in-2)\nManjaka mandrakizay",
            "Mitarika antsika ny Fanahy\nIzay mampahery sy misolo vava koa\nMitarika antsika ny Fanahy\nAn-dalamarina\n\nHira Haleloia (in-2)\nDeraina anie ny Fanahy\nHira Haleloia (in-2)\nEkena ny Fanahy"
        ]
    },
    {
        "title": "VELONA SY MANJAKA IZY",
        "number": 584,
        "verses": [
            "Nitsangana velona avy ao am-pasana\nVelona ilay Jesosiko\nTia antsika izy.\nNanaiky hofantsihina\nFantantsika: Velona Izy\nVelona Izy (in-4).",
            "Andriamanitra Mpanjaka io Jesosy io\nManana ny hery mahagaga\nNy fahafatesana\nTsy naharesy Azy.\nFa nitsangana hanjaka Izy.\nMpanjaka Izy (in-4)."
        ]
    },
    {
        "title": "VELONA SY MIASA JESOSY",
        "number": 308,
        "chorus": "Tsy tapitra akory ny andron'ny\nfinoana\nFa mbola velona sy miasa Jesosy\nAndeha re isika hanatona Azy\nindray\nFa tsy miova ny heriny.",
        "verses": [
            "Fony tety an-tany Jesosy Tompo\nDia tsy nandà izay rehetra nanaton'\nAzy\nNa lehibe na kely, noraisiny avokoa\nNanehoany ny fitiavany.",
            "Na dia hoatra ny voatsinampy aza\nmoa\nNy finoana Azy dia ambarany hoe:\nHiongotra ny hazo, hifindra ihany\nKoa ny tendrombohitra lehibe.",
            "Lehibe ny faharatran'ny fanahinao\nSarotra ny fahavoazana mahazo\nanao\nKanefa lehibe noho izany Jesosy\nIzay velona sy mahery."
        ]
    },
    {
        "title": "VERY IANAO",
        "number": 421,
        "chorus": "Very tsy manana an'i Jeso\nAny amin'ny maizina\nNahoana no tsy mody\nSy mandray an'i Jesosy ianao?",
        "verses": [
            "O! ry mpanota izay milalao\nAmin'ny onjam-pahotana\nRaha lavinao Jeso Mpamonjy\nHo ratsy ny anjaranao.",
            "Nohamavoinao ny antsony\nNankahalainao izay natolony\nMatetika koa ny Fanahy\nNo nampiomana anao.",
            "Ny ozon'ny helo miandry,\nKa mety ho any ianao anio,\nO! aoka tsy handa intsony,\nFa manatona Azy izao."
        ]
    },
    {
        "title": "VOAFANTSIKA HO AHY TEO AMIN'NY HAZO FIJALIANA IZY",
        "number": 214,
        "chorus": "Voafantsika teo amin'ny\nhazofijaliana.\nVoafantsika mba ho ahy Izy,\nVoafantsika mba ho ahy.",
        "verses": [
            "Mpamonjy izay mahagaga\nMaty teo amin'ny hazo\nNo nandrotsaka ny ràny soa\nHanafaka ny mpanota.",
            "Nandao ny voninahiny Izy\nMba hanantanterahany\nNy fikasan'ny Rainy\nTamin'ny endrik'olona.",
            "Noratraina noho ny ota\nNitondra alahelo koa\nIzy no 'lay Mpanasitrana\nNy aretina rehetra.",
            "Raha nanolotra ny ainy Izy\nHo an'izao tontolo izao\nDia lasa namboatra lapa\nAzontsika hidirana."
        ]
    },
    {
        "title": "VOATAONANAO AHO",
        "number": 265,
        "chorus": "Jesosy ô, voataonanao aho\nKanefa tsy an-tery\nFa voataona ny fitiavanao\nFitiavana mahery.",
        "verses": [
            "Hanaraka Anao aho satria\nNanafaka ahy Ianao\nHanompo Anao aho satria\nEfa nositraninao",
            "Hankalaza Anao aho satria\nNanisy soa ahy Ianao\nTsy menatra ny filazantsar'aho\nFa herinao izany.",
            "Tsy zakako ny tsy hivavaka\nHo an'ireo irakao;\nTsy haiko ny handa ny antsonao\nRah'izay no tendrinao.",
            "Manaiky aho ry Tompo izao\nHanao ny sitrakao\nAtaovy amiko 'zay fantatrao\nHampandroso ny asanao."
        ]
    },
    {
        "title": "VOAVIDY",
        "number": 429,
        "chorus": "Voavidy aho kanefa\nTsy tamin'ny volamena\nNa volafotsy koa;\nFa ny Ràn'i Jeso tao Kalvary\nNo nanavotra sy nanafak'ahy.",
        "verses": [
            "Ny ain'ny Kristy Tompo\nNo naloa hanafak'ahy\nIzy no nanavotra\nTamin'ny rà tao Kalvary.",
            "Nasandratra ny hazo\nHo hitan'ny rehetra\nHitondra ny Zanak'Ondry\nHo faty tao Kalvary",
            "Izao no fitiavany\nMaty mba ho ahy re,\nNandao ny fandrianany,\nNifidy ho eo Kalvary.",
            "Moa mba misy mahalala\nNy Hasarobidiny;\nFa ny ain'ny Mpanjaka\nNo namonjena ny very."
        ]
    },
    {
        "title": "VOAVONJY AHO",
        "number": 51,
        "chorus": "E! Voavonjy aho,\nNahazo aim-baovao,\nFiainan-tsambatra no ahy\nSatria voavonjy aho.",
        "verses": [
            "Efa nahazo sakaiza soa,\nIzay tia ahy aho;\nKoa sitrako ny hanambara\nAminao ny fahasoavany.",
            "Namonjy ahy tamin'ny ota\nMiaro koa Jesosy;\nNy sandriny no itokiako\nMitari-dalana ahy Izy.",
            "Fony nahantra irery aho,\nDia nantsoiny hoe:\n\"Mankanesa aty amiko\nFa homeko fiainana\"."
        ]
    },
    {
        "title": "VOAVOTRA",
        "number": 718,
        "chorus": "Voavoatra noho ny\nRan'ny Zanak'Ondry,\nVoavotra aho.\nNatsangany ho zanany",
        "verses": [
            "Lazaiko fa voavotr'aho\nNoho ny ran'ny Zanak'ondry;\nNomeny fanahy vaovao,\nNatsangany ho zanany",
            "Voavotra ka ravoravo\nAo amin'ny Jesosy aho\nTsy voatanisan'ny vava\nNy fahasambarako 'zao",
            "Tsy haiko atao ny mangina\nFa hihira ho Azy aho;\nNy amin'nyfitiavany no\nHohiraiko isan'andro.",
            "Inoako fa mbola hahita\nNy endriky ny Mpanjaka;\nMitafy ny voninahiny,\nSy fiandrianany aho.",
            "Inoako fa miandry ahy\nNy satroboninahitra:\nAny amin'ny lapan'ny Ray\nHodiako rahatrizay"
        ]
    },
    {
        "title": "VOHAY HO AN'I JESOSY",
        "number": 314,
        "chorus": "Vohay ho an'i Jesosy\nNy varavaran'ny fonao\nF'amin'ny andro izay\nHandaozanao izao fiainan'izao\nDia hovohany aminao koa (in-2)\nNy varavaran-danitra.",
        "verses": [
            "Maniry ho any an-danitra avokoa\nny olona\nAo ny miditr'am-piangonana,\nAo ny manao soa\nNefa tsy mandeha miendrika\nNy filazantsara.\nTsy mamoa voa mendrika\nNy fibebahana",
            "Tsara ny fahazotoana, tsara ny\nhafanam-po\nTsara koa ny mahafoy fananana\nsy herim-po;\nNefa tsy ampy 'zany raha tsy\nvoadio ny fo\nKa manàna firaisana amin'i Jesosy.",
            "Ao ny mihevitra fa tsy ratsy\nnoho ny hafa,\nIzay malaza ratsy sy azo\nolon-tanana\nManadio tena amin'ny fotaky\nny hafa\nMpanamarin-tena sy mpihatsara-\nvelatsihy.",
            "Masin'Andriamanitra ka\nmankahala ny ratsy\nTsy misy mahita Azy raha tsy\nmadio am-po;\nManana fiainana tsy mifangaro\nintsony\nAmin'ny faharatsiana sy\nny fahotana."
        ]
    },
    {
        "title": "VOHAY NY FONAO",
        "number": 306,
        "chorus": "Indro tonga Jeso\nMba hanasoa anao\nSy hanafaka anao amin'ny ota\nF'ianao vohay ny fonao.",
        "verses": [
            "Raha mandona ny varavaran'ny\nfonao\nKa maniry te-hiditra ao ny Tompo\nRaha maharitra miangavy anao Izy\nMoa ve dia holavinao?",
            "Raha avy hitondra famonjena\nho anao\nNy Mpamonjy izay atao hoe Jesosy\nTe-hanafaka anao amin'ny\ngadran' ota\nMoa tsy handray ianao?",
            "Raha hitondra fitahiana\nho anao Jeso\nSatria manan-karem-\nPahasoavana Izy\nIlay tsara sady be fitiavana\nMoa ve tsy mila ianao?",
            "Raha te-hitondra anao\nany an-danitra\n'Lay tanàna soa\nvolamena Jesosy\nAny no ho fonenana\nmandrakizay\nMoa tsy mba irinao ve?"
        ]
    },
    {
        "title": "VONJEO AHO",
        "number": 525,
        "chorus": "Jeosy ô, raiso aho!\nTsy hampanahelo Anao\nintsony aho\nRy Mpanavotra ô,\nvonjeo aho Izao.",
        "verses": [
            "Mpamonjy tia, henoy ny antsoko,\nNy antsoko, ny antsoko\nMangovitra aho manantona Anao\nVonjeo aho Tompo ô!\nNanota aho nefa nafoinao\nNy ainao, ny ainao\nNy famindram-ponao ialofako\nVonjeo aho Tompo ô!",
            "Na dia manatrika ady aza aho\nHivavaka aho, hivavaka aho\nHianao no hany làlana sy fiainana\nMaimaim-poana\nny fahasoavanao\nMaimaim-poana,\nmaimaim-poana\nMamindra fo amiko\nVonjeo aho Tompo ô!",
            "Diovy aho amin'ny Ranao,\nNy Ranao, ny Ranao\nAfaho amin'ny fahafatesana aho,\nVonjeo aho Tompo ô.\nNy finoana no ahazoana\nFamelana, famelana\nKoa mamikitra Aminao aho\nVonjeo aho Tompo ô!"
        ]
    },
    {
        "title": "VONONA AHO",
        "number": 105,
        "chorus": "Vonona aho, vonona hatrany\nSatria Jesosy re no amiko\nIzy no hany ianteherako\nFantatro izao ny fanavotany.",
        "verses": [
            "Raha nifanena taminao Mpamonjy\nNahita fiovana ny fanahiko\nNanaisotra ny tahotro rehetra\nKa niteny tamim-pahasahiana hoe."
        ]
    },
    {
        "title": "VONONA NY HANDAO NY ETO AHO",
        "number": 33,
        "chorus": "Vonon'aho handao ny eto,\nHo any amin'ny Tany soa,\nMino, miandry,\nVonon'aho handao ny eto.",
        "verses": [
            "Manana harena any ambony aho\nMino ny fitiavan'ny Mpamonjy aho\nAn'ilay Malalako any an-danitra aho,\nVonona handao ny eto aho.",
            "Matoky ny harem-pahasoavany\nAmin'ny fitsapana rehetra aho\nHahita fonenana any an-koatra aho,\nVonona handao ny eto aho",
            "Nandeha nanamboatra fitoerana\nHovantaniko ny Tompo Jesosy\nVetivety sisa no iaretako,\nVonona aho handao ny eto aho,"
        ]
    },
    {
        "title": "VONONA NY HIHAINAO ANAO NY MPANOMPONAO",
        "number": 415,
        "chorus": "Mitenenan Tompo ô (in-2)\nVonona ny hihaino Anao ny\nmpanomponao",
        "verses": [
            "Apetrako ny foko (in-2)\nHankato ny didinao mandrakizay\nDoria",
            "Efa nianiana aho (in-2)\nFa hitandrina ireo fitsipika tokoa.",
            "Fantatro fa kely aho (in-2)\nAtao tsinontsinona,\nomeo hery aho",
            "Aoka ny Fanahinao (in-2)\nTsy hoesorina amiko, 'ndrao very\naho Ray ô"
        ]
    },
    {
        "title": "ZANAKY NY MPANJAKA AHO",
        "number": 766,
        "chorus": "Zanaky ny Mpanjaka anie aho,\nMiarak'amin'i Jesosy Mpamonjy.",
        "verses": [
            "Mitana ny harena ny Raiko,\nTrano, vatosoa sy diamondra koa;\nAo ny volamena sy ny hafa,\nTsy voatanisa 'zay eo an-tanany.",
            "Ilay Lahitokana Mpamonjy\nTonga tety an-tany ho mahantra\nNefa manjaka ankehitriny ka,\nHanome trano ahy any an-danitra.",
            "Fahiny aho mpanota an-tsitrapo,\nNefa natsangana, voasoratra koa,\nKa mpandova ilay \"fonenana soa\"\nFifaliana ary satroboninahitra.",
            "Tsy ahoako ny trano 'lay ety,\nMisy ho vantaniko any an-koatra:\nNa dia ariana aza aho ety\nMbola hihira hoe:\n\"Deraina ny Tompo\""
        ]
    },
    {
        "title": "ZAVA-DEHIBE AMIKO IZY",
        "number": 479,
        "chorus": "Izy no zavatra rehetra amiko\nNy fitia, ny fiadanany anjarako doria\nMihoatra noho izay nofinofisiko;\nZava-drehetr'amiko: E! deraiko Izy.",
        "verses": [
            "Nirenireny tao anatin'ny ota aho\ntaloha\nNalahelo, reraka sady irery koa,\nMandra-panagan'i Jesosy\nahy ho Azy\nTamin'ny fahasoavany sy\nFamindram-pony.",
            "Tsy mandeha intsony amin'ny ota\naho\nIzy no Mpanamoriko sy\nMpitarik'ahy\nMitoetra ato anatiko ny Fanahiny;\nMpamonjy tia, isaorana, noh'lay tao\nKalvary",
            "Tsy hivily hiala Aminy intsony aho,\nNoho ny fitahiany soa feno\nfitiavana;\nHo toa Azy no tanjona, zava-\nkendreko,\nHo tratrariko am-bava ka\ntsy hitsahatra."
        ]
    },
    {
        "title": "ZAVA-MIAFINA AO AMIN'NY TOMPO",
        "number": 743,
        "chorus": "Aoka ny tanako hatoky ny Anao\nAoka ny dianao hitarika ahy;\nTsy mba matahotra ny ratsy aho,\nRaha mety hiaraka amiko Ianao.",
        "verses": [
            "Aoka hiara- mandeha amiko Ianao\nNa aleo hivily re ny diako\nAoka ho akaikiko Ianao Jeso\nFa tsy hitako ny làlana aleha.",
            "Lala-mandrevo no nalehako;\nNandritra ny taona maro izao\nMangataka ny fitsaharana.\nNy fo sy ny tanako izay mangovitra.",
            "Ny fahavaloko tsy afaka\nHanome ny fampitahorana;\nRaha eo anilako hatrany Ianao\nVoaharo aho n'inona mitranga ety."
        ]
    },
    {
        "chorus": "Koa mandehana amim-panetre-tena\nHo anilanao lalandava ny Tompo\nNy fanatrehany ho sarobidy\nMandà 'zay mpiavonavona Izy.",
        "number": 241,
        "title": "MANDEHANA AMIM-PANETRE-TENA",
        "verses": [
            "Tianao ny hiaraka amin'ny\nMpamonjy\nKa ho eo anilanao hatrany Izy?\nFitsipika iray no arahinao\nDia ny fanetren-tena.",
            "Toy izay nataon'i Tompo fahiny\nNiarak'amin'ireo mpaminany\nNo iarahan'i Jesosy koa\nAmin'ireo izay masina.",
            "Toy ny rano izay mikoriana\nMitady ny toerana ambany\nHo avy Izy raha tanterakao\nNy amin'ny fanetre-tena;"
        ]
    },
    {
        "number": 582,
        "title": "TOY NY ORAN-DOHATAONA",
        "verses": [
            "Toy ny oran-dohataona\nLatsaka amin'ny tany,\nNy Fanahy Masinao\nIzay mirotsaka aminay.\n(in-2)",
            "Toy ny voahary velom-bolo\nNoho ny oran-dohataona\nIzay rehetra mahatsapa\nNy asan'ny Fanahy Masina.\n(in-2)",
            "Lanitra efa azo antoka\nFanantenana tsy miova\nHo an'izay rehetra manana\nFeno ny Fanahy Masina.\n(in-2)"
        ]
    },
    {
        "number": 613,
        "title": "HANOVA NY FIAINANAO IZY",
        "verses": [
            "Nomeny hira vaovao\nSy làlana tsara kokoa\nNatolony ny fitiavany\nHo ahy sy ho anao\nRaha te-hanao hira vaovao\nAraho io làlan-tsara io\nSokafy ho Azy ny fonao\nNoho ny fitiavany.\n;;; Nomen'ny Ray ho anao Jesosy\nRaha hino Azy hatramin'izao\nHiova ny fiainanao;;;\n;;; Nomen'ny Ray ho anao Jesosy\nRaha hino Azy hatramin'izao\nHiova ny fiainanao;;;",
            "Nanome fiainam-baovao\nSy tsara kokoa ny Tompo\nNohadinoiny ireo teo aloha\nNavelany avokoa\nNomeny hira vaovao\nSy làlana tsara kokoa\nNatolony ny fitiavany\nHo ahy sy ho anao.\n;;; Nomen'ny Ray ho anao Jesosy\nRaha hino Azy hatramin'izao\nHiova ny fiainanao;;;\n;;; Nomen'ny Ray ho anao Jesosy\nRaha hino Azy hatramin'izao\nHiova ny fiainanao;;;"
        ]
    },
    {
        "number": 524,
        "title": "JESOSY NO TOMPO MAHERY",
        "verses": [
            "Deraina ny Anarany\nManafaka, mamonjy\nManao fahagagan'amin'ny tany\nSy lanitra.",
            "Ny fokom-pirenena\nHanompo Azy hatrany\nIzay masina handova ny\nFanjakan'ny lanitra",
            "Jesosy no Tompo mahery\nVelona mandrakizay\nNy fanjakany tsy ho rava\nFiandrianan-tsisy fetra"
        ]
    },
    {
        "chorus": "Ao Aminy avokoa (in-2)\nNy fahafenoan'Andriamanitra\nAo Aminy avokoa\nAo Aminy avokoa (in-2)\nJesosy Andriamanitra Tsitoha\nAo Aminy avokoa",
        "number": 376,
        "title": "JESOSY ANDRIAMANITRA TSITOHA",
        "verses": [
            "Andriamanitra Tsitoha\nAndrian'ny fiadanana\nRain'ny mandrakizay\nMpanjakan'ny hatsarana\nFeno fahendrena\nSy nanao izao rehetra izao\nHita ao amin'i Jesosy\nNy fahafenoan'Andriamanitra.",
            "Imanoela amintsika\nAndriamanitra Jehovah\nFanahy manerana izao rehetra izao\nIlay Mpisoronabe\nZanak'Ondrin'ny mpanota\nIlay nanao fanavotana\nIsaory ny Anarany.",
            "Ny fiandohana sy fiafarana\nAlfa sy Omega\nNy teny tonga nofo\nSakaizan'ny voavoatra\nFahendrena, fahatsarana,\nFahamarinako, heriko\nIzay ilaiko rehetra\nEo an-tànany avokoa.",
            "Mihiram-pifaliana\nNy fihaviany indray\nIo no Andriamanitra\nRehefa hiseho Jesosy\n'Lay Zanak'Ondry voavono\nTonga hanafaka\nIlay mandresy ny aizina\nAo Aminy ny fahafenoana."
        ]
    },
    {
        "number": 521,
        "title": "MIANTSO JESOSY",
        "verses": [
            "Miantso Jesosy k'aza lavina\nRaha te-hanaraka Azy, aza miahotra\nFa mety hihodina Izy raha\nTsy ekenao\nIzao no androm-pahasoavana",
            "Ny Tompo mihitsy, Jesosy be fitia\nFeo malefaka no iantsoany anao\nAza avela hangina na hihodina\nNdrao Izy hiala mandrakizay\nAza avela hangina na hihodina\nNdrao Izy hiala mandrakizay",
            "Raha mandondona Izy, hitondra\nindrafo\nFahasoavana sy fiadanana\nHamaha fatorana, hamela heloka\nTao an-tampon'i Kalvary.\nOmeo an'i Jesosy ny fiainanao\nDia hiova ny zava-drehetra"
        ]
    },
    {
        "number": 556,
        "title": "HO HITAKO JESOSY",
        "verses": [
            "Efa ela ny Tompo no niteny\nInoko ny fisiany sy nanolorany ainy\nTsisy fetra ny fitiavany\nJesosy no momba ahy\nFaly aho fa miaraka amiko Izy\n\nMbola ho avy ny andro iray\nHahitako an'i Jesosy\nSambatra aho\nMiara-dia Aminy\nMbola ho avy ny andro iray\nHahitako an'i Jesosy\nFiainana mandrakizay ao Aminy",
            "Ny hafaliana omeny dia tiako\nhozaraina\nTonga tety an-tany Izy\nAry maty hamonjy ahy\nTsisy fetra ny fitiavany\nJesosy no momba anao\nMifalia fa miaraka aminao Izy\n\nHo avy ny andro iray\nHahitanao an'i Jesosy\nSambatra hianao miara-dia Aminy\nHo avy ny andro iray\nHahitanao an'i Jesosy\nVelona mandrakizay ao aminao"
        ]
    },
    {
        "chorus": "Tianao koa ve hahafantatra Azy re?\n'Lay nitia ahy satria tsy lavitra izy\nraha antsoina\nHasambarana ao am-po\nFiadanana isan'andro\nNo mameno ny fiainako\nAzo Antoka fa ho sambatra aho\nMiaraka Aminy",
        "number": 567,
        "title": "MANAM-PAHASAMBARANA AO AM-POKO",
        "verses": [
            "Sambatra ao am-poko aho\nFaly isan'andro koa\n'Zay no mameno ny fiainako\nAzoko antoka fa tsy azon' olombelona esorina ao\nFa Jesosy no niditra ao am-poko\nIndray andro izay\nKa nampifaly ahy\nMitarika ahy mora Izy\nHiaraka aminy\nSambatra aho",
            "Manam-piadanana aho,\nVoavela heloka aho\nNesorin'ny Jesosy ny otako,\nMaty Izy nohomboana\nVita ny zava-drehetra ho ahy\nHihira am-pifaliana\nHilaza amin'ireo\nFa Voavonjy\nAfaka ota\nRaiso koa ny anjaranao\nFa ho tena sambatra ianao"
        ]
    },
    {
        "chorus": "Ny hany faniriako : Ianao amiko\nHanahaka Anao amin'ny fiainako",
        "number": 568,
        "title": "NY HANY FANIRIAKO",
        "verses": [
            "Ny hany faniriako : Ianao amiko\nHanahaka Anao amin'ny fiainako\nMaro no velona foana\nTsy mahalala Anao\nSaron'ny iazina lavitra\nAnao Tompo ô",
            "Samy manao izay ezaka\nHahazoam-piadanana\nNefa tsy araka ny tena fahamarinana",
            "Asehoy ny olona ny fahamarinana\nAtoroy izay tena tokony harahina",
            "Zavatra tokana no angatahiko Aminao\nNy fitarihanao amin'izay sitraponao"
        ]
    },
    {
        "number": 579,
        "title": "ASANDRATRAY NY MPANJAKA",
        "verses": [
            "Asandratray ny Mpanjaka\nNy fanjakany fahamarinana\nAsandratray ny mpanjaka\nHazonin'ny Teniny izao rehetra izao\nMahery be voninahitra Izy\nMpanjakan'ny lanitra sy ny tany",
            "Derainay ny Mpanjaka\nAnkalazainay ny Anarany\nDerainay ny Mpanjaka\nNoho ny heriny mahatalanjona\nMpandresy amin'ny ady Izy\nMpanjakan'ny lanitra sy ny tany"
        ]
    },
    {
        "number": 589,
        "title": "FAHAFENOANA AO AMIN'I JESOSY.",
        "verses": [
            "Andriamanitra no famonjena azo\nantoka\nIzy no hany Vatolampy sy fiarovana\nho ahy.\nTsy avelany hangozohozo\nFoanany ny hakiviana\nSakaiza mahafinaritra ary tsy\nmivadika.",
            "Andriamanitry ny Hery\nTompon'ny famindram-po\nNo afaka mitarika\nRaha sarotra izay aleha\nLàlan-tery feno tsilo,\nFiakarana mideza\nHiova ho hasambarana\nRahatrizay mitsahatra",
            "Feno fanantenana\nSy fifaliana ny foko\nRaha mitodika mijery\nIzay nataon'i Jesosy\nKa manolo-tena aho\nHo takalon'izany\nSatria Izy irery ihany\nNo hanome fiadanana",
            "Jesosy no Mpanolo-tsaina\nTena mahatoky\nTompon'ny tompo\nSy Mpanjakan'izay Mpanjaka\nSitrak'Andriamanitra Ray\nHitoetra ao Aminy\nNy fahafenoana sy Fahatanterahana\nrehetra"
        ]
    },
    {
        "number": 683,
        "title": "HISOTRO AMIIN'NY LOHARANON'AINA",
        "verses": [
            "Hisotro amin'ny loharanon'aina\nAo an-dapan'ny Ray, hanjaka ao\nHihinana ny mofon'aina aho\nAfa-po amin'ny fitian'i Jeso\nTena y iray isika\nMofo iray zaraina\nFamonjen'iombonana\nJesosy velona no loha.",
            "Tompo tsara ô! raisonao izahay\nHo eo anilanao ho sambatra\nTe- hidera sy hanompo Anao\nFa saro-bidy ny fanatrehanao\nNy olona rehetra\nHiadan'Aminao\nHo faly raha mahita\nAnao 'lay Tompo velona",
            "Ry olom-boavonjy avia mifaly\nNoho ny firaisana amin'ny Tomponao\nAtolory Azy ny fiainanao\nFa ho fenoiny ny fahasoavanao\nTena iray isika\nMofo iray zaraina\nFamonjen'iombonana\nJesosy velona no loha."
        ]
    },
    {
        "number": 703,
        "title": "ISAORANA NY TOMPO",
        "verses": [
            "Isaory ny Tompo\nDerao any Anarany\nLazao amin'ny firenena\nNy asa vitany,\nMihirà ka derao Izy\nLazao amin'ny rehetra ny asany,\nVoninahitra ho an'ny Anarany\nAoka ny rehetra hankalaza Azy."
        ]
    },
    {
        "number": 749,
        "title": "ANDRIAMANITRA DIA MAHAVONJY",
        "verses": [
            "Na amin'ny afo izay mandoro\nNa amin'ny lavaky ny liona\nDia matoky 'lay Mahery izahay\nNy Andriamanitray dia mahavonjy\n(in-2)",
            "Na mamely mafy koa ny tafiotra\nSady mierona ny fahavalo\nDia matoky 'lay mahery izahay\nNy Andriamanitray dia mahavonjy\n(in-2)",
            "Mety hisy koa fizahan-toetra\nKa toy ny ilaozan'ny olon-drehetra\nNefa matoky 'lay\nMahery Izahay\nNy Andriamanitray dia mahavonjy\n(in-2)",
            "Mbola ambaranay amin'ny rehetra\nAtao antso avo tsy misy fetra\nFa matoky ilay Mahery izahay\nNy Andriamanitray dia mahavony\n(in-2)"
        ]
    },
    {
        "number": 770,
        "title": "MIFANKATIAVA",
        "verses": [
            "Aoka ho fantatry ny olona ny fandeferanareo\nEfa mby akaiky ny Tompo Haleloia\nHoy Jesosy \"Mifankatiava tahaka ny nitiavako anareo\"\nEfa mby akaiky Izy, Amen, Haleloia!"
        ]
    },
    {
        "number": 800,
        "title": "ANDEHA HIHIRA",
        "verses": [
            "Andeha hihira hoe:\nJesosy no Mpamonjy\nTena tia tokoa ka mitarika\nHo any an-danitra.\nIzy no sakaizako\n'Zay tsy manampaharoa\nManome toky fa tsy handao\nAn'ireo Azy mandrakizay."
        ]
    },
    {
        "number": 785,
        "title": "JESOSY ILAY MPAMONJY",
        "verses": [
            "Jesosy ilay Mpamonjy mamiko\nIzy no efa nanasa ny foko,\nVoavela helok'aho noho ny anarany\nNentiny ireo entako, voavonjy aho\nKoa irinao ve hanam-pifaliana?\nAndrandrao ka jereo Golgota.\nDia hiarak'amiko hidera ny Tompo\nIanao ka hihira hoe: Haleloia!"
        ]
    },
    {
        "chorus": "Feo1:\nJereo efa masaka hojinjaina,\nNy eny an-tsaha\nMandehana mirotsaka hijinja,\nKa miasà ho an'i Jesosy,\nMiàsa re raha mbola mazava\nny andro.\n\nFeo 3\nJereo efa masaka ho jinjaina,\nNy vokatra izay eny an-tsaha,\nKoa faingana ka mirotsaha\nHijinja ianao,\nFa tsy very maina\nNy fikelezan'aina atao;\nMandehana mirotsaka mijinja,\nKa miasa ho an'i Jesosy,\nMiàsa re raha mbola mazava\nny andro.",
        "number": 775,
        "title": "EFA MASAKA HO JINJAINA",
        "verses": [
            "Indro efa masaka ho jinjaina,\nIreo vokatr'izay eny an-tsaha\nNa dia vitsy aza\nny mpijinja ny vokatra,\nMahafaly ny manatontosa ny asa\nFaingana, hararaoty ny fotoana\nHo avy ny rivotra hanimba,\nIreo vokatra efa milonjehatra",
            "Ny nofinofy mandany andro\nOlona hiasa no ilaina\nRaha vao maraina koa\nDia miasà amin'ny herinao\nRehetra ho an'ny Jesosy;\nAzo antoka ny valisoa\nTena saro-bidy 'zay omeny\nKoa mazotoa hiasa ho an'i Tompo.",
            "'Reo voa saro-bidy eny an-tsaha\nDia mila ny tànanao hiasa;\nHo samba tokoa ireo,\nRaha tsy manaiky ianao;\nHijinja, hanangona, hitaona azy koa,\nAndeha torio ny Filazantsara,\nAny amin'ireo tsy mahalala;\nMiàsa re raha mbola mazava\nny andro."
        ]
    },
    {
        "number": 773,
        "title": "ENDREY MASOANDRO",
        "verses": [
            "Endrey masoandro baliaka\nMamitratr'ato anatiko, Haleloia!\nMazava ny foko izao\nKa dia velon-kir'andalan'aho"
        ]
    },
    {
        "number": 771,
        "title": "HO SATROHAM-BONINAHITRA",
        "verses": [
            "Ho satroham-boninahitr'aho\nAmin'ny farany (in-3)\nHo satroham-boninahitr'aho\nAmin'ny farany, any an-danitra\nKa ho sambatra re (in-2)\nHo satroham-boninahitr'aho\nAmin'ny farany, any an-danitra."
        ]
    },
    {
        "number": 768,
        "title": "MANGETAHETA ANAO",
        "verses": [
            "Mangetaheta aho, ny fanatrehanao\nManiry Anao aho Jeso ô!\nMialoha ahy Hianao, manoro làlana ahy\nRaiso ny tanako, tantanonao aho\nRy Fanahy Masina ô! Midina re hamelombelona ahy\nVohaiko ny fo, fa tia ahy Hianao\nVonona aho ny handray Anao."
        ]
    },
    {
        "number": 763,
        "title": "RAHA MIJERY AZY ISIKA",
        "verses": [
            "Raha mijery Azy isika\nRaha mijery Azy isika \nDia feno fifaliana \nDia feno fifaliana \nDia\nFeno\nFifaliana"
        ]
    },
    {
        "number": 761,
        "title": "DERAO ANDRIAMANITRA",
        "verses": [
            "Derao Andriananahary\nDerao Jeso Mpanavotra\nDerao ny Fanahy Mpampionona\nHaleloia (in-3)"
        ]
    },
    {
        "number": 756,
        "title": "HO AN'IZAY TIA ANTSIKA",
        "verses": [
            "Ho an'izay tia antsika\nNandrotsaka ny rany\nMba hamahany ny fatorantsika\nAry nanao antsika ho tena\nFanjakana Mpisoron'\nAndriamanitra Rainy\nHo azy anie ny voninahitra\nSy ny hery, fahefana\nMandrakizay (in-2). Amen (in-2)."
        ]
    },
    {
        "number": 750,
        "title": "ILAIKO NY HOSOTRAO",
        "verses": [
            "Fenoy ny fitiavanao aho\nAlenteho lalina ny fifalianao\nTondrahy ny efitry ny efitry ny aiko\nAmin'ny Fanahy Masinao\nAfaka hetaheta ny aiko\nRaha manarona ahy ny hosotrao\nHavaozinao aho dia sitrana\nRaha manarona ahy ny hosotrao"
        ]
    },
    {
        "chorus": "Nolazaina fa izay mandeha\nDia toy ny maty\nFa ny mitady ny Tompo\nMahazo fiainana\nIzay mandeha toy ny maty (in-2)\nFa ny mitady ny Tompo\nMahazo fiainana.",
        "number": 650,
        "title": "IZAY MITADY NY TOMPO",
        "verses": [
            "Nolazaina fa izay mandeha\nDia toy ny maty\nFa ny mitady ny Tompo\nMahazo fiainana\nIzay mandeha toy ny maty (in-2)\nFa ny mitady ny Tompo\nMahazo fiainana.\n\nHianao mila andriamanitra nefa\ntsy afa-po\nManodidina anao feno sampy\niankohofanao\nManolotra aina sy zanaka\nHo an'andriamanitra lian-drà\nAza lavina ny bitsika ao am-ponao\nIndray andro izay\nRaha teo am-pitadiavana\nNanapaka ny fatorana tamin'ny loza\nSatria nisy feo mibitsika\nao am-ponao:\nHitahy anao aho\nSy hahalehibe ny anaranao.",
            "Dia nino hianao\nNa dia tsy ho niteraka\nRaha nandre ilay feo hoe:\nIsao ny kintana.\nHo maro anaka hianao\nSy ho rain'ny mino koa.\nDia 'zay toa anao\nMihaino ny feo ao am-po\n'Lay Andriamanitra velona\nMiteny aminao hanome zanaka\nNa tsy nantenainao\nRaha angatahiny aminao\nny lahitokanao\nHo fantatrao ny Tompo irery\nHitantana, hameno ny fonao."
        ]
    },
    {
        "chorus": "Hazofijaliana mamiko (mamiko io)\nMandra-pisehon'ny fandreseko,\nHofikiriko io fa hiova (ho)\nSatro-boninahitra ho ahy.",
        "number": 505,
        "title": "ILAY HAZOFIJALIANA FAHAGOLA",
        "verses": [
            "Teo an-kavoana iray,\nany lavitra any\nNisy hazofijaliana\nMampiseho fahoriana\nsy henatra io\nTeo no namonoana ny Tompo.",
            "He! Hazo faneson'izao tontolo izao\nNefa zavatra maninton'ahy\nFa ny Zanak'ondrin'Andriamanitra\nNitondr'izany tao Kalvary.",
            "Jeso Tompo nijaly sy maty ho ahy\nHanamasina sy hamela ahy,\nTamin'ny Ràny masina teo amin'ny\nHazofijaliana Fahagola.",
            "Ho marina hatrany amin'ilay\nHazofijaliana aho satria,\nNentiny ny lasa, ka voninahitra\nHozarainy miarak'amiko."
        ]
    },
    {
        "chorus": "Ny feoko asandratro\nHidera ny anaranao\nLehibe ny fitiavanao\nHifaly aho!\nTs'isy afa-tsy Ianao\nAto amiko\nIzaho Aminao\nlehibe ny fitiavanao\nHifaly aho! Hifaly aho (x2)\nHiravo aho (x2)\nHifaly aho(x2) \nHiravo aho\nHifaly aho(Fifaliako Ianao)\nHiravo aho (Ianao no heriko)\nHifaly aho (Fiadanako Ianao)\nHiravo aho!",
        "number": 811,
        "title": "HIFALY AHO",
        "verses": [
            "Fifalianao fifaliako\nHerinao heriko\nFenoy hira fiderana ny foko\nFiadananao fiadanako\nLalanao lalako\nAvia Jeso!\nHameno ahy anio"
        ]
    },
    {
        "chorus": "Hanandrandra\nAnao aho Jeso\nKa dia matoky Anao\nSarobidy Ianao sady\nBe fahasoavana",
        "number": 810,
        "title": "MAHATOKY JESOSY",
        "verses": [
            "Mamy tokoa ny matoky\nAn'i Jesosy Tompo\nMihazona Azy amin'ny\nTeniny nolazainy",
            "Mamy ny mitoky Aminy\nMahadio\nHandray fanasitranana\nIreo izay mino Azy",
            "Mampitsahatra ny ota\nNy fahatokiana Azy\nFifaliana sy Fiadanana Izy",
            "Faly aho, fa mianatra ny\nMatoky an'i Jeso\nMpamonjy Sakaiza ary\nFiainana no anay Izy"
        ]
    },
    {
        "chorus": "Toy ny fanilo mitsilo\n'Reo zanakao\nNy fitiavanao mitarika izany ho tody soa\n(in-2)",
        "number": 809,
        "title": "TOY NY FANILO",
        "verses": [
            "Raha tsy eo Ianao Tompo ô!\nInona no hataonay?\nVery izahay\nAo anatin'ny zavona\nRaha tsy eo Ianao Tompo ô!\nAiza no halehanay\nRaha tsy eo Ianao\nTsy hita fetra ity ranobe!",
            "Raha tsy eo Ianao Tompo ô!\nHo aiza moa izahay?\nMirenireny\nTsy mahita làlan-kaleha\nRaha tsy eo Ianao Tompo ô!\nInona no hataonay?\nIza no handray, ho henoinay\nRaha tsy eo Ianao?",
            "Raha tsy eo Ianao Tompo ô!\nHo aiza moa izahay?\nRaha tsy eo Ianao\nTsy hita fetra ity ranobe!"
        ]
    },
    {
        "chorus": "Izay mino ani Kristy\nDia tena iray ao Aminy\nIzay mio an'i Kristy\nDia tena iray ao aminy",
        "number": 808,
        "title": "TENA IRAY",
        "verses": [
            "Izay mino ani Kristy\nDia tena iray ao Aminy\nIzay mio an'i Kristy\nDia tena iray ao aminy\n\nNitondra hazavana\nJesosy 'Lay Mpamonjy\nKa ny fankahalana\nTena fahavalony",
            "Ndao hiray saina\nHanohitra ny ota\nNy Ràny mahery\nMandresy ny devoly",
            "Andeha hanambatra\nNy hery isika\nNy filazantsara\nNo asandratsika"
        ]
    },
    {
        "chorus": "Ao amin'i Jesosiko\nNo ananako fo feno fitiavana\nNy tanany isan'andro\nNo ifikirako ka mamonjy ahy",
        "number": 807,
        "title": "AO AMIN'I JESOSIKO",
        "verses": [
            "Ny Tompoko no manoro ahy \nIzay làlana met izorako\nFa Izy no herin'ny Fanahy\nKa manohana ahy\nMba tsy ho lavo"
        ]
    },
    {
        "number": 805,
        "title": "TANY LAVITRA ANY",
        "verses": [
            "Tany lavitra any\nTao an-tranon’omby\nNo nahaterahan’Ilay\nJesosy kely\nNy kitana nijery Azy\n Natory teo\nAmbonin’ny vilona\nMbamin’ny mololo",
            "Ry Tompo Jesosy ô!\nTiako Ianao\nTsinjovy avy\nEny ambony eny aho\nMijanona eto anilan’ny fandriako\nMandra-piposaky \nNy maraina indray",
            "Mangataka aho Tompo\nMivavaka Aminao\nAnkaikezo hatrany\nAry tiavo aho\nTahio izahay mba ho zaza tsara\nSy ho mendrika ny ho\nAny an-danitra"
        ]
    },
    {
        "chorus": "Hosana (2)\nHo an’Ilay Zanak’Onry\nHosana (2)",
        "number": 804,
        "title": "HOSANA",
        "verses": [
            "Ny malemy aoka hatanjaka\nNy mahantra aoka hahiratra\nZany no asan’ny Tompo tamiko",
            "Voadiony ireo otako\n‘Zay toy ny fota-mandrevo\nIndrafo avy any an-danitra\nNarotsaky ny Tompo ho ahy",
            "Natsagan’Andriamanitra\nAnatin’ny lalina aho\nHikalo hiram-pamonjena aho\nJeso Kristy nanafaka ahy"
        ]
    },
    {
        "number": 803,
        "title": "TE HIHAONA AMINAO AHO TOMPO O!",
        "verses": [
            "Eo amin’ny Ranonao no alehako\nHitondra ‘reo ota tsy voaloako\nAvia diovy aho\nMamela ahy\nTe hihaona Aminao aho\nTompo ô!",
            "Eo amin’io Rano io\nNo mikoriana\nFanasitranana sy Famindram-po\nAry fahafahana\nKoa manantona aho\nTe hihaona Aminao eo\nTompo ô!",
            "Avia ho namanay\nAmin’io Rano io\nFidio fa fiainana\nTsy manam-paharoa\nMiantso Izy\nMiandry Izy\nTe hihaona aminao Jeso"
        ]
    },
    {
        "chorus": "Andininy 1 sy 2 :\n\nHenoy ny foko\nSy ny fanahiko\nNy feon'ny zanakao\nIzay midera Anao\nTsy hain'ny vavako Tompo ô!\nNy manambara ny hatsaranao\nSy ny milaza ny fitiavako!\nHenoy ny foko!\n\nAndininy 1 sy 2 :\n\nHenoy ny fonay\nNy fanahinay\nNy feon'ireo zanakao\nIzay midera Anao\nTsy hain'ny vavanay Tompo ô!\nNy manambara ny hatsaranao\nSy ny milaza ny fitiavanay Anao\nHenoy re ny fonay",
        "number": 812,
        "title": "HENOY NY FOKO",
        "verses": [
            "Tsy haiko hazavaina\nTsy ho voasoratro\nFa lehibe Tompoô!\nNy fitiavanao ahy!\nFantatrao tokoa ny ao anatiko ao\nFa tsy ampy ireo teny 'zay hitoriako\nNy fitiavako Anao!",
            "Henoy Tompo ô!\nZay ao am-poko ao\nManeho fankasitrahana\nIsan'andro isan'andro\nMisaotra Anao ao Tompo\nAvy ao am-poko ao\nNy amin'ny làlana sy fahamarinana\nAry fiainana",
            "Fantatrao tokoa\nNy ao am-ponay ao\nFa tsy ireo teny hitorianay\nNy fitiavanay Anao"
        ]
    },
    {
        "chorus": "Haleloia (x7)",
        "number": 813,
        "title": "FIDERANA MAMY",
        "verses": [
            "O! ry olomboavonjy hirao ny fiderana\nHaleloia\nNoho ny fampindrapony\nVenteso ny Hosana\nHaleloia, haleloia",
            "Mendrik’ho deraina Izy \nnoho ny asany \nHaleloia\nMbamin’ny soa nomeny\n sy ny fitiavany\nHaleloia , Haleloia",
            "Fiderana tena mamy\nMahafinaritra\nHaleloia\nHaleloia et an-tany\nHatrany an-danitra\nHaleloia , Haleloia"
        ]
    },
    {
        "chorus": "Ny fifaliana nomen’I Jesosy\nDia nahatong’ahy ho mpandresy\nMitafy hery aho ka afa-tahotra\nNahazo fifaliana maharitra",
        "number": 814,
        "title": "NAHAZO FIFALIANA",
        "verses": [
            "Fahatsapana iray no tsapako\nFony aho nandray an’I Jesosy\nHo Tompo sy Mpanjakako\nFa ny zava-drehetra dia niova avokoa\nNisolo fifaliana ireo alaheloko",
            "Tsy nanam-pifaliana\nMarin’aho teo aloha\nF’indraindray mihomehy nefa malahelo ny fo\nNarahiko izay nojeren’ny masoko\nKinanjo fandrika sy zava-poana tsy mahasoa",
            "Tsy misy fifalina azo antoka ety\nRaha mbola tsy manana ny \nFanahin’I Jesosy\nEo anatrehany, eo no anovozana\nNy tena fifaliana mahafapo ny sasatra",
            "Manome fifaliana isan’andro ny Tompo\nKa miantso hoe: Avia izay rehetra hisotro\nTsy vidina izany fa maimaimpoana\nKoa manatona izay mangetaheta sy noana"
        ]
    },
    {
        "chorus": "Manaiky Jesosy,\nManaiky hamonjy anao\nManaiky hanome ‘zay ilainao\nRehetra Jesosy",
        "number": 815,
        "title": "MANAIKY JESOSY",
        "verses": [
            "Iza no hamindra fo?\nJesosy, Jesosy\nSy hamela heloka\nJesosy re! Jesosy",
            "Iza no hanavotr’ahy\nJesosy, Jesosy\nIza no hanadio ahy?\nJesosy re! Jesosy",
            "Iza no hanafak’ahy?\nJesosy, Jesosy\nAmin’ireo tahotro\nJesosy re! Jesosy",
            "Iza no Sakaizako?\nJesosy, Jesosy\nHitia ahy mandrakizay\nJesosy re! Jesosy"
        ]
    },
    {
        "number": 816,
        "title": "IZAO NO EZAKAY",
        "verses": [
            "Hampionona fo\nHampifaly koa\n‘Zany no ezakay\nIaraka izahay\nHitady ny very\nMangatsiak’irery\nHampody amin-joto\n‘Reo ho an’ny Tompo",
            "Miaraka sy miray\nHanasoa ‘zahay\nNy Anaran’ny Tompo\nHanarin-davo\nHo malala-tànana\nAmin-tsy manana\n‘Zay no toetra ho anay\nDidy aminay",
            "Mandeha izahay\nMatoky ny Ray\nMibanjina tokoa\nFampanan-tenan-tsoa\nVoninahitra\n Trano mamiratra\nRaisin’ny Mpamonjy\nHiadana doria"
        ]
    },
    {
        "chorus": "Tompo ô! Ataovy mba ho fitahiana ny fiainako\nAmpiasao hanampy ny hafa izay tsy voavonjy",
        "number": 817,
        "title": "ATAOVY FITAHIANA AHO",
        "verses": [
            "Tsy haiko ny hifidy ny làlana aleha\nKa ilaiko ny Tompo ho mpitarika ny diako",
            "Maro ny mpaniratsira, tsy vonon’hankato\nNef’ampiasao aho hambabo azy ‘reo mba ho Anao",
            "Misy ireo nanandrana ny fahatsaranao\nNefa nivily làlana ka efa lasa lavitra",
            "Mila fandresena ireo ao anaty ady\nJesosy no ilainy hamaha ‘zay fatorany",
            "Raha misy asa atao vonon’aho hankato\nHanao ny sitraponao; ataovy fitahiana aho"
        ]
    },
    {
        "chorus": "Azy ianao (in-2)\nAn’I Jesosy ianao\nN’inona n’inona hanjo\nNa ho ratsy na ho soa\nAza taitra fa ef’Azy ianao",
        "number": 818,
        "title": "AZY IANAO",
        "verses": [
            "Rehefa nomenao an’I Jesosy ny fiainanao\nKa Izy no miara-dàlana aminao\nMahatoky sady marina Izy ka hiaro anao\nEty an-tany fivahiniananao",
            "Toy ny ondry very sy nirenireny ianao\nNefa notadiaviny ka hitany\nTsymba nolatsainy f nataony an-tsorok’ianao\nTonga antoky ny fifaliany",
            "Raha te-hahazo antoka ny fitiavany\nDia saino kely indray Kalvary\nF’efa an-jato taon amaro lasa no natolony\nHo fanavotan’anao ny tenany",
            "Tsarovy fa olona nisahiranany ianao\nNanaovany ny ainy tsy ho zavatra\nIzy no namorona anao ka Azy ianao\nDia ny ho tonga any an-danitra"
        ]
    },
    {
        "number": 819,
        "title": "MISY ZAVA-TSOA AO AMIN’NY JESOSY",
        "verses": [
            "Misy zava-dehibe tsapako\nAo amin’ilay Jesosiko\nFa hatrizay nahitako Azy\nVoalamina tokoa ny fiainako\nRaha te  ho faly ianao \nSy hiravoravo\nAndramo , ho hitanao\nFa mis zava-tsoa \nAo amin’I Jesosy Tompoko"
        ]
    },
    {
        "number": 820,
        "title": "ZAVATRA IRAY NO HANY FANTATRO",
        "verses": [
            "Zavatra iray no hany fantatro\nNitady ahy Jesosy\nVery aho fa hitany indray\nBabo aho kanefa nafahany\nZava-mahagaga\n"
        ]
    },
    {
        "chorus": "Sambatr’aho satria tian’ny Mpamonjy\nMampifaly ahy isan’andro Izy\nSambatr’aho satria tian’ny Mpamonjy\nHotoriako ny fitiavany",
        "number": 821,
        "title": "MANAM-PIFALIANA",
        "verses": [
            "Manam-pifaliana ato am-poko aho\nFifaliana, fifaliana\nManam-pifalina, fifaliana ato am-poko aho\nDerao ny Tompo",
            "Manam-piadanana, fiadanana ato am-poko aho\nFiadanana, fiadanana\nManam-piadanana, fiadanana ato am-poko aho\nDerao ny Tompo",
            "Manam-pitiavana, fitiavana ato am-poko aho\nFitiavana, fitiavana\nManam-pitiavana, fitiavana ato am-poko aho\nDerao ny Tompo"
        ]
    },
    {
        "number": 822,
        "title": "TIANAO HO FANTATRA VE?",
        "verses": [
            "Tianao ho fantatra ve\nNahoana aho no sambatra?\nNahoana aho no mihirahira sy falifaly?\nSatria nesorin’I Jesosy ny fahotako\nKa monin’ato am-poko izy hatramin’izay",
            "Tinanao ho fantatra\nNahoan’aho no ravoravo\nMidera ny Tompo hatrany ho : Haleloia!\nSatria nesoriny ny tahotra nameno ahy\nKa nosoloiny fitiavana hanompo Azy"
        ]
    },
    {
        "chorus": "Sambatra,sambatra\nNony voavonjy aho dia sambatra\nSambatra, sambatra\nEny mahatsiaro tena sambatr’aho",
        "number": 823,
        "title": "MAHATSIARO SAMBATRA AHO",
        "verses": [
            "Tsaroako ‘reo andro nolaniako tamin’ny ota\nTsy nosainiko hanaovana ny soa\nNefa hitan’ny Mpamonjy aho\nKa nentiny mba hody\nKa miantso hoe: Haleloia sambatr’aho",
            "Mizotra ho any an-danitra ny diako izao\nKa velonk’hir’eny am-pandehanana aho\nFa voasoratr’ao amin’ny bokiny ny anarako\nKa mahatsiaro hoe : Haleloia sambatra aho",
            "Raha hifarana ny diako ka ho tody soa ao\nAmin’ilay toeram-pifaliana\nHiditr’ao an-tanàna ka hahita an’I Jesosy aho\nKa mahatsiaro hoe: Haleloia sambatr’aho"
        ]
    },
    {
        "chorus": "Mijere an’I Jeso\nDia ho velon’ianao\nHafatra omen’anao (Haleloia)\nMijere an’I Jeso izao",
        "number": 824,
        "title": "MISY HAFATRA HO ANAO",
        "verses": [
            "Misy hafatr’ho anao (Haleloia)\nAvy amin’ny Tomponao\nVoasoratr’ho anao (Haleloia)\nDia ampitaiko aminao",
            "Misy hafatr’ho anao (haleloia)\nAvy any an-danitra\nNolazain’I Jesosy (Haleloia)\nMarina tsy misy fitaka",
            "Omeny fiainana (Haleloia)\nMandrakizay ianao\nKoa mijere Azy (Haleloia)\nDia ho voavonjy ianao"
        ]
    },
    {
        "chorus": "Na iza n’iza mangetaheta\nAok’hanatona ny Mpamonjy izao\nFitiavany no hiantso’ireo mania\nMba hody an-tranon-dRay",
        "number": 825,
        "title": "NA IZA NA IZA MANGETAHETA",
        "verses": [
            "Torio ny vaovao mahafaly\nHo ren’ny olon-drehetr’eran-tany\nAmbarao f’izay mangetaheta\nDia ho afa-po tokoa",
            "Torio re na  aiza na aiza\nToerana mety misy olona\nHo ren’izay afaka mihaino\nJesosy no Mamonjy",
            "‘Zay mety aza mitarendretra\nF’izao no mivoha ny varavarana\n‘Zay fotoana mety hidirana\nJesosy no Làlana",
            "Marina ny tenifikasany\nKoa manana faharetana ianao\nMandrakizay ny any an-danitra\nMandrosoa ‘zay vonona"
        ]
    },
    {
        "chorus": "Lasa avokoa ‘reo zavatra taloha\nIndro fa tonga vaovao ireo\nNamonjy ahy Jeso nanafak’ahy\nNy fahasoavany nanova ahy",
        "number": 827,
        "title": "EFA LASA NY ZAVATRA TALOHA",
        "verses": [
            "Fahasoavana mahagag’ahy\nNy famonjena ‘zay\nMaminin’ny fo\nLasa avokoa ‘reo zavatra taloha\nKa indro tonga vaovao ireo",
            "Nanendry ny foko ny fanahy\nKa nahaizako ny mitalaho\nAmin’ny anaran’I Jesosy\nHany Anarany manan-kery",
            "Sakaiza mamiko tokoa Jeso\nKa izay sitrany no mamiko\nDia fifaliako ny hahita\nNy tavany mandrakizay doria"
        ]
    },
    {
        "chorus": "Iriko honin’ao\nAmin’ilay lapa soa\nNatokany ho ahy\nIzay feno voninahitra",
        "number": 828,
        "title": "HANAM-BONINAHITRA TSY HO ELA",
        "verses": [
            "Nandeha nanambotra fitoerana\nAny an-danitra ny Tompo\nFonenam-pitsaharana mba ho ahy sy ho anao\nMiarak’amin’ireo voavotra",
            "Tsy mamatotra ahy ny harena\nEto amin’ity tany ity\nAny amin’io tanàna soa ion y hareko\nKa mandroso ho ao ny diako",
            "Hankalaza ny Tompoko aho\nHanakoako ny hirako\nVetivety dia hahita ‘lay voninahitra\nIzay honenako mandrakizay"
        ]
    },
    {
        "chorus": "Ny fifaliana mateza\nMahafapo dia omeny\nHitako ao Aminy ko\nNy zavatra rehetra",
        "number": 829,
        "title": "NY ZAVATRA REHETRA AO AMIN’NY JESOSY",
        "verses": [
            "Mitady izay hampifaly ny fo\nAmin’ota sy ‘zao fiainana izao\nIzaho sy ianao ry sakaiza\nHita ao amin’I Jesosy anefa",
            "Torotoron’alahelo ianao\nVesaran’entana koa ny fonao\nNefa Jeso vonona hanampy anao\nRaha mibebaka am-panetren-tena",
            "Tsy misy anaran mahavonjy\nAfa-tsy ny anaran’I Jesosy\nIzay hahazoam-pamelan-keloka\nAry manasitrana ny ratram-po"
        ]
    },
    {
        "number": 826,
        "title": "IRIKO NY HO MPIANATRAO",
        "verses": [
            "Iriko ny ho mpianatrao\nHitsangana noho ny antsonao\nHandao ny harato hatramin’izao\nKa hanaraka Anao (hanarak’Anao)",
            "Iriko ny hankalaza Anao\nHitory ny voninahitrao\nAmboary eo ambavako Tompo ô!\nNy fiderana Anao (fiderana an’Anao)",
            "Iriko ny ho mpanomponao\nHanaiky ny ho fanirakao\nNa kely sy bitika aza aho\nDia tsy ho lavinao (tsy ho lavinao)"
        ]
    },
    {
        "chorus": "Miomana hihaona\nAmin’Andriamanitra ianao\nTahotra no hihaonan’ireo izay tsy vonona",
        "number": 830,
        "title": "MIOMANA HIHAONA AMIN’ANDRIAMANITRAO",
        "verses": [
            "Ry fanahy mirenireny niala tamin’ny Tompo\nTsy renao ve ny fampitandremana manao hoe:",
            "Nahoana no tsy mihevitra ny hiverina ianao?\nMandeha faingana ny taona, mihelina ny andronao:",
            "Tsy renao ve ny feon’ireo namanao, mitaona anao?\nManiry ny soa hoa anao, mampahatsiahy anao",
            "Handao anao ny Fanahy raha lavinao ‘lay antso\nToeran-dratsy sy haizina no hisy ny maditra"
        ]
    },
    {
        "chorus": "Amin’ny andro (derao)\nHiaviany (tantarao)\nHahita ny Mpanjak’isika (haleloia)\nHo avy amin-kery sy voninahitr’Izy\nDia hahita Azy isika",
        "number": 831,
        "title": "HAHITA NY MPANJAKA ISIKA",
        "verses": [
            "Ho avy tsy ho ela any fotoana\nMety ho andro na ho alina\nIzay hiavian’ny mpampakatr’antsika\nDia hahita Azy isika\n",
            "Moa efa vonona ve ianao\nRaha miantso anao Izy izao\nMba hiteny ve Izy hoe: Tsara izany\nSa “miala amiko ianao”",
            "Ho satroham-boninahitra Izy\nRehefa tonga ety an-tany:\nHo rava ny fanjakana rehetra nisy\nRehefa hiverin’Izy"
        ]
    },
    {
        "chorus": "Mahery Izy, Tsy resy Izy\nNa ireo fahefana\nNa ny fahafatesana\nManaiky ny heriny\nTena Avo indrindra Jesosy",
        "number": 806,
        "title": "TSY RESY IZY",
        "verses": [
            "Tsy misy olana sarotra tsy voavaha\nRehefa entina eo amin'i Jesosy\nKoa mivavaha, eo Izy dia miresaha\nManetre-tena ka ialao ny ratsy\n",
            "Ho avy hamarana izao rehetra izao\nNy Mpitsara sy Mpanjakan'ny mapanjaka\nHo avy hanadratra ireo izay niaritra\nNanaja ny Tenin'Andriamanitra"
        ]
    },
    {
        "number": 424,
        "title": "AMORONY FO MADIO",
        "verses": [
            "Amorony fo madio\nAho Andriamanitr'ô (in-2)\nAry havaoz' hiorina marina\nNy fanahiko ato anatiko.\nTsitako izay haleha\nTsinotsinona anie aho\nNy Tananao\nNo ilaiko itantana ahy;\nNy Tanana\nNo ilaiko\nItantana ahy."
        ]
    }
]);
//# sourceMappingURL=songs-list.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    // Avoid multiple instances running: 
    if (window.hasRun === true)
        return true;
    window.hasRun = true;
    var CONTAINER = document.documentElement || document.body;
    // Api key is passed from extension via message
    var API_KEY = localStorage.getItem("sadCaptchaKey");
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.apiKey !== null) {
            console.log("Api key: " + request.apiKey);
            API_KEY = request.apiKey;
            localStorage.setItem("sadCaptchaKey", API_KEY);
            sendResponse({ message: "API key set.", success: 1 });
        }
        else {
            sendResponse({ message: "API key cannot be empty.", success: 0 });
        }
    });
    var CREDITS_URL = "https://www.sadcaptcha.com/api/v1/license/credits?licenseKey=";
    var ARCED_SLIDE_URL = "https://www.sadcaptcha.com/api/v1/temu-arced-slide?licenseKey=";
    var THREE_BY_THREE_URL = "https://www.sadcaptcha.com/api/v1/temu-three-by-three?licenseKey=";
    var PUZZLE_URL = "https://www.sadcaptcha.com/api/v1/puzzle?licenseKey=";
    var SEMANTIC_SHAPES_URL = "https://www.sadcaptcha.com/api/v1/semantic-shapes?licenseKey=";
    var TWO_IMAGE_URL = "https://www.sadcaptcha.com/api/v1/temu-two-image?licenseKey=";
    var API_HEADERS = new Headers({ "Content-Type": "application/json" });
    var ELEMENTS_INSIDE_CHALLENGE_SELECTOR = "#Picture *";
    var ARCED_SLIDE_PUZZLE_IMAGE_SELECTOR = "#slider > img";
    var ARCED_SLIDE_PIECE_CONTAINER_SELECTOR = "#img-button";
    var ARCED_SLIDE_PIECE_IMAGE_SELECTOR = "#img-button > img";
    var ARCED_SLIDE_BUTTON_SELECTOR = "#slide-button";
    var ARCED_SLIDE_UNIQUE_IDENTIFIERS = [".handleBar-vT4I5", ".vT4I57cQ", "div[style=\"width: 414px;\"] #slider", "div[style=\"width: 410px;\"] #slider"];
    var PUZZLE_BUTTON_SELECTOR = "#slide-button";
    var PUZZLE_PUZZLE_IMAGE_SELECTOR = "#slider > img";
    var PUZZLE_PIECE_IMAGE_SELECTOR = "#img-button > img";
    var PUZZLE_SLIDER_WRAPPER = "[class^=slider-wrapper]";
    var PUZZLE_UNIQUE_IDENTIFIERS = ["#Slider"];
    var SEMANTIC_SHAPES_CHALLENGE_TEXT = ".picture-text-2Alt0, div._2Alt0zsN";
    var SEMANTIC_SHAPES_IMAGE = "#captchaImg";
    var SEMANTIC_SHAPES_REFRESH_BUTTON = ".refresh-27d6x, .ZVIQM964";
    var SEMANTIC_SHAPES_UNIQUE_IDENTIFIERS = [SEMANTIC_SHAPES_CHALLENGE_TEXT];
    var THREE_BY_THREE_IMAGE = "img.loaded";
    var THREE_BY_THREE_TEXT = ".verifyDialog div[role=dialog]";
    var THREE_BY_THREE_CONFIRM_BUTTON = ".verifyDialog div[role=button]:has(span)";
    var THREE_BY_THREE_UNIQUE_IDENTIFIERS = ["#imageSemantics img.loaded"];
    var TWO_IMAGE_FIRST_IMAGE = "div[class^=picWrap] div[class^=firstPic] #captchaImg";
    var TWO_IMAGE_SECOND_IMAGE = "div[class^=picWrap] div:not([class^=firstPic]) div:not([class^=firstPic]) #captchaImg";
    var TWO_IMAGE_CHALLENGE_TEXT = "div[class^=subTitle]";
    var TWO_IMAGE_CONFIRM_BUTTON = "div[class^=btnWrap] div[role=button]";
    var TWO_IMAGE_REFRESH_BUTTON = "svg[class^=refreshIcon]";
    var TWO_IMAGE_UNIQUE_IDENTIFIERS = [TWO_IMAGE_FIRST_IMAGE, TWO_IMAGE_SECOND_IMAGE];
    var TWO_IMAGE_SUPPORTED_CHALLENGES = [
        "left to right",
        "right to left"
    ];
    var CAPTCHA_PRESENCE_INDICATORS = [
        "#slide-button",
        "#Slider",
        "#slider",
        "iframe",
        "#imageSemantics img.loaded",
        SEMANTIC_SHAPES_IMAGE,
        ".iframe-3eaNR",
        ".iframe-8Vtge",
        "#captchaImg"
    ];
    var CaptchaType;
    (function (CaptchaType) {
        CaptchaType[CaptchaType["PUZZLE"] = 0] = "PUZZLE";
        CaptchaType[CaptchaType["ARCED_SLIDE"] = 1] = "ARCED_SLIDE";
        CaptchaType[CaptchaType["SEMANTIC_SHAPES"] = 2] = "SEMANTIC_SHAPES";
        CaptchaType[CaptchaType["THREE_BY_THREE"] = 3] = "THREE_BY_THREE";
        CaptchaType[CaptchaType["SWAP_TWO"] = 4] = "SWAP_TWO";
        CaptchaType[CaptchaType["TWO_IMAGE"] = 5] = "TWO_IMAGE";
    })(CaptchaType || (CaptchaType = {}));
    function findFirstElementToAppear(selectors) {
        return new Promise(function (resolve) {
            var observer = new MutationObserver(function (mutations) {
                var _loop_1 = function (mutation) {
                    if (mutation.addedNodes === null)
                        return "continue";
                    var addedNode = [];
                    mutation.addedNodes.forEach(function (node) { return addedNode.push(node); });
                    for (var _a = 0, addedNode_1 = addedNode; _a < addedNode_1.length; _a++) {
                        var node = addedNode_1[_a];
                        var _loop_2 = function (selector) {
                            if (node instanceof HTMLIFrameElement) {
                                var iframe_1 = node;
                                setTimeout(function () {
                                    var iframeElement = iframe_1.contentWindow.document.body.querySelector(selector);
                                    if (iframeElement) {
                                        console.debug("element matched ".concat(selector, " in iframe"));
                                        observer.disconnect();
                                        console.dir(iframeElement);
                                        return resolve(iframeElement);
                                    }
                                }, 3000);
                            }
                            else if (node instanceof Element) {
                                var element = node;
                                if (element.querySelector(selector)) {
                                    console.debug("element matched ".concat(selector));
                                    observer.disconnect();
                                    console.dir(element);
                                    return { value: resolve(element) };
                                }
                            }
                        };
                        for (var _b = 0, selectors_1 = selectors; _b < selectors_1.length; _b++) {
                            var selector = selectors_1[_b];
                            var state_2 = _loop_2(selector);
                            if (typeof state_2 === "object")
                                return state_2;
                        }
                    }
                };
                for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                    var mutation = mutations_1[_i];
                    var state_1 = _loop_1(mutation);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            });
            observer.observe(CONTAINER, {
                childList: true,
                subtree: true
            });
        });
    }
    function waitForElement(selector) {
        return new Promise(function (resolve) {
            console.log("checking for " + selector);
            if (document.querySelector(selector)) {
                console.log("Selector found: " + selector);
                return resolve(document.querySelector(selector));
            }
            else if (document.querySelector("iframe")) {
                console.log("checking in iframe...");
                var iframe = document.querySelector("iframe");
                var ele = iframe.contentWindow.document.querySelector(selector);
                if (ele) {
                    console.log("Selector found: " + selector);
                    return resolve(ele);
                }
                else {
                    console.log("no element found in iframe: " + selector);
                }
            }
            else {
                var observer_1 = new MutationObserver(function (_) {
                    if (document.querySelector(selector)) {
                        observer_1.disconnect();
                        console.log("Selector found by mutation observer: " + selector);
                        return resolve(document.querySelector(selector));
                    }
                    var iframe = document.querySelector("iframe");
                    var ele = iframe.contentWindow.document.querySelector(selector);
                    if (ele) {
                        observer_1.disconnect();
                        console.log("Selector found by mutation observer: " + selector);
                        return resolve(ele);
                    }
                });
                console.log("created mutation observer");
                observer_1.observe(CONTAINER, {
                    childList: true,
                    subtree: true
                });
            }
        });
    }
    function waitForAllElements(selector) {
        return new Promise(function (resolve) {
            console.log("checking for " + selector);
            if (document.querySelector(selector)) {
                console.log("Selector found: " + selector);
                return resolve(document.querySelectorAll(selector));
            }
            else if (document.querySelector("iframe")) {
                console.log("checking in iframe...");
                var iframe = document.querySelector("iframe");
                var ele = iframe.contentWindow.document.querySelectorAll(selector);
                if (ele) {
                    console.log("Selector found: " + selector);
                    return resolve(ele);
                }
            }
            else {
                var observer_2 = new MutationObserver(function (_) {
                    if (document.querySelector(selector)) {
                        observer_2.disconnect();
                        console.log("Selector found by mutation observer: " + selector);
                        return resolve(document.querySelectorAll(selector));
                    }
                    var iframe = document.querySelector("iframe");
                    var ele = iframe.contentWindow.document.querySelectorAll(selector);
                    if (ele) {
                        observer_2.disconnect();
                        console.log("Selector found by mutation observer: " + selector);
                        return resolve(ele);
                    }
                });
                console.log("created mutation observer");
                observer_2.observe(CONTAINER, {
                    childList: true,
                    subtree: true
                });
            }
        });
    }
    function getTextContent(selector) {
        return __awaiter(this, void 0, void 0, function () {
            var ele, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, waitForElement(selector)];
                    case 1:
                        ele = _a.sent();
                        text = ele.textContent;
                        console.log("text of ".concat(selector, ": ").concat(text));
                        return [2 /*return*/, text];
                }
            });
        });
    }
    function creditsApiCall() {
        return __awaiter(this, void 0, void 0, function () {
            var resp, credits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("making api call");
                        return [4 /*yield*/, fetch(CREDITS_URL + API_KEY, {
                                method: "GET",
                                headers: API_HEADERS,
                            })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        credits = (_a.sent()).credits;
                        console.log("api credits = " + credits);
                        return [2 /*return*/, credits];
                }
            });
        });
    }
    function apiCall(url, body) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("making api call");
                        return [4 /*yield*/, fetch(url + API_KEY, {
                                method: "POST",
                                headers: API_HEADERS,
                                body: JSON.stringify(body)
                            })];
                    case 1:
                        resp = _a.sent();
                        console.log("got api response:");
                        console.log(resp);
                        return [2 /*return*/, resp];
                }
            });
        });
    }
    function threeByThreeApiCall(requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiCall(THREE_BY_THREE_URL, requestBody)];
                    case 1:
                        resp = _a.sent();
                        console.dir("got resp to 3x3 api call: ");
                        console.dir(resp);
                        return [2 /*return*/, resp.json()];
                }
            });
        });
    }
    function arcedSlideApiCall(requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, pixelsFromSliderOrigin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiCall(ARCED_SLIDE_URL, requestBody)];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        pixelsFromSliderOrigin = (_a.sent()).pixelsFromSliderOrigin;
                        console.log("pixels from slider origin = " + pixelsFromSliderOrigin);
                        return [2 /*return*/, pixelsFromSliderOrigin];
                }
            });
        });
    }
    function puzzleApiCall(puzzleB64, pieceB64) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, slideXProportion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiCall(PUZZLE_URL, {
                            puzzleImageB64: puzzleB64,
                            pieceImageB64: pieceB64
                        })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        slideXProportion = (_a.sent()).slideXProportion;
                        console.log("slideXProportion = " + slideXProportion);
                        return [2 /*return*/, slideXProportion];
                }
            });
        });
    }
    function semanticShapesApiCall(challenge, imageB64) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiCall(SEMANTIC_SHAPES_URL, {
                            challenge: challenge,
                            imageB64: imageB64
                        })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }
    function twoImageApiCall(requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiCall(TWO_IMAGE_URL, requestBody)];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }
    function anySelectorInListPresent(selectors) {
        for (var _i = 0, selectors_2 = selectors; _i < selectors_2.length; _i++) {
            var selector = selectors_2[_i];
            var ele = document.querySelector(selector);
            if (ele) {
                console.log("selector ".concat(selector, " is present"));
                return true;
            }
            var iframe = document.querySelector("iframe");
            if (iframe) {
                console.log("checking for selector in iframe");
                ele = iframe.contentWindow.document.body.querySelector(selector);
                if (ele) {
                    console.log("Selector is present in iframe: " + selector);
                    return true;
                }
            }
        }
        console.log("no selector in list is present");
        return false;
    }
    function identifyCaptcha() {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 30)) return [3 /*break*/, 9];
                        if (!anySelectorInListPresent(ARCED_SLIDE_UNIQUE_IDENTIFIERS)) return [3 /*break*/, 2];
                        console.log("arced slide detected");
                        return [2 /*return*/, CaptchaType.ARCED_SLIDE];
                    case 2:
                        if (!anySelectorInListPresent(PUZZLE_UNIQUE_IDENTIFIERS)) return [3 /*break*/, 3];
                        console.log("puzzle detected");
                        return [2 /*return*/, CaptchaType.PUZZLE];
                    case 3:
                        if (!anySelectorInListPresent(SEMANTIC_SHAPES_UNIQUE_IDENTIFIERS)) return [3 /*break*/, 4];
                        console.log("semantic shapes detected");
                        return [2 /*return*/, CaptchaType.SEMANTIC_SHAPES];
                    case 4:
                        if (!anySelectorInListPresent(TWO_IMAGE_UNIQUE_IDENTIFIERS)) return [3 /*break*/, 5];
                        console.log("two image detected");
                        return [2 /*return*/, CaptchaType.TWO_IMAGE];
                    case 5:
                        if (!anySelectorInListPresent(THREE_BY_THREE_UNIQUE_IDENTIFIERS)) return [3 /*break*/, 6];
                        console.log("3x3 detected");
                        return [2 /*return*/, CaptchaType.THREE_BY_THREE];
                    case 6: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 1000); })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 1];
                    case 9: throw new Error("Could not identify CaptchaType");
                }
            });
        });
    }
    function getImageSource(selector) {
        return __awaiter(this, void 0, void 0, function () {
            var ele, src;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, waitForElement(selector)];
                    case 1:
                        ele = _a.sent();
                        src = ele.getAttribute("src");
                        console.log("src = " + selector);
                        return [2 /*return*/, src];
                }
            });
        });
    }
    function getBase64StringFromDataURL(dataUrl) {
        var img = dataUrl.replace('data:', '').replace(/^.+,/, '');
        console.log("got b64 string from data URL");
        return img;
    }
    function mouseUp(x, y) {
        CONTAINER.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: true,
            clientX: x,
            clientY: y
        }));
        console.log("mouse up at " + x + ", " + y);
    }
    function mouseOver(x, y) {
        var underMouse = document.elementFromPoint(x, y);
        underMouse.dispatchEvent(new MouseEvent("mouseover", {
            cancelable: true,
            bubbles: true,
            clientX: x,
            clientY: y
        }));
        console.log("mouse over at " + x + ", " + y);
    }
    function mouseDown(x, y) {
        var underMouse = document.elementFromPoint(x, y);
        underMouse.dispatchEvent(new MouseEvent("mousedown", {
            cancelable: true,
            bubbles: true,
            clientX: x,
            clientY: y
        }));
        console.log("mouse down at " + x + ", " + y);
    }
    function mouseEnterPage() {
        var width = window.innerWidth;
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        CONTAINER.dispatchEvent(new PointerEvent("pointerover", {
            pointerType: "mouse",
            cancelable: true,
            bubbles: true,
            clientX: width,
            clientY: centerY
        }));
        CONTAINER.dispatchEvent(new MouseEvent("mouseover", {
            cancelable: true,
            bubbles: true,
            clientX: width,
            clientY: centerY
        }));
        for (var i = 0; i < centerX; i++) {
            mouseMove(width - i, centerY);
        }
    }
    function randomMouseMovement() {
        var randomX = Math.round(window.innerWidth * Math.random());
        var randomY = Math.round(window.innerHeight * Math.random());
        try {
            mouseMove(randomX, randomX);
            mouseOver(randomX, randomY);
        }
        catch (err) {
            console.log("error doing random mouse movement: ");
            console.log(err);
        }
    }
    function mouseMove(x, y, ele) {
        var c;
        if (ele === undefined) {
            c = CONTAINER;
        }
        else {
            c = ele;
        }
        c.dispatchEvent(new PointerEvent("mousemove", {
            pointerType: "mouse",
            cancelable: true,
            bubbles: true,
            clientX: x,
            clientY: y
        }));
        console.log("moved mouse to " + x + ", " + y);
    }
    /*
        * Dispatch a simple mouseclick event.
        * No x or y, no mouseup or mousedown.
        * Just mouseclick
    */
    function mouseClickSimple(element) {
        var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        element.dispatchEvent(clickEvent);
        console.log("simple clicked element");
    }
    /*
        * Dispatch full pipeline of mouseover, mousedown, mouseup, and mouseclick
    */
    function mouseClick(element, x, y) {
        element.dispatchEvent(new MouseEvent("mouseover", {
            bubbles: true,
            clientX: x,
            clientY: y
        }));
        setTimeout(function () { return null; }, 10);
        element.dispatchEvent(new MouseEvent("mousedown", {
            bubbles: true,
            clientX: x,
            clientY: y
        }));
        setTimeout(function () { return null; }, 200);
        element.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: true,
            clientX: x,
            clientY: y
        }));
        element.dispatchEvent(new MouseEvent("mouseclick", {
            bubbles: true,
            clientX: x,
            clientY: y
        }));
    }
    function getElementCenter(element) {
        var rect = element.getBoundingClientRect();
        var center = {
            x: rect.x + (rect.width / 2),
            y: rect.y + (rect.height / 2),
        };
        console.log("element center: ");
        console.dir(center);
        return center;
    }
    function getElementWidth(element) {
        var rect = element.getBoundingClientRect();
        console.log("element width: " + rect.width);
        return rect.width;
    }
    function clickCenterOfElement(element) {
        var rect = element.getBoundingClientRect();
        var x = rect.x + (rect.width / 2);
        var y = rect.y + (rect.height / 2);
        mouseClick(element, x, y);
    }
    function clickProportional(element, proportionX, proportionY) {
        var boundingBox = element.getBoundingClientRect();
        var xOrigin = boundingBox.x;
        var yOrigin = boundingBox.y;
        var xOffset = (proportionX * boundingBox.width);
        var yOffset = (proportionY * boundingBox.height);
        var x = xOrigin + xOffset;
        var y = yOrigin + yOffset;
        console.log("clicked at ".concat(x, ", ").concat(y));
        mouseClick(element, x, y);
    }
    function computePuzzleSlideDistance(proportionX, puzzleImageEle) {
        var distance = puzzleImageEle.getBoundingClientRect().width * proportionX;
        console.log("puzzle slide distance = " + distance);
        return distance;
    }
    function solveArcedSlide() {
        return __awaiter(this, void 0, void 0, function () {
            var puzzleImageSrc, pieceImageSrc, puzzleImg, pieceImg, slideButtonEle, startX, startY, puzzleEle, trajectory, solution, currentX, solutionDistanceBackwards, overshoot, mouseStep, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getImageSource(ARCED_SLIDE_PUZZLE_IMAGE_SELECTOR)];
                    case 1:
                        puzzleImageSrc = _a.sent();
                        return [4 /*yield*/, getImageSource(ARCED_SLIDE_PIECE_IMAGE_SELECTOR)];
                    case 2:
                        pieceImageSrc = _a.sent();
                        puzzleImg = getBase64StringFromDataURL(puzzleImageSrc);
                        pieceImg = getBase64StringFromDataURL(pieceImageSrc);
                        return [4 /*yield*/, waitForElement(ARCED_SLIDE_BUTTON_SELECTOR)];
                    case 3:
                        slideButtonEle = _a.sent();
                        startX = getElementCenter(slideButtonEle).x;
                        startY = getElementCenter(slideButtonEle).y;
                        return [4 /*yield*/, waitForElement(ARCED_SLIDE_PUZZLE_IMAGE_SELECTOR)];
                    case 4:
                        puzzleEle = _a.sent();
                        return [4 /*yield*/, getSlidePieceTrajectory(slideButtonEle, puzzleEle)];
                    case 5:
                        trajectory = _a.sent();
                        return [4 /*yield*/, arcedSlideApiCall({
                                piece_image_b64: pieceImg,
                                puzzle_image_b64: puzzleImg,
                                slide_piece_trajectory: trajectory
                            })];
                    case 6:
                        solution = _a.sent();
                        currentX = getElementCenter(slideButtonEle).x;
                        solutionDistanceBackwards = currentX - startX - solution;
                        overshoot = 6;
                        mouseStep = 2;
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                    case 7:
                        _a.sent();
                        i = 0;
                        _a.label = 8;
                    case 8:
                        if (!(i < solutionDistanceBackwards)) return [3 /*break*/, 11];
                        mouseMove(currentX - i, startY + Math.random() * 5);
                        console.debug("current x: " + currentX);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 10 + Math.random() * 5); })];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        i += 1;
                        return [3 /*break*/, 8];
                    case 11: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 300); })];
                    case 12:
                        _a.sent();
                        mouseMove(startX + solution, startY);
                        mouseUp(startX + solution, startY);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 3000); })];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function getSlidePieceTrajectory(slideButton, puzzle) {
        return __awaiter(this, void 0, void 0, function () {
            var sliderPieceContainer, slideBarWidth, timesPieceDidNotMove, slideButtonCenter, puzzleImageBoundingBox, trajectory, mouseStep, pixel, trajectoryElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, waitForElement(ARCED_SLIDE_PIECE_CONTAINER_SELECTOR)];
                    case 1:
                        sliderPieceContainer = _a.sent();
                        console.log("got slider piece container");
                        slideBarWidth = getElementWidth(puzzle);
                        console.log("slide bar width: " + slideBarWidth);
                        timesPieceDidNotMove = 0;
                        slideButtonCenter = getElementCenter(slideButton);
                        puzzleImageBoundingBox = puzzle.getBoundingClientRect();
                        trajectory = [];
                        mouseStep = 5;
                        mouseEnterPage();
                        mouseMove(slideButtonCenter.x, slideButtonCenter.y);
                        mouseDown(slideButtonCenter.x, slideButtonCenter.y);
                        slideButton.dispatchEvent(new MouseEvent("mousedown", {
                            cancelable: true,
                            bubbles: true,
                            clientX: slideButtonCenter.x,
                            clientY: slideButtonCenter.y
                        }));
                        pixel = 0;
                        _a.label = 2;
                    case 2:
                        if (!(pixel < slideBarWidth)) return [3 /*break*/, 6];
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 10 + Math.random() * 5); })];
                    case 3:
                        _a.sent();
                        //moveMouseTo(slideButtonCenter.x + pixel, slideButtonCenter.y - pixel)
                        slideButton.dispatchEvent(new MouseEvent("mousemove", {
                            cancelable: true,
                            bubbles: true,
                            clientX: slideButtonCenter.x + pixel,
                            clientY: slideButtonCenter.y - Math.log(pixel + 1)
                        }));
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 40); })];
                    case 4:
                        _a.sent();
                        trajectoryElement = getTrajectoryElement(pixel, puzzleImageBoundingBox, sliderPieceContainer);
                        trajectory.push(trajectoryElement);
                        if (trajectory.length < 100 / mouseStep)
                            return [3 /*break*/, 5];
                        if (pieceIsNotMoving(trajectory))
                            timesPieceDidNotMove++;
                        else
                            timesPieceDidNotMove = 0;
                        if (timesPieceDidNotMove >= 10 / mouseStep)
                            return [3 /*break*/, 6];
                        console.log("trajectory element:");
                        console.dir(trajectoryElement);
                        _a.label = 5;
                    case 5:
                        pixel += mouseStep;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/, trajectory];
                }
            });
        });
    }
    function getTrajectoryElement(currentSliderPixel, largeImgBoundingBox, sliderPiece) {
        var sliderPieceStyle = sliderPiece.getAttribute("style");
        var rotateAngle = rotateAngleFromStyle(sliderPieceStyle);
        var pieceCenter = getElementCenter(sliderPiece);
        var pieceCenterProp = xyToProportionalPoint(largeImgBoundingBox, pieceCenter); // This returns undefined
        var ele = {
            piece_center: pieceCenterProp,
            piece_rotation_angle: rotateAngle,
            pixels_from_slider_origin: currentSliderPixel
        };
        console.dir(ele);
        return ele;
    }
    function rotateAngleFromStyle(style) {
        var rotateRegex = /.*rotate\(|deg.*/gi;
        var rotateAngle;
        if (style.search(rotateRegex) === -1) {
            rotateAngle = 0;
        }
        else {
            var rotateStr = style.replace(rotateRegex, "");
            rotateAngle = parseFloat(rotateStr);
        }
        console.log("rotate angle: " + rotateAngle);
        return rotateAngle;
    }
    function pieceIsNotMoving(trajetory) {
        console.dir(trajetory);
        if (trajetory[trajetory.length - 1].piece_center.proportionX ==
            trajetory[trajetory.length - 2].piece_center.proportionX) {
            console.log("piece is not moving");
            return true;
        }
        else {
            console.log("piece is moving");
            return false;
        }
    }
    function xyToProportionalPoint(container, point) {
        var xInContainer = point.x - container.x;
        var yInContainer = point.y - container.y;
        return {
            proportionX: xInContainer / container.width,
            proportionY: yInContainer / container.height,
        };
    }
    function solvePuzzle() {
        return __awaiter(this, void 0, void 0, function () {
            var sliderWrapper, sliderButton, wrapperCenter, buttonCenter, preRequestSlidePixels, i, i, puzzleSrc, pieceSrc, puzzleImg, pieceImg, solution, puzzleImageEle, distance, currentX, currentY, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 3000); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, waitForElement(PUZZLE_SLIDER_WRAPPER)];
                    case 2:
                        sliderWrapper = _a.sent();
                        return [4 /*yield*/, waitForElement(PUZZLE_BUTTON_SELECTOR)];
                    case 3:
                        sliderButton = _a.sent();
                        wrapperCenter = getElementCenter(sliderWrapper);
                        buttonCenter = getElementCenter(sliderButton);
                        preRequestSlidePixels = 10;
                        mouseEnterPage();
                        for (i = 0; i < 25; i++) {
                            randomMouseMovement();
                            setTimeout(function () { return null; }, 1.337);
                        }
                        mouseMove(wrapperCenter.x, wrapperCenter.y);
                        mouseOver(wrapperCenter.x, wrapperCenter.y);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 133.7); })];
                    case 4:
                        _a.sent();
                        mouseMove(buttonCenter.x, buttonCenter.y);
                        mouseOver(buttonCenter.x, buttonCenter.y);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 133.7); })];
                    case 5:
                        _a.sent();
                        mouseDown(buttonCenter.x, buttonCenter.y);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 133.7); })];
                    case 6:
                        _a.sent();
                        i = 1;
                        _a.label = 7;
                    case 7:
                        if (!(i < preRequestSlidePixels)) return [3 /*break*/, 10];
                        mouseMove(buttonCenter.x + i, buttonCenter.y - Math.log(i) + Math.random() * 3);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, Math.random() * 5 + 10); })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 7];
                    case 10: return [4 /*yield*/, getImageSource(PUZZLE_PUZZLE_IMAGE_SELECTOR)];
                    case 11:
                        puzzleSrc = _a.sent();
                        return [4 /*yield*/, getImageSource(PUZZLE_PIECE_IMAGE_SELECTOR)];
                    case 12:
                        pieceSrc = _a.sent();
                        console.log("got image sources");
                        puzzleImg = getBase64StringFromDataURL(puzzleSrc);
                        pieceImg = getBase64StringFromDataURL(pieceSrc);
                        console.log("converted image sources to b64 string");
                        return [4 /*yield*/, puzzleApiCall(puzzleImg, pieceImg)];
                    case 13:
                        solution = _a.sent();
                        console.log("got API result: " + solution);
                        return [4 /*yield*/, waitForElement(PUZZLE_PUZZLE_IMAGE_SELECTOR)];
                    case 14:
                        puzzleImageEle = _a.sent();
                        distance = computePuzzleSlideDistance(solution, puzzleImageEle);
                        i = 1;
                        _a.label = 15;
                    case 15:
                        if (!(i < distance - preRequestSlidePixels)) return [3 /*break*/, 18];
                        currentX = buttonCenter.x + i + preRequestSlidePixels;
                        currentY = buttonCenter.y - Math.log(i) + Math.random() * 3;
                        mouseMove(currentX, currentY);
                        mouseOver(currentX, currentY);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, Math.random() * 5 + 10); })];
                    case 16:
                        _a.sent();
                        _a.label = 17;
                    case 17:
                        i += Math.random() * 5;
                        return [3 /*break*/, 15];
                    case 18: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 133.7); })];
                    case 19:
                        _a.sent();
                        mouseOver(buttonCenter.x + distance, buttonCenter.x - distance);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 133.7); })];
                    case 20:
                        _a.sent();
                        mouseUp(buttonCenter.x + distance, buttonCenter.x - distance);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 3000); })];
                    case 21:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function solveSemanticShapes() {
        return __awaiter(this, void 0, void 0, function () {
            var i, src, img, challenge, res, err_1, _a, ele, _i, _b, point, countOfPointsBeforeClicking, i, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        mouseEnterPage();
                        for (i = 0; i < 25; i++) {
                            randomMouseMovement();
                            setTimeout(function () { return null; }, 1.337);
                        }
                        return [4 /*yield*/, getImageSource(SEMANTIC_SHAPES_IMAGE)];
                    case 1:
                        src = _e.sent();
                        img = getBase64StringFromDataURL(src);
                        return [4 /*yield*/, getTextContent(SEMANTIC_SHAPES_CHALLENGE_TEXT)];
                    case 2:
                        challenge = _e.sent();
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 5, , 8]);
                        return [4 /*yield*/, semanticShapesApiCall(challenge, img)];
                    case 4:
                        res = _e.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        err_1 = _e.sent();
                        console.log("Error calling semantic shapes API. refreshing and retrying");
                        console.error(err_1);
                        _a = mouseClickSimple;
                        return [4 /*yield*/, waitForElement(SEMANTIC_SHAPES_REFRESH_BUTTON)];
                    case 6:
                        _a.apply(void 0, [_e.sent()]);
                        return [4 /*yield*/, solveSemanticShapes()];
                    case 7:
                        _e.sent();
                        return [3 /*break*/, 8];
                    case 8: return [4 /*yield*/, waitForElement(SEMANTIC_SHAPES_IMAGE)];
                    case 9:
                        ele = _e.sent();
                        _i = 0, _b = res.proportionalPoints;
                        _e.label = 10;
                    case 10:
                        if (!(_i < _b.length)) return [3 /*break*/, 17];
                        point = _b[_i];
                        return [4 /*yield*/, countElementsInsideImageSemanticsChallenge()];
                    case 11:
                        countOfPointsBeforeClicking = _e.sent();
                        i = 0;
                        _e.label = 12;
                    case 12:
                        if (!(i < 5)) return [3 /*break*/, 16];
                        clickProportional(ele, point.proportionX + (i / 50), point.proportionY + (i / 50));
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 1337); })];
                    case 13:
                        _e.sent();
                        _c = countOfPointsBeforeClicking;
                        return [4 /*yield*/, countElementsInsideImageSemanticsChallenge()];
                    case 14:
                        if (_c === (_e.sent())) {
                            console.log("count of elements inside challenge was the same after clicking. this means no red dot appeared. trying to click again");
                            return [3 /*break*/, 15];
                        }
                        else {
                            console.log("a new element appeared inside after clicking. continuing to click the rest of the points");
                            return [3 /*break*/, 16];
                        }
                        _e.label = 15;
                    case 15:
                        i++;
                        return [3 /*break*/, 12];
                    case 16:
                        _i++;
                        return [3 /*break*/, 10];
                    case 17: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 3000); })];
                    case 18:
                        _e.sent();
                        if (!captchaIsPresent()) return [3 /*break*/, 21];
                        console.log("captcha was still present, retrying");
                        _d = mouseClickSimple;
                        return [4 /*yield*/, waitForElement(SEMANTIC_SHAPES_REFRESH_BUTTON)];
                    case 19:
                        _d.apply(void 0, [_e.sent()]);
                        return [4 /*yield*/, solveSemanticShapes()];
                    case 20:
                        _e.sent();
                        _e.label = 21;
                    case 21: return [2 /*return*/];
                }
            });
        });
    }
    function solveThreeByThree() {
        return __awaiter(this, void 0, void 0, function () {
            var imageElements, imageB64, challengeText, objects, request, resp, _a, _b, _c, _i, i, ele, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, waitForAllElements(THREE_BY_THREE_IMAGE)];
                    case 1:
                        imageElements = _e.sent();
                        imageB64 = [];
                        imageElements.forEach(function (ele) {
                            imageB64.push(getBase64StringFromDataURL(ele.getAttribute("src")));
                        });
                        return [4 /*yield*/, getTextContent(THREE_BY_THREE_TEXT)];
                    case 2:
                        challengeText = _e.sent();
                        objects = parseThreeByThreeObjectsOfInterest(challengeText);
                        request = {
                            objects_of_interest: objects,
                            images: imageB64
                        };
                        return [4 /*yield*/, threeByThreeApiCall(request)];
                    case 3:
                        resp = _e.sent();
                        _a = resp.solution_indices;
                        _b = [];
                        for (_c in _a)
                            _b.push(_c);
                        _i = 0;
                        _e.label = 4;
                    case 4:
                        if (!(_i < _b.length)) return [3 /*break*/, 7];
                        _c = _b[_i];
                        if (!(_c in _a)) return [3 /*break*/, 6];
                        i = _c;
                        return [4 /*yield*/, waitForElement("img[src*=\"".concat(imageB64[i], "\"]"))];
                    case 5:
                        ele = _e.sent();
                        clickProportional(ele, 0.69, 0.69);
                        setTimeout(function () { return null; }, 1337);
                        _e.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        _d = clickProportional;
                        return [4 /*yield*/, waitForElement(THREE_BY_THREE_CONFIRM_BUTTON)];
                    case 8:
                        _d.apply(void 0, [_e.sent(), 0.69, 0.420]);
                        return [2 /*return*/];
                }
            });
        });
    }
    function solveTwoImage() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    }
    function countElementsInsideImageSemanticsChallenge() {
        return __awaiter(this, void 0, void 0, function () {
            var elements, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, waitForAllElements(ELEMENTS_INSIDE_CHALLENGE_SELECTOR)];
                    case 1:
                        elements = _a.sent();
                        count = elements.length;
                        console.log("".concat(count, " elements present in challenge"));
                        return [2 /*return*/, count];
                }
            });
        });
    }
    function identifyTwoImageSelectorToClick(challengeText) {
        var lowerText = challengeText.toLowerCase();
        var figure1Index = lowerText.indexOf("figure 1");
        var figure2index = lowerText.indexOf("figure 2");
        if (figure1Index === -1 || figure2index == -1) {
            throw new Error("Possible issue due to unsupported language. Currently only English is supported. Could not see 'figure 1' or 'figure 2' in challenge text");
        }
        if (figure1Index < figure2index) {
            console.log("challenge is asking us to click the first image");
            return TWO_IMAGE_FIRST_IMAGE;
        }
        else {
            console.log("challenge is asking us to click the second image");
            return TWO_IMAGE_SECOND_IMAGE;
        }
    }
    function twoImageChallengeTextIsSupported(challengeText) {
        for (var _i = 0, TWO_IMAGE_SUPPORTED_CHALLENGES_1 = TWO_IMAGE_SUPPORTED_CHALLENGES; _i < TWO_IMAGE_SUPPORTED_CHALLENGES_1.length; _i++) {
            var text = TWO_IMAGE_SUPPORTED_CHALLENGES_1[_i];
            if (challengeText.includes(text)) {
                console.log("Two image challenge text \"".concat(challengeText, "\" is supported."));
                return true;
            }
            else {
                continue;
            }
        }
        console.log("Two image challenge text \"".concat(challengeText, "\" is not supported."));
        return false;
    }
    /*
    * Get the list of objects to select from Temu 3x3 captcha
    * ex:
    *     input: 'Click on the corresponding images in the following order: 'television','strawberry','peach'
    *     output: ['television', 'strawberry', 'peach']
    */
    function parseThreeByThreeObjectsOfInterest(challengeText) {
        var objects = challengeText.match(/(?<=')[\w\s]+?(?=')/g);
        console.log("input text: ".concat(challengeText, "\nobjects of interest: ").concat(objects));
        return objects;
    }
    function captchaIsPresent() {
        for (var i = 0; i < CAPTCHA_PRESENCE_INDICATORS.length; i++) {
            if (document.querySelector(CAPTCHA_PRESENCE_INDICATORS[i])) {
                console.log("captcha present based on selector: " + CAPTCHA_PRESENCE_INDICATORS[i]);
                return true;
            }
            if (document.querySelector("iframe")) {
                var iframe = document.querySelector("iframe");
                if (iframe.contentWindow.document.querySelector(CAPTCHA_PRESENCE_INDICATORS[i])) {
                    console.log("captcha present based on selector: " + CAPTCHA_PRESENCE_INDICATORS[i]);
                    return true;
                }
            }
        }
        console.log("captcha not present");
        return false;
    }
    var isCurrentSolve = false;
    function solveCaptchaLoop() {
        return __awaiter(this, void 0, void 0, function () {
            var _, captchaType, err_2, e_1, _a, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!isCurrentSolve) return [3 /*break*/, 27];
                        if (!captchaIsPresent()) return [3 /*break*/, 1];
                        console.log("captcha detected by css selector");
                        return [3 /*break*/, 3];
                    case 1:
                        console.log("waiting for captcha");
                        return [4 /*yield*/, findFirstElementToAppear(CAPTCHA_PRESENCE_INDICATORS)];
                    case 2:
                        _ = _b.sent();
                        console.log("captcha detected by mutation observer");
                        _b.label = 3;
                    case 3:
                        isCurrentSolve = true;
                        captchaType = void 0;
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 8]);
                        return [4 /*yield*/, identifyCaptcha()];
                    case 5:
                        captchaType = _b.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        err_2 = _b.sent();
                        console.log("could not detect captcha type. restarting captcha loop");
                        isCurrentSolve = false;
                        return [4 /*yield*/, solveCaptchaLoop()];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        _b.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, creditsApiCall()];
                    case 9:
                        if ((_b.sent()) <= 0) {
                            console.log("out of credits");
                            alert("Out of SadCaptcha credits. Please boost your balance on sadcaptcha.com/dashboard.");
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 11];
                    case 10:
                        e_1 = _b.sent();
                        console.log("error making check credits api call");
                        console.error(e_1);
                        console.log("proceeding to attempt solution anyways");
                        return [3 /*break*/, 11];
                    case 11:
                        _b.trys.push([11, 23, 24, 27]);
                        _a = captchaType;
                        switch (_a) {
                            case CaptchaType.PUZZLE: return [3 /*break*/, 12];
                            case CaptchaType.ARCED_SLIDE: return [3 /*break*/, 14];
                            case CaptchaType.SEMANTIC_SHAPES: return [3 /*break*/, 16];
                            case CaptchaType.THREE_BY_THREE: return [3 /*break*/, 18];
                            case CaptchaType.TWO_IMAGE: return [3 /*break*/, 20];
                        }
                        return [3 /*break*/, 22];
                    case 12: return [4 /*yield*/, solvePuzzle()];
                    case 13:
                        _b.sent();
                        return [3 /*break*/, 22];
                    case 14: return [4 /*yield*/, solveArcedSlide()];
                    case 15:
                        _b.sent();
                        return [3 /*break*/, 22];
                    case 16: return [4 /*yield*/, solveSemanticShapes()];
                    case 17:
                        _b.sent();
                        return [3 /*break*/, 22];
                    case 18: return [4 /*yield*/, solveThreeByThree()];
                    case 19:
                        _b.sent();
                        return [3 /*break*/, 22];
                    case 20: return [4 /*yield*/, solveTwoImage()];
                    case 21:
                        _b.sent();
                        return [3 /*break*/, 22];
                    case 22: return [3 /*break*/, 27];
                    case 23:
                        err_3 = _b.sent();
                        console.log("error solving captcha");
                        console.error(err_3);
                        console.log("restarting captcha loop");
                        return [3 /*break*/, 27];
                    case 24:
                        isCurrentSolve = false;
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 5000); })];
                    case 25:
                        _b.sent();
                        return [4 /*yield*/, solveCaptchaLoop()];
                    case 26:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 27: return [2 /*return*/];
                }
            });
        });
    }
    solveCaptchaLoop();
})();

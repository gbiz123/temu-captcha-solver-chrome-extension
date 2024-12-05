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
    var creditsUrl = "https://www.sadcaptcha.com/api/v1/license/credits?licenseKey=";
    var arcedSlideUrl = "https://www.sadcaptcha.com/api/v1/temu-arced-slide?licenseKey=";
    var puzzleUrl = "https://www.sadcaptcha.com/api/v1/puzzle?licenseKey=";
    var semanticShapesUrl = "https://www.sadcaptcha.com/api/v1/semantic-shapes?licenseKey=";
    var corsProxy = "https://corsproxy.io/?";
    var API_HEADERS = new Headers({ "Content-Type": "application/json" });
    var ARCED_SLIDE_PUZZLE_IMAGE_SELECTOR = "#slider > img";
    var ARCED_SLIDE_PIECE_CONTAINER_SELECTOR = "#img-button";
    var ARCED_SLIDE_PIECE_IMAGE_SELECTOR = "#img-button > img";
    var ARCED_SLIDE_BUTTON_SELECTOR = "#slide-button";
    var ARCED_SLIDE_UNIQUE_IDENTIFIERS = [".handleBar-vT4I5", ".vT4I57cQ", "div[style=\"width: 414px;\"] #slider", "div[style=\"width: 410px;\"] #slider"];
    var PUZZLE_BUTTON_SELECTOR = "#slide-button";
    var PUZZLE_PUZZLE_IMAGE_SELECTOR = "#slider > img";
    var PUZZLE_PIECE_IMAGE_SELECTOR = "#img-button > img";
    var PUZZLE_UNIQUE_IDENTIFIERS = ["#Slider"];
    var SEMANTIC_SHAPES_IFRAME = ".iframe-3eaNR";
    var SEMANTIC_SHAPES_CHALLENGE_ROOT_ELE = "#Picture";
    var SEMANTIC_SHAPES_CHALLENGE_TEXT = ".picture-text-2Alt0";
    var SEMANTIC_SHAPES_IMAGE = "#captchaImg";
    var SEMANTIC_SHAPES_REFRESH_BUTTON = ".refresh-27d6x";
    var SEMANTIC_SHAPES_UNIQUE_IDENTIFIERS = [SEMANTIC_SHAPES_IMAGE];
    var CAPTCHA_PRESENCE_INDICATORS = [
        "#Picture",
        "#captchaImg",
        "#slide-button",
        "#Slider",
        "#slider"
    ];
    var CaptchaType;
    (function (CaptchaType) {
        CaptchaType[CaptchaType["PUZZLE"] = 0] = "PUZZLE";
        CaptchaType[CaptchaType["ARCED_SLIDE"] = 1] = "ARCED_SLIDE";
        CaptchaType[CaptchaType["SEMANTIC_SHAPES"] = 2] = "SEMANTIC_SHAPES";
    })(CaptchaType || (CaptchaType = {}));
    function findFirstElementToAppear(selectors) {
        return new Promise(function (resolve) {
            var elementFound;
            var observer = new MutationObserver(function (mutations) {
                for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                    var mutation = mutations_1[_i];
                    if (elementFound)
                        break;
                    if (mutation.addedNodes === null)
                        continue;
                    mutation.addedNodes.forEach(function (node) {
                        if (node instanceof Element) {
                            var element = node;
                            console.dir(element);
                            var _loop_1 = function (selector) {
                                if (element.matches(selector)) {
                                    console.debug("element matched ".concat(selector));
                                    elementFound = element;
                                }
                                else if (element instanceof HTMLIFrameElement) {
                                    var iframe_1 = element;
                                    setTimeout(function () {
                                        var iframeElement = iframe_1.contentWindow.document.body.querySelector(selector);
                                        if (iframeElement) {
                                            console.debug("element matched ".concat(selector, " in iframe"));
                                            elementFound = iframeElement;
                                        }
                                    }, 3000);
                                }
                                else {
                                    console.debug("element did not match ".concat(selector));
                                }
                            };
                            for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
                                var selector = selectors_1[_i];
                                _loop_1(selector);
                            }
                        }
                    });
                }
                if (elementFound) {
                    console.debug("found selector in our list");
                    console.dir(elementFound);
                    observer.disconnect();
                    return resolve(elementFound);
                }
            });
            observer.observe(CONTAINER, {
                childList: true,
                subtree: true
            });
        });
    }
    function waitForElement(selector, iframeSelector) {
        return new Promise(function (resolve) {
            var targetDocument;
            if (iframeSelector !== undefined) {
                var iframe = document.querySelector(iframeSelector);
                targetDocument = iframe.contentWindow.document;
            }
            else {
                targetDocument = window.document;
            }
            if (targetDocument.querySelector(selector)) {
                console.log("Selector found: " + selector);
                return resolve(targetDocument.querySelector(selector));
            }
            else {
                var observer_1 = new MutationObserver(function (_) {
                    if (targetDocument.querySelector(selector)) {
                        observer_1.disconnect();
                        console.log("Selector found by mutation observer: " + selector);
                        return resolve(targetDocument.querySelector(selector));
                    }
                });
                observer_1.observe(CONTAINER, {
                    childList: true,
                    subtree: true
                });
            }
        });
    }
    function getTextContent(selector, iframeSelector) {
        var targetDocument;
        if (iframeSelector !== undefined) {
            var iframe = document.querySelector(iframeSelector);
            targetDocument = iframe.contentWindow.document;
        }
        else {
            targetDocument = window.document;
        }
        var text = targetDocument.querySelector(selector).textContent;
        console.log("text of ".concat(selector, ": ").concat(text));
        return text;
    }
    function creditsApiCall() {
        return __awaiter(this, void 0, void 0, function () {
            var resp, credits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("making api call");
                        return [4 /*yield*/, fetch(creditsUrl + API_KEY, {
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
    function arcedSlideApiCall(requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, pixelsFromSliderOrigin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiCall(arcedSlideUrl, requestBody)];
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
                    case 0: return [4 /*yield*/, apiCall(puzzleUrl, {
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
                    case 0: return [4 /*yield*/, apiCall(semanticShapesUrl, {
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
    function anySelectorInListPresent(selectors) {
        for (var _i = 0, selectors_2 = selectors; _i < selectors_2.length; _i++) {
            var selector = selectors_2[_i];
            var ele = document.querySelector(selector);
            if (ele !== null) {
                console.log("selector ".concat(selector, " is present"));
                return true;
            }
            var iframe = document.querySelector("iframe");
            if (iframe !== null) {
                console.log("checking for selector in iframe");
                ele = iframe.contentWindow.document.querySelector(selector);
                if (ele !== null) {
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
                        if (!(i < 30)) return [3 /*break*/, 7];
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
                    case 4: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 1000); })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7: throw new Error("Could not identify CaptchaType");
                }
            });
        });
    }
    function getImageSource(selector, iframeSelector) {
        return __awaiter(this, void 0, void 0, function () {
            var ele, src;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, waitForElement(selector, iframeSelector)];
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
    function fetchImageBase64(imageSource) {
        return __awaiter(this, void 0, void 0, function () {
            var res, img, reader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(corsProxy + imageSource)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.blob()];
                    case 2:
                        img = _a.sent();
                        reader = new FileReader();
                        reader.readAsDataURL(img);
                        return [2 /*return*/, new Promise(function (resolve) {
                                reader.onloadend = function () {
                                    console.log("wrote b64 image src to file then back to string");
                                    resolve(getBase64StringFromDataURL(reader.result));
                                };
                            })];
                }
            });
        });
    }
    function mouseUp(x, y) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                CONTAINER.dispatchEvent(new MouseEvent("mouseup", {
                    bubbles: true,
                    view: window,
                    clientX: x,
                    clientY: y
                }));
                console.log("mouse up at " + x + ", " + y);
                return [2 /*return*/];
            });
        });
    }
    function mouseDown(x, y, ele) {
        return __awaiter(this, void 0, void 0, function () {
            var c;
            return __generator(this, function (_a) {
                if (ele === undefined) {
                    c = CONTAINER;
                }
                else {
                    c = ele;
                }
                c.dispatchEvent(new PointerEvent("mousedown", {
                    pointerType: "mouse",
                    cancelable: true,
                    bubbles: true,
                    view: window,
                    clientX: x,
                    clientY: y
                }));
                console.log("mouse down at " + x + ", " + y);
                return [2 /*return*/];
            });
        });
    }
    function moveMouseTo(x, y, ele) {
        return __awaiter(this, void 0, void 0, function () {
            var c;
            return __generator(this, function (_a) {
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
                    view: window,
                    clientX: x,
                    clientY: y
                }));
                console.log("moved mouse to " + x + ", " + y);
                return [2 /*return*/];
            });
        });
    }
    function dragElementHorizontal(selector, xOffset) {
        return __awaiter(this, void 0, void 0, function () {
            var ele, box, startX, startY, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("preparing to drag " + selector + " by " + xOffset + " pixels");
                        ele = document.querySelector(selector);
                        box = ele.getBoundingClientRect();
                        startX = (box.x + (box.width / 133.7));
                        startY = (box.y + (box.height / 133.7));
                        moveMouseTo(startX, startY);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 133.7); })];
                    case 1:
                        _a.sent();
                        ele.dispatchEvent(new PointerEvent("mousedown", {
                            pointerType: "mouse",
                            cancelable: true,
                            bubbles: true,
                            view: window,
                            clientX: startX,
                            clientY: startY
                        }));
                        console.log("sent mouse down at " + startX + ", " + startY);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 133.7); })];
                    case 2:
                        _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < xOffset)) return [3 /*break*/, 6];
                        ele.dispatchEvent(new PointerEvent("mousemove", {
                            pointerType: "mouse",
                            cancelable: true,
                            bubbles: true,
                            view: window,
                            clientX: startX + i,
                            clientY: startY
                        }));
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 1.337); })];
                    case 4:
                        _a.sent();
                        console.log("sent mouse mouse move at " + (startX + i) + ", " + startY);
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 133.7); })];
                    case 7:
                        _a.sent();
                        ele.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
                        console.log("sent mouse up");
                        return [2 /*return*/];
                }
            });
        });
    }
    function clickMouse(element, x, y) {
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
        return __awaiter(this, void 0, void 0, function () {
            var rect, x, y;
            return __generator(this, function (_a) {
                rect = element.getBoundingClientRect();
                x = rect.x + (rect.width / 2);
                y = rect.y + (rect.height / 2);
                clickMouse(element, x, y);
                return [2 /*return*/];
            });
        });
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
        clickMouse(element, x, y);
    }
    function computePuzzleSlideDistance(proportionX, puzzleImageEle) {
        var distance = puzzleImageEle.getBoundingClientRect().width * proportionX;
        console.log("puzzle slide distance = " + distance);
        return distance;
    }
    function solveArcedSlide() {
        return __awaiter(this, void 0, void 0, function () {
            var i, puzzleImageSrc, pieceImageSrc, puzzleImg, pieceImg, slideButtonEle, startX, startY, puzzleEle, trajectory, solution, currentX, solutionDistanceBackwards, overshoot, mouseStep, i_1, i_2, i_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 3)) return [3 /*break*/, 25];
                        return [4 /*yield*/, getImageSource(ARCED_SLIDE_PUZZLE_IMAGE_SELECTOR)];
                    case 2:
                        puzzleImageSrc = _a.sent();
                        return [4 /*yield*/, getImageSource(ARCED_SLIDE_PIECE_IMAGE_SELECTOR)];
                    case 3:
                        pieceImageSrc = _a.sent();
                        puzzleImg = getBase64StringFromDataURL(puzzleImageSrc);
                        pieceImg = getBase64StringFromDataURL(pieceImageSrc);
                        slideButtonEle = document.querySelector(ARCED_SLIDE_BUTTON_SELECTOR);
                        startX = getElementCenter(slideButtonEle).x;
                        startY = getElementCenter(slideButtonEle).y;
                        puzzleEle = document.querySelector(ARCED_SLIDE_PUZZLE_IMAGE_SELECTOR);
                        return [4 /*yield*/, getSlidePieceTrajectory(slideButtonEle, puzzleEle)];
                    case 4:
                        trajectory = _a.sent();
                        return [4 /*yield*/, arcedSlideApiCall({
                                piece_image_b64: pieceImg,
                                puzzle_image_b64: puzzleImg,
                                slide_piece_trajectory: trajectory
                            })];
                    case 5:
                        solution = _a.sent();
                        currentX = getElementCenter(slideButtonEle).x;
                        solutionDistanceBackwards = currentX - startX - solution;
                        overshoot = 6;
                        mouseStep = 2;
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                    case 6:
                        _a.sent();
                        i_1 = 0;
                        _a.label = 7;
                    case 7:
                        if (!(i_1 < solutionDistanceBackwards + overshoot)) return [3 /*break*/, 10];
                        moveMouseTo(currentX - i_1, startY + Math.random() * 5);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 10 + Math.random() * 5); })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        i_1 += mouseStep;
                        return [3 /*break*/, 7];
                    case 10: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 500); })];
                    case 11:
                        _a.sent();
                        currentX = getElementCenter(slideButtonEle).x;
                        i_2 = 0;
                        _a.label = 12;
                    case 12:
                        if (!(i_2 < overshoot + overshoot)) return [3 /*break*/, 15];
                        moveMouseTo(currentX + i_2, startY + Math.random() * 5);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 30); })];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14:
                        i_2++;
                        return [3 /*break*/, 12];
                    case 15: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 150); })];
                    case 16:
                        _a.sent();
                        currentX = getElementCenter(slideButtonEle).x;
                        i_3 = 0;
                        _a.label = 17;
                    case 17:
                        if (!(i_3 < overshoot)) return [3 /*break*/, 20];
                        moveMouseTo(currentX - i_3, startY + Math.random() * 5);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 50); })];
                    case 18:
                        _a.sent();
                        _a.label = 19;
                    case 19:
                        i_3++;
                        return [3 /*break*/, 17];
                    case 20: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 300); })];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, mouseUp(startX + solution, startY)];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 3000); })];
                    case 23:
                        _a.sent();
                        if (captchaIsPresent())
                            return [3 /*break*/, 24];
                        else
                            return [2 /*return*/];
                        _a.label = 24;
                    case 24:
                        i++;
                        return [3 /*break*/, 1];
                    case 25: return [2 /*return*/];
                }
            });
        });
    }
    function getSlidePieceTrajectory(slideButton, puzzle) {
        return __awaiter(this, void 0, void 0, function () {
            var sliderPieceContainer, slideBarWidth, timesPieceDidNotMove, slideButtonCenter, puzzleImageBoundingBox, trajectory, mouseStep, pixel, trajectoryElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sliderPieceContainer = document.querySelector(ARCED_SLIDE_PIECE_CONTAINER_SELECTOR);
                        console.log("got slider piece container");
                        slideBarWidth = getElementWidth(puzzle);
                        console.log("slide bar width: " + slideBarWidth);
                        timesPieceDidNotMove = 0;
                        slideButtonCenter = getElementCenter(slideButton);
                        puzzleImageBoundingBox = puzzle.getBoundingClientRect();
                        trajectory = [];
                        mouseStep = 4;
                        mouseDown(slideButtonCenter.x, slideButtonCenter.y);
                        slideButton.dispatchEvent(new MouseEvent("mousedown", {
                            cancelable: true,
                            bubbles: true,
                            view: window,
                            clientX: slideButtonCenter.x,
                            clientY: slideButtonCenter.y
                        }));
                        pixel = 0;
                        _a.label = 1;
                    case 1:
                        if (!(pixel < slideBarWidth)) return [3 /*break*/, 5];
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 20); })];
                    case 2:
                        _a.sent();
                        //moveMouseTo(slideButtonCenter.x + pixel, slideButtonCenter.y - pixel)
                        slideButton.dispatchEvent(new MouseEvent("mousemove", {
                            cancelable: true,
                            bubbles: true,
                            view: window,
                            clientX: slideButtonCenter.x + pixel,
                            clientY: slideButtonCenter.y - Math.log(pixel + 1)
                        }));
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 10 + Math.random() * 5); })];
                    case 3:
                        _a.sent();
                        trajectoryElement = getTrajectoryElement(pixel, puzzleImageBoundingBox, sliderPieceContainer);
                        trajectory.push(trajectoryElement);
                        if (trajectory.length < 100 / mouseStep)
                            return [3 /*break*/, 4];
                        if (pieceIsNotMoving(trajectory))
                            timesPieceDidNotMove++;
                        else
                            timesPieceDidNotMove = 0;
                        if (timesPieceDidNotMove >= 10 / mouseStep)
                            return [3 /*break*/, 5];
                        console.log("trajectory element:");
                        console.dir(trajectoryElement);
                        _a.label = 4;
                    case 4:
                        pixel += mouseStep;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/, trajectory];
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
            var i, sliderButton, buttonCenter, preRequestSlidePixels, puzzleSrc, pieceSrc, puzzleImg, pieceImg, solution, puzzleImageEle, distance, i_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 3)) return [3 /*break*/, 15];
                        sliderButton = document.querySelector(PUZZLE_BUTTON_SELECTOR);
                        buttonCenter = getElementCenter(sliderButton);
                        preRequestSlidePixels = 10;
                        return [4 /*yield*/, mouseDown(buttonCenter.x, buttonCenter.y, sliderButton)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, moveMouseTo(buttonCenter.x + preRequestSlidePixels, buttonCenter.y - preRequestSlidePixels, sliderButton)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, getImageSource(PUZZLE_PUZZLE_IMAGE_SELECTOR)];
                    case 4:
                        puzzleSrc = _a.sent();
                        return [4 /*yield*/, getImageSource(PUZZLE_PIECE_IMAGE_SELECTOR)];
                    case 5:
                        pieceSrc = _a.sent();
                        console.log("got image sources");
                        puzzleImg = getBase64StringFromDataURL(puzzleSrc);
                        pieceImg = getBase64StringFromDataURL(pieceSrc);
                        console.log("converted image sources to b64 string");
                        return [4 /*yield*/, puzzleApiCall(puzzleImg, pieceImg)];
                    case 6:
                        solution = _a.sent();
                        console.log("got API result: " + solution);
                        puzzleImageEle = document.querySelector(PUZZLE_PUZZLE_IMAGE_SELECTOR);
                        distance = computePuzzleSlideDistance(solution, puzzleImageEle);
                        i_4 = 1;
                        _a.label = 7;
                    case 7:
                        if (!(i_4 < distance - preRequestSlidePixels)) return [3 /*break*/, 11];
                        return [4 /*yield*/, moveMouseTo(buttonCenter.x + i_4 + preRequestSlidePixels, buttonCenter.y - Math.log(i_4))];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 10); })];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        i_4++;
                        return [3 /*break*/, 7];
                    case 11: return [4 /*yield*/, mouseUp(buttonCenter.x + distance, buttonCenter.x - distance)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 3000); })];
                    case 13:
                        _a.sent();
                        if (captchaIsPresent())
                            return [3 /*break*/, 14];
                        else
                            return [2 /*return*/];
                        _a.label = 14;
                    case 14:
                        i++;
                        return [3 /*break*/, 1];
                    case 15: return [2 /*return*/];
                }
            });
        });
    }
    function solveSemanticShapes() {
        return __awaiter(this, void 0, void 0, function () {
            var i, src, img, challenge, res, ele, _i, _a, point;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < 3)) return [3 /*break*/, 10];
                        return [4 /*yield*/, getImageSource(SEMANTIC_SHAPES_IMAGE, SEMANTIC_SHAPES_IFRAME)];
                    case 2:
                        src = _b.sent();
                        img = getBase64StringFromDataURL(src);
                        challenge = getTextContent(SEMANTIC_SHAPES_CHALLENGE_TEXT, SEMANTIC_SHAPES_IFRAME);
                        return [4 /*yield*/, semanticShapesApiCall(challenge, img)];
                    case 3:
                        res = _b.sent();
                        ele = document.querySelector("iframe").contentWindow.document.body.querySelector(SEMANTIC_SHAPES_IMAGE);
                        _i = 0, _a = res.proportionalPoints;
                        _b.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        point = _a[_i];
                        clickProportional(ele, point.proportionX, point.proportionY);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 1337); })];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 3000); })];
                    case 8:
                        _b.sent();
                        if (captchaIsPresent())
                            return [3 /*break*/, 9];
                        else
                            return [2 /*return*/];
                        _b.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    }
    function captchaIsPresent() {
        for (var i = 0; i < CAPTCHA_PRESENCE_INDICATORS.length; i++) {
            if (document.querySelector(CAPTCHA_PRESENCE_INDICATORS[i]) !== undefined) {
                console.log("captcha present based on selector: " + CAPTCHA_PRESENCE_INDICATORS[i]);
                return true;
            }
        }
        console.log("captcha not present");
        return false;
    }
    var isCurrentSolve;
    function solveCaptchaLoop() {
        return __awaiter(this, void 0, void 0, function () {
            var _, captchaType, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, findFirstElementToAppear(CAPTCHA_PRESENCE_INDICATORS)];
                    case 1:
                        _ = _a.sent();
                        console.log("Captcha detected");
                        return [4 /*yield*/, identifyCaptcha()];
                    case 2:
                        captchaType = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, creditsApiCall()];
                    case 4:
                        if ((_a.sent()) <= 0) {
                            console.log("out of credits");
                            alert("Out of SadCaptcha credits. Please boost your balance on sadcaptcha.com/dashboard.");
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        // Catch the error because we dont want to break the solver just because we failed to fetch the credits API
                        console.log("error making check credits api call: " + e_1);
                        return [3 /*break*/, 6];
                    case 6:
                        if (!isCurrentSolve) {
                            isCurrentSolve = true;
                            switch (captchaType) {
                                case CaptchaType.PUZZLE:
                                    solvePuzzle();
                                    break;
                                case CaptchaType.ARCED_SLIDE:
                                    solveArcedSlide();
                                    break;
                                case CaptchaType.SEMANTIC_SHAPES:
                                    solveSemanticShapes();
                                    break;
                            }
                        }
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 30000); })];
                    case 7:
                        _a.sent();
                        isCurrentSolve = false;
                        return [4 /*yield*/, solveCaptchaLoop()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    solveCaptchaLoop();
})();

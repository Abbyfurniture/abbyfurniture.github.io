var exports = {};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var _this = this;
var submit = document.querySelector("#submit");
var fullname = document.querySelector("input[name='name']");
var mobile = document.querySelector("input[name='mobile']");
var email = document.querySelector("input[name='email']");
var desc = document.querySelector("textarea[name='message']");
var error = document.querySelector(".error");
submit.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var data, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fullname.classList.remove("_invalid");
                mobile.classList.remove("_invalid");
                email.classList.remove("_invalid");
                error.innerHTML = "";
                if (fullname.value === "" || mobile.value === "") {
                    if (fullname.value === "")
                        fullname.classList.add("_invalid");
                    if (mobile.value === "")
                        mobile.classList.add("_invalid");
                    error.innerHTML = "Please fill in all required fields (*).";
                    return [2 /*return*/];
                }
                if (email.value != "") {
                    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                        email.classList.add("_invalid");
                        error.innerHTML = "Please enter a valid email address.";
                        return [2 /*return*/];
                    }
                }
                submit.classList.add("_loading");
                return [4 /*yield*/, fetch("/email", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            Name: fullname.value,
                            Email: email.value,
                            Mobile: mobile.value,
                            Message: desc.value
                        })
                    })];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.text()];
            case 2:
                result = _a.sent();
                submit.classList.remove("_loading");
                if (result === "Done") {
                    submit.classList.add("_done");
                    error.innerHTML = "Your email has been sent.";
                    error.style.color = "var(--primaryColor)";
                }
                else
                    error.innerHTML = "Error : " + result;
                return [2 /*return*/];
        }
    });
}); });


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBa0VBO0FBbEVBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFzQixDQUFDO0FBQ3RFLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQXFCLENBQUM7QUFDbEYsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBcUIsQ0FBQztBQUNsRixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFxQixDQUFDO0FBQ2hGLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQXFCLENBQUM7QUFDcEYsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQW9CLENBQUM7QUFFbEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs7Ozs7Z0JBQzdCLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRW5DLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUVyQixJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO29CQUM5QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRTt3QkFDckIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXZDLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxFQUFFO3dCQUNuQixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFckMsS0FBSyxDQUFDLFNBQVMsR0FBRyx5Q0FBeUMsQ0FBQztvQkFFNUQsc0JBQU87aUJBQ1Y7Z0JBRUQsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLCtDQUErQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3BFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUVoQyxLQUFLLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFDO3dCQUN4RCxzQkFBTztxQkFDVjtpQkFDSjtnQkFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFcEIscUJBQU0sS0FBSyxDQUFDLFFBQVEsRUFBRTt3QkFDL0IsTUFBTSxFQUFFLE1BQU07d0JBQ2QsT0FBTyxFQUFFOzRCQUNMLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ3JDO3dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUNqQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUs7NEJBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSzs0QkFDbEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLOzRCQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7eUJBQ3RCLENBQUM7cUJBQ0wsQ0FBQyxFQUFBOztnQkFYSSxJQUFJLEdBQUcsU0FXWDtnQkFFVyxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUExQixNQUFNLEdBQUcsU0FBaUI7Z0JBRTlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVwQyxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7b0JBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5QixLQUFLLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFBO29CQUM3QyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztpQkFDN0M7O29CQUVHLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQzs7OztLQUU3QyxDQUFDLENBQUMiLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBmdWxsbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSduYW1lJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgbW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J21vYmlsZSddXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J2VtYWlsJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVtuYW1lPSdtZXNzYWdlJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgZnVsbG5hbWUuY2xhc3NMaXN0LnJlbW92ZShcIl9pbnZhbGlkXCIpO1xyXG4gICAgbW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJfaW52YWxpZFwiKTtcclxuICAgIGVtYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJfaW52YWxpZFwiKTtcclxuXHJcbiAgICBlcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGlmIChmdWxsbmFtZS52YWx1ZSA9PT0gXCJcIiB8fCBtb2JpbGUudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBpZiAoZnVsbG5hbWUudmFsdWUgPT09IFwiXCIpXHJcbiAgICAgICAgICAgIGZ1bGxuYW1lLmNsYXNzTGlzdC5hZGQoXCJfaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKG1vYmlsZS52YWx1ZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgbW9iaWxlLmNsYXNzTGlzdC5hZGQoXCJfaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgZXJyb3IuaW5uZXJIVE1MID0gXCJQbGVhc2UgZmlsbCBpbiBhbGwgcmVxdWlyZWQgZmllbGRzICgqKS5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbWFpbC52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgaWYgKCEvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QoZW1haWwudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJfaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGVycm9yLmlubmVySFRNTCA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcIl9sb2FkaW5nXCIpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcIi9lbWFpbFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBOYW1lOiBmdWxsbmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgRW1haWw6IGVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICBNb2JpbGU6IG1vYmlsZS52YWx1ZSxcclxuICAgICAgICAgICAgTWVzc2FnZTogZGVzYy52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gYXdhaXQgZGF0YS50ZXh0KCk7XHJcblxyXG4gICAgc3VibWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9hZGluZ1wiKTtcclxuXHJcbiAgICBpZiAocmVzdWx0ID09PSBcIkRvbmVcIikge1xyXG4gICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwiX2RvbmVcIik7XHJcbiAgICAgICAgZXJyb3IuaW5uZXJIVE1MID0gXCJZb3VyIGVtYWlsIGhhcyBiZWVuIHNlbnQuXCJcclxuICAgICAgICBlcnJvci5zdHlsZS5jb2xvciA9IFwidmFyKC0tcHJpbWFyeUNvbG9yKVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIGVycm9yLmlubmVySFRNTCA9IFwiRXJyb3IgOiBcIiArIHJlc3VsdDtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG4iXX0=

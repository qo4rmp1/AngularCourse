import { AbstractControl } from "@angular/forms";

export function mustInKao(ctrl: AbstractControl) {
  if (ctrl.value.indexOf('高雄') >= 0) {
    return null;
  } else {
    return { 'must-In-Kao': '地址需包含高雄'};
  }
}

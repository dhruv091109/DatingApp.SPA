import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate <MemberEditComponent> {
    canDeactivate (component: MemberEditComponent) {
        if(component.editForm.dirty) {
            return confirm('Are you sure you want to continue, because you have made some changes, it will be lost');
        }    
        return true;
    }
}
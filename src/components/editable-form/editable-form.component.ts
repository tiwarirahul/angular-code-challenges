import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-editable-form',
  templateUrl: './editable-form.component.html',
  styleUrls: ['./editable-form.component.css'],
})
export class EditableFormComponent implements OnInit {
  constructor(
    private service: SharedDataService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  onClick(value) {
    console.log(value);
    this.service.data = value;
    this.service.change$.next(true);
    // this.cd.detectChanges();
  }
}

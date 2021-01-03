import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-cform',
  templateUrl: './cform.component.html',
  styleUrls: ['./cform.component.scss']
})
export class CformComponent implements OnInit {

  @Input() isHandset: boolean;

  form: FormGroup;
  loading = false;
  serverMessage: string;
  text: string;
  cfromCirclesColor: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cfromCirclesColor = "white";
    this.text = "Let's talk"

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.minLength(10),Validators.required]]
    });
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get message() {
    return this.form.get('message');
  }

  async onSubmit(){
    this.loading = true;
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;



    this.loading = false;

  }

}

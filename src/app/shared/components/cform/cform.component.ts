import { CformState } from './cform.state.enum';
import { Message } from './../../models/message.model';
import { DbService } from './../../services/db.service';
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
  cformState: number;


  constructor(private fb: FormBuilder, private db: DbService) { }

  ngOnInit(): void {
    this.cfromCirclesColor = "white";
    this.text = "Let's talk"

    this.cformState = CformState.iddle;

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
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

    const messageToSave: Message = {
      name,
      email,
      message
    }

    try {
      await this.db.saveMessage(messageToSave)
      .then( res => {
        this.form.reset();
        this.cformState = CformState.success;
        setTimeout(() => {
          this.cformState = CformState.iddle;
        }, 3000);
      });

    } catch (error) {
        this.cformState = CformState.error;
        setTimeout(() => {
          this.cformState = CformState.iddle;
        }, 3000);
    }

    this.loading = false;

  }

}

import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent implements OnInit {

  verifyExistForm!: FormGroup;
  createAccountForm!: FormGroup;
  loginForm!: FormGroup;
  accountExist: any = "notConnected"

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    // Form for verify existance of the account
    this.verifyExistForm = this.formBuilder.group({
      email: [null]
    });

    // Form for creation of account
    this.createAccountForm = this.formBuilder.group({
      email: [null],
      username: [null],
      password: [null]
    });

    this.loginForm = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmitVerifyExistForm() {
    this.authenticationService.getUser(this.verifyExistForm.value).subscribe((res) => {
      this.accountExist = res;
    });
  }

  onSubmitCreateAccountForm() {
    
  }

  onSubmitLoginAccountForm() {
    
  }

  changeAccount(){
    location.reload();
  }
}

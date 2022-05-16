import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataConnectionService } from 'src/app/services/data-connection.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  form: FormGroup;

  public submitted: boolean = false;
  public loading: boolean = false;
  public validPassword: boolean = true;
  public agreedToTOS: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private connection: DataConnectionService) { }

  ngOnInit() 
  {
    if (sessionStorage.getItem("loggedIn") != null) 
    {
      this.router.navigateByUrl('/home');
      return;
    }
    this.form = this.formBuilder.group
    ({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstName: ['', Validators.compose([Validators.required, Validators.pattern("[^0-9]*")])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern("[^0-9]*")])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{10}")])],
      password: ['', Validators.compose([Validators.required, Validators.pattern("[^ ]{6,}")])],
      confirmPassword: ['', Validators.required],
      tos: ['false', Validators.pattern("true")]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSignup()
  {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.form.invalid) 
    {
      this.loading = false;
      return;
    }

    this.loading = false;

    var data = {
      email: this.f.email.value,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      phone: this.f.phone.value,
      password: this.f.password.value,
      isActive: 1
    };

    this.connection.register(data);

    this.router.navigateByUrl('/login')
  }

  updateAgreed(b)
  {
    this.agreedToTOS = b;
  }

  checkPasswords()
  {
    if(this.f.password.value == this.f.confirmPassword.value) this.validPassword = true;
    else this.validPassword = false;
  }
}

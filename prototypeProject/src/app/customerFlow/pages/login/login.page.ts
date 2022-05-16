import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataConnectionService } from 'src/app/services/data-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  form: FormGroup;

  public submitted: boolean = false;
  public loading: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private connection: DataConnectionService) { }

  ngOnInit() 
  {
    if (sessionStorage.getItem("loggedIn") != null) 
    {
      this.router.navigateByUrl('/home');
      return;
    }
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  onEnter(keyCode)
  {
    //console.log(keyCode);
    if (keyCode == 13) this.onLogin();
    else this.submitted = false;
  }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

  async onLogin()
  {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.form.invalid) 
    {
      this.loading = false;
      return;
    }

    var data = {
      email: this.f.email.value,
      password: this.f.password.value
    };

    if (this.connection.login(data) == true) 
    {

    }
    this.loading = false;
    sessionStorage.setItem("loggedIn", "true");
    this.router.navigateByUrl('/home')
    this.submitted = false;
    //else this.loading = false;
  }
}

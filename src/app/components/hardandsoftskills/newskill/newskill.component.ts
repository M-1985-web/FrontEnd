import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SoftSkill } from 'src/app/model/soft-skill';
import { SkillService } from 'src/app/service/skill.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css'],
})
export class NewskillComponent implements OnInit {
  isLogged = false;
  nombreS: string;
  capacidadS: number;
  tipoS: string;

  constructor(
    private skillS: SkillService,
    private router: Router,
    private softSkills: SoftSkillService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate1(): void {
    const skill = new Skill(this.nombreS, this.capacidadS, this.tipoS);
    if (skill.tipoS == 'hard') {
      this.onCreate();
    } else {
      if (skill.tipoS == 'soft') {
        this.oncreateSoft();
      }
    }
  }
  oncreateSoft(): void {
    const skill = new SoftSkill(this.nombreS, this.capacidadS, this.tipoS);
    this.softSkills.save(skill).subscribe(
      (data) => {
        alert('Skill Agregada con exito');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }

  onCreate(): void {
    const skill = new Skill(this.nombreS, this.capacidadS, this.tipoS);
    this.skillS.save(skill).subscribe(
      (data) => {
        alert('Skill Agregada');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo.123');
        this.router.navigate(['']);
      }
    );
  }
}

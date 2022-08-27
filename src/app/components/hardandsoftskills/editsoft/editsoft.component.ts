import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/soft-skill';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editsoft',
  templateUrl: './editsoft.component.html',
  styleUrls: ['./editsoft.component.css'],
})
export class EditsoftComponent implements OnInit {
  skill: SoftSkill = null;
  isLogged = false;

  constructor(
    private softSkills: SoftSkillService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    const id = this.activateRouter.snapshot.params['id'];
    this.softSkills.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Error al encontrar Skills');
        this.router.navigate(['']);
      }
    );
  }

  updatesoft(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.softSkills.update(id, this.skill).subscribe(
      (data) => {
        alert('Skill actualizada con exito.');
        this.router.navigate(['']);
      },
      (err) => {
        alert('No se pudo actualizar.');
        this.router.navigate(['']);
      }
    );
  }
}

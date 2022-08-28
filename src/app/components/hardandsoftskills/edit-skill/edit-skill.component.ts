import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css'],
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  //skillsoft: SoftSkill = null;
  isLogged = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private skills: SkillService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    const id = this.activatedRouter.snapshot.params['id'];
    this.skills.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Error al modicar skills');
        this.router.navigate(['']);
      }
    );
  }

  updatehard(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skills.update(id, this.skill).subscribe(
      (data) => {
        alert('Skill actualizada.');
        this.router.navigate(['']);
      },
      (err) => {
        alert('No se pudo actualizar.');
      }
    );
  }
}

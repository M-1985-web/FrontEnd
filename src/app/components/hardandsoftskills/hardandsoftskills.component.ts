import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SoftSkill } from 'src/app/model/soft-skill';
import { SkillService } from 'src/app/service/skill.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardandsoftskills',
  templateUrl: './hardandsoftskills.component.html',
  styleUrls: ['./hardandsoftskills.component.css'],
})
export class HardandsoftskillsComponent implements OnInit {
  skill: Skill[] = [];
  tipoS: string;
  soft: SoftSkill[] = [];

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService,
    private softSkills: SoftSkillService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    this.cargarSoftSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.skillS.lista().subscribe((data) => {
      this.skill = data;
    });
  }

  cargarSoftSkill(): void {
    this.softSkills.lista().subscribe((data) => {
      this.soft = data;
    });
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        (data) => {
          alert('se elimino con exito');
          this.cargarSkill();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }
  borrarsoft(id?: number) {
    if (id != undefined) {
      this.softSkills.delete(id).subscribe(
        (data) => {
          alert('se elimino con exito');
          this.cargarSoftSkill();
        },
        (err) => {
          alert('No se pudo Eliminar');
        }
      );
    }
  }
}

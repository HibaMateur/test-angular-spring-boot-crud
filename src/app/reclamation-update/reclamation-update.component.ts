import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../reclamation';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-reclamation-update',
  templateUrl: './reclamation-update.component.html',
  styleUrls: ['./reclamation-update.component.css'],
})
export class ReclamationUpdateComponent implements OnInit {
  id: number;
  reclamation: Reclamation = new Reclamation();
  constructor(
    private reclamationService: ReclamationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.reclamationService.getReclamationById(this.id).subscribe(
      (data) => {
        this.reclamation = data;
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.reclamationService
      .updateReclamation(this.id, this.reclamation)
      .subscribe(
        (data) => {
          this.getReclamationById();
        },
        (error) => console.log(error)
      );
  }
  getReclamationById() {
    this.router.navigate(['/reclamation-list']);
  }
}

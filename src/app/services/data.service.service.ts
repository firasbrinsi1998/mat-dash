import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Recruiter} from '../models/recruiter.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = '';

  dataChange: BehaviorSubject<Recruiter[]> = new BehaviorSubject<Recruiter[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Recruiter[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllRecruiters(): void {
    this.httpClient.get<Recruiter[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addRecruiter (recruiter: Recruiter): void {
    this.dialogData = recruiter;
  }

  updateRecruiter (recruiter: Recruiter): void {
    this.dialogData = recruiter;
  }

  deleteRecruiter (name: string): void {
    console.log(name);
  }
}
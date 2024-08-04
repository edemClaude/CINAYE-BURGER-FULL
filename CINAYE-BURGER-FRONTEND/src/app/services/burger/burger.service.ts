import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Burger} from "../../models/burger/burger";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  /**
   * Constructor for initializing the HttpClient
   *
   * @param http - The HttpClient module for making HTTP requests
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves a list of burgers from the server
   *
   * @returns An Observable of type Burger[] representing the list of burgers
   */
  getBurgers() : Observable<Burger[]>{
    return this.http.get<Burger[]>('http://localhost:8000/api/burgers');
  }

  /**
   * Retrieves a list of burger from the server that are not archived
   *
   * @returns An Observable of type Burger[] representing the list of burger
   */
  getUnarchivedBurgers() : Observable<Burger[]>{
    return this.http.get<Burger[]>('http://localhost:8000/api/unarchived-burgers');
  }
  /**
   * Retrieves a specific burger by its ID from the API.
   * @param id The ID of the burger to retrieve.
   * @returns An Observable of the requested burger.
   */
  getBurger(id: number) : Observable<Burger>{
    return this.http.get<Burger>(`http://localhost:8000/api/burgers/${id}`);
  }

  /**
   * Adds a new burger to the API.
   * @param burger
   */
  addBurger(burger: any) : Observable<Burger>{
    return this.http.post<Burger>('http://localhost:8000/api/burgers', burger);
  }

  /**
   * Updates an existing burger in the API.
   * @param burger
   */
  updateBurger(burger: Burger) : Observable<Burger>{
    return this.http.put<Burger>(`http://localhost:8000/api/burgers/${burger.id}`, burger);
  }

  /**
   * Archives an existing burger in the API.
   * @param id
   */
  archiverBurger(id: number | undefined) : Observable<Burger>{
    return this.http.put<Burger>(`http://localhost:8000/api/burgers/${id}/archive`, null);
  }

  /**
   * Restores an archived burger in the API.
   * @param id
   */
  restoreBurger(id: number | undefined) : Observable<Burger>{
    return this.http.put<Burger>(`http://localhost:8000/api/burgers/${id}/restore`, null);
  }
}

import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BurgerService} from "../../services/burger.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-burger-form',
  templateUrl: './burger-form.component.html',
  styleUrl: './burger-form.component.css'
})
export class BurgerFormComponent implements OnInit {

  // definition of input properties
  @Input() burger!: any;
  @Input() editMode: boolean = false;
  verifyForm: boolean = false;
  burgerForm: any;
  fileToUpload: File | null = null;

  /**
   * Constructor for BurgerComponent
   *
   * @param httpClient - HttpClient for API calls
   * @param burgerService - Service for burger-related operations
   * @param formBuilder - FormBuilder for creating form controls
   * @param router - Router for navigation
   */
  constructor(private httpClient: HttpClient, private burgerService: BurgerService, private formBuilder: FormBuilder,
              private router: Router) {}

  /**
   *  Initialize the burgerForm with form controls based on editMode.
   */
  ngOnInit(): void {
    this.initForm();
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement; // Assertion de type
    if (input.files && input.files[0]) {
      this.fileToUpload = input.files[0];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['burger']) {
      this.initForm();
    }
  }

  initForm(): void {
    this.burgerForm = this.formBuilder.group({
      name: [this.burger?.name || '', Validators.required],
      price: [this.burger?.price || '', Validators.required],
      description: [this.burger?.description || '', Validators.required],
      image: [this.burger?.image || '', Validators.required],
      is_archived: [this.burger?.is_archived || false],
      id: [this.burger?.id || 0]
    });
  }

  /**
   * Handles the form submission.
   * Sets verification form flag to true and checks for form validity before making an API call.
   * If in edit mode, updates the burger. Otherwise, adds a new burger.
   */
  onSubmit() {
    // Set verification form flag to true
    this.verifyForm = true;

    // Check if the form is invalid
    if (this.burgerForm.invalid) {
      return;
    }

    // Get form data

    const formData = new FormData();
    formData.append('name', this.burgerForm.get('name')?.value);
    formData.append('price', this.burgerForm.get('price')?.value);
    formData.append('description', this.burgerForm.get('description')?.value);
    if (this.fileToUpload) {
      formData.append('image', this.fileToUpload);  // Ajoutez le fichier ici
    }
    formData.append('is_archived', this.burgerForm.get('is_archived')?.value);
    formData.append('id', this.burgerForm.get('id')?.value);

    // Determine whether to update or add a new burger based on editMode
    const apiCall = this.editMode ? this.burgerService.updateBurger(formData)
      : this.burgerService.addBurger(formData);

    // Subscribe to the API call response
    apiCall.subscribe(
      (data) => {
        // Redirect to the burgers page upon success
        this.router.navigate(['/burger']).then(() => {
          // Log any success messages
          console.log(data);
        });
      },
      (error) => {
        // Log any errors to the console
        console.error(error);
      }
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
 
@Component({
  selector: 'app-contact-us-modal',
  templateUrl: './contact-us-modal.component.html',
  styleUrls: ['./contact-us-modal.component.scss']
})
export class ContactUsModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  inquiryPlaceholder: string = ''; // Variable to store the localized placeholder
  companyOptions = ['Real Estate Development', 'Projects Management', 'Real Estate Investment'];
  individualOptions = ['Villa', 'Apartments', 'Lands'];
  currentDropdownOptions: string[] = []; // Stores options dynamically based on selection
  activeType: 'company' | 'individual' | null = null;
  ngOnInit() {    this.currentDropdownOptions = [];

  }
  isModalOpen = false;
  contactForm: FormGroup;
  onClose() {
    this.close.emit(); // Emit close event
  }
  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private http: HttpClient, public translate: TranslateService) {
    this.inquiryPlaceholder = this.translate.instant('modal.inquiry_placeholder');
    this.translate.get('modal.inquiry_placeholder').subscribe((value: string) => {
      this.inquiryPlaceholder = value;
    });
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]], // Add required validation
      email: ['', [Validators.required, Validators.email]], // Add required and email validation
      phone: ['', [Validators.required]], // Add required validation
      company: ['', [Validators.required]], // Add required validation
      jobTitle: [''], 
      inquiry: ['', [Validators.required]],  
      message: ['', [Validators.required]],  
    });
    
    
  }
 
  onSelectType(type: 'company' | 'individual') {
    this.activeType = type;
  
    if (type === 'company') {
      this.currentDropdownOptions = [
        this.translate.instant('dropdown.company_options.real_estate_development'),
        this.translate.instant('dropdown.company_options.projects_management'),
        this.translate.instant('dropdown.company_options.real_estate_investment'),
      ];
    } else {
      this.currentDropdownOptions = [
        this.translate.instant('dropdown.individual_options.villa'),
        this.translate.instant('dropdown.individual_options.apartments'),
        this.translate.instant('dropdown.individual_options.lands'),
      ];
    }
  
    this.contactForm.get('inquiry')?.setValue('');
    this.cdr.detectChanges(); // Trigger change detection
  }
  
  
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
  
       const backendData = {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone,  
        company_name: formData.company,  
        job_title: formData.jobTitle,
        inquiry_type: formData.inquiry,  
        message: formData.message,  
      };
  
      console.log('Form Data Sent to Backend:', backendData);  
  
      this.http.post('https://www.earlybirds.pro/server/submit-form', backendData).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          this.closeModal();  
          this.onClose();  
        },
        (error) => {
          console.error('Error submitting form', error);
        }
      );
    } else {
      console.error('Form is invalid', this.contactForm.errors);  
    }
  }
  
  
  
}

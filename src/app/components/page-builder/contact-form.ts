import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface ContactForm {
  _type: 'contactForm';
  heading?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  description?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  submitButtonText?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  emailAddress?: string;
}

@Component({
  selector: 'app-contact-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <section class="contact-form-section">
      <div class="container">
        @if (data.heading) {
          <h2>{{ data.heading[currentLang] }}</h2>
        }
        @if (data.description) {
          <p class="description">{{ data.description[currentLang] }}</p>
        }

        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
          <mat-form-field appearance="outline">
            <mat-label>{{ labels[currentLang].name }}</mat-label>
            <input matInput formControlName="name" required />
            @if (contactForm.get('name')?.hasError('required') && contactForm.get('name')?.touched) {
              <mat-error>{{ labels[currentLang].nameRequired }}</mat-error>
            }
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>{{ labels[currentLang].email }}</mat-label>
            <input matInput type="email" formControlName="email" required />
            @if (contactForm.get('email')?.hasError('required') && contactForm.get('email')?.touched) {
              <mat-error>{{ labels[currentLang].emailRequired }}</mat-error>
            }
            @if (contactForm.get('email')?.hasError('email') && contactForm.get('email')?.touched) {
              <mat-error>{{ labels[currentLang].emailInvalid }}</mat-error>
            }
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>{{ labels[currentLang].subject }}</mat-label>
            <input matInput formControlName="subject" required />
            @if (contactForm.get('subject')?.hasError('required') && contactForm.get('subject')?.touched) {
              <mat-error>{{ labels[currentLang].subjectRequired }}</mat-error>
            }
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>{{ labels[currentLang].message }}</mat-label>
            <textarea matInput formControlName="message" rows="6" required></textarea>
            @if (contactForm.get('message')?.hasError('required') && contactForm.get('message')?.touched) {
              <mat-error>{{ labels[currentLang].messageRequired }}</mat-error>
            }
          </mat-form-field>

          @if (submitted) {
            <div class="success-message">
              {{ labels[currentLang].successMessage }}
            </div>
          }

          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="contactForm.invalid || submitting"
          >
            {{ data.submitButtonText ? data.submitButtonText[currentLang] : labels[currentLang].submit }}
          </button>
        </form>
      </div>
    </section>
  `,
  styles: `
    .contact-form-section {
      padding: 3rem 1rem;
      background-color: rgba(255, 255, 255, 0.03);
      margin-bottom: 2rem;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--color-accent);
      text-align: center;
    }

    .description {
      text-align: center;
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .contact-form mat-form-field {
      width: 100%;
    }

    .success-message {
      padding: 1rem;
      background-color: rgba(132, 169, 192, 0.2);
      border-left: 4px solid var(--color-blue);
      color: var(--color-accent);
      border-radius: 4px;
    }

    button[type="submit"] {
      align-self: flex-start;
      min-width: 150px;
    }

    @media (min-width: 768px) {
      .contact-form-section {
        padding: 4rem 2rem;
      }

      h2 {
        font-size: 2.5rem;
      }
    }

    ::ng-deep .contact-form mat-form-field .mat-mdc-text-field-wrapper {
      background-color: rgba(255, 255, 255, 0.05);
    }

    ::ng-deep .contact-form mat-form-field .mat-mdc-form-field-focus-overlay {
      background-color: rgba(255, 255, 255, 0.05);
    }

    ::ng-deep .contact-form .mat-mdc-outlined-button {
      background-color: var(--color-secondary);
    }
  `,
})
export class ContactFormComponent {
  @Input() data!: ContactForm;
  @Input() currentLang: 'de' | 'en' | 'it' | 'es' = 'de';

  contactForm: FormGroup;
  submitted = false;
  submitting = false;

  labels = {
    de: {
      name: 'Name',
      nameRequired: 'Name ist erforderlich',
      email: 'E-Mail',
      emailRequired: 'E-Mail ist erforderlich',
      emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      subject: 'Betreff',
      subjectRequired: 'Betreff ist erforderlich',
      message: 'Nachricht',
      messageRequired: 'Nachricht ist erforderlich',
      submit: 'Absenden',
      successMessage: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
    },
    en: {
      name: 'Name',
      nameRequired: 'Name is required',
      email: 'Email',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      subject: 'Subject',
      subjectRequired: 'Subject is required',
      message: 'Message',
      messageRequired: 'Message is required',
      submit: 'Submit',
      successMessage: 'Thank you for your message! We will get back to you soon.',
    },
    it: {
      name: 'Nome',
      nameRequired: 'Il nome è obbligatorio',
      email: 'Email',
      emailRequired: "L'email è obbligatoria",
      emailInvalid: 'Inserisci un indirizzo email valido',
      subject: 'Oggetto',
      subjectRequired: "L'oggetto è obbligatorio",
      message: 'Messaggio',
      messageRequired: 'Il messaggio è obbligatorio',
      submit: 'Invia',
      successMessage: 'Grazie per il tuo messaggio! Ti risponderemo presto.',
    },
    es: {
      name: 'Nombre',
      nameRequired: 'El nombre es obligatorio',
      email: 'Correo electrónico',
      emailRequired: 'El correo electrónico es obligatorio',
      emailInvalid: 'Por favor ingrese una dirección de correo electrónico válida',
      subject: 'Asunto',
      subjectRequired: 'El asunto es obligatorio',
      message: 'Mensaje',
      messageRequired: 'El mensaje es obligatorio',
      submit: 'Enviar',
      successMessage: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    },
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitting = true;
      const formData = this.contactForm.value;

      // Simulate form submission (you would send this to your backend or email service)
      console.log('Form submitted:', formData);
      console.log('Recipient email:', this.data.emailAddress);

      // In a real app, you would call an API here
      setTimeout(() => {
        this.submitting = false;
        this.submitted = true;
        this.contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }, 1000);
    }
  }
}

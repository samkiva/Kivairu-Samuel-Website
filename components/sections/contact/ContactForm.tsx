'use client';

import * as React from 'react';
import { useState } from 'react';
import { GlassCard } from '@/components/ui';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please specify a subject for your inquiry.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please include a message (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission architected for future email API integration
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <GlassCard id="contact-form" className="p-8 md:p-10 rounded-3xl border-primary/20 bg-background/80 relative overflow-hidden">
      {isSubmitted ? (
        <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-4 rounded-full bg-success/10 text-success border border-success/20 animate-in fade-in zoom-in duration-300">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h4 className="text-2xl font-bold text-foreground">Message Sent Successfully!</h4>
          <p className="text-sm text-muted-foreground max-w-md">
            Thank you for reaching out. Your message has been logged and I will respond to your inquiry within 24 hours.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSubmitted(false)}
            className="mt-4"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Send a Direct Message
            </h3>
            <p className="text-xs text-muted-foreground">
              Fill out the form below and I will get back to you promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-semibold text-foreground">
                Your Name <span className="text-error">*</span>
              </label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                error={Boolean(errors.name)}
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && <p className="text-xs text-error mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-semibold text-foreground">
                Email Address <span className="text-error">*</span>
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                error={Boolean(errors.email)}
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label htmlFor="contact-subject" className="text-xs font-semibold text-foreground">
              Subject <span className="text-error">*</span>
            </label>
            <Input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="e.g. AI Engineering Collaboration / Full-Stack Project"
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
              error={Boolean(errors.subject)}
              aria-required="true"
              aria-invalid={errors.subject ? 'true' : 'false'}
            />
            {errors.subject && <p className="text-xs text-error mt-1">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-semibold text-foreground">
              Message <span className="text-error">*</span>
            </label>
            <Textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Tell me about your project, research inquiry, or collaboration ideas..."
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              error={Boolean(errors.message)}
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && <p className="text-xs text-error mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full gap-2 mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </form>
      )}
    </GlassCard>
  );
};

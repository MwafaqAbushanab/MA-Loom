import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Calendar, Clock, Building, Phone, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm, type ContactFormData } from '../services/formService';

interface ContactFormProps {
  defaultService?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ defaultService = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    defaultValues: {
      service: defaultService
    }
  });

  const services = [
    { value: 'Design, Automate, Deliver', label: 'Workflow Automation & AI' },
    { value: 'Flow & Rhythm Consulting', label: 'Agile & Team Optimization' },
    { value: 'Product Strategy & Ventures', label: 'Product Strategy & MVP Development' },
    { value: 'Lokio Partnership', label: 'Lokio - Smart Locksmith Platform' },
    { value: 'Fresh Flow Partnership', label: 'Fresh Flow - Eco-Tech Juice Venture' },
    { value: 'General Consultation', label: 'General Business Consultation' },
    { value: 'Other', label: 'Other / Custom Project' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await submitContactForm(data);
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary-800 dark:text-white mb-4">
          Let's Transform Your Workflow
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Ready to go from chaos to cadence? Share your challenge and let's design a solution that scales.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
          <div>
            <p className="text-green-800 dark:text-green-200 font-medium">
              Thank you for reaching out!
            </p>
            <p className="text-green-600 dark:text-green-400 text-sm">
              I'll review your request and send you a calendar invite within 24 hours.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-3" />
          <div>
            <p className="text-red-800 dark:text-red-200 font-medium">
              Something went wrong
            </p>
            <p className="text-red-600 dark:text-red-400 text-sm">
              Please try again or email me directly at mwafaq@maloom.studio
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User className="inline h-4 w-4 mr-2" />
              Full Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-primary-700 dark:text-white transition-colors"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Mail className="inline h-4 w-4 mr-2" />
              Email Address *
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              type="email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-primary-700 dark:text-white transition-colors"
              placeholder="your.email@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Building className="inline h-4 w-4 mr-2" />
              Company / Organization
            </label>
            <input
              {...register('company')}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-primary-700 dark:text-white transition-colors"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Phone className="inline h-4 w-4 mr-2" />
              Phone Number
            </label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-primary-700 dark:text-white transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Service of Interest *
          </label>
          <select
            {...register('service', { required: 'Please select a service' })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-primary-700 dark:text-white transition-colors"
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.service.message}</p>
          )}
        </div>

        {/* Preferred Meeting Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Calendar className="inline h-4 w-4 mr-2" />
              Preferred Date
            </label>
            <input
              {...register('preferredDate')}
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-primary-700 dark:text-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Clock className="inline h-4 w-4 mr-2" />
              Preferred Time (CET)
            </label>
            <select
              {...register('preferredTime')}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-primary-700 dark:text-white transition-colors"
            >
              <option value="">Select time...</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time} CET
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <MessageSquare className="inline h-4 w-4 mr-2" />
            Tell me about your challenge *
          </label>
          <textarea
            {...register('message', { required: 'Please describe your challenge' })}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent dark:bg-primary-700 dark:text-white transition-colors resize-none"
            placeholder="Describe your current workflow challenges, team pain points, or business goals. The more context you provide, the better I can tailor our conversation."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-accent-blue hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
            } text-white`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Schedule Our Conversation
              </>
            )}
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            By submitting this form, you'll receive a confirmation email and calendar invite.
            <br />
            Need immediate assistance? Email me directly at{' '}
            <a href="mailto:mwafaq@maloom.studio" className="text-accent-blue hover:underline">
              mwafaq@maloom.studio
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
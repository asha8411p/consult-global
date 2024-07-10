'use client'
import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  caseReason: string;
  description: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseReason: '',
    description: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [notification, setNotification] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: value.trim() === '' ? 'This field is required' : ''
    });
    setSubmitMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: FormErrors = {};
    let isValid = true;

    for (const [key, value] of Object.entries(formData)) {
      if (value.trim() === '') {
        errors[key as keyof FormData] = 'This field is required';
        isValid = false;
      }
    }

    if (!isValid) {
      setFormErrors(errors);
      setSubmitMessage('Please fill all required fields');
      return;
    }

    // Submit form logic here
    console.log('Form submitted:', formData);
    setNotification('Request sent! One of our consultants will contact you shortly.');
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 px-8 py-16">
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
        <p className="mb-8 text-gray-700">Complete the form below and a member of our team will reach out to you about your request as quickly as possible.</p>
        {submitMessage && <p className="text-red-500 mb-4">{submitMessage}</p>}
        {notification && <p className="text-green-500 mb-4">{notification}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" className={`w-full border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Enter your first name" onChange={handleChange} required />
              {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" className={`w-full border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Enter your last name" onChange={handleChange} required />
              {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className={`w-full border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Enter your email" onChange={handleChange} required />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" className={`w-full border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Enter your phone number" onChange={handleChange} required />
              {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="caseReason">Case Reason:</label>
            <select id="caseReason" name="caseReason" className={`w-full border ${formErrors.caseReason ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`} onChange={handleChange} required>
              <option value="">--None--</option>
              <option value="studyInAustralia">Study in Australia</option>
              <option value="importExport">Import/Export</option>
              <option value="migrationServices">Migration Services</option>
              <option value="postLandingServices">Post-Landing Services</option>
              <option value="postLandingServices">Other</option>
            </select>
            {formErrors.caseReason && <p className="text-red-500 text-sm">{formErrors.caseReason}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="description">Description:</label>
            <textarea id="description" name="description" className={`w-full border ${formErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32`} placeholder="Enter your message" onChange={handleChange} required></textarea>
            {formErrors.description && <p className="text-red-500 text-sm">{formErrors.description}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">Submit</button>
        </form>
      </div>
      <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
        <h2 className="text-3xl font-bold mb-6">Call or email us</h2>
        <p className="mb-4 text-gray-700"><strong>Phone:</strong> +61 401 744 551</p>
        <p className="text-gray-700"><strong>Email:</strong> kamini.soni@consultglobal.com.au</p>
      </div>
    </div>
  );
}
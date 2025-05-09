import { ContactForm } from '@/types';

export async function sendContactForm(data: ContactForm): Promise<{ success: boolean; message: string }> {
  try {
    // TODO: Replace with actual API endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending contact form:', error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
}

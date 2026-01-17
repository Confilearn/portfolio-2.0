/// <reference types="vite/client" />

export const config = {
  emailJsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  emailJsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  emailJsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  githubLink: import.meta.env.VITE_GITHUB_LINK,
  linkedinLink: import.meta.env.VITE_LINKEDIN_LINK,
  twitterLink: import.meta.env.VITE_TWITTER_LINK,
};

// .env schema:

// VITE_EMAILJS_SERVICE_ID=
// VITE_EMAILJS_TEMPLATE_ID=
// VITE_EMAILJS_PUBLIC_KEY=
// VITE_GITHUB_LINK=
// VITE_LINKEDIN_LINK=
// VITE_TWITTER_LINK=

// Note: create an account at https://www.emailjs.com/ to get the EmailJS credentials.

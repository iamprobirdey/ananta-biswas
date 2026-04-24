import {
  Activity,
  AudioLines,
  Baby,
  Ear,
  Mail,
  MapPin,
  Mic,
  PhoneCall,
  RotateCw,
  ShieldCheck,
  Stethoscope,
  TimerReset,
  Waves,
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Patient Feedback", href: "#feedback" },
];

export const trustBadges = [
  "Experienced ENT Specialist",
  "Easy Clinic Contact",
  "Patient-Centered Care",
];

export const highlightStats = [
  {
    title: "3 Years Experience",
    description: "Trusted ENT consultation for adults, seniors, and children.",
    icon: Stethoscope,
  },
  {
    title: "Same-Week Appointments",
    description: "Fast clinic response with guided follow-up support.",
    icon: TimerReset,
  },
  {
    title: "Precise Diagnosis",
    description: "Evidence-based treatment plans designed around your symptoms.",
    icon: ShieldCheck,
  },
];

export const services = [
  {
    title: "Ear Infection Treatment",
    description: "Targeted care for ear pain, discharge, blocked sensation, and recurring infections.",
    icon: Ear,
  },
  {
    title: "Hearing Problems",
    description: "Assessment and management for hearing loss, ringing, and hearing imbalance.",
    icon: AudioLines,
  },
  {
    title: "Sinus & Allergy Care",
    description: "Relief plans for congestion, sinusitis, facial pressure, and seasonal allergies.",
    icon: Waves,
  },
  {
    title: "Tonsil Treatment",
    description: "Modern evaluation for enlarged tonsils, snoring, and repeated throat discomfort.",
    icon: Activity,
  },
  {
    title: "Throat Infection",
    description: "Care for sore throat, swallowing pain, inflammation, and recurring infections.",
    icon: Mic,
  },
  {
    title: "Voice & Swallowing Issues",
    description: "Specialized support for hoarseness, vocal strain, and swallowing concerns.",
    icon: PhoneCall,
  },
  {
    title: "Vertigo / Balance Problems",
    description: "Evaluation and treatment for dizziness, vertigo episodes, and balance disorders.",
    icon: RotateCw,
  },
  {
    title: "Pediatric ENT Care",
    description: "Child-friendly ENT consultations for ear, nose, and throat concerns.",
    icon: Baby,
  },
];

export const testimonials = [
  {
    name: "Riya Sharma",
    treatment: "Sinus Treatment",
    review:
      "The consultation felt thorough and reassuring. I finally got a treatment plan that actually reduced my long-term sinus flare-ups.",
  },
  {
    name: "Karan Malhotra",
    treatment: "Vertigo Care",
    review:
      "I appreciated how clearly every step was explained. Booking was easy, the clinic was calm, and I felt better after just a few visits.",
  },
  {
    name: "Sneha Verma",
    treatment: "Pediatric ENT",
    review:
      "My daughter was anxious before the appointment, but the doctor was incredibly patient and kind. The experience built trust immediately.",
  },
  {
    name: "Amit Rao",
    treatment: "Hearing Assessment",
    review:
      "Professional, punctual, and detail-oriented. The online booking and follow-up communication made the entire process very smooth.",
  },
];

export const bookingSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:15 AM",
  "11:00 AM",
  "12:00 PM",
  "02:30 PM",
  "03:15 PM",
  "04:00 PM",
  "05:30 PM",
];

export const contactDetails = {
  name: "Dr. Ananta Biswas",
  footerTitle: "Dr. Ananta Biswas, MS ENT, Master in otorhinolarygology",
  qualification: "Trained in endoscopic surgery",
  experience: "3 years",
  intro:
    "Dr. Ananta Biswas provides comprehensive ENT care with a calm, detail-oriented approach focused on diagnosis clarity and long-term recovery.",
  phone: "+91 97065 69044",
  email: "ananta3005@gmail.com",
  address: "Dr. Ananta Biswas | ENT Specialist | Head, Neck and ENT Surgeon Hojai",
  hours: [
    "Mon - Fri: 9:00 AM - 6:00 PM",
    "Saturday: 10:00 AM - 2:00 PM",
    "Sunday: Emergency consults by appointment",
  ],
  mapLabel: "Google Maps",
  mapTitle: "Dr. Ananta Biswas | ENT Specialist | Head, Neck and ENT Surgeon Hojai",
  mapEmbedQuery: "Dr. Ananta Biswas ENT Specialist Hojai",
  locationHref: "https://share.google/ZZSV1CIjADK6I9jXP",
  whatsapp: "https://wa.me/919706569044",
};

export const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const footerServices = [
  "Ear Infection Treatment",
  "Hearing Problems",
  "Sinus & Allergy Care",
  "Pediatric ENT Care",
];

export const aboutHighlights = [
  "ENT specialist",
  "Advanced diagnosis",
  "Personalized treatment",
  "Compassionate care",
];

export const contactCards = [
  {
    title: "Visit the Clinic",
    value: contactDetails.address,
    icon: MapPin,
  },
  {
    title: "Call for Assistance",
    value: contactDetails.phone,
    icon: PhoneCall,
  },
  {
    title: "Email for Queries",
    value: contactDetails.email,
    icon: Mail,
  },
];

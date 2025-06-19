import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

export const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  export const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

//   export const programs = [
//     { name: "Masterclass Training", href: "#masterclass" },
//     { name: "1-on-1 Mentorship", href: "#mentorship" },
//     { name: "Group Coaching", href: "#coaching" },
//     { name: "Business Blueprint", href: "#blueprint" },
//     { name: "Success Community", href: "#community" },
//   ];

  export const stats = [
    { icon: Users, value: "1,200+", label: "Success Stories" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: TrendingUp, value: "#50M+", label: "Generated Revenue" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
  ];

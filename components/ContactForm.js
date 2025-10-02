"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
    reset();
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-4xl font-bold text-center mb-4 text-blue-600"
          data-aos="fade-up"
        >
          Contactez-moi
        </h2>
        <p
          className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Un projet en tête ou envie de discuter ? N&apos;hésitez pas à me contacter !
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Champ Nom */}
            <motion.div data-aos="fade-up" data-aos-delay="300">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nom *
              </label>
              <input
                {...register("name", { required: "Le nom est requis" })}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                placeholder="Votre nom"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            {/* Champ Email */}
            <motion.div data-aos="fade-up" data-aos-delay="400">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                {...register("email", {
                  required: "L&apos;email est requis",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Adresse email invalide",
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                placeholder="votre.email@exemple.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </motion.div>
          </div>

          {/* Champ Sujet */}
          <motion.div data-aos="fade-up" data-aos-delay="450">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Sujet *
            </label>
            <input
              {...register("subject", { required: "Le sujet est requis" })}
              type="text"
              id="subject"
              className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              placeholder="Sujet de votre message"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-400">
                {errors.subject.message}
              </p>
            )}
          </motion.div>

          {/* Champ Message */}
          <motion.div data-aos="fade-up" data-aos-delay="500">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message *
            </label>
            <textarea
              {...register("message", { required: "Le message est requis" })}
              id="message"
              rows="6"
              className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical backdrop-blur-sm"
              placeholder="Parlez-moi de votre projet..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          {/* Bouton d'envoi */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-center"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-blue-700"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                "Envoyer le message"
              )}
            </button>
          </motion.div>
        </form>

                {/* Informations de contact supplémentaires */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="700">
          <h3 className="text-xl font-semibold text-white mb-6">
            Autres moyens de me contacter
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Email */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-blue-500/20 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span>{portfolioData.email}</span>
            </a>
            
            {/* Téléphone */}
            <a
              href={`tel:${portfolioData.phone}`}
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-blue-500/20 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span>{portfolioData.phone}</span>
            </a>
            
            {/* LinkedIn avec la bonne icône et URL */}
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-blue-500/20 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
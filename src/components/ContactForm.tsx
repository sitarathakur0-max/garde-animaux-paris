import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, User, Mail, MessageSquare, Heart } from 'lucide-react';
import { businessData } from '../data/business';

interface FormData {
  nom: string;
  telephone: string;
  email: string;
  nomAnimal: string;
  typeAnimal: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  telephone?: string;
  email?: string;
  nomAnimal?: string;
  typeAnimal?: string;
  message?: string;
}

export const ContactForm: React.FC<{ initialService?: string }> = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    telephone: '',
    email: '',
    nomAnimal: '',
    typeAnimal: 'Chat',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Veuillez renseigner votre nom complet.';
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Veuillez indiquer votre numéro de téléphone.';
    } else {
      const cleanPhone = formData.telephone.replace(/[\s.-]/g, '');
      if (cleanPhone.length < 9) {
        newErrors.telephone = 'Veuillez saisir un numéro de téléphone valide.';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez indiquer votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse email valide.';
    }

    if (!formData.nomAnimal.trim()) {
      newErrors.nomAnimal = "Veuillez préciser le prénom ou nom de l'animal.";
    }

    if (!formData.typeAnimal) {
      newErrors.typeAnimal = "Veuillez sélectionner le type d'animal.";
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez préciser vos dates et les besoins de garde.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Votre message doit contenir au moins 10 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulation de l'envoi côté client avec état de succès immédiat
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      nom: '',
      telephone: '',
      email: '',
      nomAnimal: '',
      typeAnimal: 'Chat',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div
        id="form-success-state"
        className="bg-[#FFFFFF] border border-[#DFCBB5] rounded-2xl p-8 sm:p-10 shadow-xs text-center space-y-6 animate-in fade-in duration-300"
      >
        <div className="w-16 h-16 rounded-full bg-[#F4EDE2] text-[#8C5836] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-bold text-[#241D17]">
            Demande de garde transmise
          </h3>
          <p className="text-sm text-[#55473C] max-w-md mx-auto leading-relaxed">
            Merci <strong>{formData.nom}</strong>. Votre demande de visite à domicile pour <strong>{formData.nomAnimal}</strong> ({formData.typeAnimal}) a bien été préparée.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] text-xs text-[#6A5A4D] space-y-1 text-left max-w-md mx-auto">
          <p className="font-semibold text-[#2C241E]">Pour un échange direct immédiat :</p>
          <p>
            Vous pouvez également nous joindre directement par téléphone au{' '}
            <a
              href={`tel:${businessData.phone.raw}`}
              className="font-bold text-[#8C5836] hover:underline"
            >
              {businessData.phone.display}
            </a>.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#EFE7DA] text-[#3D3227] hover:bg-[#E5DAC8] transition-colors cursor-pointer"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      id="pet-sitting-contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs space-y-5"
    >
      <div className="border-b border-[#F0E8DC] pb-4">
        <h3 className="font-serif text-2xl font-bold text-[#241D17]">
          Formulaire de contact
        </h3>
        <p className="text-xs sm:text-sm text-[#6A5A4D] mt-1">
          Décrivez-nous votre animal et vos dates pour organiser les visites à domicile.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nom */}
        <div className="space-y-1.5">
          <label htmlFor="input-nom" className="block text-xs font-semibold text-[#3D3227]">
            Votre nom complet *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9C8C7E]">
              <User className="w-4 h-4" />
            </div>
            <input
              id="input-nom"
              type="text"
              required
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              placeholder="Ex : Camille Martin"
              className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${
                errors.nom ? 'border-red-400 bg-red-50/20' : 'border-[#D9CABE] bg-[#FAF7F2]'
              } focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8C5836]/40`}
            />
          </div>
          {errors.nom && <p className="text-[11px] text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.nom}</p>}
        </div>

        {/* Téléphone */}
        <div className="space-y-1.5">
          <label htmlFor="input-telephone" className="block text-xs font-semibold text-[#3D3227]">
            Téléphone *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9C8C7E]">
              <Phone className="w-4 h-4" />
            </div>
            <input
              id="input-telephone"
              type="tel"
              required
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              placeholder="Ex : 06 12 34 56 78"
              className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${
                errors.telephone ? 'border-red-400 bg-red-50/20' : 'border-[#D9CABE] bg-[#FAF7F2]'
              } focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8C5836]/40`}
            />
          </div>
          {errors.telephone && <p className="text-[11px] text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.telephone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="input-email" className="block text-xs font-semibold text-[#3D3227]">
            Adresse email *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9C8C7E]">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="input-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Ex : camille@exemple.fr"
              className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${
                errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#D9CABE] bg-[#FAF7F2]'
              } focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8C5836]/40`}
            />
          </div>
          {errors.email && <p className="text-[11px] text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
        </div>

        {/* Nom de l'animal */}
        <div className="space-y-1.5">
          <label htmlFor="input-nom-animal" className="block text-xs font-semibold text-[#3D3227]">
            Nom de l’animal *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9C8C7E]">
              <Heart className="w-4 h-4" />
            </div>
            <input
              id="input-nom-animal"
              type="text"
              required
              value={formData.nomAnimal}
              onChange={(e) => setFormData({ ...formData, nomAnimal: e.target.value })}
              placeholder="Ex : Moka, Félix, Luna"
              className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${
                errors.nomAnimal ? 'border-red-400 bg-red-50/20' : 'border-[#D9CABE] bg-[#FAF7F2]'
              } focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8C5836]/40`}
            />
          </div>
          {errors.nomAnimal && <p className="text-[11px] text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.nomAnimal}</p>}
        </div>
      </div>

      {/* Type d'animal */}
      <div className="space-y-1.5">
        <label htmlFor="select-type-animal" className="block text-xs font-semibold text-[#3D3227]">
          Type d’animal *
        </label>
        <select
          id="select-type-animal"
          value={formData.typeAnimal}
          onChange={(e) => setFormData({ ...formData, typeAnimal: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D9CABE] bg-[#FAF7F2] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8C5836]/40"
        >
          <option value="Chat">Chat</option>
          <option value="Chien">Chien</option>
          <option value="Chat et Chien">Plusieurs animaux (Chat et Chien)</option>
          <option value="Autre animal de compagnie">Autre animal de compagnie</option>
        </select>
        {errors.typeAnimal && <p className="text-[11px] text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.typeAnimal}</p>}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="textarea-message" className="block text-xs font-semibold text-[#3D3227]">
          Message (dates souhaitées, fréquence des visites, consignes particulières) *
        </label>
        <div className="relative">
          <textarea
            id="textarea-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Bonjour, je recherche une garde à domicile pour mon chat du 12 au 18 du mois prochain avec passage pour repas, eau et présence quotidienne..."
            className={`w-full p-3.5 text-sm rounded-xl border ${
              errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#D9CABE] bg-[#FAF7F2]'
            } focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#8C5836]/40 leading-relaxed`}
          ></textarea>
        </div>
        {errors.message && <p className="text-[11px] text-red-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        id="submit-enquiry-btn"
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#8C5836] text-white font-medium hover:bg-[#744527] active:scale-99 transition-all shadow-xs disabled:opacity-70 cursor-pointer text-sm"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
            <span>Transmission en cours...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Envoyer la demande</span>
          </>
        )}
      </button>
    </form>
  );
};

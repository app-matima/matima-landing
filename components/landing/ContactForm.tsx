"use client";

import { useState, type FormEvent } from "react";
import clsx from "clsx";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-text-strong placeholder:text-text-hint focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(data.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Impossible d'envoyer le message. Vérifiez votre connexion.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-10 text-center shadow-lg">
        <CheckCircle2
          className="w-12 h-12 text-accent mx-auto mb-4"
          strokeWidth={2}
        />
        <h3 className="text-xl font-bold text-text-strong mb-2">
          Message envoyé !
        </h3>
        <p className="text-text-soft text-[15px] leading-relaxed mb-6">
          Merci pour votre message. Notre équipe vous répondra sous 48 h ouvrées
          à l&apos;adresse indiquée.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-accent hover:text-accent-hover font-semibold text-sm transition-colors cursor-pointer bg-transparent border-0"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-left"
    >
      <h3 className="text-xl font-bold text-text-strong mb-1">
        Contactez-nous
      </h3>
      <p className="text-text-soft text-sm mb-6">
        Une question ? Écrivez-nous, nous vous répondrons rapidement.
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Nom
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Nom *"
            className={inputClassName}
            disabled={status === "loading"}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email *"
            className={inputClassName}
            disabled={status === "loading"}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Téléphone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Téléphone"
            className={inputClassName}
            disabled={status === "loading"}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Message *"
            className={clsx(inputClassName, "resize-y min-h-[120px]")}
            disabled={status === "loading"}
          />
        </div>
      </div>

      {status === "error" && errorMessage && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full bg-accent hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] transition-colors cursor-pointer flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer"
        )}
      </button>
    </form>
  );
}

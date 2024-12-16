"use client"

import { FormEvent } from "react";
import { ModalContainer } from "@/components/modal/Container";

export default function ModalPage() {
  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(event)
  }
  return (
    <ModalContainer>
      <form onSubmit={handleSignup} className="relative flex flex-col items-center gap-4 p-8">
        <h1>Ønsker du å vite mer?</h1>
        <h3>Registrer deg i dag for å motta vår håndbok</h3>
        <span className="flex flex-col gap-2">
          <label>Navn</label>
          <input type="text" name="name" className="border p-2" placeholder="Skriv inn ditt navn" />
        </span>
        <span className="flex flex-col gap-2">
          <label>E-post</label>
          <input type="email" name="mail" className="border p-2" placeholder="Skriv inn din e-post" />
        </span>
        <span className="max-w-lg">
          <h4>
            Samtykkeerklæring
          </h4>
          <p>
            Ved å fylle ut dette skjemaet gir du oss tillatelse til å lagre ditt navn og din e-postadresse. Opplysningene brukes kun til å sende deg vårt nyhetsbrev. Du kan når som helst trekke tilbake samtykket ved å kontakte oss eller bruke avmeldingslenken i nyhetsbrevet.
          </p>
        </span>
        <button type="submit" className="bg-teamwork-primary-orange w-full md:w-fit px-6 py-3 text-base rounded-md font-semibold text-center text-white hover:bg-teamwork-primary-orange/90">Send meg håndbok på e-mail</button>
      </form>
    </ModalContainer>
  )
}
import { IUser } from "../types/IUser";

import ticketPattern from "/assets/images/pattern-ticket.svg";

export const GenerateTicket = (userData: IUser) => {
  const qrCode = "http://localhost:3003/" + userData.qrCode;

  return (
    <section className="text-white text-center">
      <h1 className="text-center text-4xl">Sveikiname, {userData.fullName}!</h1>
      <p className="text-lg my-4">
        Jūsų bilietas išsiųstas el. paštu {userData.email}. Taip pat
        informuosime jus jei kas nors keisis.
      </p>
      <div className="relative">
        <img src={ticketPattern} alt="ticket" />
        <div className="absolute top-1 left-3">Programavimo onferencija</div>
        <img className="absolute top-18 left-0.5" src={qrCode} alt="qr Code" />
      </div>
    </section>
  );
};

import { IUser } from "../types/IUser";
import { v4 as uuidv4 } from "uuid";

import ticketPattern from "/assets/images/pattern-ticket.svg";
import techinLogo from "/techin-logo.svg";
import githubIcon from "/assets/images/icon-github.svg";
import logomark from "/assets/images/logo-mark.svg";

export const GenerateTicket = (userData: IUser) => {
  const qrCode = "http://localhost:3003/" + userData.qrCode;
  const ticketNumber = uuidv4().split("-");

  return (
    <section className="text-white text-center">
      <h1 className="text-center text-4xl">Sveikiname, {userData.fullName}!</h1>
      <p className="text-lg my-10">
        Jūsų bilietas išsiųstas el. paštu{" "}
        <span className="text-orange-500">{userData.email}</span>. Taip pat
        informuosime jus jei kas nors keisis.
      </p>
      <div className="relative">
        <img src={ticketPattern} alt="ticket" />
        <div className="absolute top-1 left-3 flex gap-2">
          <img className="h-6" src={logomark} alt="logomark" />
          Programavimo onferencija
        </div>
        <p className="absolute top-10 left-5">2025-02-20 / </p>
        <img
          className="absolute top-10 left-30 h-6"
          src={techinLogo}
          alt="techin"
        />
        <img
          className="absolute bottom-1 left-0.5"
          src={qrCode}
          alt="qr Code"
        />
        <div className="absolute bottom-10 left-32">
          <p className="text-2xl font-semibold text-left">
            {userData.fullName}
          </p>
          <p className="flex gap-2">
            <img src={githubIcon} alt="githubicon" />
            {userData.githubName}
          </p>
        </div>
        <p className="absolute rotate-90 right-2 top-20 text-lg opacity-40">
          {"#" + ticketNumber[0].toUpperCase()}
        </p>
      </div>
    </section>
  );
};

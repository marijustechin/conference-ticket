import { useState } from "react";
import { TicketForm } from "../components/TicketForm";
import { IUser } from "../types/IUser";
import { GenerateTicket } from "../components/GenerateTicket";

export const HomePage = () => {
  const [user, setUser] = useState<IUser>();

  return (
    <main className="max-w-md mx-auto text-white">
      {user ? (
        <GenerateTicket {...user} />
      ) : (
        <TicketForm onSuccess={(data) => setUser(data)} />
      )}
    </main>
  );
};

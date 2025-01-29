import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema } from "../schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRegister } from "../api/register";
import { IUser } from "../types/IUser";

interface TicketFormProps {
  onSuccess: (userData: IUser) => void;
}

export const TicketForm = ({ onSuccess }: TicketFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      githubName: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof RegisterSchema>> = async (
    formData
  ) => {
    const res = await apiRegister(formData);
    onSuccess(res);
  };

  return (
    <section className="text-white text-center">
      <h1 className="text-center text-4xl">
        Jūsų kelionė į programavimo konferenciją 2025 prasideda čia!
      </h1>
      <p className="text-lg my-4">
        Rezervuokite vietą didžiausioje ateinančių metų programavimo
        konferencijoje.
      </p>

      <form
        className="max-w-sm mx-auto"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          {" "}
          {/* vardas ir pavarde */}
          <div className="flex flex-col">
            <label htmlFor="fullName">Vardas ir pavardė</label>
            <input
              className="border border-violet-500 focus:border-violet-500 rounded-lg px-2 py-3"
              id="fullName"
              type="text"
              autoComplete="off"
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className="text-center text-sm text-rose-500">
                {errors.fullName.message}
              </span>
            )}
          </div>
          {/* el pastas */}
          <div className="flex flex-col">
            <label htmlFor="email">El. paštas</label>
            <input
              className="border border-violet-500 focus:border-violet-500 rounded-lg px-2 py-3"
              id="email"
              type="email"
              autoComplete="off"
              placeholder="elpastoadresas@gmail.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-center text-sm text-rose-500">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* github vardas */}
          <div className="flex flex-col">
            <label htmlFor="githubName">GitHub naudotojo vardas</label>
            <input
              className="border border-violet-500 focus:border-violet-500 rounded-lg px-2 py-3"
              id="githubName"
              type="text"
              autoComplete="off"
              placeholder="@naudotojas"
              {...register("githubName")}
            />
            {errors.githubName && (
              <span className="text-center text-sm text-rose-500">
                {errors.githubName.message}
              </span>
            )}
          </div>
        </div>

        <button
          className="bg-orange-500 text-black rounded-lg w-full my-3 py-2 font-semibold cursor-pointer hover:bg-orange-400"
          type="submit"
        >
          Generuoti bilietą
        </button>
      </form>
    </section>
  );
};

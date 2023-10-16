"use client";
import { useFormState } from "~/components/FormContext";
import { LocationInfoForm } from "~/components/PersonalInfoForm";
import { PersonalInfoForm } from "~/components/LocationInfoForm";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <PersonalInfoForm />;
    case 2:
      return <LocationInfoForm />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6 w-full max-w-2xl  border  rounded-xl bg-white">
        <h1 className="text-center text-2xl font-semibold py-4">
          Kabir's Friendlist Registeration Form
        </h1>
        <div className="space-y-6">
          <ActiveStepFormComponent />
        </div>
      </div>
    </main>
  );
}

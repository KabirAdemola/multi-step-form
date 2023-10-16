import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";

type TFormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
};

export function PersonalInfoForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <div className="flex gap-1 flex-col">
        <label htmlFor="fullname">Full name</label>
        <input
          id="fullName"
          {...register("fullName")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          {...register("phoneNumber")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          id="dateOfBirth"
          {...register("dateOfBirth")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="gender">Gender</label>
        <select
              id="gender"
              {...register("gender")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Rather not say</option>
            </select>
      </div>
      <div className="flex justify-end">
        <button className="h-11 px-6 inline-block bg-blue-600 font-semibold text-white rounded-md">
          Next
        </button>
      </div>
    </form>
  );
}

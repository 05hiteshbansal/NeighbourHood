import StepForm from "./StepsForm";
import Steps from "./Steps";
export default function MultiStepPage() {
  const steps = [
    {
      number: 1,
      title: "User Info",
    },
    {
      number: 2,
      title: "User Address",
    },
    {
      number: 3,
      title: "Summary",
    },
  ];
  return (
    <div className="bg-blue-50 min-h-screen p-4">
      <div className="mx-auto w-full max-w-5xl p-4 bg-slate-50 border border-gray-300 rounded-lg shadow sm:p-4 md:p-6  grid grid-cols-12 gap-4 min-h-screen">
        {/* Steps */}
        <Steps steps={steps} />
        {/* Form */}
        <div className="rounded-lg col-span-full md:col-span-8">
          <StepForm />
        </div>
      </div>
    </div>
  );
}
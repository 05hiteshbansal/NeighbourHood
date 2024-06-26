"use client";
import Address from "./Forms/Address";
import Confirm from "./Forms/Confirm";
import PersonalInfo from "./Forms/PersonalInfo"
import { useRecoilState } from "recoil";
import { UserDataState } from "@/utils/Recoil/atom";
export default function StepForm() {
  const [step,setStep]=useRecoilState(UserDataState)
  //console.log(step);
  function renderFormByStep(step) {
    if (step === 1) {
      return <PersonalInfo />;
    } else if (step === 2) {
      return <Address/>;
    } else {
      return <Confirm/>;
    }
  }
  return(
      <>
      {renderFormByStep(step)}
      </>

  ) 
}
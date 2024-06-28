"use client";
import Address from "./Forms/Address";
import Confirm from "./Forms/Confirm";
import PersonalInfo from "./Forms/PersonalInfo"
import { useRecoilState } from "recoil";
import { UserDataState } from "@/utils/Recoil/atom";
import Upload from "./Forms/Upload";
export default function StepForm() {
  const [step,setStep]=useRecoilState(UserDataState)
  //console.log(step);
  function renderFormByStep(step) {
    if (step === 1) {
      return <PersonalInfo />;
    } else if (step === 2) {
      return <Address/>;
    } 
    else if(step===3){
      return <Upload/>
    }
    else {
      return <Confirm/>;
    }
  }
  return(
      <>
      {renderFormByStep(step)}
      </>

  ) 
}
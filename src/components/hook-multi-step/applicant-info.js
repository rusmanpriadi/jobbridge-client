import { Controller, useFormContext } from "react-hook-form";

import { validateEmail } from "@/lib/utils";

import { DatePickerSingle } from "../ui/date-picker-single";
import { FloatingLabelInput } from "../ui/floating-input";

const ApplicantInfo = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div>
      <h4 className="stepper_step_heading">NIK</h4>
      <div className="py-10 w-full flex items-center justify-center">
        <FloatingLabelInput
          id="nik"
          className="w-[500px]"
          label="Nomor Induk Kependudukan (sesuai KTP)"
          {...register("nik", { required: "Required" })}
          error={errors.nik?.message}
        />
        
        
      </div>
    </div>
  );
};

export default ApplicantInfo;

import { Controller, useFormContext } from "react-hook-form";


import { FloatingLabelInput } from "../ui/floating-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const EmploymentInfo = () => {
  const {
    control,
    trigger,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div>
      <h4 className="stepper_step_heading">Akun Login</h4>
      <div className="gap-2">
        <FloatingLabelInput
          id="nik"
          label="Nomor Induk Kependudukan (sesuai KTP)"
          {...register("nik", { required: "Required" })}
          error={errors.nik?.message}
        />

        <FloatingLabelInput
          id="password"
          className="w-[500px]"
          label="Password"
          type="password"
          {...register("password", { required: "Required" })}
          error={errors.password?.message}
        />
       
      </div>
    </div>
  );
};

export default EmploymentInfo;

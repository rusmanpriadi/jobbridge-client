import { useFormContext, Controller } from "react-hook-form";
import { validateEmail } from "@/lib/utils";

import { DatePickerSingle } from "../ui/date-picker-single";
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
const AddressInfo = () => {
  const {
    control,
    trigger,
    formState: { errors },
    register,
  } = useFormContext();

  
  return (
    <div>
      <h4 className="stepper_step_heading">Address Information</h4>
      <div className="stepper_step_container">
        <FloatingLabelInput
          id="name"
          label="Full name"
          {...register("name", { required: "Required" })}
          error={errors.name?.message}
        />
        <FloatingLabelInput
          id="email"
          label="Email"
          type="email"
          {...register("email", {
            required: "Required",
            validate: validateEmail,
          })}
          error={errors.email?.message}
        />


        <FloatingLabelInput
          id="no_tlp"
          label="Phone"
          type="tel"
          {...register("no_tlp", { required: "Required" })}
          error={errors.no_tlp?.message}
        />
        <FloatingLabelInput
          id="tempat_lahir"
          label="Tempat Lahir"
          type="text"
          {...register("tempat_lahir", { required: "Required" })}
          error={errors.tempat_lahir?.message}
        />
        <Controller
          name="tgl_lahir"
          control={control}
          rules={{ required: "Required" }}
          render={({
            field: { onChange, value, onBlur },
            fieldState: { invalid, error },
          }) => (
            <div>
              <DatePickerSingle
                placeholder="Pick a date"
                onSelect={onChange}
                selectedDate={value ? new Date(value) : null}
                onBlur={onBlur}
                floatingLabel="Date of birth"
              />
              {invalid && (
                <span className="text-destructive block !mt-[5px] text-[12px]">
                  {error?.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="jenis_kelamin"
          rules={{ required: "Required" }}
          control={control}
          render={({
            field: { onChange, value, onBlur },
            fieldState: { invalid, error },
          }) => (
            <div>
              <Select
                onValueChange={(value) => {
                  onChange(value);
                  trigger(["pria", "wanita"]);
                }}
                value={value}
                onOpenChange={(value) => !value && onBlur()}
              >
                <SelectTrigger
                  name="jenis_kelamin"
                  floatingLabel="Employment status"
                >
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                {invalid && (
                  <span className="text-destructive block !mt-[5px] text-[12px]">
                    {error?.message}
                  </span>
                )}
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Employment status</SelectLabel>
                    <SelectItem value="employed">Pria</SelectItem>
                    <SelectItem value="self-employed">Wanita</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        />
        <FloatingLabelInput
          id="alamat"
          label="Alamat"
          type="text"
          {...register("alamat", { required: "Required" })}
          error={errors.alamat?.message}
        />
        <FloatingLabelInput
          id="foto"
          label="Foto"
          type="file"
          {...register("foto", { required: "Required" })}
          error={errors.foto?.message}
        />
        {/* <FloatingLabelInput
          id="zipCode"
          label="Zip Code"
          type="number"
          {...register("zipCode", { required: "Required" })}
          error={errors.zipCode?.message}
        /> */}
      </div>
    </div>
  );
};

export default AddressInfo;

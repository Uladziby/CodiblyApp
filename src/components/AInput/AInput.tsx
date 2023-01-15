/** @format */
import { useController } from "react-hook-form";
import { StyledInput, StyledInputWrapper, StyledWrapper } from "./AInput.styles";
import { IAInputProps } from "./type";

export const AInput = ({ name, placeholder, type, className, control }: IAInputProps) => {
	const {
		field,
		fieldState: { error },
	} = useController({ control, name, defaultValue: "" });

	return (
		<StyledWrapper className={className}>
			<StyledInputWrapper>
				<StyledInput
					{...field}
					id={name}
					placeholder={placeholder}
					hasError={Boolean(error)}
					type={type}
				/>
			</StyledInputWrapper>
		</StyledWrapper>
	);
};

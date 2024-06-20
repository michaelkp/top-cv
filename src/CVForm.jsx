import NameInput from "./form-inputs/Name";

function CVForm() {
	return (
		<main>
			cv form
			<form method="post" name="cv-form" autoComplete="on">
				<NameInput />
			</form>
		</main>
	);
}

export default CVForm;

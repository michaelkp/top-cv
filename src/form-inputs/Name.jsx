function NameInput() {
	return (
		<label htmlFor="name-input">
			Name:
			<input
				type="text"
				name="name-input"
				autoComplete="on"
				autoCapitalize="words"
			/>
		</label>
	);
}

export default NameInput;

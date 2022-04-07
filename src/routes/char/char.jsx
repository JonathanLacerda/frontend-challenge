import React, { useState } from "react"

import { useSearchParams } from "react-router-dom"

export default function Char() {

	const [searchParams, setSearchParams] = useSearchParams();
	const [query, setQuery] = React.useState(
		searchParams.get("query")
	); 

	return (
		<main style={{ padding: "1rem 0" }}>
			CHAR
		</main>
	);
}
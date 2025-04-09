export default function HomePage() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
      <img src="https://static.vecteezy.com/system/resources/previews/003/385/823/non_2x/homemade-cake-banner-vector.jpg"></img>
      <button className="button-primary">
        Primary Button
      </button>
      <button className="button-secondary">
        Secondary Button
      </button>
      <h1>Large Heading</h1>
      <h2>Subtitle Heading</h2>
      <h3>Medium Heading</h3>
      <p>Paragraph</p>
    </main>
  );
}
export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/back.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative flex items-center justify-center w-full h-full">
        <h1 className="hero-text">COMING SOON</h1>
      </div>
    </main>
  );
}
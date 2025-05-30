export default function Header() {
  return (
    <header className="flex items-center gap-2 p-4 text-white bg-gradient-to-r from-[#672280] to-[#A626D3]">
      <img
        src="https://scrimba.com/blobs/sha1:ee3d2e1537021c55cfbfc3e54d0a9dec883a2f77.png"
        alt="Logo"
        className="h-10 w-10"
      />
      <h1 className="text-2xl font-bold">Meme Generator</h1>
    </header>
  );
}

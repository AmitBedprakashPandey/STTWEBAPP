export default function Loading({ params }) {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(2, 2, 2, 0.5)" }}
        className="bg-[`rgb(0,0,0,0.65)`] absolute top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center"
      >
        <label className="bg-white p-3">Loading...</label>
      </div>
    </>
  );
}

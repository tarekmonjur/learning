export default function Loading() {
  return (
    <dialog
        open
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
          justifyContent: 'center',
          display: 'flex',
          border: 'none',
        }}
      >
        <div style={{ margin: 'auto',}}>Loading</div>
      </dialog>
  );
}
